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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvc3Vic2NyaXB0aW9uLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUc5QyxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQzs7Ozs7O0FBSWhDO0lBQUE7SUFtRkEsQ0FBQztJQWhGQzs7cUVBRWlFOzs7Ozs7Ozs7OztJQUNuRCwrQkFBVzs7Ozs7Ozs7OztJQUF6QixVQUNFLElBQVksRUFDWixVQUF5QixFQUN6QixPQUE2QjtRQUgvQixpQkErQkM7O1lBMUJPLEdBQUcsR0FBRyxVQUFVO2FBQ25CLElBQUksQ0FDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsUUFBUTs7OztRQUFDO1lBQUMsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUN0QixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLENBQUMsVUFBVSxPQUFsQixPQUFPLG1CQUFlLElBQUksR0FBRTtnQkFDNUIsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMvQjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQ0g7YUFDQSxTQUFTOzs7O1FBQ1I7WUFBQyxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBQ2IsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxDQUFDLFNBQVMsT0FBakIsT0FBTyxtQkFBYyxJQUFJLEdBQUU7YUFDNUI7UUFDSCxDQUFDOzs7O1FBQ0Q7WUFBQyxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBQ2IsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDakMsT0FBTyxDQUFDLE9BQU8sT0FBZixPQUFPLG1CQUFZLElBQUksR0FBRTthQUMxQjtRQUNILENBQUMsRUFDRjtRQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0QsMkVBQTJFOzs7Ozs7OztJQUM3RCw2QkFBUzs7Ozs7OztJQUF2QixVQUNFLFVBQXlCLEVBQ3pCLE9BQTZCO1FBRi9CLGlCQTZCQzs7WUF6Qk8sR0FBRyxHQUFHLFVBQVU7YUFDbkIsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxRQUFROzs7O1FBQUM7WUFBQyxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBQ3RCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxVQUFVLE9BQWxCLE9BQU8sbUJBQWUsSUFBSSxHQUFFO2dCQUM1QixJQUFJLEdBQUcsRUFBRTtvQkFDUCxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9CO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FDSDthQUNBLFNBQVM7Ozs7UUFDUjtZQUFDLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDYixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLENBQUMsU0FBUyxPQUFqQixPQUFPLG1CQUFjLElBQUksR0FBRTthQUM1QjtRQUNILENBQUM7Ozs7UUFDRDtZQUFDLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDYixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNqQyxPQUFPLENBQUMsT0FBTyxPQUFmLE9BQU8sbUJBQVksSUFBSSxHQUFFO2FBQzFCO1FBQ0gsQ0FBQyxFQUNGO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7O0lBRWMsb0NBQWdCOzs7Ozs7SUFBL0IsVUFBZ0MsSUFBWSxFQUFFLFlBQTBCO1FBQ3RFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVjLHNDQUFrQjs7Ozs7SUFBakMsVUFBa0MsSUFBWTs7WUFDdEMsR0FBRyxHQUFHLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkQsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbEIsT0FBTyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDOztJQS9FYyxpQ0FBYSxHQUFXLEVBQUUsQ0FBQztJQWlGNUMsMEJBQUM7Q0FBQSxBQW5GRCxJQW1GQztTQW5GcUIsbUJBQW1COzs7Ozs7SUFFdkMsa0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaW5hbGl6ZSwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtJU3Vic2NyaXB0aW9uSGFuZGxlcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91dGlsL2ktc3Vic2NyaXB0aW9uLWhhbmRsZXJcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbi8qKiBEaWVzZSBLbGFzc2Uga8O8bW1lcnQgc2ljaCB1bSBkaWUgU3BlaWNoZXJ2ZXJ3YWx0dW5nIHZvbiBTdWJzY3JpcHRpb25zLlxyXG4gRGllc2UgZXJ6ZXVnZW4gTWVtb3J5LUxlYWtzLCB3ZW5uIHNpZSBuaWNodCBzYXViZXIgZ2Vsw7ZzY2h0IHdlcmRlbi4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1YnNjcmlwdGlvbk1hbmFnZXIge1xyXG4gIC8vIEFsbGUgYmVuYW5udGVuIFN1YnNjcmlwdGlvbnMgd2VyZGVuIGhpZXIgZ2VjYWNoZWRcclxuICBwcml2YXRlIHN0YXRpYyBzdWJzY3JpcHRpb25zOiBvYmplY3QgPSB7fTtcclxuICAvKiogU3Vic2NyaXB0aW9uIG1pdCBlaW5lbSBOYW1lbi4gRGllc2UgRnVua3Rpb24gaXN0IG7DvHR6bGljaCxcclxuICAgZmFsbHMgZWluZSBTdWJzY3JpcHRpb24gw7ZmdGVycyBhdWZnZXJ1ZmVuIHdpcmQgdW5kIGRpZSB2b3JoZXJpZ2UsIGZhbGxzXHJcbiAgIG5vY2ggbmljaHQgYWJnZXNjaGxvc3NlbiwgYmVlbmRldCB3ZXJkZW4gc29sbCAoSFRUUCBBdWZydWZlKS4gKi9cclxuICBwdWJsaWMgc3RhdGljIHN1YnNjcmliZUFzPFQ+KFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPixcclxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyXHJcbiAgKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIGNvbnN0IHN1YiA9IG9ic2VydmFibGVcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICBmaW5hbGl6ZSgoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oaGFuZGxlci5vbkZpbmlzaGVkKSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyLm9uRmluaXNoZWQoLi4uYXJncyk7XHJcbiAgICAgICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1YnNjcmlwdGlvbihuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oaGFuZGxlci5vblN1Y2Nlc3MpKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIub25TdWNjZXNzKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25FcnJvcikpIHtcclxuICAgICAgICAgICAgaGFuZGxlci5vbkVycm9yKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIHRoaXMucHVzaFN1YnNjcmlwdGlvbihuYW1lLCBzdWIpO1xyXG4gICAgcmV0dXJuIHN1YjtcclxuICB9XHJcbiAgLyoqIEZ1bmt0aW9uIGbDvHIgZWlubWFsaWdlIFN1YnNjcmlwdGlvbnMgKHouQi46IEluaXRpYWxpc2llcnVuZ3NhdWZydWZlKSAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgc3Vic2NyaWJlPFQ+KFxyXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPixcclxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyXHJcbiAgKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIGNvbnN0IHN1YiA9IG9ic2VydmFibGVcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICBmaW5hbGl6ZSgoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oaGFuZGxlci5vbkZpbmlzaGVkKSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyLm9uRmluaXNoZWQoLi4uYXJncyk7XHJcbiAgICAgICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1YnNjcmlwdGlvbihuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oaGFuZGxlci5vblN1Y2Nlc3MpKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIub25TdWNjZXNzKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25FcnJvcikpIHtcclxuICAgICAgICAgICAgaGFuZGxlci5vbkVycm9yKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIHJldHVybiBzdWI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBwdXNoU3Vic2NyaXB0aW9uKG5hbWU6IHN0cmluZywgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuZGVsZXRlU3Vic2NyaXB0aW9uKG5hbWUpO1xyXG4gICAgU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpcHRpb25zW25hbWVdID0gc3Vic2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZGVsZXRlU3Vic2NyaXB0aW9uKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3ViID0gU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpcHRpb25zW25hbWVdO1xyXG4gICAgaWYgKHN1Yikge1xyXG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgZGVsZXRlIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaXB0aW9uc1tuYW1lXTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=