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
export class AbstractRouteConfiguration {
    /**
     * @protected
     * @param {?} pathSegments
     * @param {?=} paramNames
     * @param {?=} parent
     */
    constructor(pathSegments, paramNames, parent) {
        this.pathSegments = pathSegments;
        this.paramNames = paramNames;
        this.parent = parent;
    }
    /**
     * @return {?}
     */
    get path() {
        if (Util.isDefined(this.parent)) {
            return `${this.parent.path}/${this.pathSegments.join('/')}`;
        }
        else {
            return this.pathSegments.join('/');
        }
    }
    /**
     * @return {?}
     */
    get paramDefinition() {
        return _.extend(Util.isDefined(this.parent) ? this.parent.paramDefinition : {}, this.paramNames || {});
    }
    /**
     * @param {?=} params
     * @return {?}
     */
    buildNavigation(params) {
        /** @type {?} */
        let navigationParams = Util.isDefined(this.parent) ?
            this.parent.buildNavigation(params) : [];
        if (!Util.isDefined(params)) {
            return navigationParams.concat(this.pathSegments);
        }
        navigationParams = navigationParams.concat(_.map(this.pathSegments, (/**
         * @param {?} segment
         * @return {?}
         */
        (segment) => {
            /** @type {?} */
            const segmentInParams = params[segment.replace(':', '')];
            if (Util.isDefined(segmentInParams)) {
                return segmentInParams;
            }
            return segment;
        })));
        return navigationParams;
    }
    /**
     * @return {?}
     */
    validate() {
        for (const pathSnippet in this.pathSegments) {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtcm91dGUtY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3JvdXRpbmcvYWJzdHJhY3Qtcm91dGUtY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQzs7Ozs7QUFFaEMsTUFBTSxPQUFnQiwwQkFBMEI7Ozs7Ozs7SUFFOUMsWUFDWSxZQUFzQixFQUN0QixVQUFvQixFQUNwQixNQUF3QztRQUZ4QyxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFVO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQWtDO0lBQ2pELENBQUM7Ozs7SUFFSixJQUFXLElBQUk7UUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1NBQzdEO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7OztJQUVELElBQVcsZUFBZTtRQUN4QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQzlELElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUN0QixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxlQUFlLENBQUMsTUFBZ0I7O1lBQ2pDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0IsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7Ozs7UUFBRSxDQUFDLE9BQWUsRUFBRSxFQUFFOztrQkFDaEYsZUFBZSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN4RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sZUFBZSxDQUFDO2FBQ3hCO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVNLFFBQVE7UUFDYixLQUFJLE1BQU0sV0FBVyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztnQkFDeEUsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO2dCQUN2RixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLHFFQUFxRSxDQUFDLENBQUM7Z0JBQ3JGLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGOzs7Ozs7SUFyREcsa0RBQWdDOzs7OztJQUNoQyxnREFBOEI7Ozs7O0lBQzlCLDRDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VXRpbH0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC91dGlsXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RSb3V0ZUNvbmZpZ3VyYXRpb248VFBhcmFtcz4ge1xyXG5cclxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgcGF0aFNlZ21lbnRzOiBzdHJpbmdbXSxcclxuICAgIHByb3RlY3RlZCBwYXJhbU5hbWVzPzogVFBhcmFtcyxcclxuICAgIHByb3RlY3RlZCBwYXJlbnQ/OiBBYnN0cmFjdFJvdXRlQ29uZmlndXJhdGlvbjxhbnk+XHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgZ2V0IHBhdGgoKTogc3RyaW5nIHtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLnBhcmVudCkpIHtcclxuICAgICAgcmV0dXJuIGAke3RoaXMucGFyZW50LnBhdGh9LyR7dGhpcy5wYXRoU2VnbWVudHMuam9pbignLycpfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5wYXRoU2VnbWVudHMuam9pbignLycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBwYXJhbURlZmluaXRpb24oKTogVFBhcmFtcyB7XHJcbiAgICByZXR1cm4gXy5leHRlbmQoXHJcbiAgICAgIFV0aWwuaXNEZWZpbmVkKHRoaXMucGFyZW50KSA/IHRoaXMucGFyZW50LnBhcmFtRGVmaW5pdGlvbiA6IHt9LFxyXG4gICAgICB0aGlzLnBhcmFtTmFtZXMgfHwge31cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYnVpbGROYXZpZ2F0aW9uKHBhcmFtcz86IFRQYXJhbXMpOiBhbnlbXSB7XHJcbiAgICBsZXQgbmF2aWdhdGlvblBhcmFtcyA9IFV0aWwuaXNEZWZpbmVkKHRoaXMucGFyZW50KSA/XHJcbiAgICAgIHRoaXMucGFyZW50LmJ1aWxkTmF2aWdhdGlvbihwYXJhbXMpIDogW107XHJcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHBhcmFtcykpIHtcclxuICAgICAgcmV0dXJuIG5hdmlnYXRpb25QYXJhbXMuY29uY2F0KHRoaXMucGF0aFNlZ21lbnRzKTtcclxuICAgIH1cclxuICAgIG5hdmlnYXRpb25QYXJhbXMgPSBuYXZpZ2F0aW9uUGFyYW1zLmNvbmNhdChfLm1hcCh0aGlzLnBhdGhTZWdtZW50cywgKHNlZ21lbnQ6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCBzZWdtZW50SW5QYXJhbXMgPSBwYXJhbXNbc2VnbWVudC5yZXBsYWNlKCc6JywgJycpXTtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHNlZ21lbnRJblBhcmFtcykpIHtcclxuICAgICAgICByZXR1cm4gc2VnbWVudEluUGFyYW1zO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZWdtZW50O1xyXG4gICAgfSkpO1xyXG4gICAgcmV0dXJuIG5hdmlnYXRpb25QYXJhbXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdGUoKTogYm9vbGVhbiB7XHJcbiAgICBmb3IoY29uc3QgcGF0aFNuaXBwZXQgaW4gdGhpcy5wYXRoU2VnbWVudHMpIHtcclxuICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZChwYXRoU25pcHBldCkpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdDcmVhdGluZyBhIHJvdXRlIHdpdGhvdXQgYSBwYXRoIHNuaXBwZXQgaXMgbm90IGFsbG93ZWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhdGhTbmlwcGV0LnN0YXJ0c1dpdGgoJy8nKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0aW5nIGEgcm91dGUgd2l0aCBhIHBhdGggc25pcHBldCBzdGFydGluZyB3aXRoIGEgLyBpcyBub3QgYWxsb3dlZCcpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocGF0aFNuaXBwZXQuZW5kc1dpdGgoJy8nKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NyZWF0aW5nIGEgcm91dGUgd2l0aCBhIHBhdGggc25pcHBldCBlbmRpbmcgd2l0aCBhIC8gaXMgbm90IGFsbG93ZWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=