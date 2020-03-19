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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaS13cml0ZWFibGUtcmVzdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbXJkLWNvcmUvIiwic291cmNlcyI6WyJsaWIvaW50ZXJmYWNlL2h0dHAvaS13cml0ZWFibGUtcmVzdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSwyQ0FZQzs7Ozs7Ozs7O0lBVkMsc0ZBQTBFOzs7Ozs7OztJQUUxRSxzRkFBMEU7Ozs7Ozs7O0lBRTFFLDZGQUFpRjs7Ozs7Ozs7SUFFakYsb0ZBQXdFOzs7Ozs7OztJQUV4RSxvRkFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG4vKiogQmFzaXMgSW50ZXJmYWNlIHVtIGVpbmVuIHZvbGx3ZXJ0aWdlbiBSZXN0U2VydmljZSB6dSBpbXBsZW1lbnRpZXJlbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJV3JpdGVhYmxlUmVzdFNlcnZpY2U8VD4ge1xuICAvKiogRXJ6ZXVndCBlaW4gbmV1ZXMgT2JqZWN0ICovXG4gIGNyZWF0ZShtb2RlbDogVCwgZ2V0UGFyYW1zPzogb2JqZWN0LCBodHRwT3B0aW9ucz86IG9iamVjdCk6IE9ic2VydmFibGU8VD47XG4gIC8qKiBVcGRhdGVkIGVpbiBPYmplY3QgKi9cbiAgdXBkYXRlKG1vZGVsOiBULCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUPjtcbiAgLyoqIEbDvGhydCBlaW4gVGVpbHVwZGF0ZSBkdXJjaCAqL1xuICBwYXJ0aWFsVXBkYXRlKG1vZGVsOiBULCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTxUPjtcbiAgLyoqIEVudHNjaGVpZGVkIGFuaGFuZCBkZXMgRmVsZGVzIFwiaWRlbnRpZmllclwiIHdlbGNoZSBPcGVyYXRpb24gZ2V0w6R0aWd0IHdlcmRlbiBtdXNzICovXG4gIHNhdmUobW9kZWw6IFQsIGdldFBhcmFtcz86IG9iamVjdCwgaHR0cE9wdGlvbnM/OiBvYmplY3QpOiBPYnNlcnZhYmxlPFQ+O1xuICAvKiogTMO2c2NodCBlaW5lIEVudGl0w6R0IHZvbSBTZXJ2ZXIgKi9cbiAgZGVzdHJveShpZDogYW55LCBnZXRQYXJhbXM/OiBvYmplY3QsIGh0dHBPcHRpb25zPzogb2JqZWN0KTogT2JzZXJ2YWJsZTx2b2lkPjtcblxufVxuIl19