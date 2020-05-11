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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLXBvc3RhbC1jb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1wb3N0YWwtY29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUd2QyxNQUFNLE9BQU8sbUJBQW1COzs7O0lBTTlCLFlBQ0UsS0FBYztRQUxULGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFHLCtDQUErQyxDQUFDO1FBTTdELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRU0sU0FBUztRQUNkOzs7O1FBQU8sQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBQztJQUNKLENBQUM7Ozs7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0NBQ0Y7OztJQWhDQyx1Q0FBd0I7O0lBQ3hCLG9DQUErRDs7Ozs7SUFDL0Qsb0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7SVZhbGlkYXRvcn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS12YWxpZGF0b3InO1xuaW1wb3J0IHtSRUdFWH0gZnJvbSAnLi4vLi4vZW51bS9yZWdleCc7XG5cblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclBvc3RhbENvZGUgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcblxuICBwdWJsaWMgaGFzRXJyb3IgPSBmYWxzZTtcbiAgcHVibGljIGVycm9yID0gJ0JpdHRlIGdlYmVuIFNpZSBlaW5lIGfDvGx0aWdlIFBvc3RsZWl0emFobCBlaW4nO1xuICBwcml2YXRlIHZhbHVlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZXJyb3I/OiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChpbnB1dDogRm9ybUNvbnRyb2wpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBhbnkge1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy52YWx1ZSAmJiBSRUdFWC5QT1NUQUxfQ09ERS50ZXN0KHRoaXMudmFsdWUudG9TdHJpbmcoKSkpIHtcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgIHJldHVybiB7aW52YWxpZFBvc3RhbENvZGU6IHRydWV9O1xuICAgIH1cbiAgfVxufVxuIl19