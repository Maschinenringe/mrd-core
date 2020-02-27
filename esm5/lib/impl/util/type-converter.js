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
var /**
 * @abstract
 */
TypeConverter = /** @class */ (function () {
    function TypeConverter() {
    }
    /** Versucht den Wert in eine Zahl zu konvertieren. */
    /**
     * Versucht den Wert in eine Zahl zu konvertieren.
     * @param {?} value
     * @return {?}
     */
    TypeConverter.toNumber = /**
     * Versucht den Wert in eine Zahl zu konvertieren.
     * @param {?} value
     * @return {?}
     */
    function (value) {
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
    };
    /** Nimmt eine Zahl und gibt eine deutsche Representation dieses Wertes zurück */
    /**
     * Nimmt eine Zahl und gibt eine deutsche Representation dieses Wertes zurück
     * @param {?} value
     * @param {?=} stellen
     * @return {?}
     */
    TypeConverter.asGermanFloat = /**
     * Nimmt eine Zahl und gibt eine deutsche Representation dieses Wertes zurück
     * @param {?} value
     * @param {?=} stellen
     * @return {?}
     */
    function (value, stellen) {
        if (value === null || value === undefined) {
            return undefined;
        }
        if (!_.isUndefined(stellen) && _.isNumber(value)) {
            value = ((/** @type {?} */ (value))).toFixed(stellen);
        }
        return value.toString().replace('.', ',');
    };
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
    /** Konvertiert ein moment Object in die lokale Zeitzone (Entfernt UTC) */
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
    TypeConverter.booleanNumberToSting = /** Erzeugt ein moment object und setzt dieses auf UTC, falls dies noch nicht geschehen ist. */
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
    function (n) {
        return n === 1 ? 'Ja' : 'Nein';
    };
    /** Konvertiert ein Moment Object zu einem Date Object */
    /*public static toJSDate(mObject: moment.Moment): Date {
      const mDate = TypeConverter.utcDate(mObject);
      if (!mDate) {
        return undefined;
      }
      return mDate.toDate();
    }*/
    /** Kovertiert einen String in einen Regex um eine Volltextsuche zu ermöglichen */
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
    TypeConverter.asRegex = /** Konvertiert ein Moment Object zu einem Date Object */
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
    function (text) {
        /** @type {?} */
        var builderString = '';
        if (_.isEmpty(text)) {
            return new RegExp(builderString);
        }
        _.each(text.split(''), (/**
         * @param {?} char
         * @return {?}
         */
        function (char) {
            builderString = builderString + ("" + char);
        }));
        return new RegExp(builderString.replace(REGEX.SPECIAL_CHARS_REGEX, '\\$&'), 'i');
    };
    /**
     * @param {?} bool
     * @return {?}
     */
    TypeConverter.booleanToNumber = /**
     * @param {?} bool
     * @return {?}
     */
    function (bool) {
        return bool === true ? 1 : 0;
    };
    /**
     * @param {?} digit
     * @return {?}
     */
    TypeConverter.numberToBoolean = /**
     * @param {?} digit
     * @return {?}
     */
    function (digit) {
        return digit === 1;
    };
    /** Kovertiert einen String, der dem Regex einer Zahl entspricht, in eine Zahl */
    /**
     * Kovertiert einen String, der dem Regex einer Zahl entspricht, in eine Zahl
     * @private
     * @param {?} value
     * @return {?}
     */
    TypeConverter.convertInputStringToNumber = /**
     * Kovertiert einen String, der dem Regex einer Zahl entspricht, in eine Zahl
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value.includes('.')) {
            return Number.parseFloat(value);
        }
        if (value.includes(',')) {
            return Number.parseFloat(value.replace(',', '.'));
        }
        return Number.parseInt(value);
    };
    return TypeConverter;
}());
/**
 * @abstract
 */
export { TypeConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvdHlwZS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUVoQyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFHdkM7Ozs7SUFBQTtJQXNHQSxDQUFDO0lBcEdDLHNEQUFzRDs7Ozs7O0lBQ3hDLHNCQUFROzs7OztJQUF0QixVQUF1QixLQUFzQjtRQUMzQyw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx5SEFBeUg7UUFDekgsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFBLEtBQUssRUFBVSxDQUFDLEVBQUU7WUFDM0QsT0FBTyxhQUFhLENBQUMsMEJBQTBCLENBQUMsbUJBQUEsS0FBSyxFQUFVLENBQUMsQ0FBQztTQUNsRTtRQUNELHVEQUF1RDtRQUN2RCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxpRkFBaUY7Ozs7Ozs7SUFDbkUsMkJBQWE7Ozs7OztJQUEzQixVQUE0QixLQUFzQixFQUFFLE9BQWdCO1FBQ2xFLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3pDLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoRCxLQUFLLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELCtGQUErRjtJQUMvRjs7Ozs7Ozs7Ozs7T0FXRztJQUNILDBFQUEwRTtJQUMxRTs7Ozs7Ozs7OztPQVVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFVyxrQ0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQWxDLFVBQW1DLENBQVM7UUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBRUQseURBQXlEO0lBQ3pEOzs7Ozs7T0FNRztJQUVILGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7SUFDcEUscUJBQU87Ozs7Ozs7Ozs7Ozs7SUFBckIsVUFBc0IsSUFBWTs7WUFDNUIsYUFBYSxHQUFHLEVBQUU7UUFDdEIsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbEM7UUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDOzs7O1FBQUUsVUFBQyxJQUFJO1lBQzFCLGFBQWEsR0FBRyxhQUFhLElBQUcsS0FBRyxJQUFNLENBQUEsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFFYSw2QkFBZTs7OztJQUE3QixVQUE4QixJQUFhO1FBQ3pDLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFYSw2QkFBZTs7OztJQUE3QixVQUE4QixLQUFhO1FBQ3pDLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUZBQWlGOzs7Ozs7O0lBQ2xFLHdDQUEwQjs7Ozs7O0lBQXpDLFVBQTBDLEtBQWE7UUFDckQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBdEdELElBc0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCB7UkVHRVh9IGZyb20gJy4uLy4uL2VudW0vcmVnZXgnO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUeXBlQ29udmVydGVyIHtcclxuXHJcbiAgLyoqIFZlcnN1Y2h0IGRlbiBXZXJ0IGluIGVpbmUgWmFobCB6dSBrb252ZXJ0aWVyZW4uICovXHJcbiAgcHVibGljIHN0YXRpYyB0b051bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgIC8vIEZhbGxzIG51bGwgb2RlciB1bmRlZmluZWQgw7xiZXJnZWJlbiB3dXJkZSwgYnJlY2hlbiB3aXIgYWJcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLy8gRmFsbHMgZGVyIFdlcnQgYmVyZWl0cyBlaW5lIFphaGwgaXN0LCBzaW5kIHdpciBmZXJ0aWdcclxuICAgIGlmIChfLmlzTnVtYmVyKHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvLyBGYWxscyBkZXIgV2VydCBlaW4gU3RyaW5nIGlzdCwgdGVzdGVuIHdpciwgb2IgZXIgYXVzc2llaHQgd2llIGVpbmUgWmFobCB1bmQgdmVyc3VjaGVuIGlobiBhbnNjaGxpZcOfZW5kIHp1IGtvbnZlcnRpZXJlblxyXG4gICAgaWYgKF8uaXNTdHJpbmcodmFsdWUpICYmIFJFR0VYLk5VTUJFUi50ZXN0KHZhbHVlIGFzIHN0cmluZykpIHtcclxuICAgICAgcmV0dXJuIFR5cGVDb252ZXJ0ZXIuY29udmVydElucHV0U3RyaW5nVG9OdW1iZXIodmFsdWUgYXMgc3RyaW5nKTtcclxuICAgIH1cclxuICAgIC8vIFdpciBoYWJlbiBrZWluZSBSZWdlbCBmw7xyIGRpZSBLb252ZXJ0aWVydW5nIGdlZnVuZGVuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogTmltbXQgZWluZSBaYWhsIHVuZCBnaWJ0IGVpbmUgZGV1dHNjaGUgUmVwcmVzZW50YXRpb24gZGllc2VzIFdlcnRlcyB6dXLDvGNrICovXHJcbiAgcHVibGljIHN0YXRpYyBhc0dlcm1hbkZsb2F0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIHN0ZWxsZW4/OiBudW1iZXIpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoc3RlbGxlbikgJiYgXy5pc051bWJlcih2YWx1ZSkpIHtcclxuICAgICAgdmFsdWUgPSAodmFsdWUgYXMgbnVtYmVyKS50b0ZpeGVkKHN0ZWxsZW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJyk7XHJcbiAgfVxyXG5cclxuICAvKiogRXJ6ZXVndCBlaW4gbW9tZW50IG9iamVjdCB1bmQgc2V0enQgZGllc2VzIGF1ZiBVVEMsIGZhbGxzIGRpZXMgbm9jaCBuaWNodCBnZXNjaGVoZW4gaXN0LiAqL1xyXG4gIC8qcHVibGljIHN0YXRpYyB1dGNEYXRlKC4uLmFyZ3M6IGFueVtdKTogbW9tZW50Lk1vbWVudCB7XHJcbiAgICBjb25zdCBpc0RlZmluZWQgPSBfLmV2ZXJ5KGFyZ3MsIChhcmc6IGFueSkgPT4gVXRpbC5pc0RlZmluZWQoYXJnKSk7XHJcbiAgICBpZiAoIWlzRGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbU9iamVjdCA9IG1vbWVudCguLi5hcmdzKTtcclxuICAgIGlmIChtT2JqZWN0LmlzVVRDKCkpIHtcclxuICAgICAgcmV0dXJuIG1PYmplY3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbU9iamVjdC51dGModHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSovXHJcbiAgLyoqIEtvbnZlcnRpZXJ0IGVpbiBtb21lbnQgT2JqZWN0IGluIGRpZSBsb2thbGUgWmVpdHpvbmUgKEVudGZlcm50IFVUQykgKi9cclxuICAvKnB1YmxpYyBzdGF0aWMgdG9Mb2NhbERhdGUobU9iamVjdDogbW9tZW50Lk1vbWVudCk6IG1vbWVudC5Nb21lbnQge1xyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZChtT2JqZWN0KSkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFyYW0gPSBtb21lbnQobU9iamVjdCk7XHJcbiAgICBpZiAocGFyYW0uaXNVVEMoKSkge1xyXG4gICAgICByZXR1cm4gcGFyYW0ubG9jYWwodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcGFyYW07XHJcbiAgICB9XHJcbiAgfSovXHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYm9vbGVhbk51bWJlclRvU3RpbmcobjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBuID09PSAxID8gJ0phJyA6ICdOZWluJztcclxuICB9XHJcblxyXG4gIC8qKiBLb252ZXJ0aWVydCBlaW4gTW9tZW50IE9iamVjdCB6dSBlaW5lbSBEYXRlIE9iamVjdCAqL1xyXG4gIC8qcHVibGljIHN0YXRpYyB0b0pTRGF0ZShtT2JqZWN0OiBtb21lbnQuTW9tZW50KTogRGF0ZSB7XHJcbiAgICBjb25zdCBtRGF0ZSA9IFR5cGVDb252ZXJ0ZXIudXRjRGF0ZShtT2JqZWN0KTtcclxuICAgIGlmICghbURhdGUpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHJldHVybiBtRGF0ZS50b0RhdGUoKTtcclxuICB9Ki9cclxuXHJcbiAgLyoqIEtvdmVydGllcnQgZWluZW4gU3RyaW5nIGluIGVpbmVuIFJlZ2V4IHVtIGVpbmUgVm9sbHRleHRzdWNoZSB6dSBlcm3DtmdsaWNoZW4gKi9cclxuICBwdWJsaWMgc3RhdGljIGFzUmVnZXgodGV4dDogc3RyaW5nKTogUmVnRXhwIHtcclxuICAgIGxldCBidWlsZGVyU3RyaW5nID0gJyc7XHJcbiAgICBpZiAoXy5pc0VtcHR5KHRleHQpKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKGJ1aWxkZXJTdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgXy5lYWNoKHRleHQuc3BsaXQoJycpLCAoY2hhcikgPT4ge1xyXG4gICAgICBidWlsZGVyU3RyaW5nID0gYnVpbGRlclN0cmluZyArIGAke2NoYXJ9YDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYnVpbGRlclN0cmluZy5yZXBsYWNlKFJFR0VYLlNQRUNJQUxfQ0hBUlNfUkVHRVgsICdcXFxcJCYnKSwgJ2knKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYm9vbGVhblRvTnVtYmVyKGJvb2w6IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGJvb2wgPT09IHRydWUgPyAxIDogMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbnVtYmVyVG9Cb29sZWFuKGRpZ2l0OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkaWdpdCA9PT0gMTtcclxuICB9XHJcblxyXG4gIC8qKiBLb3ZlcnRpZXJ0IGVpbmVuIFN0cmluZywgZGVyIGRlbSBSZWdleCBlaW5lciBaYWhsIGVudHNwcmljaHQsIGluIGVpbmUgWmFobCAqL1xyXG4gIHByaXZhdGUgc3RhdGljIGNvbnZlcnRJbnB1dFN0cmluZ1RvTnVtYmVyKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKCcuJykpIHtcclxuICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnLCcpKSB7XHJcbiAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHZhbHVlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==