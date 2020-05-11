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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWZsb2F0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1mbG9hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN2QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBR2xDLE1BQU0sT0FBTyxjQUFjOzs7OztJQU16QixZQUNVLFlBQXFCLEVBQ3JCLFdBQW9CO1FBRHBCLGlCQUFZLEdBQVosWUFBWSxDQUFTO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBTnZCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFHLHNDQUFzQyxDQUFDO0lBTW5ELENBQUM7Ozs7SUFFRyxTQUFTO1FBQ2Q7Ozs7UUFBTyxDQUFDLEtBQWtCLEVBQWlCLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBQztJQUNKLENBQUM7Ozs7SUFHTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxzQ0FBc0MsQ0FBQzs7WUFDaEQsd0JBQXdCLEdBQUcsS0FBSzs7WUFDaEMsdUJBQXVCLEdBQUcsS0FBSztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFOztrQkFDMUQsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUN2RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUM5RixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyx3Q0FBd0MsQ0FBQztnQkFDdEQsT0FBTyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQzthQUM3QjtZQUNELElBQUksY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ3JDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTt3QkFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxpQ0FBaUMsSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxVQUFVLGdCQUFnQixDQUFDO3dCQUNsSixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzt3QkFDckIsT0FBTyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQztxQkFDN0I7aUJBQ0Y7Z0JBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO2dCQUM5RCx3QkFBd0IsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxpQ0FBaUMsSUFBSSxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxVQUFVLGdCQUFnQixDQUFDO2lCQUNuSjthQUNGO2lCQUFNO2dCQUNMLHdCQUF3QixHQUFHLElBQUksQ0FBQzthQUNqQztZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUU7Z0JBQzVELHVCQUF1QixHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDdkUsSUFBSSxDQUFDLHVCQUF1QixFQUFFO29CQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLGlDQUFpQyxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLFVBQVUsaUJBQWlCLENBQUM7aUJBQ25KO2FBQ0Y7aUJBQU07Z0JBQ0wsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO2FBQ2hDO1lBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsd0JBQXdCLElBQUksdUJBQXVCLENBQUMsQ0FBQztZQUN2RSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLE9BQU8sRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUM7YUFDN0I7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztDQUVGOzs7SUF0RUMsa0NBQXdCOztJQUN4QiwrQkFBc0Q7Ozs7O0lBQ3RELCtCQUFtQjs7Ozs7SUFHakIsc0NBQTZCOzs7OztJQUM3QixxQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1JFR0VYfSBmcm9tICcuLi8uLi9lbnVtL3JlZ2V4JztcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yRmxvYXQgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcblxuICBwdWJsaWMgaGFzRXJyb3IgPSBmYWxzZTtcbiAgcHVibGljIGVycm9yID0gJ0JpdHRlIGdlYmVuIFNpZSBlaW5lIHZhbGlkZSBaYWhsIGVpbic7XG4gIHByaXZhdGUgdmFsdWU6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpZ2l0c0JlZm9yZT86IG51bWJlcixcbiAgICBwcml2YXRlIGRpZ2l0c0FmdGVyPzogbnVtYmVyXG4gICkge31cblxuICBwdWJsaWMgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcbiAgICByZXR1cm4gKGlucHV0OiBGb3JtQ29udHJvbCk6IG9iamVjdCB8IG51bGwgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9O1xuICB9XG5cblxuICBwdWJsaWMgdmFsaWRhdGUoKTogYW55IHtcbiAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5lcnJvciA9ICdCaXR0ZSBnZWJlbiBTaWUgZWluZSB2YWxpZGUgWmFobCBlaW4nO1xuICAgIGxldCB2YWxpZEFtb3VudERpc2dpdHNCZWZvcmUgPSBmYWxzZTtcbiAgICBsZXQgdmFsaWRBbW91bnREaXNnaXRzQWZ0ZXIgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy52YWx1ZSAmJiBSRUdFWC5JTlBVVF9OVU1CRVIudGVzdCh0aGlzLnZhbHVlLnRvU3RyaW5nKCkpKSB7XG4gICAgICBjb25zdCBudW1iZXJTcGxpdHRlZCA9IHRoaXMudmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLCcpO1xuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZGlnaXRzQmVmb3JlKSAmJiB0aGlzLmRpZ2l0c0FmdGVyID09PSAwICYmIG51bWJlclNwbGl0dGVkLmxlbmd0aCA9PT0gMikge1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lcnJvciA9ICdFcyBzaW5kIGtlaW5lIE5hY2hrb21tYXN0ZWxsZW4gZXJsYXVidCc7XG4gICAgICAgIHJldHVybiB7aW52YWxpZEZsb2F0OiB0cnVlfTtcbiAgICAgIH1cbiAgICAgIGlmIChudW1iZXJTcGxpdHRlZC5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZGlnaXRzQmVmb3JlKSkge1xuICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA+IHRoaXMuZGlnaXRzQmVmb3JlKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gYEJpdHRlIHJ1bmRlbiBTaWUgZGllIFphaGwgYXVmICR7dGhpcy5kaWdpdHNCZWZvcmUgPT09IDEgPyAnZWluZSBTdGVsbGUnIDogdGhpcy5kaWdpdHNCZWZvcmUudG9TdHJpbmcoKSArICcgU3RlbGxlbid9IHZvciBkZW0gS29tbWFgO1xuICAgICAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4ge2ludmFsaWRGbG9hdDogdHJ1ZX07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5kaWdpdHNCZWZvcmUpICYmIHRoaXMuZGlnaXRzQmVmb3JlID4gMCkge1xuICAgICAgICB2YWxpZEFtb3VudERpc2dpdHNCZWZvcmUgPSBudW1iZXJTcGxpdHRlZFswXS5sZW5ndGggPD0gdGhpcy5kaWdpdHNCZWZvcmU7XG4gICAgICAgIGlmICghdmFsaWRBbW91bnREaXNnaXRzQmVmb3JlKSB7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IGBCaXR0ZSBydW5kZW4gU2llIGRpZSBaYWhsIGF1ZiAke3RoaXMuZGlnaXRzQmVmb3JlID09PSAxID8gJ2VpbmUgU3RlbGxlJyA6IHRoaXMuZGlnaXRzQmVmb3JlLnRvU3RyaW5nKCkgKyAnIFN0ZWxsZW4nfSB2b3IgZGVtIEtvbW1hYDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRBbW91bnREaXNnaXRzQmVmb3JlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmRpZ2l0c0FmdGVyKSAmJiB0aGlzLmRpZ2l0c0FmdGVyID4gMCkge1xuICAgICAgICB2YWxpZEFtb3VudERpc2dpdHNBZnRlciA9IG51bWJlclNwbGl0dGVkWzFdLmxlbmd0aCA8PSB0aGlzLmRpZ2l0c0FmdGVyO1xuICAgICAgICBpZiAoIXZhbGlkQW1vdW50RGlzZ2l0c0FmdGVyKSB7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IGBCaXR0ZSBydW5kZW4gU2llIGRpZSBaYWhsIGF1ZiAke3RoaXMuZGlnaXRzQWZ0ZXIgPT09IDEgPyAnIGVpbmUgU3RlbGxlJyA6IHRoaXMuZGlnaXRzQWZ0ZXIudG9TdHJpbmcoKSArICcgU3RlbGxlbid9IG5hY2ggZGVtIEtvbW1hYDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRBbW91bnREaXNnaXRzQWZ0ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5oYXNFcnJvciA9ICEodmFsaWRBbW91bnREaXNnaXRzQmVmb3JlICYmIHZhbGlkQW1vdW50RGlzZ2l0c0FmdGVyKTtcbiAgICAgIGlmICh0aGlzLmhhc0Vycm9yKSB7XG4gICAgICAgIHJldHVybiB7aW52YWxpZEZsb2F0OiB0cnVlfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgIHJldHVybiB7aW52YWxpZEZsb2F0OiB0cnVlfTtcbiAgICB9XG4gIH1cblxufVxuIl19