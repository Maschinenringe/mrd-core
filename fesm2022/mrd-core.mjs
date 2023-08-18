import { take, finalize, tap, takeUntil, switchMap, catchError } from 'rxjs/operators';
import * as _ from 'underscore';
import { Subject, Observable, forkJoin, of } from 'rxjs';
import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import * as moment from 'moment';

/** Diese Klasse kümmert sich um die Speicherverwaltung von Subscriptions.
 Diese erzeugen Memory-Leaks, wenn sie nicht sauber gelöscht werden. */
class SubscriptionManager {
    // Alle benannten Subscriptions werden hier gecached
    static subscriptions = {};
    /** Subscription mit einem Namen. Diese Funktion ist nützlich,
     falls eine Subscription öfters aufgerufen wird und die vorherige, falls
     noch nicht abgeschlossen, beendet werden soll (HTTP Aufrufe). */
    static subscribeAs(name, observable, handler) {
        const sub = observable
            .pipe(take(1), finalize((...args) => {
            if (_.isFunction(handler.onFinished)) {
                handler.onFinished(...args);
                if (sub) {
                    this.deleteSubscription(name);
                }
            }
        }))
            .subscribe((...args) => {
            if (_.isFunction(handler.onSuccess)) {
                handler.onSuccess(...args);
            }
        }, (...args) => {
            if (_.isFunction(handler.onError)) {
                handler.onError(...args);
            }
        });
        this.pushSubscription(name, sub);
        return sub;
    }
    /** Funktion für einmalige Subscriptions (z.B.: Initialisierungsaufrufe) */
    static subscribe(observable, handler) {
        const sub = observable
            .pipe(take(1), finalize((...args) => {
            if (_.isFunction(handler.onFinished)) {
                handler.onFinished(...args);
                // if (sub) {
                //   this.deleteSubscription();
                // }
            }
        }))
            .subscribe((...args) => {
            if (_.isFunction(handler.onSuccess)) {
                handler.onSuccess(...args);
            }
        }, (...args) => {
            if (_.isFunction(handler.onError)) {
                handler.onError(...args);
            }
        });
        return sub;
    }
    static pushSubscription(name, subscription) {
        this.deleteSubscription(name);
        SubscriptionManager.subscriptions[name] = subscription;
    }
    static deleteSubscription(name) {
        const sub = SubscriptionManager.subscriptions[name];
        if (sub) {
            sub.unsubscribe();
            delete SubscriptionManager.subscriptions[name];
        }
    }
}

class Util {
    static isDefined(obj) {
        return obj !== null && obj !== undefined;
    }
    static armUrlWithSearchParams(url, queryParams) {
        if (!queryParams || _.isEmpty(queryParams)) {
            return url;
        }
        _.each(queryParams, (value, key) => {
            const querySelector = url.indexOf('?') === -1 ? '?' : '&';
            url = `${url}${querySelector}${key}=${value}`;
        });
        return url;
    }
    static createEntityUrl(url, id) {
        return `${url}/${id}`;
    }
    static getBrowser() {
        const ua = navigator.userAgent;
        let tem;
        let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null) {
                return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        tem = ua.match(/version\/(\d+)/i);
        if (tem != null) {
            M.splice(1, 1, tem[1]);
        }
        return M.join(' ');
    }
    static getCurrentUnixTimestamp() {
        return Math.round((new Date()).getTime() / 1000);
    }
    static guid() {
        const s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    static transformUmlaute(value) {
        return value
            .replace('Ä', 'Ae')
            .replace('ä', 'ae')
            .replace('Ö', 'Oe')
            .replace('ö', 'oe')
            .replace('Ü', 'Ue')
            .replace('ü', 'ue');
    }
    static sortAlpabetically(list, attribute) {
        const resultList = _.sortBy(list, (item) => this.transformUmlaute(item[attribute]).toUpperCase());
        return resultList;
    }
}

class ItemStore {
    identifier;
    transform;
    onChanged = new Subject();
    items$ = {};
    transformedItems$ = [];
    constructor(identifier, transform) {
        this.identifier = identifier;
        this.transform = transform;
    }
    updateItems(items) {
        this.clear();
        items = items || [];
        for (const item of items) {
            this.items$[item[this.identifier]] = item;
        }
        this.internalTransform$();
    }
    clear() {
        this.items$ = {};
        this.transformedItems$ = [];
    }
    remove(item) {
        if (item) {
            delete this.items$[item[this.identifier]];
            this.internalTransform$();
        }
    }
    removeByIdentifier(identifier) {
        if (Util.isDefined(identifier)) {
            delete this.items$[identifier];
            this.internalTransform$();
        }
    }
    update(item) {
        if (item) {
            this.items$[item[this.identifier]] = item;
            this.internalTransform$();
        }
    }
    push(item) {
        if (item) {
            this.items$[item[this.identifier]] = item;
            this.internalTransform$();
        }
    }
    internalTransform$() {
        this.transformedItems$ = Object.values(this.items$);
        if (this.transform) {
            this.transformedItems$ = this.transform(this.transformedItems$);
        }
        this.onChanged.next(this.transformedItems$);
    }
    get items() {
        return this.transformedItems$;
    }
}

class RestHandler {
    http;
    url;
    observer;
    identifier;
    constructor(http, url, observer, identifier) {
        this.http = http;
        this.url = url;
        this.observer = observer;
        this.identifier = identifier;
    }
    create(model, getParams, httpOptions) {
        this.observer.isCreatingItem = true;
        return this.http.post(Util.armUrlWithSearchParams(this.url, getParams), model, httpOptions)
            .pipe(tap((result) => {
            this.observer.onItemCreated.next(result);
        }), finalize(() => {
            this.observer.isCreatingItem = false;
        }));
    }
    destroy(id, getParams, httpOptions) {
        this.observer.isDestoyingItem = true;
        return this.http.delete(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, id), getParams), httpOptions).pipe(tap(() => {
            this.observer.onItemDestroyed.next(id);
        }), finalize(() => {
            this.observer.isDestoyingItem = false;
        }));
    }
    partialUpdate(model, getParams, httpOptions) {
        this.observer.isPartiallyUpdatingItem = true;
        return this.http.patch(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, model[this.identifier]), getParams), model, httpOptions).pipe(tap((result) => {
            this.observer.onItemPartialUpdated.next(result);
        }), finalize(() => {
            this.observer.isPartiallyUpdatingItem = false;
        }));
    }
    save(model, getParams, httpOptions) {
        this.observer.isSavingItem = true;
        let observable;
        if (Util.isDefined(model[this.identifier])) {
            observable = this.update(model, getParams, httpOptions);
        }
        else {
            observable = this.create(model, getParams, httpOptions);
        }
        return observable
            .pipe(tap((result) => {
            this.observer.onItemSaved.next(result);
        }), finalize(() => {
            this.observer.isSavingItem = false;
        }));
    }
    set(model, getParams, httpOptions) {
        this.observer.isSavingItem = true;
        let observable;
        this.observer.isUpdatingItem = true;
        observable = this.http.put(Util.armUrlWithSearchParams(this.url, getParams), model, httpOptions).pipe(tap((result) => {
            this.observer.onItemUpdated.next(result);
        }), finalize(() => {
            this.observer.isUpdatingItem = false;
        }));
        return observable
            .pipe(tap((result) => {
            this.observer.onItemSaved.next(result);
        }), finalize(() => {
            this.observer.isSavingItem = false;
        }));
    }
    update(model, getParams, httpOptions) {
        this.observer.isUpdatingItem = true;
        return this.http.put(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, model[this.identifier]), getParams), model, httpOptions).pipe(tap((result) => {
            this.observer.onItemUpdated.next(result);
        }), finalize(() => {
            this.observer.isUpdatingItem = false;
        }));
    }
}

class SubscriptionHandler {
    onSuccess;
    onError;
    onFinished;
    constructor(onSuccess, onError, onFinished) {
        this.onSuccess = onSuccess;
        this.onError = onError;
        this.onFinished = onFinished;
    }
}

/** Abstracte Klasse von der alle Komponenten und Services erben. Sie stellt eine Speicherverwaltung für Observables bereit. */
class BaseObject {
    /** Wird benutzt um Observables bei der Zerstörung einer Komponente auszulösen.
     * Wird im ngOnDestroy ausgelöst.
     */
    $unsubscribe = new Subject();
    /** Funktion zur dauerhaften Überwachung von Subscriptions. Speicher wird bei Zerstörung der Komponente freigegeben. */
    watch(observable, handler) {
        return observable
            .pipe(takeUntil(this.$unsubscribe), finalize((...args) => {
            if (handler.onFinished) {
                handler.onFinished(...args);
            }
        }))
            .subscribe((...args) => {
            if (handler.onSuccess) {
                handler.onSuccess(...args);
            }
        }, (...args) => {
            if (handler.onError) {
                handler.onError(...args);
            }
        });
    }
    /** Proxy für SubscriptionManager.subscribe */
    subscribe(observable, handler) {
        return SubscriptionManager.subscribe(observable, handler);
    }
    /** Proxy für SubscriptionManager.subscribeAs */
    subscribeAs(name, observable, handler) {
        return SubscriptionManager.subscribeAs(name, observable, handler);
    }
    /** Alle Observables die mit watch überwacht werden, werden hier ausgelöst. Angular kümmert sich im den Aufruf.
     *  Falls das Kind auch das Interface 'OnDestroy' implementiert, nicht vergessen super.ngOnDestroy() auszurufen, oder der Speicher
     *  wird nicht freigegeben.
     */
    ngOnDestroy() {
        this.$unsubscribe.next();
        this.$unsubscribe.complete();
    }
    /** @nocollapse */ static ɵfac = function BaseObject_Factory(t) { return new (t || BaseObject)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: BaseObject, selectors: [["ng-component"]], decls: 0, vars: 0, template: function BaseObject_Template(rf, ctx) { }, encapsulation: 2 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseObject, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], null, null); })();

class ValidatorRequired {
    hasError = false;
    error = 'Pflichtfeld';
    value;
    constructor(error) {
        if (error) {
            this.error = error;
        }
    }
    validator() {
        return (input) => {
            this.value = input.value;
            return this.validate();
        };
    }
    validate() {
        if (_.isDate(this.value)) {
            this.hasError = false;
            return null;
        }
        if (moment.isMoment(this.value)) {
            this.hasError = false;
            return null;
        }
        if (_.isNumber(this.value)) {
            this.hasError = false;
            return null;
        }
        if (_.isString(this.value)) {
            if (this.value.length > 0) {
                this.hasError = false;
                return null;
            }
            else {
                this.hasError = true;
                return { required: true };
            }
        }
        if (_.isBoolean(this.value)) {
            this.hasError = false;
            return null;
        }
        if (!this.value || _.isEmpty(this.value)) {
            this.hasError = true;
            return { required: true };
        }
        else {
            this.hasError = false;
            return null;
        }
    }
}

