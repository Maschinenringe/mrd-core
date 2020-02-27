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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2ltcGwvdXRpbC91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEM7SUFBQTtJQXVFQSxDQUFDOzs7OztJQXJFZSxjQUFTOzs7O0lBQXZCLFVBQXdCLEdBQVE7UUFDOUIsT0FBTyxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxTQUFTLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRWEsMkJBQXNCOzs7OztJQUFwQyxVQUFxQyxHQUFXLEVBQUUsV0FBbUI7UUFDbkUsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzFDLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Ozs7O1FBQUUsVUFBQyxLQUFVLEVBQUUsR0FBVzs7Z0JBQ3BDLGFBQWEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDekQsR0FBRyxHQUFHLEtBQUcsR0FBRyxHQUFHLGFBQWEsR0FBRyxHQUFHLFNBQUksS0FBTyxDQUFDO1FBQ2hELENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7SUFFYSxvQkFBZTs7Ozs7SUFBN0IsVUFBOEIsR0FBVyxFQUFFLEVBQU87UUFDaEQsT0FBVSxHQUFHLFNBQUksRUFBSSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFYSxlQUFVOzs7SUFBeEI7O1lBQ1EsRUFBRSxHQUFHLFNBQVMsQ0FBQyxTQUFTOztZQUMxQixHQUFHOztZQUNILENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLDhEQUE4RCxDQUFDLElBQUksRUFBRTtR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Q0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQXBELENBQW9ELEVBQUM7UUFDNUcsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVILFdBQUM7QUFBRCxDQUFDLEFBdkVELElBdUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVdGlsIHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBpc0RlZmluZWQob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqICE9PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFybVVybFdpdGhTZWFyY2hQYXJhbXModXJsOiBzdHJpbmcsIHF1ZXJ5UGFyYW1zOiBvYmplY3QpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFxdWVyeVBhcmFtcyB8fCBfLmlzRW1wdHkocXVlcnlQYXJhbXMpKSB7XHJcbiAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbiAgICBfLmVhY2gocXVlcnlQYXJhbXMsICh2YWx1ZTogYW55LCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCBxdWVyeVNlbGVjdG9yID0gdXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJic7XHJcbiAgICAgIHVybCA9IGAke3VybH0ke3F1ZXJ5U2VsZWN0b3J9JHtrZXl9PSR7dmFsdWV9YDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlRW50aXR5VXJsKHVybDogc3RyaW5nLCBpZDogYW55KTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHt1cmx9LyR7aWR9YDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0QnJvd3NlcigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgbGV0IHRlbTtcclxuICAgIGxldCBNID0gdWEubWF0Y2goLyhvcGVyYXxjaHJvbWV8c2FmYXJpfGZpcmVmb3h8bXNpZXx0cmlkZW50KD89XFwvKSlcXC8/XFxzKihcXGQrKS9pKSB8fCBbXTtcclxuICAgIGlmICgvdHJpZGVudC9pLnRlc3QoTVsxXSkpIHtcclxuICAgICAgdGVtID0gL1xcYnJ2WyA6XSsoXFxkKykvZy5leGVjKHVhKSB8fCBbXTtcclxuICAgICAgcmV0dXJuICdJRSAnICsgKHRlbVsxXSB8fCAnJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoTVsxXSA9PT0gJ0Nocm9tZScpIHtcclxuICAgICAgdGVtID0gdWEubWF0Y2goL1xcYihPUFJ8RWRnZSlcXC8oXFxkKykvKTtcclxuICAgICAgaWYgKHRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRlbS5zbGljZSgxKS5qb2luKCcgJykucmVwbGFjZSgnT1BSJywgJ09wZXJhJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIE0gPSBNWzJdID8gW01bMV0sIE1bMl1dIDogW25hdmlnYXRvci5hcHBOYW1lLCBuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgJy0/J107XHJcbiAgICB0ZW0gPSB1YS5tYXRjaCgvdmVyc2lvblxcLyhcXGQrKS9pKTtcclxuICAgIGlmICh0ZW0gIT0gbnVsbCkge1xyXG4gICAgICBNLnNwbGljZSgxLCAxLCB0ZW1bMV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE0uam9pbignICcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRDdXJyZW50VW5peFRpbWVzdGFtcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBndWlkKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzNCA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxyXG4gICAgICAgIC5zdWJzdHJpbmcoMSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgdHJhbnNmb3JtVW1sYXV0ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICAucmVwbGFjZSgnw4QnLCAnQWUnKVxyXG4gICAgICAucmVwbGFjZSgnw6QnLCAnYWUnKVxyXG4gICAgICAucmVwbGFjZSgnw5YnLCAnT2UnKVxyXG4gICAgICAucmVwbGFjZSgnw7YnLCAnb2UnKVxyXG4gICAgICAucmVwbGFjZSgnw5wnLCAnVWUnKVxyXG4gICAgICAucmVwbGFjZSgnw7wnLCAndWUnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc29ydEFscGFiZXRpY2FsbHk8VExpc3RUeXBlPihsaXN0OiBUTGlzdFR5cGVbXSwgYXR0cmlidXRlOiBzdHJpbmcpOiBUTGlzdFR5cGVbXSB7XHJcbiAgICBjb25zdCByZXN1bHRMaXN0ID0gXy5zb3J0QnkobGlzdCwgKGl0ZW06IFRMaXN0VHlwZSkgPT4gdGhpcy50cmFuc2Zvcm1VbWxhdXRlKGl0ZW1bYXR0cmlidXRlXSkudG9VcHBlckNhc2UoKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0TGlzdDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==