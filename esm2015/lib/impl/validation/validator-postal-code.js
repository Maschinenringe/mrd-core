/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-postal-code.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { REGEX } from '../../enum/regex';
export class ValidatorPostalCode {
    /**
     * @param {?=} error
     */
    constructor(error) {
        this.hasError = false;
        this.error = 'Bitte geben Sie eine gültige Postleitzahl ein';
        if (error) {
            this.error = error;
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
            this.value = input.value;
            return this.validate();
        });
    }
    /**
     * @return {?}
     */
    validate() {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLXBvc3RhbC1jb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1wb3N0YWwtY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUd2QyxNQUFNLE9BQU8sbUJBQW1COzs7O0lBTTlCLFlBQ0UsS0FBYztRQUxULGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFHLCtDQUErQyxDQUFDO1FBTTdELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRU0sU0FBUztRQUNkOzs7O1FBQU8sQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBQztJQUNKLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0NBQ0Y7OztJQWhDQyx1Q0FBd0I7O0lBQ3hCLG9DQUErRDs7Ozs7SUFDL0Qsb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtJVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7UkVHRVh9IGZyb20gJy4uLy4uL2VudW0vcmVnZXgnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JQb3N0YWxDb2RlIGltcGxlbWVudHMgSVZhbGlkYXRvciB7XHJcblxyXG4gIHB1YmxpYyBoYXNFcnJvciA9IGZhbHNlO1xyXG4gIHB1YmxpYyBlcnJvciA9ICdCaXR0ZSBnZWJlbiBTaWUgZWluZSBnw7xsdGlnZSBQb3N0bGVpdHphaGwgZWluJztcclxuICBwcml2YXRlIHZhbHVlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZXJyb3I/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoaW5wdXQ6IEZvcm1Db250cm9sKSA9PiB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdGUoKTogYW55IHtcclxuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgIGlmICghdGhpcy52YWx1ZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnZhbHVlICYmIFJFR0VYLlBPU1RBTF9DT0RFLnRlc3QodGhpcy52YWx1ZS50b1N0cmluZygpKSkge1xyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XHJcbiAgICAgIHJldHVybiB7aW52YWxpZFBvc3RhbENvZGU6IHRydWV9O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=