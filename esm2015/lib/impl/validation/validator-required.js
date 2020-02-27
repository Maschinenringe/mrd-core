/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-required.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'underscore';
import * as moment from 'moment';
export class ValidatorRequired {
    /**
     * @param {?=} error
     */
    constructor(error) {
        this.hasError = false;
        this.error = 'Pflichtfeld';
        if (error) {
            this.error = error;
        }
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
if (false) {
    /** @type {?} */
    ValidatorRequired.prototype.hasError;
    /** @type {?} */
    ValidatorRequired.prototype.error;
    /**
     * @type {?}
     * @private
     */
    ValidatorRequired.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLXJlcXVpcmVkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1yZXF1aXJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBSWpDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFNNUIsWUFDRSxLQUFjO1FBTFQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixVQUFLLEdBQUcsYUFBYSxDQUFDO1FBTTNCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRU0sU0FBUztRQUNkOzs7O1FBQU8sQ0FBQyxLQUFrQixFQUFpQixFQUFFO1lBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUM7SUFDSixDQUFDOzs7O0lBR00sUUFBUTtRQUNiLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixPQUFPLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO2FBQ3pCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztDQUVGOzs7SUF2REMscUNBQXdCOztJQUN4QixrQ0FBNkI7Ozs7O0lBQzdCLGtDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yUmVxdWlyZWQgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcclxuXHJcbiAgcHVibGljIGhhc0Vycm9yID0gZmFsc2U7XHJcbiAgcHVibGljIGVycm9yID0gJ1BmbGljaHRmZWxkJztcclxuICBwcml2YXRlIHZhbHVlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZXJyb3I/OiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICB0aGlzLmVycm9yID0gZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdmFsaWRhdG9yKCk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoaW5wdXQ6IEZvcm1Db250cm9sKTogb2JqZWN0IHwgbnVsbCA9PiB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIHZhbGlkYXRlKCk6IGFueSB7XHJcbiAgICBpZiAoXy5pc0RhdGUodGhpcy52YWx1ZSkpIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChtb21lbnQuaXNNb21lbnQodGhpcy52YWx1ZSkpIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChfLmlzTnVtYmVyKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoXy5pc1N0cmluZyh0aGlzLnZhbHVlKSkge1xyXG4gICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiB7cmVxdWlyZWQ6IHRydWV9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoXy5pc0Jvb2xlYW4odGhpcy52YWx1ZSkpIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy52YWx1ZSB8fCBfLmlzRW1wdHkodGhpcy52YWx1ZSkpIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XHJcbiAgICAgIHJldHVybiB7cmVxdWlyZWQ6IHRydWV9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==