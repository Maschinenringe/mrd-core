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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWZpeGVkLXZhbHVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1maXhlZC12YWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBSTlCLFlBQ1MsVUFBZSxFQUNmLFFBQWdCLElBQUk7UUFEcEIsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNmLFVBQUssR0FBTCxLQUFLLENBQWU7SUFDMUIsQ0FBQzs7OztJQUVHLFFBQVE7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUMsY0FBYyxFQUFFLElBQUksRUFBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7OztJQUVNLFNBQVM7UUFDZDs7OztRQUFPLENBQUMsS0FBa0IsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUM7SUFDSixDQUFDO0NBRUY7OztJQXhCQyx1Q0FBeUI7Ozs7O0lBQ3pCLHFDQUFvQjs7SUFFbEIseUNBQXNCOztJQUN0QixvQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JGbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yRml4ZWRWYWx1ZSBpbXBsZW1lbnRzIElWYWxpZGF0b3Ige1xyXG5cclxuICBwdWJsaWMgaGFzRXJyb3I6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSB2YWx1ZSQ6IGFueTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjb21wYXJhdG9yOiBhbnksXHJcbiAgICBwdWJsaWMgZXJyb3I6IHN0cmluZyA9IG51bGxcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBhbnkge1xyXG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuY29tcGFyYXRvciA9PT0gdGhpcy52YWx1ZSQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHt2YWxpZGF0b3JGaXhlZDogdHJ1ZX07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoaW5wdXQ6IEZvcm1Db250cm9sKSA9PiB7XHJcbiAgICAgIHRoaXMudmFsdWUkID0gaW5wdXQudmFsdWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuIl19