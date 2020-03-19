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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhY3RpdmF0aW9uLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvZGVhY3RpdmF0aW9uLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRTNEO0lBQUE7UUFFVSxrQkFBYSxHQUFvQyxFQUFFLENBQUM7SUFrQzlELENBQUM7Ozs7OztJQS9CUSxzQ0FBUTs7Ozs7SUFBZixVQUFnQixJQUFZLEVBQUUsU0FBc0I7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTSxvQ0FBTTs7OztJQUFiLFVBQWMsSUFBWTtRQUN4QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVNLDJDQUFhOzs7SUFBcEI7UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxVQUFVOzs7O1FBQVUsVUFBQSxVQUFVO1lBQ3ZDLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRU8sa0RBQW9COzs7Ozs7SUFBNUIsVUFBNkIsS0FBYSxFQUFFLFFBQTZCO1FBQXpFLGlCQWVDOztZQWRPLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksbUJBQW1COzs7O1lBQUUsVUFBQyxhQUFzQjtnQkFDdkcsSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDbEIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNyQjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDaEQ7WUFDSCxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ0w7SUFDSCxDQUFDO0lBRUgsMEJBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDOzs7Ozs7O0lBbENDLDRDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SURlYWN0aXZhdGV9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvdXRpbC9pLWRlYWN0aXZhdGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmliZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7U3Vic2NyaXB0aW9uTWFuYWdlcn0gZnJvbSBcIi4vc3Vic2NyaXB0aW9uLW1hbmFnZXJcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9uSGFuZGxlcn0gZnJvbSBcIi4vc3Vic2NyaXB0aW9uLWhhbmRsZXJcIjtcblxuZXhwb3J0IGNsYXNzIERlYWN0aXZhdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBJRGVhY3RpdmF0ZSB7XG5cbiAgcHJpdmF0ZSBkZWFjdGl2YXRvcnMkOiB7IFtuYW1lOiBzdHJpbmddOiBJRGVhY3RpdmF0ZSB9ID0ge307XG5cblxuICBwdWJsaWMgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IElEZWFjdGl2YXRlKTogdm9pZCB7XG4gICAgdGhpcy5kZWFjdGl2YXRvcnMkW25hbWVdID0gY29tcG9uZW50O1xuICB9XG5cbiAgcHVibGljIHJlbW92ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5kZWFjdGl2YXRvcnMkW25hbWVdO1xuICB9XG5cbiAgcHVibGljIGNhbkRlYWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPGJvb2xlYW4+KHN1YnNjcmliZXIgPT4ge1xuICAgICAgdGhpcy5fZGVhY3RpdmF0ZUNvbXBvbmVudCgwLCBzdWJzY3JpYmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2RlYWN0aXZhdGVDb21wb25lbnQoaW5kZXg6IG51bWJlciwgb2JzZXJ2ZXI6IFN1YnNjcmliZXI8Ym9vbGVhbj4pOiB2b2lkIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBPYmplY3QudmFsdWVzKHRoaXMuZGVhY3RpdmF0b3JzJClbaW5kZXhdO1xuICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICBvYnNlcnZlci5uZXh0KHRydWUpO1xuICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpYmUoY29tcG9uZW50LmNhbkRlYWN0aXZhdGUoKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoIChjYW5EZWFjdGl2YXRlOiBib29sZWFuKSA9PiB7XG4gICAgICAgIGlmICghY2FuRGVhY3RpdmF0ZSkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZGVhY3RpdmF0ZUNvbXBvbmVudChpbmRleCArIDEsIG9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=