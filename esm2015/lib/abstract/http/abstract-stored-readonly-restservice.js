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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmVkLXJlYWRvbmx5LXJlc3RzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1zdG9yZWQtcmVhZG9ubHktcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFHN0MsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFHM0YsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDekUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFFMUMsTUFBTSxPQUFnQixpQ0FBMEMsU0FBUSxVQUFVOzs7OztJQVVoRixZQUNFLG1CQUF5RDtRQUV6RCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3pFLElBQUksMkJBQTJCLEVBQVUsQ0FBQztJQUM5QyxDQUFDOzs7Ozs7SUFFTSxHQUFHLENBQUMsWUFBcUIsRUFBRSxXQUFvQjtRQUNwRCxPQUFPLElBQUksbUJBQW1CLENBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQzthQUN0RyxJQUFJLENBQ0gsR0FBRzs7OztRQUFFLENBQUMsUUFBa0IsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUMsRUFBQyxDQUNILENBQUM7SUFDTixDQUFDOzs7Ozs7O0lBRU0sSUFBSSxDQUFDLEVBQU8sRUFBRSxTQUFrQixFQUFFLFdBQW9CO1FBQzNELE9BQU8sSUFBSSxtQkFBbUIsQ0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQzthQUN4RyxJQUFJLENBQ0gsR0FBRzs7OztRQUFFLENBQUMsUUFBZ0IsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDTixDQUFDO0NBR0Y7OztJQWxDQyxnREFBNEI7O0lBQzVCLGtEQUF5Qzs7SUFDekMsdURBQW1DOzs7OztJQUNuQyxpREFBb0M7O0lBRXBDLHFEQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZU9iamVjdH0gZnJvbSBcIi4uL3VpL2Jhc2Utb2JqZWN0XCI7XHJcbmltcG9ydCB7SVJlYWRvbmx5U3RvcmVSZXN0U2VydmljZX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS9odHRwL2ktcmVhZG9ubHktc3RvcmVkLXJlc3Qtc2VydmljZVwiO1xyXG5pbXBvcnQge0l0ZW1TdG9yZX0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC9pdGVtLXN0b3JlXCI7XHJcbmltcG9ydCB7UmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyfSBmcm9tIFwiLi4vLi4vaW1wbC9odHRwL3JlYWRvbmx5LXJlc3Qtc2VydmljZS1vYnNlcnZlclwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7UmVhZG9ubHlSZXN0SGFuZGxlcn0gZnJvbSBcIi4uLy4uL2ltcGwvaHR0cC9yZWFkb255LXJlc3QtaGFuZGxlclwiO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC91dGlsXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTdG9yZWRSZWFkb25seVJlc3RzZXJ2aWNlPFRNb2RlbD4gZXh0ZW5kcyBCYXNlT2JqZWN0XHJcbiAgaW1wbGVtZW50cyBJUmVhZG9ubHlTdG9yZVJlc3RTZXJ2aWNlPFRNb2RlbD4ge1xyXG5cclxuICBwdWJsaWMgYWJzdHJhY3QgdXJsOiBzdHJpbmc7XHJcbiAgcHVibGljIGFic3RyYWN0IHN0b3JlOiBJdGVtU3RvcmU8VE1vZGVsPjtcclxuICBwdWJsaWMgYWJzdHJhY3QgaWRlbnRpZmllcjogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBodHRwOiBIdHRwQ2xpZW50O1xyXG5cclxuICBwdWJsaWMgcmVhZG9ubHkgb2JzZXJ2ZXI6IFJlYWRvbmx5UmVzdFNlcnZpY2VPYnNlcnZlcjxUTW9kZWw+O1xyXG5cclxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoXHJcbiAgICByZXN0U2VydmljZU9ic2VydmVyPzogUmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyPFRNb2RlbD5cclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm9ic2VydmVyID0gVXRpbC5pc0RlZmluZWQocmVzdFNlcnZpY2VPYnNlcnZlcikgPyByZXN0U2VydmljZU9ic2VydmVyIDpcclxuICAgICAgbmV3IFJlYWRvbmx5UmVzdFNlcnZpY2VPYnNlcnZlcjxUTW9kZWw+KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWxsKHNlYXJjaFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRNb2RlbFtdPiB7XHJcbiAgICByZXR1cm4gbmV3IFJlYWRvbmx5UmVzdEhhbmRsZXI8VE1vZGVsPih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyKS5hbGwoc2VhcmNoUGFyYW1zLCBodHRwT3B0aW9ucylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKCAocmVzcG9uc2U6IFRNb2RlbFtdKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN0b3JlLnVwZGF0ZUl0ZW1zKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3coaWQ6IGFueSwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VE1vZGVsPiB7XHJcbiAgICByZXR1cm4gbmV3IFJlYWRvbmx5UmVzdEhhbmRsZXI8VE1vZGVsPih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyKS5zaG93KGlkLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoIChyZXNwb25zZTogVE1vZGVsKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN0b3JlLnVwZGF0ZShyZXNwb25zZSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=