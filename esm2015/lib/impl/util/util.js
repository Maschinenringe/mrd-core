/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/util.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'underscore';
export class Util {
    /**
     * @param {?} obj
     * @return {?}
     */
    static isDefined(obj) {
        return obj !== null && obj !== undefined;
    }
    /**
     * @param {?} url
     * @param {?} queryParams
     * @return {?}
     */
    static armUrlWithSearchParams(url, queryParams) {
        if (!queryParams || _.isEmpty(queryParams)) {
            return url;
        }
        _.each(queryParams, (/**
         * @param {?} value
         * @param {?} key
         * @return {?}
         */
        (value, key) => {
            /** @type {?} */
            const querySelector = url.indexOf('?') === -1 ? '?' : '&';
            url = `${url}${querySelector}${key}=${value}`;
        }));
        return url;
    }
    /**
     * @param {?} url
     * @param {?} id
     * @return {?}
     */
    static createEntityUrl(url, id) {
        return `${url}/${id}`;
    }
    /**
     * @return {?}
     */
    static getBrowser() {
        /** @type {?} */
        const ua = navigator.userAgent;
        /** @type {?} */
        let tem;
        /** @type {?} */
        let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
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
    }
    /**
     * @return {?}
     */
    static getCurrentUnixTimestamp() {
        return Math.round((new Date()).getTime() / 1000);
    }
    /**
     * @return {?}
     */
    static guid() {
        /** @type {?} */
        const s4 = (/**
         * @return {?}
         */
        () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        });
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    static transformUmlaute(value) {
        return value
            .replace('Ä', 'Ae')
            .replace('ä', 'ae')
            .replace('Ö', 'Oe')
            .replace('ö', 'oe')
            .replace('Ü', 'Ue')
            .replace('ü', 'ue');
    }
    /**
     * @template TListType
     * @param {?} list
     * @param {?} attribute
     * @return {?}
     */
    static sortAlpabetically(list, attribute) {
        /** @type {?} */
        const resultList = _.sortBy(list, (/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.transformUmlaute(item[attribute]).toUpperCase()));
        return resultList;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2ltcGwvdXRpbC91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsTUFBTSxPQUFPLElBQUk7Ozs7O0lBRVIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFRO1FBQzlCLE9BQU8sR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVNLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUFXLEVBQUUsV0FBbUI7UUFDbkUsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzFDLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Ozs7O1FBQUUsQ0FBQyxLQUFVLEVBQUUsR0FBVyxFQUFFLEVBQUU7O2tCQUN4QyxhQUFhLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ3pELEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ2hELENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7SUFFTSxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQVcsRUFBRSxFQUFPO1FBQ2hELE9BQU8sR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVNLE1BQU0sQ0FBQyxVQUFVOztjQUNoQixFQUFFLEdBQUcsU0FBUyxDQUFDLFNBQVM7O1lBQzFCLEdBQUc7O1lBQ0gsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMs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QyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBQztRQUM1RyxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFV0aWwge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzRGVmaW5lZChvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiBvYmogIT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXJtVXJsV2l0aFNlYXJjaFBhcmFtcyh1cmw6IHN0cmluZywgcXVlcnlQYXJhbXM6IG9iamVjdCk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXF1ZXJ5UGFyYW1zIHx8IF8uaXNFbXB0eShxdWVyeVBhcmFtcykpIHtcclxuICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuICAgIF8uZWFjaChxdWVyeVBhcmFtcywgKHZhbHVlOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGNvbnN0IHF1ZXJ5U2VsZWN0b3IgPSB1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJztcclxuICAgICAgdXJsID0gYCR7dXJsfSR7cXVlcnlTZWxlY3Rvcn0ke2tleX09JHt2YWx1ZX1gO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdXJsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVFbnRpdHlVcmwodXJsOiBzdHJpbmcsIGlkOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGAke3VybH0vJHtpZH1gO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRCcm93c2VyKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICBsZXQgdGVtO1xyXG4gICAgbGV0IE0gPSB1YS5tYXRjaCgvKG9wZXJhfGNocm9tZXxzYWZhcml8ZmlyZWZveHxtc2llfHRyaWRlbnQoPz1cXC8pKVxcLz9cXHMqKFxcZCspL2kpIHx8IFtdO1xyXG4gICAgaWYgKC90cmlkZW50L2kudGVzdChNWzFdKSkge1xyXG4gICAgICB0ZW0gPSAvXFxicnZbIDpdKyhcXGQrKS9nLmV4ZWModWEpIHx8IFtdO1xyXG4gICAgICByZXR1cm4gJ0lFICcgKyAodGVtWzFdIHx8ICcnKTtcclxuICAgIH1cclxuICAgIGlmIChNWzFdID09PSAnQ2hyb21lJykge1xyXG4gICAgICB0ZW0gPSB1YS5tYXRjaCgvXFxiKE9QUnxFZGdlKVxcLyhcXGQrKS8pO1xyXG4gICAgICBpZiAodGVtICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdGVtLnNsaWNlKDEpLmpvaW4oJyAnKS5yZXBsYWNlKCdPUFInLCAnT3BlcmEnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgTSA9IE1bMl0gPyBbTVsxXSwgTVsyXV0gOiBbbmF2aWdhdG9yLmFwcE5hbWUsIG5hdmlnYXRvci5hcHBWZXJzaW9uLCAnLT8nXTtcclxuICAgIHRlbSA9IHVhLm1hdGNoKC92ZXJzaW9uXFwvKFxcZCspL2kpO1xyXG4gICAgaWYgKHRlbSAhPSBudWxsKSB7XHJcbiAgICAgIE0uc3BsaWNlKDEsIDEsIHRlbVsxXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTS5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEN1cnJlbnRVbml4VGltZXN0YW1wKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGd1aWQoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHM0ID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcclxuICAgICAgICAudG9TdHJpbmcoMTYpXHJcbiAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyB0cmFuc2Zvcm1VbWxhdXRlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHZhbHVlXHJcbiAgICAgIC5yZXBsYWNlKCfDhCcsICdBZScpXHJcbiAgICAgIC5yZXBsYWNlKCfDpCcsICdhZScpXHJcbiAgICAgIC5yZXBsYWNlKCfDlicsICdPZScpXHJcbiAgICAgIC5yZXBsYWNlKCfDticsICdvZScpXHJcbiAgICAgIC5yZXBsYWNlKCfDnCcsICdVZScpXHJcbiAgICAgIC5yZXBsYWNlKCfDvCcsICd1ZScpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzb3J0QWxwYWJldGljYWxseTxUTGlzdFR5cGU+KGxpc3Q6IFRMaXN0VHlwZVtdLCBhdHRyaWJ1dGU6IHN0cmluZyk6IFRMaXN0VHlwZVtdIHtcclxuICAgIGNvbnN0IHJlc3VsdExpc3QgPSBfLnNvcnRCeShsaXN0LCAoaXRlbTogVExpc3RUeXBlKSA9PiB0aGlzLnRyYW5zZm9ybVVtbGF1dGUoaXRlbVthdHRyaWJ1dGVdKS50b1VwcGVyQ2FzZSgpKTtcclxuICAgIHJldHVybiByZXN1bHRMaXN0O1xyXG4gIH1cclxuXHJcbn1cclxuIl19