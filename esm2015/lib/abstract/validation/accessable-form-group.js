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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7OztBQUUxQyxNQUFNLE9BQWdCLG1CQUFtQjs7Ozs7SUFNaEMsVUFBVSxDQUNmLE1BQWU7UUFFZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksU0FBUyxDQUMxQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzVCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVNLFVBQVU7UUFDZixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO1FBQ3JELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVNLFlBQVk7UUFDakIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRU0sYUFBYTtRQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDO1FBQ3hELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxLQUFLLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixLQUFLLEdBQUcsbUJBQUEsRUFBRSxFQUFVLENBQUM7U0FDdEI7UUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7OztRQUFFLENBQUMsS0FBdUMsRUFBRSxHQUFXLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUN4RyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUdELElBQUksS0FBSzs7Y0FDRCxHQUFHLEdBQUcsbUJBQUEsRUFBRSxFQUFVO1FBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7O1FBQUUsQ0FBQyxLQUF1QyxFQUFFLEdBQVcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUN2RyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBUUY7OztJQS9FQyxzQ0FBMEI7Ozs7O0lBQzFCLHNDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCB7SUFjY2Vzc2FibGVGb3JtQ29udHJvbH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS1hY2Nlc3NhYmxlLWZvcm0tY29udHJvbCc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vLi4vaW1wbC91dGlsL3V0aWwnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsIGV4dGVuZHMgb2JqZWN0PlxyXG4gIGltcGxlbWVudHMgSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4sIFRNb2RlbD4ge1xyXG5cclxuICBwdWJsaWMgY29udHJvbDogRm9ybUdyb3VwO1xyXG4gIHByaXZhdGUgZmllbGRzJDogVEZpZWxkcztcclxuXHJcbiAgcHVibGljIGluaXRpYWxpemUoXHJcbiAgICBmaWVsZHM6IFRGaWVsZHNcclxuICApOiB2b2lkIHtcclxuICAgIHRoaXMuY29udHJvbCA9IG5ldyBGb3JtR3JvdXAoXHJcbiAgICAgIF8ubWFwT2JqZWN0KGZpZWxkcywgKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkLmNvbnRyb2w7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgdGhpcy5maWVsZHMkID0gZmllbGRzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1hcmtBc1VzZWQoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcclxuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZCkgPT4gZmllbGQubWFya0FzVXNlZCgpICk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYXJrQXNVbnVzZWQoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcclxuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZCkgPT4gZmllbGQubWFya0FzVW51c2VkKCkgKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1hcmtBc0RpcnR5KCk6IEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsPiB7XHJcbiAgICBfLmVhY2godGhpcy5maWVsZHMkLCAoZmllbGQpID0+IGZpZWxkLm1hcmtBc0RpcnR5KCkgKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcclxuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZCkgPT4gZmllbGQubWFya0FzVG91Y2hlZCgpICk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldChtb2RlbDogVE1vZGVsKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcclxuICAgIGlmICghVXRpbC5pc0RlZmluZWQobW9kZWwpKSB7XHJcbiAgICAgIG1vZGVsID0ge30gYXMgVE1vZGVsO1xyXG4gICAgfVxyXG4gICAgXy5lYWNoKHRoaXMuZmllbGRzJCwgKGZpZWxkOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgYW55Piwga2V5OiBzdHJpbmcpID0+IGZpZWxkLnJlc2V0KG1vZGVsW2tleV0pKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpZWxkcygpOiBURmllbGRzIHtcclxuICAgIHJldHVybiB0aGlzLmZpZWxkcyQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IFRNb2RlbCB7XHJcbiAgICBjb25zdCByZXQgPSB7fSBhcyBUTW9kZWw7XHJcbiAgICBfLmVhY2godGhpcy5maWVsZHMkLCAoZmllbGQ6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBhbnk+LCBrZXk6IHN0cmluZykgPT4gcmV0W2tleV0gPSBmaWVsZC52YWx1ZSk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpcnR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5kaXJ0eTtcclxuICB9XHJcblxyXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsaWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudG91Y2hlZDtcclxuICB9XHJcblxyXG4gIGRpc2FibGUoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBlbmFibGUoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXX0=