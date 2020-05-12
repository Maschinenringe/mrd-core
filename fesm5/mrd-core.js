import { __spread, __values, __extends } from 'tslib';
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
var SubscriptionManager = /** @class */ (function () {
    function SubscriptionManager() {
    }
    /** Subscription mit einem Namen. Diese Funktion ist nützlich,
     falls eine Subscription öfters aufgerufen wird und die vorherige, falls
     noch nicht abgeschlossen, beendet werden soll (HTTP Aufrufe). */
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
    SubscriptionManager.subscribeAs = /**
     * Subscription mit einem Namen. Diese Funktion ist nützlich,
     * falls eine Subscription öfters aufgerufen wird und die vorherige, falls
     * noch nicht abgeschlossen, beendet werden soll (HTTP Aufrufe).
     * @template T
     * @param {?} name
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    function (name, observable, handler) {
        var _this = this;
        /** @type {?} */
        var sub = observable
            .pipe(take(1), finalize((/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (isFunction(handler.onFinished)) {
                handler.onFinished.apply(handler, __spread(args));
                if (sub) {
                    _this.deleteSubscription(name);
                }
            }
        })))
            .subscribe((/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (isFunction(handler.onSuccess)) {
                handler.onSuccess.apply(handler, __spread(args));
            }
        }), (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (isFunction(handler.onError)) {
                handler.onError.apply(handler, __spread(args));
            }
        }));
        this.pushSubscription(name, sub);
        return sub;
    };
    /** Funktion für einmalige Subscriptions (z.B.: Initialisierungsaufrufe) */
    /**
     * Funktion für einmalige Subscriptions (z.B.: Initialisierungsaufrufe)
     * @template T
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    SubscriptionManager.subscribe = /**
     * Funktion für einmalige Subscriptions (z.B.: Initialisierungsaufrufe)
     * @template T
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    function (observable, handler) {
        var _this = this;
        /** @type {?} */
        var sub = observable
            .pipe(take(1), finalize((/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (isFunction(handler.onFinished)) {
                handler.onFinished.apply(handler, __spread(args));
                if (sub) {
                    _this.deleteSubscription(name);
                }
            }
        })))
            .subscribe((/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (isFunction(handler.onSuccess)) {
                handler.onSuccess.apply(handler, __spread(args));
            }
        }), (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (isFunction(handler.onError)) {
                handler.onError.apply(handler, __spread(args));
            }
        }));
        return sub;
    };
    /**
     * @private
     * @param {?} name
     * @param {?} subscription
     * @return {?}
     */
    SubscriptionManager.pushSubscription = /**
     * @private
     * @param {?} name
     * @param {?} subscription
     * @return {?}
     */
    function (name, subscription) {
        this.deleteSubscription(name);
        SubscriptionManager.subscriptions[name] = subscription;
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    SubscriptionManager.deleteSubscription = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var sub = SubscriptionManager.subscriptions[name];
        if (sub) {
            sub.unsubscribe();
            delete SubscriptionManager.subscriptions[name];
        }
    };
    // Alle benannten Subscriptions werden hier gecached
    SubscriptionManager.subscriptions = {};
    return SubscriptionManager;
}());
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
var Util = /** @class */ (function () {
    function Util() {
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    Util.isDefined = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj !== null && obj !== undefined;
    };
    /**
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    Util.armUrlWithSearchParams = /**
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    function (url, queryParams) {
        if (!queryParams || isEmpty(queryParams)) {
            return url;
        }
        each(queryParams, (/**
         * @param {?} value
         * @param {?} key
         * @return {?}
         */
        function (value, key) {
            /** @type {?} */
            var querySelector = url.indexOf('?') === -1 ? '?' : '&';
            url = "" + url + querySelector + key + "=" + value;
        }));
        return url;
    };
    /**
     * @param {?} url
     * @param {?} id
     * @return {?}
     */
    Util.createEntityUrl = /**
     * @param {?} url
     * @param {?} id
     * @return {?}
     */
    function (url, id) {
        return url + "/" + id;
    };
    /**
     * @return {?}
     */
    Util.getBrowser = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ua = navigator.userAgent;
        /** @type {?} */
        var tem;
        /** @type {?} */
        var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
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
    };
    /**
     * @return {?}
     */
    Util.getCurrentUnixTimestamp = /**
     * @return {?}
     */
    function () {
        return Math.round((new Date()).getTime() / 1000);
    };
    /**
     * @return {?}
     */
    Util.guid = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var s4 = (/**
         * @return {?}
         */
        function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        });
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    Util.transformUmlaute = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value
            .replace('Ä', 'Ae')
            .replace('ä', 'ae')
            .replace('Ö', 'Oe')
            .replace('ö', 'oe')
            .replace('Ü', 'Ue')
            .replace('ü', 'ue');
    };
    /**
     * @template TListType
     * @param {?} list
     * @param {?} attribute
     * @return {?}
     */
    Util.sortAlpabetically = /**
     * @template TListType
     * @param {?} list
     * @param {?} attribute
     * @return {?}
     */
    function (list, attribute) {
        var _this = this;
        /** @type {?} */
        var resultList = sortBy(list, (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.transformUmlaute(item[attribute]).toUpperCase(); }));
        return resultList;
    };
    return Util;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/item-store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ItemStore = /** @class */ (function () {
    function ItemStore(identifier, transform) {
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
    ItemStore.prototype.updateItems = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var e_1, _a;
        this.clear();
        items = items || [];
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                this.items$[item[this.identifier]] = item;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.internalTransform$();
    };
    /**
     * @return {?}
     */
    ItemStore.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.items$ = {};
        this.transformedItems$ = [];
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemStore.prototype.remove = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item) {
            delete this.items$[item[this.identifier]];
            this.internalTransform$();
        }
    };
    /**
     * @param {?} identifier
     * @return {?}
     */
    ItemStore.prototype.removeByIdentifier = /**
     * @param {?} identifier
     * @return {?}
     */
    function (identifier) {
        if (Util.isDefined(identifier)) {
            delete this.items$[identifier];
            this.internalTransform$();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemStore.prototype.update = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item) {
            this.items$[item[this.identifier]] = item;
            this.internalTransform$();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemStore.prototype.push = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item) {
            this.items$[item[this.identifier]] = item;
            this.internalTransform$();
        }
    };
    /**
     * @protected
     * @return {?}
     */
    ItemStore.prototype.internalTransform$ = /**
     * @protected
     * @return {?}
     */
    function () {
        this.transformedItems$ = Object.values(this.items$);
        if (this.transform) {
            this.transformedItems$ = this.transform(this.transformedItems$);
        }
        this.onChanged.next(this.transformedItems$);
    };
    Object.defineProperty(ItemStore.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this.transformedItems$;
        },
        enumerable: true,
        configurable: true
    });
    return ItemStore;
}());
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
var  /**
 * @template T
 */
RestHandler = /** @class */ (function () {
    function RestHandler(http, url, observer, identifier) {
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
    RestHandler.prototype.create = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        var _this = this;
        this.observer.isCreatingItem = true;
        return this.http.post(Util.armUrlWithSearchParams(this.url, getParams), model, httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemCreated.next(result);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isCreatingItem = false;
        })));
    };
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    RestHandler.prototype.destroy = /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (id, getParams, httpOptions) {
        var _this = this;
        this.observer.isDestoyingItem = true;
        return this.http.delete(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, id), getParams), httpOptions).pipe(tap((/**
         * @return {?}
         */
        function () {
            _this.observer.onItemDestroyed.next(id);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isDestoyingItem = false;
        })));
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    RestHandler.prototype.partialUpdate = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        var _this = this;
        this.observer.isPartiallyUpdatingItem = true;
        return this.http.patch(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, model[this.identifier]), getParams), model, httpOptions).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemPartialUpdated.next(result);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isPartiallyUpdatingItem = false;
        })));
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    RestHandler.prototype.save = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        var _this = this;
        this.observer.isSavingItem = true;
        /** @type {?} */
        var observable;
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
        function (result) {
            _this.observer.onItemSaved.next(result);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isSavingItem = false;
        })));
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    RestHandler.prototype.set = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        var _this = this;
        this.observer.isSavingItem = true;
        /** @type {?} */
        var observable;
        this.observer.isUpdatingItem = true;
        observable = this.http.put(Util.armUrlWithSearchParams(this.url, getParams), model, httpOptions).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemUpdated.next(result);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isUpdatingItem = false;
        })));
        return observable
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemSaved.next(result);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isSavingItem = false;
        })));
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    RestHandler.prototype.update = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        var _this = this;
        this.observer.isUpdatingItem = true;
        return this.http.put(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, model[this.identifier]), getParams), model, httpOptions).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemUpdated.next(result);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isUpdatingItem = false;
        })));
    };
    return RestHandler;
}());
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
var SubscriptionHandler = /** @class */ (function () {
    function SubscriptionHandler(onSuccess, onError, onFinished) {
        this.onSuccess = onSuccess;
        this.onError = onError;
        this.onFinished = onFinished;
    }
    return SubscriptionHandler;
}());
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
var  /**
 * Abstracte Klasse von der alle Komponenten und Services erben. Sie stellt eine Speicherverwaltung für Observables bereit.
 * @abstract
 */
BaseObject = /** @class */ (function () {
    function BaseObject() {
        /**
         * Wird benutzt um Observables bei der Zerstörung einer Komponente auszulösen.
         * Wird im ngOnDestroy ausgelöst.
         */
        this.$unsubscribe = new Subject();
    }
    /** Funktion zur dauerhaften Überwachung von Subscriptions. Speicher wird bei Zerstörung der Komponente freigegeben. */
    /**
     * Funktion zur dauerhaften Überwachung von Subscriptions. Speicher wird bei Zerstörung der Komponente freigegeben.
     * @protected
     * @template T
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    BaseObject.prototype.watch = /**
     * Funktion zur dauerhaften Überwachung von Subscriptions. Speicher wird bei Zerstörung der Komponente freigegeben.
     * @protected
     * @template T
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    function (observable, handler) {
        return observable
            .pipe(takeUntil(this.$unsubscribe), finalize((/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (handler.onFinished) {
                handler.onFinished.apply(handler, __spread(args));
            }
        })))
            .subscribe((/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (handler.onSuccess) {
                handler.onSuccess.apply(handler, __spread(args));
            }
        }), (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (handler.onError) {
                handler.onError.apply(handler, __spread(args));
            }
        }));
    };
    /** Proxy für SubscriptionManager.subscribe */
    /**
     * Proxy für SubscriptionManager.subscribe
     * @protected
     * @template T
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    BaseObject.prototype.subscribe = /**
     * Proxy für SubscriptionManager.subscribe
     * @protected
     * @template T
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    function (observable, handler) {
        return SubscriptionManager.subscribe(observable, handler);
    };
    /** Proxy für SubscriptionManager.subscribeAs */
    /**
     * Proxy für SubscriptionManager.subscribeAs
     * @protected
     * @template T
     * @param {?} name
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    BaseObject.prototype.subscribeAs = /**
     * Proxy für SubscriptionManager.subscribeAs
     * @protected
     * @template T
     * @param {?} name
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    function (name, observable, handler) {
        return SubscriptionManager.subscribeAs(name, observable, handler);
    };
    /** Alle Observables die mit watch überwacht werden, werden hier ausgelöst. Angular kümmert sich im den Aufruf.
     *  Falls das Kind auch das Interface 'OnDestroy' implementiert, nicht vergessen super.ngOnDestroy() auszurufen, oder der Speicher
     *  wird nicht freigegeben.
     */
    /**
     * Alle Observables die mit watch überwacht werden, werden hier ausgelöst. Angular kümmert sich im den Aufruf.
     *  Falls das Kind auch das Interface 'OnDestroy' implementiert, nicht vergessen super.ngOnDestroy() auszurufen, oder der Speicher
     *  wird nicht freigegeben.
     * @return {?}
     */
    BaseObject.prototype.ngOnDestroy = /**
     * Alle Observables die mit watch überwacht werden, werden hier ausgelöst. Angular kümmert sich im den Aufruf.
     *  Falls das Kind auch das Interface 'OnDestroy' implementiert, nicht vergessen super.ngOnDestroy() auszurufen, oder der Speicher
     *  wird nicht freigegeben.
     * @return {?}
     */
    function () {
        this.$unsubscribe.next();
        this.$unsubscribe.complete();
    };
    return BaseObject;
}());
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
var ValidatorRequired = /** @class */ (function () {
    function ValidatorRequired(error) {
        this.hasError = false;
        this.error = 'Pflichtfeld';
        if (error) {
            this.error = error;
        }
    }
    /**
     * @return {?}
     */
    ValidatorRequired.prototype.validator = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return (/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            _this.value = input.value;
            return _this.validate();
        });
    };
    /**
     * @return {?}
     */
    ValidatorRequired.prototype.validate = /**
     * @return {?}
     */
    function () {
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
    };
    return ValidatorRequired;
}());
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
var  /**
 * @template TType
 */
