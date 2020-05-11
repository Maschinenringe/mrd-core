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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW1wbC9odHRwL3Jlc3QtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFJN0MsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGNBQWMsQ0FBQzs7OztBQUdsQyxNQUFNLE9BQU8sV0FBVzs7Ozs7OztJQUV0QixZQUNrQixJQUFnQixFQUNoQixHQUFXLEVBQ1gsUUFBZ0MsRUFDaEMsVUFBa0I7UUFIbEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsYUFBUSxHQUFSLFFBQVEsQ0FBd0I7UUFDaEMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUNqQyxDQUFDOzs7Ozs7O0lBRUcsTUFBTSxDQUFDLEtBQVEsRUFBRSxTQUFrQixFQUFFLFdBQW9CO1FBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDO2FBQ3RFLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFTLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxFQUFDLEVBQ0YsUUFBUTs7O1FBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUNILENBQUM7SUFDTixDQUFDOzs7Ozs7O0lBRU0sT0FBTyxDQUFDLEVB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QUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBR0Y7OztJQTNIRywyQkFBZ0M7O0lBQ2hDLDBCQUEyQjs7SUFDM0IsK0JBQWdEOztJQUNoRCxpQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaW5hbGl6ZSwgdGFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7SVdyaXRlYWJsZVJlc3RTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL2h0dHAvaS13cml0ZWFibGUtcmVzdC1zZXJ2aWNlXCI7XG5pbXBvcnQge1Jlc3RTZXJ2aWNlT2JzZXJ2ZXJ9IGZyb20gXCIuL3Jlc3Qtc2VydmljZS1vYnNlcnZlclwiO1xuaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi4vdXRpbC91dGlsXCI7XG5cblxuZXhwb3J0IGNsYXNzIFJlc3RIYW5kbGVyPFQ+IGltcGxlbWVudHMgSVdyaXRlYWJsZVJlc3RTZXJ2aWNlPFQ+IHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgaHR0cDogSHR0cENsaWVudCxcbiAgICBwdWJsaWMgcmVhZG9ubHkgdXJsOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IG9ic2VydmVyOiBSZXN0U2VydmljZU9ic2VydmVyPFQ+LFxuICAgIHB1YmxpYyByZWFkb25seSBpZGVudGlmaWVyOiBzdHJpbmdcbiAgKSB7fVxuXG4gIHB1YmxpYyBjcmVhdGUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICB0aGlzLm9ic2VydmVyLmlzQ3JlYXRpbmdJdGVtID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VD4oXG4gICAgICAgIFV0aWwuYXJtVXJsV2l0aFNlYXJjaFBhcmFtcyh0aGlzLnVybCwgZ2V0UGFyYW1zKSwgbW9kZWwsIGh0dHBPcHRpb25zKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgocmVzdWx0OiBUKSA9PiB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlci5vbkl0ZW1DcmVhdGVkLm5leHQocmVzdWx0KTtcbiAgICAgICAgfSksXG4gICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLmlzQ3JlYXRpbmdJdGVtID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koaWQ6IGFueSwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHRoaXMub2JzZXJ2ZXIuaXNEZXN0b3lpbmdJdGVtID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTx2b2lkPihcbiAgICAgIFV0aWwuYXJtVXJsV2l0aFNlYXJjaFBhcmFtcyhcbiAgICAgICAgVXRpbC5jcmVhdGVFbnRpdHlVcmwodGhpcy51cmwsIGlkKSwgZ2V0UGFyYW1zXG4gICAgICApLFxuICAgICAgaHR0cE9wdGlvbnNcbiAgICApLnBpcGUoXG4gICAgICB0YXAoKCkgPT4ge1xuICAgICAgICB0aGlzLm9ic2VydmVyLm9uSXRlbURlc3Ryb3llZC5uZXh0KGlkKTtcbiAgICAgIH0pLFxuICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICB0aGlzLm9ic2VydmVyLmlzRGVzdG95aW5nSXRlbSA9IGZhbHNlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHBhcnRpYWxVcGRhdGUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICB0aGlzLm9ic2VydmVyLmlzUGFydGlhbGx5VXBkYXRpbmdJdGVtID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoPFQ+KFxuICAgICAgVXRpbC5hcm1VcmxXaXRoU2VhcmNoUGFyYW1zKFxuICAgICAgICBVdGlsLmNyZWF0ZUVudGl0eVVybCh0aGlzLnVybCwgbW9kZWxbdGhpcy5pZGVudGlmaWVyXSksIGdldFBhcmFtc1xuICAgICAgKSxcbiAgICAgIG1vZGVsLFxuICAgICAgaHR0cE9wdGlvbnNcbiAgICApLnBpcGUoXG4gICAgICB0YXAoKHJlc3VsdDogVCkgPT4ge1xuICAgICAgICB0aGlzLm9ic2VydmVyLm9uSXRlbVBhcnRpYWxVcGRhdGVkLm5leHQocmVzdWx0KTtcbiAgICAgIH0pLFxuICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICB0aGlzLm9ic2VydmVyLmlzUGFydGlhbGx5VXBkYXRpbmdJdGVtID0gZmFsc2U7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgc2F2ZShtb2RlbDogVCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHRoaXMub2JzZXJ2ZXIuaXNTYXZpbmdJdGVtID0gdHJ1ZTtcbiAgICBsZXQgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPjtcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQobW9kZWxbdGhpcy5pZGVudGlmaWVyXSkpIHtcbiAgICAgIG9ic2VydmFibGUgPSB0aGlzLnVwZGF0ZShtb2RlbCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ic2VydmFibGUgPSB0aGlzLmNyZWF0ZShtb2RlbCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBvYnNlcnZhYmxlXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKChyZXN1bHQ6IFQpID0+IHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLm9uSXRlbVNhdmVkLm5leHQocmVzdWx0KTtcbiAgICAgICAgfSksXG4gICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLmlzU2F2aW5nSXRlbSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICB0aGlzLm9ic2VydmVyLmlzU2F2aW5nSXRlbSA9IHRydWU7XG4gICAgbGV0IG9ic2VydmFibGU6IE9ic2VydmFibGU8VD47XG4gICAgdGhpcy5vYnNlcnZlci5pc1VwZGF0aW5nSXRlbSA9IHRydWU7XG4gICAgb2JzZXJ2YWJsZSA9IHRoaXMuaHR0cC5wdXQ8VD4oXG4gICAgICBVdGlsLmFybVVybFdpdGhTZWFyY2hQYXJhbXMoXG4gICAgICAgIHRoaXMudXJsLCBnZXRQYXJhbXNcbiAgICAgICksXG4gICAgICBtb2RlbCxcbiAgICAgIGh0dHBPcHRpb25zXG4gICAgKS5waXBlKFxuICAgICAgdGFwKChyZXN1bHQ6IFQpID0+IHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5vbkl0ZW1VcGRhdGVkLm5leHQocmVzdWx0KTtcbiAgICAgIH0pLFxuICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICB0aGlzLm9ic2VydmVyLmlzVXBkYXRpbmdJdGVtID0gZmFsc2U7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICByZXR1cm4gb2JzZXJ2YWJsZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgocmVzdWx0OiBUKSA9PiB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlci5vbkl0ZW1TYXZlZC5uZXh0KHJlc3VsdCk7XG4gICAgICAgIH0pLFxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlci5pc1NhdmluZ0l0ZW0gPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKG1vZGVsOiBULCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgdGhpcy5vYnNlcnZlci5pc1VwZGF0aW5nSXRlbSA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8VD4oXG4gICAgICBVdGlsLmFybVVybFdpdGhTZWFyY2hQYXJhbXMoXG4gICAgICAgIFV0aWwuY3JlYXRlRW50aXR5VXJsKHRoaXMudXJsLCBtb2RlbFt0aGlzLmlkZW50aWZpZXJdKSwgZ2V0UGFyYW1zXG4gICAgICApLFxuICAgICAgbW9kZWwsXG4gICAgICBodHRwT3B0aW9uc1xuICAgICkucGlwZShcbiAgICAgIHRhcCgocmVzdWx0OiBUKSA9PiB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub25JdGVtVXBkYXRlZC5uZXh0KHJlc3VsdCk7XG4gICAgICB9KSxcbiAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5pc1VwZGF0aW5nSXRlbSA9IGZhbHNlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cblxufVxuIl19