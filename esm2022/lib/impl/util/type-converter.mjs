import moment from 'moment';
import * as _ from 'underscore';
import { REGEX } from '../../enum/regex';
export class TypeConverter {
    static DATE_REGEX = /(\d{2}).(\d{2}).(\d{4})/;
    static DATE_REGEX_INPUT = /(\d{4})-(\d{2})-(\d{2})/;
    /** Versucht den Wert in eine Zahl zu konvertieren. */
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
        if (_.isString(value) && REGEX.NUMBER.test(value)) {
            return TypeConverter.convertInputStringToNumber(value);
        }
        // Wir haben keine Regel für die Konvertierung gefunden
        return value;
    }
    /** Nimmt eine Zahl und gibt eine deutsche Representation dieses Wertes zurück */
    static asGermanFloat(value, stellen) {
        if (value === null || value === undefined) {
            return undefined;
        }
        if (!_.isUndefined(stellen) && _.isNumber(value)) {
            value = value.toFixed(stellen);
        }
        return value.toString().replace('.', ',');
    }
    static toMoment(value) {
        if (value === null || value === undefined) {
            return undefined;
        }
        if (moment.isMoment(value)) {
            return value.utc(true);
        }
        if (_.isString(value)) {
            if (TypeConverter.DATE_REGEX.test(value)) {
                return moment(value, 'DD.MM.YYYY').utc(true);
            }
            if (TypeConverter.DATE_REGEX_INPUT.test(value)) {
                return moment(value, 'YYYY-MM-DD').utc(true);
            }
        }
        return undefined;
    }
    static asGermanDate(value) {
        if (value === null || value === undefined) {
            return undefined;
        }
        const mDate = TypeConverter.toMoment(value);
        if (!moment.isMoment(mDate) || !mDate.isValid()) {
            return undefined;
        }
        return mDate.format('DD.MM.YYYY');
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
    /** Kovertiert einen String in einen Regex um eine Volltextsuche zu ermöglichen */
    static asRegex(text) {
        let builderString = '';
        if (_.isEmpty(text)) {
            return new RegExp(builderString);
        }
        _.each(text.split(''), (char) => {
            builderString = builderString + `${char}`;
        });
        return new RegExp(builderString.replace(REGEX.SPECIAL_CHARS_REGEX, '\\$&'), 'i');
    }
    static booleanToNumber(bool) {
        return bool === true ? 1 : 0;
    }
    static numberToBoolean(digit) {
        return digit === 1;
    }
    /** Kovertiert einen String, der dem Regex einer Zahl entspricht, in eine Zahl */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdXRpbC90eXBlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBR3ZDLE1BQU0sT0FBZ0IsYUFBYTtJQUV6QixNQUFNLENBQVUsVUFBVSxHQUFXLHlCQUF5QixDQUFDO0lBQy9ELE1BQU0sQ0FBVSxnQkFBZ0IsR0FBVyx5QkFBeUIsQ0FBQztJQUU3RSxzREFBc0Q7SUFDL0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFzQjtRQUMzQyw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx5SEFBeUg7UUFDekgsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQWUsQ0FBQyxFQUFFO1lBQzNELE9BQU8sYUFBYSxDQUFDLDBCQUEwQixDQUFDLEtBQWUsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsdURBQXVEO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlGQUFpRjtJQUMxRSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQXNCLEVBQUUsT0FBZ0I7UUFDbEUsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxTQUFTLENBQUM7U0FDbEI7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QUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFhO1FBQ3pDLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUZBQWlGO0lBQ3pFLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQyxLQUFhO1FBQ3JELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7UUFDRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbkQ7UUFDRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuL3V0aWwnO1xyXG5pbXBvcnQge1JFR0VYfSBmcm9tICcuLi8uLi9lbnVtL3JlZ2V4JztcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHlwZUNvbnZlcnRlciB7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERBVEVfUkVHRVg6IFJlZ0V4cCA9IC8oXFxkezJ9KS4oXFxkezJ9KS4oXFxkezR9KS87XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREFURV9SRUdFWF9JTlBVVDogUmVnRXhwID0gLyhcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pLztcclxuXHJcbiAgLyoqIFZlcnN1Y2h0IGRlbiBXZXJ0IGluIGVpbmUgWmFobCB6dSBrb252ZXJ0aWVyZW4uICovXHJcbiAgcHVibGljIHN0YXRpYyB0b051bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgIC8vIEZhbGxzIG51bGwgb2RlciB1bmRlZmluZWQgw7xiZXJnZWJlbiB3dXJkZSwgYnJlY2hlbiB3aXIgYWJcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLy8gRmFsbHMgZGVyIFdlcnQgYmVyZWl0cyBlaW5lIFphaGwgaXN0LCBzaW5kIHdpciBmZXJ0aWdcclxuICAgIGlmIChfLmlzTnVtYmVyKHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvLyBGYWxscyBkZXIgV2VydCBlaW4gU3RyaW5nIGlzdCwgdGVzdGVuIHdpciwgb2IgZXIgYXVzc2llaHQgd2llIGVpbmUgWmFobCB1bmQgdmVyc3VjaGVuIGlobiBhbnNjaGxpZcOfZW5kIHp1IGtvbnZlcnRpZXJlblxyXG4gICAgaWYgKF8uaXNTdHJpbmcodmFsdWUpICYmIFJFR0VYLk5VTUJFUi50ZXN0KHZhbHVlIGFzIHN0cmluZykpIHtcclxuICAgICAgcmV0dXJuIFR5cGVDb252ZXJ0ZXIuY29udmVydElucHV0U3RyaW5nVG9OdW1iZXIodmFsdWUgYXMgc3RyaW5nKTtcclxuICAgIH1cclxuICAgIC8vIFdpciBoYWJlbiBrZWluZSBSZWdlbCBmw7xyIGRpZSBLb252ZXJ0aWVydW5nIGdlZnVuZGVuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogTmltbXQgZWluZSBaYWhsIHVuZCBnaWJ0IGVpbmUgZGV1dHNjaGUgUmVwcmVzZW50YXRpb24gZGllc2VzIFdlcnRlcyB6dXLDvGNrICovXHJcbiAgcHVibGljIHN0YXRpYyBhc0dlcm1hbkZsb2F0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIHN0ZWxsZW4/OiBudW1iZXIpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoc3RlbGxlbikgJiYgXy5pc051bWJlcih2YWx1ZSkpIHtcclxuICAgICAgdmFsdWUgPSAodmFsdWUgYXMgbnVtYmVyKS50b0ZpeGVkKHN0ZWxsZW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRvTW9tZW50KHZhbHVlOiBzdHJpbmd8bW9tZW50Lk1vbWVudCk6IG1vbWVudC5Nb21lbnQge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmIChtb21lbnQuaXNNb21lbnQodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZS51dGModHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoXy5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgaWYgKFR5cGVDb252ZXJ0ZXIuREFURV9SRUdFWC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiBtb21lbnQodmFsdWUsICdERC5NTS5ZWVlZJykudXRjKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChUeXBlQ29udmVydGVyLkRBVEVfUkVHRVhfSU5QVVQudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlLCAnWVlZWS1NTS1ERCcpLnV0Yyh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXNHZXJtYW5EYXRlKHZhbHVlOiBzdHJpbmcgfCBtb21lbnQuTW9tZW50KTogc3RyaW5nIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtRGF0ZSA9IFR5cGVDb252ZXJ0ZXIudG9Nb21lbnQodmFsdWUpO1xyXG4gICAgaWYgKCFtb21lbnQuaXNNb21lbnQobURhdGUpIHx8ICFtRGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHJldHVybiBtRGF0ZS5mb3JtYXQoJ0RELk1NLllZWVknKTtcclxuICB9XHJcblxyXG4gIC8qKiBFcnpldWd0IGVpbiBtb21lbnQgb2JqZWN0IHVuZCBzZXR6dCBkaWVzZXMgYXVmIFVUQywgZmFsbHMgZGllcyBub2NoIG5pY2h0IGdlc2NoZWhlbiBpc3QuICovXHJcbiAgLypwdWJsaWMgc3RhdGljIHV0Y0RhdGUoLi4uYXJnczogYW55W10pOiBtb21lbnQuTW9tZW50IHtcclxuICAgIGNvbnN0IGlzRGVmaW5lZCA9IF8uZXZlcnkoYXJncywgKGFyZzogYW55KSA9PiBVdGlsLmlzRGVmaW5lZChhcmcpKTtcclxuICAgIGlmICghaXNEZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtT2JqZWN0ID0gbW9tZW50KC4uLmFyZ3MpO1xyXG4gICAgaWYgKG1PYmplY3QuaXNVVEMoKSkge1xyXG4gICAgICByZXR1cm4gbU9iamVjdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBtT2JqZWN0LnV0Yyh0cnVlKTtcclxuICAgIH1cclxuICB9Ki9cclxuICAvKiogS29udmVydGllcnQgZWluIG1vbWVudCBPYmplY3QgaW4gZGllIGxva2FsZSBaZWl0em9uZSAoRW50ZmVybnQgVVRDKSAqL1xyXG4gIC8qcHVibGljIHN0YXRpYyB0b0xvY2FsRGF0ZShtT2JqZWN0OiBtb21lbnQuTW9tZW50KTogbW9tZW50Lk1vbWVudCB7XHJcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKG1PYmplY3QpKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJhbSA9IG1vbWVudChtT2JqZWN0KTtcclxuICAgIGlmIChwYXJhbS5pc1VUQygpKSB7XHJcbiAgICAgIHJldHVybiBwYXJhbS5sb2NhbCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBwYXJhbTtcclxuICAgIH1cclxuICB9Ki9cclxuXHJcbiAgcHVibGljIHN0YXRpYyBib29sZWFuTnVtYmVyVG9TdGluZyhuOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG4gPT09IDEgPyAnSmEnIDogJ05laW4nO1xyXG4gIH1cclxuXHJcbiAgLyoqIEtvbnZlcnRpZXJ0IGVpbiBNb21lbnQgT2JqZWN0IHp1IGVpbmVtIERhdGUgT2JqZWN0ICovXHJcbiAgLypwdWJsaWMgc3RhdGljIHRvSlNEYXRlKG1PYmplY3Q6IG1vbWVudC5Nb21lbnQpOiBEYXRlIHtcclxuICAgIGNvbnN0IG1EYXRlID0gVHlwZUNvbnZlcnRlci51dGNEYXRlKG1PYmplY3QpO1xyXG4gICAgaWYgKCFtRGF0ZSkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1EYXRlLnRvRGF0ZSgpO1xyXG4gIH0qL1xyXG5cclxuICAvKiogS292ZXJ0aWVydCBlaW5lbiBTdHJpbmcgaW4gZWluZW4gUmVnZXggdW0gZWluZSBWb2xsdGV4dHN1Y2hlIHp1IGVybcO2Z2xpY2hlbiAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgYXNSZWdleCh0ZXh0OiBzdHJpbmcpOiBSZWdFeHAge1xyXG4gICAgbGV0IGJ1aWxkZXJTdHJpbmcgPSAnJztcclxuICAgIGlmIChfLmlzRW1wdHkodGV4dCkpIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYnVpbGRlclN0cmluZyk7XHJcbiAgICB9XHJcbiAgICBfLmVhY2godGV4dC5zcGxpdCgnJyksIChjaGFyKSA9PiB7XHJcbiAgICAgIGJ1aWxkZXJTdHJpbmcgPSBidWlsZGVyU3RyaW5nICsgYCR7Y2hhcn1gO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChidWlsZGVyU3RyaW5nLnJlcGxhY2UoUkVHRVguU1BFQ0lBTF9DSEFSU19SRUdFWCwgJ1xcXFwkJicpLCAnaScpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBib29sZWFuVG9OdW1iZXIoYm9vbDogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gYm9vbCA9PT0gdHJ1ZSA/IDEgOiAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBudW1iZXJUb0Jvb2xlYW4oZGlnaXQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGRpZ2l0ID09PSAxO1xyXG4gIH1cclxuXHJcbiAgLyoqIEtvdmVydGllcnQgZWluZW4gU3RyaW5nLCBkZXIgZGVtIFJlZ2V4IGVpbmVyIFphaGwgZW50c3ByaWNodCwgaW4gZWluZSBaYWhsICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29udmVydElucHV0U3RyaW5nVG9OdW1iZXIodmFsdWU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoJy4nKSkge1xyXG4gICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKCcsJykpIHtcclxuICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQodmFsdWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19