class AccessableFormControl {
    control;
    showAs;
    convertTo;
    required$;
    validators$;
    blocked$;
    initialize(formState, validators) {
        this.control = new FormControl(formState, null, null);
        this.validateWith(validators);
        this.setValue(formState);
    }
    validateWith(validators = []) {
        this.validators$ = validators;
        this.control.setValidators(_.map(validators, (v) => {
            return v.validator();
        }));
        this.required$ = false;
        _.each(this.validators$, (v) => {
            if (v instanceof ValidatorRequired) {
                this.required$ = true;
            }
        });
        this.control.updateValueAndValidity();
        return this;
    }
    setValue(value) {
        if (this.showAs) {
            this.control.setValue(this.showAs(value));
        }
        else {
            this.control.setValue(value);
        }
        return this;
    }
    reset(value) {
        if (this.showAs) {
            this.control.reset(this.showAs(value));
        }
        else {
            this.control.reset(value);
        }
        return this;
    }
    markAsUsed() {
        this.control.markAsDirty();
        this.control.markAsTouched();
        this.control.updateValueAndValidity();
        return this;
    }
    markAsUnused() {
        _.each(this.validators$, (validator) => validator.hasError = false);
        this.control.updateValueAndValidity();
        this.control.markAsPristine();
        this.control.markAsUntouched();
        return this;
    }
    markAsDirty() {
        this.control.markAsDirty();
        return this;
    }
    markAsTouched() {
        this.control.markAsTouched();
        return this;
    }
    disable() {
        this.control.disable();
        return this;
    }
    enable() {
        this.control.enable();
        return this;
    }
    blockControls() {
        this.blocked$ = true;
    }
    unblockControls() {
        this.blocked$ = false;
    }
    get disabled() {
        return this.control.disabled;
    }
    get valid() {
        if (this.control.disabled) {
            return true;
        }
        return !this.error;
    }
    get validators() {
        return this.validators$;
    }
    get error() {
        return _.find(this.validators$, (v) => v.hasError);
    }
    get value() {
        if (this.convertTo) {
            return this.convertTo(this.control.value);
        }
        else {
            return this.control.value;
        }
    }
    set value(value) {
        this.setValue(value);
    }
    get valueChanges() {
        return Observable.create((observer) => {
            const sub = this.control.valueChanges
                .subscribe(() => {
                if (!this.blocked) {
                    observer.next(this.value);
                }
            }, null, () => {
                sub.unsubscribe();
            });
        });
    }
    get required() {
        return this.required$;
    }
    get touched() {
        return this.control.touched;
    }
    get dirty() {
        return this.control.dirty;
    }
    get blocked() {
        return this.blocked$;
    }
}

class AccessableFormGroup {
    control;
    fields$;
    changed$ = new Subject();
    initialize(fields) {
        this.control = new FormGroup(_.mapObject(fields, (field) => {
            return field.control;
        }));
        this.fields$ = fields;
    }
    markAsUsed() {
        _.each(this.fields$, (field) => field.markAsUsed());
        return this;
    }
    markAsUnused() {
        _.each(this.fields$, (field) => field.markAsUnused());
        return this;
    }
    markAsDirty() {
        _.each(this.fields$, (field) => field.markAsDirty());
        return this;
    }
    markAsTouched() {
        _.each(this.fields$, (field) => field.markAsTouched());
        return this;
    }
    reset(model, propagateChanges = true) {
        if (!Util.isDefined(model)) {
            model = {};
        }
        _.each(this.fields$, (field, key) => field.reset(model[key]));
        if (propagateChanges) {
            this.changed$.next();
        }
        return this;
    }
    get fields() {
        return this.fields$;
    }
    get value() {
        const ret = {};
        _.each(this.fields$, (field, key) => ret[key] = field.value);
        return ret;
    }
    get dirty() {
        return this.control.dirty;
    }
    get valid() {
        return this.control.valid;
    }
    get touched() {
        return this.control.touched;
    }
    disable() {
        this.control.disable();
        return this;
    }
    enable() {
        this.control.enable();
        return this;
    }
    get disabled() {
        return this.control.disabled;
    }
    get enabled() {
        return this.control.enabled;
    }
    get changed() {
        return this.changed$.asObservable();
    }
}

const Type = Function;
class AccessableFormArray {
    validators$ = [];
    control;
    type;
    required$ = false;
    entries$;
    initialize(type) {
        this.control = new FormArray([]);
        this.type = type;
        this.entries$ = [];
    }
    push(entry) {
        const item = this.generateFormEntry(entry);
        this.control.push(item.control);
        this.entries$.push(item);
        return item;
    }
    removeAt(index) {
        this.control.removeAt(index);
        this.entries$ = _.reject(this.entries$, (e, round) => {
            return round === index;
        });
        let markAsUsed = false;
        for (const entry of this.entries$) {
            markAsUsed = markAsUsed || entry.dirty;
        }
        markAsUsed ? this.markAsUsed() : this.markAsUnused();
    }
    validateWith(validators) {
        if (!Util.isDefined(validators)) {
            validators = [];
        }
        if (_.isArray(validators)) {
            this.validators$ = validators;
        }
        this.control.setValidators(_.map(validators, (v) => v.validator()));
        this.required$ = false;
        _.each(this.validators$, (v) => {
            if (v instanceof ValidatorRequired) {
                this.required$ = true;
            }
        });
        this.control.updateValueAndValidity();
        return this;
    }
    clearValidators() {
        this.validators$ = [];
    }
    generateFormEntry(value) {
        const validation = new this.type();
        validation.reset(value);
        return validation;
    }
    get errors() {
        return _.compact(_.map(this.validators$, (e) => {
            if (e.hasError) {
                return e.error;
            }
            return null;
        }));
    }
    get error() {
        return _.find(this.validators$, (v) => {
            return v.hasError;
        });
    }
    get validators() {
        return this.validators$;
    }
    get required() {
        return this.required$;
    }
    get dirty() {
        return this.control.dirty;
    }
    get touched() {
        return this.control.touched;
    }
    get valid() {
        return this.control.valid;
    }
    get value() {
        const ret = [];
        for (const entry of this.entries$) {
            ret.push(entry.value);
        }
        return ret;
    }
    get entries() {
        return this.entries$;
    }
    disable() {
        this.control.disable();
        return this;
    }
    enable() {
        this.control.enable();
        for (const entry of this.entries$) {
            entry.enable();
        }
        return this;
    }
    markAsDirty() {
        this.control.markAsDirty();
        for (const entry of this.entries$) {
            entry.markAsDirty();
        }
        return this;
    }
    markAsTouched() {
        this.control.markAsTouched();
        for (const entry of this.entries$) {
            entry.markAsTouched();
        }
        return this;
    }
    markAsUnused() {
        this.control.markAsUntouched();
        this.control.markAsPristine();
        for (const entry of this.entries$) {
            entry.markAsUnused();
        }
        return this;
    }
    markAsUsed() {
        this.control.markAsTouched();
        this.control.markAsDirty();
        for (const entry of this.entries$) {
            entry.markAsUsed();
        }
        return this;
    }
    reset(models) {
        this.entries$ = [];
        this.control.clear();
        if (Util.isDefined(models) && _.isArray(models)) {
            for (const model of models) {
                this.push(model);
            }
        }
        return this;
    }
}

class ReadonlyRestServiceObserver {
    onItemFetched = new Subject();
    onItemsFetched = new Subject();
    isFetchingItem$;
    isFetchingItems$;
    constructor() {
        this.isFetchingItem$ = false;
        this.isFetchingItems$ = false;
    }
    isActivate() {
        return !this.isFetchingItem && !this.isFetchingItems;
    }
    set isFetchingItems(fetching) {
        this.isFetchingItems$ = fetching;
    }
    get isFetchingItems() {
        return this.isFetchingItems$;
    }
    set isFetchingItem(fetching) {
        this.isFetchingItem$ = fetching;
    }
    get isFetchingItem() {
        return this.isFetchingItem$;
    }
}

class ReadonlyRestHandler {
    http;
    url;
    observer;
    identifier;
    constructor(http, url, observer) {
        this.http = http;
        this.url = url;
        this.observer = observer;
    }
    all(searchParams, httpOptions) {
        this.observer.isFetchingItems = true;
        return this.http.get(Util.armUrlWithSearchParams(this.url, searchParams), httpOptions)
            .pipe(tap((result) => {
            this.observer.onItemsFetched.next(result);
        }), 
        // catchError( _.bind(this.serviceErrorHandler.catchError, this.serviceErrorHandler) as (error: any) => Observable<any> ),
        finalize(() => {
            this.observer.isFetchingItems = false;
        }));
    }
    show(id, getParams, httpOptions) {
        this.observer.isFetchingItem = true;
        return this.http.get(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, id), getParams), httpOptions)
            .pipe(tap((result) => {
            this.observer.onItemFetched.next(result);
        }), finalize(() => {
            this.observer.isFetchingItem = false;
        }));
    }
}

class AbstractReadonlyRestservice extends BaseObject {
    identifier;
    observer;
    constructor(restServiceObserver) {
        super();
        this.observer = Util.isDefined(restServiceObserver) ? restServiceObserver :
            new ReadonlyRestServiceObserver();
    }
    all(searchParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).all(searchParams, httpOptions);
    }
    show(id, getParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).show(id, getParams, httpOptions);
    }
}

class RestServiceObserver extends ReadonlyRestServiceObserver {
    onItemCreated = new Subject();
    onItemUpdated = new Subject();
    onItemDestroyed = new Subject();
    onItemPartialUpdated = new Subject();
    onItemSaved = new Subject();
    isCreatingItem$;
    isUpdatingItem$;
    isDestoyingItem$;
    isPartiallyUpdatingItem$;
    isSavingItem$;
    constructor() {
        super();
        this.isCreatingItem$ = false;
        this.isUpdatingItem$ = false;
        this.isDestoyingItem$ = false;
        this.isPartiallyUpdatingItem$ = false;
    }
    isActivate() {
        return super.isActivate() &&
            !this.isCreatingItem$ &&
            !this.isUpdatingItem$ &&
            !this.isDestoyingItem$ &&
            !this.isPartiallyUpdatingItem$ &&
            !this.isSavingItem$;
    }
    set isCreatingItem(isCreating) {
        this.isCreatingItem$ = isCreating;
    }
    get isCreatingItem() {
        return this.isCreatingItem$;
    }
    set isUpdatingItem(isUpdating) {
        this.isUpdatingItem$ = isUpdating;
    }
    get isUpdatingItem() {
        return this.isUpdatingItem$;
    }
    set isDestoyingItem(isDestroying) {
        this.isDestoyingItem$ = isDestroying;
    }
    get isDestoyingItem() {
        return this.isDestoyingItem$;
    }
    set isPartiallyUpdatingItem(isUpdating) {
        this.isPartiallyUpdatingItem$ = isUpdating;
    }
    get isPartiallyUpdatingItem() {
        return this.isPartiallyUpdatingItem$;
    }
    set isSavingItem(isSaving) {
        this.isSavingItem$ = isSaving;
    }
    get isSavingItem() {
        return this.isSavingItem$;
    }
}

class AbstractRestservice extends AbstractReadonlyRestservice {
    constructor() {
        super(new RestServiceObserver());
    }
    create(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).create(model, getParams, httpOptions);
    }
    destroy(id, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).destroy(id, getParams, httpOptions);
    }
    partialUpdate(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .partialUpdate(model, getParams, httpOptions);
    }
    save(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).save(model, getParams, httpOptions);
    }
    update(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).update(model, getParams, httpOptions);
    }
}

class ValidatorCustom {
    value;
    constructor() {
    }
    validator() {
        return null;
    }
    validate() {
        return null;
    }
}

/** Hier werden alle von der Applikation genutzten REGEX gespeichert. */
const REGEX = {
    /** Regex für eine Zahl. Jede Zahl sollte damit erkannt werden */
    NUMBER: /^-?[0-9]+([,.][0-9]+)?$/,
    /** Die Representation einer (Gleitkomma)Zahl, die der Anwender eingeben darf */
    INPUT_NUMBER: /^[0-9]+(,[0-9]+)?$/,
    INTEGER: /^[0-9]+$/,
    SIGNED_INTEGER: /^-?[0-9]+$/,
    /** Offizieller RFC 5322 Standart regex */
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    POSTAL_CODE: /^[0-9]{5}$/,
    SPECIAL_CHARS_REGEX: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
    DATE: /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/
};

class ValidatorEmail {
    hasError = false;
    error = 'Bitte geben Sie eine gültige E-Mail ein';
    value;
    constructor(error) {
        if (error) {
            this.error = error;
        }
    }
    validator() {
        return (input) => {
            this.value = input.value;
            return this.validate();
        };
    }
    validate() {
        if (!this.value) {
            return null;
        }
        if (this.value && REGEX.EMAIL.test(this.value.toString())) {
            this.hasError = false;
            return null;
        }
        else {
            this.hasError = true;
            return { invalidEmail: true };
        }
    }
}

class ValidatorFixedValue {
    comparator;
    error;
    hasError;
    value$;
    constructor(comparator, error = null) {
        this.comparator = comparator;
        this.error = error;
    }
    validate() {
        this.hasError = false;
        if (this.comparator === this.value$) {
            return null;
        }
        else {
            this.hasError = true;
            return { validatorFixed: true };
        }
    }
    validator() {
        return (input) => {
            this.value$ = input.value;
            return this.validate();
        };
    }
}

class ValidatorFloat {
    digitsBefore;
    digitsAfter;
    hasError = false;
    error = 'Bitte geben Sie eine valide Zahl ein';
    value;
    constructor(digitsBefore, digitsAfter) {
        this.digitsBefore = digitsBefore;
        this.digitsAfter = digitsAfter;
    }
    validator() {
        return (input) => {
            this.value = input.value;
            return this.validate();
        };
    }
    validate() {
        this.hasError = false;
        this.error = 'Bitte geben Sie eine valide Zahl ein';
        let validAmountDisgitsBefore = false;
        let validAmountDisgitsAfter = false;
        if (!this.value) {
            return null;
        }
        if (this.value && REGEX.INPUT_NUMBER.test(this.value.toString())) {
            const numberSplitted = this.value.toString().split(',');
            if (Util.isDefined(this.digitsBefore) && this.digitsAfter === 0 && numberSplitted.length === 2) {
                this.hasError = true;
                this.error = 'Es sind keine Nachkommastellen erlaubt';
                return { invalidFloat: true };
            }
            if (numberSplitted.length !== 2) {
                if (Util.isDefined(this.digitsBefore)) {
                    if (this.value.length > this.digitsBefore) {
                        this.error = `Bitte runden Sie die Zahl auf ${this.digitsBefore === 1 ? 'eine Stelle' : this.digitsBefore.toString() + ' Stellen'} vor dem Komma`;
                        this.hasError = true;
                        return { invalidFloat: true };
                    }
                }
                this.hasError = false;
                return null;
            }
            if (Util.isDefined(this.digitsBefore) && this.digitsBefore > 0) {
                validAmountDisgitsBefore = numberSplitted[0].length <= this.digitsBefore;
                if (!validAmountDisgitsBefore) {
                    this.error = `Bitte runden Sie die Zahl auf ${this.digitsBefore === 1 ? 'eine Stelle' : this.digitsBefore.toString() + ' Stellen'} vor dem Komma`;
                }
            }
            else {
                validAmountDisgitsBefore = true;
            }
            if (Util.isDefined(this.digitsAfter) && this.digitsAfter > 0) {
                validAmountDisgitsAfter = numberSplitted[1].length <= this.digitsAfter;
                if (!validAmountDisgitsAfter) {
                    this.error = `Bitte runden Sie die Zahl auf ${this.digitsAfter === 1 ? ' eine Stelle' : this.digitsAfter.toString() + ' Stellen'} nach dem Komma`;
                }
            }
            else {
                validAmountDisgitsAfter = true;
            }
            this.hasError = !(validAmountDisgitsBefore && validAmountDisgitsAfter);
            if (this.hasError) {
                return { invalidFloat: true };
            }
            return null;
        }
        else {
            this.hasError = true;
            return { invalidFloat: true };
        }
    }
}

class ValidatorInteger {
    allowNegativeValues$;
    error = 'Bitte geben Sie eine ganze Zahl ein';
    hasError;
    value$;
    regex$;
    constructor(allowNegativeValues$ = false) {
        this.allowNegativeValues$ = allowNegativeValues$;
        if (allowNegativeValues$) {
            this.regex$ = REGEX.SIGNED_INTEGER;
        }
        else {
            this.regex$ = REGEX.INTEGER;
        }
    }
    validate() {
        this.hasError = false;
        if (!this.value$) {
            return null;
        }
        if (!this.regex$.test(this.value$)) {
            this.hasError = true;
            return { invalidInteger: true };
        }
        return null;
    }
    validator() {
        return (input) => {
            this.value$ = input.value;
            return this.validate();
        };
    }
}

class ValidatorPostalCode {
    hasError = false;
    error = 'Bitte geben Sie eine gültige Postleitzahl ein';
    value;
    constructor(error) {
        if (error) {
            this.error = error;
        }
    }
    validator() {
        return (input) => {
            this.value = input.value;
            return this.validate();
        };
    }
    validate() {
        this.hasError = false;
        if (!this.value) {
            return null;
        }
        if (this.value && REGEX.POSTAL_CODE.test(this.value.toString())) {
            this.hasError = false;
            return null;
        }
        else {
            this.hasError = true;
            return { invalidPostalCode: true };
        }
    }
}

class TypeConverter {
    /** Versucht den Wert in eine Zahl zu konvertieren. */
    static toNumber(value) {
        // Falls null oder undefined übergeben wurde, brechen wir ab
        if (!value) {
            return value;
        }
        // Falls der Wert bereits eine Zahl ist, sind wir fertig
        if (_.isNumber(value)) {
            return value;
        }
        // Falls der Wert ein String ist, testen wir, ob er aussieht wie eine Zahl und versuchen ihn anschließend zu konvertieren
        if (_.isString(value) && REGEX.NUMBER.test(value)) {
            return TypeConverter.convertInputStringToNumber(value);
        }
        // Wir haben keine Regel für die Konvertierung gefunden
        return value;
    }
    /** Nimmt eine Zahl und gibt eine deutsche Representation dieses Wertes zurück */
    static asGermanFloat(value, stellen) {
        if (value === null || value === undefined) {
            return undefined;
        }
        if (!_.isUndefined(stellen) && _.isNumber(value)) {
            value = value.toFixed(stellen);
        }
        return value.toString().replace('.', ',');
    }
    /** Erzeugt ein moment object und setzt dieses auf UTC, falls dies noch nicht geschehen ist. */
    /*public static utcDate(...args: any[]): moment.Moment {
      const isDefined = _.every(args, (arg: any) => Util.isDefined(arg));
      if (!isDefined) {
        return undefined;
      }
      const mObject = moment(...args);
      if (mObject.isUTC()) {
        return mObject;
      } else {
        return mObject.utc(true);
      }
    }*/
    /** Konvertiert ein moment Object in die lokale Zeitzone (Entfernt UTC) */
    /*public static toLocalDate(mObject: moment.Moment): moment.Moment {
      if (!Util.isDefined(mObject)) {
        return undefined;
      }
      const param = moment(mObject);
      if (param.isUTC()) {
        return param.local(true);
      } else {
        return param;
      }
    }*/
    static booleanNumberToSting(n) {
        return n === 1 ? 'Ja' : 'Nein';
    }
    /** Konvertiert ein Moment Object zu einem Date Object */
    /*public static toJSDate(mObject: moment.Moment): Date {
      const mDate = TypeConverter.utcDate(mObject);
      if (!mDate) {
        return undefined;
      }
      return mDate.toDate();
    }*/
    /** Kovertiert einen String in einen Regex um eine Volltextsuche zu ermöglichen */
    static asRegex(text) {
        let builderString = '';
        if (_.isEmpty(text)) {
            return new RegExp(builderString);
        }
        _.each(text.split(''), (char) => {
            builderString = builderString + `${char}`;
        });
        return new RegExp(builderString.replace(REGEX.SPECIAL_CHARS_REGEX, '\\$&'), 'i');
    }
    static booleanToNumber(bool) {
        return bool === true ? 1 : 0;
    }
    static numberToBoolean(digit) {
        return digit === 1;
    }
    /** Kovertiert einen String, der dem Regex einer Zahl entspricht, in eine Zahl */
    static convertInputStringToNumber(value) {
        if (value.includes('.')) {
            return Number.parseFloat(value);
        }
        if (value.includes(',')) {
            return Number.parseFloat(value.replace(',', '.'));
        }
        return Number.parseInt(value);
    }
}

class AccessableControlFactory {
    static simpleControl(formState = null, validators) {
        const control = new AccessableFormControl();
        control.initialize(formState, validators);
        return control;
    }
    static numberControl(formState = null, validators) {
        const control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = TypeConverter.asGermanFloat;
        control.convertTo = TypeConverter.toNumber;
        control.setValue(formState);
        return control;
    }
    static numberBooleanControl(formState = null, validators) {
        const control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = TypeConverter.numberToBoolean;
        control.convertTo = TypeConverter.booleanToNumber;
        control.setValue(formState);
        return control;
    }
    static dateControl(formState = null, validators) {
        const control = AccessableControlFactory.simpleControl(formState, validators);
        return control;
    }
    /** Schneides alle Whitespaces am Ende und Anfang weg */
    static trimControl(formState = null, validators) {
        const control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = (str) => {
            if (Util.isDefined(str)) {
                return str.trim();
            }
            return str;
        };
        control.convertTo = (str) => {
            if (Util.isDefined(str)) {
                return str.trim();
            }
            return str;
        };
        return control;
    }
}

