/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/validation/accessable-form-array.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FormArray } from '@angular/forms';
import * as _ from 'underscore';
import { Util } from '../../impl/util/util';
import { ValidatorRequired } from '../../impl/validation/validator-required';
/**
 * @abstract
 * @template TModel
 */
var /**
 * @abstract
 * @template TModel
 */
AccessableFormArray = /** @class */ (function () {
    function AccessableFormArray() {
        this.validators$ = [];
        this.required$ = false;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    AccessableFormArray.prototype.initialize = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.control = new FormArray([]);
        this.type = type;
        this.entries$ = [];
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    AccessableFormArray.prototype.push = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        /** @type {?} */
        var item = this.generateFormEntry(entry);
        this.control.push(item.control);
        this.entries$.push(item);
        return item;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    AccessableFormArray.prototype.removeAt = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var e_1, _a;
        this.control.removeAt(index);
        this.entries$ = _.reject(this.entries$, (/**
         * @param {?} e
         * @param {?} round
         * @return {?}
         */
        function (e, round) {
            return round === index;
        }));
        /** @type {?} */
        var markAsUsed = false;
        try {
            for (var _b = tslib_1.__values(this.entries$), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                markAsUsed = markAsUsed || entry.dirty;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        markAsUsed ? this.markAsUsed() : this.markAsUnused();
    };
    /**
     * @param {?} validators
     * @return {?}
     */
    AccessableFormArray.prototype.validateWith = /**
     * @param {?} validators
     * @return {?}
     */
    function (validators) {
        var _this = this;
        if (!Util.isDefined(validators)) {
            validators = [];
        }
        if (_.isArray(validators)) {
            this.validators$ = validators;
        }
        this.control.setValidators(_.map(validators, (/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.validator(); })));
        this.required$ = false;
        _.each(this.validators$, (/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v instanceof ValidatorRequired) {
                _this.required$ = true;
            }
        }));
        this.control.updateValueAndValidity();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormArray.prototype.clearValidators = /**
     * @return {?}
     */
    function () {
        this.validators$ = [];
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AccessableFormArray.prototype.generateFormEntry = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var validation = new this.type();
        validation.reset(value);
        return validation;
    };
    Object.defineProperty(AccessableFormArray.prototype, "errors", {
        get: /**
         * @return {?}
         */
        function () {
            return _.compact(_.map(this.validators$, (/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                if (e.hasError) {
                    return e.error;
                }
                return null;
            })));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "error", {
        get: /**
         * @return {?}
         */
        function () {
            return _.find(this.validators$, (/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                return v.hasError;
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "validators", {
        get: /**
         * @return {?}
         */
        function () {
            return this.validators$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () {
            return this.required$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "dirty", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.dirty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "touched", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.touched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            var e_2, _a;
            /** @type {?} */
            var ret = [];
            try {
                for (var _b = tslib_1.__values(this.entries$), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var entry = _c.value;
                    ret.push(entry.value);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccessableFormArray.prototype, "entries", {
        get: /**
         * @return {?}
         */
        function () {
            return this.entries$;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AccessableFormArray.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.control.disable();
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormArray.prototype.enable = /**
     * @return {?}
     */
    function () {
        var e_3, _a;
        this.control.enable();
        try {
            for (var _b = tslib_1.__values(this.entries$), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                entry.enable();
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormArray.prototype.markAsDirty = /**
     * @return {?}
     */
    function () {
        var e_4, _a;
        this.control.markAsDirty();
        try {
            for (var _b = tslib_1.__values(this.entries$), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                entry.markAsDirty();
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormArray.prototype.markAsTouched = /**
     * @return {?}
     */
    function () {
        var e_5, _a;
        this.control.markAsTouched();
        try {
            for (var _b = tslib_1.__values(this.entries$), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                entry.markAsTouched();
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormArray.prototype.markAsUnused = /**
     * @return {?}
     */
    function () {
        var e_6, _a;
        this.control.markAsUntouched();
        this.control.markAsPristine();
        try {
            for (var _b = tslib_1.__values(this.entries$), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                entry.markAsUnused();
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return this;
    };
    /**
     * @return {?}
     */
    AccessableFormArray.prototype.markAsUsed = /**
     * @return {?}
     */
    function () {
        var e_7, _a;
        this.control.markAsTouched();
        this.control.markAsDirty();
        try {
            for (var _b = tslib_1.__values(this.entries$), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                entry.markAsUsed();
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return this;
    };
    /**
     * @param {?} models
     * @return {?}
     */
    AccessableFormArray.prototype.reset = /**
     * @param {?} models
     * @return {?}
     */
    function (models) {
        var e_8, _a;
        this.entries$ = [];
        this.control.reset([]);
        if (Util.isDefined(models) && _.isArray(models)) {
            try {
                for (var models_1 = tslib_1.__values(models), models_1_1 = models_1.next(); !models_1_1.done; models_1_1 = models_1.next()) {
                    var model = models_1_1.value;
                    this.push(model);
                }
            }
            catch (e_8_1) { e_8 = { error: e_8_1 }; }
            finally {
                try {
                    if (models_1_1 && !models_1_1.done && (_a = models_1.return)) _a.call(models_1);
                }
                finally { if (e_8) throw e_8.error; }
            }
        }
        return this;
    };
    return AccessableFormArray;
}());
/**
 * @abstract
 * @template TModel
 */
export { AccessableFormArray };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccessableFormArray.prototype.validators$;
    /** @type {?} */
    AccessableFormArray.prototype.control;
    /** @type {?} */
    AccessableFormArray.prototype.type;
    /**
     * @type {?}
     * @private
     */
    AccessableFormArray.prototype.required$;
    /**
     * @type {?}
     * @private
     */
    AccessableFormArray.prototype.entries$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7QUFFN0U7Ozs7O0lBQUE7UUFHVSxnQkFBVyxHQUFpQixFQUFFLENBQUM7UUFHL0IsY0FBUyxHQUFZLEtBQUssQ0FBQztJQW1LckMsQ0FBQzs7Ozs7SUEvSlEsd0NBQVU7Ozs7SUFBakIsVUFBa0IsSUFBNEM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLGtDQUFJOzs7O0lBQVgsVUFBWSxLQUFhOztZQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLHNDQUFROzs7O0lBQWYsVUFBZ0IsS0FBYTs7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFD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T0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLG1DQUFLOzs7O0lBQVosVUFBYSxNQUFnQjs7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7O2dCQUMvQyxLQUFvQixJQUFBLFdBQUEsaUJBQUEsTUFBTSxDQUFBLDhCQUFBLGtEQUFFO29CQUF2QixJQUFNLEtBQUssbUJBQUE7b0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEI7Ozs7Ozs7OztTQUNGO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUgsMEJBQUM7QUFBRCxDQUFDLEFBektELElBeUtDOzs7Ozs7Ozs7OztJQXRLQywwQ0FBdUM7O0lBQ3ZDLHNDQUEwQjs7SUFDMUIsbUNBQW9EOzs7OztJQUNwRCx3Q0FBbUM7Ozs7O0lBRW5DLHVDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLWFjY2Vzc2FibGUtZm9ybS1jb250cm9sJztcbmltcG9ydCB7IEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vLi4vaW1wbC91dGlsL3V0aWwnO1xuaW1wb3J0IHsgSVZhbGlkYXRvciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcbmltcG9ydCB7IFZhbGlkYXRvclJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1yZXF1aXJlZCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD5cbiAgaW1wbGVtZW50cyBJQWNjZXNzYWJsZUZvcm1Db250cm9sPEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiwgVE1vZGVsW10+IHtcblxuICBwcml2YXRlIHZhbGlkYXRvcnMkOiBJVmFsaWRhdG9yW10gPSBbXTtcbiAgcHVibGljIGNvbnRyb2w6IEZvcm1BcnJheTtcbiAgcHVibGljIHR5cGU6IFR5cGU8SUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIGFueT4+O1xuICBwcml2YXRlIHJlcXVpcmVkJDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZW50cmllcyQ6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBUTW9kZWw+W107XG5cbiAgcHVibGljIGluaXRpYWxpemUodHlwZTogVHlwZTxJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgYW55Pj4pOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgRm9ybUFycmF5KFtdKTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZW50cmllcyQgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBwdXNoKGVudHJ5OiBUTW9kZWwpOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgVE1vZGVsPiB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2VuZXJhdGVGb3JtRW50cnkoZW50cnkpO1xuICAgIHRoaXMuY29udHJvbC5wdXNoKGl0ZW0uY29udHJvbCk7XG4gICAgdGhpcy5lbnRyaWVzJC5wdXNoKGl0ZW0pO1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUF0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRyb2wucmVtb3ZlQXQoaW5kZXgpO1xuICAgIHRoaXMuZW50cmllcyQgPSBfLnJlamVjdCh0aGlzLmVudHJpZXMkLCAoZSwgcm91bmQ6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIHJvdW5kID09PSBpbmRleDtcbiAgICB9KTtcbiAgICBsZXQgbWFya0FzVXNlZCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5lbnRyaWVzJCkge1xuICAgICAgbWFya0FzVXNlZCA9IG1hcmtBc1VzZWQgfHwgZW50cnkuZGlydHk7XG4gICAgfVxuICAgIG1hcmtBc1VzZWQgPyB0aGlzLm1hcmtBc1VzZWQoKSA6IHRoaXMubWFya0FzVW51c2VkKCk7XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGVXaXRoKHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXSk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh2YWxpZGF0b3JzKSkge1xuICAgICAgdmFsaWRhdG9ycyA9IFtdO1xuICAgIH1cbiAgICBpZiAoXy5pc0FycmF5KHZhbGlkYXRvcnMpKSB7XG4gICAgICB0aGlzLnZhbGlkYXRvcnMkID0gdmFsaWRhdG9ycztcbiAgICB9XG4gICAgdGhpcy5jb250cm9sLnNldFZhbGlkYXRvcnMoXy5tYXAodmFsaWRhdG9ycywgKHY6IElWYWxpZGF0b3IpID0+IHYudmFsaWRhdG9yKCkpKTtcbiAgICB0aGlzLnJlcXVpcmVkJCA9IGZhbHNlO1xuICAgIF8uZWFjaCh0aGlzLnZhbGlkYXRvcnMkLCAodjogSVZhbGlkYXRvcikgPT4ge1xuICAgICAgaWYgKHYgaW5zdGFuY2VvZiBWYWxpZGF0b3JSZXF1aXJlZCkge1xuICAgICAgICB0aGlzLnJlcXVpcmVkJCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBjbGVhclZhbGlkYXRvcnMoKTogdm9pZCB7XG4gICAgdGhpcy52YWxpZGF0b3JzJCA9IFtdO1xuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlRm9ybUVudHJ5KHZhbHVlOiBhbnkpOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgVE1vZGVsPiB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IG5ldyB0aGlzLnR5cGUoKTtcbiAgICB2YWxpZGF0aW9uLnJlc2V0KHZhbHVlKTtcbiAgICByZXR1cm4gdmFsaWRhdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXJyb3JzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gXy5jb21wYWN0KF8ubWFwKHRoaXMudmFsaWRhdG9ycyQsIChlOiBJVmFsaWRhdG9yKSA9PiB7XG4gICAgICBpZiAoZS5oYXNFcnJvcikge1xuICAgICAgICByZXR1cm4gZS5lcnJvcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXJyb3IoKTogSVZhbGlkYXRvciB7XG4gICAgcmV0dXJuIF8uZmluZCh0aGlzLnZhbGlkYXRvcnMkLCAodikgPT4ge1xuICAgICAgcmV0dXJuIHYuaGFzRXJyb3I7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZhbGlkYXRvcnMoKTogSVZhbGlkYXRvcltdIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3JzJDtcbiAgfVxuXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1aXJlZCQ7XG4gIH1cblxuICBnZXQgZGlydHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5kaXJ0eTtcbiAgfVxuXG4gIGdldCB0b3VjaGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudG91Y2hlZDtcbiAgfVxuXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbGlkO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IFRNb2RlbFtdIHtcbiAgICBjb25zdCByZXQ6IFRNb2RlbFtdID0gW107XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICByZXQucHVzaChlbnRyeS52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBnZXQgZW50cmllcygpOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgVE1vZGVsPltdIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzJDtcbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlKCk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XG4gICAgdGhpcy5jb250cm9sLmRpc2FibGUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBlbmFibGUoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wuZW5hYmxlKCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBlbnRyeS5lbmFibGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzRGlydHkoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5Lm1hcmtBc0RpcnR5KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1RvdWNoZWQoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5lbnRyaWVzJCkge1xuICAgICAgZW50cnkubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVbnVzZWQoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XG4gICAgdGhpcy5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBlbnRyeS5tYXJrQXNVbnVzZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgdGhpcy5jb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBlbnRyeS5tYXJrQXNVc2VkKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHJlc2V0KG1vZGVsczogVE1vZGVsW10pOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuZW50cmllcyQgPSBbXTtcbiAgICB0aGlzLmNvbnRyb2wucmVzZXQoW10pO1xuICAgIGlmIChVdGlsLmlzRGVmaW5lZChtb2RlbHMpICYmIF8uaXNBcnJheShtb2RlbHMpKSB7XG4gICAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIG1vZGVscykge1xuICAgICAgICB0aGlzLnB1c2gobW9kZWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbiJdfQ==