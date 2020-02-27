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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7Ozs7O0FBRWhDLE1BQU0sT0FBZ0IsbUJBQW1COzs7OztJQVFoQyxVQUFVLENBQUMsSUFBNEM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLElBQUksQ0FBQyxLQUFhOztjQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTs7Ozs7UUFBRSxDQUFDLENBQUMsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUMzRCxPQUFPLEtBQUssS0FBSyxLQUFLLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7O1lBQ0MsVUFBVSxHQUFHLEtB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QUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FFRjs7O0lBaEhDLHNDQUEwQjs7SUFDMUIsbUNBQW9EOzs7OztJQUVwRCx1Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lBY2Nlc3NhYmxlRm9ybUNvbnRyb2x9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wnO1xyXG5pbXBvcnQge0Zvcm1BcnJheX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1R5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPlxyXG4gIGltcGxlbWVudHMgSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4sIFRNb2RlbFtdPiB7XHJcblxyXG4gIHB1YmxpYyBjb250cm9sOiBGb3JtQXJyYXk7XHJcbiAgcHVibGljIHR5cGU6IFR5cGU8SUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIGFueT4+O1xyXG5cclxuICBwcml2YXRlIGVudHJpZXMkOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgVE1vZGVsPltdO1xyXG5cclxuICBwdWJsaWMgaW5pdGlhbGl6ZSh0eXBlOiBUeXBlPElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBhbnk+Pik6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sID0gbmV3IEZvcm1BcnJheShbXSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy5lbnRyaWVzJCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHB1c2goZW50cnk6IFRNb2RlbCk6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBUTW9kZWw+IHtcclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdlbmVyYXRlRm9ybUVudHJ5KGVudHJ5KTtcclxuICAgIHRoaXMuY29udHJvbC5wdXNoKGl0ZW0uY29udHJvbCk7XHJcbiAgICB0aGlzLmVudHJpZXMkLnB1c2goaXRlbSk7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRyb2wucmVtb3ZlQXQoaW5kZXgpO1xyXG4gICAgdGhpcy5lbnRyaWVzJCA9IF8ucmVqZWN0KHRoaXMuZW50cmllcyQsIChlLCByb3VuZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHJldHVybiByb3VuZCA9PT0gaW5kZXg7XHJcbiAgICB9KTtcclxuICAgIGxldCBtYXJrQXNVc2VkID0gZmFsc2U7XHJcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcclxuICAgICAgbWFya0FzVXNlZCA9IG1hcmtBc1VzZWQgfHwgZW50cnkuZGlydHk7XHJcbiAgICB9XHJcbiAgICBtYXJrQXNVc2VkID8gdGhpcy5tYXJrQXNVc2VkKCkgOiB0aGlzLm1hcmtBc1VudXNlZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlRm9ybUVudHJ5KHZhbHVlOiBhbnkpOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgVE1vZGVsPiB7XHJcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gbmV3IHRoaXMudHlwZSgpO1xyXG4gICAgdmFsaWRhdGlvbi5yZXNldCh2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsaWRhdGlvbjtcclxuICB9XHJcblxyXG4gIGdldCBkaXJ0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuZGlydHk7XHJcbiAgfVxyXG5cclxuICBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudG91Y2hlZDtcclxuICB9XHJcblxyXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsaWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKTogVE1vZGVsW10ge1xyXG4gICAgY29uc3QgcmV0OiBUTW9kZWxbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XHJcbiAgICAgIHJldC5wdXNoKGVudHJ5LnZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xyXG4gICAgdGhpcy5jb250cm9sLmRpc2FibGUoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVuYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xyXG4gICAgdGhpcy5jb250cm9sLmVuYWJsZSgpO1xyXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XHJcbiAgICAgIGVudHJ5LmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWFya0FzRGlydHkoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcclxuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XHJcbiAgICAgIGVudHJ5Lm1hcmtBc0RpcnR5KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYXJrQXNUb3VjaGVkKCk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XHJcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XHJcbiAgICAgIGVudHJ5Lm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1hcmtBc1VudXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xyXG4gICAgdGhpcy5jb250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gICAgdGhpcy5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcclxuICAgICAgZW50cnkubWFya0FzVW51c2VkKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYXJrQXNVc2VkKCk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XHJcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5jb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcclxuICAgICAgZW50cnkubWFya0FzVXNlZCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXQobW9kZWxzOiBUTW9kZWxbXSk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XHJcbiAgICB0aGlzLmVudHJpZXMkID0gW107XHJcbiAgICB0aGlzLmNvbnRyb2wucmVzZXQoW10pO1xyXG4gICAgZm9yIChjb25zdCBtb2RlbCBvZiBtb2RlbHMpIHtcclxuICAgICAgdGhpcy5wdXNoKG1vZGVsKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbn1cclxuIl19