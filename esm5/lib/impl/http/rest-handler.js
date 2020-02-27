/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/http/rest-handler.ts
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
RestHandler = /** @class */ (function () {
    function RestHandler(http, url, observer, identifier) {
        this.http = http;
        this.url = url;
        this.observer = observer;
        this.identifier = identifier;
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    RestHandler.prototype.create = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        var _this = this;
        this.observer.isCreatingItem = true;
        return this.http.post(Util.armUrlWithSearchParams(this.url, getParams), model, httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemCreated.next(result);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isCreatingItem = false;
        })));
    };
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    RestHandler.prototype.destroy = /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (id, getParams, httpOptions) {
        var _this = this;
        this.observer.isDestoyingItem = true;
        return this.http.delete(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, id), getParams), httpOptions).pipe(tap((/**
         * @return {?}
         */
        function () {
            _this.observer.onItemDestroyed.next(id);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isDestoyingItem = false;
        })));
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    RestHandler.prototype.partialUpdate = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        var _this = this;
        this.observer.isPartiallyUpdatingItem = true;
        return this.http.patch(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, model[this.identifier]), getParams), model, httpOptions).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemPartialUpdated.next(result);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isPartiallyUpdatingItem = false;
        })));
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    RestHandler.prototype.save = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        var _this = this;
        this.observer.isSavingItem = true;
        /** @type {?} */
        var observable;
        if (Util.isDefined(model[this.identifier])) {
            observable = this.update(model, getParams, httpOptions);
        }
        else {
            observable = this.create(model, getParams, httpOptions);
        }
        return observable
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemSaved.next(result);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isSavingItem = false;
        })));
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    RestHandler.prototype.set = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        var _this = this;
        this.observer.isSavingItem = true;
        /** @type {?} */
        var observable;
        this.observer.isUpdatingItem = true;
        observable = this.http.put(Util.armUrlWithSearchParams(this.url, getParams), model, httpOptions).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemUpdated.next(result);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isUpdatingItem = false;
        })));
        return observable
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemSaved.next(result);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isSavingItem = false;
        })));
    };
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    RestHandler.prototype.update = /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    function (model, getParams, httpOptions) {
        var _this = this;
        this.observer.isUpdatingItem = true;
        return this.http.put(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, model[this.identifier]), getParams), model, httpOptions).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            _this.observer.onItemUpdated.next(result);
        })), finalize((/**
         * @return {?}
         */
        function () {
            _this.observer.isUpdatingItem = false;
        })));
    };
    return RestHandler;
}());
/**
 * @template T
 */
