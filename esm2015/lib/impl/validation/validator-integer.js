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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWludGVnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLWludGVnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFJdkMsTUFBTSxPQUFPLGdCQUFnQjs7OztJQVMzQixZQUNVLHVCQUFnQyxLQUFLO1FBQXJDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBaUI7UUFSeEMsVUFBSyxHQUFHLHFDQUFxQyxDQUFDO1FBVW5ELElBQUksb0JBQW9CLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7O0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sRUFBQyxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUM7U0FDL0I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFTSxTQUFTO1FBQ2Q7Ozs7UUFBTyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFDO0lBQ0osQ0FBQztDQUVGOzs7SUFwQ0MsaUNBQXFEOztJQUNyRCxvQ0FBeUI7Ozs7O0lBRXpCLGtDQUF1Qjs7Ozs7SUFDdkIsa0NBQXVCOzs7OztJQUlyQixnREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcclxuaW1wb3J0IHtSRUdFWH0gZnJvbSAnLi4vLi4vZW51bS9yZWdleCc7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvckludGVnZXIgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcclxuXHJcbiAgcHVibGljIGVycm9yID0gJ0JpdHRlIGdlYmVuIFNpZSBlaW5lIGdhbnplIFphaGwgZWluJztcclxuICBwdWJsaWMgaGFzRXJyb3I6IGJvb2xlYW47XHJcblxyXG4gIHByaXZhdGUgdmFsdWUkOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSByZWdleCQ6IFJlZ0V4cDtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhbGxvd05lZ2F0aXZlVmFsdWVzJDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgKSB7XHJcbiAgICBpZiAoYWxsb3dOZWdhdGl2ZVZhbHVlcyQpIHtcclxuICAgICAgdGhpcy5yZWdleCQgPSBSRUdFWC5TSUdORURfSU5URUdFUjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVnZXgkID0gUkVHRVguSU5URUdFUjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBhbnkge1xyXG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgaWYgKCF0aGlzLnZhbHVlJCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5yZWdleCQudGVzdCh0aGlzLnZhbHVlJCkpIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XHJcbiAgICAgIHJldHVybiB7aW52YWxpZEludGVnZXI6IHRydWV9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoaW5wdXQ6IEZvcm1Db250cm9sKSA9PiB7XHJcbiAgICAgIHRoaXMudmFsdWUkID0gaW5wdXQudmFsdWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuIl19