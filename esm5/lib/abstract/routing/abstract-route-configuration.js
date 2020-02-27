/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/routing/abstract-route-configuration.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Util } from "../../impl/util/util";
import * as _ from 'underscore';
/**
 * @abstract
 * @template TParams
 */
var /**
 * @abstract
 * @template TParams
 */
AbstractRouteConfiguration = /** @class */ (function () {
    function AbstractRouteConfiguration(pathSegments, paramNames, parent) {
        this.pathSegments = pathSegments;
        this.paramNames = paramNames;
        this.parent = parent;
    }
    Object.defineProperty(AbstractRouteConfiguration.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () {
            if (Util.isDefined(this.parent)) {
                return this.parent.path + "/" + this.pathSegments.join('/');
            }
            else {
                return this.pathSegments.join('/');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractRouteConfiguration.prototype, "paramDefinition", {
        get: /**
         * @return {?}
         */
        function () {
            return _.extend(Util.isDefined(this.parent) ? this.parent.paramDefinition : {}, this.paramNames || {});
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} params
     * @return {?}
     */
    AbstractRouteConfiguration.prototype.buildNavigation = /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var navigationParams = Util.isDefined(this.parent) ?
            this.parent.buildNavigation(params) : [];
        if (!Util.isDefined(params)) {
            return navigationParams.concat(this.pathSegments);
        }
        navigationParams = navigationParams.concat(_.map(this.pathSegments, (/**
         * @param {?} segment
         * @return {?}
         */
        function (segment) {
            /** @type {?} */
            var segmentInParams = params[segment.replace(':', '')];
            if (Util.isDefined(segmentInParams)) {
                return segmentInParams;
            }
            return segment;
        })));
        return navigationParams;
    };
    /**
     * @return {?}
     */
    AbstractRouteConfiguration.prototype.validate = /**
     * @return {?}
     */
    function () {
        for (var pathSnippet in this.pathSegments) {
            if (!Util.isDefined(pathSnippet)) {
                console.error('Creating a route without a path snippet is not allowed');
                return false;
            }
            if (pathSnippet.startsWith('/')) {
                console.error('Creating a route with a path snippet starting with a / is not allowed');
                return false;
            }
            if (pathSnippet.endsWith('/')) {
                console.error('Creating a route with a path snippet ending with a / is not allowed');
                return false;
            }
        }
        return true;
    };
    return AbstractRouteConfiguration;
}());
/**
 * @abstract
 * @template TParams
 */
export { AbstractRouteConfiguration };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AbstractRouteConfiguration.prototype.pathSegments;
    /**
     * @type {?}
     * @protected
     */
    AbstractRouteConfiguration.prototype.paramNames;
    /**
     * @type {?}
     * @protected
     */
    AbstractRouteConfiguration.prototype.parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtcm91dGUtY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3JvdXRpbmcvYWJzdHJhY3Qtcm91dGUtY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQzs7Ozs7QUFFaEM7Ozs7O0lBRUUsb0NBQ1ksWUFBc0IsRUFDdEIsVUFBb0IsRUFDcEIsTUFBd0M7UUFGeEMsaUJBQVksR0FBWixZQUFZLENBQVU7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBVTtRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFrQztJQUNqRCxDQUFDO0lBRUosc0JBQVcsNENBQUk7Ozs7UUFBZjtZQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQy9CLE9BQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUM7YUFDN0Q7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQztRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQVcsdURBQWU7Ozs7UUFBMUI7WUFDRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQzlELElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUN0QixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7Ozs7O0lBRU0sb0RBQWU7Ozs7SUFBdEIsVUFBdUIsTUFBZ0I7O1lBQ2pDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0IsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7Ozs7UUFBRSxVQUFDLE9BQWU7O2dCQUM1RSxlQUFlLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxlQUFlLENBQUM7YUFDeEI7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ0osT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDOzs7O0lBRU0sNkNBQVE7OztJQUFmO1FBQ0UsS0FBSSxJQUFNLFdBQVcsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7Z0JBQ3hFLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUVBQXVFLENBQUMsQ0FBQztnQkFDdkYsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO2dCQUNyRixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxpQ0FBQztBQUFELENBQUMsQUF4REQsSUF3REM7Ozs7Ozs7Ozs7O0lBckRHLGtEQUFnQzs7Ozs7SUFDaEMsZ0RBQThCOzs7OztJQUM5Qiw0Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1V0aWx9IGZyb20gXCIuLi8uLi9pbXBsL3V0aWwvdXRpbFwiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Um91dGVDb25maWd1cmF0aW9uPFRQYXJhbXM+IHtcclxuXHJcbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIHBhdGhTZWdtZW50czogc3RyaW5nW10sXHJcbiAgICBwcm90ZWN0ZWQgcGFyYW1OYW1lcz86IFRQYXJhbXMsXHJcbiAgICBwcm90ZWN0ZWQgcGFyZW50PzogQWJzdHJhY3RSb3V0ZUNvbmZpZ3VyYXRpb248YW55PlxyXG4gICkge31cclxuXHJcbiAgcHVibGljIGdldCBwYXRoKCk6IHN0cmluZyB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5wYXJlbnQpKSB7XHJcbiAgICAgIHJldHVybiBgJHt0aGlzLnBhcmVudC5wYXRofS8ke3RoaXMucGF0aFNlZ21lbnRzLmpvaW4oJy8nKX1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGF0aFNlZ21lbnRzLmpvaW4oJy8nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcGFyYW1EZWZpbml0aW9uKCk6IFRQYXJhbXMge1xyXG4gICAgcmV0dXJuIF8uZXh0ZW5kKFxyXG4gICAgICBVdGlsLmlzRGVmaW5lZCh0aGlzLnBhcmVudCkgPyB0aGlzLnBhcmVudC5wYXJhbURlZmluaXRpb24gOiB7fSxcclxuICAgICAgdGhpcy5wYXJhbU5hbWVzIHx8IHt9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJ1aWxkTmF2aWdhdGlvbihwYXJhbXM/OiBUUGFyYW1zKTogYW55W10ge1xyXG4gICAgbGV0IG5hdmlnYXRpb25QYXJhbXMgPSBVdGlsLmlzRGVmaW5lZCh0aGlzLnBhcmVudCkgP1xyXG4gICAgICB0aGlzLnBhcmVudC5idWlsZE5hdmlnYXRpb24ocGFyYW1zKSA6IFtdO1xyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZChwYXJhbXMpKSB7XHJcbiAgICAgIHJldHVybiBuYXZpZ2F0aW9uUGFyYW1zLmNvbmNhdCh0aGlzLnBhdGhTZWdtZW50cyk7XHJcbiAgICB9XHJcbiAgICBuYXZpZ2F0aW9uUGFyYW1zID0gbmF2aWdhdGlvblBhcmFtcy5jb25jYXQoXy5tYXAodGhpcy5wYXRoU2VnbWVudHMsIChzZWdtZW50OiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3Qgc2VnbWVudEluUGFyYW1zID0gcGFyYW1zW3NlZ21lbnQucmVwbGFjZSgnOicsICcnKV07XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChzZWdtZW50SW5QYXJhbXMpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlZ21lbnRJblBhcmFtcztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2VnbWVudDtcclxuICAgIH0pKTtcclxuICAgIHJldHVybiBuYXZpZ2F0aW9uUGFyYW1zO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHZhbGlkYXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgZm9yKGNvbnN0IHBhdGhTbmlwcGV0IGluIHRoaXMucGF0aFNlZ21lbnRzKSB7XHJcbiAgICAgIGlmICghVXRpbC5pc0RlZmluZWQocGF0aFNuaXBwZXQpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQ3JlYXRpbmcgYSByb3V0ZSB3aXRob3V0IGEgcGF0aCBzbmlwcGV0IGlzIG5vdCBhbGxvd2VkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXRoU25pcHBldC5zdGFydHNXaXRoKCcvJykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdDcmVhdGluZyBhIHJvdXRlIHdpdGggYSBwYXRoIHNuaXBwZXQgc3RhcnRpbmcgd2l0aCBhIC8gaXMgbm90IGFsbG93ZWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhdGhTbmlwcGV0LmVuZHNXaXRoKCcvJykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdDcmVhdGluZyBhIHJvdXRlIHdpdGggYSBwYXRoIHNuaXBwZXQgZW5kaW5nIHdpdGggYSAvIGlzIG5vdCBhbGxvd2VkJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl19