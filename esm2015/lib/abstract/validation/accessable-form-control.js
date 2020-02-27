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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC92YWxpZGF0aW9uL2FjY2Vzc2FibGUtZm9ybS1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBSTNFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQVN6QixVQUFVLENBQ2YsU0FBZSxFQUNmLFVBQXlCO1FBRXpCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsYUFBMkIsRUFBRTtRQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVU7Ozs7UUFBRSxDQUFDLENBQWEsRUFBRSxFQUFFO1lBQzdELE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDSixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXOzs7O1FBQUUsQ0FBQyxDQUFhLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsWUFBWSxpQkFBaUIsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFNB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T0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQVU7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7Q0FFRjs7O0lBOUhDLHdDQUE0Qjs7SUFDNUIsdUNBQW1DOztJQUNuQywwQ0FBc0M7Ozs7O0lBQ3RDLDBDQUEyQjs7Ozs7SUFDM0IsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHtWYWxpZGF0b3JSZXF1aXJlZH0gZnJvbSAnLi4vLi4vaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1yZXF1aXJlZCc7XHJcbmltcG9ydCB7SUFjY2Vzc2FibGVGb3JtQ29udHJvbH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS1hY2Nlc3NhYmxlLWZvcm0tY29udHJvbCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFjY2Vzc2FibGVGb3JtQ29udHJvbDxUVHlwZSA9IGFueT5cclxuICBpbXBsZW1lbnRzIElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8QWNjZXNzYWJsZUZvcm1Db250cm9sPFRUeXBlPiwgVFR5cGU+IHtcclxuXHJcbiAgcHVibGljIGNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gIHB1YmxpYyBzaG93QXM6ICh2YWx1ZTogYW55KSA9PiBhbnk7XHJcbiAgcHVibGljIGNvbnZlcnRUbzogKHZhbHVlOiBhbnkpID0+IGFueTtcclxuICBwcml2YXRlIHJlcXVpcmVkJDogYm9vbGVhbjtcclxuICBwcml2YXRlIHZhbGlkYXRvcnMkOiBJVmFsaWRhdG9yW107XHJcblxyXG4gIHB1YmxpYyBpbml0aWFsaXplKFxyXG4gICAgZm9ybVN0YXRlPzogYW55LFxyXG4gICAgdmFsaWRhdG9ycz86IElWYWxpZGF0b3JbXVxyXG4gICkge1xyXG4gICAgdGhpcy5jb250cm9sID0gbmV3IEZvcm1Db250cm9sKGZvcm1TdGF0ZSwgbnVsbCwgbnVsbCk7XHJcbiAgICB0aGlzLnZhbGlkYXRlV2l0aCh2YWxpZGF0b3JzKTtcclxuICAgIHRoaXMuc2V0VmFsdWUoZm9ybVN0YXRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWxpZGF0ZVdpdGgodmFsaWRhdG9yczogSVZhbGlkYXRvcltdID0gW10pOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xyXG4gICAgdGhpcy52YWxpZGF0b3JzJCA9IHZhbGlkYXRvcnM7XHJcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsaWRhdG9ycyhfLm1hcCh2YWxpZGF0b3JzLCAodjogSVZhbGlkYXRvcikgPT4ge1xyXG4gICAgICByZXR1cm4gdi52YWxpZGF0b3IoKTtcclxuICAgIH0pKTtcclxuICAgIHRoaXMucmVxdWlyZWQkID0gZmFsc2U7XHJcbiAgICBfLmVhY2godGhpcy52YWxpZGF0b3JzJCwgKHY6IElWYWxpZGF0b3IpID0+IHtcclxuICAgICAgaWYgKHYgaW5zdGFuY2VvZiBWYWxpZGF0b3JSZXF1aXJlZCkge1xyXG4gICAgICAgIHRoaXMucmVxdWlyZWQkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0VmFsdWUodmFsdWU6IGFueSk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBpZiAodGhpcy5zaG93QXMpIHtcclxuICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMuc2hvd0FzKHZhbHVlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXQodmFsdWU6IFRUeXBlKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGlmICh0aGlzLnNob3dBcykge1xyXG4gICAgICB0aGlzLmNvbnRyb2wucmVzZXQodGhpcy5zaG93QXModmFsdWUpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY29udHJvbC5yZXNldCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYXJrQXNVc2VkKCk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICB0aGlzLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWFya0FzVW51c2VkKCk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBfLmVhY2godGhpcy52YWxpZGF0b3JzJCwgKHZhbGlkYXRvcjogSVZhbGlkYXRvcikgPT4gdmFsaWRhdG9yLmhhc0Vycm9yID0gZmFsc2UgKTtcclxuICAgIHRoaXMuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcclxuICAgIHRoaXMuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1hcmtBc0RpcnR5KCk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNhYmxlKCk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZW5hYmxlKCk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICB0aGlzLmNvbnRyb2wuZW5hYmxlKCk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb250cm9sLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICF0aGlzLmVycm9yO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbGlkYXRvcnMoKTogSVZhbGlkYXRvcltdIHtcclxuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcnMkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVycm9yKCk6IElWYWxpZGF0b3Ige1xyXG4gICAgcmV0dXJuIF8uZmluZCh0aGlzLnZhbGlkYXRvcnMkLCAodjogSVZhbGlkYXRvcikgPT4gdi5oYXNFcnJvciApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IGFueSB7XHJcbiAgICBpZiAodGhpcy5jb252ZXJ0VG8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvKHRoaXMuY29udHJvbC52YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWQkO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLnRvdWNoZWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlydHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmRpcnR5O1xyXG4gIH1cclxuXHJcbn1cclxuIl19