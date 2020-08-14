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
        this.control.clear();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7QUFFN0U7Ozs7O0lBQUE7UUFHVSxnQkFBVyxHQUFpQixFQUFFLENBQUM7UUFHL0IsY0FBUyxHQUFZLEtBQUssQ0FBQztJQW1LckMsQ0FBQzs7Ozs7SUEvSlEsd0NBQVU7Ozs7SUFBakIsVUFBa0IsSUFBNEM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLGtDQUFJOzs7O0lBQVgsVUFBWSxLQUFhOztZQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLHNDQUFROzs7O0lBQWYsVUFBZ0IsS0FBYTs7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFD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T0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLG1DQUFLOzs7O0lBQVosVUFBYSxNQUFnQjs7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTs7Z0JBQy9DLEtBQW9CLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7b0JBQXZCLElBQU0sS0FBSyxtQkFBQTtvQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNsQjs7Ozs7Ozs7O1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFSCwwQkFBQztBQUFELENBQUMsQUF6S0QsSUF5S0M7Ozs7Ozs7Ozs7O0lBdEtDLDBDQUF1Qzs7SUFDdkMsc0NBQTBCOztJQUMxQixtQ0FBb0Q7Ozs7O0lBQ3BELHdDQUFtQzs7Ozs7SUFFbkMsdUNBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUFjY2Vzc2FibGVGb3JtQ29udHJvbCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHsgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi8uLi9pbXBsL3V0aWwvdXRpbCc7XG5pbXBvcnQgeyBJVmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS12YWxpZGF0b3InO1xuaW1wb3J0IHsgVmFsaWRhdG9yUmVxdWlyZWQgfSBmcm9tICcuLi8uLi9pbXBsL3ZhbGlkYXRpb24vdmFsaWRhdG9yLXJlcXVpcmVkJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPlxuICBpbXBsZW1lbnRzIElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8QWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+LCBUTW9kZWxbXT4ge1xuXG4gIHByaXZhdGUgdmFsaWRhdG9ycyQ6IElWYWxpZGF0b3JbXSA9IFtdO1xuICBwdWJsaWMgY29udHJvbDogRm9ybUFycmF5O1xuICBwdWJsaWMgdHlwZTogVHlwZTxJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgYW55Pj47XG4gIHByaXZhdGUgcmVxdWlyZWQkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBlbnRyaWVzJDogSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIFRNb2RlbD5bXTtcblxuICBwdWJsaWMgaW5pdGlhbGl6ZSh0eXBlOiBUeXBlPElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBhbnk+Pik6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbCA9IG5ldyBGb3JtQXJyYXkoW10pO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5lbnRyaWVzJCA9IFtdO1xuICB9XG5cbiAgcHVibGljIHB1c2goZW50cnk6IFRNb2RlbCk6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBUTW9kZWw+IHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5nZW5lcmF0ZUZvcm1FbnRyeShlbnRyeSk7XG4gICAgdGhpcy5jb250cm9sLnB1c2goaXRlbS5jb250cm9sKTtcbiAgICB0aGlzLmVudHJpZXMkLnB1c2goaXRlbSk7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbC5yZW1vdmVBdChpbmRleCk7XG4gICAgdGhpcy5lbnRyaWVzJCA9IF8ucmVqZWN0KHRoaXMuZW50cmllcyQsIChlLCByb3VuZDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gcm91bmQgPT09IGluZGV4O1xuICAgIH0pO1xuICAgIGxldCBtYXJrQXNVc2VkID0gZmFsc2U7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBtYXJrQXNVc2VkID0gbWFya0FzVXNlZCB8fCBlbnRyeS5kaXJ0eTtcbiAgICB9XG4gICAgbWFya0FzVXNlZCA/IHRoaXMubWFya0FzVXNlZCgpIDogdGhpcy5tYXJrQXNVbnVzZWQoKTtcbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0ZVdpdGgodmFsaWRhdG9yczogSVZhbGlkYXRvcltdKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHZhbGlkYXRvcnMpKSB7XG4gICAgICB2YWxpZGF0b3JzID0gW107XG4gICAgfVxuICAgIGlmIChfLmlzQXJyYXkodmFsaWRhdG9ycykpIHtcbiAgICAgIHRoaXMudmFsaWRhdG9ycyQgPSB2YWxpZGF0b3JzO1xuICAgIH1cbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsaWRhdG9ycyhfLm1hcCh2YWxpZGF0b3JzLCAodjogSVZhbGlkYXRvcikgPT4gdi52YWxpZGF0b3IoKSkpO1xuICAgIHRoaXMucmVxdWlyZWQkID0gZmFsc2U7XG4gICAgXy5lYWNoKHRoaXMudmFsaWRhdG9ycyQsICh2OiBJVmFsaWRhdG9yKSA9PiB7XG4gICAgICBpZiAodiBpbnN0YW5jZW9mIFZhbGlkYXRvclJlcXVpcmVkKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZWQkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGNsZWFyVmFsaWRhdG9ycygpOiB2b2lkIHtcbiAgICB0aGlzLnZhbGlkYXRvcnMkID0gW107XG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVGb3JtRW50cnkodmFsdWU6IGFueSk6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBUTW9kZWw+IHtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gbmV3IHRoaXMudHlwZSgpO1xuICAgIHZhbGlkYXRpb24ucmVzZXQodmFsdWUpO1xuICAgIHJldHVybiB2YWxpZGF0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBlcnJvcnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBfLmNvbXBhY3QoXy5tYXAodGhpcy52YWxpZGF0b3JzJCwgKGU6IElWYWxpZGF0b3IpID0+IHtcbiAgICAgIGlmIChlLmhhc0Vycm9yKSB7XG4gICAgICAgIHJldHVybiBlLmVycm9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSkpO1xuICB9XG5cbiAgcHVibGljIGdldCBlcnJvcigpOiBJVmFsaWRhdG9yIHtcbiAgICByZXR1cm4gXy5maW5kKHRoaXMudmFsaWRhdG9ycyQsICh2KSA9PiB7XG4gICAgICByZXR1cm4gdi5oYXNFcnJvcjtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsaWRhdG9ycygpOiBJVmFsaWRhdG9yW10ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcnMkO1xuICB9XG5cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlcXVpcmVkJDtcbiAgfVxuXG4gIGdldCBkaXJ0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmRpcnR5O1xuICB9XG5cbiAgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC50b3VjaGVkO1xuICB9XG5cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsaWQ7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogVE1vZGVsW10ge1xuICAgIGNvbnN0IHJldDogVE1vZGVsW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIHJldC5wdXNoKGVudHJ5LnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdldCBlbnRyaWVzKCk6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBUTW9kZWw+W10ge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXMkO1xuICB9XG5cbiAgcHVibGljIGRpc2FibGUoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGVuYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5lbmFibGUoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5LmVuYWJsZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNEaXJ0eSgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5lbnRyaWVzJCkge1xuICAgICAgZW50cnkubWFya0FzRGlydHkoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVG91Y2hlZCgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBlbnRyeS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1VudXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5Lm1hcmtBc1VudXNlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVc2VkKCk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XG4gICAgdGhpcy5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5Lm1hcmtBc1VzZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQobW9kZWxzOiBUTW9kZWxbXSk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XG4gICAgdGhpcy5lbnRyaWVzJCA9IFtdO1xuICAgIHRoaXMuY29udHJvbC5jbGVhcigpO1xuICAgIGlmIChVdGlsLmlzRGVmaW5lZChtb2RlbHMpICYmIF8uaXNBcnJheShtb2RlbHMpKSB7XG4gICAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIG1vZGVscykge1xuICAgICAgICB0aGlzLnB1c2gobW9kZWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbiJdfQ==