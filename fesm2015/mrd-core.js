import { take, finalize, tap, takeUntil, switchMap, catchError } from 'rxjs/operators';
import { isFunction, isEmpty, each, sortBy, isDate, isNumber, isString, isBoolean, map, find, mapObject, reject, isArray, compact, isUndefined, all, extend, clone } from 'underscore';
import { Subject, Observable, forkJoin, of } from 'rxjs';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { isMoment } from 'moment';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interface/http/i-readonly-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Basis Interface um einen Restservice mit Lesezugriff zu implementieren.
 * @record
 * @template T
 */
function IReadonlyRestService() { }
if (false) {
    /**
     * Der Key Parameter um zu testen ob ein Object neu angelegt, oder geladen wurde. Z.B.: ID
     * @type {?}
     */
    IReadonlyRestService.prototype.identifier;
    /**
     * Holt alle Entitäten ab
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    IReadonlyRestService.prototype.all = function (searchParams, httpOptions) { };
    /**
     * Holt eine Entität anhand einer ID ab
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    IReadonlyRestService.prototype.show = function (id, getParams, httpOptions) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interface/http/i-readonly-stored-rest-service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Basis Interface um einen Restservice mit Lesezugriff zu implementieren.
 * @record
 * @template T
 */
function IReadonlyStoreRestService() { }
if (false) {
    /** @type {?} */
    IReadonlyStoreRestService.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interface/util/i-subscription-handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ISubscriptionHandler() { }
if (false) {
    /** @type {?|undefined} */
    ISubscriptionHandler.prototype.onSuccess;
    /** @type {?|undefined} */
    ISubscriptionHandler.prototype.onError;
    /** @type {?|undefined} */
    ISubscriptionHandler.prototype.onFinished;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/subscription-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Diese Klasse kümmert sich um die Speicherverwaltung von Subscriptions.
 * Diese erzeugen Memory-Leaks, wenn sie nicht sauber gelöscht werden.
 * @abstract
 */
class SubscriptionManager {
    /**
     * Subscription mit einem Namen. Diese Funktion ist nützlich,
     * falls eine Subscription öfters aufgerufen wird und die vorherige, falls
     * noch nicht abgeschlossen, beendet werden soll (HTTP Aufrufe).
     * @template T
     * @param {?} name
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    static subscribeAs(name, observable, handler) {
        /** @type {?} */
        const sub = observable
            .pipe(take(1), finalize((/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (isFunction(handler.onFinished)) {
                handler.onFinished(...args);
                if (sub) {
                    this.deleteSubscription(name);
                }
            }
        })))
            .subscribe((/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (isFunction(handler.onSuccess)) {
                handler.onSuccess(...args);
            }
        }), (/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (isFunction(handler.onError)) {
                handler.onError(...args);
            }
        }));
        this.pushSubscription(name, sub);
        return sub;
    }
    /**
     * Funktion für einmalige Subscriptions (z.B.: Initialisierungsaufrufe)
     * @template T
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    static subscribe(observable, handler) {
        /** @type {?} */
        const sub = observable
            .pipe(take(1), finalize((/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (isFunction(handler.onFinished)) {
                handler.onFinished(...args);
                if (sub) {
                    this.deleteSubscription(name);
                }
            }
        })))
            .subscribe((/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (isFunction(handler.onSuccess)) {
                handler.onSuccess(...args);
            }
        }), (/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (isFunction(handler.onError)) {
                handler.onError(...args);
            }
        }));
        return sub;
    }
    /**
     * @private
     * @param {?} name
     * @param {?} subscription
     * @return {?}
     */
    static pushSubscription(name, subscription) {
        this.deleteSubscription(name);
        SubscriptionManager.subscriptions[name] = subscription;
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    static deleteSubscription(name) {
        /** @type {?} */
        const sub = SubscriptionManager.subscriptions[name];
        if (sub) {
            sub.unsubscribe();
            delete SubscriptionManager.subscriptions[name];
        }
    }
}
// Alle benannten Subscriptions werden hier gecached
SubscriptionManager.subscriptions = {};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SubscriptionManager.subscriptions;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Util {
    /**
     * @param {?} obj
     * @return {?}
     */
    static isDefined(obj) {
        return obj !== null && obj !== undefined;
    }
    /**
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    static armUrlWithSearchParams(url, queryParams) {
        if (!queryParams || isEmpty(queryParams)) {
            return url;
        }
        each(queryParams, (/**
         * @param {?} value
         * @param {?} key
         * @return {?}
         */
        (value, key) => {
            /** @type {?} */
            const querySelector = url.indexOf('?') === -1 ? '?' : '&';
            url = `${url}${querySelector}${key}=${value}`;
        }));
        return url;
    }
    /**
     * @param {?} url
     * @param {?} id
     * @return {?}
     */
    static createEntityUrl(url, id) {
        return `${url}/${id}`;
    }
    /**
     * @return {?}
     */
    static getBrowser() {
        /** @type {?} */
        const ua = navigator.userAgent;
        /** @type {?} */
        let tem;
        /** @type {?} */
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
    /**
     * @return {?}
     */
    static getCurrentUnixTimestamp() {
        return Math.round((new Date()).getTime() / 1000);
    }
    /**
     * @return {?}
     */
    static guid() {
        /** @type {?} */
        const s4 = (/**
         * @return {?}
         */
        () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        });
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    static transformUmlaute(value) {
        return value
            .replace('Ä', 'Ae')
            .replace('ä', 'ae')
            .replace('Ö', 'Oe')
            .replace('ö', 'oe')
            .replace('Ü', 'Ue')
            .replace('ü', 'ue');
    }
    /**
     * @template TListType
     * @param {?} list
     * @param {?} attribute
     * @return {?}
     */
    static sortAlpabetically(list, attribute) {
        /** @type {?} */
        const resultList = sortBy(list, (/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.transformUmlaute(item[attribute]).toUpperCase()));
        return resultList;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/item-store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ItemStore {
    /**
     * @param {?} identifier
     * @param {?=} transform
     */
    constructor(identifier, transform) {
        this.identifier = identifier;
        this.transform = transform;
        this.onChanged = new Subject();
        this.items$ = {};
        this.transformedItems$ = [];
    }
    /**
     * @param {?} items
     * @return {?}
     */
    updateItems(items) {
        this.clear();
        items = items || [];
        for (const item of items) {
            this.items$[item[this.identifier]] = item;
        }
        this.internalTransform$();
    }
    /**
     * @return {?}
     */
    clear() {
        this.items$ = {};
        this.transformedItems$ = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    remove(item) {
        if (item) {
            delete this.items$[item[this.identifier]];
            this.internalTransform$();
        }
    }
    /**
     * @param {?} identifier
     * @return {?}
     */
    removeByIdentifier(identifier) {
        if (Util.isDefined(identifier)) {
            delete this.items$[identifier];
            this.internalTransform$();
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    update(item) {
        if (item) {
            this.items$[item[this.identifier]] = item;
            this.internalTransform$();
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    push(item) {
        if (item) {
            this.items$[item[this.identifier]] = item;
            this.internalTransform$();
        }
    }
    /**
     * @protected
     * @return {?}
     */
    internalTransform$() {
        this.transformedItems$ = Object.values(this.items$);
        if (this.transform) {
            this.transformedItems$ = this.transform(this.transformedItems$);
        }
        this.onChanged.next(this.transformedItems$);
    }
    /**
     * @return {?}
     */
    get items() {
        return this.transformedItems$;
    }
}
if (false) {
    /** @type {?} */
    ItemStore.prototype.onChanged;
    /**
     * @type {?}
     * @protected
     */
    ItemStore.prototype.items$;
    /**
     * @type {?}
     * @protected
     */
    ItemStore.prototype.transformedItems$;
    /** @type {?} */
    ItemStore.prototype.identifier;
    /** @type {?} */
    ItemStore.prototype.transform;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/http/rest-handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class RestHandler {
    /**
     * @param {?} http
     * @param {?} url
     * @param {?} observer
     * @param {?} identifier
     */
    constructor(http, url, observer, identifier) {
        this.http = http;
        this.url = url;
        this.observer = observer;
        this.identifier = identifier;
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    create(model, getParams, httpOptions) {
        this.observer.isCreatingItem = true;
        return this.http.post(Util.armUrlWithSearchParams(this.url, getParams), model, httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemCreated.next(result);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isCreatingItem = false;
        })));
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    destroy(id, getParams, httpOptions) {
        this.observer.isDestoyingItem = true;
        return this.http.delete(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, id), getParams), httpOptions).pipe(tap((/**
         * @return {?}
         */
        () => {
            this.observer.onItemDestroyed.next(id);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isDestoyingItem = false;
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    partialUpdate(model, getParams, httpOptions) {
        this.observer.isPartiallyUpdatingItem = true;
        return this.http.patch(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, model[this.identifier]), getParams), model, httpOptions).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemPartialUpdated.next(result);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isPartiallyUpdatingItem = false;
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    save(model, getParams, httpOptions) {
        this.observer.isSavingItem = true;
        /** @type {?} */
        let observable;
        if (Util.isDefined(model[this.identifier])) {
            observable = this.update(model, getParams, httpOptions);
        }
        else {
            observable = this.create(model, getParams, httpOptions);
        }
        return observable
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemSaved.next(result);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isSavingItem = false;
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    set(model, getParams, httpOptions) {
        this.observer.isSavingItem = true;
        /** @type {?} */
        let observable;
        this.observer.isUpdatingItem = true;
        observable = this.http.put(Util.armUrlWithSearchParams(this.url, getParams), model, httpOptions).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemUpdated.next(result);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isUpdatingItem = false;
        })));
        return observable
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemSaved.next(result);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isSavingItem = false;
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    update(model, getParams, httpOptions) {
        this.observer.isUpdatingItem = true;
        return this.http.put(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, model[this.identifier]), getParams), model, httpOptions).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemUpdated.next(result);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isUpdatingItem = false;
        })));
    }
}
if (false) {
    /** @type {?} */
    RestHandler.prototype.http;
    /** @type {?} */
    RestHandler.prototype.url;
    /** @type {?} */
    RestHandler.prototype.observer;
    /** @type {?} */
    RestHandler.prototype.identifier;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/subscription-handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SubscriptionHandler {
    /**
     * @param {?=} onSuccess
     * @param {?=} onError
     * @param {?=} onFinished
     */
    constructor(onSuccess, onError, onFinished) {
        this.onSuccess = onSuccess;
        this.onError = onError;
        this.onFinished = onFinished;
    }
}
if (false) {
    /** @type {?} */
    SubscriptionHandler.prototype.onSuccess;
    /** @type {?} */
    SubscriptionHandler.prototype.onError;
    /** @type {?} */
    SubscriptionHandler.prototype.onFinished;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/ui/base-object.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Abstracte Klasse von der alle Komponenten und Services erben. Sie stellt eine Speicherverwaltung für Observables bereit.
 * @abstract
 */
class BaseObject {
    constructor() {
        /**
         * Wird benutzt um Observables bei der Zerstörung einer Komponente auszulösen.
         * Wird im ngOnDestroy ausgelöst.
         */
        this.$unsubscribe = new Subject();
    }
    /**
     * Funktion zur dauerhaften Überwachung von Subscriptions. Speicher wird bei Zerstörung der Komponente freigegeben.
     * @protected
     * @template T
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    watch(observable, handler) {
        return observable
            .pipe(takeUntil(this.$unsubscribe), finalize((/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (handler.onFinished) {
                handler.onFinished(...args);
            }
        })))
            .subscribe((/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (handler.onSuccess) {
                handler.onSuccess(...args);
            }
        }), (/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (handler.onError) {
                handler.onError(...args);
            }
        }));
    }
    /**
     * Proxy für SubscriptionManager.subscribe
     * @protected
     * @template T
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    subscribe(observable, handler) {
        return SubscriptionManager.subscribe(observable, handler);
    }
    /**
     * Proxy für SubscriptionManager.subscribeAs
     * @protected
     * @template T
     * @param {?} name
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    subscribeAs(name, observable, handler) {
        return SubscriptionManager.subscribeAs(name, observable, handler);
    }
    /**
     * Alle Observables die mit watch überwacht werden, werden hier ausgelöst. Angular kümmert sich im den Aufruf.
     *  Falls das Kind auch das Interface 'OnDestroy' implementiert, nicht vergessen super.ngOnDestroy() auszurufen, oder der Speicher
     *  wird nicht freigegeben.
     * @return {?}
     */
    ngOnDestroy() {
        this.$unsubscribe.next();
        this.$unsubscribe.complete();
    }
}
if (false) {
    /**
     * Wird benutzt um Observables bei der Zerstörung einer Komponente auszulösen.
     * Wird im ngOnDestroy ausgelöst.
     * @type {?}
     * @protected
     */
    BaseObject.prototype.$unsubscribe;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-required.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidatorRequired {
    /**
     * @param {?=} error
     */
    constructor(error) {
        this.hasError = false;
        this.error = 'Pflichtfeld';
        if (error) {
            this.error = error;
        }
    }
    /**
     * @return {?}
     */
    validator() {
        return (/**
         * @param {?} input
         * @return {?}
         */
        (input) => {
            this.value = input.value;
            return this.validate();
        });
    }
    /**
     * @return {?}
     */
    validate() {
        if (isDate(this.value)) {
            this.hasError = false;
            return null;
        }
        if (isMoment(this.value)) {
            this.hasError = false;
            return null;
        }
        if (isNumber(this.value)) {
            this.hasError = false;
            return null;
        }
        if (isString(this.value)) {
            if (this.value.length > 0) {
                this.hasError = false;
                return null;
            }
            else {
                this.hasError = true;
                return { required: true };
            }
        }
        if (isBoolean(this.value)) {
            this.hasError = false;
            return null;
        }
        if (!this.value || isEmpty(this.value)) {
            this.hasError = true;
            return { required: true };
        }
        else {
            this.hasError = false;
            return null;
        }
    }
}
if (false) {
    /** @type {?} */
    ValidatorRequired.prototype.hasError;
    /** @type {?} */
    ValidatorRequired.prototype.error;
    /**
     * @type {?}
     * @private
     */
    ValidatorRequired.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/validation/accessable-form-control.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template TType
 */
class AccessableFormControl {
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    initialize(formState, validators) {
        this.control = new FormControl(formState, null, null);
        this.validateWith(validators);
        this.setValue(formState);
    }
    /**
     * @param {?=} validators
     * @return {?}
     */
    validateWith(validators = []) {
        this.validators$ = validators;
        this.control.setValidators(map(validators, (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
            return v.validator();
        })));
        this.required$ = false;
        each(this.validators$, (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
            if (v instanceof ValidatorRequired) {
                this.required$ = true;
            }
        }));
        this.control.updateValueAndValidity();
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        if (this.showAs) {
            this.control.setValue(this.showAs(value));
        }
        else {
            this.control.setValue(value);
        }
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        if (this.showAs) {
            this.control.reset(this.showAs(value));
        }
        else {
            this.control.reset(value);
        }
        return this;
    }
    /**
     * @return {?}
     */
    markAsUsed() {
        this.control.markAsDirty();
        this.control.markAsTouched();
        this.control.updateValueAndValidity();
        return this;
    }
    /**
     * @return {?}
     */
    markAsUnused() {
        each(this.validators$, (/**
         * @param {?} validator
         * @return {?}
         */
        (validator) => validator.hasError = false));
        this.control.updateValueAndValidity();
        this.control.markAsPristine();
        this.control.markAsUntouched();
        return this;
    }
    /**
     * @return {?}
     */
    markAsDirty() {
        this.control.markAsDirty();
        return this;
    }
    /**
     * @return {?}
     */
    markAsTouched() {
        this.control.markAsTouched();
        return this;
    }
    /**
     * @return {?}
     */
    disable() {
        this.control.disable();
        return this;
    }
    /**
     * @return {?}
     */
    enable() {
        this.control.enable();
        return this;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this.control.disabled;
    }
    /**
     * @return {?}
     */
    get valid() {
        if (this.control.disabled) {
            return true;
        }
        return !this.error;
    }
    /**
     * @return {?}
     */
    get validators() {
        return this.validators$;
    }
    /**
     * @return {?}
     */
    get error() {
        return find(this.validators$, (/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.hasError));
    }
    /**
     * @return {?}
     */
    get value() {
        if (this.convertTo) {
            return this.convertTo(this.control.value);
        }
        else {
            return this.control.value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.setValue(value);
    }
    /**
     * @return {?}
     */
    get required() {
        return this.required$;
    }
    /**
     * @return {?}
     */
    get touched() {
        return this.control.touched;
    }
    /**
     * @return {?}
     */
    get dirty() {
        return this.control.dirty;
    }
}
if (false) {
    /** @type {?} */
    AccessableFormControl.prototype.control;
    /** @type {?} */
    AccessableFormControl.prototype.showAs;
    /** @type {?} */
    AccessableFormControl.prototype.convertTo;
    /**
     * @type {?}
     * @private
     */
    AccessableFormControl.prototype.required$;
    /**
     * @type {?}
     * @private
     */
    AccessableFormControl.prototype.validators$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/validation/accessable-form-group.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template TFields, TModel
 */
class AccessableFormGroup {
    /**
     * @param {?} fields
     * @return {?}
     */
    initialize(fields) {
        this.control = new FormGroup(mapObject(fields, (/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            return field.control;
        })));
        this.fields$ = fields;
    }
    /**
     * @return {?}
     */
    markAsUsed() {
        each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        (field) => field.markAsUsed()));
        return this;
    }
    /**
     * @return {?}
     */
    markAsUnused() {
        each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        (field) => field.markAsUnused()));
        return this;
    }
    /**
     * @return {?}
     */
    markAsDirty() {
        each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        (field) => field.markAsDirty()));
        return this;
    }
    /**
     * @return {?}
     */
    markAsTouched() {
        each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        (field) => field.markAsTouched()));
        return this;
    }
    /**
     * @param {?} model
     * @return {?}
     */
    reset(model) {
        if (!Util.isDefined(model)) {
            model = (/** @type {?} */ ({}));
        }
        each(this.fields$, (/**
         * @param {?} field
         * @param {?} key
         * @return {?}
         */
        (field, key) => field.reset(model[key])));
        return this;
    }
    /**
     * @return {?}
     */
    get fields() {
        return this.fields$;
    }
    /**
     * @return {?}
     */
    get value() {
        /** @type {?} */
        const ret = (/** @type {?} */ ({}));
        each(this.fields$, (/**
         * @param {?} field
         * @param {?} key
         * @return {?}
         */
        (field, key) => ret[key] = field.value));
        return ret;
    }
    /**
     * @return {?}
     */
    get dirty() {
        return this.control.dirty;
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.control.valid;
    }
    /**
     * @return {?}
     */
    get touched() {
        return this.control.touched;
    }
    /**
     * @return {?}
     */
    disable() {
        return undefined;
    }
    /**
     * @return {?}
     */
    enable() {
        return undefined;
    }
}
if (false) {
    /** @type {?} */
    AccessableFormGroup.prototype.control;
    /**
     * @type {?}
     * @private
     */
    AccessableFormGroup.prototype.fields$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/validation/accessable-form-array.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template TModel
 */
class AccessableFormArray {
    constructor() {
        this.validators$ = [];
        this.required$ = false;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    initialize(type) {
        this.control = new FormArray([]);
        this.type = type;
        this.entries$ = [];
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    push(entry) {
        /** @type {?} */
        const item = this.generateFormEntry(entry);
        this.control.push(item.control);
        this.entries$.push(item);
        return item;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeAt(index) {
        this.control.removeAt(index);
        this.entries$ = reject(this.entries$, (/**
         * @param {?} e
         * @param {?} round
         * @return {?}
         */
        (e, round) => {
            return round === index;
        }));
        /** @type {?} */
        let markAsUsed = false;
        for (const entry of this.entries$) {
            markAsUsed = markAsUsed || entry.dirty;
        }
        markAsUsed ? this.markAsUsed() : this.markAsUnused();
    }
    /**
     * @param {?} validators
     * @return {?}
     */
    validateWith(validators) {
        if (!Util.isDefined(validators)) {
            validators = [];
        }
        if (isArray(validators)) {
            this.validators$ = validators;
        }
        this.control.setValidators(map(validators, (/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.validator())));
        this.required$ = false;
        each(this.validators$, (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
            if (v instanceof ValidatorRequired) {
                this.required$ = true;
            }
        }));
        this.control.updateValueAndValidity();
        return this;
    }
    /**
     * @return {?}
     */
    clearValidators() {
        this.validators$ = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    generateFormEntry(value) {
        /** @type {?} */
        const validation = new this.type();
        validation.reset(value);
        return validation;
    }
    /**
     * @return {?}
     */
    get errors() {
        return compact(map(this.validators$, (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            if (e.hasError) {
                return e.error;
            }
            return null;
        })));
    }
    /**
     * @return {?}
     */
    get error() {
        return find(this.validators$, (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
            return v.hasError;
        }));
    }
    /**
     * @return {?}
     */
    get validators() {
        return this.validators$;
    }
    /**
     * @return {?}
     */
    get required() {
        return this.required$;
    }
    /**
     * @return {?}
     */
    get dirty() {
        return this.control.dirty;
    }
    /**
     * @return {?}
     */
    get touched() {
        return this.control.touched;
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.control.valid;
    }
    /**
     * @return {?}
     */
    get value() {
        /** @type {?} */
        const ret = [];
        for (const entry of this.entries$) {
            ret.push(entry.value);
        }
        return ret;
    }
    /**
     * @return {?}
     */
    get entries() {
        return this.entries$;
    }
    /**
     * @return {?}
     */
    disable() {
        this.control.disable();
        return this;
    }
    /**
     * @return {?}
     */
    enable() {
        this.control.enable();
        for (const entry of this.entries$) {
            entry.enable();
        }
        return this;
    }
    /**
     * @return {?}
     */
    markAsDirty() {
        this.control.markAsDirty();
        for (const entry of this.entries$) {
            entry.markAsDirty();
        }
        return this;
    }
    /**
     * @return {?}
     */
    markAsTouched() {
        this.control.markAsTouched();
        for (const entry of this.entries$) {
            entry.markAsTouched();
        }
        return this;
    }
    /**
     * @return {?}
     */
    markAsUnused() {
        this.control.markAsUntouched();
        this.control.markAsPristine();
        for (const entry of this.entries$) {
            entry.markAsUnused();
        }
        return this;
    }
    /**
     * @return {?}
     */
    markAsUsed() {
        this.control.markAsTouched();
        this.control.markAsDirty();
        for (const entry of this.entries$) {
            entry.markAsUsed();
        }
        return this;
    }
    /**
     * @param {?} models
     * @return {?}
     */
    reset(models) {
        this.entries$ = [];
        this.control.reset([]);
        if (Util.isDefined(models) && isArray(models)) {
            for (const model of models) {
                this.push(model);
            }
        }
        return this;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccessableFormArray.prototype.validators$;
    /** @type {?} */
    AccessableFormArray.prototype.control;
    /** @type {?} */
    AccessableFormArray.prototype.type;
    /**
     * @type {?}
     * @private
     */
    AccessableFormArray.prototype.required$;
    /**
     * @type {?}
     * @private
     */
    AccessableFormArray.prototype.entries$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/http/readonly-rest-service-observer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ReadonlyRestServiceObserver {
    constructor() {
        this.onItemFetched = new Subject();
        this.onItemsFetched = new Subject();
        this.isFetchingItem$ = false;
        this.isFetchingItems$ = false;
    }
    /**
     * @return {?}
     */
    isActivate() {
        return !this.isFetchingItem && !this.isFetchingItems;
    }
    /**
     * @param {?} fetching
     * @return {?}
     */
    set isFetchingItems(fetching) {
        this.isFetchingItems$ = fetching;
    }
    /**
     * @return {?}
     */
    get isFetchingItems() {
        return this.isFetchingItems$;
    }
    /**
     * @param {?} fetching
     * @return {?}
     */
    set isFetchingItem(fetching) {
        this.isFetchingItem$ = fetching;
    }
    /**
     * @return {?}
     */
    get isFetchingItem() {
        return this.isFetchingItem$;
    }
}
if (false) {
    /** @type {?} */
    ReadonlyRestServiceObserver.prototype.onItemFetched;
    /** @type {?} */
    ReadonlyRestServiceObserver.prototype.onItemsFetched;
    /**
     * @type {?}
     * @private
     */
    ReadonlyRestServiceObserver.prototype.isFetchingItem$;
    /**
     * @type {?}
     * @private
     */
    ReadonlyRestServiceObserver.prototype.isFetchingItems$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/http/readony-rest-handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class ReadonlyRestHandler {
    /**
     * @param {?} http
     * @param {?} url
     * @param {?} observer
     */
    constructor(http, url, observer) {
        this.http = http;
        this.url = url;
        this.observer = observer;
    }
    /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    all(searchParams, httpOptions) {
        this.observer.isFetchingItems = true;
        return this.http.get(Util.armUrlWithSearchParams(this.url, searchParams), httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemsFetched.next(result);
        })), 
        // catchError( _.bind(this.serviceErrorHandler.catchError, this.serviceErrorHandler) as (error: any) => Observable<any> ),
        finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isFetchingItems = false;
        })));
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    show(id, getParams, httpOptions) {
        this.observer.isFetchingItem = true;
        return this.http.get(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, id), getParams), httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemFetched.next(result);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isFetchingItem = false;
        })));
    }
}
if (false) {
    /** @type {?} */
    ReadonlyRestHandler.prototype.identifier;
    /** @type {?} */
    ReadonlyRestHandler.prototype.http;
    /** @type {?} */
    ReadonlyRestHandler.prototype.url;
    /** @type {?} */
    ReadonlyRestHandler.prototype.observer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-readonly-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class AbstractReadonlyRestservice extends BaseObject {
    /**
     * @protected
     * @param {?=} restServiceObserver
     */
    constructor(restServiceObserver) {
        super();
        this.observer = Util.isDefined(restServiceObserver) ? restServiceObserver :
            new ReadonlyRestServiceObserver();
    }
    /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    all(searchParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).all(searchParams, httpOptions);
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    show(id, getParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).show(id, getParams, httpOptions);
    }
}
if (false) {
    /** @type {?} */
    AbstractReadonlyRestservice.prototype.identifier;
    /** @type {?} */
    AbstractReadonlyRestservice.prototype.url;
    /** @type {?} */
    AbstractReadonlyRestservice.prototype.observer;
    /**
     * @type {?}
     * @protected
     */
    AbstractReadonlyRestservice.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/http/rest-service-observer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class RestServiceObserver extends ReadonlyRestServiceObserver {
    constructor() {
        super();
        this.onItemCreated = new Subject();
        this.onItemUpdated = new Subject();
        this.onItemDestroyed = new Subject();
        this.onItemPartialUpdated = new Subject();
        this.onItemSaved = new Subject();
        this.isCreatingItem$ = false;
        this.isUpdatingItem$ = false;
        this.isDestoyingItem$ = false;
        this.isPartiallyUpdatingItem$ = false;
    }
    /**
     * @return {?}
     */
    isActivate() {
        return super.isActivate() &&
            !this.isCreatingItem$ &&
            !this.isUpdatingItem$ &&
            !this.isDestoyingItem$ &&
            !this.isPartiallyUpdatingItem$ &&
            !this.isSavingItem$;
    }
    /**
     * @param {?} isCreating
     * @return {?}
     */
    set isCreatingItem(isCreating) {
        this.isCreatingItem$ = isCreating;
    }
    /**
     * @return {?}
     */
    get isCreatingItem() {
        return this.isCreatingItem$;
    }
    /**
     * @param {?} isUpdating
     * @return {?}
     */
    set isUpdatingItem(isUpdating) {
        this.isUpdatingItem$ = isUpdating;
    }
    /**
     * @return {?}
     */
    get isUpdatingItem() {
        return this.isUpdatingItem$;
    }
    /**
     * @param {?} isDestroying
     * @return {?}
     */
    set isDestoyingItem(isDestroying) {
        this.isDestoyingItem$ = isDestroying;
    }
    /**
     * @return {?}
     */
    get isDestoyingItem() {
        return this.isDestoyingItem$;
    }
    /**
     * @param {?} isUpdating
     * @return {?}
     */
    set isPartiallyUpdatingItem(isUpdating) {
        this.isPartiallyUpdatingItem$ = isUpdating;
    }
    /**
     * @return {?}
     */
    get isPartiallyUpdatingItem() {
        return this.isPartiallyUpdatingItem$;
    }
    /**
     * @param {?} isSaving
     * @return {?}
     */
    set isSavingItem(isSaving) {
        this.isSavingItem$ = isSaving;
    }
    /**
     * @return {?}
     */
    get isSavingItem() {
        return this.isSavingItem$;
    }
}
if (false) {
    /** @type {?} */
    RestServiceObserver.prototype.onItemCreated;
    /** @type {?} */
    RestServiceObserver.prototype.onItemUpdated;
    /** @type {?} */
    RestServiceObserver.prototype.onItemDestroyed;
    /** @type {?} */
    RestServiceObserver.prototype.onItemPartialUpdated;
    /** @type {?} */
    RestServiceObserver.prototype.onItemSaved;
    /**
     * @type {?}
     * @private
     */
    RestServiceObserver.prototype.isCreatingItem$;
    /**
     * @type {?}
     * @private
     */
    RestServiceObserver.prototype.isUpdatingItem$;
    /**
     * @type {?}
     * @private
     */
    RestServiceObserver.prototype.isDestoyingItem$;
    /**
     * @type {?}
     * @private
     */
    RestServiceObserver.prototype.isPartiallyUpdatingItem$;
    /**
     * @type {?}
     * @private
     */
    RestServiceObserver.prototype.isSavingItem$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-rest-service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class AbstractRestservice extends AbstractReadonlyRestservice {
    /**
     * @protected
     */
    constructor() {
        super(new RestServiceObserver());
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    create(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).create(model, getParams, httpOptions);
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    destroy(id, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).destroy(id, getParams, httpOptions);
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    partialUpdate(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .partialUpdate(model, getParams, httpOptions);
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    save(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).save(model, getParams, httpOptions);
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    update(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).update(model, getParams, httpOptions);
    }
}
if (false) {
    /** @type {?} */
    AbstractRestservice.prototype.identifier;
    /** @type {?} */
    AbstractRestservice.prototype.observer;
    /**
     * @type {?}
     * @protected
     */
    AbstractRestservice.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-custom.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ValidatorCustom {
    /**
     * @protected
     */
    constructor() {
        this.hasError = false;
    }
    /**
     * @return {?}
     */
    validator() {
        return null;
    }
    /**
     * @return {?}
     */
    validate() {
        return null;
    }
}
if (false) {
    /** @type {?} */
    ValidatorCustom.prototype.error;
    /** @type {?} */
    ValidatorCustom.prototype.hasError;
    /**
     * @type {?}
     * @private
     */
    ValidatorCustom.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/enum/regex.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Hier werden alle von der Applikation genutzten REGEX gespeichert.
 * @type {?}
 */
const REGEX = {
    /**
     * Regex für eine Zahl. Jede Zahl sollte damit erkannt werden
     */
    NUMBER: /^-?[0-9]+([,.][0-9]+)?$/,
    /**
     * Die Representation einer (Gleitkomma)Zahl, die der Anwender eingeben darf
     */
    INPUT_NUMBER: /^[0-9]+(,[0-9]+)?$/,
    INTEGER: /^[0-9]+$/,
    SIGNED_INTEGER: /^-?[0-9]+$/,
    /**
     * Offizieller RFC 5322 Standart regex
     */
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    POSTAL_CODE: /^[0-9]{5}$/,
    SPECIAL_CHARS_REGEX: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
    DATE: /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-email.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidatorEmail {
    /**
     * @param {?=} error
     */
    constructor(error) {
        this.hasError = false;
        this.error = 'Bitte geben Sie eine gültige E-Mail ein';
        if (error) {
            this.error = error;
        }
    }
    /**
     * @return {?}
     */
    validator() {
        return (/**
         * @param {?} input
         * @return {?}
         */
        (input) => {
            this.value = input.value;
            return this.validate();
        });
    }
    /**
     * @return {?}
     */
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
if (false) {
    /** @type {?} */
    ValidatorEmail.prototype.hasError;
    /** @type {?} */
    ValidatorEmail.prototype.error;
    /**
     * @type {?}
     * @private
     */
    ValidatorEmail.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-fixed-value.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidatorFixedValue {
    /**
     * @param {?} comparator
     * @param {?=} error
     */
    constructor(comparator, error = null) {
        this.comparator = comparator;
        this.error = error;
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    validator() {
        return (/**
         * @param {?} input
         * @return {?}
         */
        (input) => {
            this.value$ = input.value;
            return this.validate();
        });
    }
}
if (false) {
    /** @type {?} */
    ValidatorFixedValue.prototype.hasError;
    /**
     * @type {?}
     * @private
     */
    ValidatorFixedValue.prototype.value$;
    /** @type {?} */
    ValidatorFixedValue.prototype.comparator;
    /** @type {?} */
    ValidatorFixedValue.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-float.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidatorFloat {
    /**
     * @param {?=} digitsBefore
     * @param {?=} digitsAfter
     */
    constructor(digitsBefore, digitsAfter) {
        this.digitsBefore = digitsBefore;
        this.digitsAfter = digitsAfter;
        this.hasError = false;
        this.error = 'Bitte geben Sie eine valide Zahl ein';
    }
    /**
     * @return {?}
     */
    validator() {
        return (/**
         * @param {?} input
         * @return {?}
         */
        (input) => {
            this.value = input.value;
            return this.validate();
        });
    }
    /**
     * @return {?}
     */
    validate() {
        this.hasError = false;
        this.error = 'Bitte geben Sie eine valide Zahl ein';
        /** @type {?} */
        let validAmountDisgitsBefore = false;
        /** @type {?} */
        let validAmountDisgitsAfter = false;
        if (!this.value) {
            return null;
        }
        if (this.value && REGEX.INPUT_NUMBER.test(this.value.toString())) {
            /** @type {?} */
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
if (false) {
    /** @type {?} */
    ValidatorFloat.prototype.hasError;
    /** @type {?} */
    ValidatorFloat.prototype.error;
    /**
     * @type {?}
     * @private
     */
    ValidatorFloat.prototype.value;
    /**
     * @type {?}
     * @private
     */
    ValidatorFloat.prototype.digitsBefore;
    /**
     * @type {?}
     * @private
     */
    ValidatorFloat.prototype.digitsAfter;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-integer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidatorInteger {
    /**
     * @param {?=} allowNegativeValues$
     */
    constructor(allowNegativeValues$ = false) {
        this.allowNegativeValues$ = allowNegativeValues$;
        this.error = 'Bitte geben Sie eine ganze Zahl ein';
        if (allowNegativeValues$) {
            this.regex$ = REGEX.SIGNED_INTEGER;
        }
        else {
            this.regex$ = REGEX.INTEGER;
        }
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    validator() {
        return (/**
         * @param {?} input
         * @return {?}
         */
        (input) => {
            this.value$ = input.value;
            return this.validate();
        });
    }
}
if (false) {
    /** @type {?} */
    ValidatorInteger.prototype.error;
    /** @type {?} */
    ValidatorInteger.prototype.hasError;
    /**
     * @type {?}
     * @private
     */
    ValidatorInteger.prototype.value$;
    /**
     * @type {?}
     * @private
     */
    ValidatorInteger.prototype.regex$;
    /**
     * @type {?}
     * @private
     */
    ValidatorInteger.prototype.allowNegativeValues$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-postal-code.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValidatorPostalCode {
    /**
     * @param {?=} error
     */
    constructor(error) {
        this.hasError = false;
        this.error = 'Bitte geben Sie eine gültige Postleitzahl ein';
        if (error) {
            this.error = error;
        }
    }
    /**
     * @return {?}
     */
    validator() {
        return (/**
         * @param {?} input
         * @return {?}
         */
        (input) => {
            this.value = input.value;
            return this.validate();
        });
    }
    /**
     * @return {?}
     */
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
if (false) {
    /** @type {?} */
    ValidatorPostalCode.prototype.hasError;
    /** @type {?} */
    ValidatorPostalCode.prototype.error;
    /**
     * @type {?}
     * @private
     */
    ValidatorPostalCode.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/type-converter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class TypeConverter {
    /**
     * Versucht den Wert in eine Zahl zu konvertieren.
     * @param {?} value
     * @return {?}
     */
    static toNumber(value) {
        // Falls null oder undefined übergeben wurde, brechen wir ab
        if (!value) {
            return value;
        }
        // Falls der Wert bereits eine Zahl ist, sind wir fertig
        if (isNumber(value)) {
            return value;
        }
        // Falls der Wert ein String ist, testen wir, ob er aussieht wie eine Zahl und versuchen ihn anschließend zu konvertieren
        if (isString(value) && REGEX.NUMBER.test((/** @type {?} */ (value)))) {
            return TypeConverter.convertInputStringToNumber((/** @type {?} */ (value)));
        }
        // Wir haben keine Regel für die Konvertierung gefunden
        return value;
    }
    /**
     * Nimmt eine Zahl und gibt eine deutsche Representation dieses Wertes zurück
     * @param {?} value
     * @param {?=} stellen
     * @return {?}
     */
    static asGermanFloat(value, stellen) {
        if (value === null || value === undefined) {
            return undefined;
        }
        if (!isUndefined(stellen) && isNumber(value)) {
            value = ((/** @type {?} */ (value))).toFixed(stellen);
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
    /**
     * Konvertiert ein moment Object in die lokale Zeitzone (Entfernt UTC)
     * @param {?} n
     * @return {?}
     */
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
    /**
     * Kovertiert einen String in einen Regex um eine Volltextsuche zu ermöglichen
     * @param {?} text
     * @return {?}
     */
    static asRegex(text) {
        /** @type {?} */
        let builderString = '';
        if (isEmpty(text)) {
            return new RegExp(builderString);
        }
        each(text.split(''), (/**
         * @param {?} char
         * @return {?}
         */
        (char) => {
            builderString = builderString + `${char}`;
        }));
        return new RegExp(builderString.replace(REGEX.SPECIAL_CHARS_REGEX, '\\$&'), 'i');
    }
    /**
     * @param {?} bool
     * @return {?}
     */
    static booleanToNumber(bool) {
        return bool === true ? 1 : 0;
    }
    /**
     * @param {?} digit
     * @return {?}
     */
    static numberToBoolean(digit) {
        return digit === 1;
    }
    /**
     * Kovertiert einen String, der dem Regex einer Zahl entspricht, in eine Zahl
     * @private
     * @param {?} value
     * @return {?}
     */
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/accessable-control-factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AccessableControlFactory {
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    static simpleControl(formState = null, validators) {
        /** @type {?} */
        const control = new AccessableFormControl();
        control.initialize(formState, validators);
        return control;
    }
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    static numberControl(formState = null, validators) {
        /** @type {?} */
        const control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = TypeConverter.asGermanFloat;
        control.convertTo = TypeConverter.toNumber;
        control.setValue(formState);
        return control;
    }
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    static numberBooleanControl(formState = null, validators) {
        /** @type {?} */
        const control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = TypeConverter.numberToBoolean;
        control.convertTo = TypeConverter.booleanToNumber;
        control.setValue(formState);
        return control;
    }
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    static dateControl(formState = null, validators) {
        /** @type {?} */
        const control = AccessableControlFactory.simpleControl(formState, validators);
        return control;
    }
    /**
     * Schneides alle Whitespaces am Ende und Anfang weg
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    static trimControl(formState = null, validators) {
        /** @type {?} */
        const control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = (/**
         * @param {?} str
         * @return {?}
         */
        (str) => {
            if (Util.isDefined(str)) {
                return str.trim();
            }
            return str;
        });
        control.convertTo = (/**
         * @param {?} str
         * @return {?}
         */
        (str) => {
            if (Util.isDefined(str)) {
                return str.trim();
            }
            return str;
        });
        return control;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interface/validation/i-validator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IValidator() { }
if (false) {
    /** @type {?} */
    IValidator.prototype.hasError;
    /** @type {?} */
    IValidator.prototype.error;
    /**
     * @return {?}
     */
    IValidator.prototype.validator = function () { };
    /**
     * @return {?}
     */
    IValidator.prototype.validate = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/enum/http-status-codes.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const HttpStatusCodes = {
    OK: 200,
    BAD_REQUEST: 400,
    PRECONDITION_FAILED: 412,
    CONFLICT: 409,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    LOCKED: 423,
    NOT_ACCEPTABLE: 406,
};
HttpStatusCodes[HttpStatusCodes.OK] = 'OK';
HttpStatusCodes[HttpStatusCodes.BAD_REQUEST] = 'BAD_REQUEST';
HttpStatusCodes[HttpStatusCodes.PRECONDITION_FAILED] = 'PRECONDITION_FAILED';
HttpStatusCodes[HttpStatusCodes.CONFLICT] = 'CONFLICT';
HttpStatusCodes[HttpStatusCodes.FORBIDDEN] = 'FORBIDDEN';
HttpStatusCodes[HttpStatusCodes.NOT_FOUND] = 'NOT_FOUND';
HttpStatusCodes[HttpStatusCodes.LOCKED] = 'LOCKED';
HttpStatusCodes[HttpStatusCodes.NOT_ACCEPTABLE] = 'NOT_ACCEPTABLE';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/ui/base-push-strategy-object.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class BasePushStrategyObject extends BaseObject {
    /**
     * @protected
     * @param {?} subject
     * @return {?}
     */
    markForCheckIf(subject) {
        return this.watch(subject, new SubscriptionHandler(this.cdr.markForCheck.bind(this.cdr)));
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BasePushStrategyObject.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/observable-value.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Diese Klasse kann verwendet werden um Werte zu speichern und die automatisch
 * überwachbar zu machen. Dadurch können UI Push Strategien leichter implementiert werden.
 * @template TValueType
 */
class ObservableValue {
    /**
     * @param {?=} initialValue
     * @param {?=} equals
     */
    constructor(initialValue, equals) {
        this.equals = equals;
        this.changed = new Subject();
        this.value$ = initialValue;
        this.equals = Util.isDefined(this.equals) ? this.equals : this.defaultComparator;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (!this.equals(this.value$, value)) {
            this.value$ = value;
            this.changed.next(value);
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this.value$;
    }
    /**
     * @private
     * @param {?} current
     * @param {?} next
     * @return {?}
     */
    defaultComparator(current, next) {
        return current === next;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ObservableValue.prototype.value$;
    /** @type {?} */
    ObservableValue.prototype.changed;
    /**
     * @type {?}
     * @private
     */
    ObservableValue.prototype.equals;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-stored-readonly-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template TModel
 */
class AbstractStoredReadonlyRestservice extends BaseObject {
    /**
     * @protected
     * @param {?=} restServiceObserver
     */
    constructor(restServiceObserver) {
        super();
        this.observer = Util.isDefined(restServiceObserver) ? restServiceObserver :
            new ReadonlyRestServiceObserver();
    }
    /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    all(searchParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).all(searchParams, httpOptions)
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.store.updateItems(response);
        })));
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    show(id, getParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).show(id, getParams, httpOptions)
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.store.update(response);
        })));
    }
}
if (false) {
    /** @type {?} */
    AbstractStoredReadonlyRestservice.prototype.url;
    /** @type {?} */
    AbstractStoredReadonlyRestservice.prototype.store;
    /** @type {?} */
    AbstractStoredReadonlyRestservice.prototype.identifier;
    /**
     * @type {?}
     * @protected
     */
    AbstractStoredReadonlyRestservice.prototype.http;
    /** @type {?} */
    AbstractStoredReadonlyRestservice.prototype.observer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-stored-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template TModel
 */
class AbstractStoredRestservice extends AbstractStoredReadonlyRestservice {
    /**
     * @protected
     */
    constructor() {
        super(new RestServiceObserver());
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    create(model, getParams, httpOptions) {
        /** @type {?} */
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .create(model, getParams, httpOptions);
        return this.modifyCreateCall(request);
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    destroy(id, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .destroy(id, getParams, httpOptions)
            .pipe(tap((/**
         * @return {?}
         */
        () => {
            this.store.removeByIdentifier(id);
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    partialUpdate(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .partialUpdate(model, getParams, httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.store.update(result);
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    save(model, getParams, httpOptions) {
        /** @type {?} */
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
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    set(model, getParams, httpOptions) {
        /** @type {?} */
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
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    update(model, getParams, httpOptions) {
        /** @type {?} */
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .update(model, getParams, httpOptions);
        request = this.modifyUpdateCall(request);
        return request;
    }
    /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    modifyCreateCall(observable) {
        return observable.pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.store.push(result);
        })));
    }
    /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    modifyUpdateCall(observable) {
        return observable.pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.store.update(result);
        })));
    }
}
if (false) {
    /** @type {?} */
    AbstractStoredRestservice.prototype.observer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interface/util/i-deactivate.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dieses Interface muss von jeder Komponente implementiert werden, falls beim Routenwechsel geprüft werden soll,
 *  ob der Anwender speichern muss.
 * @record
 */
function IDeactivate() { }
if (false) {
    /**
     * @return {?}
     */
    IDeactivate.prototype.canDeactivate = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/deactivation-handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeactivationHandler {
    constructor() {
        this.deactivators$ = {};
    }
    /**
     * @param {?} name
     * @param {?} component
     * @return {?}
     */
    register(name, component) {
        this.deactivators$[name] = component;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    remove(name) {
        delete this.deactivators$[name];
    }
    /**
     * @return {?}
     */
    canDeactivate() {
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        subscriber => {
            this._deactivateComponent(0, subscriber);
        }));
    }
    /**
     * @private
     * @param {?} index
     * @param {?} observer
     * @return {?}
     */
    _deactivateComponent(index, observer) {
        /** @type {?} */
        const component = Object.values(this.deactivators$)[index];
        if (!component) {
            observer.next(true);
            observer.complete();
        }
        else {
            SubscriptionManager.subscribe(component.canDeactivate(), new SubscriptionHandler((/**
             * @param {?} canDeactivate
             * @return {?}
             */
            (canDeactivate) => {
                if (!canDeactivate) {
                    observer.next(false);
                    observer.complete();
                }
                else {
                    this._deactivateComponent(index + 1, observer);
                }
            })));
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeactivationHandler.prototype.deactivators$;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/routing/abstract-activation-queued-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class AbstractActivationQueuedGuard {
    constructor() {
        this.queue = [];
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        this.route = route;
        this.state = state;
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        (subscriber) => {
            this.runQueueRecursive(0, subscriber);
        }));
    }
    /**
     * @protected
     * @param {?} step
     * @return {?}
     */
    sequence(step) {
        if (isArray(step)) {
            this.queue.push((/** @type {?} */ (step)));
        }
        else {
            this.queue.push([(/** @type {?} */ (step))]);
        }
        return this;
    }
    /**
     * @private
     * @param {?} level
     * @param {?} subscriber
     * @return {?}
     */
    runQueueRecursive(level, subscriber) {
        /** @type {?} */
        const currentQueueItems = this.queue[level];
        if (!Util.isDefined(currentQueueItems)) {
            subscriber.next(true);
            subscriber.complete();
            return;
        }
        /** @type {?} */
        const activators = map(currentQueueItems, (/**
         * @param {?} queueItem
         * @return {?}
         */
        (queueItem) => {
            return queueItem.canActivate(this.route, this.state);
        }));
        SubscriptionManager.subscribe(forkJoin(activators), new SubscriptionHandler((/**
         * @param {?} canActivateStates
         * @return {?}
         */
        (canActivateStates) => {
            if (!all(canActivateStates)) {
                subscriber.next(false);
                subscriber.complete();
            }
            else {
                this.runQueueRecursive(level + 1, subscriber);
            }
        }), (/**
         * @return {?}
         */
        () => {
            subscriber.next(false);
            subscriber.complete();
        })));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AbstractActivationQueuedGuard.prototype.queue;
    /**
     * @type {?}
     * @private
     */
    AbstractActivationQueuedGuard.prototype.route;
    /**
     * @type {?}
     * @private
     */
    AbstractActivationQueuedGuard.prototype.state;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/routing/abstract-activation-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template TSuccessType, TRouteParams
 */
class AbstractActivationGuard {
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        this.route = route;
        this.state = state;
        return this.onActivate()
            .pipe(switchMap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            return this.onSuccess(result);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            return this.onError(error);
        })));
    }
    /**
     * @protected
     * @return {?}
     */
    get routeConfiguration() {
        return ((/** @type {?} */ (this.route.data))).routeConfiguration;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AbstractActivationGuard.prototype.route;
    /**
     * @type {?}
     * @protected
     */
    AbstractActivationGuard.prototype.state;
    /**
     * @abstract
     * @protected
     * @param {?} result
     * @return {?}
     */
    AbstractActivationGuard.prototype.onSuccess = function (result) { };
    /**
     * @abstract
     * @protected
     * @param {?} error
     * @return {?}
     */
    AbstractActivationGuard.prototype.onError = function (error) { };
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    AbstractActivationGuard.prototype.onActivate = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/routing/abstract-route-configuration.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template TParams
 */
class AbstractRouteConfiguration {
    /**
     * @protected
     * @param {?} pathSegments
     * @param {?=} paramNames
     * @param {?=} parent
     */
    constructor(pathSegments, paramNames, parent) {
        this.pathSegments = pathSegments;
        this.paramNames = paramNames;
        this.parent = parent;
    }
    /**
     * @return {?}
     */
    get path() {
        if (Util.isDefined(this.parent)) {
            return `${this.parent.path}/${this.pathSegments.join('/')}`;
        }
        else {
            return this.pathSegments.join('/');
        }
    }
    /**
     * @return {?}
     */
    get paramDefinition() {
        return extend(Util.isDefined(this.parent) ? this.parent.paramDefinition : {}, this.paramNames || {});
    }
    /**
     * @param {?=} params
     * @return {?}
     */
    buildNavigation(params) {
        /** @type {?} */
        let navigationParams = Util.isDefined(this.parent) ?
            this.parent.buildNavigation(params) : [];
        if (!Util.isDefined(params)) {
            return navigationParams.concat(this.pathSegments);
        }
        navigationParams = navigationParams.concat(map(this.pathSegments, (/**
         * @param {?} segment
         * @return {?}
         */
        (segment) => {
            /** @type {?} */
            const segmentInParams = params[segment.replace(':', '')];
            if (Util.isDefined(segmentInParams)) {
                return segmentInParams;
            }
            return segment;
        })));
        return navigationParams;
    }
    /**
     * @return {?}
     */
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
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AbstractRouteConfiguration.prototype.pathSegments;
    /**
     * @type {?}
     * @protected
     */
    AbstractRouteConfiguration.prototype.paramNames;
    /**
     * @type {?}
     * @protected
     */
    AbstractRouteConfiguration.prototype.parent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interface/routing/i-routing-configuration.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dieses Interface muss mit jeder Angular Route verundet werden
 * damit die abstrakten Routing-Klassen die aktuelle Konfiguration
 * lesen können.
 * @record
 * @template TRoutingParams
 */
function IRoutingConfiguration() { }
if (false) {
    /** @type {?} */
    IRoutingConfiguration.prototype.data;
}
/**
 * @record
 * @template TRoutingParams
 */
function IRoutingData() { }
if (false) {
    /** @type {?} */
    IRoutingData.prototype.routeConfiguration;
    /** @type {?} */
    IRoutingData.prototype.pageTitle;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/routing/abstract-resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template TData, TRouteParams
 */
class AbstractResolver {
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    resolve(route, state) {
        this.route = route;
        this.state = state;
        return this.onResolve();
    }
    /**
     * @protected
     * @return {?}
     */
    get routeConfiguration() {
        return ((/** @type {?} */ (this.route.data))).routeConfiguration;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AbstractResolver.prototype.route;
    /**
     * @type {?}
     * @protected
     */
    AbstractResolver.prototype.state;
    /**
     * @abstract
     * @protected
     * @return {?}
     */
    AbstractResolver.prototype.onResolve = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/interface/ui/i-entity-selector.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template TModelType
 */
function IEntitySelector() { }
if (false) {
    /** @type {?} */
    IEntitySelector.prototype.data;
    /** @type {?} */
    IEntitySelector.prototype.nextRequested;
    /** @type {?} */
    IEntitySelector.prototype.isVisible;
    /**
     * @param {?} dataSet
     * @return {?}
     */
    IEntitySelector.prototype.resolve = function (dataSet) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/ui/base-root-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class BaseRootComponent extends BasePushStrategyObject {
    constructor() {
        super(...arguments);
        this.observables = [];
    }
    /**
     * @param {?} observable
     * @param {?} resolver
     * @return {?}
     */
    listenTo(observable, resolver) {
        this.observables.push(observable);
        observable.isVisible.value = true;
        this.watch(observable.nextRequested, new SubscriptionHandler((/**
         * @param {?} dataSet
         * @return {?}
         */
        (dataSet) => {
            this.onNextRequested(observable, dataSet, resolver);
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        each(this.observables, (/**
         * @param {?} observable
         * @return {?}
         */
        (observable) => observable.isVisible.value = false));
    }
    /**
     * @protected
     * @param {?} observable
     * @param {?} dataSet
     * @param {?} resolver
     * @return {?}
     */
    onNextRequested(observable, dataSet, resolver) {
        this.subscribe(this.canDeactivate(), new SubscriptionHandler((/**
         * @param {?} canDeactivate
         * @return {?}
         */
        (canDeactivate) => {
            if (canDeactivate) {
                // Maybe catch error
                resolver.resolve(this.activatedRoute, dataSet, observable);
            }
        })));
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseRootComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @protected
     */
    BaseRootComponent.prototype.observables;
    /**
     * @abstract
     * @return {?}
     */
    BaseRootComponent.prototype.canDeactivate = function () { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-readonly-cached-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template TModel
 */
class AbstractReadonlyCachedRestservice extends AbstractStoredReadonlyRestservice {
    /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    all(searchParams, httpOptions) {
        if (this.store.isStoreValid()) {
            return of(this.store.items);
        }
        else {
            return super.all(searchParams, httpOptions);
        }
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    show(id, getParams, httpOptions) {
        if (this.store.isItemValid(id)) {
            /** @type {?} */
            const lookup = (/** @type {?} */ ({}));
            lookup[this.identifier] = id;
            return of(find(this.store.items, lookup));
        }
        return super.show(id, getParams, httpOptions);
    }
}
if (false) {
    /** @type {?} */
    AbstractReadonlyCachedRestservice.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-cached-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template TModel
 */
class AbstractCachedRestservice extends AbstractReadonlyCachedRestservice {
    constructor() {
        super(...arguments);
        this.observer = new RestServiceObserver();
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    create(model, getParams, httpOptions) {
        /** @type {?} */
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .create(model, getParams, httpOptions);
        return this.modifyCreateCall(request);
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    destroy(id, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .destroy(id, getParams, httpOptions)
            .pipe(tap((/**
         * @return {?}
         */
        () => {
            this.store.removeByIdentifier(id);
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    partialUpdate(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .partialUpdate(model, getParams, httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.store.update(result);
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    save(model, getParams, httpOptions) {
        /** @type {?} */
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
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    set(model, getParams, httpOptions) {
        /** @type {?} */
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
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    update(model, getParams, httpOptions) {
        /** @type {?} */
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .update(model, getParams, httpOptions);
        request = this.modifyUpdateCall(request);
        return request;
    }
    /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    modifyCreateCall(observable) {
        return observable.pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.store.push(result);
        })));
    }
    /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    modifyUpdateCall(observable) {
        return observable.pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.store.update(result);
        })));
    }
}
if (false) {
    /** @type {?} */
    AbstractCachedRestservice.prototype.observer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/util/abstract-entity-resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IEntityResolverConfiguration() { }
if (false) {
    /** @type {?} */
    IEntityResolverConfiguration.prototype.keepQueryParams;
}
/**
 * @abstract
 * @template TRouteParams, TModel
 */
class AbstractEntityResolver {
    /**
     * @protected
     * @param {?} router
     * @param {?} routeConfiguration
     * @param {?=} configuration
     */
    constructor(router, routeConfiguration, configuration) {
        this.router = router;
        this.routeConfiguration = routeConfiguration;
        this.configuration = configuration;
        this.configuration = configuration || AbstractEntityResolver.generateDefaultConfiguration();
    }
    /**
     * @protected
     * @param {?} activatedRoute
     * @param {?} params
     * @return {?}
     */
    runResolver(activatedRoute, params) {
        /** @type {?} */
        const currentRouteParams = extend(clone(activatedRoute.snapshot.params), params);
        if (this.configuration.keepQueryParams) {
            return this.router.navigate(this.routeConfiguration.buildNavigation(currentRouteParams), { queryParams: activatedRoute.snapshot.queryParams });
        }
        else {
            return this.router.navigate(this.routeConfiguration.buildNavigation(currentRouteParams));
        }
    }
    /**
     * @private
     * @return {?}
     */
    static generateDefaultConfiguration() {
        return {
            keepQueryParams: false
        };
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AbstractEntityResolver.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    AbstractEntityResolver.prototype.routeConfiguration;
    /**
     * @type {?}
     * @protected
     */
    AbstractEntityResolver.prototype.configuration;
    /**
     * @abstract
     * @param {?} activatedRoute
     * @param {?} model
     * @param {?} entitySelector
     * @return {?}
     */
    AbstractEntityResolver.prototype.resolve = function (activatedRoute, model, entitySelector) { };
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/timestamp-item-store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template TModel
 */
class TimestampItemStore extends ItemStore {
    /**
     * @param {?} identifier
     * @param {?} itemLifetimeInSeconds
     * @param {?=} transform
     */
    constructor(identifier, itemLifetimeInSeconds, transform) {
        super(identifier, transform);
        this.itemLifetimeInSeconds = itemLifetimeInSeconds;
        this.wasFilled = false;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    updateItems(items) {
        super.updateItems(items);
        each(this.items, (/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.trackItem(item)));
        this.wasFilled = true;
    }
    /**
     * @return {?}
     */
    clear() {
        super.clear();
        this.wasFilled = false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    update(item) {
        super.update(item);
        this.trackItem(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    push(item) {
        super.push(item);
        this.trackItem(item);
    }
    /**
     * @param {?} identifier
     * @return {?}
     */
    isItemValid(identifier) {
        /** @type {?} */
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
        /** @type {?} */
        const currentTimeStamp = Util.getCurrentUnixTimestamp();
        return (currentTimeStamp - this.itemLifetimeInSeconds) < itemInStore[TimestampItemStore.ITEM_TIMESTAMP_KEY];
    }
    /**
     * @return {?}
     */
    isStoreValid() {
        if (!this.wasFilled) {
            return false;
        }
        if (isEmpty(this.items)) {
            return false;
        }
        return all(this.items, (/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.isItemValid(item[this.identifier])));
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    trackItem(item) {
        item[TimestampItemStore.ITEM_TIMESTAMP_KEY] = Util.getCurrentUnixTimestamp();
    }
}
TimestampItemStore.ITEM_TIMESTAMP_KEY = '__timestamp__';
if (false) {
    /** @type {?} */
    TimestampItemStore.ITEM_TIMESTAMP_KEY;
    /**
     * @type {?}
     * @private
     */
    TimestampItemStore.prototype.wasFilled;
    /**
     * @type {?}
     * @private
     */
    TimestampItemStore.prototype.itemLifetimeInSeconds;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: mrd-core.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AbstractActivationGuard, AbstractActivationQueuedGuard, AbstractCachedRestservice, AbstractEntityResolver, AbstractReadonlyCachedRestservice, AbstractReadonlyRestservice, AbstractResolver, AbstractRestservice, AbstractRouteConfiguration, AbstractStoredReadonlyRestservice, AbstractStoredRestservice, AccessableControlFactory, AccessableFormArray, AccessableFormControl, AccessableFormGroup, BaseObject, BasePushStrategyObject, BaseRootComponent, DeactivationHandler, HttpStatusCodes, ItemStore, ObservableValue, REGEX, ReadonlyRestHandler, RestHandler, SubscriptionHandler, SubscriptionManager, TimestampItemStore, TypeConverter, Util, ValidatorCustom, ValidatorEmail, ValidatorFixedValue, ValidatorFloat, ValidatorInteger, ValidatorPostalCode, ValidatorRequired, RestServiceObserver as ɵa, ReadonlyRestServiceObserver as ɵb };
//# sourceMappingURL=mrd-core.js.map
