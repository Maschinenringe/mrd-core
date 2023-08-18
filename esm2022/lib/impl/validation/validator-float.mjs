import { REGEX } from '../../enum/regex';
import { Util } from '../util/util';
export class ValidatorFloat {
    digitsBefore;
    digitsAfter;
    hasError = false;
    error = 'Bitte geben Sie eine valide Zahl ein';
    value;
    constructor(digitsBefore, digitsAfter) {
        this.digitsBefore = digitsBefore;
        this.digitsAfter = digitsAfter;
    }
    validator() {
        return (input) => {
            this.value = input.value;
            return this.validate();
        };
    }
    validate() {
        this.hasError = false;
        this.error = 'Bitte geben Sie eine valide Zahl ein';
        let validAmountDisgitsBefore = false;
        let validAmountDisgitsAfter = false;
        if (!this.value) {
            return null;
        }
        if (this.value && REGEX.INPUT_NUMBER.test(this.value.toString())) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWZsb2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUvc3JjL2xpYi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLWZsb2F0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN2QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBR2xDLE1BQU0sT0FBTyxjQUFjO0lBT2Y7SUFDQTtJQU5ILFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDakIsS0FBSyxHQUFHLHNDQUFzQyxDQUFDO0lBQzlDLEtBQUssQ0FBTTtJQUVuQixZQUNVLFlBQXFCLEVBQ3JCLFdBQW9CO1FBRHBCLGlCQUFZLEdBQVosWUFBWSxDQUFTO1FBQ3JCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO0lBQzNCLENBQUM7SUFFRyxTQUFTO1FBQ2QsT0FBTyxDQUFDLEtBQWtCLEVBQWlCLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFHTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxzQ0FBc0MsQ0FBQztRQUNwRCxJQUFJLHdCQUF3QixHQUFHLEtBQUssQ0FBQztRQUNyQyxJQUFJLHVCQUF1QixHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUs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SSxFQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcclxuaW1wb3J0IHtGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtSRUdFWH0gZnJvbSAnLi4vLi4vZW51bS9yZWdleCc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vdXRpbC91dGlsJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yRmxvYXQgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcclxuXHJcbiAgcHVibGljIGhhc0Vycm9yID0gZmFsc2U7XHJcbiAgcHVibGljIGVycm9yID0gJ0JpdHRlIGdlYmVuIFNpZSBlaW5lIHZhbGlkZSBaYWhsIGVpbic7XHJcbiAgcHJpdmF0ZSB2YWx1ZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZGlnaXRzQmVmb3JlPzogbnVtYmVyLFxyXG4gICAgcHJpdmF0ZSBkaWdpdHNBZnRlcj86IG51bWJlclxyXG4gICkge31cclxuXHJcbiAgcHVibGljIHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGlucHV0OiBGb3JtQ29udHJvbCk6IG9iamVjdCB8IG51bGwgPT4ge1xyXG4gICAgICB0aGlzLnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBhbnkge1xyXG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgdGhpcy5lcnJvciA9ICdCaXR0ZSBnZWJlbiBTaWUgZWluZSB2YWxpZGUgWmFobCBlaW4nO1xyXG4gICAgbGV0IHZhbGlkQW1vdW50RGlzZ2l0c0JlZm9yZSA9IGZhbHNlO1xyXG4gICAgbGV0IHZhbGlkQW1vdW50RGlzZ2l0c0FmdGVyID0gZmFsc2U7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy52YWx1ZSAmJiBSRUdFWC5JTlBVVF9OVU1CRVIudGVzdCh0aGlzLnZhbHVlLnRvU3RyaW5nKCkpKSB7XHJcbiAgICAgIGNvbnN0IG51bWJlclNwbGl0dGVkID0gdGhpcy52YWx1ZS50b1N0cmluZygpLnNwbGl0KCcsJyk7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmRpZ2l0c0JlZm9yZSkgJiYgdGhpcy5kaWdpdHNBZnRlciA9PT0gMCAmJiBudW1iZXJTcGxpdHRlZC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVycm9yID0gJ0VzIHNpbmQga2VpbmUgTmFjaGtvbW1hc3RlbGxlbiBlcmxhdWJ0JztcclxuICAgICAgICByZXR1cm4ge2ludmFsaWRGbG9hdDogdHJ1ZX07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bWJlclNwbGl0dGVkLmxlbmd0aCAhPT0gMikge1xyXG4gICAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmRpZ2l0c0JlZm9yZSkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA+IHRoaXMuZGlnaXRzQmVmb3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBgQml0dGUgcnVuZGVuIFNpZSBkaWUgWmFobCBhdWYgJHt0aGlzLmRpZ2l0c0JlZm9yZSA9PT0gMSA/ICdlaW5lIFN0ZWxsZScgOiB0aGlzLmRpZ2l0c0JlZm9yZS50b1N0cmluZygpICsgJyBTdGVsbGVuJ30gdm9yIGRlbSBLb21tYWA7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4ge2ludmFsaWRGbG9hdDogdHJ1ZX07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5kaWdpdHNCZWZvcmUpICYmIHRoaXMuZGlnaXRzQmVmb3JlID4gMCkge1xyXG4gICAgICAgIHZhbGlkQW1vdW50RGlzZ2l0c0JlZm9yZSA9IG51bWJlclNwbGl0dGVkWzBdLmxlbmd0aCA8PSB0aGlzLmRpZ2l0c0JlZm9yZTtcclxuICAgICAgICBpZiAoIXZhbGlkQW1vdW50RGlzZ2l0c0JlZm9yZSkge1xyXG4gICAgICAgICAgdGhpcy5lcnJvciA9IGBCaXR0ZSBydW5kZW4gU2llIGRpZSBaYWhsIGF1ZiAke3RoaXMuZGlnaXRzQmVmb3JlID09PSAxID8gJ2VpbmUgU3RlbGxlJyA6IHRoaXMuZGlnaXRzQmVmb3JlLnRvU3RyaW5nKCkgKyAnIFN0ZWxsZW4nfSB2b3IgZGVtIEtvbW1hYDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFsaWRBbW91bnREaXNnaXRzQmVmb3JlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5kaWdpdHNBZnRlcikgJiYgdGhpcy5kaWdpdHNBZnRlciA+IDApIHtcclxuICAgICAgICB2YWxpZEFtb3VudERpc2dpdHNBZnRlciA9IG51bWJlclNwbGl0dGVkWzFdLmxlbmd0aCA8PSB0aGlzLmRpZ2l0c0FmdGVyO1xyXG4gICAgICAgIGlmICghdmFsaWRBbW91bnREaXNnaXRzQWZ0ZXIpIHtcclxuICAgICAgICAgIHRoaXMuZXJyb3IgPSBgQml0dGUgcnVuZGVuIFNpZSBkaWUgWmFobCBhdWYgJHt0aGlzLmRpZ2l0c0FmdGVyID09PSAxID8gJyBlaW5lIFN0ZWxsZScgOiB0aGlzLmRpZ2l0c0FmdGVyLnRvU3RyaW5nKCkgKyAnIFN0ZWxsZW4nfSBuYWNoIGRlbSBLb21tYWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbGlkQW1vdW50RGlzZ2l0c0FmdGVyID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gISh2YWxpZEFtb3VudERpc2dpdHNCZWZvcmUgJiYgdmFsaWRBbW91bnREaXNnaXRzQWZ0ZXIpO1xyXG4gICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xyXG4gICAgICAgIHJldHVybiB7aW52YWxpZEZsb2F0OiB0cnVlfTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICByZXR1cm4ge2ludmFsaWRGbG9hdDogdHJ1ZX07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=