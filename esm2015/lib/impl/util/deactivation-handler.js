/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/deactivation-handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
import { SubscriptionManager } from "./subscription-manager";
import { SubscriptionHandler } from "./subscription-handler";
export class DeactivationHandler {
    constructor() {
        this.deactivators$ = {};
    }
    /**
     * @param {?} name
     * @param {?} component
     * @return {?}
     */
    register(name, component) {
        this.deactivators$[name] = component;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    remove(name) {
        delete this.deactivators$[name];
    }
    /**
     * @return {?}
     */
    canDeactivate() {
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        subscriber => {
            this._deactivateComponent(0, subscriber);
        }));
    }
    /**
     * @private
     * @param {?} index
     * @param {?} observer
     * @return {?}
     */
    _deactivateComponent(index, observer) {
        /** @type {?} */
        const component = Object.values(this.deactivators$)[index];
        if (!component) {
            observer.next(true);
            observer.complete();
        }
        else {
            SubscriptionManager.subscribe(component.canDeactivate(), new SubscriptionHandler((/**
             * @param {?} canDeactivate
             * @return {?}
             */
            (canDeactivate) => {
                if (!canDeactivate) {
                    observer.next(false);
                    observer.complete();
                }
                else {
                    this._deactivateComponent(index + 1, observer);
                }
            })));
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeactivationHandler.prototype.deactivators$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhY3RpdmF0aW9uLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvZGVhY3RpdmF0aW9uLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRTNELE1BQU0sT0FBTyxtQkFBbUI7SUFBaEM7UUFFVSxrQkFBYSxHQUFvQyxFQUFFLENBQUM7SUFrQzlELENBQUM7Ozs7OztJQS9CUSxRQUFRLENBQUMsSUFBWSxFQUFFLFNBQXNCO1FBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLElBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFTSxhQUFhO1FBQ2xCLE9BQU8sSUFBSSxVQUFVOzs7O1FBQVUsVUFBVSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxLQUFhLEVBQUUsUUFBNkI7O2NBQ2pFLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksbUJBQW1COzs7O1lBQUUsQ0FBQyxhQUFzQixFQUFFLEVBQUU7Z0JBQzNHLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQ2hEO1lBQ0gsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUNMO0lBQ0gsQ0FBQztDQUVGOzs7Ozs7SUFsQ0MsNENBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRGVhY3RpdmF0ZX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91dGlsL2ktZGVhY3RpdmF0ZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpYmVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7U3Vic2NyaXB0aW9uTWFuYWdlcn0gZnJvbSBcIi4vc3Vic2NyaXB0aW9uLW1hbmFnZXJcIjtcclxuaW1wb3J0IHtTdWJzY3JpcHRpb25IYW5kbGVyfSBmcm9tIFwiLi9zdWJzY3JpcHRpb24taGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlYWN0aXZhdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBJRGVhY3RpdmF0ZSB7XHJcblxyXG4gIHByaXZhdGUgZGVhY3RpdmF0b3JzJDogeyBbbmFtZTogc3RyaW5nXTogSURlYWN0aXZhdGUgfSA9IHt9O1xyXG5cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyKG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBJRGVhY3RpdmF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kZWFjdGl2YXRvcnMkW25hbWVdID0gY29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGRlbGV0ZSB0aGlzLmRlYWN0aXZhdG9ycyRbbmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuRGVhY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxib29sZWFuPihzdWJzY3JpYmVyID0+IHtcclxuICAgICAgdGhpcy5fZGVhY3RpdmF0ZUNvbXBvbmVudCgwLCBzdWJzY3JpYmVyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZGVhY3RpdmF0ZUNvbXBvbmVudChpbmRleDogbnVtYmVyLCBvYnNlcnZlcjogU3Vic2NyaWJlcjxib29sZWFuPik6IHZvaWQge1xyXG4gICAgY29uc3QgY29tcG9uZW50ID0gT2JqZWN0LnZhbHVlcyh0aGlzLmRlYWN0aXZhdG9ycyQpW2luZGV4XTtcclxuICAgIGlmICghY29tcG9uZW50KSB7XHJcbiAgICAgIG9ic2VydmVyLm5leHQodHJ1ZSk7XHJcbiAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmliZShjb21wb25lbnQuY2FuRGVhY3RpdmF0ZSgpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlciggKGNhbkRlYWN0aXZhdGU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAoIWNhbkRlYWN0aXZhdGUpIHtcclxuICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xyXG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5fZGVhY3RpdmF0ZUNvbXBvbmVudChpbmRleCArIDEsIG9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==