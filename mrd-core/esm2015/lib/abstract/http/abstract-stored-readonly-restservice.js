/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-stored-readonly-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseObject } from "../ui/base-object";
import { ReadonlyRestServiceObserver } from "../../impl/http/readonly-rest-service-observer";
import { ReadonlyRestHandler } from "../../impl/http/readony-rest-handler";
import { tap } from 'rxjs/operators';
import { Util } from "../../impl/util/util";
/**
 * @abstract
 * @template TModel
 */
export class AbstractStoredReadonlyRestservice extends BaseObject {
    /**
     * @protected
     * @param {?=} restServiceObserver
     */
    constructor(restServiceObserver) {
        super();
        this.observer = Util.isDefined(restServiceObserver) ? restServiceObserver :
            new ReadonlyRestServiceObserver();
    }
    /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    all(searchParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).all(searchParams, httpOptions)
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.store.updateItems(response);
        })));
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    show(id, getParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).show(id, getParams, httpOptions)
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.store.update(response);
        })));
    }
}
if (false) {
    /** @type {?} */
    AbstractStoredReadonlyRestservice.prototype.url;
    /** @type {?} */
    AbstractStoredReadonlyRestservice.prototype.store;
    /** @type {?} */
    AbstractStoredReadonlyRestservice.prototype.identifier;
    /**
     * @type {?}
     * @protected
     */
    AbstractStoredReadonlyRestservice.prototype.http;
    /** @type {?} */
    AbstractStoredReadonlyRestservice.prototype.observer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmVkLXJlYWRvbmx5LXJlc3RzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1zdG9yZWQtcmVhZG9ubHktcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFHN0MsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFHM0YsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFFMUMsTUFBTSxPQUFnQixpQ0FBMEMsU0FBUSxVQUFVOzs7OztJQVVoRixZQUNFLG1CQUF5RDtRQUV6RCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3pFLElBQUksMkJBQTJCLEVBQVUsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFTSxHQUFHLENBQUMsWUFBcUIsRUFBRSxXQUFvQjtRQUNwRCxPQUFPLElBQUksbUJBQW1CLENBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQzthQUN0RyxJQUFJLENBQ0gsR0FBRzs7OztRQUFFLENBQUMsUUFBa0IsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUNILENBQUM7SUFDTixDQUFDOzs7Ozs7O0lBRU0sSUFBSSxDQUFDLEVBQU8sRUFBRSxTQUFrQixFQUFFLFdBQW9CO1FBQzNELE9BQU8sSUFBSSxtQkFBbUIsQ0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQzthQUN4RyxJQUFJLENBQ0gsR0FBRzs7OztRQUFFLENBQUMsUUFBZ0IsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDTixDQUFDO0NBR0Y7OztJQWxDQyxnREFBNEI7O0lBQzVCLGtEQUF5Qzs7SUFDekMsdURBQW1DOzs7OztJQUNuQyxpREFBb0M7O0lBRXBDLHFEQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZU9iamVjdH0gZnJvbSBcIi4uL3VpL2Jhc2Utb2JqZWN0XCI7XG5pbXBvcnQge0lSZWFkb25seVN0b3JlUmVzdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvaHR0cC9pLXJlYWRvbmx5LXN0b3JlZC1yZXN0LXNlcnZpY2VcIjtcbmltcG9ydCB7SXRlbVN0b3JlfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL2l0ZW0tc3RvcmVcIjtcbmltcG9ydCB7UmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyfSBmcm9tIFwiLi4vLi4vaW1wbC9odHRwL3JlYWRvbmx5LXJlc3Qtc2VydmljZS1vYnNlcnZlclwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7UmVhZG9ubHlSZXN0SGFuZGxlcn0gZnJvbSBcIi4uLy4uL2ltcGwvaHR0cC9yZWFkb255LXJlc3QtaGFuZGxlclwiO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3V0aWxcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0U3RvcmVkUmVhZG9ubHlSZXN0c2VydmljZTxUTW9kZWw+IGV4dGVuZHMgQmFzZU9iamVjdFxuICBpbXBsZW1lbnRzIElSZWFkb25seVN0b3JlUmVzdFNlcnZpY2U8VE1vZGVsPiB7XG5cbiAgcHVibGljIGFic3RyYWN0IHVybDogc3RyaW5nO1xuICBwdWJsaWMgYWJzdHJhY3Qgc3RvcmU6IEl0ZW1TdG9yZTxUTW9kZWw+O1xuICBwdWJsaWMgYWJzdHJhY3QgaWRlbnRpZmllcjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgaHR0cDogSHR0cENsaWVudDtcblxuICBwdWJsaWMgcmVhZG9ubHkgb2JzZXJ2ZXI6IFJlYWRvbmx5UmVzdFNlcnZpY2VPYnNlcnZlcjxUTW9kZWw+O1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcbiAgICByZXN0U2VydmljZU9ic2VydmVyPzogUmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyPFRNb2RlbD5cbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9ic2VydmVyID0gVXRpbC5pc0RlZmluZWQocmVzdFNlcnZpY2VPYnNlcnZlcikgPyByZXN0U2VydmljZU9ic2VydmVyIDpcbiAgICAgIG5ldyBSZWFkb25seVJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VE1vZGVsPigpO1xuICB9XG5cbiAgcHVibGljIGFsbChzZWFyY2hQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUTW9kZWxbXT4ge1xuICAgIHJldHVybiBuZXcgUmVhZG9ubHlSZXN0SGFuZGxlcjxUTW9kZWw+KHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIpLmFsbChzZWFyY2hQYXJhbXMsIGh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCggKHJlc3BvbnNlOiBUTW9kZWxbXSkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RvcmUudXBkYXRlSXRlbXMocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93KGlkOiBhbnksIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRNb2RlbD4ge1xuICAgIHJldHVybiBuZXcgUmVhZG9ubHlSZXN0SGFuZGxlcjxUTW9kZWw+KHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIpLnNob3coaWQsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCAocmVzcG9uc2U6IFRNb2RlbCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RvcmUudXBkYXRlKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuXG59XG4iXX0=