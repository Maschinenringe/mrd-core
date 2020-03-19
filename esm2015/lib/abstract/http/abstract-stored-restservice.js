/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/http/abstract-stored-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AbstractStoredReadonlyRestservice } from "./abstract-stored-readonly-restservice";
import { RestServiceObserver } from "../../impl/http/rest-service-observer";
import { RestHandler } from "../../impl/http/rest-handler";
import { tap } from 'rxjs/operators';
import { Util } from "../../impl/util/util";
/**
 * @abstract
 * @template TModel
 */
export class AbstractStoredRestservice extends AbstractStoredReadonlyRestservice {
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
        /** @type {?} */
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .create(model, getParams, httpOptions);
        return this.modifyCreateCall(request);
    }
    /**
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    destroy(id, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .destroy(id, getParams, httpOptions)
            .pipe(tap((/**
         * @return {?}
         */
        () => {
            this.store.removeByIdentifier(id);
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    partialUpdate(model, getParams, httpOptions) {
        return new RestHandler(this.http, this.url, this.observer, this.identifier)
            .partialUpdate(model, getParams, httpOptions)
            .pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.store.update(result);
        })));
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    save(model, getParams, httpOptions) {
        /** @type {?} */
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .save(model, getParams, httpOptions);
        if (Util.isDefined(model[this.identifier])) {
            request = this.modifyUpdateCall(request);
        }
        else {
            request = this.modifyCreateCall(request);
        }
        return request;
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    set(model, getParams, httpOptions) {
        /** @type {?} */
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .set(model, getParams, httpOptions);
        if (Util.isDefined(model[this.identifier])) {
            request = this.modifyUpdateCall(request);
        }
        else {
            request = this.modifyCreateCall(request);
        }
        return request;
    }
    /**
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    update(model, getParams, httpOptions) {
        /** @type {?} */
        let request = new RestHandler(this.http, this.url, this.observer, this.identifier)
            .update(model, getParams, httpOptions);
        request = this.modifyUpdateCall(request);
        return request;
    }
    /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    modifyCreateCall(observable) {
        return observable.pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.store.push(result);
        })));
    }
    /**
     * @protected
     * @param {?} observable
     * @return {?}
     */
    modifyUpdateCall(observable) {
        return observable.pipe(tap((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            this.store.update(result);
        })));
    }
}
if (false) {
    /** @type {?} */
    AbstractStoredRestservice.prototype.observer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3Qtc3RvcmVkLXJlc3RzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvYWJzdHJhY3QvaHR0cC9hYnN0cmFjdC1zdG9yZWQtcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsaUNBQWlDLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUV6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFFekQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFFMUMsTUFBTSxPQUFnQix5QkFDcEIsU0FBUSxpQ0FBeUM7Ozs7SUFLakQ7UUFDRSxLQUFLLENBQUMsSUFBSSxtQkFBbUIsRUFBVSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7OztJQUVNLE1BQU0sQ0FBQyxLQUFhLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjs7WUFDL0QsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDL0UsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7SUFFTSxPQUFPLENBQUMsRUFBTyxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7UUFDOUQsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3hFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQzthQUNuQyxJQUFJLENBQ0gsR0FBRzs7O1FBQUUsR0FBRyxFQUFFO1lBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7Ozs7OztJQUVNLGFBQWEsQ0FBQyxLQUFhLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjtRQUMxRSxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDeEUsYUFBYSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO2FBQzVDLElBQUksQ0FDSCxHQUFHOzs7O1FBQUUsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQzs7Ozs7OztJQUVNLElBQUksQ0FBQyxLQUFhLEVBQUUsU0FBa0IsRUFBRSxXQUFvQjs7WUFDN0QsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDL0UsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7WUFDMUMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQztRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFFTSxHQUFHLENBQUMsS0FBYSxFQUFFLFNBQWtCLEVBQUUsV0FBb0I7O1lBQzVELE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQy9FLEdBQUcsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFO1lBQzFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUM7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUFDLEtBQWEsRUFBRSxTQUFrQixFQUFFLFdBQW9COztZQUMvRCxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUMvRSxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUM7UUFDeEMsT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7Ozs7SUFFUyxnQkFBZ0IsQ0FBQyxVQUE4QjtRQUN2RCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQ3BCLEdBQUc7Ozs7UUFBRSxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFUyxnQkFBZ0IsQ0FBQyxVQUE4QjtRQUN2RCxPQUFPLFVBQVUsQ0FBQyxJQUFJLENBQ3BCLEdBQUc7Ozs7UUFBRSxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDO0NBRUY7OztJQTdFQyw2Q0FBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0U3RvcmVkUmVhZG9ubHlSZXN0c2VydmljZX0gZnJvbSBcIi4vYWJzdHJhY3Qtc3RvcmVkLXJlYWRvbmx5LXJlc3RzZXJ2aWNlXCI7XG5pbXBvcnQge0lXcml0ZWFibGVSZXN0U2VydmljZX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS9odHRwL2ktd3JpdGVhYmxlLXJlc3Qtc2VydmljZVwiO1xuaW1wb3J0IHtSZXN0U2VydmljZU9ic2VydmVyfSBmcm9tIFwiLi4vLi4vaW1wbC9odHRwL3Jlc3Qtc2VydmljZS1vYnNlcnZlclwiO1xuaW1wb3J0IHtSZXN0SGFuZGxlcn0gZnJvbSBcIi4uLy4uL2ltcGwvaHR0cC9yZXN0LWhhbmRsZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC91dGlsXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFN0b3JlZFJlc3RzZXJ2aWNlPFRNb2RlbD5cbiAgZXh0ZW5kcyBBYnN0cmFjdFN0b3JlZFJlYWRvbmx5UmVzdHNlcnZpY2U8VE1vZGVsPlxuICBpbXBsZW1lbnRzIElXcml0ZWFibGVSZXN0U2VydmljZTxUTW9kZWw+IHtcblxuICBwdWJsaWMgcmVhZG9ubHkgb2JzZXJ2ZXI6IFJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VE1vZGVsPjtcblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIobmV3IFJlc3RTZXJ2aWNlT2JzZXJ2ZXI8VE1vZGVsPigpKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUobW9kZWw6IFRNb2RlbCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VE1vZGVsPiB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKVxuICAgICAgLmNyZWF0ZShtb2RlbCwgZ2V0UGFyYW1zLCBodHRwT3B0aW9ucylcbiAgICByZXR1cm4gdGhpcy5tb2RpZnlDcmVhdGVDYWxsKHJlcXVlc3QpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koaWQ6IGFueSwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKVxuICAgICAgLmRlc3Ryb3koaWQsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5yZW1vdmVCeUlkZW50aWZpZXIoaWQpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBwYXJ0aWFsVXBkYXRlKG1vZGVsOiBUTW9kZWwsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRNb2RlbD4ge1xuICAgIHJldHVybiBuZXcgUmVzdEhhbmRsZXIodGhpcy5odHRwLCB0aGlzLnVybCwgdGhpcy5vYnNlcnZlciwgdGhpcy5pZGVudGlmaWVyKVxuICAgICAgLnBhcnRpYWxVcGRhdGUobW9kZWwsIGdldFBhcmFtcywgaHR0cE9wdGlvbnMpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCAocmVzdWx0OiBUTW9kZWwpID0+IHtcbiAgICAgICAgICB0aGlzLnN0b3JlLnVwZGF0ZShyZXN1bHQpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzYXZlKG1vZGVsOiBUTW9kZWwsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRNb2RlbD4ge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IFJlc3RIYW5kbGVyKHRoaXMuaHR0cCwgdGhpcy51cmwsIHRoaXMub2JzZXJ2ZXIsIHRoaXMuaWRlbnRpZmllcilcbiAgICAgIC5zYXZlKG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQobW9kZWxbdGhpcy5pZGVudGlmaWVyXSkpIHtcbiAgICAgIHJlcXVlc3QgPSB0aGlzLm1vZGlmeVVwZGF0ZUNhbGwocmVxdWVzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3QgPSB0aGlzLm1vZGlmeUNyZWF0ZUNhbGwocmVxdWVzdCk7XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0O1xuICB9XG5cbiAgcHVibGljIHNldChtb2RlbDogVE1vZGVsLCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUTW9kZWw+IHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXN0SGFuZGxlcih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyLCB0aGlzLmlkZW50aWZpZXIpXG4gICAgICAuc2V0KG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcbiAgICBpZiAoVXRpbC5pc0RlZmluZWQobW9kZWxbdGhpcy5pZGVudGlmaWVyXSkpIHtcbiAgICAgIHJlcXVlc3QgPSB0aGlzLm1vZGlmeVVwZGF0ZUNhbGwocmVxdWVzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3QgPSB0aGlzLm1vZGlmeUNyZWF0ZUNhbGwocmVxdWVzdCk7XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0O1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShtb2RlbDogVE1vZGVsLCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUTW9kZWw+IHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXN0SGFuZGxlcih0aGlzLmh0dHAsIHRoaXMudXJsLCB0aGlzLm9ic2VydmVyLCB0aGlzLmlkZW50aWZpZXIpXG4gICAgICAudXBkYXRlKG1vZGVsLCBnZXRQYXJhbXMsIGh0dHBPcHRpb25zKTtcbiAgICByZXF1ZXN0ID0gdGhpcy5tb2RpZnlVcGRhdGVDYWxsKHJlcXVlc3QpO1xuICAgIHJldHVybiByZXF1ZXN0O1xuICB9XG5cbiAgcHJvdGVjdGVkIG1vZGlmeUNyZWF0ZUNhbGwob2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUTW9kZWw+KTogT2JzZXJ2YWJsZTxUTW9kZWw+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZS5waXBlKFxuICAgICAgdGFwKCAocmVzdWx0OiBUTW9kZWwpID0+IHtcbiAgICAgICAgdGhpcy5zdG9yZS5wdXNoKHJlc3VsdCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbW9kaWZ5VXBkYXRlQ2FsbChvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFRNb2RlbD4pOiBPYnNlcnZhYmxlPFRNb2RlbD4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlLnBpcGUoXG4gICAgICB0YXAoIChyZXN1bHQ6IFRNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLnN0b3JlLnVwZGF0ZShyZXN1bHQpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbn1cbiJdfQ==