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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZG9ubHktcmVzdC1zZXJ2aWNlLW9ic2VydmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC9odHRwL3JlYWRvbmx5LXJlc3Qtc2VydmljZS1vYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7QUFHN0IsTUFBTSxPQUFPLDJCQUEyQjtJQVF0QztRQU5nQixrQkFBYSxHQUFlLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUMsbUJBQWMsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQU0zRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSxVQUFVO1FBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsSUFBSSxlQUFlLENBQUMsUUFBaUI7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsSUFBSSxjQUFjLENBQUMsUUFBaUI7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztDQUNGOzs7SUE5QkMsb0RBQTBEOztJQUMxRCxxREFBNkQ7Ozs7O0lBRTdELHNEQUFpQzs7Ozs7SUFDakMsdURBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBSZWFkb25seVJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VD4ge1xuXG4gIHB1YmxpYyByZWFkb25seSBvbkl0ZW1GZXRjaGVkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIHJlYWRvbmx5IG9uSXRlbXNGZXRjaGVkOiBTdWJqZWN0PFRbXT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByaXZhdGUgaXNGZXRjaGluZ0l0ZW0kOiBib29sZWFuO1xuICBwcml2YXRlIGlzRmV0Y2hpbmdJdGVtcyQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0ZldGNoaW5nSXRlbSQgPSBmYWxzZTtcbiAgICB0aGlzLmlzRmV0Y2hpbmdJdGVtcyQgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0FjdGl2YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc0ZldGNoaW5nSXRlbSAmJiAhdGhpcy5pc0ZldGNoaW5nSXRlbXM7XG4gIH1cblxuICBzZXQgaXNGZXRjaGluZ0l0ZW1zKGZldGNoaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0ZldGNoaW5nSXRlbXMkID0gZmV0Y2hpbmc7XG4gIH1cblxuICBnZXQgaXNGZXRjaGluZ0l0ZW1zKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzRmV0Y2hpbmdJdGVtcyQ7XG4gIH1cblxuICBzZXQgaXNGZXRjaGluZ0l0ZW0oZmV0Y2hpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzRmV0Y2hpbmdJdGVtJCA9IGZldGNoaW5nO1xuICB9XG5cbiAgZ2V0IGlzRmV0Y2hpbmdJdGVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzRmV0Y2hpbmdJdGVtJDtcbiAgfVxufVxuIl19