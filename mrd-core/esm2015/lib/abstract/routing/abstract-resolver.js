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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC9yb3V0aW5nL2Fic3RyYWN0LXJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE1BQU0sT0FBZ0IsZ0JBQWdCOzs7Ozs7SUFPN0IsT0FBTyxDQUNaLEtBQTZCLEVBQzdCLEtBQTBCO1FBRTFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsSUFBYyxrQkFBa0I7UUFDOUIsT0FBTyxDQUFDLG1CQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUE4QixDQUFDLENBQUMsa0JBQWtCLENBQUM7SUFDNUUsQ0FBQztDQUVGOzs7Ozs7SUFsQkMsaUNBQXdDOzs7OztJQUN4QyxpQ0FBcUM7Ozs7OztJQUVyQyx1REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNvbHZlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7QWJzdHJhY3RSb3V0ZUNvbmZpZ3VyYXRpb259IGZyb20gXCIuL2Fic3RyYWN0LXJvdXRlLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7SVJvdXRpbmdEYXRhfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL3JvdXRpbmcvaS1yb3V0aW5nLWNvbmZpZ3VyYXRpb25cIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UmVzb2x2ZXI8VERhdGEsIFRSb3V0ZVBhcmFtcz4gaW1wbGVtZW50cyBSZXNvbHZlPFREYXRhPiB7XG5cbiAgcHJvdGVjdGVkIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuICBwcm90ZWN0ZWQgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3Q7XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IG9uUmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFREYXRhPjtcblxuICBwdWJsaWMgcmVzb2x2ZShcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPFREYXRhPiB8IFByb21pc2U8VERhdGE+IHwgVERhdGEge1xuICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgcmV0dXJuIHRoaXMub25SZXNvbHZlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHJvdXRlQ29uZmlndXJhdGlvbigpOiBBYnN0cmFjdFJvdXRlQ29uZmlndXJhdGlvbjxUUm91dGVQYXJhbXM+IHtcbiAgICByZXR1cm4gKHRoaXMucm91dGUuZGF0YSBhcyBJUm91dGluZ0RhdGE8VFJvdXRlUGFyYW1zPikucm91dGVDb25maWd1cmF0aW9uO1xuICB9XG5cbn1cbiJdfQ==