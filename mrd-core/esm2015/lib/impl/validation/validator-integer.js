/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-integer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { REGEX } from '../../enum/regex';
export class ValidatorInteger {
    /**
     * @param {?=} allowNegativeValues$
     */
    constructor(allowNegativeValues$ = false) {
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
    validate() {
        this.hasError = false;
        if (!this.value$) {
            return null;
        }
        if (!this.regex$.test(this.value$)) {
            this.hasError = true;
            return { invalidInteger: true };
        }
        return null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWludGVnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLWludGVnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFJdkMsTUFBTSxPQUFPLGdCQUFnQjs7OztJQVMzQixZQUNVLHVCQUFnQyxLQUFLO1FBQXJDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBaUI7UUFSeEMsVUFBSyxHQUFHLHFDQUFxQyxDQUFDO1FBVW5ELElBQUksb0JBQW9CLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7O0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sRUFBQyxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUM7U0FDL0I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFTSxTQUFTO1FBQ2Q7Ozs7UUFBTyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFDO0lBQ0osQ0FBQztDQUVGOzs7SUFwQ0MsaUNBQXFEOztJQUNyRCxvQ0FBeUI7Ozs7O0lBRXpCLGtDQUF1Qjs7Ozs7SUFDdkIsa0NBQXVCOzs7OztJQUlyQixnREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcbmltcG9ydCB7UkVHRVh9IGZyb20gJy4uLy4uL2VudW0vcmVnZXgnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9ySW50ZWdlciBpbXBsZW1lbnRzIElWYWxpZGF0b3Ige1xuXG4gIHB1YmxpYyBlcnJvciA9ICdCaXR0ZSBnZWJlbiBTaWUgZWluZSBnYW56ZSBaYWhsIGVpbic7XG4gIHB1YmxpYyBoYXNFcnJvcjogYm9vbGVhbjtcblxuICBwcml2YXRlIHZhbHVlJDogc3RyaW5nO1xuICBwcml2YXRlIHJlZ2V4JDogUmVnRXhwO1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhbGxvd05lZ2F0aXZlVmFsdWVzJDogYm9vbGVhbiA9IGZhbHNlXG4gICkge1xuICAgIGlmIChhbGxvd05lZ2F0aXZlVmFsdWVzJCkge1xuICAgICAgdGhpcy5yZWdleCQgPSBSRUdFWC5TSUdORURfSU5URUdFUjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWdleCQgPSBSRUdFWC5JTlRFR0VSO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBhbnkge1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMudmFsdWUkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnJlZ2V4JC50ZXN0KHRoaXMudmFsdWUkKSkge1xuICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICByZXR1cm4ge2ludmFsaWRJbnRlZ2VyOiB0cnVlfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcbiAgICByZXR1cm4gKGlucHV0OiBGb3JtQ29udHJvbCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSQgPSBpbnB1dC52YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfTtcbiAgfVxuXG59XG4iXX0=