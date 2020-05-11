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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1zZXJ2aWNlLW9ic2VydmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC9odHRwL3Jlc3Qtc2VydmljZS1vYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7O0FBRzdCOzs7O0lBQTRDLCtDQUE4QjtJQWN4RTtRQUFBLFlBQ0UsaUJBQU8sU0FLUjtRQWxCZSxtQkFBYSxHQUFlLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUMsbUJBQWEsR0FBZSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzFDLHFCQUFlLEdBQWUsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QywwQkFBb0IsR0FBZSxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pELGlCQUFXLEdBQWUsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQVV0RCxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLEtBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7O0lBQ3hDLENBQUM7Ozs7SUFFTSx3Q0FBVTs7O0lBQWpCO1FBQ0UsT0FBTyxpQkFBTSxVQUFVLFdBQUU7WUFDdkIsQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUNyQixDQUFDLElBQUksQ0FBQyxlQUFlO1lBQ3JCLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtZQUN0QixDQUFDLElBQUksQ0FBQyx3QkFBd0I7WUFDOUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQkFBSSwrQ0FBYzs7OztRQUlsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDOzs7OztRQU5ELFVBQW1CLFVBQW1CO1lBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksK0NBQWM7Ozs7UUFJbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQzs7Ozs7UUFORCxVQUFtQixVQUFtQjtZQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLGdEQUFlOzs7O1FBSW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzs7Ozs7UUFORCxVQUFvQixZQUFxQjtZQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksd0RBQXVCOzs7O1FBSTNCO1lBQ0UsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDdkMsQ0FBQzs7Ozs7UUFORCxVQUE0QixVQUFtQjtZQUM3QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsVUFBVSxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBTUQsc0JBQUksNkNBQVk7Ozs7UUFJaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7Ozs7UUFORCxVQUFpQixRQUFpQjtZQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQU9ILDBCQUFDO0FBQUQsQ0FBQyxBQXhFRCxDQUE0QywyQkFBMkIsR0F3RXRFOzs7Ozs7O0lBdEVDLDRDQUEwRDs7SUFDMUQsNENBQTBEOztJQUMxRCw4Q0FBNEQ7O0lBQzVELG1EQUFpRTs7SUFDakUsMENBQXdEOzs7OztJQUV4RCw4Q0FBaUM7Ozs7O0lBQ2pDLDhDQUFpQzs7Ozs7SUFDakMsK0NBQWtDOzs7OztJQUNsQyx1REFBMEM7Ozs7O0lBQzFDLDRDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyfSBmcm9tICcuL3JlYWRvbmx5LXJlc3Qtc2VydmljZS1vYnNlcnZlcic7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5cblxuZXhwb3J0IGNsYXNzIFJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VD4gZXh0ZW5kcyBSZWFkb25seVJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VD4ge1xuXG4gIHB1YmxpYyByZWFkb25seSBvbkl0ZW1DcmVhdGVkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIHJlYWRvbmx5IG9uSXRlbVVwZGF0ZWQ6IFN1YmplY3Q8VD4gPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgcmVhZG9ubHkgb25JdGVtRGVzdHJveWVkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIHJlYWRvbmx5IG9uSXRlbVBhcnRpYWxVcGRhdGVkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHVibGljIHJlYWRvbmx5IG9uSXRlbVNhdmVkOiBTdWJqZWN0PFQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBwcml2YXRlIGlzQ3JlYXRpbmdJdGVtJDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpc1VwZGF0aW5nSXRlbSQ6IGJvb2xlYW47XG4gIHByaXZhdGUgaXNEZXN0b3lpbmdJdGVtJDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpc1BhcnRpYWxseVVwZGF0aW5nSXRlbSQ6IGJvb2xlYW47XG4gIHByaXZhdGUgaXNTYXZpbmdJdGVtJDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaXNDcmVhdGluZ0l0ZW0kID0gZmFsc2U7XG4gICAgdGhpcy5pc1VwZGF0aW5nSXRlbSQgPSBmYWxzZTtcbiAgICB0aGlzLmlzRGVzdG95aW5nSXRlbSQgPSBmYWxzZTtcbiAgICB0aGlzLmlzUGFydGlhbGx5VXBkYXRpbmdJdGVtJCA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGlzQWN0aXZhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHN1cGVyLmlzQWN0aXZhdGUoKSAmJlxuICAgICAgIXRoaXMuaXNDcmVhdGluZ0l0ZW0kICYmXG4gICAgICAhdGhpcy5pc1VwZGF0aW5nSXRlbSQgJiZcbiAgICAgICF0aGlzLmlzRGVzdG95aW5nSXRlbSQgJiZcbiAgICAgICF0aGlzLmlzUGFydGlhbGx5VXBkYXRpbmdJdGVtJCAmJlxuICAgICAgIXRoaXMuaXNTYXZpbmdJdGVtJDtcbiAgfVxuXG4gIHNldCBpc0NyZWF0aW5nSXRlbShpc0NyZWF0aW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0NyZWF0aW5nSXRlbSQgPSBpc0NyZWF0aW5nO1xuICB9XG5cbiAgZ2V0IGlzQ3JlYXRpbmdJdGVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzQ3JlYXRpbmdJdGVtJDtcbiAgfVxuXG4gIHNldCBpc1VwZGF0aW5nSXRlbShpc1VwZGF0aW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc1VwZGF0aW5nSXRlbSQgPSBpc1VwZGF0aW5nO1xuICB9XG5cbiAgZ2V0IGlzVXBkYXRpbmdJdGVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzVXBkYXRpbmdJdGVtJDtcbiAgfVxuXG4gIHNldCBpc0Rlc3RveWluZ0l0ZW0oaXNEZXN0cm95aW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0Rlc3RveWluZ0l0ZW0kID0gaXNEZXN0cm95aW5nO1xuICB9XG5cbiAgZ2V0IGlzRGVzdG95aW5nSXRlbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0Rlc3RveWluZ0l0ZW0kO1xuICB9XG5cbiAgc2V0IGlzUGFydGlhbGx5VXBkYXRpbmdJdGVtKGlzVXBkYXRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzUGFydGlhbGx5VXBkYXRpbmdJdGVtJCA9IGlzVXBkYXRpbmc7XG4gIH1cblxuICBnZXQgaXNQYXJ0aWFsbHlVcGRhdGluZ0l0ZW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNQYXJ0aWFsbHlVcGRhdGluZ0l0ZW0kO1xuICB9XG5cbiAgc2V0IGlzU2F2aW5nSXRlbShpc1NhdmluZzogYm9vbGVhbikge1xuICAgIHRoaXMuaXNTYXZpbmdJdGVtJCA9IGlzU2F2aW5nO1xuICB9XG5cbiAgZ2V0IGlzU2F2aW5nSXRlbSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1NhdmluZ0l0ZW0kO1xuICB9XG5cblxufVxuIl19