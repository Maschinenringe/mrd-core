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
var /**
 * @abstract
 * @template TFields, TModel
 */
AccessableFormGroup = /** @class */ (function () {
    function AccessableFormGroup() {
        this.changed$ = new Subject();
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
     * @param {?=} propagateChanges
     * @return {?}
     */
    AccessableFormGroup.prototype.reset = /**
     * @param {?} model
     * @param {?=} propagateChanges
     * @return {?}
     */
    function (model, propagateChanges) {
        if (propagateChanges === void 0) { propagateChanges = true; }
        if (!Util.isDefined(model)) {
            model = (/** @type {?} */ ({}));
        }
        _.each(this.fields$, (/**
         * @param {?} field
         * @param {?} key
         * @return {?}
         */
        function (field, key) { return field.reset(model[key]); }));
        if (propagateChanges) {
            this.changed$.next();
        }
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
        this.control.disable();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormGroup.prototype.enable = /**
     * @return {?}
     */
    function () {
        this.control.enable();
        return this;
    };
    Object.defineProperty(AccessableFormGroup.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormGroup.prototype, "enabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormGroup.prototype, "changed", {
        get: /**
         * @return {?}
         */
        function () {
            return this.changed$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
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
    /**
     * @type {?}
     * @private
     */
    AccessableFormGroup.prototype.changed$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7O0FBRTNDOzs7OztJQUFBO1FBS1UsYUFBUSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBMEZqRCxDQUFDOzs7OztJQXhGUSx3Q0FBVTs7OztJQUFqQixVQUNFLE1BQWU7UUFFZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksU0FBUyxDQUMxQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7UUFBRSxVQUFDLEtBQUs7WUFDeEIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDOzs7O0lBRU0sd0NBQVU7OztJQUFqQjtRQUNFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBbEIsQ0FBa0IsRUFBRSxDQUFDO1FBQ3JELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVNLDBDQUFZOzs7SUFBbkI7UUFDRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1FBQUUsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQXBCLENB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QUMsQUEvRkQsSUErRkM7Ozs7Ozs7O0lBNUZDLHNDQUEwQjs7Ozs7SUFDMUIsc0NBQXlCOzs7OztJQUN6Qix1Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7SUFjY2Vzc2FibGVGb3JtQ29udHJvbH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS1hY2Nlc3NhYmxlLWZvcm0tY29udHJvbCc7XG5pbXBvcnQge1V0aWx9IGZyb20gJy4uLy4uL2ltcGwvdXRpbC91dGlsJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsIGV4dGVuZHMgb2JqZWN0PlxuICBpbXBsZW1lbnRzIElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8QWNjZXNzYWJsZUZvcm1Hcm91cDxURmllbGRzLCBUTW9kZWw+LCBUTW9kZWw+IHtcblxuICBwdWJsaWMgY29udHJvbDogRm9ybUdyb3VwO1xuICBwcml2YXRlIGZpZWxkcyQ6IFRGaWVsZHM7XG4gIHByaXZhdGUgY2hhbmdlZCQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHVibGljIGluaXRpYWxpemUoXG4gICAgZmllbGRzOiBURmllbGRzXG4gICk6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbCA9IG5ldyBGb3JtR3JvdXAoXG4gICAgICBfLm1hcE9iamVjdChmaWVsZHMsIChmaWVsZCkgPT4ge1xuICAgICAgICByZXR1cm4gZmllbGQuY29udHJvbDtcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLmZpZWxkcyQgPSBmaWVsZHM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZCkgPT4gZmllbGQubWFya0FzVXNlZCgpICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVW51c2VkKCk6IEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsPiB7XG4gICAgXy5lYWNoKHRoaXMuZmllbGRzJCwgKGZpZWxkKSA9PiBmaWVsZC5tYXJrQXNVbnVzZWQoKSApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc0RpcnR5KCk6IEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsPiB7XG4gICAgXy5lYWNoKHRoaXMuZmllbGRzJCwgKGZpZWxkKSA9PiBmaWVsZC5tYXJrQXNEaXJ0eSgpICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVG91Y2hlZCgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xuICAgIF8uZWFjaCh0aGlzLmZpZWxkcyQsIChmaWVsZCkgPT4gZmllbGQubWFya0FzVG91Y2hlZCgpICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQobW9kZWw6IFRNb2RlbCwgcHJvcGFnYXRlQ2hhbmdlczogYm9vbGVhbiA9IHRydWUpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xuICAgIGlmICghVXRpbC5pc0RlZmluZWQobW9kZWwpKSB7XG4gICAgICBtb2RlbCA9IHt9IGFzIFRNb2RlbDtcbiAgICB9XG4gICAgXy5lYWNoKHRoaXMuZmllbGRzJCwgKGZpZWxkOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgYW55Piwga2V5OiBzdHJpbmcpID0+IGZpZWxkLnJlc2V0KG1vZGVsW2tleV0pKTtcblxuICAgIGlmIChwcm9wYWdhdGVDaGFuZ2VzKSB7XG4gICAgICB0aGlzLmNoYW5nZWQkLm5leHQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgZmllbGRzKCk6IFRGaWVsZHMge1xuICAgIHJldHVybiB0aGlzLmZpZWxkcyQ7XG4gIH1cblxuXG4gIGdldCB2YWx1ZSgpOiBUTW9kZWwge1xuICAgIGNvbnN0IHJldCA9IHt9IGFzIFRNb2RlbDtcbiAgICBfLmVhY2godGhpcy5maWVsZHMkLCAoZmllbGQ6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBhbnk+LCBrZXk6IHN0cmluZykgPT4gcmV0W2tleV0gPSBmaWVsZC52YWx1ZSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdldCBkaXJ0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmRpcnR5O1xuICB9XG5cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsaWQ7XG4gIH1cblxuICBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLnRvdWNoZWQ7XG4gIH1cblxuICBkaXNhYmxlKCk6IEFjY2Vzc2FibGVGb3JtR3JvdXA8VEZpZWxkcywgVE1vZGVsPiB7XG4gICAgdGhpcy5jb250cm9sLmRpc2FibGUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGVuYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUdyb3VwPFRGaWVsZHMsIFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5lbmFibGUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmRpc2FibGVkO1xuICB9XG5cbiAgZ2V0IGVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5lbmFibGVkO1xuICB9XG5cbiAgZ2V0IGNoYW5nZWQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlZCQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxufVxuIl19