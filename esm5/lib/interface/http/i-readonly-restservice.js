/**
 * @fileoverview added by tsickle
 * Generated from: lib/interface/http/i-readonly-restservice.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Basis Interface um einen Restservice mit Lesezugriff zu implementieren.
 * @record
 * @template T
 */
export function IReadonlyRestService() { }
if (false) {
    /**
     * Der Key Parameter um zu testen ob ein Object neu angelegt, oder geladen wurde. Z.B.: ID
     * @type {?}
     */
    IReadonlyRestService.prototype.identifier;
    /**
     * Holt alle Entitäten ab
     * @param {?=} searchParams
     * @param {?=} httpOptions
     * @return {?}
     */
    IReadonlyRestService.prototype.all = function (searchParams, httpOptions) { };
    /**
     * Holt eine Entität anhand einer ID ab
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    IReadonlyRestService.prototype.show = function (id, getParams, httpOptions) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaS1yZWFkb25seS1yZXN0c2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2ludGVyZmFjZS9odHRwL2ktcmVhZG9ubHktcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLDBDQU9DOzs7Ozs7SUFMQywwQ0FBbUI7Ozs7Ozs7SUFFbkIsOEVBQWtFOzs7Ozs7OztJQUVsRSxnRkFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqIEJhc2lzIEludGVyZmFjZSB1bSBlaW5lbiBSZXN0c2VydmljZSBtaXQgTGVzZXp1Z3JpZmYgenUgaW1wbGVtZW50aWVyZW4uICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlYWRvbmx5UmVzdFNlcnZpY2U8VD4ge1xyXG4gIC8qKiBEZXIgS2V5IFBhcmFtZXRlciB1bSB6dSB0ZXN0ZW4gb2IgZWluIE9iamVjdCBuZXUgYW5nZWxlZ3QsIG9kZXIgZ2VsYWRlbiB3dXJkZS4gWi5CLjogSUQgKi9cclxuICBpZGVudGlmaWVyOiBzdHJpbmc7XHJcbiAgLyoqIEhvbHQgYWxsZSBFbnRpdMOkdGVuIGFiICovXHJcbiAgYWxsKHNlYXJjaFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFRbXT47XHJcbiAgLyoqIEhvbHQgZWluZSBFbnRpdMOkdCBhbmhhbmQgZWluZXIgSUQgYWIgKi9cclxuICBzaG93KGlkOiBhbnksIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+O1xyXG59XHJcbiJdfQ==