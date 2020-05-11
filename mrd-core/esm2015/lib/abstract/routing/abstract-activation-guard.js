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
export class AbstractActivationGuard {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtYWN0aXZhdGlvbi1ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3JvdXRpbmcvYWJzdHJhY3QtYWN0aXZhdGlvbi1ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBS3ZELE1BQU0sT0FBZ0IsdUJBQXVCOzs7Ozs7SUFTcEMsV0FBVyxDQUNoQixLQUE2QixFQUM3QixLQUEwQjtRQUUxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUU7YUFDckIsSUFBSSxDQUNILFNBQVM7Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQXVCLEVBQUU7WUFDdEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxDQUFDLEtBQUssRUFBdUIsRUFBRTtZQUN4QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRUQsSUFBYyxrQkFBa0I7UUFDOUIsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDNUUsQ0FBQztDQUVGOzs7Ozs7SUF4QkMsd0NBQXdDOzs7OztJQUN4Qyx3Q0FBcUM7Ozs7Ozs7SUFMckMsb0VBQXdFOzs7Ozs7O0lBQ3hFLGlFQUE0RDs7Ozs7O0lBQzVELCtEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7QWJzdHJhY3RSb3V0ZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2Fic3RyYWN0LXJvdXRlLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7SVJvdXRpbmdEYXRhfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL3JvdXRpbmcvaS1yb3V0aW5nLWNvbmZpZ3VyYXRpb25cIjtcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBY3RpdmF0aW9uR3VhcmQ8VFN1Y2Nlc3NUeXBlLCBUUm91dGVQYXJhbXM+IGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBvblN1Y2Nlc3MocmVzdWx0OiBUU3VjY2Vzc1R5cGUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb25FcnJvcihlcnJvcjogYW55KTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IG9uQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxUU3VjY2Vzc1R5cGU+O1xuXG4gIHByb3RlY3RlZCByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcbiAgcHJvdGVjdGVkIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90O1xuXG4gIHB1YmxpYyBjYW5BY3RpdmF0ZShcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWUge1xuICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgcmV0dXJuIHRoaXMub25BY3RpdmF0ZSgpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChyZXN1bHQ6IFRTdWNjZXNzVHlwZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9uU3VjY2VzcyhyZXN1bHQpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHJvdXRlQ29uZmlndXJhdGlvbigpOiBBYnN0cmFjdFJvdXRlQ29uZmlndXJhdGlvbjxUUm91dGVQYXJhbXM+IHtcbiAgICByZXR1cm4gKHRoaXMucm91dGUuZGF0YSBhcyBJUm91dGluZ0RhdGE8VFJvdXRlUGFyYW1zPikucm91dGVDb25maWd1cmF0aW9uO1xuICB9XG5cbn1cbiJdfQ==