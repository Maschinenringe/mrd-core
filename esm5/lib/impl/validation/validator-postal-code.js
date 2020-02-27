/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-postal-code.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { REGEX } from '../../enum/regex';
var ValidatorPostalCode = /** @class */ (function () {
    function ValidatorPostalCode(error) {
        this.hasError = false;
        this.error = 'Bitte geben Sie eine gültige Postleitzahl ein';
        if (error) {
            this.error = error;
        }
    }
    /**
     * @return {?}
     */
    ValidatorPostalCode.prototype.validator = /**
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
    ValidatorPostalCode.prototype.validate = /**
     * @return {?}
     */
    function () {
        this.hasError = false;
        if (!this.value) {
            return null;
        }
        if (this.value && REGEX.POSTAL_CODE.test(this.value.toString())) {
            this.hasError = false;
            return null;
        }
        else {
            this.hasError = true;
            return { invalidPostalCode: true };
        }
    };
    return ValidatorPostalCode;
}());
export { ValidatorPostalCode };
if (false) {
    /** @type {?} */
    ValidatorPostalCode.prototype.hasError;
    /** @type {?} */
    ValidatorPostalCode.prototype.error;
    /**
     * @type {?}
     * @private
     */
    ValidatorPostalCode.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLXBvc3RhbC1jb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1wb3N0YWwtY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUd2QztJQU1FLDZCQUNFLEtBQWM7UUFMVCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFVBQUssR0FBRywrQ0FBK0MsQ0FBQztRQU03RCxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUVNLHVDQUFTOzs7SUFBaEI7UUFBQSxpQkFLQztRQUpDOzs7O1FBQU8sVUFBQyxLQUFrQjtZQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsT0FBTyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7OztJQUVNLHNDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsT0FBTyxFQUFDLGlCQUFpQixFQUFFLElBQUksRUFBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQzs7OztJQWhDQyx1Q0FBd0I7O0lBQ3hCLG9DQUErRDs7Ozs7SUFDL0Qsb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtJVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7UkVHRVh9IGZyb20gJy4uLy4uL2VudW0vcmVnZXgnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JQb3N0YWxDb2RlIGltcGxlbWVudHMgSVZhbGlkYXRvciB7XHJcblxyXG4gIHB1YmxpYyBoYXNFcnJvciA9IGZhbHNlO1xyXG4gIHB1YmxpYyBlcnJvciA9ICdCaXR0ZSBnZWJlbiBTaWUgZWluZSBnw7xsdGlnZSBQb3N0bGVpdHphaGwgZWluJztcclxuICBwcml2YXRlIHZhbHVlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZXJyb3I/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoaW5wdXQ6IEZvcm1Db250cm9sKSA9PiB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdGUoKTogYW55IHtcclxuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgIGlmICghdGhpcy52YWx1ZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnZhbHVlICYmIFJFR0VYLlBPU1RBTF9DT0RFLnRlc3QodGhpcy52YWx1ZS50b1N0cmluZygpKSkge1xyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XHJcbiAgICAgIHJldHVybiB7aW52YWxpZFBvc3RhbENvZGU6IHRydWV9O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=