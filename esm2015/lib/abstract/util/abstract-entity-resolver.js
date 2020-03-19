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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtZW50aXR5LXJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdXRpbC9hYnN0cmFjdC1lbnRpdHktcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQzs7OztBQUdoQyxrREFFQzs7O0lBREMsdURBQXlCOzs7Ozs7QUFHM0IsTUFBTSxPQUFnQixzQkFBc0I7Ozs7Ozs7SUFRMUMsWUFDcUIsTUFBYyxFQUNkLGtCQUE0RCxFQUM1RCxhQUE0QztRQUY1QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEwQztRQUM1RCxrQkFBYSxHQUFiLGFBQWEsQ0FBK0I7UUFFL0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLElBQUksc0JBQXNCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztJQUM5RixDQUFDOzs7Ozs7O0lBRVMsV0FBVyxDQUFDLGNBQThCLEVBQUUsTUFBYzs7Y0FDNUQsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDO1FBQ3BGLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUMzRCxFQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBQyxDQUNuRCxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7U0FDekY7SUFDSCxDQUFDOzs7OztJQUVPLE1BQU0sQ0FBQyw0QkFBNEI7UUFDekMsT0FBTztZQUNMLGVBQWUsRUFBRSxLQUFLO1NBQ3ZCLENBQUM7SUFDSixDQUFDO0NBRUY7Ozs7OztJQXpCRyx3Q0FBaUM7Ozs7O0lBQ2pDLG9EQUErRTs7Ozs7SUFDL0UsK0NBQStEOzs7Ozs7OztJQVRqRSxnR0FJb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0Um91dGVDb25maWd1cmF0aW9ufSBmcm9tIFwiLi4vcm91dGluZy9hYnN0cmFjdC1yb3V0ZS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQge0lFbnRpdHlTZWxlY3Rvcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91aS9pLWVudGl0eS1zZWxlY3RvclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElFbnRpdHlSZXNvbHZlckNvbmZpZ3VyYXRpb24ge1xuICBrZWVwUXVlcnlQYXJhbXM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEVudGl0eVJlc29sdmVyPFRSb3V0ZVBhcmFtcywgVE1vZGVsPiB7XG5cbiAgcHVibGljIGFic3RyYWN0IHJlc29sdmUoXG4gICAgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIG1vZGVsOiBUTW9kZWwsXG4gICAgZW50aXR5U2VsZWN0b3I6IElFbnRpdHlTZWxlY3RvcjxUTW9kZWw+XG4gICk6IFByb21pc2U8Ym9vbGVhbj47XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByZWFkb25seSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcm91dGVDb25maWd1cmF0aW9uOiBBYnN0cmFjdFJvdXRlQ29uZmlndXJhdGlvbjxUUm91dGVQYXJhbXM+LFxuICAgIHByb3RlY3RlZCByZWFkb25seSBjb25maWd1cmF0aW9uPzogSUVudGl0eVJlc29sdmVyQ29uZmlndXJhdGlvbixcbiAgKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbiB8fCBBYnN0cmFjdEVudGl0eVJlc29sdmVyLmdlbmVyYXRlRGVmYXVsdENvbmZpZ3VyYXRpb24oKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBydW5SZXNvbHZlcihhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHBhcmFtczogb2JqZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgY3VycmVudFJvdXRlUGFyYW1zID0gXy5leHRlbmQoXy5jbG9uZShhY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbXMpLCBwYXJhbXMpO1xuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24ua2VlcFF1ZXJ5UGFyYW1zKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICAgIHRoaXMucm91dGVDb25maWd1cmF0aW9uLmJ1aWxkTmF2aWdhdGlvbihjdXJyZW50Um91dGVQYXJhbXMpLFxuICAgICAgICB7cXVlcnlQYXJhbXM6IGFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlKHRoaXMucm91dGVDb25maWd1cmF0aW9uLmJ1aWxkTmF2aWdhdGlvbihjdXJyZW50Um91dGVQYXJhbXMpKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdlbmVyYXRlRGVmYXVsdENvbmZpZ3VyYXRpb24oKTogSUVudGl0eVJlc29sdmVyQ29uZmlndXJhdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtlZXBRdWVyeVBhcmFtczogZmFsc2VcbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==