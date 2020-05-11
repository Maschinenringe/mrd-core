/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/item-store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { Util } from "./util";
/**
 * @template T
 */
export class ItemStore {
    /**
     * @param {?} identifier
     * @param {?=} transform
     */
    constructor(identifier, transform) {
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
    updateItems(items) {
        this.clear();
        items = items || [];
        for (const item of items) {
            this.items$[item[this.identifier]] = item;
        }
        this.internalTransform$();
    }
    /**
     * @return {?}
     */
    clear() {
        this.items$ = {};
        this.transformedItems$ = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    remove(item) {
        if (item) {
            delete this.items$[item[this.identifier]];
            this.internalTransform$();
        }
    }
    /**
     * @param {?} identifier
     * @return {?}
     */
    removeByIdentifier(identifier) {
        if (Util.isDefined(identifier)) {
            delete this.items$[identifier];
            this.internalTransform$();
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    update(item) {
        if (item) {
            this.items$[item[this.identifier]] = item;
            this.internalTransform$();
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    push(item) {
        if (item) {
            this.items$[item[this.identifier]] = item;
            this.internalTransform$();
        }
    }
    /**
     * @protected
     * @return {?}
     */
    internalTransform$() {
        this.transformedItems$ = Object.values(this.items$);
        if (this.transform) {
            this.transformedItems$ = this.transform(this.transformedItems$);
        }
        this.onChanged.next(this.transformedItems$);
    }
    /**
     * @return {?}
     */
    get items() {
        return this.transformedItems$;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2ltcGwvdXRpbC9pdGVtLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sUUFBUSxDQUFDOzs7O0FBRzVCLE1BQU0sT0FBTyxTQUFTOzs7OztJQU9wQixZQUNrQixVQUFlLEVBQ2YsU0FBK0I7UUFEL0IsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNmLGNBQVMsR0FBVCxTQUFTLENBQXNCO1FBUGpDLGNBQVMsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUU5QyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLHNCQUFpQixHQUFRLEVBQUUsQ0FBQztJQUtuQyxDQUFDOzs7OztJQUVHLFdBQVcsQ0FBQyxLQUFVO1FBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxJQUFPO1FBQ25CLElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7O0lBRU0sa0JBQWtCLENBQUMsVUFBZTtRQUN2QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsSUFBTztRQUNuQixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUMxQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7O0lBRU0sSUFBSSxDQUFDLElBQU87UUFDakIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDMUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVTLGtCQUFrQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Q0FDRjs7O0lBL0RDLDhCQUF3RDs7Ozs7SUFFeEQsMkJBQThCOzs7OztJQUM5QixzQ0FBc0M7O0lBR3BDLCtCQUErQjs7SUFDL0IsOEJBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4vdXRpbFwiO1xuXG5cbmV4cG9ydCBjbGFzcyBJdGVtU3RvcmU8VD4ge1xuXG4gIHB1YmxpYyByZWFkb25seSBvbkNoYW5nZWQ6IFN1YmplY3Q8VFtdPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJvdGVjdGVkIGl0ZW1zJDogb2JqZWN0ID0ge307XG4gIHByb3RlY3RlZCB0cmFuc2Zvcm1lZEl0ZW1zJDogVFtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGlkZW50aWZpZXI6IGFueSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHJhbnNmb3JtPzogKGl0ZW1zOiBUW10pID0+IFRbXVxuICApIHt9XG5cbiAgcHVibGljIHVwZGF0ZUl0ZW1zKGl0ZW1zOiBUW10pOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgaXRlbXMgPSBpdGVtcyB8fCBbXTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgIHRoaXMuaXRlbXMkW2l0ZW1bdGhpcy5pZGVudGlmaWVyXV0gPSBpdGVtO1xuICAgIH1cbiAgICB0aGlzLmludGVybmFsVHJhbnNmb3JtJCgpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbXMkID0ge307XG4gICAgdGhpcy50cmFuc2Zvcm1lZEl0ZW1zJCA9IFtdO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZShpdGVtOiBUKTogdm9pZCB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLml0ZW1zJFtpdGVtW3RoaXMuaWRlbnRpZmllcl1dO1xuICAgICAgdGhpcy5pbnRlcm5hbFRyYW5zZm9ybSQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQnlJZGVudGlmaWVyKGlkZW50aWZpZXI6IGFueSk6IHZvaWQge1xuICAgIGlmIChVdGlsLmlzRGVmaW5lZChpZGVudGlmaWVyKSkge1xuICAgICAgZGVsZXRlIHRoaXMuaXRlbXMkW2lkZW50aWZpZXJdO1xuICAgICAgdGhpcy5pbnRlcm5hbFRyYW5zZm9ybSQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGl0ZW06IFQpOiB2b2lkIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5pdGVtcyRbaXRlbVt0aGlzLmlkZW50aWZpZXJdXSA9IGl0ZW07XG4gICAgICB0aGlzLmludGVybmFsVHJhbnNmb3JtJCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwdXNoKGl0ZW06IFQpOiB2b2lkIHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgdGhpcy5pdGVtcyRbaXRlbVt0aGlzLmlkZW50aWZpZXJdXSA9IGl0ZW07XG4gICAgICB0aGlzLmludGVybmFsVHJhbnNmb3JtJCgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBpbnRlcm5hbFRyYW5zZm9ybSQoKTogdm9pZCB7XG4gICAgdGhpcy50cmFuc2Zvcm1lZEl0ZW1zJCA9IE9iamVjdC52YWx1ZXModGhpcy5pdGVtcyQpO1xuICAgIGlmICh0aGlzLnRyYW5zZm9ybSkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1lZEl0ZW1zJCA9IHRoaXMudHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtZWRJdGVtcyQpO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlZC5uZXh0KHRoaXMudHJhbnNmb3JtZWRJdGVtcyQpO1xuICB9XG5cbiAgZ2V0IGl0ZW1zKCk6IFRbXSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZWRJdGVtcyQ7XG4gIH1cbn1cbiJdfQ==