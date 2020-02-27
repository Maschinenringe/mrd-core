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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1vYmplY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC91aS9iYXNlLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBYSxPQUFPLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFFdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7Ozs7O0FBSXpFOzs7OztJQUFBOzs7OztRQUlZLGlCQUFZLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7SUFvRDlELENBQUM7SUFuREMsdUhBQXVIOzs7Ozs7Ozs7SUFDN0csMEJBQUs7Ozs7Ozs7O0lBQWYsVUFDRSxVQUF5QixFQUN6QixPQUE2QjtRQUU3QixPQUFPLFVBQVU7YUFDZCxJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDNUIsUUFBUTs7OztRQUFFO1lBQUMsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUN2QixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxVQUFVLE9BQWxCLE9BQU8sbUJBQWUsSUFBSSxHQUFFO2FBQzdCO1FBQ0gsQ0FBQyxFQUFDLENBQ0g7YUFDQSxTQUFTOzs7O1FBQ1I7WUFBQyxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O1lBQ2IsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2dCQUNyQixPQUFPLENBQUMsU0FBUyxPQUFqQixPQUFPLG1CQUFjLElBQUksR0FBRTthQUM1QjtRQUNILENBQUM7Ozs7UUFDRDtZQUFDLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDYixJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLE9BQU8sQ0FBQyxPQUFPLE9BQWYsT0FBTyxtQkFBWSxJQUFJLEdBQUU7YUFDMUI7UUFDSCxDQUFDLEVBQ0YsQ0FBQztJQUNOLENBQUM7SUFDRCw4Q0FBOEM7Ozs7Ozs7OztJQUNwQyw4QkFBUzs7Ozs7Ozs7SUFBbkIsVUFDRSxVQUF5QixFQUN6QixPQUE2QjtRQUU3QixPQUFPLG1CQUFtQixDQUFDLFNBQVMsQ0FBSSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELGdEQUFnRDs7Ozs7Ozs7OztJQUN0QyxnQ0FBVzs7Ozs7Ozs7O0lBQXJCLFVBQ0UsSUFBWSxFQUNaLFVBQXlCLEVBQ3pCLE9BQTZCO1FBRTdCLE9BQU8sbUJBQW1CLENBQUMsV0FBVyxDQUFJLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNEOzs7T0FHRzs7Ozs7OztJQUNJLGdDQUFXOzs7Ozs7SUFBbEI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVILGlCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQzs7Ozs7Ozs7Ozs7OztJQXBEQyxrQ0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7ZmluYWxpemUsIHRha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtJU3Vic2NyaXB0aW9uSGFuZGxlcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91dGlsL2ktc3Vic2NyaXB0aW9uLWhhbmRsZXJcIjtcclxuaW1wb3J0IHtTdWJzY3JpcHRpb25NYW5hZ2VyfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3N1YnNjcmlwdGlvbi1tYW5hZ2VyXCI7XHJcblxyXG5cclxuLyoqIEFic3RyYWN0ZSBLbGFzc2Ugdm9uIGRlciBhbGxlIEtvbXBvbmVudGVuIHVuZCBTZXJ2aWNlcyBlcmJlbi4gU2llIHN0ZWxsdCBlaW5lIFNwZWljaGVydmVyd2FsdHVuZyBmw7xyIE9ic2VydmFibGVzIGJlcmVpdC4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VPYmplY3QgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIC8qKiBXaXJkIGJlbnV0enQgdW0gT2JzZXJ2YWJsZXMgYmVpIGRlciBaZXJzdMO2cnVuZyBlaW5lciBLb21wb25lbnRlIGF1c3p1bMO2c2VuLlxyXG4gICAqIFdpcmQgaW0gbmdPbkRlc3Ryb3kgYXVzZ2Vsw7ZzdC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgJHVuc3Vic2NyaWJlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAvKiogRnVua3Rpb24genVyIGRhdWVyaGFmdGVuIMOcYmVyd2FjaHVuZyB2b24gU3Vic2NyaXB0aW9ucy4gU3BlaWNoZXIgd2lyZCBiZWkgWmVyc3TDtnJ1bmcgZGVyIEtvbXBvbmVudGUgZnJlaWdlZ2ViZW4uICovXHJcbiAgcHJvdGVjdGVkIHdhdGNoPFQ+KFxyXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPixcclxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyXHJcbiAgKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLiR1bnN1YnNjcmliZSksXHJcbiAgICAgICAgZmluYWxpemUoICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGhhbmRsZXIub25GaW5pc2hlZCkge1xyXG4gICAgICAgICAgICBoYW5kbGVyLm9uRmluaXNoZWQoLi4uYXJncyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGhhbmRsZXIub25TdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIub25TdWNjZXNzKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaGFuZGxlci5vbkVycm9yKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIub25FcnJvciguLi5hcmdzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG4gIC8qKiBQcm94eSBmw7xyIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaWJlICovXHJcbiAgcHJvdGVjdGVkIHN1YnNjcmliZTxUPihcclxuICAgIG9ic2VydmFibGU6IE9ic2VydmFibGU8VD4sXHJcbiAgICBoYW5kbGVyOiBJU3Vic2NyaXB0aW9uSGFuZGxlcixcclxuICApOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaWJlPFQ+KG9ic2VydmFibGUsIGhhbmRsZXIpO1xyXG4gIH1cclxuICAvKiogUHJveHkgZsO8ciBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmliZUFzICovXHJcbiAgcHJvdGVjdGVkIHN1YnNjcmliZUFzPFQ+KFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPixcclxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyXHJcbiAgKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmliZUFzPFQ+KG5hbWUsIG9ic2VydmFibGUsIGhhbmRsZXIpO1xyXG4gIH1cclxuICAvKiogQWxsZSBPYnNlcnZhYmxlcyBkaWUgbWl0IHdhdGNoIMO8YmVyd2FjaHQgd2VyZGVuLCB3ZXJkZW4gaGllciBhdXNnZWzDtnN0LiBBbmd1bGFyIGvDvG1tZXJ0IHNpY2ggaW0gZGVuIEF1ZnJ1Zi5cclxuICAgKiAgRmFsbHMgZGFzIEtpbmQgYXVjaCBkYXMgSW50ZXJmYWNlICdPbkRlc3Ryb3knIGltcGxlbWVudGllcnQsIG5pY2h0IHZlcmdlc3NlbiBzdXBlci5uZ09uRGVzdHJveSgpIGF1c3p1cnVmZW4sIG9kZXIgZGVyIFNwZWljaGVyXHJcbiAgICogIHdpcmQgbmljaHQgZnJlaWdlZ2ViZW4uXHJcbiAgICovXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy4kdW5zdWJzY3JpYmUubmV4dCgpO1xyXG4gICAgdGhpcy4kdW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==