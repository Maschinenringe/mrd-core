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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC92YWxpZGF0aW9uL2FjY2Vzc2FibGUtZm9ybS1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBSTNFOzs7O0lBQUE7SUFpSUEsQ0FBQzs7Ozs7O0lBeEhRLDBDQUFVOzs7OztJQUFqQixVQUNFLFNBQWUsRUFDZixVQUF5QjtRQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU0sNENBQVk7Ozs7SUFBbkIsVUFBb0IsVUFBNkI7UUFBakQsaUJBYUM7UUFibUIsMkJBQUEsRUFBQSxlQUE2QjtRQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVU7Ozs7UUFBRSxVQUFDLENBQWE7WUFDekQsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkIsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7Ozs7UUFBRSxVQUFDLENBQWE7WUFDckMsSUFBSSxDQUFDLFlB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LENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVc7Ozs7WUFBRSxVQUFDLENBQWEsSUFBSyxPQUFBLENBQUMsQ0FBQyxRQUFRLEVBQVYsQ0FBVSxFQUFFLENBQUM7UUFDbEUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx3Q0FBSzs7OztRQUFUO1lBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQzNCO1FBQ0gsQ0FBQzs7Ozs7UUFFRCxVQUFVLEtBQVU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDJDQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUgsNEJBQUM7QUFBRCxDQUFDLEFBaklELElBaUlDOzs7Ozs7O0lBOUhDLHdDQUE0Qjs7SUFDNUIsdUNBQW1DOztJQUNuQywwQ0FBc0M7Ozs7O0lBQ3RDLDBDQUEyQjs7Ozs7SUFDM0IsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLXZhbGlkYXRvcic7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHtWYWxpZGF0b3JSZXF1aXJlZH0gZnJvbSAnLi4vLi4vaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1yZXF1aXJlZCc7XG5pbXBvcnQge0lBY2Nlc3NhYmxlRm9ybUNvbnRyb2x9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wnO1xuXG5cbmV4cG9ydCBjbGFzcyBBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8VFR5cGUgPSBhbnk+XG4gIGltcGxlbWVudHMgSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8VFR5cGU+LCBUVHlwZT4ge1xuXG4gIHB1YmxpYyBjb250cm9sOiBGb3JtQ29udHJvbDtcbiAgcHVibGljIHNob3dBczogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgcHVibGljIGNvbnZlcnRUbzogKHZhbHVlOiBhbnkpID0+IGFueTtcbiAgcHJpdmF0ZSByZXF1aXJlZCQ6IGJvb2xlYW47XG4gIHByaXZhdGUgdmFsaWRhdG9ycyQ6IElWYWxpZGF0b3JbXTtcblxuICBwdWJsaWMgaW5pdGlhbGl6ZShcbiAgICBmb3JtU3RhdGU/OiBhbnksXG4gICAgdmFsaWRhdG9ycz86IElWYWxpZGF0b3JbXVxuICApIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woZm9ybVN0YXRlLCBudWxsLCBudWxsKTtcbiAgICB0aGlzLnZhbGlkYXRlV2l0aCh2YWxpZGF0b3JzKTtcbiAgICB0aGlzLnNldFZhbHVlKGZvcm1TdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGVXaXRoKHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXSA9IFtdKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMkID0gdmFsaWRhdG9ycztcbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsaWRhdG9ycyhfLm1hcCh2YWxpZGF0b3JzLCAodjogSVZhbGlkYXRvcikgPT4ge1xuICAgICAgcmV0dXJuIHYudmFsaWRhdG9yKCk7XG4gICAgfSkpO1xuICAgIHRoaXMucmVxdWlyZWQkID0gZmFsc2U7XG4gICAgXy5lYWNoKHRoaXMudmFsaWRhdG9ycyQsICh2OiBJVmFsaWRhdG9yKSA9PiB7XG4gICAgICBpZiAodiBpbnN0YW5jZW9mIFZhbGlkYXRvclJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZWQkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNldFZhbHVlKHZhbHVlOiBhbnkpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIGlmICh0aGlzLnNob3dBcykge1xuICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMuc2hvd0FzKHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KHZhbHVlOiBUVHlwZSk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XG4gICAgaWYgKHRoaXMuc2hvd0FzKSB7XG4gICAgICB0aGlzLmNvbnRyb2wucmVzZXQodGhpcy5zaG93QXModmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9sLnJlc2V0KHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVbnVzZWQoKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICBfLmVhY2godGhpcy52YWxpZGF0b3JzJCwgKHZhbGlkYXRvcjogSVZhbGlkYXRvcikgPT4gdmFsaWRhdG9yLmhhc0Vycm9yID0gZmFsc2UgKTtcbiAgICB0aGlzLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNEaXJ0eSgpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGRpc2FibGUoKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcbiAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGVuYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xuICAgIHRoaXMuY29udHJvbC5lbmFibGUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmRpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNvbnRyb2wuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gIXRoaXMuZXJyb3I7XG4gIH1cblxuICBnZXQgdmFsaWRhdG9ycygpOiBJVmFsaWRhdG9yW10ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcnMkO1xuICB9XG5cbiAgZ2V0IGVycm9yKCk6IElWYWxpZGF0b3Ige1xuICAgIHJldHVybiBfLmZpbmQodGhpcy52YWxpZGF0b3JzJCwgKHY6IElWYWxpZGF0b3IpID0+IHYuaGFzRXJyb3IgKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIGlmICh0aGlzLmNvbnZlcnRUbykge1xuICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvKHRoaXMuY29udHJvbC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlZCQ7XG4gIH1cblxuICBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLnRvdWNoZWQ7XG4gIH1cblxuICBnZXQgZGlydHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5kaXJ0eTtcbiAgfVxuXG59XG4iXX0=