export class ValidatorFixedValue {
    comparator;
    error;
    hasError;
    value$;
    constructor(comparator, error = null) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWZpeGVkLXZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUvc3JjL2xpYi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLWZpeGVkLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sT0FBTyxtQkFBbUI7SUFLckI7SUFDQTtJQUpGLFFBQVEsQ0FBVTtJQUNqQixNQUFNLENBQU07SUFDcEIsWUFDUyxVQUFlLEVBQ2YsUUFBZ0IsSUFBSTtRQURwQixlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBZTtJQUMxQixDQUFDO0lBRUcsUUFBUTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sRUFBQyxjQUFjLEVBQUUsSUFBSSxFQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRU0sU0FBUztRQUNkLE9BQU8sQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7SVZhbGlkYXRvcn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS12YWxpZGF0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JGaXhlZFZhbHVlIGltcGxlbWVudHMgSVZhbGlkYXRvciB7XHJcblxyXG4gIHB1YmxpYyBoYXNFcnJvcjogYm9vbGVhbjtcclxuICBwcml2YXRlIHZhbHVlJDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNvbXBhcmF0b3I6IGFueSxcclxuICAgIHB1YmxpYyBlcnJvcjogc3RyaW5nID0gbnVsbFxyXG4gICkge31cclxuXHJcbiAgcHVibGljIHZhbGlkYXRlKCk6IGFueSB7XHJcbiAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5jb21wYXJhdG9yID09PSB0aGlzLnZhbHVlJCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICByZXR1cm4ge3ZhbGlkYXRvckZpeGVkOiB0cnVlfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChpbnB1dDogRm9ybUNvbnRyb2wpID0+IHtcclxuICAgICAgdGhpcy52YWx1ZSQgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=