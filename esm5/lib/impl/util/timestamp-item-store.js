/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/timestamp-item-store.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ItemStore } from "./item-store";
import { Util } from "./util";
import * as _ from 'underscore';
/**
 * @template TModel
 */
var TimestampItemStore = /** @class */ (function (_super) {
    tslib_1.__extends(TimestampItemStore, _super);
    function TimestampItemStore(identifier, itemLifetimeInSeconds, transform) {
        var _this = _super.call(this, identifier, transform) || this;
        _this.itemLifetimeInSeconds = itemLifetimeInSeconds;
        _this.wasFilled = false;
        return _this;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    TimestampItemStore.prototype.updateItems = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        _super.prototype.updateItems.call(this, items);
        _.each(this.items, (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.trackItem(item); }));
        this.wasFilled = true;
    };
    /**
     * @return {?}
     */
    TimestampItemStore.prototype.clear = /**
     * @return {?}
     */
    function () {
        _super.prototype.clear.call(this);
        this.wasFilled = false;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    TimestampItemStore.prototype.update = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        _super.prototype.update.call(this, item);
        this.trackItem(item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    TimestampItemStore.prototype.push = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        _super.prototype.push.call(this, item);
        this.trackItem(item);
    };
    /**
     * @param {?} identifier
     * @return {?}
     */
    TimestampItemStore.prototype.isItemValid = /**
     * @param {?} identifier
     * @return {?}
     */
    function (identifier) {
        var e_1, _a;
        /** @type {?} */
        var itemInStore = null;
        try {
            for (var _b = tslib_1.__values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item[this.identifier] === identifier) {
                    itemInStore = item;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (!Util.isDefined(itemInStore)) {
            return false;
        }
        /** @type {?} */
        var currentTimeStamp = Util.getCurrentUnixTimestamp();
        return (currentTimeStamp - this.itemLifetimeInSeconds) < itemInStore[TimestampItemStore.ITEM_TIMESTAMP_KEY];
    };
    /**
     * @return {?}
     */
    TimestampItemStore.prototype.isStoreValid = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
        function (item) { return _this.isItemValid(item[_this.identifier]); }));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    TimestampItemStore.prototype.trackItem = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item[TimestampItemStore.ITEM_TIMESTAMP_KEY] = Util.getCurrentUnixTimestamp();
    };
    TimestampItemStore.ITEM_TIMESTAMP_KEY = '__timestamp__';
    return TimestampItemStore;
}(ItemStore));
export { TimestampItemStore };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXN0YW1wLWl0ZW0tc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvdGltZXN0YW1wLWl0ZW0tc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN2QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDOzs7O0FBRWhDO0lBQWdELDhDQUFpQjtJQU0vRCw0QkFDRSxVQUFlLEVBQ1AscUJBQTZCLEVBQ3JDLFNBQXlDO1FBSDNDLFlBS0Usa0JBQU0sVUFBVSxFQUFFLFNBQVMsQ0FBQyxTQUU3QjtRQUxTLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBUTtRQUlyQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7SUFDekIsQ0FBQzs7Ozs7SUFFTSx3Q0FBVzs7OztJQUFsQixVQUFtQixLQUFlO1FBQWxDLGlCQUlDO1FBSEMsaUJBQU0sV0FBVyxZQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7Ozs7UUFBRSxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQXBCLENBQW9CLEVBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDOzs7O0lBRU0sa0NBQUs7OztJQUFaO1FBQ0UsaUJBQU0sS0FBSyxXQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7OztJQUVNLG1DQUFNOzs7O0lBQWIsVUFBYyxJQUFZO1FBQ3hCLGlCQUFNLE1BQU0sWUFBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU0saUNBQUk7Ozs7SUFBWCxVQUFZLElBQVk7UUFDdEIsaUJBQU0sSUFBSSxZQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTSx3Q0FBVzs7OztJQUFsQixVQUFtQixVQUFlOzs7WUFDNUIsV0FBVyxHQUFHLElBQUk7O1lBQ3RCLEtBQWtCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsS0FBSyxDQUFBLGdCQUFBLDRCQUFFO2dCQUExQixJQUFNLElBQUksV0FBQTtnQkFDWixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssVUFBVSxFQUFFO29CQUN4QyxXQUFXLEdBQUcsSUFBSSxDQUFDO29CQUNuQixNQUFNO2lCQUNQO2FBQ0Y7Ozs7Ozs7OztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBQ0ssZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFO1FBQ3ZELE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM5RyxDQUFDOzs7O0lBRU0seUNBQVk7OztJQUFuQjtRQUFBLGlCQVFDO1FBUEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSzs7OztRQUFFLFVBQUMsSUFBSSxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQXZDLENBQXVDLEVBQUMsQ0FBQztJQUM5RSxDQUFDOzs7Ozs7SUFFTyxzQ0FBUzs7Ozs7SUFBakIsVUFBa0IsSUFBWTtRQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUMvRSxDQUFDO0lBN0RzQixxQ0FBa0IsR0FBRyxlQUFlLENBQUM7SUErRDlELHlCQUFDO0NBQUEsQUFqRUQsQ0FBZ0QsU0FBUyxHQWlFeEQ7U0FqRVksa0JBQWtCOzs7SUFFN0Isc0NBQTREOzs7OztJQUU1RCx1Q0FBMkI7Ozs7O0lBSXpCLG1EQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SXRlbVN0b3JlfSBmcm9tIFwiLi9pdGVtLXN0b3JlXCI7XG5pbXBvcnQge1V0aWx9IGZyb20gXCIuL3V0aWxcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBUaW1lc3RhbXBJdGVtU3RvcmU8VE1vZGVsPiBleHRlbmRzIEl0ZW1TdG9yZTxUTW9kZWw+IHtcblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElURU1fVElNRVNUQU1QX0tFWSA9ICdfX3RpbWVzdGFtcF9fJztcblxuICBwcml2YXRlIHdhc0ZpbGxlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBpZGVudGlmaWVyOiBhbnksXG4gICAgcHJpdmF0ZSBpdGVtTGlmZXRpbWVJblNlY29uZHM6IG51bWJlcixcbiAgICB0cmFuc2Zvcm0/OiAoaXRlbXM6IFRNb2RlbFtdKSA9PiBUTW9kZWxbXVxuICApIHtcbiAgICBzdXBlcihpZGVudGlmaWVyLCB0cmFuc2Zvcm0pO1xuICAgIHRoaXMud2FzRmlsbGVkID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlSXRlbXMoaXRlbXM6IFRNb2RlbFtdKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlSXRlbXMoaXRlbXMpO1xuICAgIF8uZWFjaCh0aGlzLml0ZW1zLCAoaXRlbSkgPT4gdGhpcy50cmFja0l0ZW0oaXRlbSkpO1xuICAgIHRoaXMud2FzRmlsbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICBzdXBlci5jbGVhcigpO1xuICAgIHRoaXMud2FzRmlsbGVkID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGl0ZW06IFRNb2RlbCk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZShpdGVtKTtcbiAgICB0aGlzLnRyYWNrSXRlbShpdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBwdXNoKGl0ZW06IFRNb2RlbCk6IHZvaWQge1xuICAgIHN1cGVyLnB1c2goaXRlbSk7XG4gICAgdGhpcy50cmFja0l0ZW0oaXRlbSk7XG4gIH1cblxuICBwdWJsaWMgaXNJdGVtVmFsaWQoaWRlbnRpZmllcjogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IGl0ZW1JblN0b3JlID0gbnVsbDtcbiAgICBmb3IoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICBpZiAoaXRlbVt0aGlzLmlkZW50aWZpZXJdID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgIGl0ZW1JblN0b3JlID0gaXRlbTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghVXRpbC5pc0RlZmluZWQoaXRlbUluU3RvcmUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRUaW1lU3RhbXAgPSBVdGlsLmdldEN1cnJlbnRVbml4VGltZXN0YW1wKCk7XG4gICAgcmV0dXJuIChjdXJyZW50VGltZVN0YW1wIC0gdGhpcy5pdGVtTGlmZXRpbWVJblNlY29uZHMpIDwgaXRlbUluU3RvcmVbVGltZXN0YW1wSXRlbVN0b3JlLklURU1fVElNRVNUQU1QX0tFWV07XG4gIH1cblxuICBwdWJsaWMgaXNTdG9yZVZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy53YXNGaWxsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKF8uaXNFbXB0eSh0aGlzLml0ZW1zKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gXy5hbGwodGhpcy5pdGVtcywgKGl0ZW0pID0+IHRoaXMuaXNJdGVtVmFsaWQoaXRlbVt0aGlzLmlkZW50aWZpZXJdKSk7XG4gIH1cblxuICBwcml2YXRlIHRyYWNrSXRlbShpdGVtOiBUTW9kZWwpOiB2b2lkIHtcbiAgICBpdGVtW1RpbWVzdGFtcEl0ZW1TdG9yZS5JVEVNX1RJTUVTVEFNUF9LRVldID0gVXRpbC5nZXRDdXJyZW50VW5peFRpbWVzdGFtcCgpO1xuICB9XG5cbn1cbiJdfQ==