export { RestHandler };
if (false) {
    /** @type {?} */
    RestHandler.prototype.http;
    /** @type {?} */
    RestHandler.prototype.url;
    /** @type {?} */
    RestHandler.prototype.observer;
    /** @type {?} */
    RestHandler.prototype.identifier;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC9odHRwL3Jlc3QtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFJN0MsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGNBQWMsQ0FBQzs7OztBQUdsQzs7OztJQUVFLHFCQUNrQixJQUFnQixFQUNoQixHQUFXLEVBQ1gsUUFBZ0MsRUFDaEMsVUFBa0I7UUFIbEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsYUFBUSxHQUFSLFFBQVEsQ0FBd0I7UUFDaEMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUNqQyxDQUFDOzs7Ozs7O0lBRUcsNEJBQU07Ozs7OztJQUFiLFVBQWMsS0FBUSxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFBaEUsaUJBWUM7UUFYQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQzthQUN0RSxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUMsTUFBUztZQUNaLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUMsRUFDRixRQUFROzs7UUFBQztZQUNQLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7Ozs7OztJQUVNLDZCQUFPOzs7Ozs7SUFBZCxVQUFlLEVBQU8sRUFB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QUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBR0gsa0JBQUM7QUFBRCxDQUFDLEFBOUhELElBOEhDOzs7Ozs7O0lBM0hHLDJCQUFnQzs7SUFDaEMsMEJBQTJCOztJQUMzQiwrQkFBZ0Q7O0lBQ2hELGlDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7ZmluYWxpemUsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtJV3JpdGVhYmxlUmVzdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvaHR0cC9pLXdyaXRlYWJsZS1yZXN0LXNlcnZpY2VcIjtcclxuaW1wb3J0IHtSZXN0U2VydmljZU9ic2VydmVyfSBmcm9tIFwiLi9yZXN0LXNlcnZpY2Utb2JzZXJ2ZXJcIjtcclxuaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi4vdXRpbC91dGlsXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3RIYW5kbGVyPFQ+IGltcGxlbWVudHMgSVdyaXRlYWJsZVJlc3RTZXJ2aWNlPFQ+IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaHR0cDogSHR0cENsaWVudCxcclxuICAgIHB1YmxpYyByZWFkb25seSB1cmw6IHN0cmluZyxcclxuICAgIHB1YmxpYyByZWFkb25seSBvYnNlcnZlcjogUmVzdFNlcnZpY2VPYnNlcnZlcjxUPixcclxuICAgIHB1YmxpYyByZWFkb25seSBpZGVudGlmaWVyOiBzdHJpbmdcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHRoaXMub2JzZXJ2ZXIuaXNDcmVhdGluZ0l0ZW0gPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFQ+KFxyXG4gICAgICAgIFV0aWwuYXJtVXJsV2l0aFNlYXJjaFBhcmFtcyh0aGlzLnVybCwgZ2V0UGFyYW1zKSwgbW9kZWwsIGh0dHBPcHRpb25zKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoKHJlc3VsdDogVCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vYnNlcnZlci5vbkl0ZW1DcmVhdGVkLm5leHQocmVzdWx0KTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLmlzQ3JlYXRpbmdJdGVtID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KGlkOiBhbnksIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHRoaXMub2JzZXJ2ZXIuaXNEZXN0b3lpbmdJdGVtID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPHZvaWQ+KFxyXG4gICAgICBVdGlsLmFybVVybFdpdGhTZWFyY2hQYXJhbXMoXHJcbiAgICAgICAgVXRpbC5jcmVhdGVFbnRpdHlVcmwodGhpcy51cmwsIGlkKSwgZ2V0UGFyYW1zXHJcbiAgICAgICksXHJcbiAgICAgIGh0dHBPcHRpb25zXHJcbiAgICApLnBpcGUoXHJcbiAgICAgIHRhcCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vbkl0ZW1EZXN0cm95ZWQubmV4dChpZCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5pc0Rlc3RveWluZ0l0ZW0gPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGFydGlhbFVwZGF0ZShtb2RlbDogVCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgdGhpcy5vYnNlcnZlci5pc1BhcnRpYWxseVVwZGF0aW5nSXRlbSA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoPFQ+KFxyXG4gICAgICBVdGlsLmFybVVybFdpdGhTZWFyY2hQYXJhbXMoXHJcbiAgICAgICAgVXRpbC5jcmVhdGVFbnRpdHlVcmwodGhpcy51cmwsIG1vZGVsW3RoaXMuaWRlbnRpZmllcl0pLCBnZXRQYXJhbXNcclxuICAgICAgKSxcclxuICAgICAgbW9kZWwsXHJcbiAgICAgIGh0dHBPcHRpb25zXHJcbiAgICApLnBpcGUoXHJcbiAgICAgIHRhcCgocmVzdWx0OiBUKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vbkl0ZW1QYXJ0aWFsVXBkYXRlZC5uZXh0KHJlc3VsdCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5pc1BhcnRpYWxseVVwZGF0aW5nSXRlbSA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzYXZlKG1vZGVsOiBULCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICB0aGlzLm9ic2VydmVyLmlzU2F2aW5nSXRlbSA9IHRydWU7XHJcbiAgICBsZXQgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPjtcclxuICAgIGlmIChVdGlsLmlzRGVmaW5lZChtb2RlbFt0aGlzLmlkZW50aWZpZXJdKSkge1xyXG4gICAgICBvYnNlcnZhYmxlID0gdGhpcy51cGRhdGUobW9kZWwsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMuY3JlYXRlKG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYnNlcnZhYmxlXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcCgocmVzdWx0OiBUKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLm9uSXRlbVNhdmVkLm5leHQocmVzdWx0KTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLmlzU2F2aW5nSXRlbSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0KG1vZGVsOiBULCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICB0aGlzLm9ic2VydmVyLmlzU2F2aW5nSXRlbSA9IHRydWU7XHJcbiAgICBsZXQgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPjtcclxuICAgIHRoaXMub2JzZXJ2ZXIuaXNVcGRhdGluZ0l0ZW0gPSB0cnVlO1xyXG4gICAgb2JzZXJ2YWJsZSA9IHRoaXMuaHR0cC5wdXQ8VD4oXHJcbiAgICAgIFV0aWwuYXJtVXJsV2l0aFNlYXJjaFBhcmFtcyhcclxuICAgICAgICB0aGlzLnVybCwgZ2V0UGFyYW1zXHJcbiAgICAgICksXHJcbiAgICAgIG1vZGVsLFxyXG4gICAgICBodHRwT3B0aW9uc1xyXG4gICAgKS5waXBlKFxyXG4gICAgICB0YXAoKHJlc3VsdDogVCkgPT4ge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub25JdGVtVXBkYXRlZC5uZXh0KHJlc3VsdCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5pc1VwZGF0aW5nSXRlbSA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoKHJlc3VsdDogVCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vYnNlcnZlci5vbkl0ZW1TYXZlZC5uZXh0KHJlc3VsdCk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vYnNlcnZlci5pc1NhdmluZ0l0ZW0gPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShtb2RlbDogVCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgdGhpcy5vYnNlcnZlci5pc1VwZGF0aW5nSXRlbSA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxUPihcclxuICAgICAgVXRpbC5hcm1VcmxXaXRoU2VhcmNoUGFyYW1zKFxyXG4gICAgICAgIFV0aWwuY3JlYXRlRW50aXR5VXJsKHRoaXMudXJsLCBtb2RlbFt0aGlzLmlkZW50aWZpZXJdKSwgZ2V0UGFyYW1zXHJcbiAgICAgICksXHJcbiAgICAgIG1vZGVsLFxyXG4gICAgICBodHRwT3B0aW9uc1xyXG4gICAgKS5waXBlKFxyXG4gICAgICB0YXAoKHJlc3VsdDogVCkgPT4ge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub25JdGVtVXBkYXRlZC5uZXh0KHJlc3VsdCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5pc1VwZGF0aW5nSXRlbSA9IGZhbHNlO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=