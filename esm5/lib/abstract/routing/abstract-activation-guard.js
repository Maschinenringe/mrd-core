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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtYWN0aXZhdGlvbi1ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3JvdXRpbmcvYWJzdHJhY3QtYWN0aXZhdGlvbi1ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBS3ZEOzs7OztJQUFBO0lBOEJBLENBQUM7Ozs7OztJQXJCUSw2Q0FBVzs7Ozs7SUFBbEIsVUFDRSxLQUE2QixFQUM3QixLQUEwQjtRQUY1QixpQkFlQztRQVhDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRTthQUNyQixJQUFJLENBQ0gsU0FBUzs7OztRQUFDLFVBQUMsTUFBb0I7WUFDN0IsT0FBTyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxVQUFDLEtBQUs7WUFDZixPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7SUFFRCxzQkFBYyx1REFBa0I7Ozs7O1FBQWhDO1lBQ0UsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUM7UUFDNUUsQ0FBQzs7O09BQUE7SUFFSCw4QkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7Ozs7Ozs7Ozs7O0lBeEJDLHdDQUF3Qzs7Ozs7SUFDeEMsd0NBQXFDOzs7Ozs7O0lBTHJDLG9FQUF3RTs7Ozs7OztJQUN4RSxpRUFBNEQ7Ozs7OztJQUM1RCwrREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge0Fic3RyYWN0Um91dGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9hYnN0cmFjdC1yb3V0ZS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7SVJvdXRpbmdEYXRhfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL3JvdXRpbmcvaS1yb3V0aW5nLWNvbmZpZ3VyYXRpb25cIjtcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBY3RpdmF0aW9uR3VhcmQ8VFN1Y2Nlc3NUeXBlLCBUUm91dGVQYXJhbXM+IGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb25TdWNjZXNzKHJlc3VsdDogVFN1Y2Nlc3NUeXBlKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb25FcnJvcihlcnJvcjogYW55KTogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb25BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPFRTdWNjZXNzVHlwZT47XHJcblxyXG4gIHByb3RlY3RlZCByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcclxuICBwcm90ZWN0ZWQgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3Q7XHJcblxyXG4gIHB1YmxpYyBjYW5BY3RpdmF0ZShcclxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcclxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWUge1xyXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgcmV0dXJuIHRoaXMub25BY3RpdmF0ZSgpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHN3aXRjaE1hcCgocmVzdWx0OiBUU3VjY2Vzc1R5cGUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLm9uU3VjY2VzcyhyZXN1bHQpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKTogT2JzZXJ2YWJsZTxib29sZWFuPiA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5vbkVycm9yKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCByb3V0ZUNvbmZpZ3VyYXRpb24oKTogQWJzdHJhY3RSb3V0ZUNvbmZpZ3VyYXRpb248VFJvdXRlUGFyYW1zPiB7XHJcbiAgICByZXR1cm4gKHRoaXMucm91dGUuZGF0YSBhcyBJUm91dGluZ0RhdGE8VFJvdXRlUGFyYW1zPikucm91dGVDb25maWd1cmF0aW9uO1xyXG4gIH1cclxuXHJcbn1cclxuIl19