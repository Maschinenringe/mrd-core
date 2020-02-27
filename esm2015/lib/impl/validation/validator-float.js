/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-float.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { REGEX } from '../../enum/regex';
import { Util } from '../util/util';
export class ValidatorFloat {
    /**
     * @param {?=} digitsBefore
     * @param {?=} digitsAfter
     */
    constructor(digitsBefore, digitsAfter) {
        this.digitsBefore = digitsBefore;
        this.digitsAfter = digitsAfter;
        this.hasError = false;
        this.error = 'Bitte geben Sie eine valide Zahl ein';
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
        this.error = 'Bitte geben Sie eine valide Zahl ein';
        /** @type {?} */
        let validAmountDisgitsBefore = false;
        /** @type {?} */
        let validAmountDisgitsAfter = false;
        if (!this.value) {
            return null;
        }
        if (this.value && REGEX.INPUT_NUMBER.test(this.value.toString())) {
            /** @type {?} */
            const numberSplitted = this.value.toString().split(',');
            if (Util.isDefined(this.digitsBefore) && this.digitsAfter === 0 && numberSplitted.length === 2) {
                this.hasError = true;
                this.error = 'Es sind keine Nachkommastellen erlaubt';
                return { invalidFloat: true };
            }
            if (numberSplitted.length !== 2) {
                if (Util.isDefined(this.digitsBefore)) {
                    if (this.value.length > this.digitsBefore) {
                        this.error = `Bitte runden Sie die Zahl auf ${this.digitsBefore === 1 ? 'eine Stelle' : this.digitsBefore.toString() + ' Stellen'} vor dem Komma`;
                        this.hasError = true;
                        return { invalidFloat: true };
                    }
                }
                this.hasError = false;
                return null;
            }
            if (Util.isDefined(this.digitsBefore) && this.digitsBefore > 0) {
                validAmountDisgitsBefore = numberSplitted[0].length <= this.digitsBefore;
                if (!validAmountDisgitsBefore) {
                    this.error = `Bitte runden Sie die Zahl auf ${this.digitsBefore === 1 ? 'eine Stelle' : this.digitsBefore.toString() + ' Stellen'} vor dem Komma`;
                }
            }
            else {
                validAmountDisgitsBefore = true;
            }
            if (Util.isDefined(this.digitsAfter) && this.digitsAfter > 0) {
                validAmountDisgitsAfter = numberSplitted[1].length <= this.digitsAfter;
                if (!validAmountDisgitsAfter) {
                    this.error = `Bitte runden Sie die Zahl auf ${this.digitsAfter === 1 ? ' eine Stelle' : this.digitsAfter.toString() + ' Stellen'} nach dem Komma`;
                }
            }
            else {
                validAmountDisgitsAfter = true;
            }
            this.hasError = !(validAmountDisgitsBefore && validAmountDisgitsAfter);
            if (this.hasError) {
                return { invalidFloat: true };
            }
            return null;
        }
        else {
            this.hasError = true;
            return { invalidFloat: true };
        }
    }
}
if (false) {
    /** @type {?} */
    ValidatorFloat.prototype.hasError;
    /** @type {?} */
    ValidatorFloat.prototype.error;
    /**
     * @type {?}
     * @private
     */
    ValidatorFloat.prototype.value;
    /**
     * @type {?}
     * @private
     */
    ValidatorFloat.prototype.digitsBefore;
    /**
     * @type {?}
     * @private
     */
    ValidatorFloat.prototype.digitsAfter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWZsb2F0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1mbG9hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN2QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBR2xDLE1BQU0sT0FBTyxjQUFjOzs7OztJQU16QixZQUNVLFlBQXFCLEVBQ3JCLFdBQW9CO1FBRHBCLGlCQUFZLEdBQVosWUFBWSxDQUFTO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBTnZCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFHLHNDQUFzQyxDQUFDO0lBTW5ELENBQUM7Ozs7SUFFRyxTQUFTO1FBQ2Q7Ozs7UUFBTyxDQUFDLEtBQWtCLEVBQWlCLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBQztJQUNKLENBQUM7Ozs7SUFHTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxzQ0FBc0MsQ0FBQzs7WUFDaEQsd0JBQXdCLEdBQUcsS0FBSzs7WUFDaEMsdUJBQXVCLEdBQUcsS0FBSztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFOztrQkFDMUQsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFB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c0Q7Ozs7O0lBQ3RELCtCQUFtQjs7Ozs7SUFHakIsc0NBQTZCOzs7OztJQUM3QixxQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcclxuaW1wb3J0IHtGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtSRUdFWH0gZnJvbSAnLi4vLi4vZW51bS9yZWdleCc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vdXRpbC91dGlsJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yRmxvYXQgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcclxuXHJcbiAgcHVibGljIGhhc0Vycm9yID0gZmFsc2U7XHJcbiAgcHVibGljIGVycm9yID0gJ0JpdHRlIGdlYmVuIFNpZSBlaW5lIHZhbGlkZSBaYWhsIGVpbic7XHJcbiAgcHJpdmF0ZSB2YWx1ZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZGlnaXRzQmVmb3JlPzogbnVtYmVyLFxyXG4gICAgcHJpdmF0ZSBkaWdpdHNBZnRlcj86IG51bWJlclxyXG4gICkge31cclxuXHJcbiAgcHVibGljIHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGlucHV0OiBGb3JtQ29udHJvbCk6IG9iamVjdCB8IG51bGwgPT4ge1xyXG4gICAgICB0aGlzLnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBhbnkge1xyXG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgdGhpcy5lcnJvciA9ICdCaXR0ZSBnZWJlbiBTaWUgZWluZSB2YWxpZGUgWmFobCBlaW4nO1xyXG4gICAgbGV0IHZhbGlkQW1vdW50RGlzZ2l0c0JlZm9yZSA9IGZhbHNlO1xyXG4gICAgbGV0IHZhbGlkQW1vdW50RGlzZ2l0c0FmdGVyID0gZmFsc2U7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy52YWx1ZSAmJiBSRUdFWC5JTlBVVF9OVU1CRVIudGVzdCh0aGlzLnZhbHVlLnRvU3RyaW5nKCkpKSB7XHJcbiAgICAgIGNvbnN0IG51bWJlclNwbGl0dGVkID0gdGhpcy52YWx1ZS50b1N0cmluZygpLnNwbGl0KCcsJyk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmRpZ2l0c0JlZm9yZSkgJiYgdGhpcy5kaWdpdHNBZnRlciA9PT0gMCAmJiBudW1iZXJTcGxpdHRlZC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVycm9yID0gJ0VzIHNpbmQga2VpbmUgTmFjaGtvbW1hc3RlbGxlbiBlcmxhdWJ0JztcclxuICAgICAgICByZXR1cm4ge2ludmFsaWRGbG9hdDogdHJ1ZX07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bWJlclNwbGl0dGVkLmxlbmd0aCAhPT0gMikge1xyXG4gICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmRpZ2l0c0JlZm9yZSkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA+IHRoaXMuZGlnaXRzQmVmb3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBgQml0dGUgcnVuZGVuIFNpZSBkaWUgWmFobCBhdWYgJHt0aGlzLmRpZ2l0c0JlZm9yZSA9PT0gMSA/ICdlaW5lIFN0ZWxsZScgOiB0aGlzLmRpZ2l0c0JlZm9yZS50b1N0cmluZygpICsgJyBTdGVsbGVuJ30gdm9yIGRlbSBLb21tYWA7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4ge2ludmFsaWRGbG9hdDogdHJ1ZX07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5kaWdpdHNCZWZvcmUpICYmIHRoaXMuZGlnaXRzQmVmb3JlID4gMCkge1xyXG4gICAgICAgIHZhbGlkQW1vdW50RGlzZ2l0c0JlZm9yZSA9IG51bWJlclNwbGl0dGVkWzBdLmxlbmd0aCA8PSB0aGlzLmRpZ2l0c0JlZm9yZTtcclxuICAgICAgICBpZiAoIXZhbGlkQW1vdW50RGlzZ2l0c0JlZm9yZSkge1xyXG4gICAgICAgICAgdGhpcy5lcnJvciA9IGBCaXR0ZSBydW5kZW4gU2llIGRpZSBaYWhsIGF1ZiAke3RoaXMuZGlnaXRzQmVmb3JlID09PSAxID8gJ2VpbmUgU3RlbGxlJyA6IHRoaXMuZGlnaXRzQmVmb3JlLnRvU3RyaW5nKCkgKyAnIFN0ZWxsZW4nfSB2b3IgZGVtIEtvbW1hYDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFsaWRBbW91bnREaXNnaXRzQmVmb3JlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5kaWdpdHNBZnRlcikgJiYgdGhpcy5kaWdpdHNBZnRlciA+IDApIHtcclxuICAgICAgICB2YWxpZEFtb3VudERpc2dpdHNBZnRlciA9IG51bWJlclNwbGl0dGVkWzFdLmxlbmd0aCA8PSB0aGlzLmRpZ2l0c0FmdGVyO1xyXG4gICAgICAgIGlmICghdmFsaWRBbW91bnREaXNnaXRzQWZ0ZXIpIHtcclxuICAgICAgICAgIHRoaXMuZXJyb3IgPSBgQml0dGUgcnVuZGVuIFNpZSBkaWUgWmFobCBhdWYgJHt0aGlzLmRpZ2l0c0FmdGVyID09PSAxID8gJyBlaW5lIFN0ZWxsZScgOiB0aGlzLmRpZ2l0c0FmdGVyLnRvU3RyaW5nKCkgKyAnIFN0ZWxsZW4nfSBuYWNoIGRlbSBLb21tYWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbGlkQW1vdW50RGlzZ2l0c0FmdGVyID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gISh2YWxpZEFtb3VudERpc2dpdHNCZWZvcmUgJiYgdmFsaWRBbW91bnREaXNnaXRzQWZ0ZXIpO1xyXG4gICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB7aW52YWxpZEZsb2F0OiB0cnVlfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICByZXR1cm4ge2ludmFsaWRGbG9hdDogdHJ1ZX07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=