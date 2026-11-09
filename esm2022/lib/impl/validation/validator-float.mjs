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
            // Alle Tausenderpunkte entfernen, nicht nur den ersten (1.234.567,8)
            const numberSplitted = this.value.toString().replace(/\./g, '').split(',');
            if (Util.isDefined(this.digitsBefore) && this.digitsAfter === 0 && numberSplitted.length === 2) {
                this.hasError = true;
                this.error = 'Es sind keine Nachkommastellen erlaubt';
                return { invalidFloat: true };
            }
            if (numberSplitted.length !== 2) {
                if (Util.isDefined(this.digitsBefore)) {
                    if (numberSplitted[0].replace('-', '').length > this.digitsBefore) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWZsb2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUvc3JjL2xpYi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLWZsb2F0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUN2QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBR2xDLE1BQU0sT0FBTyxjQUFjO0lBT2hCO0lBQ0E7SUFORixRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLEtBQUssR0FBRyxzQ0FBc0MsQ0FBQztJQUM5QyxLQUFLLENBQU07SUFFbkIsWUFDUyxZQUFxQixFQUNyQixXQUFvQjtRQURwQixpQkFBWSxHQUFaLFlBQVksQ0FBUztRQUNyQixnQkFBVyxHQUFYLFdBQVcsQ0FBUztJQUMxQixDQUFDO0lBRUcsU0FBUztRQUNkLE9BQU8sQ0FBQyxLQUFzQixFQUFpQixFQUFFO1lBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDSixDQUFDO0lBR00sUUFBUTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsc0NBQXNDLENBQUM7UUFDcEQsSUFBSSx3QkFBd0IsR0FBRyxLQUFLLENBQUM7UUFDckMsSUFBSSx1QkFBdUIsR0FBRyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFF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T0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsT0FBTyxFQUFDLFlBQVksRUFBRSxJQUFJLEVBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVZhbGlkYXRvcn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS12YWxpZGF0b3InO1xyXG5pbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtSRUdFWH0gZnJvbSAnLi4vLi4vZW51bS9yZWdleCc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vdXRpbC91dGlsJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yRmxvYXQgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcclxuXHJcbiAgcHVibGljIGhhc0Vycm9yID0gZmFsc2U7XHJcbiAgcHVibGljIGVycm9yID0gJ0JpdHRlIGdlYmVuIFNpZSBlaW5lIHZhbGlkZSBaYWhsIGVpbic7XHJcbiAgcHJpdmF0ZSB2YWx1ZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWdpdHNCZWZvcmU/OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgZGlnaXRzQWZ0ZXI/OiBudW1iZXJcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChpbnB1dDogQWJzdHJhY3RDb250cm9sKTogb2JqZWN0IHwgbnVsbCA9PiB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHZhbGlkYXRlKCk6IGFueSB7XHJcbiAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICB0aGlzLmVycm9yID0gJ0JpdHRlIGdlYmVuIFNpZSBlaW5lIHZhbGlkZSBaYWhsIGVpbic7XHJcbiAgICBsZXQgdmFsaWRBbW91bnREaXNnaXRzQmVmb3JlID0gZmFsc2U7XHJcbiAgICBsZXQgdmFsaWRBbW91bnREaXNnaXRzQWZ0ZXIgPSBmYWxzZTtcclxuICAgIGlmICghdGhpcy52YWx1ZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnZhbHVlICYmIFJFR0VYLkFMTF9OVU1CRVJTLnRlc3QodGhpcy52YWx1ZS50b1N0cmluZygpKSkge1xyXG4gICAgICAvLyBBbGxlIFRhdXNlbmRlcnB1bmt0ZSBlbnRmZXJuZW4sIG5pY2h0IG51ciBkZW4gZXJzdGVuICgxLjIzNC41NjcsOClcclxuICAgICAgY29uc3QgbnVtYmVyU3BsaXR0ZWQgPSB0aGlzLnZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFwuL2csICcnKS5zcGxpdCgnLCcpO1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5kaWdpdHNCZWZvcmUpICYmIHRoaXMuZGlnaXRzQWZ0ZXIgPT09IDAgJiYgbnVtYmVyU3BsaXR0ZWQubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9ICdFcyBzaW5kIGtlaW5lIE5hY2hrb21tYXN0ZWxsZW4gZXJsYXVidCc7XHJcbiAgICAgICAgcmV0dXJuIHtpbnZhbGlkRmxvYXQ6IHRydWV9O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW1iZXJTcGxpdHRlZC5sZW5ndGggIT09IDIpIHtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5kaWdpdHNCZWZvcmUpKSB7XHJcbiAgICAgICAgICBpZiAobnVtYmVyU3BsaXR0ZWRbMF0ucmVwbGFjZSgnLScsICcnKS5sZW5ndGggPiB0aGlzLmRpZ2l0c0JlZm9yZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gYEJpdHRlIHJ1bmRlbiBTaWUgZGllIFphaGwgYXVmICR7dGhpcy5kaWdpdHNCZWZvcmUgPT09IDEgPyAnZWluZSBTdGVsbGUnIDogdGhpcy5kaWdpdHNCZWZvcmUudG9TdHJpbmcoKSArICcgU3RlbGxlbid9IHZvciBkZW0gS29tbWFgO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHtpbnZhbGlkRmxvYXQ6IHRydWV9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZGlnaXRzQmVmb3JlKSAmJiB0aGlzLmRpZ2l0c0JlZm9yZSA+IDApIHtcclxuICAgICAgICB2YWxpZEFtb3VudERpc2dpdHNCZWZvcmUgPSBudW1iZXJTcGxpdHRlZFswXS5sZW5ndGggPD0gdGhpcy5kaWdpdHNCZWZvcmU7XHJcbiAgICAgICAgaWYgKCF2YWxpZEFtb3VudERpc2dpdHNCZWZvcmUpIHtcclxuICAgICAgICAgIHRoaXMuZXJyb3IgPSBgQml0dGUgcnVuZGVuIFNpZSBkaWUgWmFobCBhdWYgJHt0aGlzLmRpZ2l0c0JlZm9yZSA9PT0gMSA/ICdlaW5lIFN0ZWxsZScgOiB0aGlzLmRpZ2l0c0JlZm9yZS50b1N0cmluZygpICsgJyBTdGVsbGVuJ30gdm9yIGRlbSBLb21tYWA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbGlkQW1vdW50RGlzZ2l0c0JlZm9yZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHRoaXMuZGlnaXRzQWZ0ZXIpICYmIHRoaXMuZGlnaXRzQWZ0ZXIgPiAwKSB7XHJcbiAgICAgICAgdmFsaWRBbW91bnREaXNnaXRzQWZ0ZXIgPSBudW1iZXJTcGxpdHRlZFsxXS5sZW5ndGggPD0gdGhpcy5kaWdpdHNBZnRlcjtcclxuICAgICAgICBpZiAoIXZhbGlkQW1vdW50RGlzZ2l0c0FmdGVyKSB7XHJcbiAgICAgICAgICB0aGlzLmVycm9yID0gYEJpdHRlIHJ1bmRlbiBTaWUgZGllIFphaGwgYXVmICR7dGhpcy5kaWdpdHNBZnRlciA9PT0gMSA/ICcgZWluZSBTdGVsbGUnIDogdGhpcy5kaWdpdHNBZnRlci50b1N0cmluZygpICsgJyBTdGVsbGVuJ30gbmFjaCBkZW0gS29tbWFgO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YWxpZEFtb3VudERpc2dpdHNBZnRlciA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5oYXNFcnJvciA9ICEodmFsaWRBbW91bnREaXNnaXRzQmVmb3JlICYmIHZhbGlkQW1vdW50RGlzZ2l0c0FmdGVyKTtcclxuICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4ge2ludmFsaWRGbG9hdDogdHJ1ZX07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHtpbnZhbGlkRmxvYXQ6IHRydWV9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19