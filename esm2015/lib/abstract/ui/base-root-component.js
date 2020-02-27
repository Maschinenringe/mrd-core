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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yb290LWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3VpL2Jhc2Utcm9vdC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUdoQyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUVuRSxNQUFNLE9BQWdCLGlCQUFrQixTQUFRLHNCQUFzQjtJQUF0RTs7UUFJWSxnQkFBVyxHQUEyQixFQUFFLENBQUM7SUE0QnJELENBQUM7Ozs7OztJQTFCUSxRQUFRLENBQUMsVUFBZ0MsRUFBRSxRQUEwQztRQUMxRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksbUJBQW1COzs7O1FBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtZQUM1RSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXOzs7O1FBQUUsQ0FBQyxVQUFnQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUMsQ0FBQztJQUNyRyxDQUFDOzs7Ozs7OztJQUVTLGVBQWUsQ0FDdkIsVUFBZ0MsRUFDaEMsT0FBWSxFQUNaLFFBQTBDO1FBRTFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksbUJBQW1COzs7O1FBQUMsQ0FBQyxhQUFzQixFQUFFLEVBQUU7WUFDdEYsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLG9CQUFvQjtnQkFDcEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUMsRUFBQyxDQUFDLENBQUM7SUFDTixDQUFDO0NBRUY7Ozs7OztJQTdCQywyQ0FBa0Q7Ozs7O0lBQ2xELHdDQUFtRDs7Ozs7SUFGbkQsNERBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRGVhY3RpdmF0ZX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91dGlsL2ktZGVhY3RpdmF0ZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0lFbnRpdHlTZWxlY3Rvcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91aS9pLWVudGl0eS1zZWxlY3RvclwiO1xyXG5pbXBvcnQge1N1YnNjcmlwdGlvbkhhbmRsZXJ9IGZyb20gXCIuLi8uLi9pbXBsL3V0aWwvc3Vic2NyaXB0aW9uLWhhbmRsZXJcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHtBYnN0cmFjdEVudGl0eVJlc29sdmVyfSBmcm9tIFwiLi4vdXRpbC9hYnN0cmFjdC1lbnRpdHktcmVzb2x2ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0Jhc2VQdXNoU3RyYXRlZ3lPYmplY3R9IGZyb20gXCIuL2Jhc2UtcHVzaC1zdHJhdGVneS1vYmplY3RcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUm9vdENvbXBvbmVudCBleHRlbmRzIEJhc2VQdXNoU3RyYXRlZ3lPYmplY3QgaW1wbGVtZW50cyBJRGVhY3RpdmF0ZSwgT25EZXN0cm95IHtcclxuXHJcbiAgcHVibGljIGFic3RyYWN0IGNhbkRlYWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlO1xyXG4gIHByb3RlY3RlZCBvYnNlcnZhYmxlczogSUVudGl0eVNlbGVjdG9yPGFueT5bXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgbGlzdGVuVG8ob2JzZXJ2YWJsZTogSUVudGl0eVNlbGVjdG9yPGFueT4sIHJlc29sdmVyOiBBYnN0cmFjdEVudGl0eVJlc29sdmVyPGFueSwgYW55Pik6IHZvaWQge1xyXG4gICAgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKG9ic2VydmFibGUpO1xyXG4gICAgb2JzZXJ2YWJsZS5pc1Zpc2libGUudmFsdWUgPSB0cnVlO1xyXG4gICAgdGhpcy53YXRjaChvYnNlcnZhYmxlLm5leHRSZXF1ZXN0ZWQsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChkYXRhU2V0OiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5vbk5leHRSZXF1ZXN0ZWQob2JzZXJ2YWJsZSwgZGF0YVNldCwgcmVzb2x2ZXIpO1xyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcclxuICAgIF8uZWFjaCh0aGlzLm9ic2VydmFibGVzLCAob2JzZXJ2YWJsZTogSUVudGl0eVNlbGVjdG9yPGFueT4pID0+IG9ic2VydmFibGUuaXNWaXNpYmxlLnZhbHVlID0gZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG9uTmV4dFJlcXVlc3RlZChcclxuICAgIG9ic2VydmFibGU6IElFbnRpdHlTZWxlY3Rvcjxhbnk+LFxyXG4gICAgZGF0YVNldDogYW55LFxyXG4gICAgcmVzb2x2ZXI6IEFic3RyYWN0RW50aXR5UmVzb2x2ZXI8YW55LCBhbnk+XHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLnN1YnNjcmliZSh0aGlzLmNhbkRlYWN0aXZhdGUoKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKGNhbkRlYWN0aXZhdGU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgaWYgKGNhbkRlYWN0aXZhdGUpIHtcclxuICAgICAgICAvLyBNYXliZSBjYXRjaCBlcnJvclxyXG4gICAgICAgIHJlc29sdmVyLnJlc29sdmUodGhpcy5hY3RpdmF0ZWRSb3V0ZSwgZGF0YVNldCwgb2JzZXJ2YWJsZSk7XHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==