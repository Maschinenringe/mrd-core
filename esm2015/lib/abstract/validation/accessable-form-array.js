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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7Ozs7O0FBRWhDLE1BQU0sT0FBZ0IsbUJBQW1COzs7OztJQVFoQyxVQUFVLENBQUMsSUFBNEM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLElBQUksQ0FBQyxLQUFhOztjQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTs7Ozs7UUFBRSxDQUFDLENBQUMsRUFBRSxLQUFhLEVBQUUsRUFBRTtZQUMzRCxPQUFPLEtBQUssS0FBSyxLQUFLLENBQUM7UUFDekIsQ0FBQyxFQUFDLENBQUM7O1lBQ0MsVUFBVSxHQUFHLEtB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UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUVGOzs7SUFwSEMsc0NBQTBCOztJQUMxQixtQ0FBb0Q7Ozs7O0lBRXBELHVDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUFjY2Vzc2FibGVGb3JtQ29udHJvbH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS1hY2Nlc3NhYmxlLWZvcm0tY29udHJvbCc7XG5pbXBvcnQge0Zvcm1BcnJheX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD5cbiAgaW1wbGVtZW50cyBJQWNjZXNzYWJsZUZvcm1Db250cm9sPEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiwgVE1vZGVsW10+IHtcblxuICBwdWJsaWMgY29udHJvbDogRm9ybUFycmF5O1xuICBwdWJsaWMgdHlwZTogVHlwZTxJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgYW55Pj47XG5cbiAgcHJpdmF0ZSBlbnRyaWVzJDogSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIFRNb2RlbD5bXTtcblxuICBwdWJsaWMgaW5pdGlhbGl6ZSh0eXBlOiBUeXBlPElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBhbnk+Pik6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbCA9IG5ldyBGb3JtQXJyYXkoW10pO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5lbnRyaWVzJCA9IFtdO1xuICB9XG5cbiAgcHVibGljIHB1c2goZW50cnk6IFRNb2RlbCk6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBUTW9kZWw+IHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZW5lcmF0ZUZvcm1FbnRyeShlbnRyeSk7XG4gICAgdGhpcy5jb250cm9sLnB1c2goaXRlbS5jb250cm9sKTtcbiAgICB0aGlzLmVudHJpZXMkLnB1c2goaXRlbSk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbC5yZW1vdmVBdChpbmRleCk7XG4gICAgdGhpcy5lbnRyaWVzJCA9IF8ucmVqZWN0KHRoaXMuZW50cmllcyQsIChlLCByb3VuZDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gcm91bmQgPT09IGluZGV4O1xuICAgIH0pO1xuICAgIGxldCBtYXJrQXNVc2VkID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBtYXJrQXNVc2VkID0gbWFya0FzVXNlZCB8fCBlbnRyeS5kaXJ0eTtcbiAgICB9XG4gICAgbWFya0FzVXNlZCA/IHRoaXMubWFya0FzVXNlZCgpIDogdGhpcy5tYXJrQXNVbnVzZWQoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZW5lcmF0ZUZvcm1FbnRyeSh2YWx1ZTogYW55KTogSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIFRNb2RlbD4ge1xuICAgIGNvbnN0IHZhbGlkYXRpb24gPSBuZXcgdGhpcy50eXBlKCk7XG4gICAgdmFsaWRhdGlvbi5yZXNldCh2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbGlkYXRpb247XG4gIH1cblxuICBnZXQgZGlydHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5kaXJ0eTtcbiAgfVxuXG4gIGdldCB0b3VjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudG91Y2hlZDtcbiAgfVxuXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbGlkO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IFRNb2RlbFtdIHtcbiAgICBjb25zdCByZXQ6IFRNb2RlbFtdID0gW107XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICByZXQucHVzaChlbnRyeS52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBnZXQgZW50cmllcygpOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgVE1vZGVsPltdIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzJDtcbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlKCk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XG4gICAgdGhpcy5jb250cm9sLmRpc2FibGUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBlbmFibGUoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBlbnRyeS5lbmFibGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzRGlydHkoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5Lm1hcmtBc0RpcnR5KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5lbnRyaWVzJCkge1xuICAgICAgZW50cnkubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVbnVzZWQoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XG4gICAgdGhpcy5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBlbnRyeS5tYXJrQXNVbnVzZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5jb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBlbnRyeS5tYXJrQXNVc2VkKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KG1vZGVsczogVE1vZGVsW10pOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuZW50cmllcyQgPSBbXTtcbiAgICB0aGlzLmNvbnRyb2wucmVzZXQoW10pO1xuICAgIGZvciAoY29uc3QgbW9kZWwgb2YgbW9kZWxzKSB7XG4gICAgICB0aGlzLnB1c2gobW9kZWwpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG4iXX0=