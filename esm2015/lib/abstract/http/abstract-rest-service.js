/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-rest-service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AbstractReadonlyRestservice } from './abstract-readonly-restservice';
import { RestServiceObserver } from "../../impl/http/rest-service-observer";
import { RestHandler } from "../../impl/http/rest-handler";
/**
 * @abstract
 * @template T
 */
export class AbstractRestservice extends AbstractReadonlyRestservice {
    /**
     * @protected
     */
    constructor() {
        super(new RestServiceObserver());
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    create(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).create(model, getParams, httpOptions);
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    destroy(id, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).destroy(id, getParams, httpOptions);
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    partialUpdate(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .partialUpdate(model, getParams, httpOptions);
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    save(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).save(model, getParams, httpOptions);
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    update(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).update(model, getParams, httpOptions);
    }
}
if (false) {
    /** @type {?} */
    AbstractRestservice.prototype.identifier;
    /** @type {?} */
    AbstractRestservice.prototype.observer;
    /**
     * @type {?}
     * @protected
     */
    AbstractRestservice.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmVzdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1yZXN0LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUU1RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBRXpELE1BQU0sT0FBZ0IsbUJBQXVCLFNBQVEsMkJBQThCOzs7O0lBTWpGO1FBQ0UsS0FBSyxDQUFDLElBQUksbUJBQW1CLEVBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7Ozs7SUFFTSxNQUFNLENBQUMsS0FBUSxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFDOUQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDcEgsQ0FBQzs7Ozs7OztJQUVNLE9BQU8sQ0FBQyxFQUFPLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjtRQUM5RCxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNsSCxDQUFDOzs7Ozs7O0lBRU0sYUFBYSxDQUFDLEtBQVEsRUFBRSxTQUFrQixFQUFFLFdBQW9CO1FBQ3JFLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN4RSxhQUFhLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7O0lBRU0sSUFBSSxDQUFDLEtBQVEsRUFBRSxTQUFrQixFQUFFLFdBQW9CO1FBQzVELE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2xILENBQUM7Ozs7Ozs7SUFFTSxNQUFNLENBQUMsS0FBUSxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFDOUQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDcEgsQ0FBQztDQUVGOzs7SUE3QkMseUNBQW1DOztJQUNuQyx1Q0FBbUQ7Ozs7O0lBQ25ELG1DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QWJzdHJhY3RSZWFkb25seVJlc3RzZXJ2aWNlfSBmcm9tICcuL2Fic3RyYWN0LXJlYWRvbmx5LXJlc3RzZXJ2aWNlJztcbmltcG9ydCB7SVdyaXRlYWJsZVJlc3RTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL2h0dHAvaS13cml0ZWFibGUtcmVzdC1zZXJ2aWNlXCI7XG5pbXBvcnQge1Jlc3RTZXJ2aWNlT2JzZXJ2ZXJ9IGZyb20gXCIuLi8uLi9pbXBsL2h0dHAvcmVzdC1zZXJ2aWNlLW9ic2VydmVyXCI7XG5pbXBvcnQge1Jlc3RIYW5kbGVyfSBmcm9tIFwiLi4vLi4vaW1wbC9odHRwL3Jlc3QtaGFuZGxlclwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RSZXN0c2VydmljZTxUPiBleHRlbmRzIEFic3RyYWN0UmVhZG9ubHlSZXN0c2VydmljZTxUPiBpbXBsZW1lbnRzIElXcml0ZWFibGVSZXN0U2VydmljZTxUPiB7XG5cbiAgcHVibGljIGFic3RyYWN0IGlkZW50aWZpZXI6IHN0cmluZztcbiAgcHVibGljIHJlYWRvbmx5IG9ic2VydmVyOiBSZXN0U2VydmljZU9ic2VydmVyPGFueT47XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBodHRwOiBIdHRwQ2xpZW50O1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihuZXcgUmVzdFNlcnZpY2VPYnNlcnZlcjxUPigpKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFJlc3RIYW5kbGVyKHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIsIHRoaXMuaWRlbnRpZmllcikuY3JlYXRlKG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95KGlkOiBhbnksIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFJlc3RIYW5kbGVyKHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIsIHRoaXMuaWRlbnRpZmllcikuZGVzdHJveShpZCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgcGFydGlhbFVwZGF0ZShtb2RlbDogVCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKVxuICAgICAgLnBhcnRpYWxVcGRhdGUobW9kZWwsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIHNhdmUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gbmV3IFJlc3RIYW5kbGVyKHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIsIHRoaXMuaWRlbnRpZmllcikuc2F2ZShtb2RlbCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKG1vZGVsOiBULCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIG5ldyBSZXN0SGFuZGxlcih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyLCB0aGlzLmlkZW50aWZpZXIpLnVwZGF0ZShtb2RlbCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XG4gIH1cblxufVxuIl19