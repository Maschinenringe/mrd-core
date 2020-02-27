/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/http/rest-service-observer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadonlyRestServiceObserver } from './readonly-rest-service-observer';
import { Subject } from "rxjs";
/**
 * @template T
 */
var /**
 * @template T
 */
RestServiceObserver = /** @class */ (function (_super) {
    tslib_1.__extends(RestServiceObserver, _super);
    function RestServiceObserver() {
        var _this = _super.call(this) || this;
        _this.onItemCreated = new Subject();
        _this.onItemUpdated = new Subject();
        _this.onItemDestroyed = new Subject();
        _this.onItemPartialUpdated = new Subject();
        _this.onItemSaved = new Subject();
        _this.isCreatingItem$ = false;
        _this.isUpdatingItem$ = false;
        _this.isDestoyingItem$ = false;
        _this.isPartiallyUpdatingItem$ = false;
        return _this;
    }
    /**
     * @return {?}
     */
    RestServiceObserver.prototype.isActivate = /**
     * @return {?}
     */
    function () {
        return _super.prototype.isActivate.call(this) &&
            !this.isCreatingItem$ &&
            !this.isUpdatingItem$ &&
            !this.isDestoyingItem$ &&
            !this.isPartiallyUpdatingItem$ &&
            !this.isSavingItem$;
    };
    Object.defineProperty(RestServiceObserver.prototype, "isCreatingItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isCreatingItem$;
        },
        set: /**
         * @param {?} isCreating
         * @return {?}
         */
        function (isCreating) {
            this.isCreatingItem$ = isCreating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestServiceObserver.prototype, "isUpdatingItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isUpdatingItem$;
        },
        set: /**
         * @param {?} isUpdating
         * @return {?}
         */
        function (isUpdating) {
            this.isUpdatingItem$ = isUpdating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestServiceObserver.prototype, "isDestoyingItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isDestoyingItem$;
        },
        set: /**
         * @param {?} isDestroying
         * @return {?}
         */
        function (isDestroying) {
            this.isDestoyingItem$ = isDestroying;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestServiceObserver.prototype, "isPartiallyUpdatingItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isPartiallyUpdatingItem$;
        },
        set: /**
         * @param {?} isUpdating
         * @return {?}
         */
        function (isUpdating) {
            this.isPartiallyUpdatingItem$ = isUpdating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestServiceObserver.prototype, "isSavingItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isSavingItem$;
        },
        set: /**
         * @param {?} isSaving
         * @return {?}
         */
        function (isSaving) {
            this.isSavingItem$ = isSaving;
        },
        enumerable: true,
        configurable: true
    });
    return RestServiceObserver;
}(ReadonlyRestServiceObserver));
/**
 * @template T
 */
export { RestServiceObserver };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1zZXJ2aWNlLW9ic2VydmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC9odHRwL3Jlc3Qtc2VydmljZS1vYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7O0FBRzdCOzs7O0lBQTRDLCtDQUE4QjtJQWN4RTtRQUFBLFlBQ0UsaUJBQU8sU0FLUjtRQWxCZSxtQkFBYSxHQUFlLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUMsbUJBQWEsR0FBZSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzFDLHFCQUFlLEdBQWUsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QywwQkFBb0IsR0FBZSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pELGlCQUFXLEdBQWUsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVV0RCxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLEtBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7O0lBQ3hDLENBQUM7Ozs7SUFFTSx3Q0FBVTs7O0lBQWpCO1FBQ0UsT0FBTyxpQkFBTSxVQUFVLFdBQUU7WUFDdkIsQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUNyQixDQUFDLElBQUksQ0FBQyxlQUFlO1lBQ3JCLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtZQUN0QixDQUFDLElBQUksQ0FBQyx3QkFBd0I7WUFDOUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQkFBSSwrQ0FBYzs7OztRQUlsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDOzs7OztRQU5ELFVBQW1CLFVBQW1CO1lBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksK0NBQWM7Ozs7UUFJbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQzs7Ozs7UUFORCxVQUFtQixVQUFtQjtZQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLGdEQUFlOzs7O1FBSW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUFORCxVQUFvQixZQUFxQjtZQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksd0RBQXVCOzs7O1FBSTNCO1lBQ0UsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDdkMsQ0FBQzs7Ozs7UUFORCxVQUE0QixVQUFtQjtZQUM3QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsVUFBVSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksNkNBQVk7Ozs7UUFJaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFORCxVQUFpQixRQUFpQjtZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQU9ILDBCQUFDO0FBQUQsQ0FBQyxBQXhFRCxDQUE0QywyQkFBMkIsR0F3RXRFOzs7Ozs7O0lBdEVDLDRDQUEwRDs7SUFDMUQsNENBQTBEOztJQUMxRCw4Q0FBNEQ7O0lBQzVELG1EQUFpRTs7SUFDakUsMENBQXdEOzs7OztJQUV4RCw4Q0FBaUM7Ozs7O0lBQ2pDLDhDQUFpQzs7Ozs7SUFDakMsK0NBQWtDOzs7OztJQUNsQyx1REFBMEM7Ozs7O0lBQzFDLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyfSBmcm9tICcuL3JlYWRvbmx5LXJlc3Qtc2VydmljZS1vYnNlcnZlcic7XHJcbmltcG9ydCB7U3ViamVjdH0gZnJvbSBcInJ4anNcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUmVzdFNlcnZpY2VPYnNlcnZlcjxUPiBleHRlbmRzIFJlYWRvbmx5UmVzdFNlcnZpY2VPYnNlcnZlcjxUPiB7XHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBvbkl0ZW1DcmVhdGVkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwdWJsaWMgcmVhZG9ubHkgb25JdGVtVXBkYXRlZDogU3ViamVjdDxUPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIHJlYWRvbmx5IG9uSXRlbURlc3Ryb3llZDogU3ViamVjdDxUPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHVibGljIHJlYWRvbmx5IG9uSXRlbVBhcnRpYWxVcGRhdGVkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcclxuICBwdWJsaWMgcmVhZG9ubHkgb25JdGVtU2F2ZWQ6IFN1YmplY3Q8VD4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIGlzQ3JlYXRpbmdJdGVtJDogYm9vbGVhbjtcclxuICBwcml2YXRlIGlzVXBkYXRpbmdJdGVtJDogYm9vbGVhbjtcclxuICBwcml2YXRlIGlzRGVzdG95aW5nSXRlbSQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBpc1BhcnRpYWxseVVwZGF0aW5nSXRlbSQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBpc1NhdmluZ0l0ZW0kOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmlzQ3JlYXRpbmdJdGVtJCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1VwZGF0aW5nSXRlbSQgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNEZXN0b3lpbmdJdGVtJCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1BhcnRpYWxseVVwZGF0aW5nSXRlbSQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0FjdGl2YXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHN1cGVyLmlzQWN0aXZhdGUoKSAmJlxyXG4gICAgICAhdGhpcy5pc0NyZWF0aW5nSXRlbSQgJiZcclxuICAgICAgIXRoaXMuaXNVcGRhdGluZ0l0ZW0kICYmXHJcbiAgICAgICF0aGlzLmlzRGVzdG95aW5nSXRlbSQgJiZcclxuICAgICAgIXRoaXMuaXNQYXJ0aWFsbHlVcGRhdGluZ0l0ZW0kICYmXHJcbiAgICAgICF0aGlzLmlzU2F2aW5nSXRlbSQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNDcmVhdGluZ0l0ZW0oaXNDcmVhdGluZzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc0NyZWF0aW5nSXRlbSQgPSBpc0NyZWF0aW5nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQ3JlYXRpbmdJdGVtKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNDcmVhdGluZ0l0ZW0kO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzVXBkYXRpbmdJdGVtKGlzVXBkYXRpbmc6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNVcGRhdGluZ0l0ZW0kID0gaXNVcGRhdGluZztcclxuICB9XHJcblxyXG4gIGdldCBpc1VwZGF0aW5nSXRlbSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzVXBkYXRpbmdJdGVtJDtcclxuICB9XHJcblxyXG4gIHNldCBpc0Rlc3RveWluZ0l0ZW0oaXNEZXN0cm95aW5nOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzRGVzdG95aW5nSXRlbSQgPSBpc0Rlc3Ryb3lpbmc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNEZXN0b3lpbmdJdGVtKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNEZXN0b3lpbmdJdGVtJDtcclxuICB9XHJcblxyXG4gIHNldCBpc1BhcnRpYWxseVVwZGF0aW5nSXRlbShpc1VwZGF0aW5nOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzUGFydGlhbGx5VXBkYXRpbmdJdGVtJCA9IGlzVXBkYXRpbmc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNQYXJ0aWFsbHlVcGRhdGluZ0l0ZW0oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1BhcnRpYWxseVVwZGF0aW5nSXRlbSQ7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNTYXZpbmdJdGVtKGlzU2F2aW5nOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzU2F2aW5nSXRlbSQgPSBpc1NhdmluZztcclxuICB9XHJcblxyXG4gIGdldCBpc1NhdmluZ0l0ZW0oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1NhdmluZ0l0ZW0kO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==