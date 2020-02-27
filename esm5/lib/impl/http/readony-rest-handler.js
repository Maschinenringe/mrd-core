/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/http/readony-rest-handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { finalize, tap } from 'rxjs/operators';
import { Util } from "../util/util";
/**
 * @template T
 */
var /**
 * @template T
 */
ReadonlyRestHandler = /** @class */ (function () {
    function ReadonlyRestHandler(http, url, observer) {
        this.http = http;
        this.url = url;
        this.observer = observer;
    }
    /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    ReadonlyRestHandler.prototype.all = /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (searchParams, httpOptions) {
        var _this = this;
        this.observer.isFetchingItems = true;
        return this.http.get(Util.armUrlWithSearchParams(this.url, searchParams), httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemsFetched.next(result);
        })), 
        // catchError( _.bind(this.serviceErrorHandler.catchError, this.serviceErrorHandler) as (error: any) => Observable<any> ),
        finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isFetchingItems = false;
        })));
    };
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    ReadonlyRestHandler.prototype.show = /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (id, getParams, httpOptions) {
        var _this = this;
        this.observer.isFetchingItem = true;
        return this.http.get(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, id), getParams), httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemFetched.next(result);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isFetchingItem = false;
        })));
    };
    return ReadonlyRestHandler;
}());
/**
 * @template T
 */
export { ReadonlyRestHandler };
if (false) {
    /** @type {?} */
    ReadonlyRestHandler.prototype.identifier;
    /** @type {?} */
    ReadonlyRestHandler.prototype.http;
    /** @type {?} */
    ReadonlyRestHandler.prototype.url;
    /** @type {?} */
    ReadonlyRestHandler.prototype.observer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZG9ueS1yZXN0LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL2h0dHAvcmVhZG9ueS1yZXN0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBSTdDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxjQUFjLENBQUM7Ozs7QUFHbEM7Ozs7SUFJRSw2QkFDa0IsSUFBZ0IsRUFDaEIsR0FBVyxFQUNYLFFBQXdDO1FBRnhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsUUFBRyxHQUFILEdBQUcsQ0FBUTtRQUNYLGFBQVEsR0FBUixRQUFRLENBQWdDO0lBQ3ZELENBQUM7Ozs7OztJQUVHLGlDQUFHOzs7OztJQUFWLFVBQVcsWUFBcUIsRUFBRSxXQUFvQjtRQUF0RCxpQkFZQztRQVhDLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxFQUFFLFdBQVcsQ0FBQzthQUN4RixJQUFJLENBQ0gsR0FBRzs7OztRQUFFLFVBQUMsTUFBVztZQUNmLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUM7UUFDRiwwSEFBMEg7UUFDMUgsUUFBUTs7O1FBQUU7WUFDUixLQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7SUFFTSxrQ0FBSTs7Ozs7O0lBQVgsVUFBWSxFQUFPLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjtRQUE3RCxpQkFZQztRQVhDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUFFLFdBQVcsQ0FBQzthQUN6RixJQUFJLENBQ0gsR0FBRzs7OztRQUFFLFVBQUMsTUFBUztZQUNiLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUMsRUFDRixRQUFROzs7UUFBRTtZQUNSLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQztJQUdILDBCQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQzs7Ozs7OztJQXJDQyx5Q0FBbUI7O0lBR2pCLG1DQUFnQzs7SUFDaEMsa0NBQTJCOztJQUMzQix1Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge2ZpbmFsaXplLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7SVJlYWRvbmx5UmVzdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvaHR0cC9pLXJlYWRvbmx5LXJlc3RzZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyfSBmcm9tIFwiLi9yZWFkb25seS1yZXN0LXNlcnZpY2Utb2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi4vdXRpbC91dGlsXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJlYWRvbmx5UmVzdEhhbmRsZXI8VD4gaW1wbGVtZW50cyBJUmVhZG9ubHlSZXN0U2VydmljZTxUPiB7XHJcblxyXG4gIGlkZW50aWZpZXI6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHB1YmxpYyByZWFkb25seSB1cmw6IHN0cmluZyxcclxuICAgIHB1YmxpYyByZWFkb25seSBvYnNlcnZlcjogUmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyPFQ+XHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgYWxsKHNlYXJjaFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRbXT4ge1xyXG4gICAgdGhpcy5vYnNlcnZlci5pc0ZldGNoaW5nSXRlbXMgPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VFtdPihVdGlsLmFybVVybFdpdGhTZWFyY2hQYXJhbXModGhpcy51cmwsIHNlYXJjaFBhcmFtcyksIGh0dHBPcHRpb25zKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoIChyZXN1bHQ6IFRbXSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vYnNlcnZlci5vbkl0ZW1zRmV0Y2hlZC5uZXh0KHJlc3VsdCk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gY2F0Y2hFcnJvciggXy5iaW5kKHRoaXMuc2VydmljZUVycm9ySGFuZGxlci5jYXRjaEVycm9yLCB0aGlzLnNlcnZpY2VFcnJvckhhbmRsZXIpIGFzIChlcnJvcjogYW55KSA9PiBPYnNlcnZhYmxlPGFueT4gKSxcclxuICAgICAgICBmaW5hbGl6ZSggKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vYnNlcnZlci5pc0ZldGNoaW5nSXRlbXMgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3coaWQ6IGFueSwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgdGhpcy5vYnNlcnZlci5pc0ZldGNoaW5nSXRlbSA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPihcclxuICAgICAgICBVdGlsLmFybVVybFdpdGhTZWFyY2hQYXJhbXMoVXRpbC5jcmVhdGVFbnRpdHlVcmwodGhpcy51cmwsIGlkKSwgZ2V0UGFyYW1zKSwgaHR0cE9wdGlvbnMpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcCggKHJlc3VsdDogVCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vYnNlcnZlci5vbkl0ZW1GZXRjaGVkLm5leHQocmVzdWx0KTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBmaW5hbGl6ZSggKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vYnNlcnZlci5pc0ZldGNoaW5nSXRlbSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19