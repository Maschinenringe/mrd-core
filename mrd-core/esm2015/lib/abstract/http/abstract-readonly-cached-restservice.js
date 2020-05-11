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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmVhZG9ubHktY2FjaGVkLXJlc3RzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1yZWFkb25seS1jYWNoZWQtcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsaUNBQWlDLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDOzs7OztBQUdoQyxNQUFNLE9BQWdCLGlDQUNwQixTQUFRLGlDQUF5Qzs7Ozs7O0lBSTFDLEdBQUcsQ0FBQyxZQUFxQixFQUFFLFdBQW9CO1FBQ3BELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUM3QixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7OztJQUVNLElBQUksQ0FBQyxFQUFPLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjtRQUMzRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFOztrQkFDeEIsTUFBTSxHQUFHLG1CQUFBLEVBQUUsRUFBVTtZQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBR0Y7OztJQXBCQyxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0U3RvcmVkUmVhZG9ubHlSZXN0c2VydmljZX0gZnJvbSBcIi4vYWJzdHJhY3Qtc3RvcmVkLXJlYWRvbmx5LXJlc3RzZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7VGltZXN0YW1wSXRlbVN0b3JlfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3RpbWVzdGFtcC1pdGVtLXN0b3JlXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFJlYWRvbmx5Q2FjaGVkUmVzdHNlcnZpY2U8VE1vZGVsPlxuICBleHRlbmRzIEFic3RyYWN0U3RvcmVkUmVhZG9ubHlSZXN0c2VydmljZTxUTW9kZWw+IHtcblxuICBwdWJsaWMgYWJzdHJhY3Qgc3RvcmU6IFRpbWVzdGFtcEl0ZW1TdG9yZTxUTW9kZWw+O1xuXG4gIHB1YmxpYyBhbGwoc2VhcmNoUGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VE1vZGVsW10+IHtcbiAgICBpZiAodGhpcy5zdG9yZS5pc1N0b3JlVmFsaWQoKSkge1xuICAgICAgcmV0dXJuIG9mKHRoaXMuc3RvcmUuaXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIuYWxsKHNlYXJjaFBhcmFtcywgaHR0cE9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG93KGlkOiBhbnksIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRNb2RlbD4ge1xuICAgIGlmICh0aGlzLnN0b3JlLmlzSXRlbVZhbGlkKGlkKSkge1xuICAgICAgY29uc3QgbG9va3VwID0ge30gYXMgVE1vZGVsO1xuICAgICAgbG9va3VwW3RoaXMuaWRlbnRpZmllcl0gPSBpZDtcbiAgICAgIHJldHVybiBvZihfLmZpbmQodGhpcy5zdG9yZS5pdGVtcywgbG9va3VwKSk7XG4gICAgfVxuICAgIHJldHVybiBzdXBlci5zaG93KGlkLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcbiAgfVxuXG5cbn1cbiJdfQ==