AccessableFormControl = /** @class */ (function () {
    function AccessableFormControl() {
    }
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    AccessableFormControl.prototype.initialize = /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    function (formState, validators) {
        this.control = new FormControl(formState, null, null);
        this.validateWith(validators);
        this.setValue(formState);
    };
    /**
     * @param {?=} validators
     * @return {?}
     */
    AccessableFormControl.prototype.validateWith = /**
     * @param {?=} validators
     * @return {?}
     */
    function (validators) {
        var _this = this;
        if (validators === void 0) { validators = []; }
        this.validators$ = validators;
        this.control.setValidators(map(validators, (/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            return v.validator();
        })));
        this.required$ = false;
        each(this.validators$, (/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v instanceof ValidatorRequired) {
                _this.required$ = true;
            }
        }));
        this.control.updateValueAndValidity();
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AccessableFormControl.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.showAs) {
            this.control.setValue(this.showAs(value));
        }
        else {
            this.control.setValue(value);
        }
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AccessableFormControl.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.showAs) {
            this.control.reset(this.showAs(value));
        }
        else {
            this.control.reset(value);
        }
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormControl.prototype.markAsUsed = /**
     * @return {?}
     */
    function () {
        this.control.markAsDirty();
        this.control.markAsTouched();
        this.control.updateValueAndValidity();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormControl.prototype.markAsUnused = /**
     * @return {?}
     */
    function () {
        each(this.validators$, (/**
         * @param {?} validator
         * @return {?}
         */
        function (validator) { return validator.hasError = false; }));
        this.control.updateValueAndValidity();
        this.control.markAsPristine();
        this.control.markAsUntouched();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormControl.prototype.markAsDirty = /**
     * @return {?}
     */
    function () {
        this.control.markAsDirty();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormControl.prototype.markAsTouched = /**
     * @return {?}
     */
    function () {
        this.control.markAsTouched();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormControl.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.control.disable();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormControl.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.control.enable();
        return this;
    };
    Object.defineProperty(AccessableFormControl.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.control.disabled) {
                return true;
            }
            return !this.error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "validators", {
        get: /**
         * @return {?}
         */
        function () {
            return this.validators$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "error", {
        get: /**
         * @return {?}
         */
        function () {
            return find(this.validators$, (/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return v.hasError; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.convertTo) {
                return this.convertTo(this.control.value);
            }
            else {
                return this.control.value;
            }
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () {
            return this.required$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "touched", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.touched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "dirty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.dirty;
        },
        enumerable: true,
        configurable: true
    });
    return AccessableFormControl;
}());
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
var  /**
 * @abstract
 * @template TFields, TModel
 */
AccessableFormGroup = /** @class */ (function () {
    function AccessableFormGroup() {
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    AccessableFormGroup.prototype.initialize = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        this.control = new FormGroup(mapObject(fields, (/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            return field.control;
        })));
        this.fields$ = fields;
    };
    /**
     * @return {?}
     */
    AccessableFormGroup.prototype.markAsUsed = /**
     * @return {?}
     */
    function () {
        each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return field.markAsUsed(); }));
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormGroup.prototype.markAsUnused = /**
     * @return {?}
     */
    function () {
        each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return field.markAsUnused(); }));
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormGroup.prototype.markAsDirty = /**
     * @return {?}
     */
    function () {
        each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return field.markAsDirty(); }));
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormGroup.prototype.markAsTouched = /**
     * @return {?}
     */
    function () {
        each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return field.markAsTouched(); }));
        return this;
    };
    /**
     * @param {?} model
     * @return {?}
     */
    AccessableFormGroup.prototype.reset = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        if (!Util.isDefined(model)) {
            model = (/** @type {?} */ ({}));
        }
        each(this.fields$, (/**
         * @param {?} field
         * @param {?} key
         * @return {?}
         */
        function (field, key) { return field.reset(model[key]); }));
        return this;
    };
    Object.defineProperty(AccessableFormGroup.prototype, "fields", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fields$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormGroup.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var ret = (/** @type {?} */ ({}));
            each(this.fields$, (/**
             * @param {?} field
             * @param {?} key
             * @return {?}
             */
            function (field, key) { return ret[key] = field.value; }));
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormGroup.prototype, "dirty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormGroup.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormGroup.prototype, "touched", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.touched;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AccessableFormGroup.prototype.disable = /**
     * @return {?}
     */
    function () {
        return undefined;
    };
    /**
     * @return {?}
     */
    AccessableFormGroup.prototype.enable = /**
     * @return {?}
     */
    function () {
        return undefined;
    };
    return AccessableFormGroup;
}());
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
var  /**
 * @abstract
 * @template TModel
 */
