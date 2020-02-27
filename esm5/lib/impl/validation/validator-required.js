/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/validator-required.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'underscore';
import * as moment from 'moment';
var ValidatorRequired = /** @class */ (function () {
    function ValidatorRequired(error) {
        this.hasError = false;
        this.error = 'Pflichtfeld';
        if (error) {
            this.error = error;
        }
    }
    /**
     * @return {?}
     */
    ValidatorRequired.prototype.validator = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return (/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            _this.value = input.value;
            return _this.validate();
        });
    };
    /**
     * @return {?}
     */
    ValidatorRequired.prototype.validate = /**
     * @return {?}
     */
    function () {
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
    };
    return ValidatorRequired;
}());
export { ValidatorRequired };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLXJlcXVpcmVkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1yZXF1aXJlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBSWpDO0lBTUUsMkJBQ0UsS0FBYztRQUxULGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFHLGFBQWEsQ0FBQztRQU0zQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUVNLHFDQUFTOzs7SUFBaEI7UUFBQSxpQkFLQztRQUpDOzs7O1FBQU8sVUFBQyxLQUFrQjtZQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDekIsT0FBTyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7OztJQUdNLG9DQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixPQUFPLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO2FBQ3pCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVILHdCQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQzs7OztJQXZEQyxxQ0FBd0I7O0lBQ3hCLGtDQUE2Qjs7Ozs7SUFDN0Isa0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7SVZhbGlkYXRvcn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS12YWxpZGF0b3InO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JSZXF1aXJlZCBpbXBsZW1lbnRzIElWYWxpZGF0b3Ige1xyXG5cclxuICBwdWJsaWMgaGFzRXJyb3IgPSBmYWxzZTtcclxuICBwdWJsaWMgZXJyb3IgPSAnUGZsaWNodGZlbGQnO1xyXG4gIHByaXZhdGUgdmFsdWU6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBlcnJvcj86IHN0cmluZ1xyXG4gICkge1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChpbnB1dDogRm9ybUNvbnRyb2wpOiBvYmplY3QgfCBudWxsID0+IHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgdmFsaWRhdGUoKTogYW55IHtcclxuICAgIGlmIChfLmlzRGF0ZSh0aGlzLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKG1vbWVudC5pc01vbWVudCh0aGlzLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKF8uaXNOdW1iZXIodGhpcy52YWx1ZSkpIHtcclxuICAgICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChfLmlzU3RyaW5nKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHtyZXF1aXJlZDogdHJ1ZX07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChfLmlzQm9vbGVhbih0aGlzLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnZhbHVlIHx8IF8uaXNFbXB0eSh0aGlzLnZhbHVlKSkge1xyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuIHtyZXF1aXJlZDogdHJ1ZX07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19