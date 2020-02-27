/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/http/readonly-rest-service-observer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from "rxjs";
/**
 * @template T
 */
export class ReadonlyRestServiceObserver {
    constructor() {
        this.onItemFetched = new Subject();
        this.onItemsFetched = new Subject();
        this.isFetchingItem$ = false;
        this.isFetchingItems$ = false;
    }
    /**
     * @return {?}
     */
    isActivate() {
        return !this.isFetchingItem && !this.isFetchingItems;
    }
    /**
     * @param {?} fetching
     * @return {?}
     */
    set isFetchingItems(fetching) {
        this.isFetchingItems$ = fetching;
    }
    /**
     * @return {?}
     */
    get isFetchingItems() {
        return this.isFetchingItems$;
    }
    /**
     * @param {?} fetching
     * @return {?}
     */
    set isFetchingItem(fetching) {
        this.isFetchingItem$ = fetching;
    }
    /**
     * @return {?}
     */
    get isFetchingItem() {
        return this.isFetchingItem$;
    }
}
if (false) {
    /** @type {?} */
    ReadonlyRestServiceObserver.prototype.onItemFetched;
    /** @type {?} */
    ReadonlyRestServiceObserver.prototype.onItemsFetched;
    /**
     * @type {?}
     * @private
     */
    ReadonlyRestServiceObserver.prototype.isFetchingItem$;
    /**
     * @type {?}
     * @private
     */
    ReadonlyRestServiceObserver.prototype.isFetchingItems$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZG9ubHktcmVzdC1zZXJ2aWNlLW9ic2VydmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC9odHRwL3JlYWRvbmx5LXJlc3Qtc2VydmljZS1vYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7QUFHN0IsTUFBTSxPQUFPLDJCQUEyQjtJQVF0QztRQU5nQixrQkFBYSxHQUFlLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUMsbUJBQWMsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQU0zRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsSUFBSSxlQUFlLENBQUMsUUFBaUI7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsSUFBSSxjQUFjLENBQUMsUUFBaUI7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztDQUNGOzs7SUE5QkMsb0RBQTBEOztJQUMxRCxxREFBNkQ7Ozs7O0lBRTdELHNEQUFpQzs7Ozs7SUFDakMsdURBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJlYWRvbmx5UmVzdFNlcnZpY2VPYnNlcnZlcjxUPiB7XHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBvbkl0ZW1GZXRjaGVkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwdWJsaWMgcmVhZG9ubHkgb25JdGVtc0ZldGNoZWQ6IFN1YmplY3Q8VFtdPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgaXNGZXRjaGluZ0l0ZW0kOiBib29sZWFuO1xyXG4gIHByaXZhdGUgaXNGZXRjaGluZ0l0ZW1zJDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmlzRmV0Y2hpbmdJdGVtJCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0ZldGNoaW5nSXRlbXMkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNBY3RpdmF0ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5pc0ZldGNoaW5nSXRlbSAmJiAhdGhpcy5pc0ZldGNoaW5nSXRlbXM7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNGZXRjaGluZ0l0ZW1zKGZldGNoaW5nOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzRmV0Y2hpbmdJdGVtcyQgPSBmZXRjaGluZztcclxuICB9XHJcblxyXG4gIGdldCBpc0ZldGNoaW5nSXRlbXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0ZldGNoaW5nSXRlbXMkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzRmV0Y2hpbmdJdGVtKGZldGNoaW5nOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzRmV0Y2hpbmdJdGVtJCA9IGZldGNoaW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRmV0Y2hpbmdJdGVtKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNGZXRjaGluZ0l0ZW0kO1xyXG4gIH1cclxufVxyXG4iXX0=