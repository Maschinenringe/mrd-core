/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-stored-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AbstractStoredReadonlyRestservice } from "./abstract-stored-readonly-restservice";
import { RestServiceObserver } from "../../impl/http/rest-service-observer";
import { RestHandler } from "../../impl/http/rest-handler";
import { tap } from 'rxjs/operators';
import { Util } from "../../impl/util/util";
/**
 * @abstract
 * @template TModel
 */
var /**
 * @abstract
 * @template TModel
 */
AbstractStoredRestservice = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractStoredRestservice, _super);
    function AbstractStoredRestservice() {
        return _super.call(this, new RestServiceObserver()) || this;
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredRestservice.prototype.create = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        /** @type {?} */
        var request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .create(model, getParams, httpOptions);
        return this.modifyCreateCall(request);
    };
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredRestservice.prototype.destroy = /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (id, getParams, httpOptions) {
        var _this = this;
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .destroy(id, getParams, httpOptions)
            .pipe(tap((/**
         * @return {?}
         */
        function () {
            _this.store.removeByIdentifier(id);
        })));
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredRestservice.prototype.partialUpdate = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        var _this = this;
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .partialUpdate(model, getParams, httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.store.update(result);
        })));
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredRestservice.prototype.save = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        /** @type {?} */
        var request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .save(model, getParams, httpOptions);
        if (Util.isDefined(model[this.identifier])) {
            request = this.modifyUpdateCall(request);
        }
        else {
            request = this.modifyCreateCall(request);
        }
        return request;
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredRestservice.prototype.set = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        /** @type {?} */
        var request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .set(model, getParams, httpOptions);
        if (Util.isDefined(model[this.identifier])) {
            request = this.modifyUpdateCall(request);
        }
        else {
            request = this.modifyCreateCall(request);
        }
        return request;
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredRestservice.prototype.update = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        /** @type {?} */
        var request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .update(model, getParams, httpOptions);
        request = this.modifyUpdateCall(request);
        return request;
    };
    /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    AbstractStoredRestservice.prototype.modifyCreateCall = /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    function (observable) {
        var _this = this;
        return observable.pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.store.push(result);
        })));
    };
    /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    AbstractStoredRestservice.prototype.modifyUpdateCall = /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    function (observable) {
        var _this = this;
        return observable.pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.store.update(result);
        })));
    };
    return AbstractStoredRestservice;
}(AbstractStoredReadonlyRestservice));
/**
 * @abstract
 * @template TModel
 */
