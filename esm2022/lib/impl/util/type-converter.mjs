import moment from 'moment';
import _ from 'underscore';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdXRpbC90eXBlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRTNCLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUd2QyxNQUFNLE9BQWdCLGFBQWE7SUFFekIsTUFBTSxDQUFVLFVBQVUsR0FBVyx5QkFBeUIsQ0FBQztJQUMvRCxNQUFNLENBQVUsZ0JBQWdCLEdBQVcseUJBQXlCLENBQUM7SUFFN0Usc0RBQXNEO0lBQy9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBc0I7UUFDM0MsNERBQTREO1FBQzVELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0Qsd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QseUhBQXlIO1FBQ3pILElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFlLENBQUMsRUFBRTtZQUMzRCxPQUFPLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxLQUFlLENBQUMsQ0FBQztTQUNsRTtRQUNELHVEQUF1RDtRQUN2RCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxpRkFBaUY7SUFDMUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFzQixFQUFFLE9BQWdCO1FBQ2xFLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3pDLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBRUQs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QUFDLENBQUM7U0FDbkQ7UUFDRCxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHtVdGlsfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHtSRUdFWH0gZnJvbSAnLi4vLi4vZW51bS9yZWdleCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFR5cGVDb252ZXJ0ZXIge1xuXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERBVEVfUkVHRVg6IFJlZ0V4cCA9IC8oXFxkezJ9KS4oXFxkezJ9KS4oXFxkezR9KS87XG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IERBVEVfUkVHRVhfSU5QVVQ6IFJlZ0V4cCA9IC8oXFxkezR9KS0oXFxkezJ9KS0oXFxkezJ9KS87XG5cbiAgLyoqIFZlcnN1Y2h0IGRlbiBXZXJ0IGluIGVpbmUgWmFobCB6dSBrb252ZXJ0aWVyZW4uICovXG4gIHB1YmxpYyBzdGF0aWMgdG9OdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB8IHN0cmluZyB7XG4gICAgLy8gRmFsbHMgbnVsbCBvZGVyIHVuZGVmaW5lZCDDvGJlcmdlYmVuIHd1cmRlLCBicmVjaGVuIHdpciBhYlxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgLy8gRmFsbHMgZGVyIFdlcnQgYmVyZWl0cyBlaW5lIFphaGwgaXN0LCBzaW5kIHdpciBmZXJ0aWdcbiAgICBpZiAoXy5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgLy8gRmFsbHMgZGVyIFdlcnQgZWluIFN0cmluZyBpc3QsIHRlc3RlbiB3aXIsIG9iIGVyIGF1c3NpZWh0IHdpZSBlaW5lIFphaGwgdW5kIHZlcnN1Y2hlbiBpaG4gYW5zY2hsaWXDn2VuZCB6dSBrb252ZXJ0aWVyZW5cbiAgICBpZiAoXy5pc1N0cmluZyh2YWx1ZSkgJiYgUkVHRVguTlVNQkVSLnRlc3QodmFsdWUgYXMgc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIFR5cGVDb252ZXJ0ZXIuY29udmVydElucHV0U3RyaW5nVG9OdW1iZXIodmFsdWUgYXMgc3RyaW5nKTtcbiAgICB9XG4gICAgLy8gV2lyIGhhYmVuIGtlaW5lIFJlZ2VsIGbDvHIgZGllIEtvbnZlcnRpZXJ1bmcgZ2VmdW5kZW5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKiogTmltbXQgZWluZSBaYWhsIHVuZCBnaWJ0IGVpbmUgZGV1dHNjaGUgUmVwcmVzZW50YXRpb24gZGllc2VzIFdlcnRlcyB6dXLDvGNrICovXG4gIHB1YmxpYyBzdGF0aWMgYXNHZXJtYW5GbG9hdCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBzdGVsbGVuPzogbnVtYmVyKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoc3RlbGxlbikgJiYgXy5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gKHZhbHVlIGFzIG51bWJlcikudG9GaXhlZChzdGVsbGVuKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcsJyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHRvTW9tZW50KHZhbHVlOiBzdHJpbmd8bW9tZW50Lk1vbWVudCk6IG1vbWVudC5Nb21lbnR8c3RyaW5nfHVuZGVmaW5lZCB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChtb21lbnQuaXNNb21lbnQodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWUudXRjKHRydWUpO1xuICAgIH1cbiAgICBpZiAoXy5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgIGlmIChUeXBlQ29udmVydGVyLkRBVEVfUkVHRVgudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSwgJ0RELk1NLllZWVknKS51dGModHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoVHlwZUNvbnZlcnRlci5EQVRFX1JFR0VYX0lOUFVULnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBtb21lbnQodmFsdWUsICdZWVlZLU1NLUREVEhIOm1tOlNTJykudXRjKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFzR2VybWFuRGF0ZSh2YWx1ZTogc3RyaW5nIHwgbW9tZW50Lk1vbWVudCk6IHN0cmluZ3x1bmRlZmluZWQge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBtRGF0ZSA9IFR5cGVDb252ZXJ0ZXIudG9Nb21lbnQodmFsdWUpO1xuICAgIGlmICghbW9tZW50LmlzTW9tZW50KG1EYXRlKSB8fCAhbURhdGUuaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG1EYXRlLmZvcm1hdCgnREQuTU0uWVlZWScpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhc0dlcm1hblRpbWUodmFsdWU6IHN0cmluZyB8IG1vbWVudC5Nb21lbnQsIHdpdGhTZWNvbmRzOiBib29sZWFuID0gZmFsc2UsIHdpdGhNaWxsaXNlY29uZHM6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZ3x1bmRlZmluZWQge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBtRGF0ZSA9IFR5cGVDb252ZXJ0ZXIudG9Nb21lbnQodmFsdWUpO1xuICAgIGlmICghbW9tZW50LmlzTW9tZW50KG1EYXRlKSB8fCAhbURhdGUuaXNWYWxpZCgpKSB7XG4gICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhNaWxsaXNlY29uZHMgPyBtRGF0ZS5mb3JtYXQoJ0hIOm1tOnNzLlNTUycpIDogd2l0aFNlY29uZHMgPyBtRGF0ZS5mb3JtYXQoJ0hIOm1tOnNzJykgOiBtRGF0ZS5mb3JtYXQoJ0hIOm1tJyk7XG4gIH1cbiAgLyoqIEVyemV1Z3QgZWluIG1vbWVudCBvYmplY3QgdW5kIHNldHp0IGRpZXNlcyBhdWYgVVRDLCBmYWxscyBkaWVzIG5vY2ggbmljaHQgZ2VzY2hlaGVuIGlzdC4gKi9cbiAgLypwdWJsaWMgc3RhdGljIHV0Y0RhdGUoLi4uYXJnczogYW55W10pOiBtb21lbnQuTW9tZW50IHtcbiAgICBjb25zdCBpc0RlZmluZWQgPSBfLmV2ZXJ5KGFyZ3MsIChhcmc6IGFueSkgPT4gVXRpbC5pc0RlZmluZWQoYXJnKSk7XG4gICAgaWYgKCFpc0RlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IG1PYmplY3QgPSBtb21lbnQoLi4uYXJncyk7XG4gICAgaWYgKG1PYmplY3QuaXNVVEMoKSkge1xuICAgICAgcmV0dXJuIG1PYmplY3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtT2JqZWN0LnV0Yyh0cnVlKTtcbiAgICB9XG4gIH0qL1xuICAvKiogS29udmVydGllcnQgZWluIG1vbWVudCBPYmplY3QgaW4gZGllIGxva2FsZSBaZWl0em9uZSAoRW50ZmVybnQgVVRDKSAqL1xuICAvKnB1YmxpYyBzdGF0aWMgdG9Mb2NhbERhdGUobU9iamVjdDogbW9tZW50Lk1vbWVudCk6IG1vbWVudC5Nb21lbnQge1xuICAgIGlmICghVXRpbC5pc0RlZmluZWQobU9iamVjdCkpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtID0gbW9tZW50KG1PYmplY3QpO1xuICAgIGlmIChwYXJhbS5pc1VUQygpKSB7XG4gICAgICByZXR1cm4gcGFyYW0ubG9jYWwodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwYXJhbTtcbiAgICB9XG4gIH0qL1xuXG4gIHB1YmxpYyBzdGF0aWMgYm9vbGVhbk51bWJlclRvU3RpbmcobjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbiA9PT0gMSA/ICdKYScgOiAnTmVpbic7XG4gIH1cblxuICAvKiogS29udmVydGllcnQgZWluIE1vbWVudCBPYmplY3QgenUgZWluZW0gRGF0ZSBPYmplY3QgKi9cbiAgLypwdWJsaWMgc3RhdGljIHRvSlNEYXRlKG1PYmplY3Q6IG1vbWVudC5Nb21lbnQpOiBEYXRlIHtcbiAgICBjb25zdCBtRGF0ZSA9IFR5cGVDb252ZXJ0ZXIudXRjRGF0ZShtT2JqZWN0KTtcbiAgICBpZiAoIW1EYXRlKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gbURhdGUudG9EYXRlKCk7XG4gIH0qL1xuXG4gIC8qKiBLb3ZlcnRpZXJ0IGVpbmVuIFN0cmluZyBpbiBlaW5lbiBSZWdleCB1bSBlaW5lIFZvbGx0ZXh0c3VjaGUgenUgZXJtw7ZnbGljaGVuICovXG4gIHB1YmxpYyBzdGF0aWMgYXNSZWdleCh0ZXh0OiBzdHJpbmcpOiBSZWdFeHAge1xuICAgIGxldCBidWlsZGVyU3RyaW5nID0gJyc7XG4gICAgaWYgKF8uaXNFbXB0eSh0ZXh0KSkge1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoYnVpbGRlclN0cmluZyk7XG4gICAgfVxuICAgIF8uZWFjaCh0ZXh0LnNwbGl0KCcnKSwgKGNoYXIpID0+IHtcbiAgICAgIGJ1aWxkZXJTdHJpbmcgPSBidWlsZGVyU3RyaW5nICsgYCR7Y2hhcn1gO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGJ1aWxkZXJTdHJpbmcucmVwbGFjZShSRUdFWC5TUEVDSUFMX0NIQVJTX1JFR0VYLCAnXFxcXCQmJyksICdpJyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGJvb2xlYW5Ub051bWJlcihib29sOiBib29sZWFuKTogbnVtYmVyIHtcbiAgICByZXR1cm4gYm9vbCA9PT0gdHJ1ZSA/IDEgOiAwO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBudW1iZXJUb0Jvb2xlYW4oZGlnaXQ6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBkaWdpdCA9PT0gMTtcbiAgfVxuXG4gIC8qKiBLb3ZlcnRpZXJ0IGVpbmVuIFN0cmluZywgZGVyIGRlbSBSZWdleCBlaW5lciBaYWhsIGVudHNwcmljaHQsIGluIGVpbmUgWmFobCAqL1xuICBwcml2YXRlIHN0YXRpYyBjb252ZXJ0SW5wdXRTdHJpbmdUb051bWJlcih2YWx1ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlLmluY2x1ZGVzKCcsJykpIHtcbiAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQodmFsdWUpO1xuICB9XG5cbn1cbiJdfQ==