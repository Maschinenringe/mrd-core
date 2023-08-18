import * as _ from 'underscore';
import * as moment from 'moment';
export class ValidatorRequired {
    hasError = false;
    error = 'Pflichtfeld';
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
        if (_.isDate(this.value)) {
            this.hasError = false;
            return null;
        }
        if (moment.isMoment(this.value)) {
            this.hasError = false;
            return null;
        }
        if (_.isNumber(this.value)) {
            this.hasError = false;
            return null;
        }
        if (_.isString(this.value)) {
            if (this.value.length > 0) {
                this.hasError = false;
                return null;
            }
            else {
                this.hasError = true;
                return { required: true };
            }
        }
        if (_.isBoolean(this.value)) {
            this.hasError = false;
            return null;
        }
        if (!this.value || _.isEmpty(this.value)) {
            this.hasError = true;
            return { required: true };
        }
        else {
            this.hasError = false;
            return null;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLXJlcXVpcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUvc3JjL2xpYi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLXJlcXVpcmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBSWpDLE1BQU0sT0FBTyxpQkFBaUI7SUFFckIsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUNqQixLQUFLLEdBQUcsYUFBYSxDQUFDO0lBQ3JCLEtBQUssQ0FBTTtJQUVuQixZQUNFLEtBQWM7UUFFZCxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVNLFNBQVM7UUFDZCxPQUFPLENBQUMsS0FBa0IsRUFBaUIsRUFBRTtZQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUdNLFFBQVE7UUFDYixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsT0FBTyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQzthQUN6QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsT0FBTyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yUmVxdWlyZWQgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcclxuXHJcbiAgcHVibGljIGhhc0Vycm9yID0gZmFsc2U7XHJcbiAgcHVibGljIGVycm9yID0gJ1BmbGljaHRmZWxkJztcclxuICBwcml2YXRlIHZhbHVlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZXJyb3I/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoaW5wdXQ6IEZvcm1Db250cm9sKTogb2JqZWN0IHwgbnVsbCA9PiB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHZhbGlkYXRlKCk6IGFueSB7XHJcbiAgICBpZiAoXy5pc0RhdGUodGhpcy52YWx1ZSkpIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChtb21lbnQuaXNNb21lbnQodGhpcy52YWx1ZSkpIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChfLmlzTnVtYmVyKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoXy5pc1N0cmluZyh0aGlzLnZhbHVlKSkge1xyXG4gICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB7cmVxdWlyZWQ6IHRydWV9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoXy5pc0Jvb2xlYW4odGhpcy52YWx1ZSkpIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy52YWx1ZSB8fCBfLmlzRW1wdHkodGhpcy52YWx1ZSkpIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XHJcbiAgICAgIHJldHVybiB7cmVxdWlyZWQ6IHRydWV9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==