/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/validation/accessable-form-control.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormControl } from '@angular/forms';
import * as _ from 'underscore';
import { ValidatorRequired } from '../../impl/validation/validator-required';
/**
 * @template TType
 */
export class AccessableFormControl {
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    initialize(formState, validators) {
        this.control = new FormControl(formState, null, null);
        this.validateWith(validators);
        this.setValue(formState);
    }
    /**
     * @param {?=} validators
     * @return {?}
     */
    validateWith(validators = []) {
        this.validators$ = validators;
        this.control.setValidators(_.map(validators, (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
            return v.validator();
        })));
        this.required$ = false;
        _.each(this.validators$, (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
            if (v instanceof ValidatorRequired) {
                this.required$ = true;
            }
        }));
        this.control.updateValueAndValidity();
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        if (this.showAs) {
            this.control.setValue(this.showAs(value));
        }
        else {
            this.control.setValue(value);
        }
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) {
        if (this.showAs) {
            this.control.reset(this.showAs(value));
        }
        else {
            this.control.reset(value);
        }
        return this;
    }
    /**
     * @return {?}
     */
    markAsUsed() {
        this.control.markAsDirty();
        this.control.markAsTouched();
        this.control.updateValueAndValidity();
        return this;
    }
    /**
     * @return {?}
     */
    markAsUnused() {
        _.each(this.validators$, (/**
         * @param {?} validator
         * @return {?}
         */
        (validator) => validator.hasError = false));
        this.control.updateValueAndValidity();
        this.control.markAsPristine();
        this.control.markAsUntouched();
        return this;
    }
    /**
     * @return {?}
     */
    markAsDirty() {
        this.control.markAsDirty();
        return this;
    }
    /**
     * @return {?}
     */
    markAsTouched() {
        this.control.markAsTouched();
        return this;
    }
    /**
     * @return {?}
     */
    disable() {
        this.control.disable();
        return this;
    }
    /**
     * @return {?}
     */
    enable() {
        this.control.enable();
        return this;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this.control.disabled;
    }
    /**
     * @return {?}
     */
    get valid() {
        if (this.control.disabled) {
            return true;
        }
        return !this.error;
    }
    /**
     * @return {?}
     */
    get validators() {
        return this.validators$;
    }
    /**
     * @return {?}
     */
    get error() {
        return _.find(this.validators$, (/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.hasError));
    }
    /**
     * @return {?}
     */
    get value() {
        if (this.convertTo) {
            return this.convertTo(this.control.value);
        }
        else {
            return this.control.value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.setValue(value);
    }
    /**
     * @return {?}
     */
    get required() {
        return this.required$;
    }
    /**
     * @return {?}
     */
    get touched() {
        return this.control.touched;
    }
    /**
     * @return {?}
     */
    get dirty() {
        return this.control.dirty;
    }
}
if (false) {
    /** @type {?} */
    AccessableFormControl.prototype.control;
    /** @type {?} */
    AccessableFormControl.prototype.showAs;
    /** @type {?} */
    AccessableFormControl.prototype.convertTo;
    /**
     * @type {?}
     * @private
     */
    AccessableFormControl.prototype.required$;
    /**
     * @type {?}
     * @private
     */
    AccessableFormControl.prototype.validators$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC92YWxpZGF0aW9uL2FjY2Vzc2FibGUtZm9ybS1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBSTNFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQVN6QixVQUFVLENBQ2YsU0FBZSxFQUNmLFVBQXlCO1FBRXpCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsYUFBMkIsRUFBRTtRQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVU7Ozs7UUFBRSxDQUFDLENBQWEsRUFBRSxFQUFFO1lBQzdELE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXOzs7O1FBQUUsQ0FBQyxDQUFhLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsWUFBWSxpQkFBaUIsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFNB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T0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQVU7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7Q0FFRjs7O0lBOUhDLHdDQUE0Qjs7SUFDNUIsdUNBQW1DOztJQUNuQywwQ0FBc0M7Ozs7O0lBQ3RDLDBDQUEyQjs7Ozs7SUFDM0IsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLXZhbGlkYXRvcic7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHtWYWxpZGF0b3JSZXF1aXJlZH0gZnJvbSAnLi4vLi4vaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1yZXF1aXJlZCc7XG5pbXBvcnQge0lBY2Nlc3NhYmxlRm9ybUNvbnRyb2x9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wnO1xuXG5cbmV4cG9ydCBjbGFzcyBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8VFR5cGUgPSBhbnk+XG4gIGltcGxlbWVudHMgSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8VFR5cGU+LCBUVHlwZT4ge1xuXG4gIHB1YmxpYyBjb250cm9sOiBGb3JtQ29udHJvbDtcbiAgcHVibGljIHNob3dBczogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgcHVibGljIGNvbnZlcnRUbzogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgcHJpdmF0ZSByZXF1aXJlZCQ6IGJvb2xlYW47XG4gIHByaXZhdGUgdmFsaWRhdG9ycyQ6IElWYWxpZGF0b3JbXTtcblxuICBwdWJsaWMgaW5pdGlhbGl6ZShcbiAgICBmb3JtU3RhdGU/OiBhbnksXG4gICAgdmFsaWRhdG9ycz86IElWYWxpZGF0b3JbXVxuICApIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woZm9ybVN0YXRlLCBudWxsLCBudWxsKTtcbiAgICB0aGlzLnZhbGlkYXRlV2l0aCh2YWxpZGF0b3JzKTtcbiAgICB0aGlzLnNldFZhbHVlKGZvcm1TdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGVXaXRoKHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXSA9IFtdKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMkID0gdmFsaWRhdG9ycztcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsaWRhdG9ycyhfLm1hcCh2YWxpZGF0b3JzLCAodjogSVZhbGlkYXRvcikgPT4ge1xuICAgICAgcmV0dXJuIHYudmFsaWRhdG9yKCk7XG4gICAgfSkpO1xuICAgIHRoaXMucmVxdWlyZWQkID0gZmFsc2U7XG4gICAgXy5lYWNoKHRoaXMudmFsaWRhdG9ycyQsICh2OiBJVmFsaWRhdG9yKSA9PiB7XG4gICAgICBpZiAodiBpbnN0YW5jZW9mIFZhbGlkYXRvclJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZWQkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNldFZhbHVlKHZhbHVlOiBhbnkpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIGlmICh0aGlzLnNob3dBcykge1xuICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMuc2hvd0FzKHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KHZhbHVlOiBUVHlwZSk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XG4gICAgaWYgKHRoaXMuc2hvd0FzKSB7XG4gICAgICB0aGlzLmNvbnRyb2wucmVzZXQodGhpcy5zaG93QXModmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLnJlc2V0KHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVbnVzZWQoKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICBfLmVhY2godGhpcy52YWxpZGF0b3JzJCwgKHZhbGlkYXRvcjogSVZhbGlkYXRvcikgPT4gdmFsaWRhdG9yLmhhc0Vycm9yID0gZmFsc2UgKTtcbiAgICB0aGlzLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNEaXJ0eSgpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGRpc2FibGUoKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGVuYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIHRoaXMuY29udHJvbC5lbmFibGUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmRpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNvbnRyb2wuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gIXRoaXMuZXJyb3I7XG4gIH1cblxuICBnZXQgdmFsaWRhdG9ycygpOiBJVmFsaWRhdG9yW10ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcnMkO1xuICB9XG5cbiAgZ2V0IGVycm9yKCk6IElWYWxpZGF0b3Ige1xuICAgIHJldHVybiBfLmZpbmQodGhpcy52YWxpZGF0b3JzJCwgKHY6IElWYWxpZGF0b3IpID0+IHYuaGFzRXJyb3IgKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIGlmICh0aGlzLmNvbnZlcnRUbykge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvKHRoaXMuY29udHJvbC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlZCQ7XG4gIH1cblxuICBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLnRvdWNoZWQ7XG4gIH1cblxuICBnZXQgZGlydHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5kaXJ0eTtcbiAgfVxuXG59XG4iXX0=