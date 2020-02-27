/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-cached-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AbstractReadonlyCachedRestservice } from "./abstract-readonly-cached-restservice";
import { RestServiceObserver } from "../../impl/http/rest-service-observer";
import { RestHandler } from "../../impl/http/rest-handler";
import { Util } from "../../impl/util/util";
import { tap } from 'rxjs/operators';
/**
 * @abstract
 * @template TModel
 */
export class AbstractCachedRestservice extends AbstractReadonlyCachedRestservice {
    constructor() {
        super(...arguments);
        this.observer = new RestServiceObserver();
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    create(model, getParams, httpOptions) {
        /** @type {?} */
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .create(model, getParams, httpOptions);
        return this.modifyCreateCall(request);
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    destroy(id, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .destroy(id, getParams, httpOptions)
            .pipe(tap((/**
         * @return {?}
         */
        () => {
            this.store.removeByIdentifier(id);
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    partialUpdate(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .partialUpdate(model, getParams, httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.store.update(result);
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    save(model, getParams, httpOptions) {
        /** @type {?} */
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .save(model, getParams, httpOptions);
        if (Util.isDefined(model[this.identifier])) {
            request = this.modifyUpdateCall(request);
        }
        else {
            request = this.modifyCreateCall(request);
        }
        return request;
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    set(model, getParams, httpOptions) {
        /** @type {?} */
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .set(model, getParams, httpOptions);
        if (Util.isDefined(model[this.identifier])) {
            request = this.modifyUpdateCall(request);
        }
        else {
            request = this.modifyCreateCall(request);
        }
        return request;
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    update(model, getParams, httpOptions) {
        /** @type {?} */
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .update(model, getParams, httpOptions);
        request = this.modifyUpdateCall(request);
        return request;
    }
    /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    modifyCreateCall(observable) {
        return observable.pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.store.push(result);
        })));
    }
    /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    modifyUpdateCall(observable) {
        return observable.pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.store.update(result);
        })));
    }
}
if (false) {
    /** @type {?} */
    AbstractCachedRestservice.prototype.observer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtY2FjaGVkLXJlc3RzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1jYWNoZWQtcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsaUNBQWlDLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUN6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDekQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRzFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFHckMsTUFBTSxPQUFnQix5QkFDcEIsU0FBUSxpQ0FBeUM7SUFEbkQ7O1FBSWtCLGFBQVEsR0FBZ0MsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0lBMkVwRixDQUFDOzs7Ozs7O0lBeEVRLE1BQU0sQ0FBQyxLQUFhLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjs7WUFDL0QsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDL0UsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7SUFFTSxPQUFPLENBQUMsRUFBTyxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFDOUQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMs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QU0sQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFUyxnQkFBZ0IsQ0FBQyxVQUE4QjtRQUN2RCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQ3BCLEdBQUc7Ozs7UUFBRSxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBR0Y7OztJQTNFQyw2Q0FBa0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0UmVhZG9ubHlDYWNoZWRSZXN0c2VydmljZX0gZnJvbSBcIi4vYWJzdHJhY3QtcmVhZG9ubHktY2FjaGVkLXJlc3RzZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVzdFNlcnZpY2VPYnNlcnZlcn0gZnJvbSBcIi4uLy4uL2ltcGwvaHR0cC9yZXN0LXNlcnZpY2Utb2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtSZXN0SGFuZGxlcn0gZnJvbSBcIi4uLy4uL2ltcGwvaHR0cC9yZXN0LWhhbmRsZXJcIjtcclxuaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3V0aWxcIjtcclxuaW1wb3J0IHtJV3JpdGVhYmxlUmVzdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvaHR0cC9pLXdyaXRlYWJsZS1yZXN0LXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0Q2FjaGVkUmVzdHNlcnZpY2U8VE1vZGVsPlxyXG4gIGV4dGVuZHMgQWJzdHJhY3RSZWFkb25seUNhY2hlZFJlc3RzZXJ2aWNlPFRNb2RlbD5cclxuICBpbXBsZW1lbnRzIElXcml0ZWFibGVSZXN0U2VydmljZTxUTW9kZWw+e1xyXG5cclxuICBwdWJsaWMgcmVhZG9ubHkgb2JzZXJ2ZXI6IFJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VE1vZGVsPiA9IG5ldyBSZXN0U2VydmljZU9ic2VydmVyKCk7XHJcblxyXG5cclxuICBwdWJsaWMgY3JlYXRlKG1vZGVsOiBUTW9kZWwsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRNb2RlbD4ge1xyXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKVxyXG4gICAgICAuY3JlYXRlKG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcclxuICAgIHJldHVybiB0aGlzLm1vZGlmeUNyZWF0ZUNhbGwocmVxdWVzdCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveShpZDogYW55LCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFJlc3RIYW5kbGVyKHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIsIHRoaXMuaWRlbnRpZmllcilcclxuICAgICAgLmRlc3Ryb3koaWQsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcCggKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS5yZW1vdmVCeUlkZW50aWZpZXIoaWQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGFydGlhbFVwZGF0ZShtb2RlbDogVE1vZGVsLCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUTW9kZWw+IHtcclxuICAgIHJldHVybiBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKVxyXG4gICAgICAucGFydGlhbFVwZGF0ZShtb2RlbCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKCAocmVzdWx0OiBUTW9kZWwpID0+IHtcclxuICAgICAgICAgIHRoaXMuc3RvcmUudXBkYXRlKHJlc3VsdCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzYXZlKG1vZGVsOiBUTW9kZWwsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRNb2RlbD4ge1xyXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKVxyXG4gICAgICAuc2F2ZShtb2RlbCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQobW9kZWxbdGhpcy5pZGVudGlmaWVyXSkpIHtcclxuICAgICAgcmVxdWVzdCA9IHRoaXMubW9kaWZ5VXBkYXRlQ2FsbChyZXF1ZXN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcXVlc3QgPSB0aGlzLm1vZGlmeUNyZWF0ZUNhbGwocmVxdWVzdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVxdWVzdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQobW9kZWw6IFRNb2RlbCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VE1vZGVsPiB7XHJcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXN0SGFuZGxlcih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyLCB0aGlzLmlkZW50aWZpZXIpXHJcbiAgICAgIC5zZXQobW9kZWwsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpO1xyXG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKG1vZGVsW3RoaXMuaWRlbnRpZmllcl0pKSB7XHJcbiAgICAgIHJlcXVlc3QgPSB0aGlzLm1vZGlmeVVwZGF0ZUNhbGwocmVxdWVzdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXF1ZXN0ID0gdGhpcy5tb2RpZnlDcmVhdGVDYWxsKHJlcXVlc3QpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKG1vZGVsOiBUTW9kZWwsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRNb2RlbD4ge1xyXG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKVxyXG4gICAgICAudXBkYXRlKG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcclxuICAgIHJlcXVlc3QgPSB0aGlzLm1vZGlmeVVwZGF0ZUNhbGwocmVxdWVzdCk7XHJcbiAgICByZXR1cm4gcmVxdWVzdDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBtb2RpZnlDcmVhdGVDYWxsKG9ic2VydmFibGU6IE9ic2VydmFibGU8VE1vZGVsPik6IE9ic2VydmFibGU8VE1vZGVsPiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5waXBlKFxyXG4gICAgICB0YXAoIChyZXN1bHQ6IFRNb2RlbCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RvcmUucHVzaChyZXN1bHQpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBtb2RpZnlVcGRhdGVDYWxsKG9ic2VydmFibGU6IE9ic2VydmFibGU8VE1vZGVsPik6IE9ic2VydmFibGU8VE1vZGVsPiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5waXBlKFxyXG4gICAgICB0YXAoIChyZXN1bHQ6IFRNb2RlbCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RvcmUudXBkYXRlKHJlc3VsdCk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==