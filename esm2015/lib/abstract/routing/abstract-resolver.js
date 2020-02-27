/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/routing/abstract-resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template TData, TRouteParams
 */
export class AbstractResolver {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC9yb3V0aW5nL2Fic3RyYWN0LXJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE1BQU0sT0FBZ0IsZ0JBQWdCOzs7Ozs7SUFPN0IsT0FBTyxDQUNaLEtBQTZCLEVBQzdCLEtBQTBCO1FBRTFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBYyxrQkFBa0I7UUFDOUIsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDNUUsQ0FBQztDQUVGOzs7Ozs7SUFsQkMsaUNBQXdDOzs7OztJQUN4QyxpQ0FBcUM7Ozs7OztJQUVyQyx1REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNvbHZlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge0Fic3RyYWN0Um91dGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi9hYnN0cmFjdC1yb3V0ZS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7SVJvdXRpbmdEYXRhfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL3JvdXRpbmcvaS1yb3V0aW5nLWNvbmZpZ3VyYXRpb25cIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFJlc29sdmVyPFREYXRhLCBUUm91dGVQYXJhbXM+IGltcGxlbWVudHMgUmVzb2x2ZTxURGF0YT4ge1xyXG5cclxuICBwcm90ZWN0ZWQgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XHJcbiAgcHJvdGVjdGVkIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90O1xyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb25SZXNvbHZlKCk6IE9ic2VydmFibGU8VERhdGE+O1xyXG5cclxuICBwdWJsaWMgcmVzb2x2ZShcclxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxyXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcclxuICApOiBPYnNlcnZhYmxlPFREYXRhPiB8IFByb21pc2U8VERhdGE+IHwgVERhdGEge1xyXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgcmV0dXJuIHRoaXMub25SZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IHJvdXRlQ29uZmlndXJhdGlvbigpOiBBYnN0cmFjdFJvdXRlQ29uZmlndXJhdGlvbjxUUm91dGVQYXJhbXM+IHtcclxuICAgIHJldHVybiAodGhpcy5yb3V0ZS5kYXRhIGFzIElSb3V0aW5nRGF0YTxUUm91dGVQYXJhbXM+KS5yb3V0ZUNvbmZpZ3VyYXRpb247XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=