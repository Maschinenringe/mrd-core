/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/validation/accessable-form-group.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormGroup } from '@angular/forms';
import * as _ from 'underscore';
import { Util } from '../../impl/util/util';
/**
 * @abstract
 * @template TFields, TModel
 */
export class AccessableFormGroup {
    /**
     * @param {?} fields
     * @return {?}
     */
    initialize(fields) {
        this.control = new FormGroup(_.mapObject(fields, (/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            return field.control;
        })));
        this.fields$ = fields;
    }
    /**
     * @return {?}
     */
    markAsUsed() {
        _.each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        (field) => field.markAsUsed()));
        return this;
    }
    /**
     * @return {?}
     */
    markAsUnused() {
        _.each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        (field) => field.markAsUnused()));
        return this;
    }
    /**
     * @return {?}
     */
    markAsDirty() {
        _.each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        (field) => field.markAsDirty()));
        return this;
    }
    /**
     * @return {?}
     */
    markAsTouched() {
        _.each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        (field) => field.markAsTouched()));
        return this;
    }
    /**
     * @param {?} model
     * @return {?}
     */
    reset(model) {
        if (!Util.isDefined(model)) {
            model = (/** @type {?} */ ({}));
        }
        _.each(this.fields$, (/**
         * @param {?} field
         * @param {?} key
         * @return {?}
         */
        (field, key) => field.reset(model[key])));
        return this;
    }
    /**
     * @return {?}
     */
    get fields() {
        return this.fields$;
    }
    /**
     * @return {?}
     */
    get value() {
        /** @type {?} */
        const ret = (/** @type {?} */ ({}));
        _.each(this.fields$, (/**
         * @param {?} field
         * @param {?} key
         * @return {?}
         */
        (field, key) => ret[key] = field.value));
        return ret;
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
    get valid() {
        return this.control.valid;
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
    get enabled() {
        return this.control.enabled;
    }
}
if (false) {
    /** @type {?} */
    AccessableFormGroup.prototype.control;
    /**
     * @type {?}
     * @private
     */
    AccessableFormGroup.prototype.fields$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7OztBQUUxQyxNQUFNLE9BQWdCLG1CQUFtQjs7Ozs7SUFNaEMsVUFBVSxDQUNmLE1BQWU7UUFFZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksU0FBUyxDQUMxQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzVCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVNLFVBQVU7UUFDZixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1FBQ3JELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVNLFlBQVk7UUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRU0sYUFBYTtRQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDO1FBQ3hELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxLQUFLLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixLQUFLLEdBQUcsbUJBQUEsRUFBRSxFQUFVLENBQUM7U0FDdEI7UUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7OztRQUFFLENBQUMsS0FBdUMsRUFBRSxHQUFXLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN4RyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUdELElBQUksS0FBSzs7Y0FDRCxHQUFHLEdBQUcsbUJBQUEsRUFBRSxFQUFVO1FBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7O1FBQUUsQ0FBQyxLQUF1QyxFQUFFLEdBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUN2RyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7Q0FJRjs7O0lBckZDLHNDQUEwQjs7Ozs7SUFDMUIsc0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQge0lBY2Nlc3NhYmxlRm9ybUNvbnRyb2x9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi8uLi9pbXBsL3V0aWwvdXRpbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbCBleHRlbmRzIG9iamVjdD5cbiAgaW1wbGVtZW50cyBJQWNjZXNzYWJsZUZvcm1Db250cm9sPEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsPiwgVE1vZGVsPiB7XG5cbiAgcHVibGljIGNvbnRyb2w6IEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSBmaWVsZHMkOiBURmllbGRzO1xuXG4gIHB1YmxpYyBpbml0aWFsaXplKFxuICAgIGZpZWxkczogVEZpZWxkc1xuICApOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgRm9ybUdyb3VwKFxuICAgICAgXy5tYXBPYmplY3QoZmllbGRzLCAoZmllbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmNvbnRyb2w7XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5maWVsZHMkID0gZmllbGRzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1VzZWQoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcbiAgICBfLmVhY2godGhpcy5maWVsZHMkLCAoZmllbGQpID0+IGZpZWxkLm1hcmtBc1VzZWQoKSApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1VudXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZCkgPT4gZmllbGQubWFya0FzVW51c2VkKCkgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNEaXJ0eSgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZCkgPT4gZmllbGQubWFya0FzRGlydHkoKSApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcbiAgICBfLmVhY2godGhpcy5maWVsZHMkLCAoZmllbGQpID0+IGZpZWxkLm1hcmtBc1RvdWNoZWQoKSApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KG1vZGVsOiBUTW9kZWwpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xuICAgIGlmICghVXRpbC5pc0RlZmluZWQobW9kZWwpKSB7XG4gICAgICBtb2RlbCA9IHt9IGFzIFRNb2RlbDtcbiAgICB9XG4gICAgXy5lYWNoKHRoaXMuZmllbGRzJCwgKGZpZWxkOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgYW55Piwga2V5OiBzdHJpbmcpID0+IGZpZWxkLnJlc2V0KG1vZGVsW2tleV0pKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBmaWVsZHMoKTogVEZpZWxkcyB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRzJDtcbiAgfVxuXG5cbiAgZ2V0IHZhbHVlKCk6IFRNb2RlbCB7XG4gICAgY29uc3QgcmV0ID0ge30gYXMgVE1vZGVsO1xuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZDogSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIGFueT4sIGtleTogc3RyaW5nKSA9PiByZXRba2V5XSA9IGZpZWxkLnZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZ2V0IGRpcnR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuZGlydHk7XG4gIH1cblxuICBnZXQgdmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC52YWxpZDtcbiAgfVxuXG4gIGdldCB0b3VjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudG91Y2hlZDtcbiAgfVxuXG4gIGRpc2FibGUoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZW5hYmxlKCk6IEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsPiB7XG4gICAgdGhpcy5jb250cm9sLmVuYWJsZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuZGlzYWJsZWQ7XG4gIH1cblxuICBnZXQgZW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmVuYWJsZWQ7XG4gIH1cblxuXG5cbn1cbiJdfQ==