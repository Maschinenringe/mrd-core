/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-integer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { REGEX } from '../../enum/regex';
var ValidatorInteger = /** @class */ (function () {
    function ValidatorInteger(allowNegativeValues$) {
        if (allowNegativeValues$ === void 0) { allowNegativeValues$ = false; }
        this.allowNegativeValues$ = allowNegativeValues$;
        this.error = 'Bitte geben Sie eine ganze Zahl ein';
        if (allowNegativeValues$) {
            this.regex$ = REGEX.SIGNED_INTEGER;
        }
        else {
            this.regex$ = REGEX.INTEGER;
        }
    }
    /**
     * @return {?}
     */
    ValidatorInteger.prototype.validate = /**
     * @return {?}
     */
    function () {
        this.hasError = false;
        if (!this.value$) {
            return null;
        }
        if (!this.regex$.test(this.value$)) {
            this.hasError = true;
            return { invalidInteger: true };
        }
        return null;
    };
    /**
     * @return {?}
     */
    ValidatorInteger.prototype.validator = /**
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
    return ValidatorInteger;
}());
export { ValidatorInteger };
if (false) {
    /** @type {?} */
    ValidatorInteger.prototype.error;
    /** @type {?} */
    ValidatorInteger.prototype.hasError;
    /**
     * @type {?}
     * @private
     */
    ValidatorInteger.prototype.value$;
    /**
     * @type {?}
     * @private
     */
    ValidatorInteger.prototype.regex$;
    /**
     * @type {?}
     * @private
     */
    ValidatorInteger.prototype.allowNegativeValues$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWludGVnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLWludGVnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFJdkM7SUFTRSwwQkFDVSxvQkFBcUM7UUFBckMscUNBQUEsRUFBQSw0QkFBcUM7UUFBckMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFpQjtRQVJ4QyxVQUFLLEdBQUcscUNBQXFDLENBQUM7UUFVbkQsSUFBSSxvQkFBb0IsRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7U0FDcEM7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7SUFFTSxtQ0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUMsY0FBYyxFQUFFLElBQUksRUFBQyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRU0sb0NBQVM7OztJQUFoQjtRQUFBLGlCQUtDO1FBSkM7Ozs7UUFBTyxVQUFDLEtBQWtCO1lBQ3hCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMxQixPQUFPLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUM7SUFDSixDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDOzs7O0lBcENDLGlDQUFxRDs7SUFDckQsb0NBQXlCOzs7OztJQUV6QixrQ0FBdUI7Ozs7O0lBQ3ZCLGtDQUF1Qjs7Ozs7SUFJckIsZ0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7UkVHRVh9IGZyb20gJy4uLy4uL2VudW0vcmVnZXgnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLCBWYWxpZGF0b3JGbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JJbnRlZ2VyIGltcGxlbWVudHMgSVZhbGlkYXRvciB7XHJcblxyXG4gIHB1YmxpYyBlcnJvciA9ICdCaXR0ZSBnZWJlbiBTaWUgZWluZSBnYW56ZSBaYWhsIGVpbic7XHJcbiAgcHVibGljIGhhc0Vycm9yOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIHZhbHVlJDogc3RyaW5nO1xyXG4gIHByaXZhdGUgcmVnZXgkOiBSZWdFeHA7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgYWxsb3dOZWdhdGl2ZVZhbHVlcyQ6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICkge1xyXG4gICAgaWYgKGFsbG93TmVnYXRpdmVWYWx1ZXMkKSB7XHJcbiAgICAgIHRoaXMucmVnZXgkID0gUkVHRVguU0lHTkVEX0lOVEVHRVI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlZ2V4JCA9IFJFR0VYLklOVEVHRVI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdGUoKTogYW55IHtcclxuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgIGlmICghdGhpcy52YWx1ZSQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMucmVnZXgkLnRlc3QodGhpcy52YWx1ZSQpKSB7XHJcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICByZXR1cm4ge2ludmFsaWRJbnRlZ2VyOiB0cnVlfTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGlucHV0OiBGb3JtQ29udHJvbCkgPT4ge1xyXG4gICAgICB0aGlzLnZhbHVlJCA9IGlucHV0LnZhbHVlO1xyXG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==