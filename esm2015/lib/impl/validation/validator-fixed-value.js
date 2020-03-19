/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-fixed-value.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ValidatorFixedValue {
    /**
     * @param {?} comparator
     * @param {?=} error
     */
    constructor(comparator, error = null) {
        this.comparator = comparator;
        this.error = error;
    }
    /**
     * @return {?}
     */
    validate() {
        this.hasError = false;
        if (this.comparator === this.value$) {
            return null;
        }
        else {
            this.hasError = true;
            return { validatorFixed: true };
        }
    }
    /**
     * @return {?}
     */
    validator() {
        return (/**
         * @param {?} input
         * @return {?}
         */
        (input) => {
            this.value$ = input.value;
            return this.validate();
        });
    }
}
if (false) {
    /** @type {?} */
    ValidatorFixedValue.prototype.hasError;
    /**
     * @type {?}
     * @private
     */
    ValidatorFixedValue.prototype.value$;
    /** @type {?} */
    ValidatorFixedValue.prototype.comparator;
    /** @type {?} */
    ValidatorFixedValue.prototype.error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWZpeGVkLXZhbHVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1maXhlZC12YWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBSTlCLFlBQ1MsVUFBZSxFQUNmLFFBQWdCLElBQUk7UUFEcEIsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNmLFVBQUssR0FBTCxLQUFLLENBQWU7SUFDMUIsQ0FBQzs7OztJQUVHLFFBQVE7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUMsY0FBYyxFQUFFLElBQUksRUFBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7OztJQUVNLFNBQVM7UUFDZDs7OztRQUFPLENBQUMsS0FBa0IsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUM7SUFDSixDQUFDO0NBRUY7OztJQXhCQyx1Q0FBeUI7Ozs7O0lBQ3pCLHFDQUFvQjs7SUFFbEIseUNBQXNCOztJQUN0QixvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JGbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtJVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLXZhbGlkYXRvcic7XG5cblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvckZpeGVkVmFsdWUgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcblxuICBwdWJsaWMgaGFzRXJyb3I6IGJvb2xlYW47XG4gIHByaXZhdGUgdmFsdWUkOiBhbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb21wYXJhdG9yOiBhbnksXG4gICAgcHVibGljIGVycm9yOiBzdHJpbmcgPSBudWxsXG4gICkge31cblxuICBwdWJsaWMgdmFsaWRhdGUoKTogYW55IHtcbiAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuY29tcGFyYXRvciA9PT0gdGhpcy52YWx1ZSQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgIHJldHVybiB7dmFsaWRhdG9yRml4ZWQ6IHRydWV9O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xuICAgIHJldHVybiAoaW5wdXQ6IEZvcm1Db250cm9sKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlJCA9IGlucHV0LnZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==