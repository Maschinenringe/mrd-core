/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-float.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { REGEX } from '../../enum/regex';
import { Util } from '../util/util';
var ValidatorFloat = /** @class */ (function () {
    function ValidatorFloat(digitsBefore, digitsAfter) {
        this.digitsBefore = digitsBefore;
        this.digitsAfter = digitsAfter;
        this.hasError = false;
        this.error = 'Bitte geben Sie eine valide Zahl ein';
    }
    /**
     * @return {?}
     */
    ValidatorFloat.prototype.validator = /**
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
    ValidatorFloat.prototype.validate = /**
     * @return {?}
     */
    function () {
        this.hasError = false;
        this.error = 'Bitte geben Sie eine valide Zahl ein';
        /** @type {?} */
        var validAmountDisgitsBefore = false;
        /** @type {?} */
        var validAmountDisgitsAfter = false;
        if (!this.value) {
            return null;
        }
        if (this.value && REGEX.INPUT_NUMBER.test(this.value.toString())) {
            /** @type {?} */
            var numberSplitted = this.value.toString().split(',');
            if (Util.isDefined(this.digitsBefore) && this.digitsAfter === 0 && numberSplitted.length === 2) {
                this.hasError = true;
                this.error = 'Es sind keine Nachkommastellen erlaubt';
                return { invalidFloat: true };
            }
            if (numberSplitted.length !== 2) {
                if (Util.isDefined(this.digitsBefore)) {
                    if (this.value.length > this.digitsBefore) {
                        this.error = "Bitte runden Sie die Zahl auf " + (this.digitsBefore === 1 ? 'eine Stelle' : this.digitsBefore.toString() + ' Stellen') + " vor dem Komma";
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
                    this.error = "Bitte runden Sie die Zahl auf " + (this.digitsBefore === 1 ? 'eine Stelle' : this.digitsBefore.toString() + ' Stellen') + " vor dem Komma";
                }
            }
            else {
                validAmountDisgitsBefore = true;
            }
            if (Util.isDefined(this.digitsAfter) && this.digitsAfter > 0) {
                validAmountDisgitsAfter = numberSplitted[1].length <= this.digitsAfter;
                if (!validAmountDisgitsAfter) {
                    this.error = "Bitte runden Sie die Zahl auf " + (this.digitsAfter === 1 ? ' eine Stelle' : this.digitsAfter.toString() + ' Stellen') + " nach dem Komma";
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
    };
    return ValidatorFloat;
}());
export { ValidatorFloat };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWZsb2F0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1mbG9hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN2QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBR2xDO0lBTUUsd0JBQ1UsWUFBcUIsRUFDckIsV0FBb0I7UUFEcEIsaUJBQVksR0FBWixZQUFZLENBQVM7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQVM7UUFOdkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixVQUFLLEdBQUcsc0NBQXNDLENBQUM7SUFNbkQsQ0FBQzs7OztJQUVHLGtDQUFTOzs7SUFBaEI7UUFBQSxpQkFLQztRQUpDOzs7O1FBQU8sVUFBQyxLQUFrQjtZQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsT0FBTyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7OztJQUdNLGlDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsc0NBQXNDLENBQUM7O1lBQ2hELHdCQUF3QixHQUFHLEtBQUs7O1lBQ2hDLHVCQUF1QixHQUFHLEtBQUs7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRTs7Z0JBQzFELGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEs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Ozs7SUF0RUMsa0NBQXdCOztJQUN4QiwrQkFBc0Q7Ozs7O0lBQ3RELCtCQUFtQjs7Ozs7SUFHakIsc0NBQTZCOzs7OztJQUM3QixxQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcclxuaW1wb3J0IHtGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtSRUdFWH0gZnJvbSAnLi4vLi4vZW51bS9yZWdleCc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vdXRpbC91dGlsJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yRmxvYXQgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcclxuXHJcbiAgcHVibGljIGhhc0Vycm9yID0gZmFsc2U7XHJcbiAgcHVibGljIGVycm9yID0gJ0JpdHRlIGdlYmVuIFNpZSBlaW5lIHZhbGlkZSBaYWhsIGVpbic7XHJcbiAgcHJpdmF0ZSB2YWx1ZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZGlnaXRzQmVmb3JlPzogbnVtYmVyLFxyXG4gICAgcHJpdmF0ZSBkaWdpdHNBZnRlcj86IG51bWJlclxyXG4gICkge31cclxuXHJcbiAgcHVibGljIHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGlucHV0OiBGb3JtQ29udHJvbCk6IG9iamVjdCB8IG51bGwgPT4ge1xyXG4gICAgICB0aGlzLnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBhbnkge1xyXG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgdGhpcy5lcnJvciA9ICdCaXR0ZSBnZWJlbiBTaWUgZWluZSB2YWxpZGUgWmFobCBlaW4nO1xyXG4gICAgbGV0IHZhbGlkQW1vdW50RGlzZ2l0c0JlZm9yZSA9IGZhbHNlO1xyXG4gICAgbGV0IHZhbGlkQW1vdW50RGlzZ2l0c0FmdGVyID0gZmFsc2U7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy52YWx1ZSAmJiBSRUdFWC5JTlBVVF9OVU1CRVIudGVzdCh0aGlzLnZhbHVlLnRvU3RyaW5nKCkpKSB7XHJcbiAgICAgIGNvbnN0IG51bWJlclNwbGl0dGVkID0gdGhpcy52YWx1ZS50b1N0cmluZygpLnNwbGl0KCcsJyk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmRpZ2l0c0JlZm9yZSkgJiYgdGhpcy5kaWdpdHNBZnRlciA9PT0gMCAmJiBudW1iZXJTcGxpdHRlZC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVycm9yID0gJ0VzIHNpbmQga2VpbmUgTmFjaGtvbW1hc3RlbGxlbiBlcmxhdWJ0JztcclxuICAgICAgICByZXR1cm4ge2ludmFsaWRGbG9hdDogdHJ1ZX07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bWJlclNwbGl0dGVkLmxlbmd0aCAhPT0gMikge1xyXG4gICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmRpZ2l0c0JlZm9yZSkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA+IHRoaXMuZGlnaXRzQmVmb3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBgQml0dGUgcnVuZGVuIFNpZSBkaWUgWmFobCBhdWYgJHt0aGlzLmRpZ2l0c0JlZm9yZSA9PT0gMSA/ICdlaW5lIFN0ZWxsZScgOiB0aGlzLmRpZ2l0c0JlZm9yZS50b1N0cmluZygpICsgJyBTdGVsbGVuJ30gdm9yIGRlbSBLb21tYWA7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4ge2ludmFsaWRGbG9hdDogdHJ1ZX07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5kaWdpdHNCZWZvcmUpICYmIHRoaXMuZGlnaXRzQmVmb3JlID4gMCkge1xyXG4gICAgICAgIHZhbGlkQW1vdW50RGlzZ2l0c0JlZm9yZSA9IG51bWJlclNwbGl0dGVkWzBdLmxlbmd0aCA8PSB0aGlzLmRpZ2l0c0JlZm9yZTtcclxuICAgICAgICBpZiAoIXZhbGlkQW1vdW50RGlzZ2l0c0JlZm9yZSkge1xyXG4gICAgICAgICAgdGhpcy5lcnJvciA9IGBCaXR0ZSBydW5kZW4gU2llIGRpZSBaYWhsIGF1ZiAke3RoaXMuZGlnaXRzQmVmb3JlID09PSAxID8gJ2VpbmUgU3RlbGxlJyA6IHRoaXMuZGlnaXRzQmVmb3JlLnRvU3RyaW5nKCkgKyAnIFN0ZWxsZW4nfSB2b3IgZGVtIEtvbW1hYDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFsaWRBbW91bnREaXNnaXRzQmVmb3JlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5kaWdpdHNBZnRlcikgJiYgdGhpcy5kaWdpdHNBZnRlciA+IDApIHtcclxuICAgICAgICB2YWxpZEFtb3VudERpc2dpdHNBZnRlciA9IG51bWJlclNwbGl0dGVkWzFdLmxlbmd0aCA8PSB0aGlzLmRpZ2l0c0FmdGVyO1xyXG4gICAgICAgIGlmICghdmFsaWRBbW91bnREaXNnaXRzQWZ0ZXIpIHtcclxuICAgICAgICAgIHRoaXMuZXJyb3IgPSBgQml0dGUgcnVuZGVuIFNpZSBkaWUgWmFobCBhdWYgJHt0aGlzLmRpZ2l0c0FmdGVyID09PSAxID8gJyBlaW5lIFN0ZWxsZScgOiB0aGlzLmRpZ2l0c0FmdGVyLnRvU3RyaW5nKCkgKyAnIFN0ZWxsZW4nfSBuYWNoIGRlbSBLb21tYWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbGlkQW1vdW50RGlzZ2l0c0FmdGVyID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gISh2YWxpZEFtb3VudERpc2dpdHNCZWZvcmUgJiYgdmFsaWRBbW91bnREaXNnaXRzQWZ0ZXIpO1xyXG4gICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB7aW52YWxpZEZsb2F0OiB0cnVlfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICByZXR1cm4ge2ludmFsaWRGbG9hdDogdHJ1ZX07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=