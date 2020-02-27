/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/util/abstract-entity-resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'underscore';
/**
 * @record
 */
export function IEntityResolverConfiguration() { }
if (false) {
    /** @type {?} */
    IEntityResolverConfiguration.prototype.keepQueryParams;
}
/**
 * @abstract
 * @template TRouteParams, TModel
 */
export class AbstractEntityResolver {
    /**
     * @protected
     * @param {?} router
     * @param {?} routeConfiguration
     * @param {?=} configuration
     */
    constructor(router, routeConfiguration, configuration) {
        this.router = router;
        this.routeConfiguration = routeConfiguration;
        this.configuration = configuration;
        this.configuration = configuration || AbstractEntityResolver.generateDefaultConfiguration();
    }
    /**
     * @protected
     * @param {?} activatedRoute
     * @param {?} params
     * @return {?}
     */
    runResolver(activatedRoute, params) {
        /** @type {?} */
        const currentRouteParams = _.extend(_.clone(activatedRoute.snapshot.params), params);
        if (this.configuration.keepQueryParams) {
            return this.router.navigate(this.routeConfiguration.buildNavigation(currentRouteParams), { queryParams: activatedRoute.snapshot.queryParams });
        }
        else {
            return this.router.navigate(this.routeConfiguration.buildNavigation(currentRouteParams));
        }
    }
    /**
     * @private
     * @return {?}
     */
    static generateDefaultConfiguration() {
        return {
            keepQueryParams: false
        };
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AbstractEntityResolver.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    AbstractEntityResolver.prototype.routeConfiguration;
    /**
     * @type {?}
     * @protected
     */
    AbstractEntityResolver.prototype.configuration;
    /**
     * @abstract
     * @param {?} activatedRoute
     * @param {?} model
     * @param {?} entitySelector
     * @return {?}
     */
    AbstractEntityResolver.prototype.resolve = function (activatedRoute, model, entitySelector) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtZW50aXR5LXJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdXRpbC9hYnN0cmFjdC1lbnRpdHktcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQzs7OztBQUdoQyxrREFFQzs7O0lBREMsdURBQXlCOzs7Ozs7QUFHM0IsTUFBTSxPQUFnQixzQkFBc0I7Ozs7Ozs7SUFRMUMsWUFDcUIsTUFBYyxFQUNkLGtCQUE0RCxFQUM1RCxhQUE0QztRQUY1QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEwQztRQUM1RCxrQkFBYSxHQUFiLGFBQWEsQ0FBK0I7UUFFL0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLElBQUksc0JBQXNCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUM5RixDQUFDOzs7Ozs7O0lBRVMsV0FBVyxDQUFDLGNBQThCLEVBQUUsTUFBYzs7Y0FDNUQsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDO1FBQ3BGLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUMzRCxFQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBQyxDQUNuRCxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7U0FDekY7SUFDSCxDQUFDOzs7OztJQUVPLE1BQU0sQ0FBQyw0QkFBNEI7UUFDekMsT0FBTztZQUNMLGVBQWUsRUFBRSxLQUFLO1NBQ3ZCLENBQUM7SUFDSixDQUFDO0NBRUY7Ozs7OztJQXpCRyx3Q0FBaUM7Ozs7O0lBQ2pDLG9EQUErRTs7Ozs7SUFDL0UsK0NBQStEOzs7Ozs7OztJQVRqRSxnR0FJb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0Um91dGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vcm91dGluZy9hYnN0cmFjdC1yb3V0ZS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQge0lFbnRpdHlTZWxlY3Rvcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91aS9pLWVudGl0eS1zZWxlY3RvclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRW50aXR5UmVzb2x2ZXJDb25maWd1cmF0aW9uIHtcclxuICBrZWVwUXVlcnlQYXJhbXM6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEVudGl0eVJlc29sdmVyPFRSb3V0ZVBhcmFtcywgVE1vZGVsPiB7XHJcblxyXG4gIHB1YmxpYyBhYnN0cmFjdCByZXNvbHZlKFxyXG4gICAgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgbW9kZWw6IFRNb2RlbCxcclxuICAgIGVudGl0eVNlbGVjdG9yOiBJRW50aXR5U2VsZWN0b3I8VE1vZGVsPlxyXG4gICk6IFByb21pc2U8Ym9vbGVhbj47XHJcblxyXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcclxuICAgIHByb3RlY3RlZCByZWFkb25seSByb3V0ZUNvbmZpZ3VyYXRpb246IEFic3RyYWN0Um91dGVDb25maWd1cmF0aW9uPFRSb3V0ZVBhcmFtcz4sXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29uZmlndXJhdGlvbj86IElFbnRpdHlSZXNvbHZlckNvbmZpZ3VyYXRpb24sXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uIHx8IEFic3RyYWN0RW50aXR5UmVzb2x2ZXIuZ2VuZXJhdGVEZWZhdWx0Q29uZmlndXJhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJ1blJlc29sdmVyKGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcGFyYW1zOiBvYmplY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRSb3V0ZVBhcmFtcyA9IF8uZXh0ZW5kKF8uY2xvbmUoYWN0aXZhdGVkUm91dGUuc25hcHNob3QucGFyYW1zKSwgcGFyYW1zKTtcclxuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24ua2VlcFF1ZXJ5UGFyYW1zKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcclxuICAgICAgICB0aGlzLnJvdXRlQ29uZmlndXJhdGlvbi5idWlsZE5hdmlnYXRpb24oY3VycmVudFJvdXRlUGFyYW1zKSxcclxuICAgICAgICB7cXVlcnlQYXJhbXM6IGFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zfVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlKHRoaXMucm91dGVDb25maWd1cmF0aW9uLmJ1aWxkTmF2aWdhdGlvbihjdXJyZW50Um91dGVQYXJhbXMpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2VuZXJhdGVEZWZhdWx0Q29uZmlndXJhdGlvbigpOiBJRW50aXR5UmVzb2x2ZXJDb25maWd1cmF0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGtlZXBRdWVyeVBhcmFtczogZmFsc2VcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=