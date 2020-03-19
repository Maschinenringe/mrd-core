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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC9odHRwL3Jlc3QtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFJN0MsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGNBQWMsQ0FBQzs7OztBQUdsQzs7OztJQUVFLHFCQUNrQixJQUFnQixFQUNoQixHQUFXLEVBQ1gsUUFBZ0MsRUFDaEMsVUFBa0I7UUFIbEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsYUFBUSxHQUFSLFFBQVEsQ0FBd0I7UUFDaEMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUNqQyxDQUFDOzs7Ozs7O0lBRUcsNEJBQU07Ozs7OztJQUFiLFVBQWMsS0FBUSxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFBaEUsaUJBWUM7UUFYQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQzthQUN0RSxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLFVBQUMsTUFBUztZQUNaLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDLEVBQUMsRUFDRixRQUFROzs7UUFBQztZQUNQLEtBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7Ozs7OztJQUVNLDZCQUFPOzs7Ozs7SUFBZCxVQUFlLEVBQU8sRUFB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QUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBR0gsa0JBQUM7QUFBRCxDQUFDLEFBOUhELElBOEhDOzs7Ozs7O0lBM0hHLDJCQUFnQzs7SUFDaEMsMEJBQTJCOztJQUMzQiwrQkFBZ0Q7O0lBQ2hELGlDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbmFsaXplLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtJV3JpdGVhYmxlUmVzdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvaHR0cC9pLXdyaXRlYWJsZS1yZXN0LXNlcnZpY2VcIjtcbmltcG9ydCB7UmVzdFNlcnZpY2VPYnNlcnZlcn0gZnJvbSBcIi4vcmVzdC1zZXJ2aWNlLW9ic2VydmVyXCI7XG5pbXBvcnQge1V0aWx9IGZyb20gXCIuLi91dGlsL3V0aWxcIjtcblxuXG5leHBvcnQgY2xhc3MgUmVzdEhhbmRsZXI8VD4gaW1wbGVtZW50cyBJV3JpdGVhYmxlUmVzdFNlcnZpY2U8VD4ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHB1YmxpYyByZWFkb25seSB1cmw6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgb2JzZXJ2ZXI6IFJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VD4sXG4gICAgcHVibGljIHJlYWRvbmx5IGlkZW50aWZpZXI6IHN0cmluZ1xuICApIHt9XG5cbiAgcHVibGljIGNyZWF0ZShtb2RlbDogVCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHRoaXMub2JzZXJ2ZXIuaXNDcmVhdGluZ0l0ZW0gPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUPihcbiAgICAgICAgVXRpbC5hcm1VcmxXaXRoU2VhcmNoUGFyYW1zKHRoaXMudXJsLCBnZXRQYXJhbXMpLCBtb2RlbCwgaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKChyZXN1bHQ6IFQpID0+IHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLm9uSXRlbUNyZWF0ZWQubmV4dChyZXN1bHQpO1xuICAgICAgICB9KSxcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuaXNDcmVhdGluZ0l0ZW0gPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveShpZDogYW55LCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgdGhpcy5vYnNlcnZlci5pc0Rlc3RveWluZ0l0ZW0gPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPHZvaWQ+KFxuICAgICAgVXRpbC5hcm1VcmxXaXRoU2VhcmNoUGFyYW1zKFxuICAgICAgICBVdGlsLmNyZWF0ZUVudGl0eVVybCh0aGlzLnVybCwgaWQpLCBnZXRQYXJhbXNcbiAgICAgICksXG4gICAgICBodHRwT3B0aW9uc1xuICAgICkucGlwZShcbiAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub25JdGVtRGVzdHJveWVkLm5leHQoaWQpO1xuICAgICAgfSksXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuaXNEZXN0b3lpbmdJdGVtID0gZmFsc2U7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgcGFydGlhbFVwZGF0ZShtb2RlbDogVCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHRoaXMub2JzZXJ2ZXIuaXNQYXJ0aWFsbHlVcGRhdGluZ0l0ZW0gPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2g8VD4oXG4gICAgICBVdGlsLmFybVVybFdpdGhTZWFyY2hQYXJhbXMoXG4gICAgICAgIFV0aWwuY3JlYXRlRW50aXR5VXJsKHRoaXMudXJsLCBtb2RlbFt0aGlzLmlkZW50aWZpZXJdKSwgZ2V0UGFyYW1zXG4gICAgICApLFxuICAgICAgbW9kZWwsXG4gICAgICBodHRwT3B0aW9uc1xuICAgICkucGlwZShcbiAgICAgIHRhcCgocmVzdWx0OiBUKSA9PiB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub25JdGVtUGFydGlhbFVwZGF0ZWQubmV4dChyZXN1bHQpO1xuICAgICAgfSksXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuaXNQYXJ0aWFsbHlVcGRhdGluZ0l0ZW0gPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzYXZlKG1vZGVsOiBULCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgdGhpcy5vYnNlcnZlci5pc1NhdmluZ0l0ZW0gPSB0cnVlO1xuICAgIGxldCBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFQ+O1xuICAgIGlmIChVdGlsLmlzRGVmaW5lZChtb2RlbFt0aGlzLmlkZW50aWZpZXJdKSkge1xuICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMudXBkYXRlKG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMuY3JlYXRlKG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIG9ic2VydmFibGVcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKHJlc3VsdDogVCkgPT4ge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXIub25JdGVtU2F2ZWQubmV4dChyZXN1bHQpO1xuICAgICAgICB9KSxcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuaXNTYXZpbmdJdGVtID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIHNldChtb2RlbDogVCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHRoaXMub2JzZXJ2ZXIuaXNTYXZpbmdJdGVtID0gdHJ1ZTtcbiAgICBsZXQgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPjtcbiAgICB0aGlzLm9ic2VydmVyLmlzVXBkYXRpbmdJdGVtID0gdHJ1ZTtcbiAgICBvYnNlcnZhYmxlID0gdGhpcy5odHRwLnB1dDxUPihcbiAgICAgIFV0aWwuYXJtVXJsV2l0aFNlYXJjaFBhcmFtcyhcbiAgICAgICAgdGhpcy51cmwsIGdldFBhcmFtc1xuICAgICAgKSxcbiAgICAgIG1vZGVsLFxuICAgICAgaHR0cE9wdGlvbnNcbiAgICApLnBpcGUoXG4gICAgICB0YXAoKHJlc3VsdDogVCkgPT4ge1xuICAgICAgICB0aGlzLm9ic2VydmVyLm9uSXRlbVVwZGF0ZWQubmV4dChyZXN1bHQpO1xuICAgICAgfSksXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuaXNVcGRhdGluZ0l0ZW0gPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHJldHVybiBvYnNlcnZhYmxlXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKChyZXN1bHQ6IFQpID0+IHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLm9uSXRlbVNhdmVkLm5leHQocmVzdWx0KTtcbiAgICAgICAgfSksXG4gICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLmlzU2F2aW5nSXRlbSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICB0aGlzLm9ic2VydmVyLmlzVXBkYXRpbmdJdGVtID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxUPihcbiAgICAgIFV0aWwuYXJtVXJsV2l0aFNlYXJjaFBhcmFtcyhcbiAgICAgICAgVXRpbC5jcmVhdGVFbnRpdHlVcmwodGhpcy51cmwsIG1vZGVsW3RoaXMuaWRlbnRpZmllcl0pLCBnZXRQYXJhbXNcbiAgICAgICksXG4gICAgICBtb2RlbCxcbiAgICAgIGh0dHBPcHRpb25zXG4gICAgKS5waXBlKFxuICAgICAgdGFwKChyZXN1bHQ6IFQpID0+IHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vbkl0ZW1VcGRhdGVkLm5leHQocmVzdWx0KTtcbiAgICAgIH0pLFxuICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICB0aGlzLm9ic2VydmVyLmlzVXBkYXRpbmdJdGVtID0gZmFsc2U7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuXG59XG4iXX0=