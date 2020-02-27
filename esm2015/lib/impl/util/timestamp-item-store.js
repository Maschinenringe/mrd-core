/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/timestamp-item-store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ItemStore } from "./item-store";
import { Util } from "./util";
import * as _ from 'underscore';
/**
 * @template TModel
 */
export class TimestampItemStore extends ItemStore {
    /**
     * @param {?} identifier
     * @param {?} itemLifetimeInSeconds
     * @param {?=} transform
     */
    constructor(identifier, itemLifetimeInSeconds, transform) {
        super(identifier, transform);
        this.itemLifetimeInSeconds = itemLifetimeInSeconds;
        this.wasFilled = false;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    updateItems(items) {
        super.updateItems(items);
        _.each(this.items, (/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.trackItem(item)));
        this.wasFilled = true;
    }
    /**
     * @return {?}
     */
    clear() {
        super.clear();
        this.wasFilled = false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    update(item) {
        super.update(item);
        this.trackItem(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    push(item) {
        super.push(item);
        this.trackItem(item);
    }
    /**
     * @param {?} identifier
     * @return {?}
     */
    isItemValid(identifier) {
        /** @type {?} */
        let itemInStore = null;
        for (const item of this.items) {
            if (item[this.identifier] === identifier) {
                itemInStore = item;
                break;
            }
        }
        if (!Util.isDefined(itemInStore)) {
            return false;
        }
        /** @type {?} */
        const currentTimeStamp = Util.getCurrentUnixTimestamp();
        return (currentTimeStamp - this.itemLifetimeInSeconds) < itemInStore[TimestampItemStore.ITEM_TIMESTAMP_KEY];
    }
    /**
     * @return {?}
     */
    isStoreValid() {
        if (!this.wasFilled) {
            return false;
        }
        if (_.isEmpty(this.items)) {
            return false;
        }
        return _.all(this.items, (/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.isItemValid(item[this.identifier])));
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    trackItem(item) {
        item[TimestampItemStore.ITEM_TIMESTAMP_KEY] = Util.getCurrentUnixTimestamp();
    }
}
TimestampItemStore.ITEM_TIMESTAMP_KEY = '__timestamp__';
if (false) {
    /** @type {?} */
    TimestampItemStore.ITEM_TIMESTAMP_KEY;
    /**
     * @type {?}
     * @private
     */
    TimestampItemStore.prototype.wasFilled;
    /**
     * @type {?}
     * @private
     */
    TimestampItemStore.prototype.itemLifetimeInSeconds;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXN0YW1wLWl0ZW0tc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvdGltZXN0YW1wLWl0ZW0tc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7Ozs7QUFFaEMsTUFBTSxPQUFPLGtCQUEyQixTQUFRLFNBQWlCOzs7Ozs7SUFNL0QsWUFDRSxVQUFlLEVBQ1AscUJBQTZCLEVBQ3JDLFNBQXlDO1FBRXpDLEtBQUssQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFIckIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFRO1FBSXJDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLEtBQWU7UUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLOzs7O1FBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOzs7O0lBRU0sS0FBSztRQUNWLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLElBQVk7UUFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU0sSUFBSSxDQUFDLElBQVk7UUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLFVBQWU7O1lBQzVCLFdBQVcsR0FBRyxJQUFJO1FBQ3RCLEtBQUksTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUN4QyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixNQUFNO2FBQ1A7U0FDRjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O2NBQ0ssZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1FBQ3ZELE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM5RyxDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLOzs7O1FBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLElBQVk7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDL0UsQ0FBQzs7QUE3RHNCLHFDQUFrQixHQUFHLGVBQWUsQ0FBQzs7O0lBQTVELHNDQUE0RDs7Ozs7SUFFNUQsdUNBQTJCOzs7OztJQUl6QixtREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0l0ZW1TdG9yZX0gZnJvbSBcIi4vaXRlbS1zdG9yZVwiO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lc3RhbXBJdGVtU3RvcmU8VE1vZGVsPiBleHRlbmRzIEl0ZW1TdG9yZTxUTW9kZWw+IHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBJVEVNX1RJTUVTVEFNUF9LRVkgPSAnX190aW1lc3RhbXBfXyc7XHJcblxyXG4gIHByaXZhdGUgd2FzRmlsbGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGlkZW50aWZpZXI6IGFueSxcclxuICAgIHByaXZhdGUgaXRlbUxpZmV0aW1lSW5TZWNvbmRzOiBudW1iZXIsXHJcbiAgICB0cmFuc2Zvcm0/OiAoaXRlbXM6IFRNb2RlbFtdKSA9PiBUTW9kZWxbXVxyXG4gICkge1xyXG4gICAgc3VwZXIoaWRlbnRpZmllciwgdHJhbnNmb3JtKTtcclxuICAgIHRoaXMud2FzRmlsbGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlSXRlbXMoaXRlbXM6IFRNb2RlbFtdKTogdm9pZCB7XHJcbiAgICBzdXBlci51cGRhdGVJdGVtcyhpdGVtcyk7XHJcbiAgICBfLmVhY2godGhpcy5pdGVtcywgKGl0ZW0pID0+IHRoaXMudHJhY2tJdGVtKGl0ZW0pKTtcclxuICAgIHRoaXMud2FzRmlsbGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuICAgIHN1cGVyLmNsZWFyKCk7XHJcbiAgICB0aGlzLndhc0ZpbGxlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShpdGVtOiBUTW9kZWwpOiB2b2lkIHtcclxuICAgIHN1cGVyLnVwZGF0ZShpdGVtKTtcclxuICAgIHRoaXMudHJhY2tJdGVtKGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHB1c2goaXRlbTogVE1vZGVsKTogdm9pZCB7XHJcbiAgICBzdXBlci5wdXNoKGl0ZW0pO1xyXG4gICAgdGhpcy50cmFja0l0ZW0oaXRlbSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNJdGVtVmFsaWQoaWRlbnRpZmllcjogYW55KTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaXRlbUluU3RvcmUgPSBudWxsO1xyXG4gICAgZm9yKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xyXG4gICAgICBpZiAoaXRlbVt0aGlzLmlkZW50aWZpZXJdID09PSBpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgaXRlbUluU3RvcmUgPSBpdGVtO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKGl0ZW1JblN0b3JlKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjdXJyZW50VGltZVN0YW1wID0gVXRpbC5nZXRDdXJyZW50VW5peFRpbWVzdGFtcCgpO1xyXG4gICAgcmV0dXJuIChjdXJyZW50VGltZVN0YW1wIC0gdGhpcy5pdGVtTGlmZXRpbWVJblNlY29uZHMpIDwgaXRlbUluU3RvcmVbVGltZXN0YW1wSXRlbVN0b3JlLklURU1fVElNRVNUQU1QX0tFWV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNTdG9yZVZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLndhc0ZpbGxlZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoXy5pc0VtcHR5KHRoaXMuaXRlbXMpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBfLmFsbCh0aGlzLml0ZW1zLCAoaXRlbSkgPT4gdGhpcy5pc0l0ZW1WYWxpZChpdGVtW3RoaXMuaWRlbnRpZmllcl0pKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHJhY2tJdGVtKGl0ZW06IFRNb2RlbCk6IHZvaWQge1xyXG4gICAgaXRlbVtUaW1lc3RhbXBJdGVtU3RvcmUuSVRFTV9USU1FU1RBTVBfS0VZXSA9IFV0aWwuZ2V0Q3VycmVudFVuaXhUaW1lc3RhbXAoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==