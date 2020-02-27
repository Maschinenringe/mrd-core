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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvdHlwZS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUVoQyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFHdkMsTUFBTSxPQUFnQixhQUFhOzs7Ozs7SUFHMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFzQjtRQUMzQyw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx5SEFBeUg7UUFDekgsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFBLEtBQUssRUFBVSxDQUFDLEVBQUU7WUFDM0QsT0FBTyxhQUFhLENBQUMsMEJBQTBCLENBQUMsbUJBQUEsS0FBSyxFQUFVLENBQUMsQ0FBQztTQUNsRTtRQUNELHVEQUF1RDtRQUN2RCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7Ozs7SUFHTSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQXNCLEVBQUUsT0FBZ0I7UUFDbEUsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hELEtBQUssR0FBRyxDQUFDLG1CQUFBLEtBQUssRUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0Qk0sTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQVM7UUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxDQUFDOzs7Ozs7Ozs7Ozs7OztJQVlNLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBWTs7WUFDNUIsYUFBYSxHQUFHLEVBQUU7UUFDdEIsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25CLE9BQU8sSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbEM7UUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDOzs7O1FBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM5QixhQUFhLEdBQUcsYUFBYSxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDNUMsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFhO1FBQ3pDLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFTSxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQWE7UUFDekMsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Ozs7Ozs7SUFHTyxNQUFNLENBQUMsMEJBQTBCLENBQUMsS0FBYTtRQUNyRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuL3V0aWwnO1xyXG5pbXBvcnQge1JFR0VYfSBmcm9tICcuLi8uLi9lbnVtL3JlZ2V4JztcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHlwZUNvbnZlcnRlciB7XHJcblxyXG4gIC8qKiBWZXJzdWNodCBkZW4gV2VydCBpbiBlaW5lIFphaGwgenUga29udmVydGllcmVuLiAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgdG9OdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB8IHN0cmluZyB7XHJcbiAgICAvLyBGYWxscyBudWxsIG9kZXIgdW5kZWZpbmVkIMO8YmVyZ2ViZW4gd3VyZGUsIGJyZWNoZW4gd2lyIGFiXHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8vIEZhbGxzIGRlciBXZXJ0IGJlcmVpdHMgZWluZSBaYWhsIGlzdCwgc2luZCB3aXIgZmVydGlnXHJcbiAgICBpZiAoXy5pc051bWJlcih2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLy8gRmFsbHMgZGVyIFdlcnQgZWluIFN0cmluZyBpc3QsIHRlc3RlbiB3aXIsIG9iIGVyIGF1c3NpZWh0IHdpZSBlaW5lIFphaGwgdW5kIHZlcnN1Y2hlbiBpaG4gYW5zY2hsaWXDn2VuZCB6dSBrb252ZXJ0aWVyZW5cclxuICAgIGlmIChfLmlzU3RyaW5nKHZhbHVlKSAmJiBSRUdFWC5OVU1CRVIudGVzdCh2YWx1ZSBhcyBzdHJpbmcpKSB7XHJcbiAgICAgIHJldHVybiBUeXBlQ29udmVydGVyLmNvbnZlcnRJbnB1dFN0cmluZ1RvTnVtYmVyKHZhbHVlIGFzIHN0cmluZyk7XHJcbiAgICB9XHJcbiAgICAvLyBXaXIgaGFiZW4ga2VpbmUgUmVnZWwgZsO8ciBkaWUgS29udmVydGllcnVuZyBnZWZ1bmRlblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIE5pbW10IGVpbmUgWmFobCB1bmQgZ2lidCBlaW5lIGRldXRzY2hlIFJlcHJlc2VudGF0aW9uIGRpZXNlcyBXZXJ0ZXMgenVyw7xjayAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgYXNHZXJtYW5GbG9hdCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBzdGVsbGVuPzogbnVtYmVyKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKHN0ZWxsZW4pICYmIF8uaXNOdW1iZXIodmFsdWUpKSB7XHJcbiAgICAgIHZhbHVlID0gKHZhbHVlIGFzIG51bWJlcikudG9GaXhlZChzdGVsbGVuKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnLCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEVyemV1Z3QgZWluIG1vbWVudCBvYmplY3QgdW5kIHNldHp0IGRpZXNlcyBhdWYgVVRDLCBmYWxscyBkaWVzIG5vY2ggbmljaHQgZ2VzY2hlaGVuIGlzdC4gKi9cclxuICAvKnB1YmxpYyBzdGF0aWMgdXRjRGF0ZSguLi5hcmdzOiBhbnlbXSk6IG1vbWVudC5Nb21lbnQge1xyXG4gICAgY29uc3QgaXNEZWZpbmVkID0gXy5ldmVyeShhcmdzLCAoYXJnOiBhbnkpID0+IFV0aWwuaXNEZWZpbmVkKGFyZykpO1xyXG4gICAgaWYgKCFpc0RlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG1PYmplY3QgPSBtb21lbnQoLi4uYXJncyk7XHJcbiAgICBpZiAobU9iamVjdC5pc1VUQygpKSB7XHJcbiAgICAgIHJldHVybiBtT2JqZWN0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1PYmplY3QudXRjKHRydWUpO1xyXG4gICAgfVxyXG4gIH0qL1xyXG4gIC8qKiBLb252ZXJ0aWVydCBlaW4gbW9tZW50IE9iamVjdCBpbiBkaWUgbG9rYWxlIFplaXR6b25lIChFbnRmZXJudCBVVEMpICovXHJcbiAgLypwdWJsaWMgc3RhdGljIHRvTG9jYWxEYXRlKG1PYmplY3Q6IG1vbWVudC5Nb21lbnQpOiBtb21lbnQuTW9tZW50IHtcclxuICAgIGlmICghVXRpbC5pc0RlZmluZWQobU9iamVjdCkpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhcmFtID0gbW9tZW50KG1PYmplY3QpO1xyXG4gICAgaWYgKHBhcmFtLmlzVVRDKCkpIHtcclxuICAgICAgcmV0dXJuIHBhcmFtLmxvY2FsKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHBhcmFtO1xyXG4gICAgfVxyXG4gIH0qL1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGJvb2xlYW5OdW1iZXJUb1N0aW5nKG46IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbiA9PT0gMSA/ICdKYScgOiAnTmVpbic7XHJcbiAgfVxyXG5cclxuICAvKiogS29udmVydGllcnQgZWluIE1vbWVudCBPYmplY3QgenUgZWluZW0gRGF0ZSBPYmplY3QgKi9cclxuICAvKnB1YmxpYyBzdGF0aWMgdG9KU0RhdGUobU9iamVjdDogbW9tZW50Lk1vbWVudCk6IERhdGUge1xyXG4gICAgY29uc3QgbURhdGUgPSBUeXBlQ29udmVydGVyLnV0Y0RhdGUobU9iamVjdCk7XHJcbiAgICBpZiAoIW1EYXRlKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbURhdGUudG9EYXRlKCk7XHJcbiAgfSovXHJcblxyXG4gIC8qKiBLb3ZlcnRpZXJ0IGVpbmVuIFN0cmluZyBpbiBlaW5lbiBSZWdleCB1bSBlaW5lIFZvbGx0ZXh0c3VjaGUgenUgZXJtw7ZnbGljaGVuICovXHJcbiAgcHVibGljIHN0YXRpYyBhc1JlZ2V4KHRleHQ6IHN0cmluZyk6IFJlZ0V4cCB7XHJcbiAgICBsZXQgYnVpbGRlclN0cmluZyA9ICcnO1xyXG4gICAgaWYgKF8uaXNFbXB0eSh0ZXh0KSkge1xyXG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChidWlsZGVyU3RyaW5nKTtcclxuICAgIH1cclxuICAgIF8uZWFjaCh0ZXh0LnNwbGl0KCcnKSwgKGNoYXIpID0+IHtcclxuICAgICAgYnVpbGRlclN0cmluZyA9IGJ1aWxkZXJTdHJpbmcgKyBgJHtjaGFyfWA7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKGJ1aWxkZXJTdHJpbmcucmVwbGFjZShSRUdFWC5TUEVDSUFMX0NIQVJTX1JFR0VYLCAnXFxcXCQmJyksICdpJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGJvb2xlYW5Ub051bWJlcihib29sOiBib29sZWFuKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBib29sID09PSB0cnVlID8gMSA6IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG51bWJlclRvQm9vbGVhbihkaWdpdDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZGlnaXQgPT09IDE7XHJcbiAgfVxyXG5cclxuICAvKiogS292ZXJ0aWVydCBlaW5lbiBTdHJpbmcsIGRlciBkZW0gUmVnZXggZWluZXIgWmFobCBlbnRzcHJpY2h0LCBpbiBlaW5lIFphaGwgKi9cclxuICBwcml2YXRlIHN0YXRpYyBjb252ZXJ0SW5wdXRTdHJpbmdUb051bWJlcih2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnLicpKSB7XHJcbiAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoJywnKSkge1xyXG4gICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUludCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=