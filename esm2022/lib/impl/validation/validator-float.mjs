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
        if (this.value && REGEX.ALL_NUMBERS.test(this.value.toString())) {
            const numberSplitted = this.value.toString().replace('.', '').split(',');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWZsb2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUvc3JjL2xpYi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLWZsb2F0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN2QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBR2xDLE1BQU0sT0FBTyxjQUFjO0lBT2hCO0lBQ0E7SUFORixRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLEtBQUssR0FBRyxzQ0FBc0MsQ0FBQztJQUM5QyxLQUFLLENBQU07SUFFbkIsWUFDUyxZQUFxQixFQUNyQixXQUFvQjtRQURwQixpQkFBWSxHQUFaLFlBQVksQ0FBUztRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztJQUMxQixDQUFDO0lBRUcsU0FBUztRQUNkLE9BQU8sQ0FBQyxLQUFrQixFQUFpQixFQUFFO1lBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDSixDQUFDO0lBR00sUUFBUTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsc0NBQXNDLENBQUM7UUFDcEQsSUFBSSx3QkFBd0IsR0FBRyxLQUFLLENBQUM7UUFDckMsSUFBSSx1QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFF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SSxDQUFDO1lBQ3JCLE9BQU8sRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcclxuaW1wb3J0IHtGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtSRUdFWH0gZnJvbSAnLi4vLi4vZW51bS9yZWdleCc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vdXRpbC91dGlsJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yRmxvYXQgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcclxuXHJcbiAgcHVibGljIGhhc0Vycm9yID0gZmFsc2U7XHJcbiAgcHVibGljIGVycm9yID0gJ0JpdHRlIGdlYmVuIFNpZSBlaW5lIHZhbGlkZSBaYWhsIGVpbic7XHJcbiAgcHJpdmF0ZSB2YWx1ZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWdpdHNCZWZvcmU/OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgZGlnaXRzQWZ0ZXI/OiBudW1iZXJcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChpbnB1dDogRm9ybUNvbnRyb2wpOiBvYmplY3QgfCBudWxsID0+IHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgdmFsaWRhdGUoKTogYW55IHtcclxuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgIHRoaXMuZXJyb3IgPSAnQml0dGUgZ2ViZW4gU2llIGVpbmUgdmFsaWRlIFphaGwgZWluJztcclxuICAgIGxldCB2YWxpZEFtb3VudERpc2dpdHNCZWZvcmUgPSBmYWxzZTtcclxuICAgIGxldCB2YWxpZEFtb3VudERpc2dpdHNBZnRlciA9IGZhbHNlO1xyXG4gICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudmFsdWUgJiYgUkVHRVguQUxMX05VTUJFUlMudGVzdCh0aGlzLnZhbHVlLnRvU3RyaW5nKCkpKSB7XHJcbiAgICAgIGNvbnN0IG51bWJlclNwbGl0dGVkID0gdGhpcy52YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykuc3BsaXQoJywnKTtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZGlnaXRzQmVmb3JlKSAmJiB0aGlzLmRpZ2l0c0FmdGVyID09PSAwICYmIG51bWJlclNwbGl0dGVkLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZXJyb3IgPSAnRXMgc2luZCBrZWluZSBOYWNoa29tbWFzdGVsbGVuIGVybGF1YnQnO1xyXG4gICAgICAgIHJldHVybiB7aW52YWxpZEZsb2F0OiB0cnVlfTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtYmVyU3BsaXR0ZWQubGVuZ3RoICE9PSAyKSB7XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZGlnaXRzQmVmb3JlKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID4gdGhpcy5kaWdpdHNCZWZvcmUpIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvciA9IGBCaXR0ZSBydW5kZW4gU2llIGRpZSBaYWhsIGF1ZiAke3RoaXMuZGlnaXRzQmVmb3JlID09PSAxID8gJ2VpbmUgU3RlbGxlJyA6IHRoaXMuZGlnaXRzQmVmb3JlLnRvU3RyaW5nKCkgKyAnIFN0ZWxsZW4nfSB2b3IgZGVtIEtvbW1hYDtcclxuICAgICAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB7aW52YWxpZEZsb2F0OiB0cnVlfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmRpZ2l0c0JlZm9yZSkgJiYgdGhpcy5kaWdpdHNCZWZvcmUgPiAwKSB7XHJcbiAgICAgICAgdmFsaWRBbW91bnREaXNnaXRzQmVmb3JlID0gbnVtYmVyU3BsaXR0ZWRbMF0ubGVuZ3RoIDw9IHRoaXMuZGlnaXRzQmVmb3JlO1xyXG4gICAgICAgIGlmICghdmFsaWRBbW91bnREaXNnaXRzQmVmb3JlKSB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yID0gYEJpdHRlIHJ1bmRlbiBTaWUgZGllIFphaGwgYXVmICR7dGhpcy5kaWdpdHNCZWZvcmUgPT09IDEgPyAnZWluZSBTdGVsbGUnIDogdGhpcy5kaWdpdHNCZWZvcmUudG9TdHJpbmcoKSArICcgU3RlbGxlbid9IHZvciBkZW0gS29tbWFgO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YWxpZEFtb3VudERpc2dpdHNCZWZvcmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZCh0aGlzLmRpZ2l0c0FmdGVyKSAmJiB0aGlzLmRpZ2l0c0FmdGVyID4gMCkge1xyXG4gICAgICAgIHZhbGlkQW1vdW50RGlzZ2l0c0FmdGVyID0gbnVtYmVyU3BsaXR0ZWRbMV0ubGVuZ3RoIDw9IHRoaXMuZGlnaXRzQWZ0ZXI7XHJcbiAgICAgICAgaWYgKCF2YWxpZEFtb3VudERpc2dpdHNBZnRlcikge1xyXG4gICAgICAgICAgdGhpcy5lcnJvciA9IGBCaXR0ZSBydW5kZW4gU2llIGRpZSBaYWhsIGF1ZiAke3RoaXMuZGlnaXRzQWZ0ZXIgPT09IDEgPyAnIGVpbmUgU3RlbGxlJyA6IHRoaXMuZGlnaXRzQWZ0ZXIudG9TdHJpbmcoKSArICcgU3RlbGxlbid9IG5hY2ggZGVtIEtvbW1hYDtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFsaWRBbW91bnREaXNnaXRzQWZ0ZXIgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSAhKHZhbGlkQW1vdW50RGlzZ2l0c0JlZm9yZSAmJiB2YWxpZEFtb3VudERpc2dpdHNBZnRlcik7XHJcbiAgICAgIGlmICh0aGlzLmhhc0Vycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHtpbnZhbGlkRmxvYXQ6IHRydWV9O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XHJcbiAgICAgIHJldHVybiB7aW52YWxpZEZsb2F0OiB0cnVlfTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==