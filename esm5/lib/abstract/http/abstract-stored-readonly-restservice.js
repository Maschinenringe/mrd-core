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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmVkLXJlYWRvbmx5LXJlc3RzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1zdG9yZWQtcmVhZG9ubHktcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRzdDLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBRzNGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBRTFDOzs7OztJQUF3RSw2REFBVTtJQVVoRiwyQ0FDRSxtQkFBeUQ7UUFEM0QsWUFHRSxpQkFBTyxTQUdSO1FBRkMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDekUsSUFBSSwyQkFBMkIsRUFBVSxDQUFDOztJQUM5QyxDQUFDOzs7Ozs7SUFFTSwrQ0FBRzs7Ozs7SUFBVixVQUFXLFlBQXFCLEVBQUUsV0FBb0I7UUFBdEQsaUJBT0M7UUFOQyxPQUFPLElBQUksbUJBQW1CLENBQVMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQzthQUN0RyxJQUFJLENBQ0gsR0FBRzs7OztRQUFFLFVBQUMsUUFBa0I7WUFDdEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7SUFFTSxnREFBSTs7Ozs7O0lBQVgsVUFBWSxFQUFPLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjtRQUE3RCxpQkFPQztRQU5DLE9BQU8sSUFBSSxtQkFBbUIsQ0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQzthQUN4RyxJQUFJLENBQ0gsR0FBRzs7OztRQUFFLFVBQUMsUUFBZ0I7WUFDcEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7SUFHSCx3Q0FBQztBQUFELENBQUMsQUFyQ0QsQ0FBd0UsVUFBVSxHQXFDakY7Ozs7Ozs7O0lBbENDLGdEQUE0Qjs7SUFDNUIsa0RBQXlDOztJQUN6Qyx1REFBbUM7Ozs7O0lBQ25DLGlEQUFvQzs7SUFFcEMscURBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlT2JqZWN0fSBmcm9tIFwiLi4vdWkvYmFzZS1vYmplY3RcIjtcclxuaW1wb3J0IHtJUmVhZG9ubHlTdG9yZVJlc3RTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL2h0dHAvaS1yZWFkb25seS1zdG9yZWQtcmVzdC1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SXRlbVN0b3JlfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL2l0ZW0tc3RvcmVcIjtcclxuaW1wb3J0IHtSZWFkb25seVJlc3RTZXJ2aWNlT2JzZXJ2ZXJ9IGZyb20gXCIuLi8uLi9pbXBsL2h0dHAvcmVhZG9ubHktcmVzdC1zZXJ2aWNlLW9ic2VydmVyXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtSZWFkb25seVJlc3RIYW5kbGVyfSBmcm9tIFwiLi4vLi4vaW1wbC9odHRwL3JlYWRvbnktcmVzdC1oYW5kbGVyXCI7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3V0aWxcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFN0b3JlZFJlYWRvbmx5UmVzdHNlcnZpY2U8VE1vZGVsPiBleHRlbmRzIEJhc2VPYmplY3RcclxuICBpbXBsZW1lbnRzIElSZWFkb25seVN0b3JlUmVzdFNlcnZpY2U8VE1vZGVsPiB7XHJcblxyXG4gIHB1YmxpYyBhYnN0cmFjdCB1cmw6IHN0cmluZztcclxuICBwdWJsaWMgYWJzdHJhY3Qgc3RvcmU6IEl0ZW1TdG9yZTxUTW9kZWw+O1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBpZGVudGlmaWVyOiBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGh0dHA6IEh0dHBDbGllbnQ7XHJcblxyXG4gIHB1YmxpYyByZWFkb25seSBvYnNlcnZlcjogUmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyPFRNb2RlbD47XHJcblxyXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcclxuICAgIHJlc3RTZXJ2aWNlT2JzZXJ2ZXI/OiBSZWFkb25seVJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VE1vZGVsPlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMub2JzZXJ2ZXIgPSBVdGlsLmlzRGVmaW5lZChyZXN0U2VydmljZU9ic2VydmVyKSA/IHJlc3RTZXJ2aWNlT2JzZXJ2ZXIgOlxyXG4gICAgICBuZXcgUmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyPFRNb2RlbD4oKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhbGwoc2VhcmNoUGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VE1vZGVsW10+IHtcclxuICAgIHJldHVybiBuZXcgUmVhZG9ubHlSZXN0SGFuZGxlcjxUTW9kZWw+KHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIpLmFsbChzZWFyY2hQYXJhbXMsIGh0dHBPcHRpb25zKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoIChyZXNwb25zZTogVE1vZGVsW10pID0+IHtcclxuICAgICAgICAgIHRoaXMuc3RvcmUudXBkYXRlSXRlbXMocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvdyhpZDogYW55LCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUTW9kZWw+IHtcclxuICAgIHJldHVybiBuZXcgUmVhZG9ubHlSZXN0SGFuZGxlcjxUTW9kZWw+KHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIpLnNob3coaWQsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcCggKHJlc3BvbnNlOiBUTW9kZWwpID0+IHtcclxuICAgICAgICAgIHRoaXMuc3RvcmUudXBkYXRlKHJlc3BvbnNlKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==