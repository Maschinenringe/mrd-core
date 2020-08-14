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
var /**
 * @template TType
 */
AccessableFormControl = /** @class */ (function () {
    function AccessableFormControl() {
    }
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    AccessableFormControl.prototype.initialize = /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    function (formState, validators) {
        this.control = new FormControl(formState, null, null);
        this.validateWith(validators);
        this.setValue(formState);
    };
    /**
     * @param {?=} validators
     * @return {?}
     */
    AccessableFormControl.prototype.validateWith = /**
     * @param {?=} validators
     * @return {?}
     */
    function (validators) {
        var _this = this;
        if (validators === void 0) { validators = []; }
        this.validators$ = validators;
        this.control.setValidators(_.map(validators, (/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            return v.validator();
        })));
        this.required$ = false;
        _.each(this.validators$, (/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v instanceof ValidatorRequired) {
                _this.required$ = true;
            }
        }));
        this.control.updateValueAndValidity();
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AccessableFormControl.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.showAs) {
            this.control.setValue(this.showAs(value));
        }
        else {
            this.control.setValue(value);
        }
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AccessableFormControl.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.showAs) {
            this.control.reset(this.showAs(value));
        }
        else {
            this.control.reset(value);
        }
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormControl.prototype.markAsUsed = /**
     * @return {?}
     */
    function () {
        this.control.markAsDirty();
        this.control.markAsTouched();
        this.control.updateValueAndValidity();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormControl.prototype.markAsUnused = /**
     * @return {?}
     */
    function () {
        _.each(this.validators$, (/**
         * @param {?} validator
         * @return {?}
         */
        function (validator) { return validator.hasError = false; }));
        this.control.updateValueAndValidity();
        this.control.markAsPristine();
        this.control.markAsUntouched();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormControl.prototype.markAsDirty = /**
     * @return {?}
     */
    function () {
        this.control.markAsDirty();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormControl.prototype.markAsTouched = /**
     * @return {?}
     */
    function () {
        this.control.markAsTouched();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormControl.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.control.disable();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormControl.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.control.enable();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormControl.prototype.blockControls = /**
     * @return {?}
     */
    function () {
        this.blocked$ = true;
    };
    /**
     * @return {?}
     */
    AccessableFormControl.prototype.unblockControls = /**
     * @return {?}
     */
    function () {
        this.blocked$ = false;
    };
    Object.defineProperty(AccessableFormControl.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.control.disabled) {
                return true;
            }
            return !this.error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "validators", {
        get: /**
         * @return {?}
         */
        function () {
            return this.validators$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "error", {
        get: /**
         * @return {?}
         */
        function () {
            return _.find(this.validators$, (/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return v.hasError; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.convertTo) {
                return this.convertTo(this.control.value);
            }
            else {
                return this.control.value;
            }
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "valueChanges", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return Observable.create((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                /** @type {?} */
                var sub = _this.control.valueChanges
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    if (!_this.blocked) {
                        observer.next(_this.value);
                    }
                }), null, (/**
                 * @return {?}
                 */
                function () {
                    sub.unsubscribe();
                }));
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () {
            return this.required$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "touched", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.touched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "dirty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormControl.prototype, "blocked", {
        get: /**
         * @return {?}
         */
        function () {
            return this.blocked$;
        },
        enumerable: true,
        configurable: true
    });
    return AccessableFormControl;
}());
/**
 * @template TType
 */
export { AccessableFormControl };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC92YWxpZGF0aW9uL2FjY2Vzc2FibGUtZm9ybS1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7Ozs7QUFHNUM7Ozs7SUFBQTtJQStKQSxDQUFDOzs7Ozs7SUFySlEsMENBQVU7Ozs7O0lBQWpCLFVBQ0UsU0FBZSxFQUNmLFVBQXlCO1FBRXpCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTSw0Q0FBWTs7OztJQUFuQixVQUFvQixVQUE2QjtRQUFqRCxpQkFhQztRQWJtQiwyQkFBQSxFQUFBLGVBQTZCO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVTs7OztRQUFFLFVBQUMsQ0FBYTtZQUN6RCxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMs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QUNMLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQVE7Ozs7UUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUgsNEJBQUM7QUFBRCxDQUFDLEFBL0pELElBK0pDOzs7Ozs7O0lBNUpDLHdDQUE0Qjs7SUFDNUIsdUNBQW1DOztJQUNuQywwQ0FBc0M7Ozs7O0lBQ3RDLDBDQUEyQjs7Ozs7SUFDM0IsNENBQWtDOzs7OztJQUNsQyx5Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQge1ZhbGlkYXRvclJlcXVpcmVkfSBmcm9tICcuLi8uLi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLXJlcXVpcmVkJztcbmltcG9ydCB7SUFjY2Vzc2FibGVGb3JtQ29udHJvbH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS1hY2Nlc3NhYmxlLWZvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5cbmV4cG9ydCBjbGFzcyBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8VFR5cGUgPSBhbnk+XG4gIGltcGxlbWVudHMgSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8VFR5cGU+LCBUVHlwZT4ge1xuXG4gIHB1YmxpYyBjb250cm9sOiBGb3JtQ29udHJvbDtcbiAgcHVibGljIHNob3dBczogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgcHVibGljIGNvbnZlcnRUbzogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgcHJpdmF0ZSByZXF1aXJlZCQ6IGJvb2xlYW47XG4gIHByaXZhdGUgdmFsaWRhdG9ycyQ6IElWYWxpZGF0b3JbXTtcbiAgcHJpdmF0ZSBibG9ja2VkJDogYm9vbGVhbjtcblxuICBwdWJsaWMgaW5pdGlhbGl6ZShcbiAgICBmb3JtU3RhdGU/OiBhbnksXG4gICAgdmFsaWRhdG9ycz86IElWYWxpZGF0b3JbXVxuICApIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woZm9ybVN0YXRlLCBudWxsLCBudWxsKTtcbiAgICB0aGlzLnZhbGlkYXRlV2l0aCh2YWxpZGF0b3JzKTtcbiAgICB0aGlzLnNldFZhbHVlKGZvcm1TdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGVXaXRoKHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXSA9IFtdKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMkID0gdmFsaWRhdG9ycztcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsaWRhdG9ycyhfLm1hcCh2YWxpZGF0b3JzLCAodjogSVZhbGlkYXRvcikgPT4ge1xuICAgICAgcmV0dXJuIHYudmFsaWRhdG9yKCk7XG4gICAgfSkpO1xuICAgIHRoaXMucmVxdWlyZWQkID0gZmFsc2U7XG4gICAgXy5lYWNoKHRoaXMudmFsaWRhdG9ycyQsICh2OiBJVmFsaWRhdG9yKSA9PiB7XG4gICAgICBpZiAodiBpbnN0YW5jZW9mIFZhbGlkYXRvclJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZWQkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNldFZhbHVlKHZhbHVlOiBhbnkpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIGlmICh0aGlzLnNob3dBcykge1xuICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMuc2hvd0FzKHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KHZhbHVlOiBUVHlwZSk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XG4gICAgaWYgKHRoaXMuc2hvd0FzKSB7XG4gICAgICB0aGlzLmNvbnRyb2wucmVzZXQodGhpcy5zaG93QXModmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLnJlc2V0KHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVbnVzZWQoKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICBfLmVhY2godGhpcy52YWxpZGF0b3JzJCwgKHZhbGlkYXRvcjogSVZhbGlkYXRvcikgPT4gdmFsaWRhdG9yLmhhc0Vycm9yID0gZmFsc2UgKTtcbiAgICB0aGlzLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNEaXJ0eSgpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGRpc2FibGUoKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGVuYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIHRoaXMuY29udHJvbC5lbmFibGUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBibG9ja0NvbnRyb2xzKCk6IHZvaWQge1xuICAgIHRoaXMuYmxvY2tlZCQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIHVuYmxvY2tDb250cm9scygpOiB2b2lkIHtcbiAgICB0aGlzLmJsb2NrZWQkID0gZmFsc2U7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5kaXNhYmxlZDtcbiAgfVxuXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jb250cm9sLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuICF0aGlzLmVycm9yO1xuICB9XG5cbiAgZ2V0IHZhbGlkYXRvcnMoKTogSVZhbGlkYXRvcltdIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3JzJDtcbiAgfVxuXG4gIGdldCBlcnJvcigpOiBJVmFsaWRhdG9yIHtcbiAgICByZXR1cm4gXy5maW5kKHRoaXMudmFsaWRhdG9ycyQsICh2OiBJVmFsaWRhdG9yKSA9PiB2Lmhhc0Vycm9yICk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICBpZiAodGhpcy5jb252ZXJ0VG8pIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRUbyh0aGlzLmNvbnRyb2wudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBnZXQgdmFsdWVDaGFuZ2VzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKCAob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgIGNvbnN0IHN1YiA9IHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYmxvY2tlZCkge1xuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWlyZWQkO1xuICB9XG5cbiAgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC50b3VjaGVkO1xuICB9XG5cbiAgZ2V0IGRpcnR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuZGlydHk7XG4gIH1cblxuICBnZXQgYmxvY2tlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ibG9ja2VkJDtcbiAgfVxuXG59XG4iXX0=