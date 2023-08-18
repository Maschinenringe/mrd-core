import { REGEX } from '../../enum/regex';
export class ValidatorPostalCode {
    hasError = false;
    error = 'Bitte geben Sie eine gültige Postleitzahl ein';
    value;
    constructor(error) {
        if (error) {
            this.error = error;
        }
    }
    validator() {
        return (input) => {
            this.value = input.value;
            return this.validate();
        };
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLXBvc3RhbC1jb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUvc3JjL2xpYi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLXBvc3RhbC1jb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUd2QyxNQUFNLE9BQU8sbUJBQW1CO0lBRXZCLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDakIsS0FBSyxHQUFHLCtDQUErQyxDQUFDO0lBQ3ZELEtBQUssQ0FBTTtJQUVuQixZQUNFLEtBQWM7UUFFZCxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVNLFNBQVM7UUFDZCxPQUFPLENBQUMsS0FBa0IsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7WUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsT0FBTyxFQUFDLGlCQUFpQixFQUFFLElBQUksRUFBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtJVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7UkVHRVh9IGZyb20gJy4uLy4uL2VudW0vcmVnZXgnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JQb3N0YWxDb2RlIGltcGxlbWVudHMgSVZhbGlkYXRvciB7XHJcblxyXG4gIHB1YmxpYyBoYXNFcnJvciA9IGZhbHNlO1xyXG4gIHB1YmxpYyBlcnJvciA9ICdCaXR0ZSBnZWJlbiBTaWUgZWluZSBnw7xsdGlnZSBQb3N0bGVpdHphaGwgZWluJztcclxuICBwcml2YXRlIHZhbHVlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZXJyb3I/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoaW5wdXQ6IEZvcm1Db250cm9sKSA9PiB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdGUoKTogYW55IHtcclxuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgIGlmICghdGhpcy52YWx1ZSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnZhbHVlICYmIFJFR0VYLlBPU1RBTF9DT0RFLnRlc3QodGhpcy52YWx1ZS50b1N0cmluZygpKSkge1xyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XHJcbiAgICAgIHJldHVybiB7aW52YWxpZFBvc3RhbENvZGU6IHRydWV9O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=