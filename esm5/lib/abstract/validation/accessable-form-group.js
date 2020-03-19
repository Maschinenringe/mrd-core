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
var /**
 * @abstract
 * @template TFields, TModel
 */
AccessableFormGroup = /** @class */ (function () {
    function AccessableFormGroup() {
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    AccessableFormGroup.prototype.initialize = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        this.control = new FormGroup(_.mapObject(fields, (/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            return field.control;
        })));
        this.fields$ = fields;
    };
    /**
     * @return {?}
     */
    AccessableFormGroup.prototype.markAsUsed = /**
     * @return {?}
     */
    function () {
        _.each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return field.markAsUsed(); }));
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormGroup.prototype.markAsUnused = /**
     * @return {?}
     */
    function () {
        _.each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return field.markAsUnused(); }));
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormGroup.prototype.markAsDirty = /**
     * @return {?}
     */
    function () {
        _.each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return field.markAsDirty(); }));
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormGroup.prototype.markAsTouched = /**
     * @return {?}
     */
    function () {
        _.each(this.fields$, (/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return field.markAsTouched(); }));
        return this;
    };
    /**
     * @param {?} model
     * @return {?}
     */
    AccessableFormGroup.prototype.reset = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        if (!Util.isDefined(model)) {
            model = (/** @type {?} */ ({}));
        }
        _.each(this.fields$, (/**
         * @param {?} field
         * @param {?} key
         * @return {?}
         */
        function (field, key) { return field.reset(model[key]); }));
        return this;
    };
    Object.defineProperty(AccessableFormGroup.prototype, "fields", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fields$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormGroup.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var ret = (/** @type {?} */ ({}));
            _.each(this.fields$, (/**
             * @param {?} field
             * @param {?} key
             * @return {?}
             */
            function (field, key) { return ret[key] = field.value; }));
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormGroup.prototype, "dirty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormGroup.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormGroup.prototype, "touched", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.touched;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AccessableFormGroup.prototype.disable = /**
     * @return {?}
     */
    function () {
        return undefined;
    };
    /**
     * @return {?}
     */
    AccessableFormGroup.prototype.enable = /**
     * @return {?}
     */
    function () {
        return undefined;
    };
    return AccessableFormGroup;
}());
/**
 * @abstract
 * @template TFields, TModel
 */
export { AccessableFormGroup };
if (false) {
    /** @type {?} */
    AccessableFormGroup.prototype.control;
    /**
     * @type {?}
     * @private
     */
    AccessableFormGroup.prototype.fields$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7OztBQUUxQzs7Ozs7SUFBQTtJQWtGQSxDQUFDOzs7OztJQTVFUSx3Q0FBVTs7OztJQUFqQixVQUNFLE1BQWU7UUFFZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksU0FBUyxDQUMxQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7UUFBRSxVQUFDLEtBQUs7WUFDeEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDOzs7O0lBRU0sd0NBQVU7OztJQUFqQjtRQUNFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBbEIsQ0FBa0IsRUFBRSxDQUFDO1FBQ3JELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVNLDBDQUFZOzs7SUFBbkI7UUFDRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQXBCLENBQW9CLEVBQUUsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFTSx5Q0FBVzs7O0lBQWxCO1FBQ0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFuQixDQUFtQixFQUFFLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRU0sMkNBQWE7OztJQUFwQjtRQUNFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBckIsQ0FBcUIsRUFBRSxDQUFDO1FBQ3hELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxtQ0FBSzs7OztJQUFaLFVBQWEsS0FBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixLQUFLLEdBQUcsbUJBQUEsRUFBRSxFQUFVLENBQUM7U0FDdEI7UUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7OztRQUFFLFVBQUMsS0FBdUMsRUFBRSxHQUFXLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUF2QixDQUF1QixFQUFDLENBQUM7UUFDeEcsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsc0JBQUksdUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLHNDQUFLOzs7O1FBQVQ7O2dCQUNRLEdBQUcsR0FBRyxtQkFBQSxFQUFFLEVBQVU7WUFDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7Ozs7WUFBRSxVQUFDLEtBQXVDLEVBQUUsR0FBVyxJQUFLLE9BQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQXRCLENBQXNCLEVBQUMsQ0FBQztZQUN2RyxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzQ0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzlCLENBQUM7OztPQUFBOzs7O0lBRUQscUNBQU87OztJQUFQO1FBQ0UsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELG9DQUFNOzs7SUFBTjtRQUNFLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFRSCwwQkFBQztBQUFELENBQUMsQUFsRkQsSUFrRkM7Ozs7Ozs7O0lBL0VDLHNDQUEwQjs7Ozs7SUFDMUIsc0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQge0lBY2Nlc3NhYmxlRm9ybUNvbnRyb2x9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi8uLi9pbXBsL3V0aWwvdXRpbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbCBleHRlbmRzIG9iamVjdD5cbiAgaW1wbGVtZW50cyBJQWNjZXNzYWJsZUZvcm1Db250cm9sPEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsPiwgVE1vZGVsPiB7XG5cbiAgcHVibGljIGNvbnRyb2w6IEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSBmaWVsZHMkOiBURmllbGRzO1xuXG4gIHB1YmxpYyBpbml0aWFsaXplKFxuICAgIGZpZWxkczogVEZpZWxkc1xuICApOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgRm9ybUdyb3VwKFxuICAgICAgXy5tYXBPYmplY3QoZmllbGRzLCAoZmllbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLmNvbnRyb2w7XG4gICAgICB9KVxuICAgICk7XG4gICAgdGhpcy5maWVsZHMkID0gZmllbGRzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1VzZWQoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcbiAgICBfLmVhY2godGhpcy5maWVsZHMkLCAoZmllbGQpID0+IGZpZWxkLm1hcmtBc1VzZWQoKSApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1VudXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZCkgPT4gZmllbGQubWFya0FzVW51c2VkKCkgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNEaXJ0eSgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZCkgPT4gZmllbGQubWFya0FzRGlydHkoKSApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcbiAgICBfLmVhY2godGhpcy5maWVsZHMkLCAoZmllbGQpID0+IGZpZWxkLm1hcmtBc1RvdWNoZWQoKSApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KG1vZGVsOiBUTW9kZWwpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xuICAgIGlmICghVXRpbC5pc0RlZmluZWQobW9kZWwpKSB7XG4gICAgICBtb2RlbCA9IHt9IGFzIFRNb2RlbDtcbiAgICB9XG4gICAgXy5lYWNoKHRoaXMuZmllbGRzJCwgKGZpZWxkOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgYW55Piwga2V5OiBzdHJpbmcpID0+IGZpZWxkLnJlc2V0KG1vZGVsW2tleV0pKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBmaWVsZHMoKTogVEZpZWxkcyB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRzJDtcbiAgfVxuXG5cbiAgZ2V0IHZhbHVlKCk6IFRNb2RlbCB7XG4gICAgY29uc3QgcmV0ID0ge30gYXMgVE1vZGVsO1xuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZDogSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIGFueT4sIGtleTogc3RyaW5nKSA9PiByZXRba2V5XSA9IGZpZWxkLnZhbHVlKTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZ2V0IGRpcnR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuZGlydHk7XG4gIH1cblxuICBnZXQgdmFsaWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC52YWxpZDtcbiAgfVxuXG4gIGdldCB0b3VjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudG91Y2hlZDtcbiAgfVxuXG4gIGRpc2FibGUoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZW5hYmxlKCk6IEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsPiB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG5cblxuXG5cblxuXG59XG4iXX0=