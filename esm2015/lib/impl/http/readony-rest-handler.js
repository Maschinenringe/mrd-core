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
export class ReadonlyRestHandler {
    /**
     * @param {?} http
     * @param {?} url
     * @param {?} observer
     */
    constructor(http, url, observer) {
        this.http = http;
        this.url = url;
        this.observer = observer;
    }
    /**
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    all(searchParams, httpOptions) {
        this.observer.isFetchingItems = true;
        return this.http.get(Util.armUrlWithSearchParams(this.url, searchParams), httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemsFetched.next(result);
        })), 
        // catchError( _.bind(this.serviceErrorHandler.catchError, this.serviceErrorHandler) as (error: any) => Observable<any> ),
        finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isFetchingItems = false;
        })));
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    show(id, getParams, httpOptions) {
        this.observer.isFetchingItem = true;
        return this.http.get(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, id), getParams), httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemFetched.next(result);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isFetchingItem = false;
        })));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZG9ueS1yZXN0LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL2h0dHAvcmVhZG9ueS1yZXN0LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBSTdDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxjQUFjLENBQUM7Ozs7QUFHbEMsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBSTlCLFlBQ2tCLElBQWdCLEVBQ2hCLEdBQVcsRUFDWCxRQUF3QztRQUZ4QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFDWCxhQUFRLEdBQVIsUUFBUSxDQUFnQztJQUN2RCxDQUFDOzs7Ozs7SUFFRyxHQUFHLENBQUMsWUFBcUIsRUFBRSxXQUFvQjtRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsRUFBRSxXQUFXLENBQUM7YUFDeEYsSUFBSSxDQUNILEdBQUc7Ozs7UUFBRSxDQUFDLE1BQVcsRUFBUSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUM7UUFDRiwwSEFBMEg7UUFDMUgsUUFBUTs7O1FBQUUsR0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7Ozs7OztJQUVNLElBQUksQ0FBQyxFQUFPLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjtRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRSxXQUFXLENBQUM7YUFDekYsSUFBSSxDQUNILEdBQUc7Ozs7UUFBRSxDQUFDLE1BQVMsRUFBUSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUMsRUFDRixRQUFROzs7UUFBRSxHQUFTLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUNILENBQUM7SUFDTixDQUFDO0NBR0Y7OztJQXJDQyx5Q0FBbUI7O0lBR2pCLG1DQUFnQzs7SUFDaEMsa0NBQTJCOztJQUMzQix1Q0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaW5hbGl6ZSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7SVJlYWRvbmx5UmVzdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvaHR0cC9pLXJlYWRvbmx5LXJlc3RzZXJ2aWNlXCI7XG5pbXBvcnQge1JlYWRvbmx5UmVzdFNlcnZpY2VPYnNlcnZlcn0gZnJvbSBcIi4vcmVhZG9ubHktcmVzdC1zZXJ2aWNlLW9ic2VydmVyXCI7XG5pbXBvcnQge1V0aWx9IGZyb20gXCIuLi91dGlsL3V0aWxcIjtcblxuXG5leHBvcnQgY2xhc3MgUmVhZG9ubHlSZXN0SGFuZGxlcjxUPiBpbXBsZW1lbnRzIElSZWFkb25seVJlc3RTZXJ2aWNlPFQ+IHtcblxuICBpZGVudGlmaWVyOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHVibGljIHJlYWRvbmx5IHVybDogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBvYnNlcnZlcjogUmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyPFQ+XG4gICkge31cblxuICBwdWJsaWMgYWxsKHNlYXJjaFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRbXT4ge1xuICAgIHRoaXMub2JzZXJ2ZXIuaXNGZXRjaGluZ0l0ZW1zID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUW10+KFV0aWwuYXJtVXJsV2l0aFNlYXJjaFBhcmFtcyh0aGlzLnVybCwgc2VhcmNoUGFyYW1zKSwgaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCAocmVzdWx0OiBUW10pOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLm9uSXRlbXNGZXRjaGVkLm5leHQocmVzdWx0KTtcbiAgICAgICAgfSksXG4gICAgICAgIC8vIGNhdGNoRXJyb3IoIF8uYmluZCh0aGlzLnNlcnZpY2VFcnJvckhhbmRsZXIuY2F0Y2hFcnJvciwgdGhpcy5zZXJ2aWNlRXJyb3JIYW5kbGVyKSBhcyAoZXJyb3I6IGFueSkgPT4gT2JzZXJ2YWJsZTxhbnk+ICksXG4gICAgICAgIGZpbmFsaXplKCAoKTogdm9pZCA9PiB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlci5pc0ZldGNoaW5nSXRlbXMgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgc2hvdyhpZDogYW55LCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgdGhpcy5vYnNlcnZlci5pc0ZldGNoaW5nSXRlbSA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4oXG4gICAgICAgIFV0aWwuYXJtVXJsV2l0aFNlYXJjaFBhcmFtcyhVdGlsLmNyZWF0ZUVudGl0eVVybCh0aGlzLnVybCwgaWQpLCBnZXRQYXJhbXMpLCBodHRwT3B0aW9ucylcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoIChyZXN1bHQ6IFQpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLm9uSXRlbUZldGNoZWQubmV4dChyZXN1bHQpO1xuICAgICAgICB9KSxcbiAgICAgICAgZmluYWxpemUoICgpOiB2b2lkID0+IHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLmlzRmV0Y2hpbmdJdGVtID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cblxufVxuIl19