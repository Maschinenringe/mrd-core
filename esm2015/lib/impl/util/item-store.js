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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2ltcGwvdXRpbC9pdGVtLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sUUFBUSxDQUFDOzs7O0FBRzVCLE1BQU0sT0FBTyxTQUFTOzs7OztJQU9wQixZQUNrQixVQUFlLEVBQ2YsU0FBK0I7UUFEL0IsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNmLGNBQVMsR0FBVCxTQUFTLENBQXNCO1FBUGpDLGNBQVMsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUU5QyxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLHNCQUFpQixHQUFRLEVBQUUsQ0FBQztJQUtuQyxDQUFDOzs7OztJQUVHLFdBQVcsQ0FBQyxLQUFVO1FBQzNCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3BCLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxJQUFPO1FBQ25CLElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7O0lBRU0sa0JBQWtCLENBQUMsVUFBZTtRQUN2QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsSUFBTztRQUNuQixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUMxQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7O0lBRU0sSUFBSSxDQUFDLElBQU87UUFDakIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDMUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVTLGtCQUFrQjtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Q0FDRjs7O0lBL0RDLDhCQUF3RDs7Ozs7SUFFeEQsMkJBQThCOzs7OztJQUM5QixzQ0FBc0M7O0lBR3BDLCtCQUErQjs7SUFDL0IsOEJBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi91dGlsXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW1TdG9yZTxUPiB7XHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBvbkNoYW5nZWQ6IFN1YmplY3Q8VFtdPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByb3RlY3RlZCBpdGVtcyQ6IG9iamVjdCA9IHt9O1xyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm1lZEl0ZW1zJDogVFtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJlYWRvbmx5IGlkZW50aWZpZXI6IGFueSxcclxuICAgIHB1YmxpYyByZWFkb25seSB0cmFuc2Zvcm0/OiAoaXRlbXM6IFRbXSkgPT4gVFtdXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgdXBkYXRlSXRlbXMoaXRlbXM6IFRbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGVhcigpO1xyXG4gICAgaXRlbXMgPSBpdGVtcyB8fCBbXTtcclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgICB0aGlzLml0ZW1zJFtpdGVtW3RoaXMuaWRlbnRpZmllcl1dID0gaXRlbTtcclxuICAgIH1cclxuICAgIHRoaXMuaW50ZXJuYWxUcmFuc2Zvcm0kKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLml0ZW1zJCA9IHt9O1xyXG4gICAgdGhpcy50cmFuc2Zvcm1lZEl0ZW1zJCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICBpZiAoaXRlbSkge1xyXG4gICAgICBkZWxldGUgdGhpcy5pdGVtcyRbaXRlbVt0aGlzLmlkZW50aWZpZXJdXTtcclxuICAgICAgdGhpcy5pbnRlcm5hbFRyYW5zZm9ybSQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVCeUlkZW50aWZpZXIoaWRlbnRpZmllcjogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQoaWRlbnRpZmllcikpIHtcclxuICAgICAgZGVsZXRlIHRoaXMuaXRlbXMkW2lkZW50aWZpZXJdO1xyXG4gICAgICB0aGlzLmludGVybmFsVHJhbnNmb3JtJCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShpdGVtOiBUKTogdm9pZCB7XHJcbiAgICBpZiAoaXRlbSkge1xyXG4gICAgICB0aGlzLml0ZW1zJFtpdGVtW3RoaXMuaWRlbnRpZmllcl1dID0gaXRlbTtcclxuICAgICAgdGhpcy5pbnRlcm5hbFRyYW5zZm9ybSQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBwdXNoKGl0ZW06IFQpOiB2b2lkIHtcclxuICAgIGlmIChpdGVtKSB7XHJcbiAgICAgIHRoaXMuaXRlbXMkW2l0ZW1bdGhpcy5pZGVudGlmaWVyXV0gPSBpdGVtO1xyXG4gICAgICB0aGlzLmludGVybmFsVHJhbnNmb3JtJCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGludGVybmFsVHJhbnNmb3JtJCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHJhbnNmb3JtZWRJdGVtcyQgPSBPYmplY3QudmFsdWVzKHRoaXMuaXRlbXMkKTtcclxuICAgIGlmICh0aGlzLnRyYW5zZm9ybSkge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybWVkSXRlbXMkID0gdGhpcy50cmFuc2Zvcm0odGhpcy50cmFuc2Zvcm1lZEl0ZW1zJCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uQ2hhbmdlZC5uZXh0KHRoaXMudHJhbnNmb3JtZWRJdGVtcyQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGl0ZW1zKCk6IFRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1lZEl0ZW1zJDtcclxuICB9XHJcbn1cclxuIl19