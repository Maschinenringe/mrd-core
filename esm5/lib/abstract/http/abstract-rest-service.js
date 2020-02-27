/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-rest-service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { AbstractReadonlyRestservice } from './abstract-readonly-restservice';
import { RestServiceObserver } from "../../impl/http/rest-service-observer";
import { RestHandler } from "../../impl/http/rest-handler";
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
AbstractRestservice = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractRestservice, _super);
    function AbstractRestservice() {
        return _super.call(this, new RestServiceObserver()) || this;
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractRestservice.prototype.create = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).create(model, getParams, httpOptions);
    };
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractRestservice.prototype.destroy = /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (id, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).destroy(id, getParams, httpOptions);
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractRestservice.prototype.partialUpdate = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .partialUpdate(model, getParams, httpOptions);
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractRestservice.prototype.save = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).save(model, getParams, httpOptions);
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    AbstractRestservice.prototype.update = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier).update(model, getParams, httpOptions);
    };
    return AbstractRestservice;
}(AbstractReadonlyRestservice));
/**
 * @abstract
 * @template T
 */
export { AbstractRestservice };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcmVzdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1yZXN0LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFFNUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7OztBQUV6RDs7Ozs7SUFBcUQsK0NBQThCO0lBTWpGO2VBQ0Usa0JBQU0sSUFBSSxtQkFBbUIsRUFBSyxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7SUFFTSxvQ0FBTTs7Ozs7O0lBQWIsVUFBYyxLQUFRLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjtRQUM5RCxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNwSCxDQUFDOzs7Ozs7O0lBRU0scUNBQU87Ozs7OztJQUFkLFVBQWUsRUFBTyxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFDOUQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEgsQ0FBQzs7Ozs7OztJQUVNLDJDQUFhOzs7Ozs7SUFBcEIsVUFBcUIsS0FBUSxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFDckUsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3hFLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7Ozs7SUFFTSxrQ0FBSTs7Ozs7O0lBQVgsVUFBWSxLQUFRLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjtRQUM1RCxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNsSCxDQUFDOzs7Ozs7O0lBRU0sb0NBQU07Ozs7OztJQUFiLFVBQWMsS0FBUSxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFDOUQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDcEgsQ0FBQztJQUVILDBCQUFDO0FBQUQsQ0FBQyxBQS9CRCxDQUFxRCwyQkFBMkIsR0ErQi9FOzs7Ozs7OztJQTdCQyx5Q0FBbUM7O0lBQ25DLHVDQUFtRDs7Ozs7SUFDbkQsbUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7QWJzdHJhY3RSZWFkb25seVJlc3RzZXJ2aWNlfSBmcm9tICcuL2Fic3RyYWN0LXJlYWRvbmx5LXJlc3RzZXJ2aWNlJztcclxuaW1wb3J0IHtJV3JpdGVhYmxlUmVzdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvaHR0cC9pLXdyaXRlYWJsZS1yZXN0LXNlcnZpY2VcIjtcclxuaW1wb3J0IHtSZXN0U2VydmljZU9ic2VydmVyfSBmcm9tIFwiLi4vLi4vaW1wbC9odHRwL3Jlc3Qtc2VydmljZS1vYnNlcnZlclwiO1xyXG5pbXBvcnQge1Jlc3RIYW5kbGVyfSBmcm9tIFwiLi4vLi4vaW1wbC9odHRwL3Jlc3QtaGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UmVzdHNlcnZpY2U8VD4gZXh0ZW5kcyBBYnN0cmFjdFJlYWRvbmx5UmVzdHNlcnZpY2U8VD4gaW1wbGVtZW50cyBJV3JpdGVhYmxlUmVzdFNlcnZpY2U8VD4ge1xyXG5cclxuICBwdWJsaWMgYWJzdHJhY3QgaWRlbnRpZmllcjogc3RyaW5nO1xyXG4gIHB1YmxpYyByZWFkb25seSBvYnNlcnZlcjogUmVzdFNlcnZpY2VPYnNlcnZlcjxhbnk+O1xyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBodHRwOiBIdHRwQ2xpZW50O1xyXG5cclxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihuZXcgUmVzdFNlcnZpY2VPYnNlcnZlcjxUPigpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHJldHVybiBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKS5jcmVhdGUobW9kZWwsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koaWQ6IGFueSwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZXN0SGFuZGxlcih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyLCB0aGlzLmlkZW50aWZpZXIpLmRlc3Ryb3koaWQsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhcnRpYWxVcGRhdGUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHJldHVybiBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKVxyXG4gICAgICAucGFydGlhbFVwZGF0ZShtb2RlbCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2F2ZShtb2RlbDogVCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZXN0SGFuZGxlcih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyLCB0aGlzLmlkZW50aWZpZXIpLnNhdmUobW9kZWwsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShtb2RlbDogVCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgcmV0dXJuIG5ldyBSZXN0SGFuZGxlcih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyLCB0aGlzLmlkZW50aWZpZXIpLnVwZGF0ZShtb2RlbCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=