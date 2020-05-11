/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-readonly-cached-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AbstractStoredReadonlyRestservice } from "./abstract-stored-readonly-restservice";
import { of } from 'rxjs';
import * as _ from 'underscore';
/**
 * @abstract
 * @template TModel
 */
var /**
 * @abstract
 * @template TModel
 */
AbstractReadonlyCachedRestservice = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractReadonlyCachedRestservice, _super);
    function AbstractReadonlyCachedRestservice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractReadonlyCachedRestservice.prototype.all = /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (searchParams, httpOptions) {
        if (this.store.isStoreValid()) {
            return of(this.store.items);
        }
        else {
            return _super.prototype.all.call(this, searchParams, httpOptions);
        }
    };
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractReadonlyCachedRestservice.prototype.show = /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (id, getParams, httpOptions) {
        if (this.store.isItemValid(id)) {
            /** @type {?} */
            var lookup = (/** @type {?} */ ({}));
            lookup[this.identifier] = id;
            return of(_.find(this.store.items, lookup));
        }
        return _super.prototype.show.call(this, id, getParams, httpOptions);
    };
    return AbstractReadonlyCachedRestservice;
}(AbstractStoredReadonlyRestservice));
/**
 * @abstract
 * @template TModel
 */
export { AbstractReadonlyCachedRestservice };
if (false) {
    /** @type {?} */
    AbstractReadonlyCachedRestservice.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmVhZG9ubHktY2FjaGVkLXJlc3RzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1yZWFkb25seS1jYWNoZWQtcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDekYsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQzs7Ozs7QUFHaEM7Ozs7O0lBQ1UsNkRBQXlDO0lBRG5EOztJQXVCQSxDQUFDOzs7Ozs7SUFsQlEsK0NBQUc7Ozs7O0lBQVYsVUFBVyxZQUFxQixFQUFFLFdBQW9CO1FBQ3BELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUM3QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxPQUFPLGlCQUFNLEdBQUcsWUFBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7Ozs7O0lBRU0sZ0RBQUk7Ozs7OztJQUFYLFVBQVksRUFBTyxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFDM0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRTs7Z0JBQ3hCLE1BQU0sR0FBRyxtQkFBQSxFQUFFLEVBQVU7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxpQkFBTSxJQUFJLFlBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBR0gsd0NBQUM7QUFBRCxDQUFDLEFBdkJELENBQ1UsaUNBQWlDLEdBc0IxQzs7Ozs7Ozs7SUFwQkMsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBYnN0cmFjdFN0b3JlZFJlYWRvbmx5UmVzdHNlcnZpY2V9IGZyb20gXCIuL2Fic3RyYWN0LXN0b3JlZC1yZWFkb25seS1yZXN0c2VydmljZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQge1RpbWVzdGFtcEl0ZW1TdG9yZX0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC90aW1lc3RhbXAtaXRlbS1zdG9yZVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RSZWFkb25seUNhY2hlZFJlc3RzZXJ2aWNlPFRNb2RlbD5cbiAgZXh0ZW5kcyBBYnN0cmFjdFN0b3JlZFJlYWRvbmx5UmVzdHNlcnZpY2U8VE1vZGVsPiB7XG5cbiAgcHVibGljIGFic3RyYWN0IHN0b3JlOiBUaW1lc3RhbXBJdGVtU3RvcmU8VE1vZGVsPjtcblxuICBwdWJsaWMgYWxsKHNlYXJjaFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRNb2RlbFtdPiB7XG4gICAgaWYgKHRoaXMuc3RvcmUuaXNTdG9yZVZhbGlkKCkpIHtcbiAgICAgIHJldHVybiBvZih0aGlzLnN0b3JlLml0ZW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1cGVyLmFsbChzZWFyY2hQYXJhbXMsIGh0dHBPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvdyhpZDogYW55LCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUTW9kZWw+IHtcbiAgICBpZiAodGhpcy5zdG9yZS5pc0l0ZW1WYWxpZChpZCkpIHtcbiAgICAgIGNvbnN0IGxvb2t1cCA9IHt9IGFzIFRNb2RlbDtcbiAgICAgIGxvb2t1cFt0aGlzLmlkZW50aWZpZXJdID0gaWQ7XG4gICAgICByZXR1cm4gb2YoXy5maW5kKHRoaXMuc3RvcmUuaXRlbXMsIGxvb2t1cCkpO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuc2hvdyhpZCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XG4gIH1cblxuXG59XG4iXX0=