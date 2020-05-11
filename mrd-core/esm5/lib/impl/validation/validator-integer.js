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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWludGVnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLWludGVnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFJdkM7SUFTRSwwQkFDVSxvQkFBcUM7UUFBckMscUNBQUEsRUFBQSw0QkFBcUM7UUFBckMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFpQjtRQVJ4QyxVQUFLLEdBQUcscUNBQXFDLENBQUM7UUFVbkQsSUFBSSxvQkFBb0IsRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7U0FDcEM7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7SUFFTSxtQ0FBUTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUMsY0FBYyxFQUFFLElBQUksRUFBQyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRU0sb0NBQVM7OztJQUFoQjtRQUFBLGlCQUtDO1FBSkM7Ozs7UUFBTyxVQUFDLEtBQWtCO1lBQ3hCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMxQixPQUFPLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUM7SUFDSixDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDOzs7O0lBcENDLGlDQUFxRDs7SUFDckQsb0NBQXlCOzs7OztJQUV6QixrQ0FBdUI7Ozs7O0lBQ3ZCLGtDQUF1Qjs7Ozs7SUFJckIsZ0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLXZhbGlkYXRvcic7XG5pbXBvcnQge1JFR0VYfSBmcm9tICcuLi8uLi9lbnVtL3JlZ2V4JztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvckludGVnZXIgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcblxuICBwdWJsaWMgZXJyb3IgPSAnQml0dGUgZ2ViZW4gU2llIGVpbmUgZ2FuemUgWmFobCBlaW4nO1xuICBwdWJsaWMgaGFzRXJyb3I6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSB2YWx1ZSQ6IHN0cmluZztcbiAgcHJpdmF0ZSByZWdleCQ6IFJlZ0V4cDtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWxsb3dOZWdhdGl2ZVZhbHVlcyQ6IGJvb2xlYW4gPSBmYWxzZVxuICApIHtcbiAgICBpZiAoYWxsb3dOZWdhdGl2ZVZhbHVlcyQpIHtcbiAgICAgIHRoaXMucmVnZXgkID0gUkVHRVguU0lHTkVEX0lOVEVHRVI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVnZXgkID0gUkVHRVguSU5URUdFUjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGUoKTogYW55IHtcbiAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgaWYgKCF0aGlzLnZhbHVlJCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICghdGhpcy5yZWdleCQudGVzdCh0aGlzLnZhbHVlJCkpIHtcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgcmV0dXJuIHtpbnZhbGlkSW50ZWdlcjogdHJ1ZX07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHVibGljIHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChpbnB1dDogRm9ybUNvbnRyb2wpID0+IHtcbiAgICAgIHRoaXMudmFsdWUkID0gaW5wdXQudmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZSgpO1xuICAgIH07XG4gIH1cblxufVxuIl19