/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/validation/accessable-form-array.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FormArray } from '@angular/forms';
import * as _ from 'underscore';
import { Util } from '../../impl/util/util';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFFNUM7Ozs7O0lBQUE7SUEwSEEsQ0FBQzs7Ozs7SUFsSFEsd0NBQVU7Ozs7SUFBakIsVUFBa0IsSUFBNEM7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLGtDQUFJOzs7O0lBQVgsVUFBWSxLQUFhOztZQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLHNDQUFROzs7O0lBQWYsVUFBZ0IsS0FBYTs7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFROzs7OztRQUFFLFVBQUMsQ0FBQyxFQUFFLEtBQWE7WUFD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Ozs7O0lBdkhDLHNDQUEwQjs7SUFDMUIsbUNBQW9EOzs7OztJQUVwRCx1Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQWNjZXNzYWJsZUZvcm1Db250cm9sIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS1hY2Nlc3NhYmxlLWZvcm0tY29udHJvbCc7XG5pbXBvcnQgeyBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uLy4uL2ltcGwvdXRpbC91dGlsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPlxuICBpbXBsZW1lbnRzIElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8QWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+LCBUTW9kZWxbXT4ge1xuXG4gIHB1YmxpYyBjb250cm9sOiBGb3JtQXJyYXk7XG4gIHB1YmxpYyB0eXBlOiBUeXBlPElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBhbnk+PjtcblxuICBwcml2YXRlIGVudHJpZXMkOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgVE1vZGVsPltdO1xuXG4gIHB1YmxpYyBpbml0aWFsaXplKHR5cGU6IFR5cGU8SUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIGFueT4+KTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9sID0gbmV3IEZvcm1BcnJheShbXSk7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmVudHJpZXMkID0gW107XG4gIH1cblxuICBwdWJsaWMgcHVzaChlbnRyeTogVE1vZGVsKTogSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIFRNb2RlbD4ge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdlbmVyYXRlRm9ybUVudHJ5KGVudHJ5KTtcbiAgICB0aGlzLmNvbnRyb2wucHVzaChpdGVtLmNvbnRyb2wpO1xuICAgIHRoaXMuZW50cmllcyQucHVzaChpdGVtKTtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9sLnJlbW92ZUF0KGluZGV4KTtcbiAgICB0aGlzLmVudHJpZXMkID0gXy5yZWplY3QodGhpcy5lbnRyaWVzJCwgKGUsIHJvdW5kOiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiByb3VuZCA9PT0gaW5kZXg7XG4gICAgfSk7XG4gICAgbGV0IG1hcmtBc1VzZWQgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIG1hcmtBc1VzZWQgPSBtYXJrQXNVc2VkIHx8IGVudHJ5LmRpcnR5O1xuICAgIH1cbiAgICBtYXJrQXNVc2VkID8gdGhpcy5tYXJrQXNVc2VkKCkgOiB0aGlzLm1hcmtBc1VudXNlZCgpO1xuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlRm9ybUVudHJ5KHZhbHVlOiBhbnkpOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgVE1vZGVsPiB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IG5ldyB0aGlzLnR5cGUoKTtcbiAgICB2YWxpZGF0aW9uLnJlc2V0KHZhbHVlKTtcbiAgICByZXR1cm4gdmFsaWRhdGlvbjtcbiAgfVxuXG4gIGdldCBkaXJ0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmRpcnR5O1xuICB9XG5cbiAgZ2V0IHRvdWNoZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC50b3VjaGVkO1xuICB9XG5cbiAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsaWQ7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogVE1vZGVsW10ge1xuICAgIGNvbnN0IHJldDogVE1vZGVsW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIHJldC5wdXNoKGVudHJ5LnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGdldCBlbnRyaWVzKCk6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBUTW9kZWw+W10ge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXMkO1xuICB9XG5cbiAgcHVibGljIGRpc2FibGUoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcbiAgICB0aGlzLmNvbnRyb2wuZGlzYWJsZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGVuYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5lbmFibGUoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5LmVuYWJsZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNEaXJ0eSgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5lbnRyaWVzJCkge1xuICAgICAgZW50cnkubWFya0FzRGlydHkoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgbWFya0FzVG91Y2hlZCgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XG4gICAgICBlbnRyeS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG1hcmtBc1VudXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xuICAgIHRoaXMuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5Lm1hcmtBc1VudXNlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBtYXJrQXNVc2VkKCk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XG4gICAgdGhpcy5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzRGlydHkoKTtcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcbiAgICAgIGVudHJ5Lm1hcmtBc1VzZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQobW9kZWxzOiBUTW9kZWxbXSk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XG4gICAgdGhpcy5lbnRyaWVzJCA9IFtdO1xuICAgIHRoaXMuY29udHJvbC5yZXNldChbXSk7XG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKG1vZGVscykgJiYgXy5pc0FycmF5KG1vZGVscykpIHtcbiAgICAgIGZvciAoY29uc3QgbW9kZWwgb2YgbW9kZWxzKSB7XG4gICAgICAgIHRoaXMucHVzaChtb2RlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuIl19