/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-stored-readonly-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseObject } from "../ui/base-object";
import { ReadonlyRestServiceObserver } from "../../impl/http/readonly-rest-service-observer";
import { ReadonlyRestHandler } from "../../impl/http/readony-rest-handler";
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
AbstractStoredReadonlyRestservice = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractStoredReadonlyRestservice, _super);
    function AbstractStoredReadonlyRestservice(restServiceObserver) {
        var _this = _super.call(this) || this;
        _this.observer = Util.isDefined(restServiceObserver) ? restServiceObserver :
            new ReadonlyRestServiceObserver();
        return _this;
    }
    /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredReadonlyRestservice.prototype.all = /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (searchParams, httpOptions) {
        var _this = this;
        return new ReadonlyRestHandler(this.http, this.url, this.observer).all(searchParams, httpOptions)
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.store.updateItems(response);
        })));
    };
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractStoredReadonlyRestservice.prototype.show = /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (id, getParams, httpOptions) {
        var _this = this;
        return new ReadonlyRestHandler(this.http, this.url, this.observer).show(id, getParams, httpOptions)
            .pipe(tap((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.store.update(response);
        })));
    };
    return AbstractStoredReadonlyRestservice;
}(BaseObject));
/**
 * @abstract
 * @template TModel
 */
export { AbstractStoredReadonlyRestservice };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmVkLXJlYWRvbmx5LXJlc3RzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1zdG9yZWQtcmVhZG9ubHktcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRzdDLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBRzNGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBRTFDOzs7OztJQUF3RSw2REFBVTtJQVVoRiwyQ0FDRSxtQkFBeUQ7UUFEM0QsWUFHRSxpQkFBTyxTQUdSO1FBRkMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDekUsSUFBSSwyQkFBMkIsRUFBVSxDQUFDOztJQUM5QyxDQUFDOzs7Ozs7SUFFTSwrQ0FBRzs7Ozs7SUFBVixVQUFXLFlBQXFCLEVBQUUsV0FBb0I7UUFBdEQsaUJBT0M7UUFOQyxPQUFPLElBQUksbUJBQW1CLENBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQzthQUN0RyxJQUFJLENBQ0gsR0FBRzs7OztRQUFFLFVBQUMsUUFBa0I7WUFDdEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7SUFFTSxnREFBSTs7Ozs7O0lBQVgsVUFBWSxFQUFPLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjtRQUE3RCxpQkFPQztRQU5DLE9BQU8sSUFBSSxtQkFBbUIsQ0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQzthQUN4RyxJQUFJLENBQ0gsR0FBRzs7OztRQUFFLFVBQUMsUUFBZ0I7WUFDcEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7SUFHSCx3Q0FBQztBQUFELENBQUMsQUFyQ0QsQ0FBd0UsVUFBVSxHQXFDakY7Ozs7Ozs7O0lBbENDLGdEQUE0Qjs7SUFDNUIsa0RBQXlDOztJQUN6Qyx1REFBbUM7Ozs7O0lBQ25DLGlEQUFvQzs7SUFFcEMscURBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlT2JqZWN0fSBmcm9tIFwiLi4vdWkvYmFzZS1vYmplY3RcIjtcbmltcG9ydCB7SVJlYWRvbmx5U3RvcmVSZXN0U2VydmljZX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS9odHRwL2ktcmVhZG9ubHktc3RvcmVkLXJlc3Qtc2VydmljZVwiO1xuaW1wb3J0IHtJdGVtU3RvcmV9IGZyb20gXCIuLi8uLi9pbXBsL3V0aWwvaXRlbS1zdG9yZVwiO1xuaW1wb3J0IHtSZWFkb25seVJlc3RTZXJ2aWNlT2JzZXJ2ZXJ9IGZyb20gXCIuLi8uLi9pbXBsL2h0dHAvcmVhZG9ubHktcmVzdC1zZXJ2aWNlLW9ic2VydmVyXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtSZWFkb25seVJlc3RIYW5kbGVyfSBmcm9tIFwiLi4vLi4vaW1wbC9odHRwL3JlYWRvbnktcmVzdC1oYW5kbGVyXCI7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1V0aWx9IGZyb20gXCIuLi8uLi9pbXBsL3V0aWwvdXRpbFwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RTdG9yZWRSZWFkb25seVJlc3RzZXJ2aWNlPFRNb2RlbD4gZXh0ZW5kcyBCYXNlT2JqZWN0XG4gIGltcGxlbWVudHMgSVJlYWRvbmx5U3RvcmVSZXN0U2VydmljZTxUTW9kZWw+IHtcblxuICBwdWJsaWMgYWJzdHJhY3QgdXJsOiBzdHJpbmc7XG4gIHB1YmxpYyBhYnN0cmFjdCBzdG9yZTogSXRlbVN0b3JlPFRNb2RlbD47XG4gIHB1YmxpYyBhYnN0cmFjdCBpZGVudGlmaWVyOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBodHRwOiBIdHRwQ2xpZW50O1xuXG4gIHB1YmxpYyByZWFkb25seSBvYnNlcnZlcjogUmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyPFRNb2RlbD47XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgIHJlc3RTZXJ2aWNlT2JzZXJ2ZXI/OiBSZWFkb25seVJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VE1vZGVsPlxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBVdGlsLmlzRGVmaW5lZChyZXN0U2VydmljZU9ic2VydmVyKSA/IHJlc3RTZXJ2aWNlT2JzZXJ2ZXIgOlxuICAgICAgbmV3IFJlYWRvbmx5UmVzdFNlcnZpY2VPYnNlcnZlcjxUTW9kZWw+KCk7XG4gIH1cblxuICBwdWJsaWMgYWxsKHNlYXJjaFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRNb2RlbFtdPiB7XG4gICAgcmV0dXJuIG5ldyBSZWFkb25seVJlc3RIYW5kbGVyPFRNb2RlbD4odGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlcikuYWxsKHNlYXJjaFBhcmFtcywgaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCAocmVzcG9uc2U6IFRNb2RlbFtdKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdG9yZS51cGRhdGVJdGVtcyhyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIHNob3coaWQ6IGFueSwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VE1vZGVsPiB7XG4gICAgcmV0dXJuIG5ldyBSZWFkb25seVJlc3RIYW5kbGVyPFRNb2RlbD4odGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlcikuc2hvdyhpZCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoIChyZXNwb25zZTogVE1vZGVsKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdG9yZS51cGRhdGUocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG5cbn1cbiJdfQ==