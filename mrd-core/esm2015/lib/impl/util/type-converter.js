/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/type-converter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'underscore';
import { REGEX } from '../../enum/regex';
/**
 * @abstract
 */
export class TypeConverter {
    /**
     * Versucht den Wert in eine Zahl zu konvertieren.
     * @param {?} value
     * @return {?}
     */
    static toNumber(value) {
        // Falls null oder undefined übergeben wurde, brechen wir ab
        if (!value) {
            return value;
        }
        // Falls der Wert bereits eine Zahl ist, sind wir fertig
        if (_.isNumber(value)) {
            return value;
        }
        // Falls der Wert ein String ist, testen wir, ob er aussieht wie eine Zahl und versuchen ihn anschließend zu konvertieren
        if (_.isString(value) && REGEX.NUMBER.test((/** @type {?} */ (value)))) {
            return TypeConverter.convertInputStringToNumber((/** @type {?} */ (value)));
        }
        // Wir haben keine Regel für die Konvertierung gefunden
        return value;
    }
    /**
     * Nimmt eine Zahl und gibt eine deutsche Representation dieses Wertes zurück
     * @param {?} value
     * @param {?=} stellen
     * @return {?}
     */
    static asGermanFloat(value, stellen) {
        if (value === null || value === undefined) {
            return undefined;
        }
        if (!_.isUndefined(stellen) && _.isNumber(value)) {
            value = ((/** @type {?} */ (value))).toFixed(stellen);
        }
        return value.toString().replace('.', ',');
    }
    /** Erzeugt ein moment object und setzt dieses auf UTC, falls dies noch nicht geschehen ist. */
    /*public static utcDate(...args: any[]): moment.Moment {
        const isDefined = _.every(args, (arg: any) => Util.isDefined(arg));
        if (!isDefined) {
          return undefined;
        }
        const mObject = moment(...args);
        if (mObject.isUTC()) {
          return mObject;
        } else {
          return mObject.utc(true);
        }
      }*/
    /**
     * Konvertiert ein moment Object in die lokale Zeitzone (Entfernt UTC)
     * @param {?} n
     * @return {?}
     */
    /*public static toLocalDate(mObject: moment.Moment): moment.Moment {
        if (!Util.isDefined(mObject)) {
          return undefined;
        }
        const param = moment(mObject);
        if (param.isUTC()) {
          return param.local(true);
        } else {
          return param;
        }
      }*/
    static booleanNumberToSting(n) {
        return n === 1 ? 'Ja' : 'Nein';
    }
    /** Konvertiert ein Moment Object zu einem Date Object */
    /*public static toJSDate(mObject: moment.Moment): Date {
        const mDate = TypeConverter.utcDate(mObject);
        if (!mDate) {
          return undefined;
        }
        return mDate.toDate();
      }*/
    /**
     * Kovertiert einen String in einen Regex um eine Volltextsuche zu ermöglichen
     * @param {?} text
     * @return {?}
     */
    static asRegex(text) {
        /** @type {?} */
        let builderString = '';
        if (_.isEmpty(text)) {
            return new RegExp(builderString);
        }
        _.each(text.split(''), (/**
         * @param {?} char
         * @return {?}
         */
        (char) => {
            builderString = builderString + `${char}`;
        }));
        return new RegExp(builderString.replace(REGEX.SPECIAL_CHARS_REGEX, '\\$&'), 'i');
    }
    /**
     * @param {?} bool
     * @return {?}
     */
    static booleanToNumber(bool) {
        return bool === true ? 1 : 0;
    }
    /**
     * @param {?} digit
     * @return {?}
     */
    static numberToBoolean(digit) {
        return digit === 1;
    }
    /**
     * Kovertiert einen String, der dem Regex einer Zahl entspricht, in eine Zahl
     * @private
     * @param {?} value
     * @return {?}
     */
    static convertInputStringToNumber(value) {
        if (value.includes('.')) {
            return Number.parseFloat(value);
        }
        if (value.includes(',')) {
            return Number.parseFloat(value.replace(',', '.'));
        }
        return Number.parseInt(value);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvdHlwZS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUVoQyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFHdkMsTUFBTSxPQUFnQixhQUFhOzs7Ozs7SUFHMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFzQjtRQUMzQyw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx5SEFBeUg7UUFDekgsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFBLEtBQUssRUFBVSxDQUFDLEVBQUU7WUFDM0QsT0FBTyxhQUFhLENBQUMsMEJBQTBCLENBQUMsbUJBQUEsS0FBSyxFQUFVLENBQUMsQ0FBQztTQUNsRTtRQUNELHVEQUF1RDtRQUN2RCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7Ozs7SUFHTSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQXNCLEVBQUUsT0FBZ0I7UUFDbEUsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hELEtBQUssR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0Qk0sTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQVM7UUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxDQUFDOzs7Ozs7Ozs7Ozs7OztJQVlNLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBWTs7WUFDNUIsYUFBYSxHQUFHLEVBQUU7UUFDdEIsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbEM7UUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDOzs7O1FBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5QixhQUFhLEdBQUcsYUFBYSxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDNUMsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFhO1FBQ3pDLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQWE7UUFDekMsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7Ozs7SUFHTyxNQUFNLENBQUMsMEJBQTBCLENBQUMsS0FBYTtRQUNyRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQge1V0aWx9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge1JFR0VYfSBmcm9tICcuLi8uLi9lbnVtL3JlZ2V4JztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHlwZUNvbnZlcnRlciB7XG5cbiAgLyoqIFZlcnN1Y2h0IGRlbiBXZXJ0IGluIGVpbmUgWmFobCB6dSBrb252ZXJ0aWVyZW4uICovXG4gIHB1YmxpYyBzdGF0aWMgdG9OdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB8IHN0cmluZyB7XG4gICAgLy8gRmFsbHMgbnVsbCBvZGVyIHVuZGVmaW5lZCDDvGJlcmdlYmVuIHd1cmRlLCBicmVjaGVuIHdpciBhYlxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgLy8gRmFsbHMgZGVyIFdlcnQgYmVyZWl0cyBlaW5lIFphaGwgaXN0LCBzaW5kIHdpciBmZXJ0aWdcbiAgICBpZiAoXy5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgLy8gRmFsbHMgZGVyIFdlcnQgZWluIFN0cmluZyBpc3QsIHRlc3RlbiB3aXIsIG9iIGVyIGF1c3NpZWh0IHdpZSBlaW5lIFphaGwgdW5kIHZlcnN1Y2hlbiBpaG4gYW5zY2hsaWXDn2VuZCB6dSBrb252ZXJ0aWVyZW5cbiAgICBpZiAoXy5pc1N0cmluZyh2YWx1ZSkgJiYgUkVHRVguTlVNQkVSLnRlc3QodmFsdWUgYXMgc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIFR5cGVDb252ZXJ0ZXIuY29udmVydElucHV0U3RyaW5nVG9OdW1iZXIodmFsdWUgYXMgc3RyaW5nKTtcbiAgICB9XG4gICAgLy8gV2lyIGhhYmVuIGtlaW5lIFJlZ2VsIGbDvHIgZGllIEtvbnZlcnRpZXJ1bmcgZ2VmdW5kZW5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKiogTmltbXQgZWluZSBaYWhsIHVuZCBnaWJ0IGVpbmUgZGV1dHNjaGUgUmVwcmVzZW50YXRpb24gZGllc2VzIFdlcnRlcyB6dXLDvGNrICovXG4gIHB1YmxpYyBzdGF0aWMgYXNHZXJtYW5GbG9hdCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBzdGVsbGVuPzogbnVtYmVyKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoc3RlbGxlbikgJiYgXy5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gKHZhbHVlIGFzIG51bWJlcikudG9GaXhlZChzdGVsbGVuKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJyk7XG4gIH1cblxuICAvKiogRXJ6ZXVndCBlaW4gbW9tZW50IG9iamVjdCB1bmQgc2V0enQgZGllc2VzIGF1ZiBVVEMsIGZhbGxzIGRpZXMgbm9jaCBuaWNodCBnZXNjaGVoZW4gaXN0LiAqL1xuICAvKnB1YmxpYyBzdGF0aWMgdXRjRGF0ZSguLi5hcmdzOiBhbnlbXSk6IG1vbWVudC5Nb21lbnQge1xuICAgIGNvbnN0IGlzRGVmaW5lZCA9IF8uZXZlcnkoYXJncywgKGFyZzogYW55KSA9PiBVdGlsLmlzRGVmaW5lZChhcmcpKTtcbiAgICBpZiAoIWlzRGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgbU9iamVjdCA9IG1vbWVudCguLi5hcmdzKTtcbiAgICBpZiAobU9iamVjdC5pc1VUQygpKSB7XG4gICAgICByZXR1cm4gbU9iamVjdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1PYmplY3QudXRjKHRydWUpO1xuICAgIH1cbiAgfSovXG4gIC8qKiBLb252ZXJ0aWVydCBlaW4gbW9tZW50IE9iamVjdCBpbiBkaWUgbG9rYWxlIFplaXR6b25lIChFbnRmZXJudCBVVEMpICovXG4gIC8qcHVibGljIHN0YXRpYyB0b0xvY2FsRGF0ZShtT2JqZWN0OiBtb21lbnQuTW9tZW50KTogbW9tZW50Lk1vbWVudCB7XG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZChtT2JqZWN0KSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgcGFyYW0gPSBtb21lbnQobU9iamVjdCk7XG4gICAgaWYgKHBhcmFtLmlzVVRDKCkpIHtcbiAgICAgIHJldHVybiBwYXJhbS5sb2NhbCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcmFtO1xuICAgIH1cbiAgfSovXG5cbiAgcHVibGljIHN0YXRpYyBib29sZWFuTnVtYmVyVG9TdGluZyhuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBuID09PSAxID8gJ0phJyA6ICdOZWluJztcbiAgfVxuXG4gIC8qKiBLb252ZXJ0aWVydCBlaW4gTW9tZW50IE9iamVjdCB6dSBlaW5lbSBEYXRlIE9iamVjdCAqL1xuICAvKnB1YmxpYyBzdGF0aWMgdG9KU0RhdGUobU9iamVjdDogbW9tZW50Lk1vbWVudCk6IERhdGUge1xuICAgIGNvbnN0IG1EYXRlID0gVHlwZUNvbnZlcnRlci51dGNEYXRlKG1PYmplY3QpO1xuICAgIGlmICghbURhdGUpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBtRGF0ZS50b0RhdGUoKTtcbiAgfSovXG5cbiAgLyoqIEtvdmVydGllcnQgZWluZW4gU3RyaW5nIGluIGVpbmVuIFJlZ2V4IHVtIGVpbmUgVm9sbHRleHRzdWNoZSB6dSBlcm3DtmdsaWNoZW4gKi9cbiAgcHVibGljIHN0YXRpYyBhc1JlZ2V4KHRleHQ6IHN0cmluZyk6IFJlZ0V4cCB7XG4gICAgbGV0IGJ1aWxkZXJTdHJpbmcgPSAnJztcbiAgICBpZiAoXy5pc0VtcHR5KHRleHQpKSB7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChidWlsZGVyU3RyaW5nKTtcbiAgICB9XG4gICAgXy5lYWNoKHRleHQuc3BsaXQoJycpLCAoY2hhcikgPT4ge1xuICAgICAgYnVpbGRlclN0cmluZyA9IGJ1aWxkZXJTdHJpbmcgKyBgJHtjaGFyfWA7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYnVpbGRlclN0cmluZy5yZXBsYWNlKFJFR0VYLlNQRUNJQUxfQ0hBUlNfUkVHRVgsICdcXFxcJCYnKSwgJ2knKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYm9vbGVhblRvTnVtYmVyKGJvb2w6IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIHJldHVybiBib29sID09PSB0cnVlID8gMSA6IDA7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIG51bWJlclRvQm9vbGVhbihkaWdpdDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGRpZ2l0ID09PSAxO1xuICB9XG5cbiAgLyoqIEtvdmVydGllcnQgZWluZW4gU3RyaW5nLCBkZXIgZGVtIFJlZ2V4IGVpbmVyIFphaGwgZW50c3ByaWNodCwgaW4gZWluZSBaYWhsICovXG4gIHByaXZhdGUgc3RhdGljIGNvbnZlcnRJbnB1dFN0cmluZ1RvTnVtYmVyKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnLicpKSB7XG4gICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoJywnKSkge1xuICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUludCh2YWx1ZSk7XG4gIH1cblxufVxuIl19