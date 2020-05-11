/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/ui/base-root-component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SubscriptionHandler } from "../../impl/util/subscription-handler";
import * as _ from 'underscore';
import { BasePushStrategyObject } from "./base-push-strategy-object";
/**
 * @abstract
 */
var /**
 * @abstract
 */
BaseRootComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BaseRootComponent, _super);
    function BaseRootComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.observables = [];
        return _this;
    }
    /**
     * @param {?} observable
     * @param {?} resolver
     * @return {?}
     */
    BaseRootComponent.prototype.listenTo = /**
     * @param {?} observable
     * @param {?} resolver
     * @return {?}
     */
    function (observable, resolver) {
        var _this = this;
        this.observables.push(observable);
        observable.isVisible.value = true;
        this.watch(observable.nextRequested, new SubscriptionHandler((/**
         * @param {?} dataSet
         * @return {?}
         */
        function (dataSet) {
            _this.onNextRequested(observable, dataSet, resolver);
        })));
    };
    /**
     * @return {?}
     */
    BaseRootComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        _.each(this.observables, (/**
         * @param {?} observable
         * @return {?}
         */
        function (observable) { return observable.isVisible.value = false; }));
    };
    /**
     * @protected
     * @param {?} observable
     * @param {?} dataSet
     * @param {?} resolver
     * @return {?}
     */
    BaseRootComponent.prototype.onNextRequested = /**
     * @protected
     * @param {?} observable
     * @param {?} dataSet
     * @param {?} resolver
     * @return {?}
     */
    function (observable, dataSet, resolver) {
        var _this = this;
        this.subscribe(this.canDeactivate(), new SubscriptionHandler((/**
         * @param {?} canDeactivate
         * @return {?}
         */
        function (canDeactivate) {
            if (canDeactivate) {
                // Maybe catch error
                resolver.resolve(_this.activatedRoute, dataSet, observable);
            }
        })));
    };
    return BaseRootComponent;
}(BasePushStrategyObject));
/**
 * @abstract
 */
export { BaseRootComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yb290LWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3VpL2Jhc2Utcm9vdC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFHaEMsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFFbkU7Ozs7SUFBZ0QsNkNBQXNCO0lBQXRFO1FBQUEscUVBZ0NDO1FBNUJXLGlCQUFXLEdBQTJCLEVBQUUsQ0FBQzs7SUE0QnJELENBQUM7Ozs7OztJQTFCUSxvQ0FBUTs7Ozs7SUFBZixVQUFnQixVQUFnQyxFQUFFLFFBQTBDO1FBQTVGLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLG1CQUFtQjs7OztRQUFDLFVBQUMsT0FBWTtZQUN4RSxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Ozs7SUFFTSx1Q0FBVzs7O0lBQWxCO1FBQ0UsaUJBQU0sV0FBVyxXQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVzs7OztRQUFFLFVBQUMsVUFBZ0MsSUFBSyxPQUFBLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEMsQ0FBa0MsRUFBQyxDQUFDO0lBQ3JHLENBQUM7Ozs7Ozs7O0lBRVMsMkNBQWU7Ozs7Ozs7SUFBekIsVUFDRSxVQUFnQyxFQUNoQyxPQUFZLEVBQ1osUUFBMEM7UUFINUMsaUJBV0M7UUFOQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLG1CQUFtQjs7OztRQUFDLFVBQUMsYUFBc0I7WUFDbEYsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLG9CQUFvQjtnQkFDcEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUMsRUFBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQUFDLEFBaENELENBQWdELHNCQUFzQixHQWdDckU7Ozs7Ozs7Ozs7SUE3QkMsMkNBQWtEOzs7OztJQUNsRCx3Q0FBbUQ7Ozs7O0lBRm5ELDREQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SURlYWN0aXZhdGV9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvdXRpbC9pLWRlYWN0aXZhdGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJRW50aXR5U2VsZWN0b3J9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvdWkvaS1lbnRpdHktc2VsZWN0b3JcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9uSGFuZGxlcn0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC9zdWJzY3JpcHRpb24taGFuZGxlclwiO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7QWJzdHJhY3RFbnRpdHlSZXNvbHZlcn0gZnJvbSBcIi4uL3V0aWwvYWJzdHJhY3QtZW50aXR5LXJlc29sdmVyXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0Jhc2VQdXNoU3RyYXRlZ3lPYmplY3R9IGZyb20gXCIuL2Jhc2UtcHVzaC1zdHJhdGVneS1vYmplY3RcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSb290Q29tcG9uZW50IGV4dGVuZHMgQmFzZVB1c2hTdHJhdGVneU9iamVjdCBpbXBsZW1lbnRzIElEZWFjdGl2YXRlLCBPbkRlc3Ryb3kge1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBjYW5EZWFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGU7XG4gIHByb3RlY3RlZCBvYnNlcnZhYmxlczogSUVudGl0eVNlbGVjdG9yPGFueT5bXSA9IFtdO1xuXG4gIHB1YmxpYyBsaXN0ZW5UbyhvYnNlcnZhYmxlOiBJRW50aXR5U2VsZWN0b3I8YW55PiwgcmVzb2x2ZXI6IEFic3RyYWN0RW50aXR5UmVzb2x2ZXI8YW55LCBhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKG9ic2VydmFibGUpO1xuICAgIG9ic2VydmFibGUuaXNWaXNpYmxlLnZhbHVlID0gdHJ1ZTtcbiAgICB0aGlzLndhdGNoKG9ic2VydmFibGUubmV4dFJlcXVlc3RlZCwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKGRhdGFTZXQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5vbk5leHRSZXF1ZXN0ZWQob2JzZXJ2YWJsZSwgZGF0YVNldCwgcmVzb2x2ZXIpO1xuICAgIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIF8uZWFjaCh0aGlzLm9ic2VydmFibGVzLCAob2JzZXJ2YWJsZTogSUVudGl0eVNlbGVjdG9yPGFueT4pID0+IG9ic2VydmFibGUuaXNWaXNpYmxlLnZhbHVlID0gZmFsc2UpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uTmV4dFJlcXVlc3RlZChcbiAgICBvYnNlcnZhYmxlOiBJRW50aXR5U2VsZWN0b3I8YW55PixcbiAgICBkYXRhU2V0OiBhbnksXG4gICAgcmVzb2x2ZXI6IEFic3RyYWN0RW50aXR5UmVzb2x2ZXI8YW55LCBhbnk+XG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaWJlKHRoaXMuY2FuRGVhY3RpdmF0ZSgpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoY2FuRGVhY3RpdmF0ZTogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKGNhbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgLy8gTWF5YmUgY2F0Y2ggZXJyb3JcbiAgICAgICAgcmVzb2x2ZXIucmVzb2x2ZSh0aGlzLmFjdGl2YXRlZFJvdXRlLCBkYXRhU2V0LCBvYnNlcnZhYmxlKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cblxufVxuIl19