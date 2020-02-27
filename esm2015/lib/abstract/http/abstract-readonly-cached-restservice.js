/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-readonly-cached-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AbstractStoredReadonlyRestservice } from "./abstract-stored-readonly-restservice";
import { of } from 'rxjs';
import * as _ from 'underscore';
/**
 * @abstract
 * @template TModel
 */
export class AbstractReadonlyCachedRestservice extends AbstractStoredReadonlyRestservice {
    /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    all(searchParams, httpOptions) {
        if (this.store.isStoreValid()) {
            return of(this.store.items);
        }
        else {
            return super.all(searchParams, httpOptions);
        }
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    show(id, getParams, httpOptions) {
        if (this.store.isItemValid(id)) {
            /** @type {?} */
            const lookup = (/** @type {?} */ ({}));
            lookup[this.identifier] = id;
            return of(_.find(this.store.items, lookup));
        }
        return super.show(id, getParams, httpOptions);
    }
}
if (false) {
    /** @type {?} */
    AbstractReadonlyCachedRestservice.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmVhZG9ubHktY2FjaGVkLXJlc3RzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1yZWFkb25seS1jYWNoZWQtcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsaUNBQWlDLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDOzs7OztBQUdoQyxNQUFNLE9BQWdCLGlDQUNwQixTQUFRLGlDQUF5Qzs7Ozs7O0lBSTFDLEdBQUcsQ0FBQyxZQUFxQixFQUFFLFdBQW9CO1FBQ3BELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUM3QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7OztJQUVNLElBQUksQ0FBQyxFQUFPLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjtRQUMzRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFOztrQkFDeEIsTUFBTSxHQUFHLG1CQUFBLEVBQUUsRUFBVTtZQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBR0Y7OztJQXBCQyxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0U3RvcmVkUmVhZG9ubHlSZXN0c2VydmljZX0gZnJvbSBcIi4vYWJzdHJhY3Qtc3RvcmVkLXJlYWRvbmx5LXJlc3RzZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCB7VGltZXN0YW1wSXRlbVN0b3JlfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3RpbWVzdGFtcC1pdGVtLXN0b3JlXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RSZWFkb25seUNhY2hlZFJlc3RzZXJ2aWNlPFRNb2RlbD5cclxuICBleHRlbmRzIEFic3RyYWN0U3RvcmVkUmVhZG9ubHlSZXN0c2VydmljZTxUTW9kZWw+IHtcclxuXHJcbiAgcHVibGljIGFic3RyYWN0IHN0b3JlOiBUaW1lc3RhbXBJdGVtU3RvcmU8VE1vZGVsPjtcclxuXHJcbiAgcHVibGljIGFsbChzZWFyY2hQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUTW9kZWxbXT4ge1xyXG4gICAgaWYgKHRoaXMuc3RvcmUuaXNTdG9yZVZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuIG9mKHRoaXMuc3RvcmUuaXRlbXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLmFsbChzZWFyY2hQYXJhbXMsIGh0dHBPcHRpb25zKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93KGlkOiBhbnksIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRNb2RlbD4ge1xyXG4gICAgaWYgKHRoaXMuc3RvcmUuaXNJdGVtVmFsaWQoaWQpKSB7XHJcbiAgICAgIGNvbnN0IGxvb2t1cCA9IHt9IGFzIFRNb2RlbDtcclxuICAgICAgbG9va3VwW3RoaXMuaWRlbnRpZmllcl0gPSBpZDtcclxuICAgICAgcmV0dXJuIG9mKF8uZmluZCh0aGlzLnN0b3JlLml0ZW1zLCBsb29rdXApKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdXBlci5zaG93KGlkLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=