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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtYWN0aXZhdGlvbi1ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3JvdXRpbmcvYWJzdHJhY3QtYWN0aXZhdGlvbi1ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBS3ZELE1BQU0sT0FBZ0IsdUJBQXVCOzs7Ozs7SUFTcEMsV0FBVyxDQUNoQixLQUE2QixFQUM3QixLQUEwQjtRQUUxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUU7YUFDckIsSUFBSSxDQUNILFNBQVM7Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQXVCLEVBQUU7WUFDdEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxDQUFDLEtBQUssRUFBdUIsRUFBRTtZQUN4QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRUQsSUFBYyxrQkFBa0I7UUFDOUIsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDNUUsQ0FBQztDQUVGOzs7Ozs7SUF4QkMsd0NBQXdDOzs7OztJQUN4Qyx3Q0FBcUM7Ozs7Ozs7SUFMckMsb0VBQXdFOzs7Ozs7O0lBQ3hFLGlFQUE0RDs7Ozs7O0lBQzVELCtEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7QWJzdHJhY3RSb3V0ZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2Fic3RyYWN0LXJvdXRlLWNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHtJUm91dGluZ0RhdGF9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2Uvcm91dGluZy9pLXJvdXRpbmctY29uZmlndXJhdGlvblwiO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEFjdGl2YXRpb25HdWFyZDxUU3VjY2Vzc1R5cGUsIFRSb3V0ZVBhcmFtcz4gaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBvblN1Y2Nlc3MocmVzdWx0OiBUU3VjY2Vzc1R5cGUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBvbkVycm9yKGVycm9yOiBhbnkpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBvbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8VFN1Y2Nlc3NUeXBlPjtcclxuXHJcbiAgcHJvdGVjdGVkIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xyXG4gIHByb3RlY3RlZCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdDtcclxuXHJcbiAgcHVibGljIGNhbkFjdGl2YXRlKFxyXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxyXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4gfCBib29sZWFuIHwgVXJsVHJlZSB7XHJcbiAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICByZXR1cm4gdGhpcy5vbkFjdGl2YXRlKClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc3dpdGNoTWFwKChyZXN1bHQ6IFRTdWNjZXNzVHlwZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4gPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMub25TdWNjZXNzKHJlc3VsdCk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLm9uRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IHJvdXRlQ29uZmlndXJhdGlvbigpOiBBYnN0cmFjdFJvdXRlQ29uZmlndXJhdGlvbjxUUm91dGVQYXJhbXM+IHtcclxuICAgIHJldHVybiAodGhpcy5yb3V0ZS5kYXRhIGFzIElSb3V0aW5nRGF0YTxUUm91dGVQYXJhbXM+KS5yb3V0ZUNvbmZpZ3VyYXRpb247XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=