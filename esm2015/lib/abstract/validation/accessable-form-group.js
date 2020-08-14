/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/validation/accessable-form-group.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FormGroup } from '@angular/forms';
import * as _ from 'underscore';
import { Util } from '../../impl/util/util';
import { Subject } from 'rxjs';
/**
 * @abstract
 * @template TFields, TModel
 */
export class AccessableFormGroup {
    constructor() {
        this.changed$ = new Subject();
    }
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
     * @param {?=} propagateChanges
     * @return {?}
     */
    reset(model, propagateChanges = true) {
        if (!Util.isDefined(model)) {
            model = (/** @type {?} */ ({}));
        }
        _.each(this.fields$, (/**
         * @param {?} field
         * @param {?} key
         * @return {?}
         */
        (field, key) => field.reset(model[key])));
        if (propagateChanges) {
            this.changed$.next();
        }
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
    /**
     * @return {?}
     */
    get changed() {
        return this.changed$.asObservable();
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
    /**
     * @type {?}
     * @private
     */
    AccessableFormGroup.prototype.changed$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7O0FBRTNDLE1BQU0sT0FBZ0IsbUJBQW1CO0lBQXpDO1FBS1UsYUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBMEZqRCxDQUFDOzs7OztJQXhGUSxVQUFVLENBQ2YsTUFBZTtRQUVmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxTQUFTLENBQzFCLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTTs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDNUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDOzs7O0lBRU0sVUFBVTtRQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7UUFDckQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVNLFdBQVc7UUFDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztRQUN0RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFTSxhQUFhO1FBQ2xCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFTSxLQUFLLENBQUMsS0FBYSxFQUFFLG1CQUE0QixJQUFJO1FBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLEtBQUssR0FBRyxtQkFBQSxFQUFFLEVBQVUsQ0FBQztTQUN0QjtRQUNELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7O1FBQUUsQ0FBQyxLQUF1QyxFQUFFLEdBQVcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBRXhHLElBQUksZ0JBQWdCLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBR0QsSUFBSSxLQUFLOztjQUNELEdBQUcsR0FBRyxtQkFBQSxFQUFFLEVBQVU7UUFDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7Ozs7UUFBRSxDQUFDLEtBQXVDLEVBQUUsR0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBQyxDQUFDO1FBQ3ZHLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0NBRUY7OztJQTVGQyxzQ0FBMEI7Ozs7O0lBQzFCLHNDQUF5Qjs7Ozs7SUFDekIsdUNBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQge0lBY2Nlc3NhYmxlRm9ybUNvbnRyb2x9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi8uLi9pbXBsL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbCBleHRlbmRzIG9iamVjdD5cbiAgaW1wbGVtZW50cyBJQWNjZXNzYWJsZUZvcm1Db250cm9sPEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsPiwgVE1vZGVsPiB7XG5cbiAgcHVibGljIGNvbnRyb2w6IEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSBmaWVsZHMkOiBURmllbGRzO1xuICBwcml2YXRlIGNoYW5nZWQkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBpbml0aWFsaXplKFxuICAgIGZpZWxkczogVEZpZWxkc1xuICApOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgRm9ybUdyb3VwKFxuICAgICAgXy5tYXBPYmplY3QoZmllbGRzLCAoZmllbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmNvbnRyb2w7XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5maWVsZHMkID0gZmllbGRzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1VzZWQoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcbiAgICBfLmVhY2godGhpcy5maWVsZHMkLCAoZmllbGQpID0+IGZpZWxkLm1hcmtBc1VzZWQoKSApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1VudXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZCkgPT4gZmllbGQubWFya0FzVW51c2VkKCkgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNEaXJ0eSgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZCkgPT4gZmllbGQubWFya0FzRGlydHkoKSApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcbiAgICBfLmVhY2godGhpcy5maWVsZHMkLCAoZmllbGQpID0+IGZpZWxkLm1hcmtBc1RvdWNoZWQoKSApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KG1vZGVsOiBUTW9kZWwsIHByb3BhZ2F0ZUNoYW5nZXM6IGJvb2xlYW4gPSB0cnVlKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKG1vZGVsKSkge1xuICAgICAgbW9kZWwgPSB7fSBhcyBUTW9kZWw7XG4gICAgfVxuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZDogSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIGFueT4sIGtleTogc3RyaW5nKSA9PiBmaWVsZC5yZXNldChtb2RlbFtrZXldKSk7XG5cbiAgICBpZiAocHJvcGFnYXRlQ2hhbmdlcykge1xuICAgICAgdGhpcy5jaGFuZ2VkJC5uZXh0KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZ2V0IGZpZWxkcygpOiBURmllbGRzIHtcbiAgICByZXR1cm4gdGhpcy5maWVsZHMkO1xuICB9XG5cblxuICBnZXQgdmFsdWUoKTogVE1vZGVsIHtcbiAgICBjb25zdCByZXQgPSB7fSBhcyBUTW9kZWw7XG4gICAgXy5lYWNoKHRoaXMuZmllbGRzJCwgKGZpZWxkOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgYW55Piwga2V5OiBzdHJpbmcpID0+IHJldFtrZXldID0gZmllbGQudmFsdWUpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBnZXQgZGlydHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5kaXJ0eTtcbiAgfVxuXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbGlkO1xuICB9XG5cbiAgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC50b3VjaGVkO1xuICB9XG5cbiAgZGlzYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5kaXNhYmxlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBlbmFibGUoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5kaXNhYmxlZDtcbiAgfVxuXG4gIGdldCBlbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuZW5hYmxlZDtcbiAgfVxuXG4gIGdldCBjaGFuZ2VkKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZWQkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbn1cbiJdfQ==