var HttpStatusCodes;
(function (HttpStatusCodes) {
    HttpStatusCodes[HttpStatusCodes["OK"] = 200] = "OK";
    HttpStatusCodes[HttpStatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCodes[HttpStatusCodes["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpStatusCodes[HttpStatusCodes["CONFLICT"] = 409] = "CONFLICT";
    HttpStatusCodes[HttpStatusCodes["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusCodes[HttpStatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCodes[HttpStatusCodes["LOCKED"] = 423] = "LOCKED";
    HttpStatusCodes[HttpStatusCodes["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
})(HttpStatusCodes || (HttpStatusCodes = {}));

class BasePushStrategyObject extends BaseObject {
    markForCheckIf(subject) {
        return this.watch(subject, new SubscriptionHandler(this.cdr.markForCheck.bind(this.cdr)));
    }
    /** @nocollapse */ static ɵfac = /** @pureOrBreakMyCode */ function () { let ɵBasePushStrategyObject_BaseFactory; return function BasePushStrategyObject_Factory(t) { return (ɵBasePushStrategyObject_BaseFactory || (ɵBasePushStrategyObject_BaseFactory = i0.ɵɵgetInheritedFactory(BasePushStrategyObject)))(t || BasePushStrategyObject); }; }();
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: BasePushStrategyObject, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BasePushStrategyObject_Template(rf, ctx) { }, encapsulation: 2 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BasePushStrategyObject, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], null, null); })();

/**
 * Diese Klasse kann verwendet werden um Werte zu speichern und die automatisch
 * überwachbar zu machen. Dadurch können UI Push Strategien leichter implementiert werden.
 */
class ObservableValue {
    equals;
    value$;
    changed = new Subject();
    constructor(initialValue, equals) {
        this.equals = equals;
        this.value$ = initialValue;
        this.equals = Util.isDefined(this.equals) ? this.equals : this.defaultComparator;
    }
    set value(value) {
        if (!this.equals(this.value$, value)) {
            this.value$ = value;
            this.changed.next(value);
        }
    }
    get value() {
        return this.value$;
    }
    defaultComparator(current, next) {
        return current === next;
    }
}

class AbstractStoredReadonlyRestservice extends BaseObject {
    observer;
    constructor(restServiceObserver) {
        super();
        this.observer = Util.isDefined(restServiceObserver) ? restServiceObserver :
            new ReadonlyRestServiceObserver();
    }
    all(searchParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).all(searchParams, httpOptions)
            .pipe(tap((response) => {
            this.store.updateItems(response);
        }));
    }
    show(id, getParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).show(id, getParams, httpOptions)
            .pipe(tap((response) => {
            this.store.update(response);
        }));
    }
}

class AbstractStoredRestservice extends AbstractStoredReadonlyRestservice {
    constructor() {
        super(new RestServiceObserver());
    }
    create(model, getParams, httpOptions) {
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .create(model, getParams, httpOptions);
        return this.modifyCreateCall(request);
    }
    destroy(id, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .destroy(id, getParams, httpOptions)
            .pipe(tap(() => {
            this.store.removeByIdentifier(id);
        }));
    }
    partialUpdate(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .partialUpdate(model, getParams, httpOptions)
            .pipe(tap((result) => {
            this.store.update(result);
        }));
    }
    save(model, getParams, httpOptions) {
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .save(model, getParams, httpOptions);
        if (Util.isDefined(model[this.identifier])) {
            request = this.modifyUpdateCall(request);
        }
        else {
            request = this.modifyCreateCall(request);
        }
        return request;
    }
    set(model, getParams, httpOptions) {
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .set(model, getParams, httpOptions);
        if (Util.isDefined(model[this.identifier])) {
            request = this.modifyUpdateCall(request);
        }
        else {
            request = this.modifyCreateCall(request);
        }
        return request;
    }
    update(model, getParams, httpOptions) {
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .update(model, getParams, httpOptions);
        request = this.modifyUpdateCall(request);
        return request;
    }
    modifyCreateCall(observable) {
        return observable.pipe(tap((result) => {
            this.store.push(result);
        }));
    }
    modifyUpdateCall(observable) {
        return observable.pipe(tap((result) => {
            this.store.update(result);
        }));
    }
}

class DeactivationHandler {
    deactivators$ = {};
    register(name, component) {
        this.deactivators$[name] = component;
    }
    remove(name) {
        delete this.deactivators$[name];
    }
    canDeactivate() {
        return new Observable(subscriber => {
            this._deactivateComponent(0, subscriber);
        });
    }
    _deactivateComponent(index, observer) {
        const component = Object.values(this.deactivators$)[index];
        if (!component) {
            observer.next(true);
            observer.complete();
        }
        else {
            SubscriptionManager.subscribe(component.canDeactivate(), new SubscriptionHandler((canDeactivate) => {
                if (!canDeactivate) {
                    observer.next(false);
                    observer.complete();
                }
                else {
                    this._deactivateComponent(index + 1, observer);
                }
            }));
        }
    }
}

class AbstractActivationQueuedGuard {
    queue = [];
    route;
    state;
    canActivate(route, state) {
        this.route = route;
        this.state = state;
        return new Observable((subscriber) => {
            this.runQueueRecursive(0, subscriber);
        });
    }
    sequence(step) {
        if (_.isArray(step)) {
            this.queue.push(step);
        }
        else {
            this.queue.push([step]);
        }
        return this;
    }
    runQueueRecursive(level, subscriber) {
        const currentQueueItems = this.queue[level];
        if (!Util.isDefined(currentQueueItems)) {
            subscriber.next(true);
            subscriber.complete();
            return;
        }
        const activators = _.map(currentQueueItems, (queueItem) => {
            return queueItem.canActivate(this.route, this.state);
        });
        SubscriptionManager.subscribe(forkJoin(activators), new SubscriptionHandler((canActivateStates) => {
            if (!_.all(canActivateStates)) {
                subscriber.next(false);
                subscriber.complete();
            }
            else {
                this.runQueueRecursive(level + 1, subscriber);
            }
        }, () => {
            subscriber.next(false);
            subscriber.complete();
        }));
    }
}

class AbstractActivationGuard {
    route;
    state;
    canActivate(route, state) {
        this.route = route;
        this.state = state;
        return this.onActivate()
            .pipe(switchMap((result) => {
            return this.onSuccess(result);
        }), catchError((error) => {
            return this.onError(error);
        }));
    }
    get routeConfiguration() {
        return this.route.data.routeConfiguration;
    }
}

class AbstractRouteConfiguration {
    pathSegments;
    paramNames;
    parent;
    constructor(pathSegments, paramNames, parent) {
        this.pathSegments = pathSegments;
        this.paramNames = paramNames;
        this.parent = parent;
    }
    get path() {
        if (Util.isDefined(this.parent)) {
            return `${this.parent.path}/${this.pathSegments.join('/')}`;
        }
        else {
            return this.pathSegments.join('/');
        }
    }
    get paramDefinition() {
        return _.extend(Util.isDefined(this.parent) ? this.parent.paramDefinition : {}, this.paramNames || {});
    }
    buildNavigation(params) {
        let navigationParams = Util.isDefined(this.parent) ?
            this.parent.buildNavigation(params) : [];
        if (!Util.isDefined(params)) {
            return navigationParams.concat(this.pathSegments);
        }
        navigationParams = navigationParams.concat(_.map(this.pathSegments, (segment) => {
            const segmentInParams = params[segment.replace(':', '')];
            if (Util.isDefined(segmentInParams)) {
                return segmentInParams;
            }
            return segment;
        }));
        return navigationParams;
    }
    validate() {
        for (const pathSnippet in this.pathSegments) {
            if (!Util.isDefined(pathSnippet)) {
                console.error('Creating a route without a path snippet is not allowed');
                return false;
            }
            if (pathSnippet.startsWith('/')) {
                console.error('Creating a route with a path snippet starting with a / is not allowed');
                return false;
            }
            if (pathSnippet.endsWith('/')) {
                console.error('Creating a route with a path snippet ending with a / is not allowed');
                return false;
            }
        }
        return true;
    }
}

class AbstractResolver {
    route;
    state;
    resolve(route, state) {
        this.route = route;
        this.state = state;
        return this.onResolve();
    }
    get routeConfiguration() {
        return this.route.data.routeConfiguration;
    }
}

class BaseRootComponent extends BasePushStrategyObject {
    observables = [];
    listenTo(observable, resolver) {
        this.observables.push(observable);
        observable.isVisible.value = true;
        this.watch(observable.nextRequested, new SubscriptionHandler((dataSet) => {
            this.onNextRequested(observable, dataSet, resolver);
        }));
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        _.each(this.observables, (observable) => observable.isVisible.value = false);
    }
    onNextRequested(observable, dataSet, resolver) {
        this.subscribe(this.canDeactivate(), new SubscriptionHandler((canDeactivate) => {
            if (canDeactivate) {
                // Maybe catch error
                resolver.resolve(this.activatedRoute, dataSet, observable);
            }
        }));
    }
    /** @nocollapse */ static ɵfac = /** @pureOrBreakMyCode */ function () { let ɵBaseRootComponent_BaseFactory; return function BaseRootComponent_Factory(t) { return (ɵBaseRootComponent_BaseFactory || (ɵBaseRootComponent_BaseFactory = i0.ɵɵgetInheritedFactory(BaseRootComponent)))(t || BaseRootComponent); }; }();
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: BaseRootComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseRootComponent_Template(rf, ctx) { }, encapsulation: 2 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseRootComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], null, null); })();

