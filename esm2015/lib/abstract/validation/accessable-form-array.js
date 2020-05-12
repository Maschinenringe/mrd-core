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
        this.control.reset([]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFDaEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7OztBQUU3RSxNQUFNLE9BQWdCLG1CQUFtQjtJQUF6QztRQUdVLGdCQUFXLEdBQWlCLEVBQUUsQ0FBQztRQUcvQixjQUFTLEdBQVksS0FBSyxDQUFDO0lBbUtyQyxDQUFDOzs7OztJQS9KUSxVQUFVLENBQUMsSUFBNEM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLElBQUksQ0FBQyxLQUFhOztjQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUks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LElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM5QixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRU0sVUFBVTtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLEtBQUssQ0FBQyxNQUFnQjtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvQyxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtnQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsQjtTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBRUY7Ozs7OztJQXRLQywwQ0FBdUM7O0lBQ3ZDLHNDQUEwQjs7SUFDMUIsbUNBQW9EOzs7OztJQUNwRCx3Q0FBbUM7Ozs7O0lBRW5DLHVDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLWFjY2Vzc2FibGUtZm9ybS1jb250cm9sJztcbmltcG9ydCB7IEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vLi4vaW1wbC91dGlsL3V0aWwnO1xuaW1wb3J0IHsgSVZhbGlkYXRvciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcbmltcG9ydCB7IFZhbGlkYXRvclJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1yZXF1aXJlZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD5cbiAgaW1wbGVtZW50cyBJQWNjZXNzYWJsZUZvcm1Db250cm9sPEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiwgVE1vZGVsW10+IHtcblxuICBwcml2YXRlIHZhbGlkYXRvcnMkOiBJVmFsaWRhdG9yW10gPSBbXTtcbiAgcHVibGljIGNvbnRyb2w6IEZvcm1BcnJheTtcbiAgcHVibGljIHR5cGU6IFR5cGU8SUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIGFueT4+O1xuICBwcml2YXRlIHJlcXVpcmVkJDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZW50cmllcyQ6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBUTW9kZWw+W107XG5cbiAgcHVibGljIGluaXRpYWxpemUodHlwZTogVHlwZTxJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgYW55Pj4pOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgRm9ybUFycmF5KFtdKTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZW50cmllcyQgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBwdXNoKGVudHJ5OiBUTW9kZWwpOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgVE1vZGVsPiB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2VuZXJhdGVGb3JtRW50cnkoZW50cnkpO1xuICAgIHRoaXMuY29udHJvbC5wdXNoKGl0ZW0uY29udHJvbCk7XG4gICAgdGhpcy5lbnRyaWVzJC5wdXNoKGl0ZW0pO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2wucmVtb3ZlQXQoaW5kZXgpO1xuICAgIHRoaXMuZW50cmllcyQgPSBfLnJlamVjdCh0aGlzLmVudHJpZXMkLCAoZSwgcm91bmQ6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIHJvdW5kID09PSBpbmRleDtcbiAgICB9KTtcbiAgICBsZXQgbWFya0FzVXNlZCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5lbnRyaWVzJCkge1xuICAgICAgbWFya0FzVXNlZCA9IG1hcmtBc1VzZWQgfHwgZW50cnkuZGlydHk7XG4gICAgfVxuICAgIG1hcmtBc1VzZWQgPyB0aGlzLm1hcmtBc1VzZWQoKSA6IHRoaXMubWFya0FzVW51c2VkKCk7XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGVXaXRoKHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXSk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh2YWxpZGF0b3JzKSkge1xuICAgICAgdmFsaWRhdG9ycyA9IFtdO1xuICAgIH1cbiAgICBpZiAoXy5pc0FycmF5KHZhbGlkYXRvcnMpKSB7XG4gICAgICB0aGlzLnZhbGlkYXRvcnMkID0gdmFsaWRhdG9ycztcbiAgICB9XG4gICAgdGhpcy5jb250cm9sLnNldFZhbGlkYXRvcnMoXy5tYXAodmFsaWRhdG9ycywgKHY6IElWYWxpZGF0b3IpID0+IHYudmFsaWRhdG9yKCkpKTtcbiAgICB0aGlzLnJlcXVpcmVkJCA9IGZhbHNlO1xuICAgIF8uZWFjaCh0aGlzLnZhbGlkYXRvcnMkLCAodjogSVZhbGlkYXRvcikgPT4ge1xuICAgICAgaWYgKHYgaW5zdGFuY2VvZiBWYWxpZGF0b3JSZXF1aXJlZCkge1xuICAgICAgICB0aGlzLnJlcXVpcmVkJCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclZhbGlkYXRvcnMoKTogdm9pZCB7XG4gICAgdGhpcy52YWxpZGF0b3JzJCA9IFtdO1xuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlRm9ybUVudHJ5KHZhbHVlOiBhbnkpOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgVE1vZGVsPiB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IG5ldyB0aGlzLnR5cGUoKTtcbiAgICB2YWxpZGF0aW9uLnJlc2V0KHZhbHVlKTtcbiAgICByZXR1cm4gdmFsaWRhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXJyb3JzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gXy5jb21wYWN0KF8ubWFwKHRoaXMudmFsaWRhdG9ycyQsIChlOiBJVmFsaWRhdG9yKSA9PiB7XG4gICAgICBpZiAoZS5oYXNFcnJvcikge1xuICAgICAgICByZXR1cm4gZS5lcnJvcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXJyb3IoKTogSVZhbGlkYXRvciB7XG4gICAgcmV0dXJuIF8uZmluZCh0aGlzLnZhbGlkYXRvcnMkLCAodikgPT4ge1xuICAgICAgcmV0dXJuIHYuaGFzRXJyb3I7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZhbGlkYXRvcnMoKTogSVZhbGlkYXRvcltdIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3JzJDtcbiAgfVxuXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlZCQ7XG4gIH1cblxuICBnZXQgZGlydHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5kaXJ0eTtcbiAgfVxuXG4gIGdldCB0b3VjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudG91Y2hlZDtcbiAgfVxuXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbGlkO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IFRNb2RlbFtdIHtcbiAgICBjb25zdCByZXQ6IFRNb2RlbFtdID0gW107XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICByZXQucHVzaChlbnRyeS52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBnZXQgZW50cmllcygpOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgVE1vZGVsPltdIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzJDtcbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlKCk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XG4gICAgdGhpcy5jb250cm9sLmRpc2FibGUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBlbmFibGUoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBlbnRyeS5lbmFibGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzRGlydHkoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5Lm1hcmtBc0RpcnR5KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5lbnRyaWVzJCkge1xuICAgICAgZW50cnkubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVbnVzZWQoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XG4gICAgdGhpcy5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBlbnRyeS5tYXJrQXNVbnVzZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5jb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBlbnRyeS5tYXJrQXNVc2VkKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KG1vZGVsczogVE1vZGVsW10pOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuZW50cmllcyQgPSBbXTtcbiAgICB0aGlzLmNvbnRyb2wucmVzZXQoW10pO1xuICAgIGlmIChVdGlsLmlzRGVmaW5lZChtb2RlbHMpICYmIF8uaXNBcnJheShtb2RlbHMpKSB7XG4gICAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIG1vZGVscykge1xuICAgICAgICB0aGlzLnB1c2gobW9kZWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbiJdfQ==