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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmVhZG9ubHktcmVzdHNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC9odHRwL2Fic3RyYWN0LXJlYWRvbmx5LXJlc3RzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRTdDLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFFMUMsTUFBTSxPQUFnQiwyQkFBK0IsU0FBUSxVQUFVOzs7OztJQU9yRSxZQUNFLG1CQUFvRDtRQUVwRCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3pFLElBQUksMkJBQTJCLEVBQUssQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFTSxHQUFHLENBQUMsWUFBcUIsRUFBRSxXQUFvQjtRQUNwRCxPQUFPLElBQUksbUJBQW1CLENBQUksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7Ozs7Ozs7SUFFTSxJQUFJLENBQUMsRUFBTyxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFDM0QsT0FBTyxJQUFJLG1CQUFtQixDQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDekcsQ0FBQztDQUVGOzs7SUFyQkMsaURBQW1COztJQUNuQiwwQ0FBNEI7O0lBQzVCLCtDQUF5RDs7Ozs7SUFDekQsMkNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7QmFzZU9iamVjdH0gZnJvbSAnLi4vdWkvYmFzZS1vYmplY3QnO1xyXG5pbXBvcnQge0lSZWFkb25seVJlc3RTZXJ2aWNlfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvaHR0cC9pLXJlYWRvbmx5LXJlc3RzZXJ2aWNlJztcclxuaW1wb3J0IHtSZWFkb25seVJlc3RTZXJ2aWNlT2JzZXJ2ZXJ9IGZyb20gJy4uLy4uL2ltcGwvaHR0cC9yZWFkb25seS1yZXN0LXNlcnZpY2Utb2JzZXJ2ZXInO1xyXG5pbXBvcnQge1JlYWRvbmx5UmVzdEhhbmRsZXJ9IGZyb20gJy4uLy4uL2ltcGwvaHR0cC9yZWFkb255LXJlc3QtaGFuZGxlcic7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC91dGlsXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RSZWFkb25seVJlc3RzZXJ2aWNlPFQ+IGV4dGVuZHMgQmFzZU9iamVjdCBpbXBsZW1lbnRzIElSZWFkb25seVJlc3RTZXJ2aWNlPFQ+IHtcclxuXHJcbiAgaWRlbnRpZmllcjogc3RyaW5nO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCB1cmw6IHN0cmluZztcclxuICBwdWJsaWMgcmVhZG9ubHkgb2JzZXJ2ZXI6IFJlYWRvbmx5UmVzdFNlcnZpY2VPYnNlcnZlcjxUPjtcclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgaHR0cDogSHR0cENsaWVudDtcclxuXHJcbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxyXG4gICAgcmVzdFNlcnZpY2VPYnNlcnZlcj86IFJlYWRvbmx5UmVzdFNlcnZpY2VPYnNlcnZlcjxUPlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMub2JzZXJ2ZXIgPSBVdGlsLmlzRGVmaW5lZChyZXN0U2VydmljZU9ic2VydmVyKSA/IHJlc3RTZXJ2aWNlT2JzZXJ2ZXIgOlxyXG4gICAgICBuZXcgUmVhZG9ubHlSZXN0U2VydmljZU9ic2VydmVyPFQ+KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWxsKHNlYXJjaFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRbXT4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZWFkb25seVJlc3RIYW5kbGVyPFQ+KHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIpLmFsbChzZWFyY2hQYXJhbXMsIGh0dHBPcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93KGlkOiBhbnksIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHJldHVybiBuZXcgUmVhZG9ubHlSZXN0SGFuZGxlcjxUPih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyKS5zaG93KGlkLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==