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
                return moment(value, 'YYYY-MM-DDTHH:mm:SS').utc(true);
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
    static asGermanTime(value, withSeconds = false, withMilliseconds = false) {
        if (value === null || value === undefined) {
            return undefined;
        }
        const mDate = TypeConverter.toMoment(value);
        if (!moment.isMoment(mDate) || !mDate.isValid()) {
            return value.toString();
        }
        return withMilliseconds ? mDate.format('HH:mm:ss.SSS') : withSeconds ? mDate.format('HH:mm:ss') : mDate.format('HH:mm');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdXRpbC90eXBlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBR3ZDLE1BQU0sT0FBZ0IsYUFBYTtJQUV6QixNQUFNLENBQVUsVUFBVSxHQUFXLHlCQUF5QixDQUFDO0lBQy9ELE1BQU0sQ0FBVSxnQkFBZ0IsR0FBVyx5QkFBeUIsQ0FBQztJQUU3RSxzREFBc0Q7SUFDL0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFzQjtRQUMzQyw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx5SEFBeUg7UUFDekgsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQWUsQ0FBQyxFQUFFO1lBQzNELE9BQU8sYUFBYSxDQUFDLDBCQUEwQixDQUFDLEtBQWUsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsdURBQXVEO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlGQUFpRjtJQUMxRSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQXNCLEVBQUUsT0FBZ0I7UUFDbEUsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxTQUFTLENBQUM7U0FDbEI7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QUFDLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCB7UkVHRVh9IGZyb20gJy4uLy4uL2VudW0vcmVnZXgnO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUeXBlQ29udmVydGVyIHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREFURV9SRUdFWDogUmVnRXhwID0gLyhcXGR7Mn0pLihcXGR7Mn0pLihcXGR7NH0pLztcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBEQVRFX1JFR0VYX0lOUFVUOiBSZWdFeHAgPSAvKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSkvO1xyXG5cclxuICAvKiogVmVyc3VjaHQgZGVuIFdlcnQgaW4gZWluZSBaYWhsIHp1IGtvbnZlcnRpZXJlbi4gKi9cclxuICBwdWJsaWMgc3RhdGljIHRvTnVtYmVyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgLy8gRmFsbHMgbnVsbCBvZGVyIHVuZGVmaW5lZCDDvGJlcmdlYmVuIHd1cmRlLCBicmVjaGVuIHdpciBhYlxyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvLyBGYWxscyBkZXIgV2VydCBiZXJlaXRzIGVpbmUgWmFobCBpc3QsIHNpbmQgd2lyIGZlcnRpZ1xyXG4gICAgaWYgKF8uaXNOdW1iZXIodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8vIEZhbGxzIGRlciBXZXJ0IGVpbiBTdHJpbmcgaXN0LCB0ZXN0ZW4gd2lyLCBvYiBlciBhdXNzaWVodCB3aWUgZWluZSBaYWhsIHVuZCB2ZXJzdWNoZW4gaWhuIGFuc2NobGllw59lbmQgenUga29udmVydGllcmVuXHJcbiAgICBpZiAoXy5pc1N0cmluZyh2YWx1ZSkgJiYgUkVHRVguTlVNQkVSLnRlc3QodmFsdWUgYXMgc3RyaW5nKSkge1xyXG4gICAgICByZXR1cm4gVHlwZUNvbnZlcnRlci5jb252ZXJ0SW5wdXRTdHJpbmdUb051bWJlcih2YWx1ZSBhcyBzdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgLy8gV2lyIGhhYmVuIGtlaW5lIFJlZ2VsIGbDvHIgZGllIEtvbnZlcnRpZXJ1bmcgZ2VmdW5kZW5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBOaW1tdCBlaW5lIFphaGwgdW5kIGdpYnQgZWluZSBkZXV0c2NoZSBSZXByZXNlbnRhdGlvbiBkaWVzZXMgV2VydGVzIHp1csO8Y2sgKi9cclxuICBwdWJsaWMgc3RhdGljIGFzR2VybWFuRmxvYXQodmFsdWU6IG51bWJlciB8IHN0cmluZywgc3RlbGxlbj86IG51bWJlcik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghXy5pc1VuZGVmaW5lZChzdGVsbGVuKSAmJiBfLmlzTnVtYmVyKHZhbHVlKSkge1xyXG4gICAgICB2YWx1ZSA9ICh2YWx1ZSBhcyBudW1iZXIpLnRvRml4ZWQoc3RlbGxlbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJywnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdG9Nb21lbnQodmFsdWU6IHN0cmluZ3xtb21lbnQuTW9tZW50KTogbW9tZW50Lk1vbWVudHxzdHJpbmcge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmIChtb21lbnQuaXNNb21lbnQodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZS51dGModHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoXy5pc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgaWYgKFR5cGVDb252ZXJ0ZXIuREFURV9SRUdFWC50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiBtb21lbnQodmFsdWUsICdERC5NTS5ZWVlZJykudXRjKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChUeXBlQ29udmVydGVyLkRBVEVfUkVHRVhfSU5QVVQudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlLCAnWVlZWS1NTS1ERFRISDptbTpTUycpLnV0Yyh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBhc0dlcm1hbkRhdGUodmFsdWU6IHN0cmluZyB8IG1vbWVudC5Nb21lbnQpOiBzdHJpbmcge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG1EYXRlID0gVHlwZUNvbnZlcnRlci50b01vbWVudCh2YWx1ZSk7XHJcbiAgICBpZiAoIW1vbWVudC5pc01vbWVudChtRGF0ZSkgfHwgIW1EYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtRGF0ZS5mb3JtYXQoJ0RELk1NLllZWVknKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXNHZXJtYW5UaW1lKHZhbHVlOiBzdHJpbmcgfCBtb21lbnQuTW9tZW50LCB3aXRoU2Vjb25kczogYm9vbGVhbiA9IGZhbHNlLCB3aXRoTWlsbGlzZWNvbmRzOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG1EYXRlID0gVHlwZUNvbnZlcnRlci50b01vbWVudCh2YWx1ZSk7XHJcbiAgICBpZiAoIW1vbWVudC5pc01vbWVudChtRGF0ZSkgfHwgIW1EYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB3aXRoTWlsbGlzZWNvbmRzID8gbURhdGUuZm9ybWF0KCdISDptbTpzcy5TU1MnKSA6IHdpdGhTZWNvbmRzID8gbURhdGUuZm9ybWF0KCdISDptbTpzcycpIDogbURhdGUuZm9ybWF0KCdISDptbScpO1xyXG4gIH1cclxuICAvKiogRXJ6ZXVndCBlaW4gbW9tZW50IG9iamVjdCB1bmQgc2V0enQgZGllc2VzIGF1ZiBVVEMsIGZhbGxzIGRpZXMgbm9jaCBuaWNodCBnZXNjaGVoZW4gaXN0LiAqL1xyXG4gIC8qcHVibGljIHN0YXRpYyB1dGNEYXRlKC4uLmFyZ3M6IGFueVtdKTogbW9tZW50Lk1vbWVudCB7XHJcbiAgICBjb25zdCBpc0RlZmluZWQgPSBfLmV2ZXJ5KGFyZ3MsIChhcmc6IGFueSkgPT4gVXRpbC5pc0RlZmluZWQoYXJnKSk7XHJcbiAgICBpZiAoIWlzRGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbU9iamVjdCA9IG1vbWVudCguLi5hcmdzKTtcclxuICAgIGlmIChtT2JqZWN0LmlzVVRDKCkpIHtcclxuICAgICAgcmV0dXJuIG1PYmplY3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbU9iamVjdC51dGModHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSovXHJcbiAgLyoqIEtvbnZlcnRpZXJ0IGVpbiBtb21lbnQgT2JqZWN0IGluIGRpZSBsb2thbGUgWmVpdHpvbmUgKEVudGZlcm50IFVUQykgKi9cclxuICAvKnB1YmxpYyBzdGF0aWMgdG9Mb2NhbERhdGUobU9iamVjdDogbW9tZW50Lk1vbWVudCk6IG1vbWVudC5Nb21lbnQge1xyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZChtT2JqZWN0KSkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFyYW0gPSBtb21lbnQobU9iamVjdCk7XHJcbiAgICBpZiAocGFyYW0uaXNVVEMoKSkge1xyXG4gICAgICByZXR1cm4gcGFyYW0ubG9jYWwodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcGFyYW07XHJcbiAgICB9XHJcbiAgfSovXHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYm9vbGVhbk51bWJlclRvU3RpbmcobjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBuID09PSAxID8gJ0phJyA6ICdOZWluJztcclxuICB9XHJcblxyXG4gIC8qKiBLb252ZXJ0aWVydCBlaW4gTW9tZW50IE9iamVjdCB6dSBlaW5lbSBEYXRlIE9iamVjdCAqL1xyXG4gIC8qcHVibGljIHN0YXRpYyB0b0pTRGF0ZShtT2JqZWN0OiBtb21lbnQuTW9tZW50KTogRGF0ZSB7XHJcbiAgICBjb25zdCBtRGF0ZSA9IFR5cGVDb252ZXJ0ZXIudXRjRGF0ZShtT2JqZWN0KTtcclxuICAgIGlmICghbURhdGUpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHJldHVybiBtRGF0ZS50b0RhdGUoKTtcclxuICB9Ki9cclxuXHJcbiAgLyoqIEtvdmVydGllcnQgZWluZW4gU3RyaW5nIGluIGVpbmVuIFJlZ2V4IHVtIGVpbmUgVm9sbHRleHRzdWNoZSB6dSBlcm3DtmdsaWNoZW4gKi9cclxuICBwdWJsaWMgc3RhdGljIGFzUmVnZXgodGV4dDogc3RyaW5nKTogUmVnRXhwIHtcclxuICAgIGxldCBidWlsZGVyU3RyaW5nID0gJyc7XHJcbiAgICBpZiAoXy5pc0VtcHR5KHRleHQpKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKGJ1aWxkZXJTdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgXy5lYWNoKHRleHQuc3BsaXQoJycpLCAoY2hhcikgPT4ge1xyXG4gICAgICBidWlsZGVyU3RyaW5nID0gYnVpbGRlclN0cmluZyArIGAke2NoYXJ9YDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoYnVpbGRlclN0cmluZy5yZXBsYWNlKFJFR0VYLlNQRUNJQUxfQ0hBUlNfUkVHRVgsICdcXFxcJCYnKSwgJ2knKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYm9vbGVhblRvTnVtYmVyKGJvb2w6IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGJvb2wgPT09IHRydWUgPyAxIDogMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbnVtYmVyVG9Cb29sZWFuKGRpZ2l0OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBkaWdpdCA9PT0gMTtcclxuICB9XHJcblxyXG4gIC8qKiBLb3ZlcnRpZXJ0IGVpbmVuIFN0cmluZywgZGVyIGRlbSBSZWdleCBlaW5lciBaYWhsIGVudHNwcmljaHQsIGluIGVpbmUgWmFobCAqL1xyXG4gIHByaXZhdGUgc3RhdGljIGNvbnZlcnRJbnB1dFN0cmluZ1RvTnVtYmVyKHZhbHVlOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKCcuJykpIHtcclxuICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnLCcpKSB7XHJcbiAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHZhbHVlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==