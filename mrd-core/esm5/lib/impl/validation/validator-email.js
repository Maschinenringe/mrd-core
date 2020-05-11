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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWVtYWlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1lbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUd2QztJQU1FLHdCQUNFLEtBQWM7UUFMVCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFVBQUssR0FBRyx5Q0FBeUMsQ0FBQztRQU12RCxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUVNLGtDQUFTOzs7SUFBaEI7UUFBQSxpQkFLQztRQUpDOzs7O1FBQU8sVUFBQyxLQUFrQjtZQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsT0FBTyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7OztJQUVNLGlDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsT0FBTyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFSCxxQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7Ozs7SUFoQ0Msa0NBQXdCOztJQUN4QiwrQkFBeUQ7Ozs7O0lBQ3pELCtCQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcbmltcG9ydCB7UkVHRVh9IGZyb20gJy4uLy4uL2VudW0vcmVnZXgnO1xuXG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JFbWFpbCBpbXBsZW1lbnRzIElWYWxpZGF0b3Ige1xuXG4gIHB1YmxpYyBoYXNFcnJvciA9IGZhbHNlO1xuICBwdWJsaWMgZXJyb3IgPSAnQml0dGUgZ2ViZW4gU2llIGVpbmUgZ8O8bHRpZ2UgRS1NYWlsIGVpbic7XG4gIHByaXZhdGUgdmFsdWU6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlcnJvcj86IHN0cmluZ1xuICApIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcbiAgICByZXR1cm4gKGlucHV0OiBGb3JtQ29udHJvbCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHZhbGlkYXRlKCk6IGFueSB7XG4gICAgaWYgKCF0aGlzLnZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMudmFsdWUgJiYgUkVHRVguRU1BSUwudGVzdCh0aGlzLnZhbHVlLnRvU3RyaW5nKCkpKSB7XG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICByZXR1cm4ge2ludmFsaWRFbWFpbDogdHJ1ZX07XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==