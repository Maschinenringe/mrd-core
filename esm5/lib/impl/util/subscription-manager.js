/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/subscription-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { finalize, take } from 'rxjs/operators';
import * as _ from 'underscore';
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
            if (_.isFunction(handler.onFinished)) {
                handler.onFinished.apply(handler, tslib_1.__spread(args));
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
            if (_.isFunction(handler.onSuccess)) {
                handler.onSuccess.apply(handler, tslib_1.__spread(args));
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
            if (_.isFunction(handler.onError)) {
                handler.onError.apply(handler, tslib_1.__spread(args));
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
            if (_.isFunction(handler.onFinished)) {
                handler.onFinished.apply(handler, tslib_1.__spread(args));
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
            if (_.isFunction(handler.onSuccess)) {
                handler.onSuccess.apply(handler, tslib_1.__spread(args));
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
            if (_.isFunction(handler.onError)) {
                handler.onError.apply(handler, tslib_1.__spread(args));
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
export { SubscriptionManager };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SubscriptionManager.subscriptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvc3Vic2NyaXB0aW9uLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUc5QyxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQzs7Ozs7O0FBSWhDO0lBQUE7SUFtRkEsQ0FBQztJQWhGQzs7cUVBRWlFOzs7Ozs7Ozs7OztJQUNuRCwrQkFBVzs7Ozs7Ozs7OztJQUF6QixVQUNFLElBQVksRUFDWixVQUF5QixFQUN6QixPQUE2QjtRQUgvQixpQkErQkM7O1lBMUJPLEdBQUcsR0FBRyxVQUFVO2FBQ25CLElBQUksQ0FDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsUUFBUTs7OztRQUFDO1lBQUMsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUN0QixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLENBQUMsVUFBVSxPQUFsQixPQUFPLG1CQUFlLElBQUksR0FBRTtnQkFDNUIsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMvQjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQ0g7YUFDQSxTQUFTOzs7O1FBQ1I7WUFBQyxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBQ2IsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxDQUFDLFNBQVMsT0FBakIsT0FBTyxtQkFBYyxJQUFJLEdBQUU7YUFDNUI7UUFDSCxDQUFDOzs7O1FBQ0Q7WUFBQyxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBQ2IsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDakMsT0FBTyxDQUFDLE9BQU8sT0FBZixPQUFPLG1CQUFZLElBQUksR0FBRTthQUMxQjtRQUNILENBQUMsRUFDRjtRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0QsMkVBQTJFOzs7Ozs7OztJQUM3RCw2QkFBUzs7Ozs7OztJQUF2QixVQUNFLFVBQXlCLEVBQ3pCLE9BQTZCO1FBRi9CLGlCQTZCQzs7WUF6Qk8sR0FBRyxHQUFHLFVBQVU7YUFDbkIsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxRQUFROzs7O1FBQUM7WUFBQyxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBQ3RCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxVQUFVLE9BQWxCLE9BQU8sbUJBQWUsSUFBSSxHQUFFO2dCQUM1QixJQUFJLEdBQUcsRUFBRTtvQkFDUCxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9CO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FDSDthQUNBLFNBQVM7Ozs7UUFDUjtZQUFDLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDYixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLENBQUMsU0FBUyxPQUFqQixPQUFPLG1CQUFjLElBQUksR0FBRTthQUM1QjtRQUNILENBQUM7Ozs7UUFDRDtZQUFDLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDYixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNqQyxPQUFPLENBQUMsT0FBTyxPQUFmLE9BQU8sbUJBQVksSUFBSSxHQUFFO2FBQzFCO1FBQ0gsQ0FBQyxFQUNGO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7O0lBRWMsb0NBQWdCOzs7Ozs7SUFBL0IsVUFBZ0MsSUFBWSxFQUFFLFlBQTBCO1FBQ3RFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVjLHNDQUFrQjs7Ozs7SUFBakMsVUFBa0MsSUFBWTs7WUFDdEMsR0FBRyxHQUFHLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkQsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbEIsT0FBTyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDOztJQS9FYyxpQ0FBYSxHQUFXLEVBQUUsQ0FBQztJQWlGNUMsMEJBQUM7Q0FBQSxBQW5GRCxJQW1GQztTQW5GcUIsbUJBQW1COzs7Ozs7SUFFdkMsa0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaW5hbGl6ZSwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0lTdWJzY3JpcHRpb25IYW5kbGVyfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL3V0aWwvaS1zdWJzY3JpcHRpb24taGFuZGxlclwiO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuLyoqIERpZXNlIEtsYXNzZSBrw7xtbWVydCBzaWNoIHVtIGRpZSBTcGVpY2hlcnZlcndhbHR1bmcgdm9uIFN1YnNjcmlwdGlvbnMuXG4gRGllc2UgZXJ6ZXVnZW4gTWVtb3J5LUxlYWtzLCB3ZW5uIHNpZSBuaWNodCBzYXViZXIgZ2Vsw7ZzY2h0IHdlcmRlbi4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWJzY3JpcHRpb25NYW5hZ2VyIHtcbiAgLy8gQWxsZSBiZW5hbm50ZW4gU3Vic2NyaXB0aW9ucyB3ZXJkZW4gaGllciBnZWNhY2hlZFxuICBwcml2YXRlIHN0YXRpYyBzdWJzY3JpcHRpb25zOiBvYmplY3QgPSB7fTtcbiAgLyoqIFN1YnNjcmlwdGlvbiBtaXQgZWluZW0gTmFtZW4uIERpZXNlIEZ1bmt0aW9uIGlzdCBuw7x0emxpY2gsXG4gICBmYWxscyBlaW5lIFN1YnNjcmlwdGlvbiDDtmZ0ZXJzIGF1ZmdlcnVmZW4gd2lyZCB1bmQgZGllIHZvcmhlcmlnZSwgZmFsbHNcbiAgIG5vY2ggbmljaHQgYWJnZXNjaGxvc3NlbiwgYmVlbmRldCB3ZXJkZW4gc29sbCAoSFRUUCBBdWZydWZlKS4gKi9cbiAgcHVibGljIHN0YXRpYyBzdWJzY3JpYmVBczxUPihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPixcbiAgICBoYW5kbGVyOiBJU3Vic2NyaXB0aW9uSGFuZGxlclxuICApOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IHN1YiA9IG9ic2VydmFibGVcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBmaW5hbGl6ZSgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25GaW5pc2hlZCkpIHtcbiAgICAgICAgICAgIGhhbmRsZXIub25GaW5pc2hlZCguLi5hcmdzKTtcbiAgICAgICAgICAgIGlmIChzdWIpIHtcbiAgICAgICAgICAgICAgdGhpcy5kZWxldGVTdWJzY3JpcHRpb24obmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihoYW5kbGVyLm9uU3VjY2VzcykpIHtcbiAgICAgICAgICAgIGhhbmRsZXIub25TdWNjZXNzKC4uLmFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihoYW5kbGVyLm9uRXJyb3IpKSB7XG4gICAgICAgICAgICBoYW5kbGVyLm9uRXJyb3IoLi4uYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIHRoaXMucHVzaFN1YnNjcmlwdGlvbihuYW1lLCBzdWIpO1xuICAgIHJldHVybiBzdWI7XG4gIH1cbiAgLyoqIEZ1bmt0aW9uIGbDvHIgZWlubWFsaWdlIFN1YnNjcmlwdGlvbnMgKHouQi46IEluaXRpYWxpc2llcnVuZ3NhdWZydWZlKSAqL1xuICBwdWJsaWMgc3RhdGljIHN1YnNjcmliZTxUPihcbiAgICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFQ+LFxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyXG4gICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3Qgc3ViID0gb2JzZXJ2YWJsZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIGZpbmFsaXplKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oaGFuZGxlci5vbkZpbmlzaGVkKSkge1xuICAgICAgICAgICAgaGFuZGxlci5vbkZpbmlzaGVkKC4uLmFyZ3MpO1xuICAgICAgICAgICAgaWYgKHN1Yikge1xuICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1YnNjcmlwdGlvbihuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25TdWNjZXNzKSkge1xuICAgICAgICAgICAgaGFuZGxlci5vblN1Y2Nlc3MoLi4uYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25FcnJvcikpIHtcbiAgICAgICAgICAgIGhhbmRsZXIub25FcnJvciguLi5hcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgcmV0dXJuIHN1YjtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHB1c2hTdWJzY3JpcHRpb24obmFtZTogc3RyaW5nLCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbik6IHZvaWQge1xuICAgIHRoaXMuZGVsZXRlU3Vic2NyaXB0aW9uKG5hbWUpO1xuICAgIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaXB0aW9uc1tuYW1lXSA9IHN1YnNjcmlwdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGRlbGV0ZVN1YnNjcmlwdGlvbihuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBzdWIgPSBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmlwdGlvbnNbbmFtZV07XG4gICAgaWYgKHN1Yikge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICBkZWxldGUgU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpcHRpb25zW25hbWVdO1xuICAgIH1cbiAgfVxuXG59XG5cbiJdfQ==