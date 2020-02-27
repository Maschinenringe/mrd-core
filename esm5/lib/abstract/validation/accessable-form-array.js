/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/validation/accessable-form-array.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FormArray } from '@angular/forms';
import * as _ from 'underscore';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1mb3JtLWFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDOzs7OztBQUVoQzs7Ozs7SUFBQTtJQW1IQSxDQUFDOzs7OztJQTNHUSx3Q0FBVTs7OztJQUFqQixVQUFrQixJQUE0QztRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU0sa0NBQUk7Ozs7SUFBWCxVQUFZLEtBQWE7O1lBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU0sc0NBQVE7Ozs7SUFBZixVQUFnQixLQUFhOztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVE7Ozs7O1FBQUUsVUFBQyxDQUFDLEVBQUUsS0FBYTtZQUN2RCxPQUFPLEtBQUssS0FBSyxLQUFLLENBQUM7UUFDekIsQ0FBQyxFQUFD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QVEsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBOUIsSUFBTSxLQUFLLFdBQUE7Z0JBQ2QsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3RCOzs7Ozs7Ozs7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7SUFFTSx3Q0FBVTs7O0lBQWpCOztRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7WUFDM0IsS0FBb0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxRQUFRLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTlCLElBQU0sS0FBSyxXQUFBO2dCQUNkLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNwQjs7Ozs7Ozs7O1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVNLG1DQUFLOzs7O0lBQVosVUFBYSxNQUFnQjs7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7O1lBQ3ZCLEtBQW9CLElBQUEsV0FBQSxpQkFBQSxNQUFNLENBQUEsOEJBQUEsa0RBQUU7Z0JBQXZCLElBQU0sS0FBSyxtQkFBQTtnQkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xCOzs7Ozs7Ozs7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFSCwwQkFBQztBQUFELENBQUMsQUFuSEQsSUFtSEM7Ozs7Ozs7O0lBaEhDLHNDQUEwQjs7SUFDMUIsbUNBQW9EOzs7OztJQUVwRCx1Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lBY2Nlc3NhYmxlRm9ybUNvbnRyb2x9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wnO1xyXG5pbXBvcnQge0Zvcm1BcnJheX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1R5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPlxyXG4gIGltcGxlbWVudHMgSUFjY2Vzc2FibGVGb3JtQ29udHJvbDxBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4sIFRNb2RlbFtdPiB7XHJcblxyXG4gIHB1YmxpYyBjb250cm9sOiBGb3JtQXJyYXk7XHJcbiAgcHVibGljIHR5cGU6IFR5cGU8SUFjY2Vzc2FibGVGb3JtQ29udHJvbDxhbnksIGFueT4+O1xyXG5cclxuICBwcml2YXRlIGVudHJpZXMkOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgVE1vZGVsPltdO1xyXG5cclxuICBwdWJsaWMgaW5pdGlhbGl6ZSh0eXBlOiBUeXBlPElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBhbnk+Pik6IHZvaWQge1xyXG4gICAgdGhpcy5jb250cm9sID0gbmV3IEZvcm1BcnJheShbXSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy5lbnRyaWVzJCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHB1c2goZW50cnk6IFRNb2RlbCk6IElBY2Nlc3NhYmxlRm9ybUNvbnRyb2w8YW55LCBUTW9kZWw+IHtcclxuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmdlbmVyYXRlRm9ybUVudHJ5KGVudHJ5KTtcclxuICAgIHRoaXMuY29udHJvbC5wdXNoKGl0ZW0uY29udHJvbCk7XHJcbiAgICB0aGlzLmVudHJpZXMkLnB1c2goaXRlbSk7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVBdChpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRyb2wucmVtb3ZlQXQoaW5kZXgpO1xyXG4gICAgdGhpcy5lbnRyaWVzJCA9IF8ucmVqZWN0KHRoaXMuZW50cmllcyQsIChlLCByb3VuZDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHJldHVybiByb3VuZCA9PT0gaW5kZXg7XHJcbiAgICB9KTtcclxuICAgIGxldCBtYXJrQXNVc2VkID0gZmFsc2U7XHJcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcclxuICAgICAgbWFya0FzVXNlZCA9IG1hcmtBc1VzZWQgfHwgZW50cnkuZGlydHk7XHJcbiAgICB9XHJcbiAgICBtYXJrQXNVc2VkID8gdGhpcy5tYXJrQXNVc2VkKCkgOiB0aGlzLm1hcmtBc1VudXNlZCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdlbmVyYXRlRm9ybUVudHJ5KHZhbHVlOiBhbnkpOiBJQWNjZXNzYWJsZUZvcm1Db250cm9sPGFueSwgVE1vZGVsPiB7XHJcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gbmV3IHRoaXMudHlwZSgpO1xyXG4gICAgdmFsaWRhdGlvbi5yZXNldCh2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsaWRhdGlvbjtcclxuICB9XHJcblxyXG4gIGdldCBkaXJ0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2wuZGlydHk7XHJcbiAgfVxyXG5cclxuICBnZXQgdG91Y2hlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudG91Y2hlZDtcclxuICB9XHJcblxyXG4gIGdldCB2YWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsaWQ7XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKTogVE1vZGVsW10ge1xyXG4gICAgY29uc3QgcmV0OiBUTW9kZWxbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XHJcbiAgICAgIHJldC5wdXNoKGVudHJ5LnZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xyXG4gICAgdGhpcy5jb250cm9sLmRpc2FibGUoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVuYWJsZSgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xyXG4gICAgdGhpcy5jb250cm9sLmVuYWJsZSgpO1xyXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XHJcbiAgICAgIGVudHJ5LmVuYWJsZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbWFya0FzRGlydHkoKTogQWNjZXNzYWJsZUZvcm1BcnJheTxUTW9kZWw+IHtcclxuICAgIHRoaXMuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XHJcbiAgICAgIGVudHJ5Lm1hcmtBc0RpcnR5KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYXJrQXNUb3VjaGVkKCk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XHJcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMkKSB7XHJcbiAgICAgIGVudHJ5Lm1hcmtBc1RvdWNoZWQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1hcmtBc1VudXNlZCgpOiBBY2Nlc3NhYmxlRm9ybUFycmF5PFRNb2RlbD4ge1xyXG4gICAgdGhpcy5jb250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gICAgdGhpcy5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcclxuICAgICAgZW50cnkubWFya0FzVW51c2VkKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtYXJrQXNVc2VkKCk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XHJcbiAgICB0aGlzLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5jb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHRoaXMuZW50cmllcyQpIHtcclxuICAgICAgZW50cnkubWFya0FzVXNlZCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXQobW9kZWxzOiBUTW9kZWxbXSk6IEFjY2Vzc2FibGVGb3JtQXJyYXk8VE1vZGVsPiB7XHJcbiAgICB0aGlzLmVudHJpZXMkID0gW107XHJcbiAgICB0aGlzLmNvbnRyb2wucmVzZXQoW10pO1xyXG4gICAgZm9yIChjb25zdCBtb2RlbCBvZiBtb2RlbHMpIHtcclxuICAgICAgdGhpcy5wdXNoKG1vZGVsKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbn1cclxuIl19