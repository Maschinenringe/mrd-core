/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/routing/abstract-activation-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { catchError, switchMap } from 'rxjs/operators';
/**
 * @abstract
 * @template TSuccessType, TRouteParams
 */
var /**
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
/**
 * @abstract
 * @template TSuccessType, TRouteParams
 */
export { AbstractActivationGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtYWN0aXZhdGlvbi1ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3JvdXRpbmcvYWJzdHJhY3QtYWN0aXZhdGlvbi1ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBS3ZEOzs7OztJQUFBO0lBOEJBLENBQUM7Ozs7OztJQXJCUSw2Q0FBVzs7Ozs7SUFBbEIsVUFDRSxLQUE2QixFQUM3QixLQUEwQjtRQUY1QixpQkFlQztRQVhDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRTthQUNyQixJQUFJLENBQ0gsU0FBUzs7OztRQUFDLFVBQUMsTUFBb0I7WUFDN0IsT0FBTyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQUs7WUFDZixPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7SUFFRCxzQkFBYyx1REFBa0I7Ozs7O1FBQWhDO1lBQ0UsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUM7UUFDNUUsQ0FBQzs7O09BQUE7SUFFSCw4QkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7Ozs7Ozs7Ozs7O0lBeEJDLHdDQUF3Qzs7Ozs7SUFDeEMsd0NBQXFDOzs7Ozs7O0lBTHJDLG9FQUF3RTs7Ozs7OztJQUN4RSxpRUFBNEQ7Ozs7OztJQUM1RCwrREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0Fic3RyYWN0Um91dGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9hYnN0cmFjdC1yb3V0ZS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQge0lSb3V0aW5nRGF0YX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS9yb3V0aW5nL2ktcm91dGluZy1jb25maWd1cmF0aW9uXCI7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QWN0aXZhdGlvbkd1YXJkPFRTdWNjZXNzVHlwZSwgVFJvdXRlUGFyYW1zPiBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb25TdWNjZXNzKHJlc3VsdDogVFN1Y2Nlc3NUeXBlKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IG9uRXJyb3IoZXJyb3I6IGFueSk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBvbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8VFN1Y2Nlc3NUeXBlPjtcblxuICBwcm90ZWN0ZWQgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XG4gIHByb3RlY3RlZCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdDtcblxuICBwdWJsaWMgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlIHtcbiAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHJldHVybiB0aGlzLm9uQWN0aXZhdGUoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgocmVzdWx0OiBUU3VjY2Vzc1R5cGUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vblN1Y2Nlc3MocmVzdWx0KTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub25FcnJvcihlcnJvcik7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCByb3V0ZUNvbmZpZ3VyYXRpb24oKTogQWJzdHJhY3RSb3V0ZUNvbmZpZ3VyYXRpb248VFJvdXRlUGFyYW1zPiB7XG4gICAgcmV0dXJuICh0aGlzLnJvdXRlLmRhdGEgYXMgSVJvdXRpbmdEYXRhPFRSb3V0ZVBhcmFtcz4pLnJvdXRlQ29uZmlndXJhdGlvbjtcbiAgfVxuXG59XG4iXX0=