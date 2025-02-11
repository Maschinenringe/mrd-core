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
        if (!value) {
            return null;
        }
        if (moment.isMoment(value)) {
            return value;
        }
        if (_.isString(value)) {
            if (TypeConverter.DATE_REGEX.test(value)) {
                return moment(value, 'DD.MM.YYYY');
            }
            if (TypeConverter.DATE_REGEX_INPUT.test(value)) {
                return moment(value, 'YYYY-MM-DD');
            }
        }
        return moment(value);
    }
    static asGermanDate(value) {
        if (!value) {
            return undefined;
        }
        const mDate = TypeConverter.toMoment(value);
        if (!mDate.isValid()) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdXRpbC90eXBlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBR3ZDLE1BQU0sT0FBZ0IsYUFBYTtJQUV6QixNQUFNLENBQVUsVUFBVSxHQUFXLHlCQUF5QixDQUFDO0lBQy9ELE1BQU0sQ0FBVSxnQkFBZ0IsR0FBVyx5QkFBeUIsQ0FBQztJQUU3RSxzREFBc0Q7SUFDL0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFzQjtRQUMzQyw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx5SEFBeUg7UUFDekgsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQWUsQ0FBQyxFQUFFO1lBQzNELE9BQU8sYUFBYSxDQUFDLDBCQUEwQixDQUFDLEtBQWUsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsdURBQXVEO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlGQUFpRjtJQUMxRSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQXNCLEVBQUUsT0FBZ0I7UUFDbEUsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxTQUFTLENBQUM7U0FDbEI7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QixDQUFDLEtBQWE7UUFDckQsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCB7UkVHRVh9IGZyb20gJy4uLy4uL2VudW0vcmVnZXgnO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUeXBlQ29udmVydGVyIHtcclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREFURV9SRUdFWDogUmVnRXhwID0gLyhcXGR7Mn0pLihcXGR7Mn0pLihcXGR7NH0pLztcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBEQVRFX1JFR0VYX0lOUFVUOiBSZWdFeHAgPSAvKFxcZHs0fSktKFxcZHsyfSktKFxcZHsyfSkvO1xyXG5cclxuICAvKiogVmVyc3VjaHQgZGVuIFdlcnQgaW4gZWluZSBaYWhsIHp1IGtvbnZlcnRpZXJlbi4gKi9cclxuICBwdWJsaWMgc3RhdGljIHRvTnVtYmVyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIgfCBzdHJpbmcge1xyXG4gICAgLy8gRmFsbHMgbnVsbCBvZGVyIHVuZGVmaW5lZCDDvGJlcmdlYmVuIHd1cmRlLCBicmVjaGVuIHdpciBhYlxyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvLyBGYWxscyBkZXIgV2VydCBiZXJlaXRzIGVpbmUgWmFobCBpc3QsIHNpbmQgd2lyIGZlcnRpZ1xyXG4gICAgaWYgKF8uaXNOdW1iZXIodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8vIEZhbGxzIGRlciBXZXJ0IGVpbiBTdHJpbmcgaXN0LCB0ZXN0ZW4gd2lyLCBvYiBlciBhdXNzaWVodCB3aWUgZWluZSBaYWhsIHVuZCB2ZXJzdWNoZW4gaWhuIGFuc2NobGllw59lbmQgenUga29udmVydGllcmVuXHJcbiAgICBpZiAoXy5pc1N0cmluZyh2YWx1ZSkgJiYgUkVHRVguTlVNQkVSLnRlc3QodmFsdWUgYXMgc3RyaW5nKSkge1xyXG4gICAgICByZXR1cm4gVHlwZUNvbnZlcnRlci5jb252ZXJ0SW5wdXRTdHJpbmdUb051bWJlcih2YWx1ZSBhcyBzdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgLy8gV2lyIGhhYmVuIGtlaW5lIFJlZ2VsIGbDvHIgZGllIEtvbnZlcnRpZXJ1bmcgZ2VmdW5kZW5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBOaW1tdCBlaW5lIFphaGwgdW5kIGdpYnQgZWluZSBkZXV0c2NoZSBSZXByZXNlbnRhdGlvbiBkaWVzZXMgV2VydGVzIHp1csO8Y2sgKi9cclxuICBwdWJsaWMgc3RhdGljIGFzR2VybWFuRmxvYXQodmFsdWU6IG51bWJlciB8IHN0cmluZywgc3RlbGxlbj86IG51bWJlcik6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghXy5pc1VuZGVmaW5lZChzdGVsbGVuKSAmJiBfLmlzTnVtYmVyKHZhbHVlKSkge1xyXG4gICAgICB2YWx1ZSA9ICh2YWx1ZSBhcyBudW1iZXIpLnRvRml4ZWQoc3RlbGxlbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJywnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdG9Nb21lbnQodmFsdWU6IHN0cmluZ3xtb21lbnQuTW9tZW50KTogbW9tZW50Lk1vbWVudCB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKG1vbWVudC5pc01vbWVudCh2YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKF8uaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgIGlmIChUeXBlQ29udmVydGVyLkRBVEVfUkVHRVgudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlLCAnREQuTU0uWVlZWScpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChUeXBlQ29udmVydGVyLkRBVEVfUkVHRVhfSU5QVVQudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlLCAnWVlZWS1NTS1ERCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW9tZW50KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXNHZXJtYW5EYXRlKHZhbHVlOiBzdHJpbmcgfCBtb21lbnQuTW9tZW50KTogc3RyaW5nIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG1EYXRlID0gVHlwZUNvbnZlcnRlci50b01vbWVudCh2YWx1ZSk7XHJcbiAgICBpZiAoIW1EYXRlLmlzVmFsaWQoKSkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1EYXRlLmZvcm1hdCgnREQuTU0uWVlZWScpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEVyemV1Z3QgZWluIG1vbWVudCBvYmplY3QgdW5kIHNldHp0IGRpZXNlcyBhdWYgVVRDLCBmYWxscyBkaWVzIG5vY2ggbmljaHQgZ2VzY2hlaGVuIGlzdC4gKi9cclxuICAvKnB1YmxpYyBzdGF0aWMgdXRjRGF0ZSguLi5hcmdzOiBhbnlbXSk6IG1vbWVudC5Nb21lbnQge1xyXG4gICAgY29uc3QgaXNEZWZpbmVkID0gXy5ldmVyeShhcmdzLCAoYXJnOiBhbnkpID0+IFV0aWwuaXNEZWZpbmVkKGFyZykpO1xyXG4gICAgaWYgKCFpc0RlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG1PYmplY3QgPSBtb21lbnQoLi4uYXJncyk7XHJcbiAgICBpZiAobU9iamVjdC5pc1VUQygpKSB7XHJcbiAgICAgIHJldHVybiBtT2JqZWN0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1PYmplY3QudXRjKHRydWUpO1xyXG4gICAgfVxyXG4gIH0qL1xyXG4gIC8qKiBLb252ZXJ0aWVydCBlaW4gbW9tZW50IE9iamVjdCBpbiBkaWUgbG9rYWxlIFplaXR6b25lIChFbnRmZXJudCBVVEMpICovXHJcbiAgLypwdWJsaWMgc3RhdGljIHRvTG9jYWxEYXRlKG1PYmplY3Q6IG1vbWVudC5Nb21lbnQpOiBtb21lbnQuTW9tZW50IHtcclxuICAgIGlmICghVXRpbC5pc0RlZmluZWQobU9iamVjdCkpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhcmFtID0gbW9tZW50KG1PYmplY3QpO1xyXG4gICAgaWYgKHBhcmFtLmlzVVRDKCkpIHtcclxuICAgICAgcmV0dXJuIHBhcmFtLmxvY2FsKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHBhcmFtO1xyXG4gICAgfVxyXG4gIH0qL1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGJvb2xlYW5OdW1iZXJUb1N0aW5nKG46IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbiA9PT0gMSA/ICdKYScgOiAnTmVpbic7XHJcbiAgfVxyXG5cclxuICAvKiogS29udmVydGllcnQgZWluIE1vbWVudCBPYmplY3QgenUgZWluZW0gRGF0ZSBPYmplY3QgKi9cclxuICAvKnB1YmxpYyBzdGF0aWMgdG9KU0RhdGUobU9iamVjdDogbW9tZW50Lk1vbWVudCk6IERhdGUge1xyXG4gICAgY29uc3QgbURhdGUgPSBUeXBlQ29udmVydGVyLnV0Y0RhdGUobU9iamVjdCk7XHJcbiAgICBpZiAoIW1EYXRlKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbURhdGUudG9EYXRlKCk7XHJcbiAgfSovXHJcblxyXG4gIC8qKiBLb3ZlcnRpZXJ0IGVpbmVuIFN0cmluZyBpbiBlaW5lbiBSZWdleCB1bSBlaW5lIFZvbGx0ZXh0c3VjaGUgenUgZXJtw7ZnbGljaGVuICovXHJcbiAgcHVibGljIHN0YXRpYyBhc1JlZ2V4KHRleHQ6IHN0cmluZyk6IFJlZ0V4cCB7XHJcbiAgICBsZXQgYnVpbGRlclN0cmluZyA9ICcnO1xyXG4gICAgaWYgKF8uaXNFbXB0eSh0ZXh0KSkge1xyXG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChidWlsZGVyU3RyaW5nKTtcclxuICAgIH1cclxuICAgIF8uZWFjaCh0ZXh0LnNwbGl0KCcnKSwgKGNoYXIpID0+IHtcclxuICAgICAgYnVpbGRlclN0cmluZyA9IGJ1aWxkZXJTdHJpbmcgKyBgJHtjaGFyfWA7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKGJ1aWxkZXJTdHJpbmcucmVwbGFjZShSRUdFWC5TUEVDSUFMX0NIQVJTX1JFR0VYLCAnXFxcXCQmJyksICdpJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGJvb2xlYW5Ub051bWJlcihib29sOiBib29sZWFuKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBib29sID09PSB0cnVlID8gMSA6IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG51bWJlclRvQm9vbGVhbihkaWdpdDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZGlnaXQgPT09IDE7XHJcbiAgfVxyXG5cclxuICAvKiogS292ZXJ0aWVydCBlaW5lbiBTdHJpbmcsIGRlciBkZW0gUmVnZXggZWluZXIgWmFobCBlbnRzcHJpY2h0LCBpbiBlaW5lIFphaGwgKi9cclxuICBwcml2YXRlIHN0YXRpYyBjb252ZXJ0SW5wdXRTdHJpbmdUb051bWJlcih2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnLicpKSB7XHJcbiAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoJywnKSkge1xyXG4gICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUludCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=