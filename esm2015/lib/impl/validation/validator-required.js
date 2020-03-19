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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLXJlcXVpcmVkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1yZXF1aXJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBSWpDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFNNUIsWUFDRSxLQUFjO1FBTFQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixVQUFLLEdBQUcsYUFBYSxDQUFDO1FBTTNCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRU0sU0FBUztRQUNkOzs7O1FBQU8sQ0FBQyxLQUFrQixFQUFpQixFQUFFO1lBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUM7SUFDSixDQUFDOzs7O0lBR00sUUFBUTtRQUNiLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixPQUFPLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO2FBQ3pCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztDQUVGOzs7SUF2REMscUNBQXdCOztJQUN4QixrQ0FBNkI7Ozs7O0lBQzdCLGtDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcblxuXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yUmVxdWlyZWQgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcblxuICBwdWJsaWMgaGFzRXJyb3IgPSBmYWxzZTtcbiAgcHVibGljIGVycm9yID0gJ1BmbGljaHRmZWxkJztcbiAgcHJpdmF0ZSB2YWx1ZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGVycm9yPzogc3RyaW5nXG4gICkge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xuICAgIHJldHVybiAoaW5wdXQ6IEZvcm1Db250cm9sKTogb2JqZWN0IHwgbnVsbCA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZSgpO1xuICAgIH07XG4gIH1cblxuXG4gIHB1YmxpYyB2YWxpZGF0ZSgpOiBhbnkge1xuICAgIGlmIChfLmlzRGF0ZSh0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChtb21lbnQuaXNNb21lbnQodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoXy5pc051bWJlcih0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChfLmlzU3RyaW5nKHRoaXMudmFsdWUpKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHtyZXF1aXJlZDogdHJ1ZX07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChfLmlzQm9vbGVhbih0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICghdGhpcy52YWx1ZSB8fCBfLmlzRW1wdHkodGhpcy52YWx1ZSkpIHtcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgcmV0dXJuIHtyZXF1aXJlZDogdHJ1ZX07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=