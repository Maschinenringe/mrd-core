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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yb290LWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3VpL2Jhc2Utcm9vdC1jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFHaEMsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFFbkU7Ozs7SUFBZ0QsNkNBQXNCO0lBQXRFO1FBQUEscUVBZ0NDO1FBNUJXLGlCQUFXLEdBQTJCLEVBQUUsQ0FBQzs7SUE0QnJELENBQUM7Ozs7OztJQTFCUSxvQ0FBUTs7Ozs7SUFBZixVQUFnQixVQUFnQyxFQUFFLFFBQTBDO1FBQTVGLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLG1CQUFtQjs7OztRQUFDLFVBQUMsT0FBWTtZQUN4RSxLQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Ozs7SUFFTSx1Q0FBVzs7O0lBQWxCO1FBQ0UsaUJBQU0sV0FBVyxXQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVzs7OztRQUFFLFVBQUMsVUFBZ0MsSUFBSyxPQUFBLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEMsQ0FBa0MsRUFBQyxDQUFDO0lBQ3JHLENBQUM7Ozs7Ozs7O0lBRVMsMkNBQWU7Ozs7Ozs7SUFBekIsVUFDRSxVQUFnQyxFQUNoQyxPQUFZLEVBQ1osUUFBMEM7UUFINUMsaUJBV0M7UUFOQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLG1CQUFtQjs7OztRQUFDLFVBQUMsYUFBc0I7WUFDbEYsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLG9CQUFvQjtnQkFDcEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUMsRUFBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUgsd0JBQUM7QUFBRCxDQUFDLEFBaENELENBQWdELHNCQUFzQixHQWdDckU7Ozs7Ozs7Ozs7SUE3QkMsMkNBQWtEOzs7OztJQUNsRCx3Q0FBbUQ7Ozs7O0lBRm5ELDREQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SURlYWN0aXZhdGV9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvdXRpbC9pLWRlYWN0aXZhdGVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJRW50aXR5U2VsZWN0b3J9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvdWkvaS1lbnRpdHktc2VsZWN0b3JcIjtcclxuaW1wb3J0IHtTdWJzY3JpcHRpb25IYW5kbGVyfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3N1YnNjcmlwdGlvbi1oYW5kbGVyXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCB7QWJzdHJhY3RFbnRpdHlSZXNvbHZlcn0gZnJvbSBcIi4uL3V0aWwvYWJzdHJhY3QtZW50aXR5LXJlc29sdmVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0fSBmcm9tIFwiLi9iYXNlLXB1c2gtc3RyYXRlZ3ktb2JqZWN0XCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVJvb3RDb21wb25lbnQgZXh0ZW5kcyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0IGltcGxlbWVudHMgSURlYWN0aXZhdGUsIE9uRGVzdHJveSB7XHJcblxyXG4gIHB1YmxpYyBhYnN0cmFjdCBjYW5EZWFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcclxuICBwcm90ZWN0ZWQgb2JzZXJ2YWJsZXM6IElFbnRpdHlTZWxlY3Rvcjxhbnk+W10gPSBbXTtcclxuXHJcbiAgcHVibGljIGxpc3RlblRvKG9ic2VydmFibGU6IElFbnRpdHlTZWxlY3Rvcjxhbnk+LCByZXNvbHZlcjogQWJzdHJhY3RFbnRpdHlSZXNvbHZlcjxhbnksIGFueT4pOiB2b2lkIHtcclxuICAgIHRoaXMub2JzZXJ2YWJsZXMucHVzaChvYnNlcnZhYmxlKTtcclxuICAgIG9ic2VydmFibGUuaXNWaXNpYmxlLnZhbHVlID0gdHJ1ZTtcclxuICAgIHRoaXMud2F0Y2gob2JzZXJ2YWJsZS5uZXh0UmVxdWVzdGVkLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoZGF0YVNldDogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMub25OZXh0UmVxdWVzdGVkKG9ic2VydmFibGUsIGRhdGFTZXQsIHJlc29sdmVyKTtcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgICBfLmVhY2godGhpcy5vYnNlcnZhYmxlcywgKG9ic2VydmFibGU6IElFbnRpdHlTZWxlY3Rvcjxhbnk+KSA9PiBvYnNlcnZhYmxlLmlzVmlzaWJsZS52YWx1ZSA9IGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvbk5leHRSZXF1ZXN0ZWQoXHJcbiAgICBvYnNlcnZhYmxlOiBJRW50aXR5U2VsZWN0b3I8YW55PixcclxuICAgIGRhdGFTZXQ6IGFueSxcclxuICAgIHJlc29sdmVyOiBBYnN0cmFjdEVudGl0eVJlc29sdmVyPGFueSwgYW55PlxyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy5zdWJzY3JpYmUodGhpcy5jYW5EZWFjdGl2YXRlKCksIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKChjYW5EZWFjdGl2YXRlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmIChjYW5EZWFjdGl2YXRlKSB7XHJcbiAgICAgICAgLy8gTWF5YmUgY2F0Y2ggZXJyb3JcclxuICAgICAgICByZXNvbHZlci5yZXNvbHZlKHRoaXMuYWN0aXZhdGVkUm91dGUsIGRhdGFTZXQsIG9ic2VydmFibGUpO1xyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=