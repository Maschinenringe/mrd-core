/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/ui/base-object.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from "rxjs";
import { SubscriptionManager } from "../../impl/util/subscription-manager";
/**
 * Abstracte Klasse von der alle Komponenten und Services erben. Sie stellt eine Speicherverwaltung für Observables bereit.
 * @abstract
 */
var /**
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
                handler.onFinished.apply(handler, tslib_1.__spread(args));
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
            if (handler.onError) {
                handler.onError.apply(handler, tslib_1.__spread(args));
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
/**
 * Abstracte Klasse von der alle Komponenten und Services erben. Sie stellt eine Speicherverwaltung für Observables bereit.
 * @abstract
 */
export { BaseObject };
if (false) {
    /**
     * Wird benutzt um Observables bei der Zerstörung einer Komponente auszulösen.
     * Wird im ngOnDestroy ausgelöst.
     * @type {?}
     * @protected
     */
    BaseObject.prototype.$unsubscribe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1vYmplY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC91aS9iYXNlLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBYSxPQUFPLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFFdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7Ozs7O0FBSXpFOzs7OztJQUFBOzs7OztRQUlZLGlCQUFZLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7SUFvRDlELENBQUM7SUFuREMsdUhBQXVIOzs7Ozs7Ozs7SUFDN0csMEJBQUs7Ozs7Ozs7O0lBQWYsVUFDRSxVQUF5QixFQUN6QixPQUE2QjtRQUU3QixPQUFPLFVBQVU7YUFDZCxJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDNUIsUUFBUTs7OztRQUFFO1lBQUMsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUN2QixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxVQUFVLE9BQWxCLE9BQU8sbUJBQWUsSUFBSSxHQUFFO2FBQzdCO1FBQ0gsQ0FBQyxFQUFDLENBQ0g7YUFDQSxTQUFTOzs7O1FBQ1I7WUFBQyxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBQ2IsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2dCQUNyQixPQUFPLENBQUMsU0FBUyxPQUFqQixPQUFPLG1CQUFjLElBQUksR0FBRTthQUM1QjtRQUNILENBQUM7Ozs7UUFDRDtZQUFDLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDYixJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLE9BQU8sQ0FBQyxPQUFPLE9BQWYsT0FBTyxtQkFBWSxJQUFJLEdBQUU7YUFDMUI7UUFDSCxDQUFDLEVBQ0YsQ0FBQztJQUNOLENBQUM7SUFDRCw4Q0FBOEM7Ozs7Ozs7OztJQUNwQyw4QkFBUzs7Ozs7Ozs7SUFBbkIsVUFDRSxVQUF5QixFQUN6QixPQUE2QjtRQUU3QixPQUFPLG1CQUFtQixDQUFDLFNBQVMsQ0FBSSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELGdEQUFnRDs7Ozs7Ozs7OztJQUN0QyxnQ0FBVzs7Ozs7Ozs7O0lBQXJCLFVBQ0UsSUFBWSxFQUNaLFVBQXlCLEVBQ3pCLE9BQTZCO1FBRTdCLE9BQU8sbUJBQW1CLENBQUMsV0FBVyxDQUFJLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNEOzs7T0FHRzs7Ozs7OztJQUNJLGdDQUFXOzs7Ozs7SUFBbEI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVILGlCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQzs7Ozs7Ozs7Ozs7OztJQXBEQyxrQ0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2ZpbmFsaXplLCB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtJU3Vic2NyaXB0aW9uSGFuZGxlcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91dGlsL2ktc3Vic2NyaXB0aW9uLWhhbmRsZXJcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9uTWFuYWdlcn0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC9zdWJzY3JpcHRpb24tbWFuYWdlclwiO1xuXG5cbi8qKiBBYnN0cmFjdGUgS2xhc3NlIHZvbiBkZXIgYWxsZSBLb21wb25lbnRlbiB1bmQgU2VydmljZXMgZXJiZW4uIFNpZSBzdGVsbHQgZWluZSBTcGVpY2hlcnZlcndhbHR1bmcgZsO8ciBPYnNlcnZhYmxlcyBiZXJlaXQuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZU9iamVjdCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBXaXJkIGJlbnV0enQgdW0gT2JzZXJ2YWJsZXMgYmVpIGRlciBaZXJzdMO2cnVuZyBlaW5lciBLb21wb25lbnRlIGF1c3p1bMO2c2VuLlxuICAgKiBXaXJkIGltIG5nT25EZXN0cm95IGF1c2dlbMO2c3QuXG4gICAqL1xuICBwcm90ZWN0ZWQgJHVuc3Vic2NyaWJlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgLyoqIEZ1bmt0aW9uIHp1ciBkYXVlcmhhZnRlbiDDnGJlcndhY2h1bmcgdm9uIFN1YnNjcmlwdGlvbnMuIFNwZWljaGVyIHdpcmQgYmVpIFplcnN0w7ZydW5nIGRlciBLb21wb25lbnRlIGZyZWlnZWdlYmVuLiAqL1xuICBwcm90ZWN0ZWQgd2F0Y2g8VD4oXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPixcbiAgICBoYW5kbGVyOiBJU3Vic2NyaXB0aW9uSGFuZGxlclxuICApOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuJHVuc3Vic2NyaWJlKSxcbiAgICAgICAgZmluYWxpemUoICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgIGlmIChoYW5kbGVyLm9uRmluaXNoZWQpIHtcbiAgICAgICAgICAgIGhhbmRsZXIub25GaW5pc2hlZCguLi5hcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICBpZiAoaGFuZGxlci5vblN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGhhbmRsZXIub25TdWNjZXNzKC4uLmFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgICAgaWYgKGhhbmRsZXIub25FcnJvcikge1xuICAgICAgICAgICAgaGFuZGxlci5vbkVycm9yKC4uLmFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuICAvKiogUHJveHkgZsO8ciBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmliZSAqL1xuICBwcm90ZWN0ZWQgc3Vic2NyaWJlPFQ+KFxuICAgIG9ic2VydmFibGU6IE9ic2VydmFibGU8VD4sXG4gICAgaGFuZGxlcjogSVN1YnNjcmlwdGlvbkhhbmRsZXIsXG4gICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaWJlPFQ+KG9ic2VydmFibGUsIGhhbmRsZXIpO1xuICB9XG4gIC8qKiBQcm94eSBmw7xyIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaWJlQXMgKi9cbiAgcHJvdGVjdGVkIHN1YnNjcmliZUFzPFQ+KFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFQ+LFxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyXG4gICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaWJlQXM8VD4obmFtZSwgb2JzZXJ2YWJsZSwgaGFuZGxlcik7XG4gIH1cbiAgLyoqIEFsbGUgT2JzZXJ2YWJsZXMgZGllIG1pdCB3YXRjaCDDvGJlcndhY2h0IHdlcmRlbiwgd2VyZGVuIGhpZXIgYXVzZ2Vsw7ZzdC4gQW5ndWxhciBrw7xtbWVydCBzaWNoIGltIGRlbiBBdWZydWYuXG4gICAqICBGYWxscyBkYXMgS2luZCBhdWNoIGRhcyBJbnRlcmZhY2UgJ09uRGVzdHJveScgaW1wbGVtZW50aWVydCwgbmljaHQgdmVyZ2Vzc2VuIHN1cGVyLm5nT25EZXN0cm95KCkgYXVzenVydWZlbiwgb2RlciBkZXIgU3BlaWNoZXJcbiAgICogIHdpcmQgbmljaHQgZnJlaWdlZ2ViZW4uXG4gICAqL1xuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4kdW5zdWJzY3JpYmUubmV4dCgpO1xuICAgIHRoaXMuJHVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XG4gIH1cblxufVxuIl19