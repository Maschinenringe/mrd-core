/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/validation/accessable-form-array.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormArray } from '@angular/forms';
import * as _ from 'underscore';
/**
 * @abstract
 * @template TModel
 */
export class AccessableFormArray {
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
        for (const model of models) {
            this.push(model);
        }
        return this;
    }
}
if (false) {
    /** @type {?} */
    AccessableFormArray.prototype.control;
    /** @type {?} */
    AccessableFormArray.prototype.type;
    /**
     * @type {?}
     * @private
     */
    AccessableFormArray.prototype.entries$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7Ozs7O0FBRWhDLE1BQU0sT0FBZ0IsbUJBQW1COzs7OztJQVFoQyxVQUFVLENBQUMsSUFBNEM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLElBQUksQ0FBQyxLQUFhOztjQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTs7Ozs7UUFBRSxDQUFDLENBQUMsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUMzRCxPQUFPLEtBQUssS0FBSyxLQUFLLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7O1lBQ0MsVUFBVSxHQUFHLEtB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QUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FFRjs7O0lBaEhDLHNDQUEwQjs7SUFDMUIsbUNBQW9EOzs7OztJQUVwRCx1Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lBY2Nlc3NhYmxlRm9ybUNvbnRyb2x9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHtGb3JtQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+XG4gIGltcGxlbWVudHMgSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4sIFRNb2RlbFtdPiB7XG5cbiAgcHVibGljIGNvbnRyb2w6IEZvcm1BcnJheTtcbiAgcHVibGljIHR5cGU6IFR5cGU8SUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIGFueT4+O1xuXG4gIHByaXZhdGUgZW50cmllcyQ6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBUTW9kZWw+W107XG5cbiAgcHVibGljIGluaXRpYWxpemUodHlwZTogVHlwZTxJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgYW55Pj4pOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgRm9ybUFycmF5KFtdKTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZW50cmllcyQgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBwdXNoKGVudHJ5OiBUTW9kZWwpOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgVE1vZGVsPiB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2VuZXJhdGVGb3JtRW50cnkoZW50cnkpO1xuICAgIHRoaXMuY29udHJvbC5wdXNoKGl0ZW0uY29udHJvbCk7XG4gICAgdGhpcy5lbnRyaWVzJC5wdXNoKGl0ZW0pO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2wucmVtb3ZlQXQoaW5kZXgpO1xuICAgIHRoaXMuZW50cmllcyQgPSBfLnJlamVjdCh0aGlzLmVudHJpZXMkLCAoZSwgcm91bmQ6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIHJvdW5kID09PSBpbmRleDtcbiAgICB9KTtcbiAgICBsZXQgbWFya0FzVXNlZCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5lbnRyaWVzJCkge1xuICAgICAgbWFya0FzVXNlZCA9IG1hcmtBc1VzZWQgfHwgZW50cnkuZGlydHk7XG4gICAgfVxuICAgIG1hcmtBc1VzZWQgPyB0aGlzLm1hcmtBc1VzZWQoKSA6IHRoaXMubWFya0FzVW51c2VkKCk7XG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVGb3JtRW50cnkodmFsdWU6IGFueSk6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBUTW9kZWw+IHtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gbmV3IHRoaXMudHlwZSgpO1xuICAgIHZhbGlkYXRpb24ucmVzZXQodmFsdWUpO1xuICAgIHJldHVybiB2YWxpZGF0aW9uO1xuICB9XG5cbiAgZ2V0IGRpcnR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuZGlydHk7XG4gIH1cblxuICBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLnRvdWNoZWQ7XG4gIH1cblxuICBnZXQgdmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC52YWxpZDtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBUTW9kZWxbXSB7XG4gICAgY29uc3QgcmV0OiBUTW9kZWxbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5lbnRyaWVzJCkge1xuICAgICAgcmV0LnB1c2goZW50cnkudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHVibGljIGRpc2FibGUoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGVuYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5lbmFibGUoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5LmVuYWJsZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNEaXJ0eSgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5lbnRyaWVzJCkge1xuICAgICAgZW50cnkubWFya0FzRGlydHkoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVG91Y2hlZCgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBlbnRyeS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1VudXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5Lm1hcmtBc1VudXNlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVc2VkKCk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XG4gICAgdGhpcy5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5Lm1hcmtBc1VzZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQobW9kZWxzOiBUTW9kZWxbXSk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XG4gICAgdGhpcy5lbnRyaWVzJCA9IFtdO1xuICAgIHRoaXMuY29udHJvbC5yZXNldChbXSk7XG4gICAgZm9yIChjb25zdCBtb2RlbCBvZiBtb2RlbHMpIHtcbiAgICAgIHRoaXMucHVzaChtb2RlbCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbiJdfQ==