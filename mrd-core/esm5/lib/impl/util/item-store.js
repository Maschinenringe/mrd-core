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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2ltcGwvdXRpbC9pdGVtLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLFFBQVEsQ0FBQzs7OztBQUc1Qjs7OztJQU9FLG1CQUNrQixVQUFlLEVBQ2YsU0FBK0I7UUFEL0IsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNmLGNBQVMsR0FBVCxTQUFTLENBQXNCO1FBUGpDLGNBQVMsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUU5QyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLHNCQUFpQixHQUFRLEVBQUUsQ0FBQztJQUtuQyxDQUFDOzs7OztJQUVHLCtCQUFXOzs7O0lBQWxCLFVBQW1CLEtBQVU7O1FBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDOztZQUNwQixLQUFtQixJQUFBLFVBQUEsaUJBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO2dCQUFyQixJQUFNLElBQUksa0JBQUE7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQzNDOzs7Ozs7Ozs7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRU0seUJBQUs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVNLDBCQUFNOzs7O0lBQWIsVUFBYyxJQUFPO1FBQ25CLElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7O0lBRU0sc0NBQWtCOzs7O0lBQXpCLFVBQTBCLFVBQWU7UUFDdkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7O0lBRU0sMEJBQU07Ozs7SUFBYixVQUFjLElBQU87UUFDbkIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDMUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVNLHdCQUFJOzs7O0lBQVgsVUFBWSxJQUFPO1FBQ2pCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Ozs7SUFFUyxzQ0FBa0I7Ozs7SUFBNUI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHNCQUFJLDRCQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQWpFRCxJQWlFQzs7Ozs7OztJQS9EQyw4QkFBd0Q7Ozs7O0lBRXhELDJCQUE4Qjs7Ozs7SUFDOUIsc0NBQXNDOztJQUdwQywrQkFBK0I7O0lBQy9CLDhCQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1V0aWx9IGZyb20gXCIuL3V0aWxcIjtcblxuXG5leHBvcnQgY2xhc3MgSXRlbVN0b3JlPFQ+IHtcblxuICBwdWJsaWMgcmVhZG9ubHkgb25DaGFuZ2VkOiBTdWJqZWN0PFRbXT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHByb3RlY3RlZCBpdGVtcyQ6IG9iamVjdCA9IHt9O1xuICBwcm90ZWN0ZWQgdHJhbnNmb3JtZWRJdGVtcyQ6IFRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBpZGVudGlmaWVyOiBhbnksXG4gICAgcHVibGljIHJlYWRvbmx5IHRyYW5zZm9ybT86IChpdGVtczogVFtdKSA9PiBUW11cbiAgKSB7fVxuXG4gIHB1YmxpYyB1cGRhdGVJdGVtcyhpdGVtczogVFtdKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIGl0ZW1zID0gaXRlbXMgfHwgW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICB0aGlzLml0ZW1zJFtpdGVtW3RoaXMuaWRlbnRpZmllcl1dID0gaXRlbTtcbiAgICB9XG4gICAgdGhpcy5pbnRlcm5hbFRyYW5zZm9ybSQoKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1zJCA9IHt9O1xuICAgIHRoaXMudHJhbnNmb3JtZWRJdGVtcyQgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoaXRlbTogVCk6IHZvaWQge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBkZWxldGUgdGhpcy5pdGVtcyRbaXRlbVt0aGlzLmlkZW50aWZpZXJdXTtcbiAgICAgIHRoaXMuaW50ZXJuYWxUcmFuc2Zvcm0kKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbW92ZUJ5SWRlbnRpZmllcihpZGVudGlmaWVyOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQoaWRlbnRpZmllcikpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLml0ZW1zJFtpZGVudGlmaWVyXTtcbiAgICAgIHRoaXMuaW50ZXJuYWxUcmFuc2Zvcm0kKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZShpdGVtOiBUKTogdm9pZCB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHRoaXMuaXRlbXMkW2l0ZW1bdGhpcy5pZGVudGlmaWVyXV0gPSBpdGVtO1xuICAgICAgdGhpcy5pbnRlcm5hbFRyYW5zZm9ybSQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcHVzaChpdGVtOiBUKTogdm9pZCB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHRoaXMuaXRlbXMkW2l0ZW1bdGhpcy5pZGVudGlmaWVyXV0gPSBpdGVtO1xuICAgICAgdGhpcy5pbnRlcm5hbFRyYW5zZm9ybSQoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgaW50ZXJuYWxUcmFuc2Zvcm0kKCk6IHZvaWQge1xuICAgIHRoaXMudHJhbnNmb3JtZWRJdGVtcyQgPSBPYmplY3QudmFsdWVzKHRoaXMuaXRlbXMkKTtcbiAgICBpZiAodGhpcy50cmFuc2Zvcm0pIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtZWRJdGVtcyQgPSB0aGlzLnRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybWVkSXRlbXMkKTtcbiAgICB9XG4gICAgdGhpcy5vbkNoYW5nZWQubmV4dCh0aGlzLnRyYW5zZm9ybWVkSXRlbXMkKTtcbiAgfVxuXG4gIGdldCBpdGVtcygpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybWVkSXRlbXMkO1xuICB9XG59XG4iXX0=