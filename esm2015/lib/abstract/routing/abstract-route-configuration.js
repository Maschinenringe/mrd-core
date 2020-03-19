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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtcm91dGUtY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3JvdXRpbmcvYWJzdHJhY3Qtcm91dGUtY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQzs7Ozs7QUFFaEMsTUFBTSxPQUFnQiwwQkFBMEI7Ozs7Ozs7SUFFOUMsWUFDWSxZQUFzQixFQUN0QixVQUFvQixFQUNwQixNQUF3QztRQUZ4QyxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFVO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQWtDO0lBQ2pELENBQUM7Ozs7SUFFSixJQUFXLElBQUk7UUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1NBQzdEO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7OztJQUVELElBQVcsZUFBZTtRQUN4QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQzlELElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxDQUN0QixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFTSxlQUFlLENBQUMsTUFBZ0I7O1lBQ2pDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0IsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7Ozs7UUFBRSxDQUFDLE9BQWUsRUFBRSxFQUFFOztrQkFDaEYsZUFBZSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN4RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sZUFBZSxDQUFDO2FBQ3hCO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sZ0JBQWdCLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVNLFFBQVE7UUFDYixLQUFJLE1BQU0sV0FBVyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztnQkFDeEUsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO2dCQUN2RixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLHFFQUFxRSxDQUFDLENBQUM7Z0JBQ3JGLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGOzs7Ozs7SUFyREcsa0RBQWdDOzs7OztJQUNoQyxnREFBOEI7Ozs7O0lBQzlCLDRDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VXRpbH0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC91dGlsXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RSb3V0ZUNvbmZpZ3VyYXRpb248VFBhcmFtcz4ge1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcGF0aFNlZ21lbnRzOiBzdHJpbmdbXSxcbiAgICBwcm90ZWN0ZWQgcGFyYW1OYW1lcz86IFRQYXJhbXMsXG4gICAgcHJvdGVjdGVkIHBhcmVudD86IEFic3RyYWN0Um91dGVDb25maWd1cmF0aW9uPGFueT5cbiAgKSB7fVxuXG4gIHB1YmxpYyBnZXQgcGF0aCgpOiBzdHJpbmcge1xuICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLnBhcmVudCkpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnBhcmVudC5wYXRofS8ke3RoaXMucGF0aFNlZ21lbnRzLmpvaW4oJy8nKX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXRoU2VnbWVudHMuam9pbignLycpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGFyYW1EZWZpbml0aW9uKCk6IFRQYXJhbXMge1xuICAgIHJldHVybiBfLmV4dGVuZChcbiAgICAgIFV0aWwuaXNEZWZpbmVkKHRoaXMucGFyZW50KSA/IHRoaXMucGFyZW50LnBhcmFtRGVmaW5pdGlvbiA6IHt9LFxuICAgICAgdGhpcy5wYXJhbU5hbWVzIHx8IHt9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBidWlsZE5hdmlnYXRpb24ocGFyYW1zPzogVFBhcmFtcyk6IGFueVtdIHtcbiAgICBsZXQgbmF2aWdhdGlvblBhcmFtcyA9IFV0aWwuaXNEZWZpbmVkKHRoaXMucGFyZW50KSA/XG4gICAgICB0aGlzLnBhcmVudC5idWlsZE5hdmlnYXRpb24ocGFyYW1zKSA6IFtdO1xuICAgIGlmICghVXRpbC5pc0RlZmluZWQocGFyYW1zKSkge1xuICAgICAgcmV0dXJuIG5hdmlnYXRpb25QYXJhbXMuY29uY2F0KHRoaXMucGF0aFNlZ21lbnRzKTtcbiAgICB9XG4gICAgbmF2aWdhdGlvblBhcmFtcyA9IG5hdmlnYXRpb25QYXJhbXMuY29uY2F0KF8ubWFwKHRoaXMucGF0aFNlZ21lbnRzLCAoc2VnbWVudDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBzZWdtZW50SW5QYXJhbXMgPSBwYXJhbXNbc2VnbWVudC5yZXBsYWNlKCc6JywgJycpXTtcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChzZWdtZW50SW5QYXJhbXMpKSB7XG4gICAgICAgIHJldHVybiBzZWdtZW50SW5QYXJhbXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VnbWVudDtcbiAgICB9KSk7XG4gICAgcmV0dXJuIG5hdmlnYXRpb25QYXJhbXM7XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGUoKTogYm9vbGVhbiB7XG4gICAgZm9yKGNvbnN0IHBhdGhTbmlwcGV0IGluIHRoaXMucGF0aFNlZ21lbnRzKSB7XG4gICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHBhdGhTbmlwcGV0KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDcmVhdGluZyBhIHJvdXRlIHdpdGhvdXQgYSBwYXRoIHNuaXBwZXQgaXMgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHBhdGhTbmlwcGV0LnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDcmVhdGluZyBhIHJvdXRlIHdpdGggYSBwYXRoIHNuaXBwZXQgc3RhcnRpbmcgd2l0aCBhIC8gaXMgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHBhdGhTbmlwcGV0LmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ3JlYXRpbmcgYSByb3V0ZSB3aXRoIGEgcGF0aCBzbmlwcGV0IGVuZGluZyB3aXRoIGEgLyBpcyBub3QgYWxsb3dlZCcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=