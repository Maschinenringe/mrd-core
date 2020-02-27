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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmVhZG9ubHktY2FjaGVkLXJlc3RzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1yZWFkb25seS1jYWNoZWQtcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDekYsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQzs7Ozs7QUFHaEM7Ozs7O0lBQ1UsNkRBQXlDO0lBRG5EOztJQXVCQSxDQUFDOzs7Ozs7SUFsQlEsK0NBQUc7Ozs7O0lBQVYsVUFBVyxZQUFxQixFQUFFLFdBQW9CO1FBQ3BELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUM3QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxPQUFPLGlCQUFNLEdBQUcsWUFBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7Ozs7O0lBRU0sZ0RBQUk7Ozs7OztJQUFYLFVBQVksRUFBTyxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFDM0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRTs7Z0JBQ3hCLE1BQU0sR0FBRyxtQkFBQSxFQUFFLEVBQVU7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDN0IsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxpQkFBTSxJQUFJLFlBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBR0gsd0NBQUM7QUFBRCxDQUFDLEFBdkJELENBQ1UsaUNBQWlDLEdBc0IxQzs7Ozs7Ozs7SUFwQkMsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBYnN0cmFjdFN0b3JlZFJlYWRvbmx5UmVzdHNlcnZpY2V9IGZyb20gXCIuL2Fic3RyYWN0LXN0b3JlZC1yZWFkb25seS1yZXN0c2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQge1RpbWVzdGFtcEl0ZW1TdG9yZX0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC90aW1lc3RhbXAtaXRlbS1zdG9yZVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UmVhZG9ubHlDYWNoZWRSZXN0c2VydmljZTxUTW9kZWw+XHJcbiAgZXh0ZW5kcyBBYnN0cmFjdFN0b3JlZFJlYWRvbmx5UmVzdHNlcnZpY2U8VE1vZGVsPiB7XHJcblxyXG4gIHB1YmxpYyBhYnN0cmFjdCBzdG9yZTogVGltZXN0YW1wSXRlbVN0b3JlPFRNb2RlbD47XHJcblxyXG4gIHB1YmxpYyBhbGwoc2VhcmNoUGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VE1vZGVsW10+IHtcclxuICAgIGlmICh0aGlzLnN0b3JlLmlzU3RvcmVWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybiBvZih0aGlzLnN0b3JlLml0ZW1zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5hbGwoc2VhcmNoUGFyYW1zLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvdyhpZDogYW55LCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUTW9kZWw+IHtcclxuICAgIGlmICh0aGlzLnN0b3JlLmlzSXRlbVZhbGlkKGlkKSkge1xyXG4gICAgICBjb25zdCBsb29rdXAgPSB7fSBhcyBUTW9kZWw7XHJcbiAgICAgIGxvb2t1cFt0aGlzLmlkZW50aWZpZXJdID0gaWQ7XHJcbiAgICAgIHJldHVybiBvZihfLmZpbmQodGhpcy5zdG9yZS5pdGVtcywgbG9va3VwKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3VwZXIuc2hvdyhpZCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19