/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'underscore';
var Util = /** @class */ (function () {
    function Util() {
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    Util.isDefined = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj !== null && obj !== undefined;
    };
    /**
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    Util.armUrlWithSearchParams = /**
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    function (url, queryParams) {
        if (!queryParams || _.isEmpty(queryParams)) {
            return url;
        }
        _.each(queryParams, (/**
         * @param {?} value
         * @param {?} key
         * @return {?}
         */
        function (value, key) {
            /** @type {?} */
            var querySelector = url.indexOf('?') === -1 ? '?' : '&';
            url = "" + url + querySelector + key + "=" + value;
        }));
        return url;
    };
    /**
     * @param {?} url
     * @param {?} id
     * @return {?}
     */
    Util.createEntityUrl = /**
     * @param {?} url
     * @param {?} id
     * @return {?}
     */
    function (url, id) {
        return url + "/" + id;
    };
    /**
     * @return {?}
     */
    Util.getBrowser = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ua = navigator.userAgent;
        /** @type {?} */
        var tem;
        /** @type {?} */
        var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null) {
                return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        tem = ua.match(/version\/(\d+)/i);
        if (tem != null) {
            M.splice(1, 1, tem[1]);
        }
        return M.join(' ');
    };
    /**
     * @return {?}
     */
    Util.getCurrentUnixTimestamp = /**
     * @return {?}
     */
    function () {
        return Math.round((new Date()).getTime() / 1000);
    };
    /**
     * @return {?}
     */
    Util.guid = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var s4 = (/**
         * @return {?}
         */
        function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        });
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    Util.transformUmlaute = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value
            .replace('Ä', 'Ae')
            .replace('ä', 'ae')
            .replace('Ö', 'Oe')
            .replace('ö', 'oe')
            .replace('Ü', 'Ue')
            .replace('ü', 'ue');
    };
    /**
     * @template TListType
     * @param {?} list
     * @param {?} attribute
     * @return {?}
     */
    Util.sortAlpabetically = /**
     * @template TListType
     * @param {?} list
     * @param {?} attribute
     * @return {?}
     */
    function (list, attribute) {
        var _this = this;
        /** @type {?} */
        var resultList = _.sortBy(list, (/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.transformUmlaute(item[attribute]).toUpperCase(); }));
        return resultList;
    };
    return Util;
}());
export { Util };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2ltcGwvdXRpbC91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEM7SUFBQTtJQXVFQSxDQUFDOzs7OztJQXJFZSxjQUFTOzs7O0lBQXZCLFVBQXdCLEdBQVE7UUFDOUIsT0FBTyxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRWEsMkJBQXNCOzs7OztJQUFwQyxVQUFxQyxHQUFXLEVBQUUsV0FBbUI7UUFDbkUsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzFDLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Ozs7O1FBQUUsVUFBQyxLQUFVLEVBQUUsR0FBVzs7Z0JBQ3BDLGFBQWEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDekQsR0FBRyxHQUFHLEtBQUcsR0FBRyxHQUFHLGFBQWEsR0FBRyxHQUFHLFNBQUksS0FBTyxDQUFDO1FBQ2hELENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7SUFFYSxvQkFBZTs7Ozs7SUFBN0IsVUFBOEIsR0FBVyxFQUFFLEVBQU87UUFDaEQsT0FBVSxHQUFHLFNBQUksRUFBSSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFYSxlQUFVOzs7SUFBeEI7O1lBQ1EsRUFBRSxHQUFHLFNBQVMsQ0FBQyxTQUFTOztZQUMxQixHQUFHOztZQUNILENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLDhEQUE4RCxDQUFDLElBQUksRUFBRTtR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Q0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQXBELENBQW9ELEVBQUM7UUFDNUcsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVILFdBQUM7QUFBRCxDQUFDLEFBdkVELElBdUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuZXhwb3J0IGNsYXNzIFV0aWwge1xuXG4gIHB1YmxpYyBzdGF0aWMgaXNEZWZpbmVkKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiBvYmogIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXJtVXJsV2l0aFNlYXJjaFBhcmFtcyh1cmw6IHN0cmluZywgcXVlcnlQYXJhbXM6IG9iamVjdCk6IHN0cmluZyB7XG4gICAgaWYgKCFxdWVyeVBhcmFtcyB8fCBfLmlzRW1wdHkocXVlcnlQYXJhbXMpKSB7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgICBfLmVhY2gocXVlcnlQYXJhbXMsICh2YWx1ZTogYW55LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgcXVlcnlTZWxlY3RvciA9IHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnO1xuICAgICAgdXJsID0gYCR7dXJsfSR7cXVlcnlTZWxlY3Rvcn0ke2tleX09JHt2YWx1ZX1gO1xuICAgIH0pO1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUVudGl0eVVybCh1cmw6IHN0cmluZywgaWQ6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3VybH0vJHtpZH1gO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRCcm93c2VyKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIGxldCB0ZW07XG4gICAgbGV0IE0gPSB1YS5tYXRjaCgvKG9wZXJhfGNocm9tZXxzYWZhcml8ZmlyZWZveHxtc2llfHRyaWRlbnQoPz1cXC8pKVxcLz9cXHMqKFxcZCspL2kpIHx8IFtdO1xuICAgIGlmICgvdHJpZGVudC9pLnRlc3QoTVsxXSkpIHtcbiAgICAgIHRlbSA9IC9cXGJydlsgOl0rKFxcZCspL2cuZXhlYyh1YSkgfHwgW107XG4gICAgICByZXR1cm4gJ0lFICcgKyAodGVtWzFdIHx8ICcnKTtcbiAgICB9XG4gICAgaWYgKE1bMV0gPT09ICdDaHJvbWUnKSB7XG4gICAgICB0ZW0gPSB1YS5tYXRjaCgvXFxiKE9QUnxFZGdlKVxcLyhcXGQrKS8pO1xuICAgICAgaWYgKHRlbSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0ZW0uc2xpY2UoMSkuam9pbignICcpLnJlcGxhY2UoJ09QUicsICdPcGVyYScpO1xuICAgICAgfVxuICAgIH1cbiAgICBNID0gTVsyXSA/IFtNWzFdLCBNWzJdXSA6IFtuYXZpZ2F0b3IuYXBwTmFtZSwgbmF2aWdhdG9yLmFwcFZlcnNpb24sICctPyddO1xuICAgIHRlbSA9IHVhLm1hdGNoKC92ZXJzaW9uXFwvKFxcZCspL2kpO1xuICAgIGlmICh0ZW0gIT0gbnVsbCkge1xuICAgICAgTS5zcGxpY2UoMSwgMSwgdGVtWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIE0uam9pbignICcpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXRDdXJyZW50VW5peFRpbWVzdGFtcCgpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ3VpZCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHM0ID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgLnN1YnN0cmluZygxKTtcbiAgICB9O1xuICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHRyYW5zZm9ybVVtbGF1dGUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZhbHVlXG4gICAgICAucmVwbGFjZSgnw4QnLCAnQWUnKVxuICAgICAgLnJlcGxhY2UoJ8OkJywgJ2FlJylcbiAgICAgIC5yZXBsYWNlKCfDlicsICdPZScpXG4gICAgICAucmVwbGFjZSgnw7YnLCAnb2UnKVxuICAgICAgLnJlcGxhY2UoJ8OcJywgJ1VlJylcbiAgICAgIC5yZXBsYWNlKCfDvCcsICd1ZScpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBzb3J0QWxwYWJldGljYWxseTxUTGlzdFR5cGU+KGxpc3Q6IFRMaXN0VHlwZVtdLCBhdHRyaWJ1dGU6IHN0cmluZyk6IFRMaXN0VHlwZVtdIHtcbiAgICBjb25zdCByZXN1bHRMaXN0ID0gXy5zb3J0QnkobGlzdCwgKGl0ZW06IFRMaXN0VHlwZSkgPT4gdGhpcy50cmFuc2Zvcm1VbWxhdXRlKGl0ZW1bYXR0cmlidXRlXSkudG9VcHBlckNhc2UoKSk7XG4gICAgcmV0dXJuIHJlc3VsdExpc3Q7XG4gIH1cblxufVxuIl19