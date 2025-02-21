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
        return value;
    }
    static asGermanDate(value) {
        if (value === null || value === undefined) {
            return undefined;
        }
        const mDate = TypeConverter.toMoment(value);
        if (!moment.isMoment(mDate) || !mDate.isValid()) {
            return value.toString();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdXRpbC90eXBlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBR3ZDLE1BQU0sT0FBZ0IsYUFBYTtJQUV6QixNQUFNLENBQVUsVUFBVSxHQUFXLHlCQUF5QixDQUFDO0lBQy9ELE1BQU0sQ0FBVSxnQkFBZ0IsR0FBVyx5QkFBeUIsQ0FBQztJQUU3RSxzREFBc0Q7SUFDL0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFzQjtRQUMzQyw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx5SEFBeUg7UUFDekgsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQWUsQ0FBQyxFQUFFO1lBQzNELE9BQU8sYUFBYSxDQUFDLDBCQUEwQixDQUFDLEtBQWUsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsdURBQXVEO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlGQUFpRjtJQUMxRSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQXNCLEVBQUUsT0FBZ0I7UUFDbEUsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxTQUFTLENBQUM7U0FDbEI7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SyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQWE7UUFDekMsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpRkFBaUY7SUFDekUsTUFBTSxDQUFDLDBCQUEwQixDQUFDLEtBQWE7UUFDckQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCB7UkVHRVh9IGZyb20gJy4uLy4uL2VudW0vcmVnZXgnO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUeXBlQ29udmVydGVyIHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREFURV9SRUdFWDogUmVnRXhwID0gLyhcXGR7Mn0pLihcXGR7Mn0pLihcXGR7NH0pLztcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBEQVRFX1JFR0VYX0lOUFVUOiBSZWdFeHAgPSAvKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSkvO1xyXG5cclxuICAvKiogVmVyc3VjaHQgZGVuIFdlcnQgaW4gZWluZSBaYWhsIHp1IGtvbnZlcnRpZXJlbi4gKi9cclxuICBwdWJsaWMgc3RhdGljIHRvTnVtYmVyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgLy8gRmFsbHMgbnVsbCBvZGVyIHVuZGVmaW5lZCDDvGJlcmdlYmVuIHd1cmRlLCBicmVjaGVuIHdpciBhYlxyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvLyBGYWxscyBkZXIgV2VydCBiZXJlaXRzIGVpbmUgWmFobCBpc3QsIHNpbmQgd2lyIGZlcnRpZ1xyXG4gICAgaWYgKF8uaXNOdW1iZXIodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8vIEZhbGxzIGRlciBXZXJ0IGVpbiBTdHJpbmcgaXN0LCB0ZXN0ZW4gd2lyLCBvYiBlciBhdXNzaWVodCB3aWUgZWluZSBaYWhsIHVuZCB2ZXJzdWNoZW4gaWhuIGFuc2NobGllw59lbmQgenUga29udmVydGllcmVuXHJcbiAgICBpZiAoXy5pc1N0cmluZyh2YWx1ZSkgJiYgUkVHRVguTlVNQkVSLnRlc3QodmFsdWUgYXMgc3RyaW5nKSkge1xyXG4gICAgICByZXR1cm4gVHlwZUNvbnZlcnRlci5jb252ZXJ0SW5wdXRTdHJpbmdUb051bWJlcih2YWx1ZSBhcyBzdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgLy8gV2lyIGhhYmVuIGtlaW5lIFJlZ2VsIGbDvHIgZGllIEtvbnZlcnRpZXJ1bmcgZ2VmdW5kZW5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBOaW1tdCBlaW5lIFphaGwgdW5kIGdpYnQgZWluZSBkZXV0c2NoZSBSZXByZXNlbnRhdGlvbiBkaWVzZXMgV2VydGVzIHp1csO8Y2sgKi9cclxuICBwdWJsaWMgc3RhdGljIGFzR2VybWFuRmxvYXQodmFsdWU6IG51bWJlciB8IHN0cmluZywgc3RlbGxlbj86IG51bWJlcik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghXy5pc1VuZGVmaW5lZChzdGVsbGVuKSAmJiBfLmlzTnVtYmVyKHZhbHVlKSkge1xyXG4gICAgICB2YWx1ZSA9ICh2YWx1ZSBhcyBudW1iZXIpLnRvRml4ZWQoc3RlbGxlbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJywnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdG9Nb21lbnQodmFsdWU6IHN0cmluZ3xtb21lbnQuTW9tZW50KTogbW9tZW50Lk1vbWVudHxzdHJpbmcge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmIChtb21lbnQuaXNNb21lbnQodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZS51dGModHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoXy5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgaWYgKFR5cGVDb252ZXJ0ZXIuREFURV9SRUdFWC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiBtb21lbnQodmFsdWUsICdERC5NTS5ZWVlZJykudXRjKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChUeXBlQ29udmVydGVyLkRBVEVfUkVHRVhfSU5QVVQudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlLCAnWVlZWS1NTS1ERCcpLnV0Yyh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc0dlcm1hbkRhdGUodmFsdWU6IHN0cmluZyB8IG1vbWVudC5Nb21lbnQpOiBzdHJpbmcge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG1EYXRlID0gVHlwZUNvbnZlcnRlci50b01vbWVudCh2YWx1ZSk7XHJcbiAgICBpZiAoIW1vbWVudC5pc01vbWVudChtRGF0ZSkgfHwgIW1EYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtRGF0ZS5mb3JtYXQoJ0RELk1NLllZWVknKTtcclxuICB9XHJcblxyXG4gIC8qKiBFcnpldWd0IGVpbiBtb21lbnQgb2JqZWN0IHVuZCBzZXR6dCBkaWVzZXMgYXVmIFVUQywgZmFsbHMgZGllcyBub2NoIG5pY2h0IGdlc2NoZWhlbiBpc3QuICovXHJcbiAgLypwdWJsaWMgc3RhdGljIHV0Y0RhdGUoLi4uYXJnczogYW55W10pOiBtb21lbnQuTW9tZW50IHtcclxuICAgIGNvbnN0IGlzRGVmaW5lZCA9IF8uZXZlcnkoYXJncywgKGFyZzogYW55KSA9PiBVdGlsLmlzRGVmaW5lZChhcmcpKTtcclxuICAgIGlmICghaXNEZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtT2JqZWN0ID0gbW9tZW50KC4uLmFyZ3MpO1xyXG4gICAgaWYgKG1PYmplY3QuaXNVVEMoKSkge1xyXG4gICAgICByZXR1cm4gbU9iamVjdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBtT2JqZWN0LnV0Yyh0cnVlKTtcclxuICAgIH1cclxuICB9Ki9cclxuICAvKiogS29udmVydGllcnQgZWluIG1vbWVudCBPYmplY3QgaW4gZGllIGxva2FsZSBaZWl0em9uZSAoRW50ZmVybnQgVVRDKSAqL1xyXG4gIC8qcHVibGljIHN0YXRpYyB0b0xvY2FsRGF0ZShtT2JqZWN0OiBtb21lbnQuTW9tZW50KTogbW9tZW50Lk1vbWVudCB7XHJcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKG1PYmplY3QpKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJhbSA9IG1vbWVudChtT2JqZWN0KTtcclxuICAgIGlmIChwYXJhbS5pc1VUQygpKSB7XHJcbiAgICAgIHJldHVybiBwYXJhbS5sb2NhbCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBwYXJhbTtcclxuICAgIH1cclxuICB9Ki9cclxuXHJcbiAgcHVibGljIHN0YXRpYyBib29sZWFuTnVtYmVyVG9TdGluZyhuOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG4gPT09IDEgPyAnSmEnIDogJ05laW4nO1xyXG4gIH1cclxuXHJcbiAgLyoqIEtvbnZlcnRpZXJ0IGVpbiBNb21lbnQgT2JqZWN0IHp1IGVpbmVtIERhdGUgT2JqZWN0ICovXHJcbiAgLypwdWJsaWMgc3RhdGljIHRvSlNEYXRlKG1PYmplY3Q6IG1vbWVudC5Nb21lbnQpOiBEYXRlIHtcclxuICAgIGNvbnN0IG1EYXRlID0gVHlwZUNvbnZlcnRlci51dGNEYXRlKG1PYmplY3QpO1xyXG4gICAgaWYgKCFtRGF0ZSkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1EYXRlLnRvRGF0ZSgpO1xyXG4gIH0qL1xyXG5cclxuICAvKiogS292ZXJ0aWVydCBlaW5lbiBTdHJpbmcgaW4gZWluZW4gUmVnZXggdW0gZWluZSBWb2xsdGV4dHN1Y2hlIHp1IGVybcO2Z2xpY2hlbiAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgYXNSZWdleCh0ZXh0OiBzdHJpbmcpOiBSZWdFeHAge1xyXG4gICAgbGV0IGJ1aWxkZXJTdHJpbmcgPSAnJztcclxuICAgIGlmIChfLmlzRW1wdHkodGV4dCkpIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYnVpbGRlclN0cmluZyk7XHJcbiAgICB9XHJcbiAgICBfLmVhY2godGV4dC5zcGxpdCgnJyksIChjaGFyKSA9PiB7XHJcbiAgICAgIGJ1aWxkZXJTdHJpbmcgPSBidWlsZGVyU3RyaW5nICsgYCR7Y2hhcn1gO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChidWlsZGVyU3RyaW5nLnJlcGxhY2UoUkVHRVguU1BFQ0lBTF9DSEFSU19SRUdFWCwgJ1xcXFwkJicpLCAnaScpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBib29sZWFuVG9OdW1iZXIoYm9vbDogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gYm9vbCA9PT0gdHJ1ZSA/IDEgOiAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBudW1iZXJUb0Jvb2xlYW4oZGlnaXQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGRpZ2l0ID09PSAxO1xyXG4gIH1cclxuXHJcbiAgLyoqIEtvdmVydGllcnQgZWluZW4gU3RyaW5nLCBkZXIgZGVtIFJlZ2V4IGVpbmVyIFphaGwgZW50c3ByaWNodCwgaW4gZWluZSBaYWhsICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29udmVydElucHV0U3RyaW5nVG9OdW1iZXIodmFsdWU6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoJy4nKSkge1xyXG4gICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKCcsJykpIHtcclxuICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQodmFsdWUpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19