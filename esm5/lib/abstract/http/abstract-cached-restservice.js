/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-cached-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AbstractReadonlyCachedRestservice } from "./abstract-readonly-cached-restservice";
import { RestServiceObserver } from "../../impl/http/rest-service-observer";
import { RestHandler } from "../../impl/http/rest-handler";
import { Util } from "../../impl/util/util";
import { tap } from 'rxjs/operators';
/**
 * @abstract
 * @template TModel
 */
var /**
 * @abstract
 * @template TModel
 */
AbstractCachedRestservice = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractCachedRestservice, _super);
    function AbstractCachedRestservice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.observer = new RestServiceObserver();
        return _this;
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractCachedRestservice.prototype.create = /**
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
    AbstractCachedRestservice.prototype.destroy = /**
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
    AbstractCachedRestservice.prototype.partialUpdate = /**
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
    AbstractCachedRestservice.prototype.save = /**
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
    AbstractCachedRestservice.prototype.set = /**
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
    AbstractCachedRestservice.prototype.update = /**
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
    AbstractCachedRestservice.prototype.modifyCreateCall = /**
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
    AbstractCachedRestservice.prototype.modifyUpdateCall = /**
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
    return AbstractCachedRestservice;
}(AbstractReadonlyCachedRestservice));
/**
 * @abstract
 * @template TModel
 */
export { AbstractCachedRestservice };
if (false) {
    /** @type {?} */
    AbstractCachedRestservice.prototype.observer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtY2FjaGVkLXJlc3RzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1jYWNoZWQtcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDekYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUcxQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBR3JDOzs7OztJQUNVLHFEQUF5QztJQURuRDtRQUFBLHFFQStFQztRQTNFaUIsY0FBUSxHQUFnQyxJQUFJLG1CQUFtQixFQUFFLENBQUM7O0lBMkVwRixDQUFDOzs7Ozs7O0lBeEVRLDBDQUFNOzs7Ozs7SUFBYixVQUFjLEtBQWEsRUFBRSxTQUFrQixFQUFFLFdBQW9COztZQUMvRCxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUMvRSxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7OztJQUVNLDJDQUFPOzs7Ozs7SUFBZCxVQUFlLEVBQU8sRUFBRSxTQUFrQixFQUFFLFdBQW9CO1FBQWhFLGlCQVFDO1FBUEMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3hFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQzthQUNuQyxJQUFJLENBQ0gsR0FBRzs7O1FBQUU7WUFDSCxLQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUNILENBQUM7SUFDTixDQUFDOzs7Ozs7O0lBRU0saURBQWE7Ozs7OztJQUFwQixVQUFxQixLQUFhLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjtRQUE1RSxpQkFRQztRQVBDLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN4RSxhQUFhLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUM7YUFDNUMsSUFBSSxDQUNILEdBQUc7Ozs7UUFBRSxVQUFDLE1BQWM7WUFDbEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7SUFFTSx3Q0FBSTs7Ozs7O0lBQVgsVUFBWSxLQUFhLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjs7WUFDN0QsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDL0UsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7WUFDMUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFFTSx1Q0FBRzs7Ozs7O0lBQVYsVUFBVyxLQUFhLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjs7WUFDNUQsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDL0UsR0FBRyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7WUFDMUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFFTSwwQ0FBTTs7Ozs7O0lBQWIsVUFBYyxLQUFhLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjs7WUFDL0QsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDL0UsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO1FBQ3hDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRVMsb0RBQWdCOzs7OztJQUExQixVQUEyQixVQUE4QjtRQUF6RCxpQkFNQztRQUxDLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FDcEIsR0FBRzs7OztRQUFFLFVBQUMsTUFBYztZQUNsQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRVMsb0RBQWdCOzs7OztJQUExQixVQUEyQixVQUE4QjtRQUF6RCxpQkFNQztRQUxDLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FDcEIsR0FBRzs7OztRQUFFLFVBQUMsTUFBYztZQUNsQixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUdILGdDQUFDO0FBQUQsQ0FBQyxBQS9FRCxDQUNVLGlDQUFpQyxHQThFMUM7Ozs7Ozs7O0lBM0VDLDZDQUFrRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWJzdHJhY3RSZWFkb25seUNhY2hlZFJlc3RzZXJ2aWNlfSBmcm9tIFwiLi9hYnN0cmFjdC1yZWFkb25seS1jYWNoZWQtcmVzdHNlcnZpY2VcIjtcclxuaW1wb3J0IHtSZXN0U2VydmljZU9ic2VydmVyfSBmcm9tIFwiLi4vLi4vaW1wbC9odHRwL3Jlc3Qtc2VydmljZS1vYnNlcnZlclwiO1xyXG5pbXBvcnQge1Jlc3RIYW5kbGVyfSBmcm9tIFwiLi4vLi4vaW1wbC9odHRwL3Jlc3QtaGFuZGxlclwiO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gXCIuLi8uLi9pbXBsL3V0aWwvdXRpbFwiO1xyXG5pbXBvcnQge0lXcml0ZWFibGVSZXN0U2VydmljZX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS9odHRwL2ktd3JpdGVhYmxlLXJlc3Qtc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RDYWNoZWRSZXN0c2VydmljZTxUTW9kZWw+XHJcbiAgZXh0ZW5kcyBBYnN0cmFjdFJlYWRvbmx5Q2FjaGVkUmVzdHNlcnZpY2U8VE1vZGVsPlxyXG4gIGltcGxlbWVudHMgSVdyaXRlYWJsZVJlc3RTZXJ2aWNlPFRNb2RlbD57XHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBvYnNlcnZlcjogUmVzdFNlcnZpY2VPYnNlcnZlcjxUTW9kZWw+ID0gbmV3IFJlc3RTZXJ2aWNlT2JzZXJ2ZXIoKTtcclxuXHJcblxyXG4gIHB1YmxpYyBjcmVhdGUobW9kZWw6IFRNb2RlbCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VE1vZGVsPiB7XHJcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXN0SGFuZGxlcih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyLCB0aGlzLmlkZW50aWZpZXIpXHJcbiAgICAgIC5jcmVhdGUobW9kZWwsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIHRoaXMubW9kaWZ5Q3JlYXRlQ2FsbChyZXF1ZXN0KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KGlkOiBhbnksIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKVxyXG4gICAgICAuZGVzdHJveShpZCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnN0b3JlLnJlbW92ZUJ5SWRlbnRpZmllcihpZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwYXJ0aWFsVXBkYXRlKG1vZGVsOiBUTW9kZWwsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRNb2RlbD4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZXN0SGFuZGxlcih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyLCB0aGlzLmlkZW50aWZpZXIpXHJcbiAgICAgIC5wYXJ0aWFsVXBkYXRlKG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoIChyZXN1bHQ6IFRNb2RlbCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zdG9yZS51cGRhdGUocmVzdWx0KTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNhdmUobW9kZWw6IFRNb2RlbCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VE1vZGVsPiB7XHJcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXN0SGFuZGxlcih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyLCB0aGlzLmlkZW50aWZpZXIpXHJcbiAgICAgIC5zYXZlKG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZChtb2RlbFt0aGlzLmlkZW50aWZpZXJdKSkge1xyXG4gICAgICByZXF1ZXN0ID0gdGhpcy5tb2RpZnlVcGRhdGVDYWxsKHJlcXVlc3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVxdWVzdCA9IHRoaXMubW9kaWZ5Q3JlYXRlQ2FsbChyZXF1ZXN0KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXF1ZXN0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldChtb2RlbDogVE1vZGVsLCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUTW9kZWw+IHtcclxuICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlc3RIYW5kbGVyKHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIsIHRoaXMuaWRlbnRpZmllcilcclxuICAgICAgLnNldChtb2RlbCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQobW9kZWxbdGhpcy5pZGVudGlmaWVyXSkpIHtcclxuICAgICAgcmVxdWVzdCA9IHRoaXMubW9kaWZ5VXBkYXRlQ2FsbChyZXF1ZXN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcXVlc3QgPSB0aGlzLm1vZGlmeUNyZWF0ZUNhbGwocmVxdWVzdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVxdWVzdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUobW9kZWw6IFRNb2RlbCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VE1vZGVsPiB7XHJcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXN0SGFuZGxlcih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyLCB0aGlzLmlkZW50aWZpZXIpXHJcbiAgICAgIC51cGRhdGUobW9kZWwsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpO1xyXG4gICAgcmVxdWVzdCA9IHRoaXMubW9kaWZ5VXBkYXRlQ2FsbChyZXF1ZXN0KTtcclxuICAgIHJldHVybiByZXF1ZXN0O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG1vZGlmeUNyZWF0ZUNhbGwob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUTW9kZWw+KTogT2JzZXJ2YWJsZTxUTW9kZWw+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoXHJcbiAgICAgIHRhcCggKHJlc3VsdDogVE1vZGVsKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdG9yZS5wdXNoKHJlc3VsdCk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG1vZGlmeVVwZGF0ZUNhbGwob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUTW9kZWw+KTogT2JzZXJ2YWJsZTxUTW9kZWw+IHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoXHJcbiAgICAgIHRhcCggKHJlc3VsdDogVE1vZGVsKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdG9yZS51cGRhdGUocmVzdWx0KTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19