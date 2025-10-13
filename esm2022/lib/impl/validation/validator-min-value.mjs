export class ValidatorMinValue {
    minValue$;
    error;
    hasError;
    value;
    constructor(minValue$) {
        this.minValue$ = minValue$;
    }
    validate() {
        this.hasError = false;
        if (this.value < this.minValue$) {
            this.error = `Bitte wählen Sie einen Wert nach dem Startwert (${this.minValue$}).`;
            this.hasError = true;
            return { invalidValue: true };
        }
        else {
            return null;
        }
    }
    validator() {
        return (input) => {
            this.value = input.value;
            return this.validate();
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLW1pbi12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlL3NyYy9saWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1taW4tdmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxPQUFPLGlCQUFpQjtJQVFUO0lBTlosS0FBSyxDQUFTO0lBQ2QsUUFBUSxDQUFVO0lBRWpCLEtBQUssQ0FBUztJQUV0QixZQUNtQixTQUFpQjtRQUFqQixjQUFTLEdBQVQsU0FBUyxDQUFRO0lBQ2pDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxtREFBbUQsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFBO1lBQ2xGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7SVZhbGlkYXRvcn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS12YWxpZGF0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JNaW5WYWx1ZSBpbXBsZW1lbnRzIElWYWxpZGF0b3Ige1xyXG5cclxuICBwdWJsaWMgZXJyb3I6IHN0cmluZztcclxuICBwdWJsaWMgaGFzRXJyb3I6IGJvb2xlYW47XHJcblxyXG4gIHByaXZhdGUgdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1pblZhbHVlJDogbnVtYmVyXHJcbiAgKSB7fVxyXG5cclxuICB2YWxpZGF0ZSgpOiBhbnkge1xyXG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMudmFsdWUgPCB0aGlzLm1pblZhbHVlJCkge1xyXG4gICAgICB0aGlzLmVycm9yID0gYEJpdHRlIHfDpGhsZW4gU2llIGVpbmVuIFdlcnQgbmFjaCBkZW0gU3RhcnR3ZXJ0ICgke3RoaXMubWluVmFsdWUkfSkuYFxyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHtpbnZhbGlkVmFsdWU6IHRydWV9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChpbnB1dDogRm9ybUNvbnRyb2wpID0+IHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19