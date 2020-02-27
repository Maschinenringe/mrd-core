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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmVzdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1yZXN0LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUU1RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBRXpELE1BQU0sT0FBZ0IsbUJBQXVCLFNBQVEsMkJBQThCOzs7O0lBTWpGO1FBQ0UsS0FBSyxDQUFDLElBQUksbUJBQW1CLEVBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7Ozs7SUFFTSxNQUFNLENBQUMsS0FBUSxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFDOUQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDcEgsQ0FBQzs7Ozs7OztJQUVNLE9BQU8sQ0FBQyxFQUFPLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjtRQUM5RCxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNsSCxDQUFDOzs7Ozs7O0lBRU0sYUFBYSxDQUFDLEtBQVEsRUFBRSxTQUFrQixFQUFFLFdBQW9CO1FBQ3JFLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN4RSxhQUFhLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7O0lBRU0sSUFBSSxDQUFDLEtBQVEsRUFBRSxTQUFrQixFQUFFLFdBQW9CO1FBQzVELE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2xILENBQUM7Ozs7Ozs7SUFFTSxNQUFNLENBQUMsS0FBUSxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFDOUQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDcEgsQ0FBQztDQUVGOzs7SUE3QkMseUNBQW1DOztJQUNuQyx1Q0FBbUQ7Ozs7O0lBQ25ELG1DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge0Fic3RyYWN0UmVhZG9ubHlSZXN0c2VydmljZX0gZnJvbSAnLi9hYnN0cmFjdC1yZWFkb25seS1yZXN0c2VydmljZSc7XHJcbmltcG9ydCB7SVdyaXRlYWJsZVJlc3RTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL2h0dHAvaS13cml0ZWFibGUtcmVzdC1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVzdFNlcnZpY2VPYnNlcnZlcn0gZnJvbSBcIi4uLy4uL2ltcGwvaHR0cC9yZXN0LXNlcnZpY2Utb2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtSZXN0SGFuZGxlcn0gZnJvbSBcIi4uLy4uL2ltcGwvaHR0cC9yZXN0LWhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFJlc3RzZXJ2aWNlPFQ+IGV4dGVuZHMgQWJzdHJhY3RSZWFkb25seVJlc3RzZXJ2aWNlPFQ+IGltcGxlbWVudHMgSVdyaXRlYWJsZVJlc3RTZXJ2aWNlPFQ+IHtcclxuXHJcbiAgcHVibGljIGFic3RyYWN0IGlkZW50aWZpZXI6IHN0cmluZztcclxuICBwdWJsaWMgcmVhZG9ubHkgb2JzZXJ2ZXI6IFJlc3RTZXJ2aWNlT2JzZXJ2ZXI8YW55PjtcclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgaHR0cDogSHR0cENsaWVudDtcclxuXHJcbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIobmV3IFJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VD4oKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKG1vZGVsOiBULCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICByZXR1cm4gbmV3IFJlc3RIYW5kbGVyKHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIsIHRoaXMuaWRlbnRpZmllcikuY3JlYXRlKG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KGlkOiBhbnksIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKS5kZXN0cm95KGlkLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwYXJ0aWFsVXBkYXRlKG1vZGVsOiBULCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICByZXR1cm4gbmV3IFJlc3RIYW5kbGVyKHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIsIHRoaXMuaWRlbnRpZmllcilcclxuICAgICAgLnBhcnRpYWxVcGRhdGUobW9kZWwsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNhdmUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHJldHVybiBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKS5zYXZlKG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHJldHVybiBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKS51cGRhdGUobW9kZWwsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19