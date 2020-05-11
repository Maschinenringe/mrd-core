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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXN0YW1wLWl0ZW0tc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvdGltZXN0YW1wLWl0ZW0tc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7Ozs7QUFFaEMsTUFBTSxPQUFPLGtCQUEyQixTQUFRLFNBQWlCOzs7Ozs7SUFNL0QsWUFDRSxVQUFlLEVBQ1AscUJBQTZCLEVBQ3JDLFNBQXlDO1FBRXpDLEtBQUssQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFIckIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFRO1FBSXJDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLEtBQWU7UUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLOzs7O1FBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOzs7O0lBRU0sS0FBSztRQUNWLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLElBQVk7UUFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU0sSUFBSSxDQUFDLElBQVk7UUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLFVBQWU7O1lBQzVCLFdBQVcsR0FBRyxJQUFJO1FBQ3RCLEtBQUksTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUN4QyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixNQUFNO2FBQ1A7U0FDRjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O2NBQ0ssZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1FBQ3ZELE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM5RyxDQUFDOzs7O0lBRU0sWUFBWTtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLOzs7O1FBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDOUUsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLElBQVk7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDL0UsQ0FBQzs7QUE3RHNCLHFDQUFrQixHQUFHLGVBQWUsQ0FBQzs7O0lBQTVELHNDQUE0RDs7Ozs7SUFFNUQsdUNBQTJCOzs7OztJQUl6QixtREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0l0ZW1TdG9yZX0gZnJvbSBcIi4vaXRlbS1zdG9yZVwiO1xuaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi91dGlsXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgVGltZXN0YW1wSXRlbVN0b3JlPFRNb2RlbD4gZXh0ZW5kcyBJdGVtU3RvcmU8VE1vZGVsPiB7XG5cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBJVEVNX1RJTUVTVEFNUF9LRVkgPSAnX190aW1lc3RhbXBfXyc7XG5cbiAgcHJpdmF0ZSB3YXNGaWxsZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaWRlbnRpZmllcjogYW55LFxuICAgIHByaXZhdGUgaXRlbUxpZmV0aW1lSW5TZWNvbmRzOiBudW1iZXIsXG4gICAgdHJhbnNmb3JtPzogKGl0ZW1zOiBUTW9kZWxbXSkgPT4gVE1vZGVsW11cbiAgKSB7XG4gICAgc3VwZXIoaWRlbnRpZmllciwgdHJhbnNmb3JtKTtcbiAgICB0aGlzLndhc0ZpbGxlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZUl0ZW1zKGl0ZW1zOiBUTW9kZWxbXSk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZUl0ZW1zKGl0ZW1zKTtcbiAgICBfLmVhY2godGhpcy5pdGVtcywgKGl0ZW0pID0+IHRoaXMudHJhY2tJdGVtKGl0ZW0pKTtcbiAgICB0aGlzLndhc0ZpbGxlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgc3VwZXIuY2xlYXIoKTtcbiAgICB0aGlzLndhc0ZpbGxlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShpdGVtOiBUTW9kZWwpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGUoaXRlbSk7XG4gICAgdGhpcy50cmFja0l0ZW0oaXRlbSk7XG4gIH1cblxuICBwdWJsaWMgcHVzaChpdGVtOiBUTW9kZWwpOiB2b2lkIHtcbiAgICBzdXBlci5wdXNoKGl0ZW0pO1xuICAgIHRoaXMudHJhY2tJdGVtKGl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGlzSXRlbVZhbGlkKGlkZW50aWZpZXI6IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCBpdGVtSW5TdG9yZSA9IG51bGw7XG4gICAgZm9yKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xuICAgICAgaWYgKGl0ZW1bdGhpcy5pZGVudGlmaWVyXSA9PT0gaWRlbnRpZmllcikge1xuICAgICAgICBpdGVtSW5TdG9yZSA9IGl0ZW07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKGl0ZW1JblN0b3JlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50VGltZVN0YW1wID0gVXRpbC5nZXRDdXJyZW50VW5peFRpbWVzdGFtcCgpO1xuICAgIHJldHVybiAoY3VycmVudFRpbWVTdGFtcCAtIHRoaXMuaXRlbUxpZmV0aW1lSW5TZWNvbmRzKSA8IGl0ZW1JblN0b3JlW1RpbWVzdGFtcEl0ZW1TdG9yZS5JVEVNX1RJTUVTVEFNUF9LRVldO1xuICB9XG5cbiAgcHVibGljIGlzU3RvcmVWYWxpZCgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMud2FzRmlsbGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChfLmlzRW1wdHkodGhpcy5pdGVtcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIF8uYWxsKHRoaXMuaXRlbXMsIChpdGVtKSA9PiB0aGlzLmlzSXRlbVZhbGlkKGl0ZW1bdGhpcy5pZGVudGlmaWVyXSkpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFja0l0ZW0oaXRlbTogVE1vZGVsKTogdm9pZCB7XG4gICAgaXRlbVtUaW1lc3RhbXBJdGVtU3RvcmUuSVRFTV9USU1FU1RBTVBfS0VZXSA9IFV0aWwuZ2V0Q3VycmVudFVuaXhUaW1lc3RhbXAoKTtcbiAgfVxuXG59XG4iXX0=