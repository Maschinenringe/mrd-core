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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWZsb2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUvc3JjL2xpYi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLWZsb2F0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN2QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBR2xDLE1BQU0sT0FBTyxjQUFjO0lBT2hCO0lBQ0E7SUFORixRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLEtBQUssR0FBRyxzQ0FBc0MsQ0FBQztJQUM5QyxLQUFLLENBQU07SUFFbkIsWUFDUyxZQUFxQixFQUNyQixXQUFvQjtRQURwQixpQkFBWSxHQUFaLFlBQVksQ0FBUztRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztJQUMxQixDQUFDO0lBRUcsU0FBUztRQUNkLE9BQU8sQ0FBQyxLQUFzQixFQUFpQixFQUFFO1lBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDSixDQUFDO0lBR00sUUFBUTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsc0NBQXNDLENBQUM7UUFDcEQsSUFBSSx3QkFBd0IsR0FBRyxLQUFLLENBQUM7UUFDckMsSUFBSSx1QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFF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SSxDQUFDO1lBQ3JCLE9BQU8sRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcclxuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7UkVHRVh9IGZyb20gJy4uLy4uL2VudW0vcmVnZXgnO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4uL3V0aWwvdXRpbCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvckZsb2F0IGltcGxlbWVudHMgSVZhbGlkYXRvciB7XHJcblxyXG4gIHB1YmxpYyBoYXNFcnJvciA9IGZhbHNlO1xyXG4gIHB1YmxpYyBlcnJvciA9ICdCaXR0ZSBnZWJlbiBTaWUgZWluZSB2YWxpZGUgWmFobCBlaW4nO1xyXG4gIHByaXZhdGUgdmFsdWU6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlnaXRzQmVmb3JlPzogbnVtYmVyLFxyXG4gICAgcHVibGljIGRpZ2l0c0FmdGVyPzogbnVtYmVyXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoaW5wdXQ6IEFic3RyYWN0Q29udHJvbCk6IG9iamVjdCB8IG51bGwgPT4ge1xyXG4gICAgICB0aGlzLnZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBhbnkge1xyXG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgdGhpcy5lcnJvciA9ICdCaXR0ZSBnZWJlbiBTaWUgZWluZSB2YWxpZGUgWmFobCBlaW4nO1xyXG4gICAgbGV0IHZhbGlkQW1vdW50RGlzZ2l0c0JlZm9yZSA9IGZhbHNlO1xyXG4gICAgbGV0IHZhbGlkQW1vdW50RGlzZ2l0c0FmdGVyID0gZmFsc2U7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy52YWx1ZSAmJiBSRUdFWC5BTExfTlVNQkVSUy50ZXN0KHRoaXMudmFsdWUudG9TdHJpbmcoKSkpIHtcclxuICAgICAgY29uc3QgbnVtYmVyU3BsaXR0ZWQgPSB0aGlzLnZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcnKS5zcGxpdCgnLCcpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5kaWdpdHNCZWZvcmUpICYmIHRoaXMuZGlnaXRzQWZ0ZXIgPT09IDAgJiYgbnVtYmVyU3BsaXR0ZWQubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9ICdFcyBzaW5kIGtlaW5lIE5hY2hrb21tYXN0ZWxsZW4gZXJsYXVidCc7XHJcbiAgICAgICAgcmV0dXJuIHtpbnZhbGlkRmxvYXQ6IHRydWV9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW1iZXJTcGxpdHRlZC5sZW5ndGggIT09IDIpIHtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5kaWdpdHNCZWZvcmUpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPiB0aGlzLmRpZ2l0c0JlZm9yZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gYEJpdHRlIHJ1bmRlbiBTaWUgZGllIFphaGwgYXVmICR7dGhpcy5kaWdpdHNCZWZvcmUgPT09IDEgPyAnZWluZSBTdGVsbGUnIDogdGhpcy5kaWdpdHNCZWZvcmUudG9TdHJpbmcoKSArICcgU3RlbGxlbid9IHZvciBkZW0gS29tbWFgO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHtpbnZhbGlkRmxvYXQ6IHRydWV9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZGlnaXRzQmVmb3JlKSAmJiB0aGlzLmRpZ2l0c0JlZm9yZSA+IDApIHtcclxuICAgICAgICB2YWxpZEFtb3VudERpc2dpdHNCZWZvcmUgPSBudW1iZXJTcGxpdHRlZFswXS5sZW5ndGggPD0gdGhpcy5kaWdpdHNCZWZvcmU7XHJcbiAgICAgICAgaWYgKCF2YWxpZEFtb3VudERpc2dpdHNCZWZvcmUpIHtcclxuICAgICAgICAgIHRoaXMuZXJyb3IgPSBgQml0dGUgcnVuZGVuIFNpZSBkaWUgWmFobCBhdWYgJHt0aGlzLmRpZ2l0c0JlZm9yZSA9PT0gMSA/ICdlaW5lIFN0ZWxsZScgOiB0aGlzLmRpZ2l0c0JlZm9yZS50b1N0cmluZygpICsgJyBTdGVsbGVuJ30gdm9yIGRlbSBLb21tYWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbGlkQW1vdW50RGlzZ2l0c0JlZm9yZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZGlnaXRzQWZ0ZXIpICYmIHRoaXMuZGlnaXRzQWZ0ZXIgPiAwKSB7XHJcbiAgICAgICAgdmFsaWRBbW91bnREaXNnaXRzQWZ0ZXIgPSBudW1iZXJTcGxpdHRlZFsxXS5sZW5ndGggPD0gdGhpcy5kaWdpdHNBZnRlcjtcclxuICAgICAgICBpZiAoIXZhbGlkQW1vdW50RGlzZ2l0c0FmdGVyKSB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yID0gYEJpdHRlIHJ1bmRlbiBTaWUgZGllIFphaGwgYXVmICR7dGhpcy5kaWdpdHNBZnRlciA9PT0gMSA/ICcgZWluZSBTdGVsbGUnIDogdGhpcy5kaWdpdHNBZnRlci50b1N0cmluZygpICsgJyBTdGVsbGVuJ30gbmFjaCBkZW0gS29tbWFgO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YWxpZEFtb3VudERpc2dpdHNBZnRlciA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5oYXNFcnJvciA9ICEodmFsaWRBbW91bnREaXNnaXRzQmVmb3JlICYmIHZhbGlkQW1vdW50RGlzZ2l0c0FmdGVyKTtcclxuICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4ge2ludmFsaWRGbG9hdDogdHJ1ZX07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHtpbnZhbGlkRmxvYXQ6IHRydWV9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19