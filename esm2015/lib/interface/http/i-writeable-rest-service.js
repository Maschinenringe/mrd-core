/**
 * @fileoverview added by tsickle
 * Generated from: lib/interface/http/i-writeable-rest-service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Basis Interface um einen vollwertigen RestService zu implementieren
 * @record
 * @template T
 */
export function IWriteableRestService() { }
if (false) {
    /**
     * Erzeugt ein neues Object
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    IWriteableRestService.prototype.create = function (model, getParams, httpOptions) { };
    /**
     * Updated ein Object
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    IWriteableRestService.prototype.update = function (model, getParams, httpOptions) { };
    /**
     * Führt ein Teilupdate durch
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    IWriteableRestService.prototype.partialUpdate = function (model, getParams, httpOptions) { };
    /**
     * Entscheided anhand des Feldes "identifier" welche Operation getätigt werden muss
     * @param {?} model
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    IWriteableRestService.prototype.save = function (model, getParams, httpOptions) { };
    /**
     * Löscht eine Entität vom Server
     * @param {?} id
     * @param {?=} getParams
     * @param {?=} httpOptions
     * @return {?}
     */
    IWriteableRestService.prototype.destroy = function (id, getParams, httpOptions) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaS13cml0ZWFibGUtcmVzdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW50ZXJmYWNlL2h0dHAvaS13cml0ZWFibGUtcmVzdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSwyQ0FZQzs7Ozs7Ozs7O0lBVkMsc0ZBQTBFOzs7Ozs7OztJQUUxRSxzRkFBMEU7Ozs7Ozs7O0lBRTFFLDZGQUFpRjs7Ozs7Ozs7SUFFakYsb0ZBQXdFOzs7Ozs7OztJQUV4RSxvRkFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqIEJhc2lzIEludGVyZmFjZSB1bSBlaW5lbiB2b2xsd2VydGlnZW4gUmVzdFNlcnZpY2UgenUgaW1wbGVtZW50aWVyZW4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJV3JpdGVhYmxlUmVzdFNlcnZpY2U8VD4ge1xyXG4gIC8qKiBFcnpldWd0IGVpbiBuZXVlcyBPYmplY3QgKi9cclxuICBjcmVhdGUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+O1xyXG4gIC8qKiBVcGRhdGVkIGVpbiBPYmplY3QgKi9cclxuICB1cGRhdGUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+O1xyXG4gIC8qKiBGw7xocnQgZWluIFRlaWx1cGRhdGUgZHVyY2ggKi9cclxuICBwYXJ0aWFsVXBkYXRlKG1vZGVsOiBULCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUPjtcclxuICAvKiogRW50c2NoZWlkZWQgYW5oYW5kIGRlcyBGZWxkZXMgXCJpZGVudGlmaWVyXCIgd2VsY2hlIE9wZXJhdGlvbiBnZXTDpHRpZ3Qgd2VyZGVuIG11c3MgKi9cclxuICBzYXZlKG1vZGVsOiBULCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUPjtcclxuICAvKiogTMO2c2NodCBlaW5lIEVudGl0w6R0IHZvbSBTZXJ2ZXIgKi9cclxuICBkZXN0cm95KGlkOiBhbnksIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPHZvaWQ+O1xyXG5cclxufVxyXG4iXX0=