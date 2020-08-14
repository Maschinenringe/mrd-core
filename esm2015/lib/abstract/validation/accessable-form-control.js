/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/validation/accessable-form-control.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormControl } from '@angular/forms';
import * as _ from 'underscore';
import { ValidatorRequired } from '../../impl/validation/validator-required';
import { Observable } from 'rxjs';
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
    blockControls() {
        this.blocked$ = true;
    }
    /**
     * @return {?}
     */
    unblockControls() {
        this.blocked$ = false;
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
    get valueChanges() {
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            /** @type {?} */
            const sub = this.control.valueChanges
                .subscribe((/**
             * @return {?}
             */
            () => {
                if (!this.blocked) {
                    observer.next(this.value);
                }
            }), null, (/**
             * @return {?}
             */
            () => {
                sub.unsubscribe();
            }));
        }));
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
    /**
     * @return {?}
     */
    get blocked() {
        return this.blocked$;
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
    /**
     * @type {?}
     * @private
     */
    AccessableFormControl.prototype.blocked$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC92YWxpZGF0aW9uL2FjY2Vzc2FibGUtZm9ybS1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7Ozs7QUFHNUMsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBVXpCLFVBQVUsQ0FDZixTQUFlLEVBQ2YsVUFBeUI7UUFFekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVNLFlBQVksQ0FBQyxhQUEyQixFQUFFO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVTs7OztRQUFFLENBQUMsQ0FBYSxFQUFFLEVBQUU7WUFDN0QsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7Ozs7UUFBRSxDQUFDLENBQWEsRUFBRSxFQUFFO1lBQ3pDLElBQUks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QUssQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Q0FFRjs7O0lBNUpDLHdDQUE0Qjs7SUFDNUIsdUNBQW1DOztJQUNuQywwQ0FBc0M7Ozs7O0lBQ3RDLDBDQUEyQjs7Ozs7SUFDM0IsNENBQWtDOzs7OztJQUNsQyx5Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQge1ZhbGlkYXRvclJlcXVpcmVkfSBmcm9tICcuLi8uLi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLXJlcXVpcmVkJztcbmltcG9ydCB7SUFjY2Vzc2FibGVGb3JtQ29udHJvbH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS1hY2Nlc3NhYmxlLWZvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5cbmV4cG9ydCBjbGFzcyBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8VFR5cGUgPSBhbnk+XG4gIGltcGxlbWVudHMgSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8VFR5cGU+LCBUVHlwZT4ge1xuXG4gIHB1YmxpYyBjb250cm9sOiBGb3JtQ29udHJvbDtcbiAgcHVibGljIHNob3dBczogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgcHVibGljIGNvbnZlcnRUbzogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgcHJpdmF0ZSByZXF1aXJlZCQ6IGJvb2xlYW47XG4gIHByaXZhdGUgdmFsaWRhdG9ycyQ6IElWYWxpZGF0b3JbXTtcbiAgcHJpdmF0ZSBibG9ja2VkJDogYm9vbGVhbjtcblxuICBwdWJsaWMgaW5pdGlhbGl6ZShcbiAgICBmb3JtU3RhdGU/OiBhbnksXG4gICAgdmFsaWRhdG9ycz86IElWYWxpZGF0b3JbXVxuICApIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woZm9ybVN0YXRlLCBudWxsLCBudWxsKTtcbiAgICB0aGlzLnZhbGlkYXRlV2l0aCh2YWxpZGF0b3JzKTtcbiAgICB0aGlzLnNldFZhbHVlKGZvcm1TdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGVXaXRoKHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXSA9IFtdKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMkID0gdmFsaWRhdG9ycztcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsaWRhdG9ycyhfLm1hcCh2YWxpZGF0b3JzLCAodjogSVZhbGlkYXRvcikgPT4ge1xuICAgICAgcmV0dXJuIHYudmFsaWRhdG9yKCk7XG4gICAgfSkpO1xuICAgIHRoaXMucmVxdWlyZWQkID0gZmFsc2U7XG4gICAgXy5lYWNoKHRoaXMudmFsaWRhdG9ycyQsICh2OiBJVmFsaWRhdG9yKSA9PiB7XG4gICAgICBpZiAodiBpbnN0YW5jZW9mIFZhbGlkYXRvclJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZWQkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNldFZhbHVlKHZhbHVlOiBhbnkpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIGlmICh0aGlzLnNob3dBcykge1xuICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMuc2hvd0FzKHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KHZhbHVlOiBUVHlwZSk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XG4gICAgaWYgKHRoaXMuc2hvd0FzKSB7XG4gICAgICB0aGlzLmNvbnRyb2wucmVzZXQodGhpcy5zaG93QXModmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLnJlc2V0KHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVbnVzZWQoKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICBfLmVhY2godGhpcy52YWxpZGF0b3JzJCwgKHZhbGlkYXRvcjogSVZhbGlkYXRvcikgPT4gdmFsaWRhdG9yLmhhc0Vycm9yID0gZmFsc2UgKTtcbiAgICB0aGlzLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNEaXJ0eSgpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGRpc2FibGUoKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGVuYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIHRoaXMuY29udHJvbC5lbmFibGUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBibG9ja0NvbnRyb2xzKCk6IHZvaWQge1xuICAgIHRoaXMuYmxvY2tlZCQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIHVuYmxvY2tDb250cm9scygpOiB2b2lkIHtcbiAgICB0aGlzLmJsb2NrZWQkID0gZmFsc2U7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5kaXNhYmxlZDtcbiAgfVxuXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jb250cm9sLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuICF0aGlzLmVycm9yO1xuICB9XG5cbiAgZ2V0IHZhbGlkYXRvcnMoKTogSVZhbGlkYXRvcltdIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3JzJDtcbiAgfVxuXG4gIGdldCBlcnJvcigpOiBJVmFsaWRhdG9yIHtcbiAgICByZXR1cm4gXy5maW5kKHRoaXMudmFsaWRhdG9ycyQsICh2OiBJVmFsaWRhdG9yKSA9PiB2Lmhhc0Vycm9yICk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICBpZiAodGhpcy5jb252ZXJ0VG8pIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRUbyh0aGlzLmNvbnRyb2wudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBnZXQgdmFsdWVDaGFuZ2VzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKCAob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgIGNvbnN0IHN1YiA9IHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYmxvY2tlZCkge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWQkO1xuICB9XG5cbiAgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC50b3VjaGVkO1xuICB9XG5cbiAgZ2V0IGRpcnR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuZGlydHk7XG4gIH1cblxuICBnZXQgYmxvY2tlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ibG9ja2VkJDtcbiAgfVxuXG59XG4iXX0=