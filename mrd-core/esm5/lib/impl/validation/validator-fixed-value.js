/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-fixed-value.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ValidatorFixedValue = /** @class */ (function () {
    function ValidatorFixedValue(comparator, error) {
        if (error === void 0) { error = null; }
        this.comparator = comparator;
        this.error = error;
    }
    /**
     * @return {?}
     */
    ValidatorFixedValue.prototype.validate = /**
     * @return {?}
     */
    function () {
        this.hasError = false;
        if (this.comparator === this.value$) {
            return null;
        }
        else {
            this.hasError = true;
            return { validatorFixed: true };
        }
    };
    /**
     * @return {?}
     */
    ValidatorFixedValue.prototype.validator = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return (/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            _this.value$ = input.value;
            return _this.validate();
        });
    };
    return ValidatorFixedValue;
}());
export { ValidatorFixedValue };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWZpeGVkLXZhbHVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1maXhlZC12YWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBO0lBSUUsNkJBQ1MsVUFBZSxFQUNmLEtBQW9CO1FBQXBCLHNCQUFBLEVBQUEsWUFBb0I7UUFEcEIsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNmLFVBQUssR0FBTCxLQUFLLENBQWU7SUFDMUIsQ0FBQzs7OztJQUVHLHNDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sRUFBQyxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7O0lBRU0sdUNBQVM7OztJQUFoQjtRQUFBLGlCQUtDO1FBSkM7Ozs7UUFBTyxVQUFDLEtBQWtCO1lBQ3hCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMxQixPQUFPLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUM7SUFDSixDQUFDO0lBRUgsMEJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDOzs7O0lBeEJDLHVDQUF5Qjs7Ozs7SUFDekIscUNBQW9COztJQUVsQix5Q0FBc0I7O0lBQ3RCLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcblxuXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yRml4ZWRWYWx1ZSBpbXBsZW1lbnRzIElWYWxpZGF0b3Ige1xuXG4gIHB1YmxpYyBoYXNFcnJvcjogYm9vbGVhbjtcbiAgcHJpdmF0ZSB2YWx1ZSQ6IGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbXBhcmF0b3I6IGFueSxcbiAgICBwdWJsaWMgZXJyb3I6IHN0cmluZyA9IG51bGxcbiAgKSB7fVxuXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBhbnkge1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5jb21wYXJhdG9yID09PSB0aGlzLnZhbHVlJCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgcmV0dXJuIHt2YWxpZGF0b3JGaXhlZDogdHJ1ZX07XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChpbnB1dDogRm9ybUNvbnRyb2wpID0+IHtcbiAgICAgIHRoaXMudmFsdWUkID0gaW5wdXQudmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZSgpO1xuICAgIH07XG4gIH1cblxufVxuIl19