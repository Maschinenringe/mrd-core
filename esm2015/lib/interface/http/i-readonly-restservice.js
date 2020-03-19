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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaS1yZWFkb25seS1yZXN0c2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2ludGVyZmFjZS9odHRwL2ktcmVhZG9ubHktcmVzdHNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLDBDQU9DOzs7Ozs7SUFMQywwQ0FBbUI7Ozs7Ozs7SUFFbkIsOEVBQWtFOzs7Ozs7OztJQUVsRSxnRkFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG4vKiogQmFzaXMgSW50ZXJmYWNlIHVtIGVpbmVuIFJlc3RzZXJ2aWNlIG1pdCBMZXNlenVncmlmZiB6dSBpbXBsZW1lbnRpZXJlbi4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVJlYWRvbmx5UmVzdFNlcnZpY2U8VD4ge1xuICAvKiogRGVyIEtleSBQYXJhbWV0ZXIgdW0genUgdGVzdGVuIG9iIGVpbiBPYmplY3QgbmV1IGFuZ2VsZWd0LCBvZGVyIGdlbGFkZW4gd3VyZGUuIFouQi46IElEICovXG4gIGlkZW50aWZpZXI6IHN0cmluZztcbiAgLyoqIEhvbHQgYWxsZSBFbnRpdMOkdGVuIGFiICovXG4gIGFsbChzZWFyY2hQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUW10+O1xuICAvKiogSG9sdCBlaW5lIEVudGl0w6R0IGFuaGFuZCBlaW5lciBJRCBhYiAqL1xuICBzaG93KGlkOiBhbnksIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+O1xufVxuIl19