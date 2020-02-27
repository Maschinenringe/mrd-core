/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/item-store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Subject } from 'rxjs';
import { Util } from "./util";
/**
 * @template T
 */
var /**
 * @template T
 */
ItemStore = /** @class */ (function () {
    function ItemStore(identifier, transform) {
        this.identifier = identifier;
        this.transform = transform;
        this.onChanged = new Subject();
        this.items$ = {};
        this.transformedItems$ = [];
    }
    /**
     * @param {?} items
     * @return {?}
     */
    ItemStore.prototype.updateItems = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var e_1, _a;
        this.clear();
        items = items || [];
        try {
            for (var items_1 = tslib_1.__values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                this.items$[item[this.identifier]] = item;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.internalTransform$();
    };
    /**
     * @return {?}
     */
    ItemStore.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.items$ = {};
        this.transformedItems$ = [];
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemStore.prototype.remove = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item) {
            delete this.items$[item[this.identifier]];
            this.internalTransform$();
        }
    };
    /**
     * @param {?} identifier
     * @return {?}
     */
    ItemStore.prototype.removeByIdentifier = /**
     * @param {?} identifier
     * @return {?}
     */
    function (identifier) {
        if (Util.isDefined(identifier)) {
            delete this.items$[identifier];
            this.internalTransform$();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemStore.prototype.update = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item) {
            this.items$[item[this.identifier]] = item;
            this.internalTransform$();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ItemStore.prototype.push = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item) {
            this.items$[item[this.identifier]] = item;
            this.internalTransform$();
        }
    };
    /**
     * @protected
     * @return {?}
     */
    ItemStore.prototype.internalTransform$ = /**
     * @protected
     * @return {?}
     */
    function () {
        this.transformedItems$ = Object.values(this.items$);
        if (this.transform) {
            this.transformedItems$ = this.transform(this.transformedItems$);
        }
        this.onChanged.next(this.transformedItems$);
    };
    Object.defineProperty(ItemStore.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this.transformedItems$;
        },
        enumerable: true,
        configurable: true
    });
    return ItemStore;
}());
/**
 * @template T
 */
export { ItemStore };
if (false) {
    /** @type {?} */
    ItemStore.prototype.onChanged;
    /**
     * @type {?}
     * @protected
     */
    ItemStore.prototype.items$;
    /**
     * @type {?}
     * @protected
     */
    ItemStore.prototype.transformedItems$;
    /** @type {?} */
    ItemStore.prototype.identifier;
    /** @type {?} */
    ItemStore.prototype.transform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2ltcGwvdXRpbC9pdGVtLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLFFBQVEsQ0FBQzs7OztBQUc1Qjs7OztJQU9FLG1CQUNrQixVQUFlLEVBQ2YsU0FBK0I7UUFEL0IsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNmLGNBQVMsR0FBVCxTQUFTLENBQXNCO1FBUGpDLGNBQVMsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUU5QyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLHNCQUFpQixHQUFRLEVBQUUsQ0FBQztJQUtuQyxDQUFDOzs7OztJQUVHLCtCQUFXOzs7O0lBQWxCLFVBQW1CLEtBQVU7O1FBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDOztZQUNwQixLQUFtQixJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO2dCQUFyQixJQUFNLElBQUksa0JBQUE7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQzNDOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRU0seUJBQUs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVNLDBCQUFNOzs7O0lBQWIsVUFBYyxJQUFPO1FBQ25CLElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7O0lBRU0sc0NBQWtCOzs7O0lBQXpCLFVBQTBCLFVBQWU7UUFDdkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7O0lBRU0sMEJBQU07Ozs7SUFBYixVQUFjLElBQU87UUFDbkIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDMUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVNLHdCQUFJOzs7O0lBQVgsVUFBWSxJQUFPO1FBQ2pCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Ozs7SUFFUyxzQ0FBa0I7Ozs7SUFBNUI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHNCQUFJLDRCQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWpFRCxJQWlFQzs7Ozs7OztJQS9EQyw4QkFBd0Q7Ozs7O0lBRXhELDJCQUE4Qjs7Ozs7SUFDOUIsc0NBQXNDOztJQUdwQywrQkFBK0I7O0lBQy9CLDhCQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtU3RvcmU8VD4ge1xyXG5cclxuICBwdWJsaWMgcmVhZG9ubHkgb25DaGFuZ2VkOiBTdWJqZWN0PFRbXT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcm90ZWN0ZWQgaXRlbXMkOiBvYmplY3QgPSB7fTtcclxuICBwcm90ZWN0ZWQgdHJhbnNmb3JtZWRJdGVtcyQ6IFRbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByZWFkb25seSBpZGVudGlmaWVyOiBhbnksXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHJhbnNmb3JtPzogKGl0ZW1zOiBUW10pID0+IFRbXVxyXG4gICkge31cclxuXHJcbiAgcHVibGljIHVwZGF0ZUl0ZW1zKGl0ZW1zOiBUW10pOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIGl0ZW1zID0gaXRlbXMgfHwgW107XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcclxuICAgICAgdGhpcy5pdGVtcyRbaXRlbVt0aGlzLmlkZW50aWZpZXJdXSA9IGl0ZW07XHJcbiAgICB9XHJcbiAgICB0aGlzLmludGVybmFsVHJhbnNmb3JtJCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pdGVtcyQgPSB7fTtcclxuICAgIHRoaXMudHJhbnNmb3JtZWRJdGVtcyQgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmUoaXRlbTogVCk6IHZvaWQge1xyXG4gICAgaWYgKGl0ZW0pIHtcclxuICAgICAgZGVsZXRlIHRoaXMuaXRlbXMkW2l0ZW1bdGhpcy5pZGVudGlmaWVyXV07XHJcbiAgICAgIHRoaXMuaW50ZXJuYWxUcmFuc2Zvcm0kKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlQnlJZGVudGlmaWVyKGlkZW50aWZpZXI6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKGlkZW50aWZpZXIpKSB7XHJcbiAgICAgIGRlbGV0ZSB0aGlzLml0ZW1zJFtpZGVudGlmaWVyXTtcclxuICAgICAgdGhpcy5pbnRlcm5hbFRyYW5zZm9ybSQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoaXRlbTogVCk6IHZvaWQge1xyXG4gICAgaWYgKGl0ZW0pIHtcclxuICAgICAgdGhpcy5pdGVtcyRbaXRlbVt0aGlzLmlkZW50aWZpZXJdXSA9IGl0ZW07XHJcbiAgICAgIHRoaXMuaW50ZXJuYWxUcmFuc2Zvcm0kKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHVzaChpdGVtOiBUKTogdm9pZCB7XHJcbiAgICBpZiAoaXRlbSkge1xyXG4gICAgICB0aGlzLml0ZW1zJFtpdGVtW3RoaXMuaWRlbnRpZmllcl1dID0gaXRlbTtcclxuICAgICAgdGhpcy5pbnRlcm5hbFRyYW5zZm9ybSQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpbnRlcm5hbFRyYW5zZm9ybSQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybWVkSXRlbXMkID0gT2JqZWN0LnZhbHVlcyh0aGlzLml0ZW1zJCk7XHJcbiAgICBpZiAodGhpcy50cmFuc2Zvcm0pIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1lZEl0ZW1zJCA9IHRoaXMudHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtZWRJdGVtcyQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vbkNoYW5nZWQubmV4dCh0aGlzLnRyYW5zZm9ybWVkSXRlbXMkKTtcclxuICB9XHJcblxyXG4gIGdldCBpdGVtcygpOiBUW10ge1xyXG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZWRJdGVtcyQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==