export class ValidatorFixedValue {
    comparator;
    error;
    hasError = false;
    value$;
    constructor(comparator, error = undefined) {
        this.comparator = comparator;
        this.error = error;
    }
    validate() {
        this.hasError = false;
        if (this.comparator === this.value$) {
            return null;
        }
        else {
            this.hasError = true;
            return { validatorFixed: true };
        }
    }
    validator() {
        return (input) => {
            this.value$ = input.value;
            return this.validate();
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWZpeGVkLXZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUvc3JjL2xpYi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLWZpeGVkLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sT0FBTyxtQkFBbUI7SUFLckI7SUFDQTtJQUpGLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDekIsTUFBTSxDQUFNO0lBQ3BCLFlBQ1MsVUFBZSxFQUNmLFFBQTBCLFNBQVM7UUFEbkMsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNmLFVBQUssR0FBTCxLQUFLLENBQThCO0lBQ3pDLENBQUM7SUFFRyxRQUFRO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsT0FBTyxFQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFTSxTQUFTO1FBQ2QsT0FBTyxDQUFDLEtBQXNCLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDMUIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7SVZhbGlkYXRvcn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS12YWxpZGF0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JGaXhlZFZhbHVlIGltcGxlbWVudHMgSVZhbGlkYXRvciB7XHJcblxyXG4gIHB1YmxpYyBoYXNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgdmFsdWUkOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY29tcGFyYXRvcjogYW55LFxyXG4gICAgcHVibGljIGVycm9yOiBzdHJpbmd8dW5kZWZpbmVkID0gdW5kZWZpbmVkXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdGUoKTogYW55IHtcclxuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmNvbXBhcmF0b3IgPT09IHRoaXMudmFsdWUkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XHJcbiAgICAgIHJldHVybiB7dmFsaWRhdG9yRml4ZWQ6IHRydWV9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGlucHV0OiBBYnN0cmFjdENvbnRyb2wpID0+IHtcclxuICAgICAgdGhpcy52YWx1ZSQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=