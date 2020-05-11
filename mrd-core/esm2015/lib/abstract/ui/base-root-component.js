/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/ui/base-root-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SubscriptionHandler } from "../../impl/util/subscription-handler";
import * as _ from 'underscore';
import { BasePushStrategyObject } from "./base-push-strategy-object";
/**
 * @abstract
 */
export class BaseRootComponent extends BasePushStrategyObject {
    constructor() {
        super(...arguments);
        this.observables = [];
    }
    /**
     * @param {?} observable
     * @param {?} resolver
     * @return {?}
     */
    listenTo(observable, resolver) {
        this.observables.push(observable);
        observable.isVisible.value = true;
        this.watch(observable.nextRequested, new SubscriptionHandler((/**
         * @param {?} dataSet
         * @return {?}
         */
        (dataSet) => {
            this.onNextRequested(observable, dataSet, resolver);
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        _.each(this.observables, (/**
         * @param {?} observable
         * @return {?}
         */
        (observable) => observable.isVisible.value = false));
    }
    /**
     * @protected
     * @param {?} observable
     * @param {?} dataSet
     * @param {?} resolver
     * @return {?}
     */
    onNextRequested(observable, dataSet, resolver) {
        this.subscribe(this.canDeactivate(), new SubscriptionHandler((/**
         * @param {?} canDeactivate
         * @return {?}
         */
        (canDeactivate) => {
            if (canDeactivate) {
                // Maybe catch error
                resolver.resolve(this.activatedRoute, dataSet, observable);
            }
        })));
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BaseRootComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @protected
     */
    BaseRootComponent.prototype.observables;
    /**
     * @abstract
     * @return {?}
     */
    BaseRootComponent.prototype.canDeactivate = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yb290LWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3VpL2Jhc2Utcm9vdC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUdoQyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUVuRSxNQUFNLE9BQWdCLGlCQUFrQixTQUFRLHNCQUFzQjtJQUF0RTs7UUFJWSxnQkFBVyxHQUEyQixFQUFFLENBQUM7SUE0QnJELENBQUM7Ozs7OztJQTFCUSxRQUFRLENBQUMsVUFBZ0MsRUFBRSxRQUEwQztRQUMxRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksbUJBQW1COzs7O1FBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtZQUM1RSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXOzs7O1FBQUUsQ0FBQyxVQUFnQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUMsQ0FBQztJQUNyRyxDQUFDOzs7Ozs7OztJQUVTLGVBQWUsQ0FDdkIsVUFBZ0MsRUFDaEMsT0FBWSxFQUNaLFFBQTBDO1FBRTFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksbUJBQW1COzs7O1FBQUMsQ0FBQyxhQUFzQixFQUFFLEVBQUU7WUFDdEYsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLG9CQUFvQjtnQkFDcEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUMsRUFBQyxDQUFDLENBQUM7SUFDTixDQUFDO0NBRUY7Ozs7OztJQTdCQywyQ0FBa0Q7Ozs7O0lBQ2xELHdDQUFtRDs7Ozs7SUFGbkQsNERBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRGVhY3RpdmF0ZX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91dGlsL2ktZGVhY3RpdmF0ZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lFbnRpdHlTZWxlY3Rvcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91aS9pLWVudGl0eS1zZWxlY3RvclwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb25IYW5kbGVyfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3N1YnNjcmlwdGlvbi1oYW5kbGVyXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHtBYnN0cmFjdEVudGl0eVJlc29sdmVyfSBmcm9tIFwiLi4vdXRpbC9hYnN0cmFjdC1lbnRpdHktcmVzb2x2ZXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7QmFzZVB1c2hTdHJhdGVneU9iamVjdH0gZnJvbSBcIi4vYmFzZS1wdXNoLXN0cmF0ZWd5LW9iamVjdFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVJvb3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0IGltcGxlbWVudHMgSURlYWN0aXZhdGUsIE9uRGVzdHJveSB7XG5cbiAgcHVibGljIGFic3RyYWN0IGNhbkRlYWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcbiAgcHJvdGVjdGVkIG9ic2VydmFibGVzOiBJRW50aXR5U2VsZWN0b3I8YW55PltdID0gW107XG5cbiAgcHVibGljIGxpc3RlblRvKG9ic2VydmFibGU6IElFbnRpdHlTZWxlY3Rvcjxhbnk+LCByZXNvbHZlcjogQWJzdHJhY3RFbnRpdHlSZXNvbHZlcjxhbnksIGFueT4pOiB2b2lkIHtcbiAgICB0aGlzLm9ic2VydmFibGVzLnB1c2gob2JzZXJ2YWJsZSk7XG4gICAgb2JzZXJ2YWJsZS5pc1Zpc2libGUudmFsdWUgPSB0cnVlO1xuICAgIHRoaXMud2F0Y2gob2JzZXJ2YWJsZS5uZXh0UmVxdWVzdGVkLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoZGF0YVNldDogYW55KSA9PiB7XG4gICAgICB0aGlzLm9uTmV4dFJlcXVlc3RlZChvYnNlcnZhYmxlLCBkYXRhU2V0LCByZXNvbHZlcik7XG4gICAgfSkpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgXy5lYWNoKHRoaXMub2JzZXJ2YWJsZXMsIChvYnNlcnZhYmxlOiBJRW50aXR5U2VsZWN0b3I8YW55PikgPT4gb2JzZXJ2YWJsZS5pc1Zpc2libGUudmFsdWUgPSBmYWxzZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgb25OZXh0UmVxdWVzdGVkKFxuICAgIG9ic2VydmFibGU6IElFbnRpdHlTZWxlY3Rvcjxhbnk+LFxuICAgIGRhdGFTZXQ6IGFueSxcbiAgICByZXNvbHZlcjogQWJzdHJhY3RFbnRpdHlSZXNvbHZlcjxhbnksIGFueT5cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpYmUodGhpcy5jYW5EZWFjdGl2YXRlKCksIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChjYW5EZWFjdGl2YXRlOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoY2FuRGVhY3RpdmF0ZSkge1xuICAgICAgICAvLyBNYXliZSBjYXRjaCBlcnJvclxuICAgICAgICByZXNvbHZlci5yZXNvbHZlKHRoaXMuYWN0aXZhdGVkUm91dGUsIGRhdGFTZXQsIG9ic2VydmFibGUpO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuXG59XG4iXX0=