AccessableFormArray = /** @class */ (function () {
    function AccessableFormArray() {
        this.validators$ = [];
        this.required$ = false;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    AccessableFormArray.prototype.initialize = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.control = new FormArray([]);
        this.type = type;
        this.entries$ = [];
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    AccessableFormArray.prototype.push = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        /** @type {?} */
        var item = this.generateFormEntry(entry);
        this.control.push(item.control);
        this.entries$.push(item);
        return item;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    AccessableFormArray.prototype.removeAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var e_1, _a;
        this.control.removeAt(index);
        this.entries$ = reject(this.entries$, (/**
         * @param {?} e
         * @param {?} round
         * @return {?}
         */
        function (e, round) {
            return round === index;
        }));
        /** @type {?} */
        var markAsUsed = false;
        try {
            for (var _b = __values(this.entries$), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                markAsUsed = markAsUsed || entry.dirty;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        markAsUsed ? this.markAsUsed() : this.markAsUnused();
    };
    /**
     * @param {?} validators
     * @return {?}
     */
    AccessableFormArray.prototype.validateWith = /**
     * @param {?} validators
     * @return {?}
     */
    function (validators) {
        var _this = this;
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
        function (v) { return v.validator(); })));
        this.required$ = false;
        each(this.validators$, (/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v instanceof ValidatorRequired) {
                _this.required$ = true;
            }
        }));
        this.control.updateValueAndValidity();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormArray.prototype.clearValidators = /**
     * @return {?}
     */
    function () {
        this.validators$ = [];
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AccessableFormArray.prototype.generateFormEntry = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var validation = new this.type();
        validation.reset(value);
        return validation;
    };
    Object.defineProperty(AccessableFormArray.prototype, "errors", {
        get: /**
         * @return {?}
         */
        function () {
            return compact(map(this.validators$, (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                if (e.hasError) {
                    return e.error;
                }
                return null;
            })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "error", {
        get: /**
         * @return {?}
         */
        function () {
            return find(this.validators$, (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                return v.hasError;
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "validators", {
        get: /**
         * @return {?}
         */
        function () {
            return this.validators$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () {
            return this.required$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "dirty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "touched", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.touched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            var e_2, _a;
            /** @type {?} */
            var ret = [];
            try {
                for (var _b = __values(this.entries$), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var entry = _c.value;
                    ret.push(entry.value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "entries", {
        get: /**
         * @return {?}
         */
        function () {
            return this.entries$;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AccessableFormArray.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.control.disable();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormArray.prototype.enable = /**
     * @return {?}
     */
    function () {
        var e_3, _a;
        this.control.enable();
        try {
            for (var _b = __values(this.entries$), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                entry.enable();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormArray.prototype.markAsDirty = /**
     * @return {?}
     */
    function () {
        var e_4, _a;
        this.control.markAsDirty();
        try {
            for (var _b = __values(this.entries$), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                entry.markAsDirty();
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormArray.prototype.markAsTouched = /**
     * @return {?}
     */
    function () {
        var e_5, _a;
        this.control.markAsTouched();
        try {
            for (var _b = __values(this.entries$), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                entry.markAsTouched();
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormArray.prototype.markAsUnused = /**
     * @return {?}
     */
    function () {
        var e_6, _a;
        this.control.markAsUntouched();
        this.control.markAsPristine();
        try {
            for (var _b = __values(this.entries$), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                entry.markAsUnused();
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormArray.prototype.markAsUsed = /**
     * @return {?}
     */
    function () {
        var e_7, _a;
        this.control.markAsTouched();
        this.control.markAsDirty();
        try {
            for (var _b = __values(this.entries$), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                entry.markAsUsed();
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return this;
    };
    /**
     * @param {?} models
     * @return {?}
     */
    AccessableFormArray.prototype.reset = /**
     * @param {?} models
     * @return {?}
     */
    function (models) {
        var e_8, _a;
        this.entries$ = [];
        this.control.reset([]);
        if (Util.isDefined(models) && isArray(models)) {
            try {
                for (var models_1 = __values(models), models_1_1 = models_1.next(); !models_1_1.done; models_1_1 = models_1.next()) {
                    var model = models_1_1.value;
                    this.push(model);
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (models_1_1 && !models_1_1.done && (_a = models_1.return)) _a.call(models_1);
                }
                finally { if (e_8) throw e_8.error; }
            }
        }
        return this;
    };
    return AccessableFormArray;
}());
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
var  /**
 * @template T
 */
ReadonlyRestServiceObserver = /** @class */ (function () {
    function ReadonlyRestServiceObserver() {
        this.onItemFetched = new Subject();
        this.onItemsFetched = new Subject();
        this.isFetchingItem$ = false;
        this.isFetchingItems$ = false;
    }
    /**
     * @return {?}
     */
    ReadonlyRestServiceObserver.prototype.isActivate = /**
     * @return {?}
     */
    function () {
        return !this.isFetchingItem && !this.isFetchingItems;
    };
    Object.defineProperty(ReadonlyRestServiceObserver.prototype, "isFetchingItems", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isFetchingItems$;
        },
        set: /**
         * @param {?} fetching
         * @return {?}
         */
        function (fetching) {
            this.isFetchingItems$ = fetching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReadonlyRestServiceObserver.prototype, "isFetchingItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isFetchingItem$;
        },
        set: /**
         * @param {?} fetching
         * @return {?}
         */
        function (fetching) {
            this.isFetchingItem$ = fetching;
        },
        enumerable: true,
        configurable: true
    });
    return ReadonlyRestServiceObserver;
}());
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
var  /**
 * @template T
 */
ReadonlyRestHandler = /** @class */ (function () {
    function ReadonlyRestHandler(http, url, observer) {
        this.http = http;
        this.url = url;
        this.observer = observer;
    }
    /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    ReadonlyRestHandler.prototype.all = /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (searchParams, httpOptions) {
        var _this = this;
        this.observer.isFetchingItems = true;
        return this.http.get(Util.armUrlWithSearchParams(this.url, searchParams), httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemsFetched.next(result);
        })), 
        // catchError( _.bind(this.serviceErrorHandler.catchError, this.serviceErrorHandler) as (error: any) => Observable<any> ),
        finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isFetchingItems = false;
        })));
    };
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    ReadonlyRestHandler.prototype.show = /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (id, getParams, httpOptions) {
        var _this = this;
        this.observer.isFetchingItem = true;
        return this.http.get(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, id), getParams), httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemFetched.next(result);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isFetchingItem = false;
        })));
    };
    return ReadonlyRestHandler;
}());
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
var  /**
 * @abstract
 * @template T
 */
AbstractReadonlyRestservice = /** @class */ (function (_super) {
    __extends(AbstractReadonlyRestservice, _super);
    function AbstractReadonlyRestservice(restServiceObserver) {
        var _this = _super.call(this) || this;
        _this.observer = Util.isDefined(restServiceObserver) ? restServiceObserver :
            new ReadonlyRestServiceObserver();
        return _this;
    }
    /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractReadonlyRestservice.prototype.all = /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (searchParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).all(searchParams, httpOptions);
    };
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractReadonlyRestservice.prototype.show = /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (id, getParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).show(id, getParams, httpOptions);
    };
    return AbstractReadonlyRestservice;
}(BaseObject));
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
var  /**
 * @template T
 */
RestServiceObserver = /** @class */ (function (_super) {
    __extends(RestServiceObserver, _super);
    function RestServiceObserver() {
        var _this = _super.call(this) || this;
        _this.onItemCreated = new Subject();
        _this.onItemUpdated = new Subject();
        _this.onItemDestroyed = new Subject();
        _this.onItemPartialUpdated = new Subject();
        _this.onItemSaved = new Subject();
        _this.isCreatingItem$ = false;
        _this.isUpdatingItem$ = false;
        _this.isDestoyingItem$ = false;
        _this.isPartiallyUpdatingItem$ = false;
        return _this;
    }
    /**
     * @return {?}
     */
    RestServiceObserver.prototype.isActivate = /**
     * @return {?}
     */
    function () {
        return _super.prototype.isActivate.call(this) &&
            !this.isCreatingItem$ &&
            !this.isUpdatingItem$ &&
            !this.isDestoyingItem$ &&
            !this.isPartiallyUpdatingItem$ &&
            !this.isSavingItem$;
    };
    Object.defineProperty(RestServiceObserver.prototype, "isCreatingItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isCreatingItem$;
        },
        set: /**
         * @param {?} isCreating
         * @return {?}
         */
        function (isCreating) {
            this.isCreatingItem$ = isCreating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestServiceObserver.prototype, "isUpdatingItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isUpdatingItem$;
        },
        set: /**
         * @param {?} isUpdating
         * @return {?}
         */
        function (isUpdating) {
            this.isUpdatingItem$ = isUpdating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestServiceObserver.prototype, "isDestoyingItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isDestoyingItem$;
        },
        set: /**
         * @param {?} isDestroying
         * @return {?}
         */
        function (isDestroying) {
            this.isDestoyingItem$ = isDestroying;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestServiceObserver.prototype, "isPartiallyUpdatingItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isPartiallyUpdatingItem$;
        },
        set: /**
         * @param {?} isUpdating
         * @return {?}
         */
        function (isUpdating) {
            this.isPartiallyUpdatingItem$ = isUpdating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestServiceObserver.prototype, "isSavingItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSavingItem$;
        },
        set: /**
         * @param {?} isSaving
         * @return {?}
         */
        function (isSaving) {
            this.isSavingItem$ = isSaving;
        },
        enumerable: true,
        configurable: true
    });
    return RestServiceObserver;
}(ReadonlyRestServiceObserver));
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
var  /**
 * @abstract
 * @template T
 */
AbstractRestservice = /** @class */ (function (_super) {
    __extends(AbstractRestservice, _super);
    function AbstractRestservice() {
        return _super.call(this, new RestServiceObserver()) || this;
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractRestservice.prototype.create = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).create(model, getParams, httpOptions);
    };
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractRestservice.prototype.destroy = /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (id, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).destroy(id, getParams, httpOptions);
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractRestservice.prototype.partialUpdate = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .partialUpdate(model, getParams, httpOptions);
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractRestservice.prototype.save = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).save(model, getParams, httpOptions);
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractRestservice.prototype.update = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).update(model, getParams, httpOptions);
    };
    return AbstractRestservice;
}(AbstractReadonlyRestservice));
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
var  /**
 * @abstract
 */
ValidatorCustom = /** @class */ (function () {
    function ValidatorCustom() {
        this.hasError = false;
    }
    /**
     * @return {?}
     */
    ValidatorCustom.prototype.validator = /**
     * @return {?}
     */
    function () {
        return null;
    };
    /**
     * @return {?}
     */
    ValidatorCustom.prototype.validate = /**
     * @return {?}
     */
    function () {
        return null;
    };
    return ValidatorCustom;
}());
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
var REGEX = {
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
var ValidatorEmail = /** @class */ (function () {
    function ValidatorEmail(error) {
        this.hasError = false;
        this.error = 'Bitte geben Sie eine gültige E-Mail ein';
        if (error) {
            this.error = error;
        }
    }
    /**
     * @return {?}
     */
    ValidatorEmail.prototype.validator = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return (/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            _this.value = input.value;
            return _this.validate();
        });
    };
    /**
     * @return {?}
     */
    ValidatorEmail.prototype.validate = /**
     * @return {?}
     */
    function () {
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
    };
    return ValidatorEmail;
}());
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
var ValidatorFixedValue = /** @class */ (function () {
    function ValidatorFixedValue(comparator, error) {
        if (error === void 0) { error = null; }
        this.comparator = comparator;
        this.error = error;
    }
    /**
     * @return {?}
     */
    ValidatorFixedValue.prototype.validate = /**
     * @return {?}
     */
    function () {
        this.hasError = false;
        if (this.comparator === this.value$) {
            return null;
        }
        else {
            this.hasError = true;
            return { validatorFixed: true };
        }
    };
    /**
     * @return {?}
     */
    ValidatorFixedValue.prototype.validator = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return (/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            _this.value$ = input.value;
            return _this.validate();
        });
    };
    return ValidatorFixedValue;
}());
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
var ValidatorFloat = /** @class */ (function () {
    function ValidatorFloat(digitsBefore, digitsAfter) {
        this.digitsBefore = digitsBefore;
        this.digitsAfter = digitsAfter;
        this.hasError = false;
        this.error = 'Bitte geben Sie eine valide Zahl ein';
    }
    /**
     * @return {?}
     */
    ValidatorFloat.prototype.validator = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return (/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            _this.value = input.value;
            return _this.validate();
        });
    };
    /**
     * @return {?}
     */
    ValidatorFloat.prototype.validate = /**
     * @return {?}
     */
    function () {
        this.hasError = false;
        this.error = 'Bitte geben Sie eine valide Zahl ein';
        /** @type {?} */
        var validAmountDisgitsBefore = false;
        /** @type {?} */
        var validAmountDisgitsAfter = false;
        if (!this.value) {
            return null;
        }
        if (this.value && REGEX.INPUT_NUMBER.test(this.value.toString())) {
            /** @type {?} */
            var numberSplitted = this.value.toString().split(',');
            if (Util.isDefined(this.digitsBefore) && this.digitsAfter === 0 && numberSplitted.length === 2) {
                this.hasError = true;
                this.error = 'Es sind keine Nachkommastellen erlaubt';
                return { invalidFloat: true };
            }
            if (numberSplitted.length !== 2) {
                if (Util.isDefined(this.digitsBefore)) {
                    if (this.value.length > this.digitsBefore) {
                        this.error = "Bitte runden Sie die Zahl auf " + (this.digitsBefore === 1 ? 'eine Stelle' : this.digitsBefore.toString() + ' Stellen') + " vor dem Komma";
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
                    this.error = "Bitte runden Sie die Zahl auf " + (this.digitsBefore === 1 ? 'eine Stelle' : this.digitsBefore.toString() + ' Stellen') + " vor dem Komma";
                }
            }
            else {
                validAmountDisgitsBefore = true;
            }
            if (Util.isDefined(this.digitsAfter) && this.digitsAfter > 0) {
                validAmountDisgitsAfter = numberSplitted[1].length <= this.digitsAfter;
                if (!validAmountDisgitsAfter) {
                    this.error = "Bitte runden Sie die Zahl auf " + (this.digitsAfter === 1 ? ' eine Stelle' : this.digitsAfter.toString() + ' Stellen') + " nach dem Komma";
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
    };
    return ValidatorFloat;
}());
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
var ValidatorInteger = /** @class */ (function () {
    function ValidatorInteger(allowNegativeValues$) {
        if (allowNegativeValues$ === void 0) { allowNegativeValues$ = false; }
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
    ValidatorInteger.prototype.validate = /**
     * @return {?}
     */
    function () {
        this.hasError = false;
        if (!this.value$) {
            return null;
        }
        if (!this.regex$.test(this.value$)) {
            this.hasError = true;
            return { invalidInteger: true };
        }
        return null;
    };
    /**
     * @return {?}
     */
    ValidatorInteger.prototype.validator = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return (/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            _this.value$ = input.value;
            return _this.validate();
        });
    };
    return ValidatorInteger;
}());
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
var ValidatorPostalCode = /** @class */ (function () {
    function ValidatorPostalCode(error) {
        this.hasError = false;
        this.error = 'Bitte geben Sie eine gültige Postleitzahl ein';
        if (error) {
            this.error = error;
        }
    }
    /**
     * @return {?}
     */
    ValidatorPostalCode.prototype.validator = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return (/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            _this.value = input.value;
            return _this.validate();
        });
    };
    /**
     * @return {?}
     */
    ValidatorPostalCode.prototype.validate = /**
     * @return {?}
     */
    function () {
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
    };
    return ValidatorPostalCode;
}());
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
var  /**
 * @abstract
 */
TypeConverter = /** @class */ (function () {
    function TypeConverter() {
    }
    /** Versucht den Wert in eine Zahl zu konvertieren. */
    /**
     * Versucht den Wert in eine Zahl zu konvertieren.
     * @param {?} value
     * @return {?}
     */
    TypeConverter.toNumber = /**
     * Versucht den Wert in eine Zahl zu konvertieren.
     * @param {?} value
     * @return {?}
     */
    function (value) {
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
    };
    /** Nimmt eine Zahl und gibt eine deutsche Representation dieses Wertes zurück */
    /**
     * Nimmt eine Zahl und gibt eine deutsche Representation dieses Wertes zurück
     * @param {?} value
     * @param {?=} stellen
     * @return {?}
     */
    TypeConverter.asGermanFloat = /**
     * Nimmt eine Zahl und gibt eine deutsche Representation dieses Wertes zurück
     * @param {?} value
     * @param {?=} stellen
     * @return {?}
     */
    function (value, stellen) {
        if (value === null || value === undefined) {
            return undefined;
        }
        if (!isUndefined(stellen) && isNumber(value)) {
            value = ((/** @type {?} */ (value))).toFixed(stellen);
        }
        return value.toString().replace('.', ',');
    };
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
    TypeConverter.booleanNumberToSting = /** Erzeugt ein moment object und setzt dieses auf UTC, falls dies noch nicht geschehen ist. */
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
    function (n) {
        return n === 1 ? 'Ja' : 'Nein';
    };
    /** Konvertiert ein Moment Object zu einem Date Object */
    /*public static toJSDate(mObject: moment.Moment): Date {
      const mDate = TypeConverter.utcDate(mObject);
      if (!mDate) {
        return undefined;
      }
      return mDate.toDate();
    }*/
    /** Kovertiert einen String in einen Regex um eine Volltextsuche zu ermöglichen */
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
    TypeConverter.asRegex = /** Konvertiert ein Moment Object zu einem Date Object */
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
    function (text) {
        /** @type {?} */
        var builderString = '';
        if (isEmpty(text)) {
            return new RegExp(builderString);
        }
        each(text.split(''), (/**
         * @param {?} char
         * @return {?}
         */
        function (char) {
            builderString = builderString + ("" + char);
        }));
        return new RegExp(builderString.replace(REGEX.SPECIAL_CHARS_REGEX, '\\$&'), 'i');
    };
    /**
     * @param {?} bool
     * @return {?}
     */
    TypeConverter.booleanToNumber = /**
     * @param {?} bool
     * @return {?}
     */
    function (bool) {
        return bool === true ? 1 : 0;
    };
    /**
     * @param {?} digit
     * @return {?}
     */
    TypeConverter.numberToBoolean = /**
     * @param {?} digit
     * @return {?}
     */
    function (digit) {
        return digit === 1;
    };
    /** Kovertiert einen String, der dem Regex einer Zahl entspricht, in eine Zahl */
    /**
     * Kovertiert einen String, der dem Regex einer Zahl entspricht, in eine Zahl
     * @private
     * @param {?} value
     * @return {?}
     */
    TypeConverter.convertInputStringToNumber = /**
     * Kovertiert einen String, der dem Regex einer Zahl entspricht, in eine Zahl
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value.includes('.')) {
            return Number.parseFloat(value);
        }
        if (value.includes(',')) {
            return Number.parseFloat(value.replace(',', '.'));
        }
        return Number.parseInt(value);
    };
    return TypeConverter;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/accessable-control-factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
AccessableControlFactory = /** @class */ (function () {
    function AccessableControlFactory() {
    }
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    AccessableControlFactory.simpleControl = /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    function (formState, validators) {
        if (formState === void 0) { formState = null; }
        /** @type {?} */
        var control = new AccessableFormControl();
        control.initialize(formState, validators);
        return control;
    };
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    AccessableControlFactory.numberControl = /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    function (formState, validators) {
        if (formState === void 0) { formState = null; }
        /** @type {?} */
        var control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = TypeConverter.asGermanFloat;
        control.convertTo = TypeConverter.toNumber;
        control.setValue(formState);
        return control;
    };
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    AccessableControlFactory.numberBooleanControl = /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    function (formState, validators) {
        if (formState === void 0) { formState = null; }
        /** @type {?} */
        var control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = TypeConverter.numberToBoolean;
        control.convertTo = TypeConverter.booleanToNumber;
        control.setValue(formState);
        return control;
    };
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    AccessableControlFactory.dateControl = /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    function (formState, validators) {
        if (formState === void 0) { formState = null; }
        /** @type {?} */
        var control = AccessableControlFactory.simpleControl(formState, validators);
        return control;
    };
    /** Schneides alle Whitespaces am Ende und Anfang weg */
    /**
     * Schneides alle Whitespaces am Ende und Anfang weg
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    AccessableControlFactory.trimControl = /**
     * Schneides alle Whitespaces am Ende und Anfang weg
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    function (formState, validators) {
        if (formState === void 0) { formState = null; }
        /** @type {?} */
        var control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = (/**
         * @param {?} str
         * @return {?}
         */
        function (str) {
            if (Util.isDefined(str)) {
                return str.trim();
            }
            return str;
        });
        control.convertTo = (/**
         * @param {?} str
         * @return {?}
         */
        function (str) {
            if (Util.isDefined(str)) {
                return str.trim();
            }
            return str;
        });
        return control;
    };
    return AccessableControlFactory;
}());

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
var HttpStatusCodes = {
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
var  /**
 * @abstract
 */
BasePushStrategyObject = /** @class */ (function (_super) {
    __extends(BasePushStrategyObject, _super);
    function BasePushStrategyObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} subject
     * @return {?}
     */
    BasePushStrategyObject.prototype.markForCheckIf = /**
     * @protected
     * @param {?} subject
     * @return {?}
     */
    function (subject) {
        return this.watch(subject, new SubscriptionHandler(this.cdr.markForCheck.bind(this.cdr)));
    };
    return BasePushStrategyObject;
}(BaseObject));
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
var  /**
 * Diese Klasse kann verwendet werden um Werte zu speichern und die automatisch
 * überwachbar zu machen. Dadurch können UI Push Strategien leichter implementiert werden.
 * @template TValueType
 */
ObservableValue = /** @class */ (function () {
    function ObservableValue(initialValue, equals) {
        this.equals = equals;
        this.changed = new Subject();
        this.value$ = initialValue;
        this.equals = Util.isDefined(this.equals) ? this.equals : this.defaultComparator;
    }
    Object.defineProperty(ObservableValue.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value$;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!this.equals(this.value$, value)) {
                this.value$ = value;
                this.changed.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} current
     * @param {?} next
     * @return {?}
     */
    ObservableValue.prototype.defaultComparator = /**
     * @private
     * @param {?} current
     * @param {?} next
     * @return {?}
     */
    function (current, next) {
        return current === next;
    };
    return ObservableValue;
}());
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
var  /**
 * @abstract
 * @template TModel
 */
AbstractStoredReadonlyRestservice = /** @class */ (function (_super) {
    __extends(AbstractStoredReadonlyRestservice, _super);
    function AbstractStoredReadonlyRestservice(restServiceObserver) {
        var _this = _super.call(this) || this;
        _this.observer = Util.isDefined(restServiceObserver) ? restServiceObserver :
            new ReadonlyRestServiceObserver();
        return _this;
    }
    /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredReadonlyRestservice.prototype.all = /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (searchParams, httpOptions) {
        var _this = this;
        return new ReadonlyRestHandler(this.http, this.url, this.observer).all(searchParams, httpOptions)
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.store.updateItems(response);
        })));
    };
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredReadonlyRestservice.prototype.show = /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (id, getParams, httpOptions) {
        var _this = this;
        return new ReadonlyRestHandler(this.http, this.url, this.observer).show(id, getParams, httpOptions)
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.store.update(response);
        })));
    };
    return AbstractStoredReadonlyRestservice;
}(BaseObject));
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
var  /**
 * @abstract
 * @template TModel
 */
AbstractStoredRestservice = /** @class */ (function (_super) {
    __extends(AbstractStoredRestservice, _super);
    function AbstractStoredRestservice() {
        return _super.call(this, new RestServiceObserver()) || this;
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredRestservice.prototype.create = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        /** @type {?} */
        var request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .create(model, getParams, httpOptions);
        return this.modifyCreateCall(request);
    };
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredRestservice.prototype.destroy = /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (id, getParams, httpOptions) {
        var _this = this;
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .destroy(id, getParams, httpOptions)
            .pipe(tap((/**
         * @return {?}
         */
        function () {
            _this.store.removeByIdentifier(id);
        })));
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredRestservice.prototype.partialUpdate = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        var _this = this;
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .partialUpdate(model, getParams, httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.store.update(result);
        })));
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredRestservice.prototype.save = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        /** @type {?} */
        var request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .save(model, getParams, httpOptions);
        if (Util.isDefined(model[this.identifier])) {
            request = this.modifyUpdateCall(request);
        }
        else {
            request = this.modifyCreateCall(request);
        }
        return request;
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredRestservice.prototype.set = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        /** @type {?} */
        var request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .set(model, getParams, httpOptions);
        if (Util.isDefined(model[this.identifier])) {
            request = this.modifyUpdateCall(request);
        }
        else {
            request = this.modifyCreateCall(request);
        }
        return request;
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredRestservice.prototype.update = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        /** @type {?} */
        var request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .update(model, getParams, httpOptions);
        request = this.modifyUpdateCall(request);
        return request;
    };
    /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    AbstractStoredRestservice.prototype.modifyCreateCall = /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    function (observable) {
        var _this = this;
        return observable.pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.store.push(result);
        })));
    };
    /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    AbstractStoredRestservice.prototype.modifyUpdateCall = /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    function (observable) {
        var _this = this;
        return observable.pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.store.update(result);
        })));
    };
    return AbstractStoredRestservice;
}(AbstractStoredReadonlyRestservice));
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
var DeactivationHandler = /** @class */ (function () {
    function DeactivationHandler() {
        this.deactivators$ = {};
    }
    /**
     * @param {?} name
     * @param {?} component
     * @return {?}
     */
    DeactivationHandler.prototype.register = /**
     * @param {?} name
     * @param {?} component
     * @return {?}
     */
    function (name, component) {
        this.deactivators$[name] = component;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    DeactivationHandler.prototype.remove = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        delete this.deactivators$[name];
    };
    /**
     * @return {?}
     */
    DeactivationHandler.prototype.canDeactivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            _this._deactivateComponent(0, subscriber);
        }));
    };
    /**
     * @private
     * @param {?} index
     * @param {?} observer
     * @return {?}
     */
    DeactivationHandler.prototype._deactivateComponent = /**
     * @private
     * @param {?} index
     * @param {?} observer
     * @return {?}
     */
    function (index, observer) {
        var _this = this;
        /** @type {?} */
        var component = Object.values(this.deactivators$)[index];
        if (!component) {
            observer.next(true);
            observer.complete();
        }
        else {
            SubscriptionManager.subscribe(component.canDeactivate(), new SubscriptionHandler((/**
             * @param {?} canDeactivate
             * @return {?}
             */
            function (canDeactivate) {
                if (!canDeactivate) {
                    observer.next(false);
                    observer.complete();
                }
                else {
                    _this._deactivateComponent(index + 1, observer);
                }
            })));
        }
    };
    return DeactivationHandler;
}());
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
var  /**
 * @abstract
 */
