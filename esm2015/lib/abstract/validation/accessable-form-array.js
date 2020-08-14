/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/validation/accessable-form-array.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormArray } from '@angular/forms';
import * as _ from 'underscore';
import { Util } from '../../impl/util/util';
import { ValidatorRequired } from '../../impl/validation/validator-required';
/**
 * @abstract
 * @template TModel
 */
export class AccessableFormArray {
    constructor() {
        this.validators$ = [];
        this.required$ = false;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    initialize(type) {
        this.control = new FormArray([]);
        this.type = type;
        this.entries$ = [];
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    push(entry) {
        /** @type {?} */
        const item = this.generateFormEntry(entry);
        this.control.push(item.control);
        this.entries$.push(item);
        return item;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeAt(index) {
        this.control.removeAt(index);
        this.entries$ = _.reject(this.entries$, (/**
         * @param {?} e
         * @param {?} round
         * @return {?}
         */
        (e, round) => {
            return round === index;
        }));
        /** @type {?} */
        let markAsUsed = false;
        for (const entry of this.entries$) {
            markAsUsed = markAsUsed || entry.dirty;
        }
        markAsUsed ? this.markAsUsed() : this.markAsUnused();
    }
    /**
     * @param {?} validators
     * @return {?}
     */
    validateWith(validators) {
        if (!Util.isDefined(validators)) {
            validators = [];
        }
        if (_.isArray(validators)) {
            this.validators$ = validators;
        }
        this.control.setValidators(_.map(validators, (/**
         * @param {?} v
         * @return {?}
         */
        (v) => v.validator())));
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
     * @return {?}
     */
    clearValidators() {
        this.validators$ = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    generateFormEntry(value) {
        /** @type {?} */
        const validation = new this.type();
        validation.reset(value);
        return validation;
    }
    /**
     * @return {?}
     */
    get errors() {
        return _.compact(_.map(this.validators$, (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            if (e.hasError) {
                return e.error;
            }
            return null;
        })));
    }
    /**
     * @return {?}
     */
    get error() {
        return _.find(this.validators$, (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
            return v.hasError;
        }));
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
    get required() {
        return this.required$;
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
    get touched() {
        return this.control.touched;
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.control.valid;
    }
    /**
     * @return {?}
     */
    get value() {
        /** @type {?} */
        const ret = [];
        for (const entry of this.entries$) {
            ret.push(entry.value);
        }
        return ret;
    }
    /**
     * @return {?}
     */
    get entries() {
        return this.entries$;
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
        for (const entry of this.entries$) {
            entry.enable();
        }
        return this;
    }
    /**
     * @return {?}
     */
    markAsDirty() {
        this.control.markAsDirty();
        for (const entry of this.entries$) {
            entry.markAsDirty();
        }
        return this;
    }
    /**
     * @return {?}
     */
    markAsTouched() {
        this.control.markAsTouched();
        for (const entry of this.entries$) {
            entry.markAsTouched();
        }
        return this;
    }
    /**
     * @return {?}
     */
    markAsUnused() {
        this.control.markAsUntouched();
        this.control.markAsPristine();
        for (const entry of this.entries$) {
            entry.markAsUnused();
        }
        return this;
    }
    /**
     * @return {?}
     */
    markAsUsed() {
        this.control.markAsTouched();
        this.control.markAsDirty();
        for (const entry of this.entries$) {
            entry.markAsUsed();
        }
        return this;
    }
    /**
     * @param {?} models
     * @return {?}
     */
    reset(models) {
        this.entries$ = [];
        this.control.clear();
        if (Util.isDefined(models) && _.isArray(models)) {
            for (const model of models) {
                this.push(model);
            }
        }
        return this;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccessableFormArray.prototype.validators$;
    /** @type {?} */
    AccessableFormArray.prototype.control;
    /** @type {?} */
    AccessableFormArray.prototype.type;
    /**
     * @type {?}
     * @private
     */
    AccessableFormArray.prototype.required$;
    /**
     * @type {?}
     * @private
     */
    AccessableFormArray.prototype.entries$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFDaEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7OztBQUU3RSxNQUFNLE9BQWdCLG1CQUFtQjtJQUF6QztRQUdVLGdCQUFXLEdBQWlCLEVBQUUsQ0FBQztRQUcvQixjQUFTLEdBQVksS0FBSyxDQUFDO0lBbUtyQyxDQUFDOzs7OztJQS9KUSxVQUFVLENBQUMsSUFBNEM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLElBQUksQ0FBQyxLQUFhOztjQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUks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LElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM5QixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRU0sVUFBVTtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLEtBQUssQ0FBQyxNQUFnQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQy9DLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO2dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xCO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FFRjs7Ozs7O0lBdEtDLDBDQUF1Qzs7SUFDdkMsc0NBQTBCOztJQUMxQixtQ0FBb0Q7Ozs7O0lBQ3BELHdDQUFtQzs7Ozs7SUFFbkMsdUNBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFjY2Vzc2FibGVGb3JtQ29udHJvbCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHsgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi8uLi9pbXBsL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBJVmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS12YWxpZGF0b3InO1xuaW1wb3J0IHsgVmFsaWRhdG9yUmVxdWlyZWQgfSBmcm9tICcuLi8uLi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLXJlcXVpcmVkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPlxuICBpbXBsZW1lbnRzIElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8QWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+LCBUTW9kZWxbXT4ge1xuXG4gIHByaXZhdGUgdmFsaWRhdG9ycyQ6IElWYWxpZGF0b3JbXSA9IFtdO1xuICBwdWJsaWMgY29udHJvbDogRm9ybUFycmF5O1xuICBwdWJsaWMgdHlwZTogVHlwZTxJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgYW55Pj47XG4gIHByaXZhdGUgcmVxdWlyZWQkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBlbnRyaWVzJDogSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIFRNb2RlbD5bXTtcblxuICBwdWJsaWMgaW5pdGlhbGl6ZSh0eXBlOiBUeXBlPElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBhbnk+Pik6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbCA9IG5ldyBGb3JtQXJyYXkoW10pO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5lbnRyaWVzJCA9IFtdO1xuICB9XG5cbiAgcHVibGljIHB1c2goZW50cnk6IFRNb2RlbCk6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBUTW9kZWw+IHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZW5lcmF0ZUZvcm1FbnRyeShlbnRyeSk7XG4gICAgdGhpcy5jb250cm9sLnB1c2goaXRlbS5jb250cm9sKTtcbiAgICB0aGlzLmVudHJpZXMkLnB1c2goaXRlbSk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbC5yZW1vdmVBdChpbmRleCk7XG4gICAgdGhpcy5lbnRyaWVzJCA9IF8ucmVqZWN0KHRoaXMuZW50cmllcyQsIChlLCByb3VuZDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gcm91bmQgPT09IGluZGV4O1xuICAgIH0pO1xuICAgIGxldCBtYXJrQXNVc2VkID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBtYXJrQXNVc2VkID0gbWFya0FzVXNlZCB8fCBlbnRyeS5kaXJ0eTtcbiAgICB9XG4gICAgbWFya0FzVXNlZCA/IHRoaXMubWFya0FzVXNlZCgpIDogdGhpcy5tYXJrQXNVbnVzZWQoKTtcbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0ZVdpdGgodmFsaWRhdG9yczogSVZhbGlkYXRvcltdKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHZhbGlkYXRvcnMpKSB7XG4gICAgICB2YWxpZGF0b3JzID0gW107XG4gICAgfVxuICAgIGlmIChfLmlzQXJyYXkodmFsaWRhdG9ycykpIHtcbiAgICAgIHRoaXMudmFsaWRhdG9ycyQgPSB2YWxpZGF0b3JzO1xuICAgIH1cbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsaWRhdG9ycyhfLm1hcCh2YWxpZGF0b3JzLCAodjogSVZhbGlkYXRvcikgPT4gdi52YWxpZGF0b3IoKSkpO1xuICAgIHRoaXMucmVxdWlyZWQkID0gZmFsc2U7XG4gICAgXy5lYWNoKHRoaXMudmFsaWRhdG9ycyQsICh2OiBJVmFsaWRhdG9yKSA9PiB7XG4gICAgICBpZiAodiBpbnN0YW5jZW9mIFZhbGlkYXRvclJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZWQkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGNsZWFyVmFsaWRhdG9ycygpOiB2b2lkIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMkID0gW107XG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVGb3JtRW50cnkodmFsdWU6IGFueSk6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBUTW9kZWw+IHtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gbmV3IHRoaXMudHlwZSgpO1xuICAgIHZhbGlkYXRpb24ucmVzZXQodmFsdWUpO1xuICAgIHJldHVybiB2YWxpZGF0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBlcnJvcnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBfLmNvbXBhY3QoXy5tYXAodGhpcy52YWxpZGF0b3JzJCwgKGU6IElWYWxpZGF0b3IpID0+IHtcbiAgICAgIGlmIChlLmhhc0Vycm9yKSB7XG4gICAgICAgIHJldHVybiBlLmVycm9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSkpO1xuICB9XG5cbiAgcHVibGljIGdldCBlcnJvcigpOiBJVmFsaWRhdG9yIHtcbiAgICByZXR1cm4gXy5maW5kKHRoaXMudmFsaWRhdG9ycyQsICh2KSA9PiB7XG4gICAgICByZXR1cm4gdi5oYXNFcnJvcjtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsaWRhdG9ycygpOiBJVmFsaWRhdG9yW10ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcnMkO1xuICB9XG5cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVpcmVkJDtcbiAgfVxuXG4gIGdldCBkaXJ0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmRpcnR5O1xuICB9XG5cbiAgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC50b3VjaGVkO1xuICB9XG5cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsaWQ7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogVE1vZGVsW10ge1xuICAgIGNvbnN0IHJldDogVE1vZGVsW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIHJldC5wdXNoKGVudHJ5LnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdldCBlbnRyaWVzKCk6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBUTW9kZWw+W10ge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXMkO1xuICB9XG5cbiAgcHVibGljIGRpc2FibGUoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGVuYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5lbmFibGUoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5LmVuYWJsZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNEaXJ0eSgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5lbnRyaWVzJCkge1xuICAgICAgZW50cnkubWFya0FzRGlydHkoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVG91Y2hlZCgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBlbnRyeS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1VudXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5Lm1hcmtBc1VudXNlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVc2VkKCk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XG4gICAgdGhpcy5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5Lm1hcmtBc1VzZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQobW9kZWxzOiBUTW9kZWxbXSk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XG4gICAgdGhpcy5lbnRyaWVzJCA9IFtdO1xuICAgIHRoaXMuY29udHJvbC5jbGVhcigpO1xuICAgIGlmIChVdGlsLmlzRGVmaW5lZChtb2RlbHMpICYmIF8uaXNBcnJheShtb2RlbHMpKSB7XG4gICAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIG1vZGVscykge1xuICAgICAgICB0aGlzLnB1c2gobW9kZWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbiJdfQ==