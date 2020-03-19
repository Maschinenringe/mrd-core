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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvdHlwZS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUVoQyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFHdkM7Ozs7SUFBQTtJQXNHQSxDQUFDO0lBcEdDLHNEQUFzRDs7Ozs7O0lBQ3hDLHNCQUFROzs7OztJQUF0QixVQUF1QixLQUFzQjtRQUMzQyw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx5SEFBeUg7UUFDekgsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFBLEtBQUssRUFBVSxDQUFDLEVBQUU7WUFDM0QsT0FBTyxhQUFhLENBQUMsMEJBQTBCLENBQUMsbUJBQUEsS0FBSyxFQUFVLENBQUMsQ0FBQztTQUNsRTtRQUNELHVEQUF1RDtRQUN2RCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxpRkFBaUY7Ozs7Ozs7SUFDbkUsMkJBQWE7Ozs7OztJQUEzQixVQUE0QixLQUFzQixFQUFFLE9BQWdCO1FBQ2xFLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3pDLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBRUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoRCxLQUFLLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLEVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELCtGQUErRjtJQUMvRjs7Ozs7Ozs7Ozs7T0FXRztJQUNILDBFQUEwRTtJQUMxRTs7Ozs7Ozs7OztPQVVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFVyxrQ0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQWxDLFVBQW1DLENBQVM7UUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBRUQseURBQXlEO0lBQ3pEOzs7Ozs7T0FNRztJQUVILGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7SUFDcEUscUJBQU87Ozs7Ozs7Ozs7Ozs7SUFBckIsVUFBc0IsSUFBWTs7WUFDNUIsYUFBYSxHQUFHLEVBQUU7UUFDdEIsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbEM7UUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDOzs7O1FBQUUsVUFBQyxJQUFJO1lBQzFCLGFBQWEsR0FBRyxhQUFhLElBQUcsS0FBRyxJQUFNLENBQUEsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7SUFFYSw2QkFBZTs7OztJQUE3QixVQUE4QixJQUFhO1FBQ3pDLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFYSw2QkFBZTs7OztJQUE3QixVQUE4QixLQUFhO1FBQ3pDLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUZBQWlGOzs7Ozs7O0lBQ2xFLHdDQUEwQjs7Ozs7O0lBQXpDLFVBQTBDLEtBQWE7UUFDckQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBdEdELElBc0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7UkVHRVh9IGZyb20gJy4uLy4uL2VudW0vcmVnZXgnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUeXBlQ29udmVydGVyIHtcblxuICAvKiogVmVyc3VjaHQgZGVuIFdlcnQgaW4gZWluZSBaYWhsIHp1IGtvbnZlcnRpZXJlbi4gKi9cbiAgcHVibGljIHN0YXRpYyB0b051bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHwgc3RyaW5nIHtcbiAgICAvLyBGYWxscyBudWxsIG9kZXIgdW5kZWZpbmVkIMO8YmVyZ2ViZW4gd3VyZGUsIGJyZWNoZW4gd2lyIGFiXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICAvLyBGYWxscyBkZXIgV2VydCBiZXJlaXRzIGVpbmUgWmFobCBpc3QsIHNpbmQgd2lyIGZlcnRpZ1xuICAgIGlmIChfLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICAvLyBGYWxscyBkZXIgV2VydCBlaW4gU3RyaW5nIGlzdCwgdGVzdGVuIHdpciwgb2IgZXIgYXVzc2llaHQgd2llIGVpbmUgWmFobCB1bmQgdmVyc3VjaGVuIGlobiBhbnNjaGxpZcOfZW5kIHp1IGtvbnZlcnRpZXJlblxuICAgIGlmIChfLmlzU3RyaW5nKHZhbHVlKSAmJiBSRUdFWC5OVU1CRVIudGVzdCh2YWx1ZSBhcyBzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gVHlwZUNvbnZlcnRlci5jb252ZXJ0SW5wdXRTdHJpbmdUb051bWJlcih2YWx1ZSBhcyBzdHJpbmcpO1xuICAgIH1cbiAgICAvLyBXaXIgaGFiZW4ga2VpbmUgUmVnZWwgZsO8ciBkaWUgS29udmVydGllcnVuZyBnZWZ1bmRlblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBOaW1tdCBlaW5lIFphaGwgdW5kIGdpYnQgZWluZSBkZXV0c2NoZSBSZXByZXNlbnRhdGlvbiBkaWVzZXMgV2VydGVzIHp1csO8Y2sgKi9cbiAgcHVibGljIHN0YXRpYyBhc0dlcm1hbkZsb2F0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIHN0ZWxsZW4/OiBudW1iZXIpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICghXy5pc1VuZGVmaW5lZChzdGVsbGVuKSAmJiBfLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgdmFsdWUgPSAodmFsdWUgYXMgbnVtYmVyKS50b0ZpeGVkKHN0ZWxsZW4pO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJywnKTtcbiAgfVxuXG4gIC8qKiBFcnpldWd0IGVpbiBtb21lbnQgb2JqZWN0IHVuZCBzZXR6dCBkaWVzZXMgYXVmIFVUQywgZmFsbHMgZGllcyBub2NoIG5pY2h0IGdlc2NoZWhlbiBpc3QuICovXG4gIC8qcHVibGljIHN0YXRpYyB1dGNEYXRlKC4uLmFyZ3M6IGFueVtdKTogbW9tZW50Lk1vbWVudCB7XG4gICAgY29uc3QgaXNEZWZpbmVkID0gXy5ldmVyeShhcmdzLCAoYXJnOiBhbnkpID0+IFV0aWwuaXNEZWZpbmVkKGFyZykpO1xuICAgIGlmICghaXNEZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBtT2JqZWN0ID0gbW9tZW50KC4uLmFyZ3MpO1xuICAgIGlmIChtT2JqZWN0LmlzVVRDKCkpIHtcbiAgICAgIHJldHVybiBtT2JqZWN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbU9iamVjdC51dGModHJ1ZSk7XG4gICAgfVxuICB9Ki9cbiAgLyoqIEtvbnZlcnRpZXJ0IGVpbiBtb21lbnQgT2JqZWN0IGluIGRpZSBsb2thbGUgWmVpdHpvbmUgKEVudGZlcm50IFVUQykgKi9cbiAgLypwdWJsaWMgc3RhdGljIHRvTG9jYWxEYXRlKG1PYmplY3Q6IG1vbWVudC5Nb21lbnQpOiBtb21lbnQuTW9tZW50IHtcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKG1PYmplY3QpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbSA9IG1vbWVudChtT2JqZWN0KTtcbiAgICBpZiAocGFyYW0uaXNVVEMoKSkge1xuICAgICAgcmV0dXJuIHBhcmFtLmxvY2FsKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyYW07XG4gICAgfVxuICB9Ki9cblxuICBwdWJsaWMgc3RhdGljIGJvb2xlYW5OdW1iZXJUb1N0aW5nKG46IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIG4gPT09IDEgPyAnSmEnIDogJ05laW4nO1xuICB9XG5cbiAgLyoqIEtvbnZlcnRpZXJ0IGVpbiBNb21lbnQgT2JqZWN0IHp1IGVpbmVtIERhdGUgT2JqZWN0ICovXG4gIC8qcHVibGljIHN0YXRpYyB0b0pTRGF0ZShtT2JqZWN0OiBtb21lbnQuTW9tZW50KTogRGF0ZSB7XG4gICAgY29uc3QgbURhdGUgPSBUeXBlQ29udmVydGVyLnV0Y0RhdGUobU9iamVjdCk7XG4gICAgaWYgKCFtRGF0ZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIG1EYXRlLnRvRGF0ZSgpO1xuICB9Ki9cblxuICAvKiogS292ZXJ0aWVydCBlaW5lbiBTdHJpbmcgaW4gZWluZW4gUmVnZXggdW0gZWluZSBWb2xsdGV4dHN1Y2hlIHp1IGVybcO2Z2xpY2hlbiAqL1xuICBwdWJsaWMgc3RhdGljIGFzUmVnZXgodGV4dDogc3RyaW5nKTogUmVnRXhwIHtcbiAgICBsZXQgYnVpbGRlclN0cmluZyA9ICcnO1xuICAgIGlmIChfLmlzRW1wdHkodGV4dCkpIHtcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKGJ1aWxkZXJTdHJpbmcpO1xuICAgIH1cbiAgICBfLmVhY2godGV4dC5zcGxpdCgnJyksIChjaGFyKSA9PiB7XG4gICAgICBidWlsZGVyU3RyaW5nID0gYnVpbGRlclN0cmluZyArIGAke2NoYXJ9YDtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChidWlsZGVyU3RyaW5nLnJlcGxhY2UoUkVHRVguU1BFQ0lBTF9DSEFSU19SRUdFWCwgJ1xcXFwkJicpLCAnaScpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBib29sZWFuVG9OdW1iZXIoYm9vbDogYm9vbGVhbik6IG51bWJlciB7XG4gICAgcmV0dXJuIGJvb2wgPT09IHRydWUgPyAxIDogMDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbnVtYmVyVG9Cb29sZWFuKGRpZ2l0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZGlnaXQgPT09IDE7XG4gIH1cblxuICAvKiogS292ZXJ0aWVydCBlaW5lbiBTdHJpbmcsIGRlciBkZW0gUmVnZXggZWluZXIgWmFobCBlbnRzcHJpY2h0LCBpbiBlaW5lIFphaGwgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgY29udmVydElucHV0U3RyaW5nVG9OdW1iZXIodmFsdWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnLCcpKSB7XG4gICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHZhbHVlKTtcbiAgfVxuXG59XG4iXX0=