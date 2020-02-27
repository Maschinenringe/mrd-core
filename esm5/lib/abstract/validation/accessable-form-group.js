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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7OztBQUUxQzs7Ozs7SUFBQTtJQWtGQSxDQUFDOzs7OztJQTVFUSx3Q0FBVTs7OztJQUFqQixVQUNFLE1BQWU7UUFFZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksU0FBUyxDQUMxQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7UUFBRSxVQUFDLEtBQUs7WUFDeEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDOzs7O0lBRU0sd0NBQVU7OztJQUFqQjtRQUNFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBbEIsQ0FBa0IsRUFBRSxDQUFDO1FBQ3JELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVNLDBDQUFZOzs7SUFBbkI7UUFDRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQXBCLENBQW9CLEVBQUUsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFTSx5Q0FBVzs7O0lBQWxCO1FBQ0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7OztRQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFuQixDQUFtQixFQUFFLENBQUM7UUFDdEQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBRU0sMkNBQWE7OztJQUFwQjtRQUNFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBckIsQ0FBcUIsRUFBRSxDQUFDO1FBQ3hELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxtQ0FBSzs7OztJQUFaLFVBQWEsS0FBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixLQUFLLEdBQUcsbUJBQUEsRUFBRSxFQUFVLENBQUM7U0FDdEI7UUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7OztRQUFFLFVBQUMsS0FBdUMsRUFBRSxHQUFXLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUF2QixDQUF1QixFQUFDLENBQUM7UUFDeEcsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsc0JBQUksdUNBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLHNDQUFLOzs7O1FBQVQ7O2dCQUNRLEdBQUcsR0FBRyxtQkFBQSxFQUFFLEVBQVU7WUFDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTzs7Ozs7WUFBRSxVQUFDLEtBQXVDLEVBQUUsR0FBVyxJQUFLLE9BQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQXRCLENBQXNCLEVBQUMsQ0FBQztZQUN2RyxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUM7OztPQUFBO0lBRUQsc0JBQUksc0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxzQ0FBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzlCLENBQUM7OztPQUFBOzs7O0lBRUQscUNBQU87OztJQUFQO1FBQ0UsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELG9DQUFNOzs7SUFBTjtRQUNFLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFRSCwwQkFBQztBQUFELENBQUMsQUFsRkQsSUFrRkM7Ozs7Ozs7O0lBL0VDLHNDQUEwQjs7Ozs7SUFDMUIsc0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHtJQWNjZXNzYWJsZUZvcm1Db250cm9sfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLWFjY2Vzc2FibGUtZm9ybS1jb250cm9sJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi8uLi9pbXBsL3V0aWwvdXRpbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWwgZXh0ZW5kcyBvYmplY3Q+XHJcbiAgaW1wbGVtZW50cyBJQWNjZXNzYWJsZUZvcm1Db250cm9sPEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsPiwgVE1vZGVsPiB7XHJcblxyXG4gIHB1YmxpYyBjb250cm9sOiBGb3JtR3JvdXA7XHJcbiAgcHJpdmF0ZSBmaWVsZHMkOiBURmllbGRzO1xyXG5cclxuICBwdWJsaWMgaW5pdGlhbGl6ZShcclxuICAgIGZpZWxkczogVEZpZWxkc1xyXG4gICk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sID0gbmV3IEZvcm1Hcm91cChcclxuICAgICAgXy5tYXBPYmplY3QoZmllbGRzLCAoZmllbGQpID0+IHtcclxuICAgICAgICByZXR1cm4gZmllbGQuY29udHJvbDtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICB0aGlzLmZpZWxkcyQgPSBmaWVsZHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWFya0FzVXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xyXG4gICAgXy5lYWNoKHRoaXMuZmllbGRzJCwgKGZpZWxkKSA9PiBmaWVsZC5tYXJrQXNVc2VkKCkgKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1hcmtBc1VudXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xyXG4gICAgXy5lYWNoKHRoaXMuZmllbGRzJCwgKGZpZWxkKSA9PiBmaWVsZC5tYXJrQXNVbnVzZWQoKSApO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWFya0FzRGlydHkoKTogQWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+IHtcclxuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZCkgPT4gZmllbGQubWFya0FzRGlydHkoKSApO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWFya0FzVG91Y2hlZCgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xyXG4gICAgXy5lYWNoKHRoaXMuZmllbGRzJCwgKGZpZWxkKSA9PiBmaWVsZC5tYXJrQXNUb3VjaGVkKCkgKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0KG1vZGVsOiBUTW9kZWwpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZChtb2RlbCkpIHtcclxuICAgICAgbW9kZWwgPSB7fSBhcyBUTW9kZWw7XHJcbiAgICB9XHJcbiAgICBfLmVhY2godGhpcy5maWVsZHMkLCAoZmllbGQ6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBhbnk+LCBrZXk6IHN0cmluZykgPT4gZmllbGQucmVzZXQobW9kZWxba2V5XSkpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXQgZmllbGRzKCk6IFRGaWVsZHMge1xyXG4gICAgcmV0dXJuIHRoaXMuZmllbGRzJDtcclxuICB9XHJcblxyXG5cclxuICBnZXQgdmFsdWUoKTogVE1vZGVsIHtcclxuICAgIGNvbnN0IHJldCA9IHt9IGFzIFRNb2RlbDtcclxuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZDogSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIGFueT4sIGtleTogc3RyaW5nKSA9PiByZXRba2V5XSA9IGZpZWxkLnZhbHVlKTtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBnZXQgZGlydHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmRpcnR5O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC52YWxpZDtcclxuICB9XHJcblxyXG4gIGdldCB0b3VjaGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC50b3VjaGVkO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==