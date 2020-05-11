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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2ltcGwvdXRpbC91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsTUFBTSxPQUFPLElBQUk7Ozs7O0lBRVIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFRO1FBQzlCLE9BQU8sR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssU0FBUyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVNLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUFXLEVBQUUsV0FBbUI7UUFDbkUsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzFDLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Ozs7O1FBQUUsQ0FBQyxLQUFVLEVBQUUsR0FBVyxFQUFFLEVBQUU7O2tCQUN4QyxhQUFhLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ3pELEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ2hELENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7SUFFTSxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQVcsRUFBRSxFQUFPO1FBQ2hELE9BQU8sR0FBRyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVNLE1BQU0sQ0FBQyxVQUFVOztjQUNoQixFQUFFLEdBQUcsU0FBUyxDQUFDLFNBQVM7O1lBQzFCLEdBQUc7O1lBQ0gsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMs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QyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBQztRQUM1RyxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0NBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgVXRpbCB7XG5cbiAgcHVibGljIHN0YXRpYyBpc0RlZmluZWQob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhcm1VcmxXaXRoU2VhcmNoUGFyYW1zKHVybDogc3RyaW5nLCBxdWVyeVBhcmFtczogb2JqZWN0KTogc3RyaW5nIHtcbiAgICBpZiAoIXF1ZXJ5UGFyYW1zIHx8IF8uaXNFbXB0eShxdWVyeVBhcmFtcykpIHtcbiAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuICAgIF8uZWFjaChxdWVyeVBhcmFtcywgKHZhbHVlOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeVNlbGVjdG9yID0gdXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJic7XG4gICAgICB1cmwgPSBgJHt1cmx9JHtxdWVyeVNlbGVjdG9yfSR7a2V5fT0ke3ZhbHVlfWA7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlRW50aXR5VXJsKHVybDogc3RyaW5nLCBpZDogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dXJsfS8ke2lkfWA7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEJyb3dzZXIoKTogc3RyaW5nIHtcbiAgICBjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgbGV0IHRlbTtcbiAgICBsZXQgTSA9IHVhLm1hdGNoKC8ob3BlcmF8Y2hyb21lfHNhZmFyaXxmaXJlZm94fG1zaWV8dHJpZGVudCg/PVxcLykpXFwvP1xccyooXFxkKykvaSkgfHwgW107XG4gICAgaWYgKC90cmlkZW50L2kudGVzdChNWzFdKSkge1xuICAgICAgdGVtID0gL1xcYnJ2WyA6XSsoXFxkKykvZy5leGVjKHVhKSB8fCBbXTtcbiAgICAgIHJldHVybiAnSUUgJyArICh0ZW1bMV0gfHwgJycpO1xuICAgIH1cbiAgICBpZiAoTVsxXSA9PT0gJ0Nocm9tZScpIHtcbiAgICAgIHRlbSA9IHVhLm1hdGNoKC9cXGIoT1BSfEVkZ2UpXFwvKFxcZCspLyk7XG4gICAgICBpZiAodGVtICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRlbS5zbGljZSgxKS5qb2luKCcgJykucmVwbGFjZSgnT1BSJywgJ09wZXJhJyk7XG4gICAgICB9XG4gICAgfVxuICAgIE0gPSBNWzJdID8gW01bMV0sIE1bMl1dIDogW25hdmlnYXRvci5hcHBOYW1lLCBuYXZpZ2F0b3IuYXBwVmVyc2lvbiwgJy0/J107XG4gICAgdGVtID0gdWEubWF0Y2goL3ZlcnNpb25cXC8oXFxkKykvaSk7XG4gICAgaWYgKHRlbSAhPSBudWxsKSB7XG4gICAgICBNLnNwbGljZSgxLCAxLCB0ZW1bMV0pO1xuICAgIH1cbiAgICByZXR1cm4gTS5qb2luKCcgJyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEN1cnJlbnRVbml4VGltZXN0YW1wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBndWlkKCk6IHN0cmluZyB7XG4gICAgY29uc3QgczQgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAuc3Vic3RyaW5nKDEpO1xuICAgIH07XG4gICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArIHM0KCkgKyBzNCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgdHJhbnNmb3JtVW1sYXV0ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgICAgIC5yZXBsYWNlKCfDhCcsICdBZScpXG4gICAgICAucmVwbGFjZSgnw6QnLCAnYWUnKVxuICAgICAgLnJlcGxhY2UoJ8OWJywgJ09lJylcbiAgICAgIC5yZXBsYWNlKCfDticsICdvZScpXG4gICAgICAucmVwbGFjZSgnw5wnLCAnVWUnKVxuICAgICAgLnJlcGxhY2UoJ8O8JywgJ3VlJyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNvcnRBbHBhYmV0aWNhbGx5PFRMaXN0VHlwZT4obGlzdDogVExpc3RUeXBlW10sIGF0dHJpYnV0ZTogc3RyaW5nKTogVExpc3RUeXBlW10ge1xuICAgIGNvbnN0IHJlc3VsdExpc3QgPSBfLnNvcnRCeShsaXN0LCAoaXRlbTogVExpc3RUeXBlKSA9PiB0aGlzLnRyYW5zZm9ybVVtbGF1dGUoaXRlbVthdHRyaWJ1dGVdKS50b1VwcGVyQ2FzZSgpKTtcbiAgICByZXR1cm4gcmVzdWx0TGlzdDtcbiAgfVxuXG59XG4iXX0=