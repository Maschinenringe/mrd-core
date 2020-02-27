/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/deactivation-handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { SubscriptionManager } from "./subscription-manager";
import { SubscriptionHandler } from "./subscription-handler";
var DeactivationHandler = /** @class */ (function () {
    function DeactivationHandler() {
        this.deactivators$ = {};
    }
    /**
     * @param {?} name
     * @param {?} component
     * @return {?}
     */
    DeactivationHandler.prototype.register = /**
     * @param {?} name
     * @param {?} component
     * @return {?}
     */
    function (name, component) {
        this.deactivators$[name] = component;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    DeactivationHandler.prototype.remove = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        delete this.deactivators$[name];
    };
    /**
     * @return {?}
     */
    DeactivationHandler.prototype.canDeactivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            _this._deactivateComponent(0, subscriber);
        }));
    };
    /**
     * @private
     * @param {?} index
     * @param {?} observer
     * @return {?}
     */
    DeactivationHandler.prototype._deactivateComponent = /**
     * @private
     * @param {?} index
     * @param {?} observer
     * @return {?}
     */
    function (index, observer) {
        var _this = this;
        /** @type {?} */
        var component = Object.values(this.deactivators$)[index];
        if (!component) {
            observer.next(true);
            observer.complete();
        }
        else {
            SubscriptionManager.subscribe(component.canDeactivate(), new SubscriptionHandler((/**
             * @param {?} canDeactivate
             * @return {?}
             */
            function (canDeactivate) {
                if (!canDeactivate) {
                    observer.next(false);
                    observer.complete();
                }
                else {
                    _this._deactivateComponent(index + 1, observer);
                }
            })));
        }
    };
    return DeactivationHandler;
}());
export { DeactivationHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeactivationHandler.prototype.deactivators$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhY3RpdmF0aW9uLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvZGVhY3RpdmF0aW9uLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRTNEO0lBQUE7UUFFVSxrQkFBYSxHQUFvQyxFQUFFLENBQUM7SUFrQzlELENBQUM7Ozs7OztJQS9CUSxzQ0FBUTs7Ozs7SUFBZixVQUFnQixJQUFZLEVBQUUsU0FBc0I7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTSxvQ0FBTTs7OztJQUFiLFVBQWMsSUFBWTtRQUN4QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVNLDJDQUFhOzs7SUFBcEI7UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxVQUFVOzs7O1FBQVUsVUFBQSxVQUFVO1lBQ3ZDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRU8sa0RBQW9COzs7Ozs7SUFBNUIsVUFBNkIsS0FBYSxFQUFFLFFBQTZCO1FBQXpFLGlCQWVDOztZQWRPLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksbUJBQW1COzs7O1lBQUUsVUFBQyxhQUFzQjtnQkFDdkcsSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNyQjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDaEQ7WUFDSCxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBRUgsMEJBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDOzs7Ozs7O0lBbENDLDRDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SURlYWN0aXZhdGV9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvdXRpbC9pLWRlYWN0aXZhdGVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1N1YnNjcmlwdGlvbk1hbmFnZXJ9IGZyb20gXCIuL3N1YnNjcmlwdGlvbi1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7U3Vic2NyaXB0aW9uSGFuZGxlcn0gZnJvbSBcIi4vc3Vic2NyaXB0aW9uLWhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWFjdGl2YXRpb25IYW5kbGVyIGltcGxlbWVudHMgSURlYWN0aXZhdGUge1xyXG5cclxuICBwcml2YXRlIGRlYWN0aXZhdG9ycyQ6IHsgW25hbWU6IHN0cmluZ106IElEZWFjdGl2YXRlIH0gPSB7fTtcclxuXHJcblxyXG4gIHB1YmxpYyByZWdpc3RlcihuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogSURlYWN0aXZhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVhY3RpdmF0b3JzJFtuYW1lXSA9IGNvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBkZWxldGUgdGhpcy5kZWFjdGl2YXRvcnMkW25hbWVdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbkRlYWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8Ym9vbGVhbj4oc3Vic2NyaWJlciA9PiB7XHJcbiAgICAgIHRoaXMuX2RlYWN0aXZhdGVDb21wb25lbnQoMCwgc3Vic2NyaWJlcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2RlYWN0aXZhdGVDb21wb25lbnQoaW5kZXg6IG51bWJlciwgb2JzZXJ2ZXI6IFN1YnNjcmliZXI8Ym9vbGVhbj4pOiB2b2lkIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IE9iamVjdC52YWx1ZXModGhpcy5kZWFjdGl2YXRvcnMkKVtpbmRleF07XHJcbiAgICBpZiAoIWNvbXBvbmVudCkge1xyXG4gICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xyXG4gICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpYmUoY29tcG9uZW50LmNhbkRlYWN0aXZhdGUoKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoIChjYW5EZWFjdGl2YXRlOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjYW5EZWFjdGl2YXRlKSB7XHJcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KGZhbHNlKTtcclxuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX2RlYWN0aXZhdGVDb21wb25lbnQoaW5kZXggKyAxLCBvYnNlcnZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=