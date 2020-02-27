/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-email.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { REGEX } from '../../enum/regex';
var ValidatorEmail = /** @class */ (function () {
    function ValidatorEmail(error) {
        this.hasError = false;
        this.error = 'Bitte geben Sie eine gültige E-Mail ein';
        if (error) {
            this.error = error;
        }
    }
    /**
     * @return {?}
     */
    ValidatorEmail.prototype.validator = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return (/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            _this.value = input.value;
            return _this.validate();
        });
    };
    /**
     * @return {?}
     */
    ValidatorEmail.prototype.validate = /**
     * @return {?}
     */
    function () {
        if (!this.value) {
            return null;
        }
        if (this.value && REGEX.EMAIL.test(this.value.toString())) {
            this.hasError = false;
            return null;
        }
        else {
            this.hasError = true;
            return { invalidEmail: true };
        }
    };
    return ValidatorEmail;
}());
export { ValidatorEmail };
if (false) {
    /** @type {?} */
    ValidatorEmail.prototype.hasError;
    /** @type {?} */
    ValidatorEmail.prototype.error;
    /**
     * @type {?}
     * @private
     */
    ValidatorEmail.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWVtYWlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1lbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUd2QztJQU1FLHdCQUNFLEtBQWM7UUFMVCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFVBQUssR0FBRyx5Q0FBeUMsQ0FBQztRQU12RCxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUVNLGtDQUFTOzs7SUFBaEI7UUFBQSxpQkFLQztRQUpDOzs7O1FBQU8sVUFBQyxLQUFrQjtZQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsT0FBTyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7OztJQUVNLGlDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsT0FBTyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFSCxxQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7Ozs7SUFoQ0Msa0NBQXdCOztJQUN4QiwrQkFBeUQ7Ozs7O0lBQ3pELCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7SVZhbGlkYXRvcn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS12YWxpZGF0b3InO1xyXG5pbXBvcnQge1JFR0VYfSBmcm9tICcuLi8uLi9lbnVtL3JlZ2V4JztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yRW1haWwgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcclxuXHJcbiAgcHVibGljIGhhc0Vycm9yID0gZmFsc2U7XHJcbiAgcHVibGljIGVycm9yID0gJ0JpdHRlIGdlYmVuIFNpZSBlaW5lIGfDvGx0aWdlIEUtTWFpbCBlaW4nO1xyXG4gIHByaXZhdGUgdmFsdWU6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlcnJvcj86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChpbnB1dDogRm9ybUNvbnRyb2wpID0+IHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBhbnkge1xyXG4gICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudmFsdWUgJiYgUkVHRVguRU1BSUwudGVzdCh0aGlzLnZhbHVlLnRvU3RyaW5nKCkpKSB7XHJcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHtpbnZhbGlkRW1haWw6IHRydWV9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19