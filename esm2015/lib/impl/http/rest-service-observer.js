/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/http/rest-service-observer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadonlyRestServiceObserver } from './readonly-rest-service-observer';
import { Subject } from "rxjs";
/**
 * @template T
 */
export class RestServiceObserver extends ReadonlyRestServiceObserver {
    constructor() {
        super();
        this.onItemCreated = new Subject();
        this.onItemUpdated = new Subject();
        this.onItemDestroyed = new Subject();
        this.onItemPartialUpdated = new Subject();
        this.onItemSaved = new Subject();
        this.isCreatingItem$ = false;
        this.isUpdatingItem$ = false;
        this.isDestoyingItem$ = false;
        this.isPartiallyUpdatingItem$ = false;
    }
    /**
     * @return {?}
     */
    isActivate() {
        return super.isActivate() &&
            !this.isCreatingItem$ &&
            !this.isUpdatingItem$ &&
            !this.isDestoyingItem$ &&
            !this.isPartiallyUpdatingItem$ &&
            !this.isSavingItem$;
    }
    /**
     * @param {?} isCreating
     * @return {?}
     */
    set isCreatingItem(isCreating) {
        this.isCreatingItem$ = isCreating;
    }
    /**
     * @return {?}
     */
    get isCreatingItem() {
        return this.isCreatingItem$;
    }
    /**
     * @param {?} isUpdating
     * @return {?}
     */
    set isUpdatingItem(isUpdating) {
        this.isUpdatingItem$ = isUpdating;
    }
    /**
     * @return {?}
     */
    get isUpdatingItem() {
        return this.isUpdatingItem$;
    }
    /**
     * @param {?} isDestroying
     * @return {?}
     */
    set isDestoyingItem(isDestroying) {
        this.isDestoyingItem$ = isDestroying;
    }
    /**
     * @return {?}
     */
    get isDestoyingItem() {
        return this.isDestoyingItem$;
    }
    /**
     * @param {?} isUpdating
     * @return {?}
     */
    set isPartiallyUpdatingItem(isUpdating) {
        this.isPartiallyUpdatingItem$ = isUpdating;
    }
    /**
     * @return {?}
     */
    get isPartiallyUpdatingItem() {
        return this.isPartiallyUpdatingItem$;
    }
    /**
     * @param {?} isSaving
     * @return {?}
     */
    set isSavingItem(isSaving) {
        this.isSavingItem$ = isSaving;
    }
    /**
     * @return {?}
     */
    get isSavingItem() {
        return this.isSavingItem$;
    }
}
if (false) {
    /** @type {?} */
    RestServiceObserver.prototype.onItemCreated;
    /** @type {?} */
    RestServiceObserver.prototype.onItemUpdated;
    /** @type {?} */
    RestServiceObserver.prototype.onItemDestroyed;
    /** @type {?} */
    RestServiceObserver.prototype.onItemPartialUpdated;
    /** @type {?} */
    RestServiceObserver.prototype.onItemSaved;
    /**
     * @type {?}
     * @private
     */
    RestServiceObserver.prototype.isCreatingItem$;
    /**
     * @type {?}
     * @private
     */
    RestServiceObserver.prototype.isUpdatingItem$;
    /**
     * @type {?}
     * @private
     */
    RestServiceObserver.prototype.isDestoyingItem$;
    /**
     * @type {?}
     * @private
     */
    RestServiceObserver.prototype.isPartiallyUpdatingItem$;
    /**
     * @type {?}
     * @private
     */
    RestServiceObserver.prototype.isSavingItem$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1zZXJ2aWNlLW9ic2VydmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC9odHRwL3Jlc3Qtc2VydmljZS1vYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7QUFHN0IsTUFBTSxPQUFPLG1CQUF1QixTQUFRLDJCQUE4QjtJQWN4RTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBYk0sa0JBQWEsR0FBZSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzFDLGtCQUFhLEdBQWUsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMxQyxvQkFBZSxHQUFlLElBQUksT0FBTyxFQUFFLENBQUM7UUFDNUMseUJBQW9CLEdBQWUsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqRCxnQkFBVyxHQUFlLElBQUksT0FBTyxFQUFFLENBQUM7UUFVdEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsT0FBTyxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLENBQUMsSUFBSSxDQUFDLGVBQWU7WUFDckIsQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUNyQixDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFDdEIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCO1lBQzlCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELElBQUksY0FBYyxDQUFDLFVBQW1CO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsSUFBSSxjQUFjLENBQUMsVUFBbUI7UUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxJQUFJLGVBQWUsQ0FBQyxZQUFxQjtRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxJQUFJLHVCQUF1QixDQUFDLFVBQW1CO1FBQzdDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxVQUFVLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELElBQUksdUJBQXVCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsSUFBSSxZQUFZLENBQUMsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0NBR0Y7OztJQXRFQyw0Q0FBMEQ7O0lBQzFELDRDQUEwRDs7SUFDMUQsOENBQTREOztJQUM1RCxtREFBaUU7O0lBQ2pFLDBDQUF3RDs7Ozs7SUFFeEQsOENBQWlDOzs7OztJQUNqQyw4Q0FBaUM7Ozs7O0lBQ2pDLCtDQUFrQzs7Ozs7SUFDbEMsdURBQTBDOzs7OztJQUMxQyw0Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWRvbmx5UmVzdFNlcnZpY2VPYnNlcnZlcn0gZnJvbSAnLi9yZWFkb25seS1yZXN0LXNlcnZpY2Utb2JzZXJ2ZXInO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VD4gZXh0ZW5kcyBSZWFkb25seVJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VD4ge1xyXG5cclxuICBwdWJsaWMgcmVhZG9ubHkgb25JdGVtQ3JlYXRlZDogU3ViamVjdDxUPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIHJlYWRvbmx5IG9uSXRlbVVwZGF0ZWQ6IFN1YmplY3Q8VD4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHB1YmxpYyByZWFkb25seSBvbkl0ZW1EZXN0cm95ZWQ6IFN1YmplY3Q8VD4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIHB1YmxpYyByZWFkb25seSBvbkl0ZW1QYXJ0aWFsVXBkYXRlZDogU3ViamVjdDxUPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIHJlYWRvbmx5IG9uSXRlbVNhdmVkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgcHJpdmF0ZSBpc0NyZWF0aW5nSXRlbSQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBpc1VwZGF0aW5nSXRlbSQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBpc0Rlc3RveWluZ0l0ZW0kOiBib29sZWFuO1xyXG4gIHByaXZhdGUgaXNQYXJ0aWFsbHlVcGRhdGluZ0l0ZW0kOiBib29sZWFuO1xyXG4gIHByaXZhdGUgaXNTYXZpbmdJdGVtJDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pc0NyZWF0aW5nSXRlbSQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNVcGRhdGluZ0l0ZW0kID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRGVzdG95aW5nSXRlbSQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNQYXJ0aWFsbHlVcGRhdGluZ0l0ZW0kID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNBY3RpdmF0ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBzdXBlci5pc0FjdGl2YXRlKCkgJiZcclxuICAgICAgIXRoaXMuaXNDcmVhdGluZ0l0ZW0kICYmXHJcbiAgICAgICF0aGlzLmlzVXBkYXRpbmdJdGVtJCAmJlxyXG4gICAgICAhdGhpcy5pc0Rlc3RveWluZ0l0ZW0kICYmXHJcbiAgICAgICF0aGlzLmlzUGFydGlhbGx5VXBkYXRpbmdJdGVtJCAmJlxyXG4gICAgICAhdGhpcy5pc1NhdmluZ0l0ZW0kO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzQ3JlYXRpbmdJdGVtKGlzQ3JlYXRpbmc6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNDcmVhdGluZ0l0ZW0kID0gaXNDcmVhdGluZztcclxuICB9XHJcblxyXG4gIGdldCBpc0NyZWF0aW5nSXRlbSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzQ3JlYXRpbmdJdGVtJDtcclxuICB9XHJcblxyXG4gIHNldCBpc1VwZGF0aW5nSXRlbShpc1VwZGF0aW5nOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzVXBkYXRpbmdJdGVtJCA9IGlzVXBkYXRpbmc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNVcGRhdGluZ0l0ZW0oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1VwZGF0aW5nSXRlbSQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNEZXN0b3lpbmdJdGVtKGlzRGVzdHJveWluZzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc0Rlc3RveWluZ0l0ZW0kID0gaXNEZXN0cm95aW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRGVzdG95aW5nSXRlbSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzRGVzdG95aW5nSXRlbSQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNQYXJ0aWFsbHlVcGRhdGluZ0l0ZW0oaXNVcGRhdGluZzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc1BhcnRpYWxseVVwZGF0aW5nSXRlbSQgPSBpc1VwZGF0aW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzUGFydGlhbGx5VXBkYXRpbmdJdGVtKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNQYXJ0aWFsbHlVcGRhdGluZ0l0ZW0kO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzU2F2aW5nSXRlbShpc1NhdmluZzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc1NhdmluZ0l0ZW0kID0gaXNTYXZpbmc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNTYXZpbmdJdGVtKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNTYXZpbmdJdGVtJDtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=