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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhY3RpdmF0aW9uLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvZGVhY3RpdmF0aW9uLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRTNELE1BQU0sT0FBTyxtQkFBbUI7SUFBaEM7UUFFVSxrQkFBYSxHQUFvQyxFQUFFLENBQUM7SUFrQzlELENBQUM7Ozs7OztJQS9CUSxRQUFRLENBQUMsSUFBWSxFQUFFLFNBQXNCO1FBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLElBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFTSxhQUFhO1FBQ2xCLE9BQU8sSUFBSSxVQUFVOzs7O1FBQVUsVUFBVSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxLQUFhLEVBQUUsUUFBNkI7O2NBQ2pFLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksbUJBQW1COzs7O1lBQUUsQ0FBQyxhQUFzQixFQUFFLEVBQUU7Z0JBQzNHLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQ2hEO1lBQ0gsQ0FBQyxFQUFDLENBQUMsQ0FBQztTQUNMO0lBQ0gsQ0FBQztDQUVGOzs7Ozs7SUFsQ0MsNENBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRGVhY3RpdmF0ZX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91dGlsL2ktZGVhY3RpdmF0ZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb25NYW5hZ2VyfSBmcm9tIFwiLi9zdWJzY3JpcHRpb24tbWFuYWdlclwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb25IYW5kbGVyfSBmcm9tIFwiLi9zdWJzY3JpcHRpb24taGFuZGxlclwiO1xuXG5leHBvcnQgY2xhc3MgRGVhY3RpdmF0aW9uSGFuZGxlciBpbXBsZW1lbnRzIElEZWFjdGl2YXRlIHtcblxuICBwcml2YXRlIGRlYWN0aXZhdG9ycyQ6IHsgW25hbWU6IHN0cmluZ106IElEZWFjdGl2YXRlIH0gPSB7fTtcblxuXG4gIHB1YmxpYyByZWdpc3RlcihuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogSURlYWN0aXZhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmRlYWN0aXZhdG9ycyRbbmFtZV0gPSBjb21wb25lbnQ7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLmRlYWN0aXZhdG9ycyRbbmFtZV07XG4gIH1cblxuICBwdWJsaWMgY2FuRGVhY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8Ym9vbGVhbj4oc3Vic2NyaWJlciA9PiB7XG4gICAgICB0aGlzLl9kZWFjdGl2YXRlQ29tcG9uZW50KDAsIHN1YnNjcmliZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVhY3RpdmF0ZUNvbXBvbmVudChpbmRleDogbnVtYmVyLCBvYnNlcnZlcjogU3Vic2NyaWJlcjxib29sZWFuPik6IHZvaWQge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IE9iamVjdC52YWx1ZXModGhpcy5kZWFjdGl2YXRvcnMkKVtpbmRleF07XG4gICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgIG9ic2VydmVyLm5leHQodHJ1ZSk7XG4gICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmliZShjb21wb25lbnQuY2FuRGVhY3RpdmF0ZSgpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlciggKGNhbkRlYWN0aXZhdGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgaWYgKCFjYW5EZWFjdGl2YXRlKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9kZWFjdGl2YXRlQ29tcG9uZW50KGluZGV4ICsgMSwgb2JzZXJ2ZXIpO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==