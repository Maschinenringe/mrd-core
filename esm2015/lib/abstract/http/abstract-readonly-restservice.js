/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-readonly-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseObject } from '../ui/base-object';
import { ReadonlyRestServiceObserver } from '../../impl/http/readonly-rest-service-observer';
import { ReadonlyRestHandler } from '../../impl/http/readony-rest-handler';
import { Util } from "../../impl/util/util";
/**
 * @abstract
 * @template T
 */
export class AbstractReadonlyRestservice extends BaseObject {
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
        return new ReadonlyRestHandler(this.http, this.url, this.observer).all(searchParams, httpOptions);
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    show(id, getParams, httpOptions) {
        return new ReadonlyRestHandler(this.http, this.url, this.observer).show(id, getParams, httpOptions);
    }
}
if (false) {
    /** @type {?} */
    AbstractReadonlyRestservice.prototype.identifier;
    /** @type {?} */
    AbstractReadonlyRestservice.prototype.url;
    /** @type {?} */
    AbstractReadonlyRestservice.prototype.observer;
    /**
     * @type {?}
     * @protected
     */
    AbstractReadonlyRestservice.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmVhZG9ubHktcmVzdHNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC9odHRwL2Fic3RyYWN0LXJlYWRvbmx5LXJlc3RzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRTdDLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFFMUMsTUFBTSxPQUFnQiwyQkFBK0IsU0FBUSxVQUFVOzs7OztJQU9yRSxZQUNFLG1CQUFvRDtRQUVwRCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3pFLElBQUksMkJBQTJCLEVBQUssQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFTSxHQUFHLENBQUMsWUFBcUIsRUFBRSxXQUFvQjtRQUNwRCxPQUFPLElBQUksbUJBQW1CLENBQUksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7Ozs7Ozs7SUFFTSxJQUFJLENBQUMsRUFBTyxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFDM0QsT0FBTyxJQUFJLG1CQUFtQixDQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekcsQ0FBQztDQUVGOzs7SUFyQkMsaURBQW1COztJQUNuQiwwQ0FBNEI7O0lBQzVCLCtDQUF5RDs7Ozs7SUFDekQsMkNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtCYXNlT2JqZWN0fSBmcm9tICcuLi91aS9iYXNlLW9iamVjdCc7XG5pbXBvcnQge0lSZWFkb25seVJlc3RTZXJ2aWNlfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvaHR0cC9pLXJlYWRvbmx5LXJlc3RzZXJ2aWNlJztcbmltcG9ydCB7UmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyfSBmcm9tICcuLi8uLi9pbXBsL2h0dHAvcmVhZG9ubHktcmVzdC1zZXJ2aWNlLW9ic2VydmVyJztcbmltcG9ydCB7UmVhZG9ubHlSZXN0SGFuZGxlcn0gZnJvbSAnLi4vLi4vaW1wbC9odHRwL3JlYWRvbnktcmVzdC1oYW5kbGVyJztcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC91dGlsXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFJlYWRvbmx5UmVzdHNlcnZpY2U8VD4gZXh0ZW5kcyBCYXNlT2JqZWN0IGltcGxlbWVudHMgSVJlYWRvbmx5UmVzdFNlcnZpY2U8VD4ge1xuXG4gIGlkZW50aWZpZXI6IHN0cmluZztcbiAgcHVibGljIGFic3RyYWN0IHVybDogc3RyaW5nO1xuICBwdWJsaWMgcmVhZG9ubHkgb2JzZXJ2ZXI6IFJlYWRvbmx5UmVzdFNlcnZpY2VPYnNlcnZlcjxUPjtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IGh0dHA6IEh0dHBDbGllbnQ7XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgIHJlc3RTZXJ2aWNlT2JzZXJ2ZXI/OiBSZWFkb25seVJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VD5cbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm9ic2VydmVyID0gVXRpbC5pc0RlZmluZWQocmVzdFNlcnZpY2VPYnNlcnZlcikgPyByZXN0U2VydmljZU9ic2VydmVyIDpcbiAgICAgIG5ldyBSZWFkb25seVJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VD4oKTtcbiAgfVxuXG4gIHB1YmxpYyBhbGwoc2VhcmNoUGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VFtdPiB7XG4gICAgcmV0dXJuIG5ldyBSZWFkb25seVJlc3RIYW5kbGVyPFQ+KHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIpLmFsbChzZWFyY2hQYXJhbXMsIGh0dHBPcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93KGlkOiBhbnksIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFJlYWRvbmx5UmVzdEhhbmRsZXI8VD4odGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlcikuc2hvdyhpZCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XG4gIH1cblxufVxuIl19