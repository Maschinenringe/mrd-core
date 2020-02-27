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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWZpeGVkLXZhbHVlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1maXhlZC12YWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBO0lBSUUsNkJBQ1MsVUFBZSxFQUNmLEtBQW9CO1FBQXBCLHNCQUFBLEVBQUEsWUFBb0I7UUFEcEIsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNmLFVBQUssR0FBTCxLQUFLLENBQWU7SUFDMUIsQ0FBQzs7OztJQUVHLHNDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sRUFBQyxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7O0lBRU0sdUNBQVM7OztJQUFoQjtRQUFBLGlCQUtDO1FBSkM7Ozs7UUFBTyxVQUFDLEtBQWtCO1lBQ3hCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMxQixPQUFPLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUM7SUFDSixDQUFDO0lBRUgsMEJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDOzs7O0lBeEJDLHVDQUF5Qjs7Ozs7SUFDekIscUNBQW9COztJQUVsQix5Q0FBc0I7O0lBQ3RCLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7SVZhbGlkYXRvcn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS12YWxpZGF0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JGaXhlZFZhbHVlIGltcGxlbWVudHMgSVZhbGlkYXRvciB7XHJcblxyXG4gIHB1YmxpYyBoYXNFcnJvcjogYm9vbGVhbjtcclxuICBwcml2YXRlIHZhbHVlJDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNvbXBhcmF0b3I6IGFueSxcclxuICAgIHB1YmxpYyBlcnJvcjogc3RyaW5nID0gbnVsbFxyXG4gICkge31cclxuXHJcbiAgcHVibGljIHZhbGlkYXRlKCk6IGFueSB7XHJcbiAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5jb21wYXJhdG9yID09PSB0aGlzLnZhbHVlJCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICByZXR1cm4ge3ZhbGlkYXRvckZpeGVkOiB0cnVlfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChpbnB1dDogRm9ybUNvbnRyb2wpID0+IHtcclxuICAgICAgdGhpcy52YWx1ZSQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=