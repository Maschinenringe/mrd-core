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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtcm91dGUtY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3JvdXRpbmcvYWJzdHJhY3Qtcm91dGUtY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQzs7Ozs7QUFFaEM7Ozs7O0lBRUUsb0NBQ1ksWUFBc0IsRUFDdEIsVUFBb0IsRUFDcEIsTUFBd0M7UUFGeEMsaUJBQVksR0FBWixZQUFZLENBQVU7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBVTtRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFrQztJQUNqRCxDQUFDO0lBRUosc0JBQVcsNENBQUk7Ozs7UUFBZjtZQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQy9CLE9BQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUM7YUFDN0Q7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQztRQUNILENBQUM7OztPQUFBO0lBRUQsc0JBQVcsdURBQWU7Ozs7UUFBMUI7WUFDRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQzlELElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUN0QixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7Ozs7O0lBRU0sb0RBQWU7Ozs7SUFBdEIsVUFBdUIsTUFBZ0I7O1lBQ2pDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0IsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7Ozs7UUFBRSxVQUFDLE9BQWU7O2dCQUM1RSxlQUFlLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxlQUFlLENBQUM7YUFDeEI7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ0osT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDOzs7O0lBRU0sNkNBQVE7OztJQUFmO1FBQ0UsS0FBSSxJQUFNLFdBQVcsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7Z0JBQ3hFLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsdUVBQXVFLENBQUMsQ0FBQztnQkFDdkYsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO2dCQUNyRixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxpQ0FBQztBQUFELENBQUMsQUF4REQsSUF3REM7Ozs7Ozs7Ozs7O0lBckRHLGtEQUFnQzs7Ozs7SUFDaEMsZ0RBQThCOzs7OztJQUM5Qiw0Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1V0aWx9IGZyb20gXCIuLi8uLi9pbXBsL3V0aWwvdXRpbFwiO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Um91dGVDb25maWd1cmF0aW9uPFRQYXJhbXM+IHtcblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHBhdGhTZWdtZW50czogc3RyaW5nW10sXG4gICAgcHJvdGVjdGVkIHBhcmFtTmFtZXM/OiBUUGFyYW1zLFxuICAgIHByb3RlY3RlZCBwYXJlbnQ/OiBBYnN0cmFjdFJvdXRlQ29uZmlndXJhdGlvbjxhbnk+XG4gICkge31cblxuICBwdWJsaWMgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5wYXJlbnQpKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5wYXJlbnQucGF0aH0vJHt0aGlzLnBhdGhTZWdtZW50cy5qb2luKCcvJyl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucGF0aFNlZ21lbnRzLmpvaW4oJy8nKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmFtRGVmaW5pdGlvbigpOiBUUGFyYW1zIHtcbiAgICByZXR1cm4gXy5leHRlbmQoXG4gICAgICBVdGlsLmlzRGVmaW5lZCh0aGlzLnBhcmVudCkgPyB0aGlzLnBhcmVudC5wYXJhbURlZmluaXRpb24gOiB7fSxcbiAgICAgIHRoaXMucGFyYW1OYW1lcyB8fCB7fVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgYnVpbGROYXZpZ2F0aW9uKHBhcmFtcz86IFRQYXJhbXMpOiBhbnlbXSB7XG4gICAgbGV0IG5hdmlnYXRpb25QYXJhbXMgPSBVdGlsLmlzRGVmaW5lZCh0aGlzLnBhcmVudCkgP1xuICAgICAgdGhpcy5wYXJlbnQuYnVpbGROYXZpZ2F0aW9uKHBhcmFtcykgOiBbXTtcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHBhcmFtcykpIHtcbiAgICAgIHJldHVybiBuYXZpZ2F0aW9uUGFyYW1zLmNvbmNhdCh0aGlzLnBhdGhTZWdtZW50cyk7XG4gICAgfVxuICAgIG5hdmlnYXRpb25QYXJhbXMgPSBuYXZpZ2F0aW9uUGFyYW1zLmNvbmNhdChfLm1hcCh0aGlzLnBhdGhTZWdtZW50cywgKHNlZ21lbnQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgc2VnbWVudEluUGFyYW1zID0gcGFyYW1zW3NlZ21lbnQucmVwbGFjZSgnOicsICcnKV07XG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoc2VnbWVudEluUGFyYW1zKSkge1xuICAgICAgICByZXR1cm4gc2VnbWVudEluUGFyYW1zO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlZ21lbnQ7XG4gICAgfSkpO1xuICAgIHJldHVybiBuYXZpZ2F0aW9uUGFyYW1zO1xuICB9XG5cbiAgcHVibGljIHZhbGlkYXRlKCk6IGJvb2xlYW4ge1xuICAgIGZvcihjb25zdCBwYXRoU25pcHBldCBpbiB0aGlzLnBhdGhTZWdtZW50cykge1xuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZChwYXRoU25pcHBldCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ3JlYXRpbmcgYSByb3V0ZSB3aXRob3V0IGEgcGF0aCBzbmlwcGV0IGlzIG5vdCBhbGxvd2VkJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXRoU25pcHBldC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ3JlYXRpbmcgYSByb3V0ZSB3aXRoIGEgcGF0aCBzbmlwcGV0IHN0YXJ0aW5nIHdpdGggYSAvIGlzIG5vdCBhbGxvd2VkJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXRoU25pcHBldC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0aW5nIGEgcm91dGUgd2l0aCBhIHBhdGggc25pcHBldCBlbmRpbmcgd2l0aCBhIC8gaXMgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19