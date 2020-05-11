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
        return undefined;
    }
    /**
     * @return {?}
     */
    enable() {
        return undefined;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7OztBQUUxQyxNQUFNLE9BQWdCLG1CQUFtQjs7Ozs7SUFNaEMsVUFBVSxDQUNmLE1BQWU7UUFFZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksU0FBUyxDQUMxQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzVCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVNLFVBQVU7UUFDZixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1FBQ3JELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVNLFlBQVk7UUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRU0sYUFBYTtRQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDO1FBQ3hELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxLQUFLLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixLQUFLLEdBQUcsbUJBQUEsRUFBRSxFQUFVLENBQUM7U0FDdEI7UUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7OztRQUFFLENBQUMsS0FBdUMsRUFBRSxHQUFXLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN4RyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUdELElBQUksS0FBSzs7Y0FDRCxHQUFHLEdBQUcsbUJBQUEsRUFBRSxFQUFVO1FBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7O1FBQUUsQ0FBQyxLQUF1QyxFQUFFLEdBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUN2RyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBUUY7OztJQS9FQyxzQ0FBMEI7Ozs7O0lBQzFCLHNDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHtJQWNjZXNzYWJsZUZvcm1Db250cm9sfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLWFjY2Vzc2FibGUtZm9ybS1jb250cm9sJztcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vLi4vaW1wbC91dGlsL3V0aWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWwgZXh0ZW5kcyBvYmplY3Q+XG4gIGltcGxlbWVudHMgSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4sIFRNb2RlbD4ge1xuXG4gIHB1YmxpYyBjb250cm9sOiBGb3JtR3JvdXA7XG4gIHByaXZhdGUgZmllbGRzJDogVEZpZWxkcztcblxuICBwdWJsaWMgaW5pdGlhbGl6ZShcbiAgICBmaWVsZHM6IFRGaWVsZHNcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9sID0gbmV3IEZvcm1Hcm91cChcbiAgICAgIF8ubWFwT2JqZWN0KGZpZWxkcywgKGZpZWxkKSA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5jb250cm9sO1xuICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuZmllbGRzJCA9IGZpZWxkcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVc2VkKCk6IEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsPiB7XG4gICAgXy5lYWNoKHRoaXMuZmllbGRzJCwgKGZpZWxkKSA9PiBmaWVsZC5tYXJrQXNVc2VkKCkgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVbnVzZWQoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcbiAgICBfLmVhY2godGhpcy5maWVsZHMkLCAoZmllbGQpID0+IGZpZWxkLm1hcmtBc1VudXNlZCgpICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzRGlydHkoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcbiAgICBfLmVhY2godGhpcy5maWVsZHMkLCAoZmllbGQpID0+IGZpZWxkLm1hcmtBc0RpcnR5KCkgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNUb3VjaGVkKCk6IEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsPiB7XG4gICAgXy5lYWNoKHRoaXMuZmllbGRzJCwgKGZpZWxkKSA9PiBmaWVsZC5tYXJrQXNUb3VjaGVkKCkgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyByZXNldChtb2RlbDogVE1vZGVsKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKG1vZGVsKSkge1xuICAgICAgbW9kZWwgPSB7fSBhcyBUTW9kZWw7XG4gICAgfVxuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZDogSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIGFueT4sIGtleTogc3RyaW5nKSA9PiBmaWVsZC5yZXNldChtb2RlbFtrZXldKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgZmllbGRzKCk6IFRGaWVsZHMge1xuICAgIHJldHVybiB0aGlzLmZpZWxkcyQ7XG4gIH1cblxuXG4gIGdldCB2YWx1ZSgpOiBUTW9kZWwge1xuICAgIGNvbnN0IHJldCA9IHt9IGFzIFRNb2RlbDtcbiAgICBfLmVhY2godGhpcy5maWVsZHMkLCAoZmllbGQ6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBhbnk+LCBrZXk6IHN0cmluZykgPT4gcmV0W2tleV0gPSBmaWVsZC52YWx1ZSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdldCBkaXJ0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmRpcnR5O1xuICB9XG5cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsaWQ7XG4gIH1cblxuICBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLnRvdWNoZWQ7XG4gIH1cblxuICBkaXNhYmxlKCk6IEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsPiB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGVuYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuXG5cblxuXG5cblxufVxuIl19