AbstractActivationQueuedGuard = /** @class */ (function () {
    function AbstractActivationQueuedGuard() {
        this.queue = [];
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AbstractActivationQueuedGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        var _this = this;
        this.route = route;
        this.state = state;
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            _this.runQueueRecursive(0, subscriber);
        }));
    };
    /**
     * @protected
     * @param {?} step
     * @return {?}
     */
    AbstractActivationQueuedGuard.prototype.sequence = /**
     * @protected
     * @param {?} step
     * @return {?}
     */
    function (step) {
        if (isArray(step)) {
            this.queue.push((/** @type {?} */ (step)));
        }
        else {
            this.queue.push([(/** @type {?} */ (step))]);
        }
        return this;
    };
    /**
     * @private
     * @param {?} level
     * @param {?} subscriber
     * @return {?}
     */
    AbstractActivationQueuedGuard.prototype.runQueueRecursive = /**
     * @private
     * @param {?} level
     * @param {?} subscriber
     * @return {?}
     */
    function (level, subscriber) {
        var _this = this;
        /** @type {?} */
        var currentQueueItems = this.queue[level];
        if (!Util.isDefined(currentQueueItems)) {
            subscriber.next(true);
            subscriber.complete();
            return;
        }
        /** @type {?} */
        var activators = map(currentQueueItems, (/**
         * @param {?} queueItem
         * @return {?}
         */
        function (queueItem) {
            return queueItem.canActivate(_this.route, _this.state);
        }));
        SubscriptionManager.subscribe(forkJoin(activators), new SubscriptionHandler((/**
         * @param {?} canActivateStates
         * @return {?}
         */
        function (canActivateStates) {
            if (!all(canActivateStates)) {
                subscriber.next(false);
                subscriber.complete();
            }
            else {
                _this.runQueueRecursive(level + 1, subscriber);
            }
        }), (/**
         * @return {?}
         */
        function () {
            subscriber.next(false);
            subscriber.complete();
        })));
    };
    return AbstractActivationQueuedGuard;
}());
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
var  /**
 * @abstract
 * @template TSuccessType, TRouteParams
 */