class AbstractReadonlyCachedRestservice extends AbstractStoredReadonlyRestservice {
    all(searchParams, httpOptions) {
        if (this.store.isStoreValid()) {
            return of(this.store.items);
        }
        else {
            return super.all(searchParams, httpOptions);
        }
    }
    show(id, getParams, httpOptions) {
        if (this.store.isItemValid(id)) {
            const lookup = {};
            lookup[this.identifier] = id;
            return of(_.find(this.store.items, lookup));
        }
        return super.show(id, getParams, httpOptions);
    }
}

class AbstractCachedRestservice extends AbstractReadonlyCachedRestservice {
    observer = new RestServiceObserver();
    create(model, getParams, httpOptions) {
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .create(model, getParams, httpOptions);
        return this.modifyCreateCall(request);
    }
    destroy(id, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .destroy(id, getParams, httpOptions)
            .pipe(tap(() => {
            this.store.removeByIdentifier(id);
        }));
    }
    partialUpdate(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .partialUpdate(model, getParams, httpOptions)
            .pipe(tap((result) => {
            this.store.update(result);
        }));
    }
    save(model, getParams, httpOptions) {
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .save(model, getParams, httpOptions);
        if (Util.isDefined(model[this.identifier])) {
            request = this.modifyUpdateCall(request);
        }
        else {
            request = this.modifyCreateCall(request);
        }
        return request;
    }
    set(model, getParams, httpOptions) {
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .set(model, getParams, httpOptions);
        if (Util.isDefined(model[this.identifier])) {
            request = this.modifyUpdateCall(request);
        }
        else {
            request = this.modifyCreateCall(request);
        }
        return request;
    }
    update(model, getParams, httpOptions) {
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .update(model, getParams, httpOptions);
        request = this.modifyUpdateCall(request);
        return request;
    }
    modifyCreateCall(observable) {
        return observable.pipe(tap((result) => {
            this.store.push(result);
        }));
    }
    modifyUpdateCall(observable) {
        return observable.pipe(tap((result) => {
            this.store.update(result);
        }));
    }
}

class AbstractEntityResolver {
    router;
    routeConfiguration;
    configuration;
    constructor(router, routeConfiguration, configuration) {
        this.router = router;
        this.routeConfiguration = routeConfiguration;
        this.configuration = configuration;
        this.configuration = configuration || AbstractEntityResolver.generateDefaultConfiguration();
    }
    runResolver(activatedRoute, params) {
        const currentRouteParams = _.extend(_.clone(activatedRoute.snapshot.params), params);
        if (this.configuration.keepQueryParams) {
            return this.router.navigate(this.routeConfiguration.buildNavigation(currentRouteParams), { queryParams: activatedRoute.snapshot.queryParams });
        }
        else {
            return this.router.navigate(this.routeConfiguration.buildNavigation(currentRouteParams));
        }
    }
    static generateDefaultConfiguration() {
        return {
            keepQueryParams: false
        };
    }
}

class TimestampItemStore extends ItemStore {
    itemLifetimeInSeconds;
    static ITEM_TIMESTAMP_KEY = '__timestamp__';
    wasFilled;
    constructor(identifier, itemLifetimeInSeconds, transform) {
        super(identifier, transform);
        this.itemLifetimeInSeconds = itemLifetimeInSeconds;
        this.wasFilled = false;
    }
    updateItems(items) {
        super.updateItems(items);
        _.each(this.items, (item) => this.trackItem(item));
        this.wasFilled = true;
    }
    clear() {
        super.clear();
        this.wasFilled = false;
    }
    update(item) {
        super.update(item);
        this.trackItem(item);
    }
    push(item) {
        super.push(item);
        this.trackItem(item);
    }
    isItemValid(identifier) {
        let itemInStore = null;
        for (const item of this.items) {
            if (item[this.identifier] === identifier) {
                itemInStore = item;
                break;
            }
        }
        if (!Util.isDefined(itemInStore)) {
            return false;
        }
        const currentTimeStamp = Util.getCurrentUnixTimestamp();
        return (currentTimeStamp - this.itemLifetimeInSeconds) < itemInStore[TimestampItemStore.ITEM_TIMESTAMP_KEY];
    }
    isStoreValid() {
        if (!this.wasFilled) {
            return false;
        }
        if (_.isEmpty(this.items)) {
            return false;
        }
        return _.all(this.items, (item) => this.isItemValid(item[this.identifier]));
    }
    trackItem(item) {
        item[TimestampItemStore.ITEM_TIMESTAMP_KEY] = Util.getCurrentUnixTimestamp();
    }
}

/*
 * Public API Surface of mrd-core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AbstractActivationGuard, AbstractActivationQueuedGuard, AbstractCachedRestservice, AbstractEntityResolver, AbstractReadonlyCachedRestservice, AbstractReadonlyRestservice, AbstractResolver, AbstractRestservice, AbstractRouteConfiguration, AbstractStoredReadonlyRestservice, AbstractStoredRestservice, AccessableControlFactory, AccessableFormArray, AccessableFormControl, AccessableFormGroup, BaseObject, BasePushStrategyObject, BaseRootComponent, DeactivationHandler, HttpStatusCodes, ItemStore, ObservableValue, REGEX, ReadonlyRestHandler, RestHandler, SubscriptionHandler, SubscriptionManager, TimestampItemStore, Type, TypeConverter, Util, ValidatorCustom, ValidatorEmail, ValidatorFixedValue, ValidatorFloat, ValidatorInteger, ValidatorPostalCode, ValidatorRequired };
//# sourceMappingURL=mrd-core.mjs.map