export { AbstractStoredRestservice };
if (false) {
    /** @type {?} */
    AbstractStoredRestservice.prototype.observer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmVkLXJlc3RzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1zdG9yZWQtcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFFekYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBRXpELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBRTFDOzs7OztJQUNVLHFEQUF5QztJQUtqRDtlQUNFLGtCQUFNLElBQUksbUJBQW1CLEVBQVUsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7O0lBRU0sMENBQU07Ozs7OztJQUFiLFVBQWMsS0FBYSxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7O1lBQy9ELE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQy9FLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7O0lBRU0sMkNBQU87Ozs7OztJQUFkLFVBQWUsRUFBTyxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFBaEUsaUJBUUM7UUFQQyxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFF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QUFHOzs7O1FBQUUsVUFBQyxNQUFjO1lBQ2xCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFUyxvREFBZ0I7Ozs7O0lBQTFCLFVBQTJCLFVBQThCO1FBQXpELGlCQU1DO1FBTEMsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUNwQixHQUFHOzs7O1FBQUUsVUFBQyxNQUFjO1lBQ2xCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUgsZ0NBQUM7QUFBRCxDQUFDLEFBakZELENBQ1UsaUNBQWlDLEdBZ0YxQzs7Ozs7Ozs7SUE3RUMsNkNBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBYnN0cmFjdFN0b3JlZFJlYWRvbmx5UmVzdHNlcnZpY2V9IGZyb20gXCIuL2Fic3RyYWN0LXN0b3JlZC1yZWFkb25seS1yZXN0c2VydmljZVwiO1xuaW1wb3J0IHtJV3JpdGVhYmxlUmVzdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvaHR0cC9pLXdyaXRlYWJsZS1yZXN0LXNlcnZpY2VcIjtcbmltcG9ydCB7UmVzdFNlcnZpY2VPYnNlcnZlcn0gZnJvbSBcIi4uLy4uL2ltcGwvaHR0cC9yZXN0LXNlcnZpY2Utb2JzZXJ2ZXJcIjtcbmltcG9ydCB7UmVzdEhhbmRsZXJ9IGZyb20gXCIuLi8uLi9pbXBsL2h0dHAvcmVzdC1oYW5kbGVyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1V0aWx9IGZyb20gXCIuLi8uLi9pbXBsL3V0aWwvdXRpbFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTdG9yZWRSZXN0c2VydmljZTxUTW9kZWw+XG4gIGV4dGVuZHMgQWJzdHJhY3RTdG9yZWRSZWFkb25seVJlc3RzZXJ2aWNlPFRNb2RlbD5cbiAgaW1wbGVtZW50cyBJV3JpdGVhYmxlUmVzdFNlcnZpY2U8VE1vZGVsPiB7XG5cbiAgcHVibGljIHJlYWRvbmx5IG9ic2VydmVyOiBSZXN0U2VydmljZU9ic2VydmVyPFRNb2RlbD47XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKG5ldyBSZXN0U2VydmljZU9ic2VydmVyPFRNb2RlbD4oKSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKG1vZGVsOiBUTW9kZWwsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRNb2RlbD4ge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlc3RIYW5kbGVyKHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIsIHRoaXMuaWRlbnRpZmllcilcbiAgICAgIC5jcmVhdGUobW9kZWwsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpXG4gICAgcmV0dXJuIHRoaXMubW9kaWZ5Q3JlYXRlQ2FsbChyZXF1ZXN0KTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KGlkOiBhbnksIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFJlc3RIYW5kbGVyKHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIsIHRoaXMuaWRlbnRpZmllcilcbiAgICAgIC5kZXN0cm95KGlkLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCggKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3RvcmUucmVtb3ZlQnlJZGVudGlmaWVyKGlkKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgcGFydGlhbFVwZGF0ZShtb2RlbDogVE1vZGVsLCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUTW9kZWw+IHtcbiAgICByZXR1cm4gbmV3IFJlc3RIYW5kbGVyKHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIsIHRoaXMuaWRlbnRpZmllcilcbiAgICAgIC5wYXJ0aWFsVXBkYXRlKG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCggKHJlc3VsdDogVE1vZGVsKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdG9yZS51cGRhdGUocmVzdWx0KTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgc2F2ZShtb2RlbDogVE1vZGVsLCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUTW9kZWw+IHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXN0SGFuZGxlcih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyLCB0aGlzLmlkZW50aWZpZXIpXG4gICAgICAuc2F2ZShtb2RlbCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKG1vZGVsW3RoaXMuaWRlbnRpZmllcl0pKSB7XG4gICAgICByZXF1ZXN0ID0gdGhpcy5tb2RpZnlVcGRhdGVDYWxsKHJlcXVlc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0ID0gdGhpcy5tb2RpZnlDcmVhdGVDYWxsKHJlcXVlc3QpO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQobW9kZWw6IFRNb2RlbCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VE1vZGVsPiB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKVxuICAgICAgLnNldChtb2RlbCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XG4gICAgaWYgKFV0aWwuaXNEZWZpbmVkKG1vZGVsW3RoaXMuaWRlbnRpZmllcl0pKSB7XG4gICAgICByZXF1ZXN0ID0gdGhpcy5tb2RpZnlVcGRhdGVDYWxsKHJlcXVlc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0ID0gdGhpcy5tb2RpZnlDcmVhdGVDYWxsKHJlcXVlc3QpO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUobW9kZWw6IFRNb2RlbCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VE1vZGVsPiB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKVxuICAgICAgLnVwZGF0ZShtb2RlbCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XG4gICAgcmVxdWVzdCA9IHRoaXMubW9kaWZ5VXBkYXRlQ2FsbChyZXF1ZXN0KTtcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxuXG4gIHByb3RlY3RlZCBtb2RpZnlDcmVhdGVDYWxsKG9ic2VydmFibGU6IE9ic2VydmFibGU8VE1vZGVsPik6IE9ic2VydmFibGU8VE1vZGVsPiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGUucGlwZShcbiAgICAgIHRhcCggKHJlc3VsdDogVE1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcmUucHVzaChyZXN1bHQpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIG1vZGlmeVVwZGF0ZUNhbGwob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUTW9kZWw+KTogT2JzZXJ2YWJsZTxUTW9kZWw+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5waXBlKFxuICAgICAgdGFwKCAocmVzdWx0OiBUTW9kZWwpID0+IHtcbiAgICAgICAgdGhpcy5zdG9yZS51cGRhdGUocmVzdWx0KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG59XG4iXX0=