AbstractActivationGuard = /** @class */ (function () {
    function AbstractActivationGuard() {
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AbstractActivationGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        var _this = this;
        this.route = route;
        this.state = state;
        return this.onActivate()
            .pipe(switchMap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            return _this.onSuccess(result);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.onError(error);
        })));
    };
    Object.defineProperty(AbstractActivationGuard.prototype, "routeConfiguration", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ (this.route.data))).routeConfiguration;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractActivationGuard;
}());
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
var  /**
 * @abstract
 * @template TParams
 */
AbstractRouteConfiguration = /** @class */ (function () {
    function AbstractRouteConfiguration(pathSegments, paramNames, parent) {
        this.pathSegments = pathSegments;
        this.paramNames = paramNames;
        this.parent = parent;
    }
    Object.defineProperty(AbstractRouteConfiguration.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () {
            if (Util.isDefined(this.parent)) {
                return this.parent.path + "/" + this.pathSegments.join('/');
            }
            else {
                return this.pathSegments.join('/');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRouteConfiguration.prototype, "paramDefinition", {
        get: /**
         * @return {?}
         */
        function () {
            return extend(Util.isDefined(this.parent) ? this.parent.paramDefinition : {}, this.paramNames || {});
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} params
     * @return {?}
     */
    AbstractRouteConfiguration.prototype.buildNavigation = /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var navigationParams = Util.isDefined(this.parent) ?
            this.parent.buildNavigation(params) : [];
        if (!Util.isDefined(params)) {
            return navigationParams.concat(this.pathSegments);
        }
        navigationParams = navigationParams.concat(map(this.pathSegments, (/**
         * @param {?} segment
         * @return {?}
         */
        function (segment) {
            /** @type {?} */
            var segmentInParams = params[segment.replace(':', '')];
            if (Util.isDefined(segmentInParams)) {
                return segmentInParams;
            }
            return segment;
        })));
        return navigationParams;
    };
    /**
     * @return {?}
     */
    AbstractRouteConfiguration.prototype.validate = /**
     * @return {?}
     */
    function () {
        for (var pathSnippet in this.pathSegments) {
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
    };
    return AbstractRouteConfiguration;
}());
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
var  /**
 * @abstract
 * @template TData, TRouteParams
 */
AbstractResolver = /** @class */ (function () {
    function AbstractResolver() {
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AbstractResolver.prototype.resolve = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        this.route = route;
        this.state = state;
        return this.onResolve();
    };
    Object.defineProperty(AbstractResolver.prototype, "routeConfiguration", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ (this.route.data))).routeConfiguration;
        },
        enumerable: true,
        configurable: true
    });
    return AbstractResolver;
}());
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
var  /**
 * @abstract
 */
BaseRootComponent = /** @class */ (function (_super) {
    __extends(BaseRootComponent, _super);
    function BaseRootComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.observables = [];
        return _this;
    }
    /**
     * @param {?} observable
     * @param {?} resolver
     * @return {?}
     */
    BaseRootComponent.prototype.listenTo = /**
     * @param {?} observable
     * @param {?} resolver
     * @return {?}
     */
    function (observable, resolver) {
        var _this = this;
        this.observables.push(observable);
        observable.isVisible.value = true;
        this.watch(observable.nextRequested, new SubscriptionHandler((/**
         * @param {?} dataSet
         * @return {?}
         */
        function (dataSet) {
            _this.onNextRequested(observable, dataSet, resolver);
        })));
    };
    /**
     * @return {?}
     */
    BaseRootComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        each(this.observables, (/**
         * @param {?} observable
         * @return {?}
         */
        function (observable) { return observable.isVisible.value = false; }));
    };
    /**
     * @protected
     * @param {?} observable
     * @param {?} dataSet
     * @param {?} resolver
     * @return {?}
     */
    BaseRootComponent.prototype.onNextRequested = /**
     * @protected
     * @param {?} observable
     * @param {?} dataSet
     * @param {?} resolver
     * @return {?}
     */
    function (observable, dataSet, resolver) {
        var _this = this;
        this.subscribe(this.canDeactivate(), new SubscriptionHandler((/**
         * @param {?} canDeactivate
         * @return {?}
         */
        function (canDeactivate) {
            if (canDeactivate) {
                // Maybe catch error
                resolver.resolve(_this.activatedRoute, dataSet, observable);
            }
        })));
    };
    return BaseRootComponent;
}(BasePushStrategyObject));
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
var  /**
 * @abstract
 * @template TModel
 */
AbstractReadonlyCachedRestservice = /** @class */ (function (_super) {
    __extends(AbstractReadonlyCachedRestservice, _super);
    function AbstractReadonlyCachedRestservice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractReadonlyCachedRestservice.prototype.all = /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (searchParams, httpOptions) {
        if (this.store.isStoreValid()) {
            return of(this.store.items);
        }
        else {
            return _super.prototype.all.call(this, searchParams, httpOptions);
        }
    };
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractReadonlyCachedRestservice.prototype.show = /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (id, getParams, httpOptions) {
        if (this.store.isItemValid(id)) {
            /** @type {?} */
            var lookup = (/** @type {?} */ ({}));
            lookup[this.identifier] = id;
            return of(find(this.store.items, lookup));
        }
        return _super.prototype.show.call(this, id, getParams, httpOptions);
    };
    return AbstractReadonlyCachedRestservice;
}(AbstractStoredReadonlyRestservice));
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
var  /**
 * @abstract
 * @template TModel
 */
AbstractCachedRestservice = /** @class */ (function (_super) {
    __extends(AbstractCachedRestservice, _super);
    function AbstractCachedRestservice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.observer = new RestServiceObserver();
        return _this;
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractCachedRestservice.prototype.create = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        /** @type {?} */
        var request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .create(model, getParams, httpOptions);
        return this.modifyCreateCall(request);
    };
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractCachedRestservice.prototype.destroy = /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (id, getParams, httpOptions) {
        var _this = this;
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .destroy(id, getParams, httpOptions)
            .pipe(tap((/**
         * @return {?}
         */
        function () {
            _this.store.removeByIdentifier(id);
        })));
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractCachedRestservice.prototype.partialUpdate = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        var _this = this;
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .partialUpdate(model, getParams, httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.store.update(result);
        })));
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractCachedRestservice.prototype.save = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        /** @type {?} */
        var request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .save(model, getParams, httpOptions);
        if (Util.isDefined(model[this.identifier])) {
            request = this.modifyUpdateCall(request);
        }
        else {
            request = this.modifyCreateCall(request);
        }
        return request;
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractCachedRestservice.prototype.set = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        /** @type {?} */
        var request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .set(model, getParams, httpOptions);
        if (Util.isDefined(model[this.identifier])) {
            request = this.modifyUpdateCall(request);
        }
        else {
            request = this.modifyCreateCall(request);
        }
        return request;
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractCachedRestservice.prototype.update = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        /** @type {?} */
        var request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .update(model, getParams, httpOptions);
        request = this.modifyUpdateCall(request);
        return request;
    };
    /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    AbstractCachedRestservice.prototype.modifyCreateCall = /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    function (observable) {
        var _this = this;
        return observable.pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.store.push(result);
        })));
    };
    /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    AbstractCachedRestservice.prototype.modifyUpdateCall = /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    function (observable) {
        var _this = this;
        return observable.pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.store.update(result);
        })));
    };
    return AbstractCachedRestservice;
}(AbstractReadonlyCachedRestservice));
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
var  /**
 * @abstract
 * @template TRouteParams, TModel
 */
AbstractEntityResolver = /** @class */ (function () {
    function AbstractEntityResolver(router, routeConfiguration, configuration) {
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
    AbstractEntityResolver.prototype.runResolver = /**
     * @protected
     * @param {?} activatedRoute
     * @param {?} params
     * @return {?}
     */
    function (activatedRoute, params) {
        /** @type {?} */
        var currentRouteParams = extend(clone(activatedRoute.snapshot.params), params);
        if (this.configuration.keepQueryParams) {
            return this.router.navigate(this.routeConfiguration.buildNavigation(currentRouteParams), { queryParams: activatedRoute.snapshot.queryParams });
        }
        else {
            return this.router.navigate(this.routeConfiguration.buildNavigation(currentRouteParams));
        }
    };
    /**
     * @private
     * @return {?}
     */
    AbstractEntityResolver.generateDefaultConfiguration = /**
     * @private
     * @return {?}
     */
    function () {
        return {
            keepQueryParams: false
        };
    };
    return AbstractEntityResolver;
}());
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
var TimestampItemStore = /** @class */ (function (_super) {
    __extends(TimestampItemStore, _super);
    function TimestampItemStore(identifier, itemLifetimeInSeconds, transform) {
        var _this = _super.call(this, identifier, transform) || this;
        _this.itemLifetimeInSeconds = itemLifetimeInSeconds;
        _this.wasFilled = false;
        return _this;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    TimestampItemStore.prototype.updateItems = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        _super.prototype.updateItems.call(this, items);
        each(this.items, (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.trackItem(item); }));
        this.wasFilled = true;
    };
    /**
     * @return {?}
     */
    TimestampItemStore.prototype.clear = /**
     * @return {?}
     */
    function () {
        _super.prototype.clear.call(this);
        this.wasFilled = false;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    TimestampItemStore.prototype.update = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        _super.prototype.update.call(this, item);
        this.trackItem(item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    TimestampItemStore.prototype.push = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        _super.prototype.push.call(this, item);
        this.trackItem(item);
    };
    /**
     * @param {?} identifier
     * @return {?}
     */
    TimestampItemStore.prototype.isItemValid = /**
     * @param {?} identifier
     * @return {?}
     */
    function (identifier) {
        var e_1, _a;
        /** @type {?} */
        var itemInStore = null;
        try {
            for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item[this.identifier] === identifier) {
                    itemInStore = item;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!Util.isDefined(itemInStore)) {
            return false;
        }
        /** @type {?} */
        var currentTimeStamp = Util.getCurrentUnixTimestamp();
        return (currentTimeStamp - this.itemLifetimeInSeconds) < itemInStore[TimestampItemStore.ITEM_TIMESTAMP_KEY];
    };
    /**
     * @return {?}
     */
    TimestampItemStore.prototype.isStoreValid = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (item) { return _this.isItemValid(item[_this.identifier]); }));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    TimestampItemStore.prototype.trackItem = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item[TimestampItemStore.ITEM_TIMESTAMP_KEY] = Util.getCurrentUnixTimestamp();
    };
    TimestampItemStore.ITEM_TIMESTAMP_KEY = '__timestamp__';
    return TimestampItemStore;
}(ItemStore));
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
