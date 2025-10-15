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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdXRpbC90eXBlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFFaEMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBR3ZDLE1BQU0sT0FBZ0IsYUFBYTtJQUV6QixNQUFNLENBQVUsVUFBVSxHQUFXLHlCQUF5QixDQUFDO0lBQy9ELE1BQU0sQ0FBVSxnQkFBZ0IsR0FBVyx5QkFBeUIsQ0FBQztJQUU3RSxzREFBc0Q7SUFDL0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFzQjtRQUMzQyw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCx5SEFBeUg7UUFDekgsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQWUsQ0FBQyxFQUFFO1lBQzNELE9BQU8sYUFBYSxDQUFDLDBCQUEwQixDQUFDLEtBQWUsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsdURBQXVEO1FBQ3ZELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlGQUFpRjtJQUMxRSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQXNCLEVBQUUsT0FBZ0I7UUFDbEUsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDekMsT0FBTyxTQUFTLENBQUM7U0FDbEI7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QyxDQUFDLENBQUM7U0FDbkQ7UUFDRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuL3V0aWwnO1xyXG5pbXBvcnQge1JFR0VYfSBmcm9tICcuLi8uLi9lbnVtL3JlZ2V4JztcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHlwZUNvbnZlcnRlciB7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERBVEVfUkVHRVg6IFJlZ0V4cCA9IC8oXFxkezJ9KS4oXFxkezJ9KS4oXFxkezR9KS87XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgREFURV9SRUdFWF9JTlBVVDogUmVnRXhwID0gLyhcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pLztcclxuXHJcbiAgLyoqIFZlcnN1Y2h0IGRlbiBXZXJ0IGluIGVpbmUgWmFobCB6dSBrb252ZXJ0aWVyZW4uICovXHJcbiAgcHVibGljIHN0YXRpYyB0b051bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHwgc3RyaW5nIHtcclxuICAgIC8vIEZhbGxzIG51bGwgb2RlciB1bmRlZmluZWQgw7xiZXJnZWJlbiB3dXJkZSwgYnJlY2hlbiB3aXIgYWJcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLy8gRmFsbHMgZGVyIFdlcnQgYmVyZWl0cyBlaW5lIFphaGwgaXN0LCBzaW5kIHdpciBmZXJ0aWdcclxuICAgIGlmIChfLmlzTnVtYmVyKHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvLyBGYWxscyBkZXIgV2VydCBlaW4gU3RyaW5nIGlzdCwgdGVzdGVuIHdpciwgb2IgZXIgYXVzc2llaHQgd2llIGVpbmUgWmFobCB1bmQgdmVyc3VjaGVuIGlobiBhbnNjaGxpZcOfZW5kIHp1IGtvbnZlcnRpZXJlblxyXG4gICAgaWYgKF8uaXNTdHJpbmcodmFsdWUpICYmIFJFR0VYLk5VTUJFUi50ZXN0KHZhbHVlIGFzIHN0cmluZykpIHtcclxuICAgICAgcmV0dXJuIFR5cGVDb252ZXJ0ZXIuY29udmVydElucHV0U3RyaW5nVG9OdW1iZXIodmFsdWUgYXMgc3RyaW5nKTtcclxuICAgIH1cclxuICAgIC8vIFdpciBoYWJlbiBrZWluZSBSZWdlbCBmw7xyIGRpZSBLb252ZXJ0aWVydW5nIGdlZnVuZGVuXHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogTmltbXQgZWluZSBaYWhsIHVuZCBnaWJ0IGVpbmUgZGV1dHNjaGUgUmVwcmVzZW50YXRpb24gZGllc2VzIFdlcnRlcyB6dXLDvGNrICovXHJcbiAgcHVibGljIHN0YXRpYyBhc0dlcm1hbkZsb2F0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIHN0ZWxsZW4/OiBudW1iZXIpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoc3RlbGxlbikgJiYgXy5pc051bWJlcih2YWx1ZSkpIHtcclxuICAgICAgdmFsdWUgPSAodmFsdWUgYXMgbnVtYmVyKS50b0ZpeGVkKHN0ZWxsZW4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRvTW9tZW50KHZhbHVlOiBzdHJpbmd8bW9tZW50Lk1vbWVudCk6IG1vbWVudC5Nb21lbnR8c3RyaW5nIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBpZiAobW9tZW50LmlzTW9tZW50KHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gdmFsdWUudXRjKHRydWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKF8uaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgIGlmIChUeXBlQ29udmVydGVyLkRBVEVfUkVHRVgudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlLCAnREQuTU0uWVlZWScpLnV0Yyh0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoVHlwZUNvbnZlcnRlci5EQVRFX1JFR0VYX0lOUFVULnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSwgJ1lZWVktTU0tREQnKS51dGModHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgYXNHZXJtYW5EYXRlKHZhbHVlOiBzdHJpbmcgfCBtb21lbnQuTW9tZW50KTogc3RyaW5nIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtRGF0ZSA9IFR5cGVDb252ZXJ0ZXIudG9Nb21lbnQodmFsdWUpO1xyXG4gICAgaWYgKCFtb21lbnQuaXNNb21lbnQobURhdGUpIHx8ICFtRGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbURhdGUuZm9ybWF0KCdERC5NTS5ZWVlZJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGFzR2VybWFuVGltZSh2YWx1ZTogc3RyaW5nIHwgbW9tZW50Lk1vbWVudCwgd2l0aFNlY29uZHM6IGJvb2xlYW4gPSBmYWxzZSwgd2l0aE1pbGxpc2Vjb25kczogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtRGF0ZSA9IFR5cGVDb252ZXJ0ZXIudG9Nb21lbnQodmFsdWUpO1xyXG4gICAgaWYgKCFtb21lbnQuaXNNb21lbnQobURhdGUpIHx8ICFtRGF0ZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gd2l0aE1pbGxpc2Vjb25kcyA/IG1EYXRlLmZvcm1hdCgnSEg6bW06c3MuU1NTJykgOiB3aXRoU2Vjb25kcyA/IG1EYXRlLmZvcm1hdCgnSEg6bW06c3MnKSA6IG1EYXRlLmZvcm1hdCgnSEg6bW0nKTtcclxuICB9XHJcbiAgLyoqIEVyemV1Z3QgZWluIG1vbWVudCBvYmplY3QgdW5kIHNldHp0IGRpZXNlcyBhdWYgVVRDLCBmYWxscyBkaWVzIG5vY2ggbmljaHQgZ2VzY2hlaGVuIGlzdC4gKi9cclxuICAvKnB1YmxpYyBzdGF0aWMgdXRjRGF0ZSguLi5hcmdzOiBhbnlbXSk6IG1vbWVudC5Nb21lbnQge1xyXG4gICAgY29uc3QgaXNEZWZpbmVkID0gXy5ldmVyeShhcmdzLCAoYXJnOiBhbnkpID0+IFV0aWwuaXNEZWZpbmVkKGFyZykpO1xyXG4gICAgaWYgKCFpc0RlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG1PYmplY3QgPSBtb21lbnQoLi4uYXJncyk7XHJcbiAgICBpZiAobU9iamVjdC5pc1VUQygpKSB7XHJcbiAgICAgIHJldHVybiBtT2JqZWN0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1PYmplY3QudXRjKHRydWUpO1xyXG4gICAgfVxyXG4gIH0qL1xyXG4gIC8qKiBLb252ZXJ0aWVydCBlaW4gbW9tZW50IE9iamVjdCBpbiBkaWUgbG9rYWxlIFplaXR6b25lIChFbnRmZXJudCBVVEMpICovXHJcbiAgLypwdWJsaWMgc3RhdGljIHRvTG9jYWxEYXRlKG1PYmplY3Q6IG1vbWVudC5Nb21lbnQpOiBtb21lbnQuTW9tZW50IHtcclxuICAgIGlmICghVXRpbC5pc0RlZmluZWQobU9iamVjdCkpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhcmFtID0gbW9tZW50KG1PYmplY3QpO1xyXG4gICAgaWYgKHBhcmFtLmlzVVRDKCkpIHtcclxuICAgICAgcmV0dXJuIHBhcmFtLmxvY2FsKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHBhcmFtO1xyXG4gICAgfVxyXG4gIH0qL1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGJvb2xlYW5OdW1iZXJUb1N0aW5nKG46IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbiA9PT0gMSA/ICdKYScgOiAnTmVpbic7XHJcbiAgfVxyXG5cclxuICAvKiogS29udmVydGllcnQgZWluIE1vbWVudCBPYmplY3QgenUgZWluZW0gRGF0ZSBPYmplY3QgKi9cclxuICAvKnB1YmxpYyBzdGF0aWMgdG9KU0RhdGUobU9iamVjdDogbW9tZW50Lk1vbWVudCk6IERhdGUge1xyXG4gICAgY29uc3QgbURhdGUgPSBUeXBlQ29udmVydGVyLnV0Y0RhdGUobU9iamVjdCk7XHJcbiAgICBpZiAoIW1EYXRlKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbURhdGUudG9EYXRlKCk7XHJcbiAgfSovXHJcblxyXG4gIC8qKiBLb3ZlcnRpZXJ0IGVpbmVuIFN0cmluZyBpbiBlaW5lbiBSZWdleCB1bSBlaW5lIFZvbGx0ZXh0c3VjaGUgenUgZXJtw7ZnbGljaGVuICovXHJcbiAgcHVibGljIHN0YXRpYyBhc1JlZ2V4KHRleHQ6IHN0cmluZyk6IFJlZ0V4cCB7XHJcbiAgICBsZXQgYnVpbGRlclN0cmluZyA9ICcnO1xyXG4gICAgaWYgKF8uaXNFbXB0eSh0ZXh0KSkge1xyXG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChidWlsZGVyU3RyaW5nKTtcclxuICAgIH1cclxuICAgIF8uZWFjaCh0ZXh0LnNwbGl0KCcnKSwgKGNoYXIpID0+IHtcclxuICAgICAgYnVpbGRlclN0cmluZyA9IGJ1aWxkZXJTdHJpbmcgKyBgJHtjaGFyfWA7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKGJ1aWxkZXJTdHJpbmcucmVwbGFjZShSRUdFWC5TUEVDSUFMX0NIQVJTX1JFR0VYLCAnXFxcXCQmJyksICdpJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGJvb2xlYW5Ub051bWJlcihib29sOiBib29sZWFuKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBib29sID09PSB0cnVlID8gMSA6IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG51bWJlclRvQm9vbGVhbihkaWdpdDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZGlnaXQgPT09IDE7XHJcbiAgfVxyXG5cclxuICAvKiogS292ZXJ0aWVydCBlaW5lbiBTdHJpbmcsIGRlciBkZW0gUmVnZXggZWluZXIgWmFobCBlbnRzcHJpY2h0LCBpbiBlaW5lIFphaGwgKi9cclxuICBwcml2YXRlIHN0YXRpYyBjb252ZXJ0SW5wdXRTdHJpbmdUb051bWJlcih2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnLicpKSB7XHJcbiAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoJywnKSkge1xyXG4gICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUludCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=