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
export class RestHandler {
    /**
     * @param {?} http
     * @param {?} url
     * @param {?} observer
     * @param {?} identifier
     */
    constructor(http, url, observer, identifier) {
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
    create(model, getParams, httpOptions) {
        this.observer.isCreatingItem = true;
        return this.http.post(Util.armUrlWithSearchParams(this.url, getParams), model, httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemCreated.next(result);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isCreatingItem = false;
        })));
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    destroy(id, getParams, httpOptions) {
        this.observer.isDestoyingItem = true;
        return this.http.delete(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, id), getParams), httpOptions).pipe(tap((/**
         * @return {?}
         */
        () => {
            this.observer.onItemDestroyed.next(id);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isDestoyingItem = false;
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    partialUpdate(model, getParams, httpOptions) {
        this.observer.isPartiallyUpdatingItem = true;
        return this.http.patch(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, model[this.identifier]), getParams), model, httpOptions).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemPartialUpdated.next(result);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isPartiallyUpdatingItem = false;
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    save(model, getParams, httpOptions) {
        this.observer.isSavingItem = true;
        /** @type {?} */
        let observable;
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
        (result) => {
            this.observer.onItemSaved.next(result);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isSavingItem = false;
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    set(model, getParams, httpOptions) {
        this.observer.isSavingItem = true;
        /** @type {?} */
        let observable;
        this.observer.isUpdatingItem = true;
        observable = this.http.put(Util.armUrlWithSearchParams(this.url, getParams), model, httpOptions).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemUpdated.next(result);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isUpdatingItem = false;
        })));
        return observable
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemSaved.next(result);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isSavingItem = false;
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    update(model, getParams, httpOptions) {
        this.observer.isUpdatingItem = true;
        return this.http.put(Util.armUrlWithSearchParams(Util.createEntityUrl(this.url, model[this.identifier]), getParams), model, httpOptions).pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.observer.onItemUpdated.next(result);
        })), finalize((/**
         * @return {?}
         */
        () => {
            this.observer.isUpdatingItem = false;
        })));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC9odHRwL3Jlc3QtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFJN0MsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGNBQWMsQ0FBQzs7OztBQUdsQyxNQUFNLE9BQU8sV0FBVzs7Ozs7OztJQUV0QixZQUNrQixJQUFnQixFQUNoQixHQUFXLEVBQ1gsUUFBZ0MsRUFDaEMsVUFBa0I7UUFIbEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsYUFBUSxHQUFSLFFBQVEsQ0FBd0I7UUFDaEMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUNqQyxDQUFDOzs7Ozs7O0lBRUcsTUFBTSxDQUFDLEtBQVEsRUFBRSxTQUFrQixFQUFFLFdBQW9CO1FBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDO2FBQ3RFLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFTLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUFDLEVBQ0YsUUFBUTs7O1FBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUNILENBQUM7SUFDTixDQUFDOzs7Ozs7O0lBRU0sT0FBTyxDQUFDLEVB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QUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBR0Y7OztJQTNIRywyQkFBZ0M7O0lBQ2hDLDBCQUEyQjs7SUFDM0IsK0JBQWdEOztJQUNoRCxpQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge2ZpbmFsaXplLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7SVdyaXRlYWJsZVJlc3RTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL2h0dHAvaS13cml0ZWFibGUtcmVzdC1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVzdFNlcnZpY2VPYnNlcnZlcn0gZnJvbSBcIi4vcmVzdC1zZXJ2aWNlLW9ic2VydmVyXCI7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4uL3V0aWwvdXRpbFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXN0SGFuZGxlcjxUPiBpbXBsZW1lbnRzIElXcml0ZWFibGVSZXN0U2VydmljZTxUPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJlYWRvbmx5IGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgdXJsOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb2JzZXJ2ZXI6IFJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VD4sXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgaWRlbnRpZmllcjogc3RyaW5nXHJcbiAgKSB7fVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKG1vZGVsOiBULCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICB0aGlzLm9ic2VydmVyLmlzQ3JlYXRpbmdJdGVtID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUPihcclxuICAgICAgICBVdGlsLmFybVVybFdpdGhTZWFyY2hQYXJhbXModGhpcy51cmwsIGdldFBhcmFtcyksIG1vZGVsLCBodHRwT3B0aW9ucylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKChyZXN1bHQ6IFQpID0+IHtcclxuICAgICAgICAgIHRoaXMub2JzZXJ2ZXIub25JdGVtQ3JlYXRlZC5uZXh0KHJlc3VsdCk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vYnNlcnZlci5pc0NyZWF0aW5nSXRlbSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzdHJveShpZDogYW55LCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICB0aGlzLm9ic2VydmVyLmlzRGVzdG95aW5nSXRlbSA9IHRydWU7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTx2b2lkPihcclxuICAgICAgVXRpbC5hcm1VcmxXaXRoU2VhcmNoUGFyYW1zKFxyXG4gICAgICAgIFV0aWwuY3JlYXRlRW50aXR5VXJsKHRoaXMudXJsLCBpZCksIGdldFBhcmFtc1xyXG4gICAgICApLFxyXG4gICAgICBodHRwT3B0aW9uc1xyXG4gICAgKS5waXBlKFxyXG4gICAgICB0YXAoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub25JdGVtRGVzdHJveWVkLm5leHQoaWQpO1xyXG4gICAgICB9KSxcclxuICAgICAgZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuaXNEZXN0b3lpbmdJdGVtID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBhcnRpYWxVcGRhdGUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHRoaXMub2JzZXJ2ZXIuaXNQYXJ0aWFsbHlVcGRhdGluZ0l0ZW0gPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaDxUPihcclxuICAgICAgVXRpbC5hcm1VcmxXaXRoU2VhcmNoUGFyYW1zKFxyXG4gICAgICAgIFV0aWwuY3JlYXRlRW50aXR5VXJsKHRoaXMudXJsLCBtb2RlbFt0aGlzLmlkZW50aWZpZXJdKSwgZ2V0UGFyYW1zXHJcbiAgICAgICksXHJcbiAgICAgIG1vZGVsLFxyXG4gICAgICBodHRwT3B0aW9uc1xyXG4gICAgKS5waXBlKFxyXG4gICAgICB0YXAoKHJlc3VsdDogVCkgPT4ge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub25JdGVtUGFydGlhbFVwZGF0ZWQubmV4dChyZXN1bHQpO1xyXG4gICAgICB9KSxcclxuICAgICAgZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuaXNQYXJ0aWFsbHlVcGRhdGluZ0l0ZW0gPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2F2ZShtb2RlbDogVCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgdGhpcy5vYnNlcnZlci5pc1NhdmluZ0l0ZW0gPSB0cnVlO1xyXG4gICAgbGV0IG9ic2VydmFibGU6IE9ic2VydmFibGU8VD47XHJcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQobW9kZWxbdGhpcy5pZGVudGlmaWVyXSkpIHtcclxuICAgICAgb2JzZXJ2YWJsZSA9IHRoaXMudXBkYXRlKG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9ic2VydmFibGUgPSB0aGlzLmNyZWF0ZShtb2RlbCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YXAoKHJlc3VsdDogVCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vYnNlcnZlci5vbkl0ZW1TYXZlZC5uZXh0KHJlc3VsdCk7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vYnNlcnZlci5pc1NhdmluZ0l0ZW0gPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldChtb2RlbDogVCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgdGhpcy5vYnNlcnZlci5pc1NhdmluZ0l0ZW0gPSB0cnVlO1xyXG4gICAgbGV0IG9ic2VydmFibGU6IE9ic2VydmFibGU8VD47XHJcbiAgICB0aGlzLm9ic2VydmVyLmlzVXBkYXRpbmdJdGVtID0gdHJ1ZTtcclxuICAgIG9ic2VydmFibGUgPSB0aGlzLmh0dHAucHV0PFQ+KFxyXG4gICAgICBVdGlsLmFybVVybFdpdGhTZWFyY2hQYXJhbXMoXHJcbiAgICAgICAgdGhpcy51cmwsIGdldFBhcmFtc1xyXG4gICAgICApLFxyXG4gICAgICBtb2RlbCxcclxuICAgICAgaHR0cE9wdGlvbnNcclxuICAgICkucGlwZShcclxuICAgICAgdGFwKChyZXN1bHQ6IFQpID0+IHtcclxuICAgICAgICB0aGlzLm9ic2VydmVyLm9uSXRlbVVwZGF0ZWQubmV4dChyZXN1bHQpO1xyXG4gICAgICB9KSxcclxuICAgICAgZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuaXNVcGRhdGluZ0l0ZW0gPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIG9ic2VydmFibGVcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFwKChyZXN1bHQ6IFQpID0+IHtcclxuICAgICAgICAgIHRoaXMub2JzZXJ2ZXIub25JdGVtU2F2ZWQubmV4dChyZXN1bHQpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGZpbmFsaXplKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuaXNTYXZpbmdJdGVtID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHRoaXMub2JzZXJ2ZXIuaXNVcGRhdGluZ0l0ZW0gPSB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8VD4oXHJcbiAgICAgIFV0aWwuYXJtVXJsV2l0aFNlYXJjaFBhcmFtcyhcclxuICAgICAgICBVdGlsLmNyZWF0ZUVudGl0eVVybCh0aGlzLnVybCwgbW9kZWxbdGhpcy5pZGVudGlmaWVyXSksIGdldFBhcmFtc1xyXG4gICAgICApLFxyXG4gICAgICBtb2RlbCxcclxuICAgICAgaHR0cE9wdGlvbnNcclxuICAgICkucGlwZShcclxuICAgICAgdGFwKChyZXN1bHQ6IFQpID0+IHtcclxuICAgICAgICB0aGlzLm9ic2VydmVyLm9uSXRlbVVwZGF0ZWQubmV4dChyZXN1bHQpO1xyXG4gICAgICB9KSxcclxuICAgICAgZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuaXNVcGRhdGluZ0l0ZW0gPSBmYWxzZTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19