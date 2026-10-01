import { AccessableFormControl } from '../../abstract/validation/accessable-form-control';
import { TypeConverter } from '../util/type-converter';
import { Util } from '../util/util';
import { REGEX } from '../../enum/regex';
import _ from 'underscore';
import { ValidatorFloat } from './validator-float';
export class AccessableControlFactory {
    static simpleControl(formState = null, validators) {
        const control = new AccessableFormControl();
        control.initialize(formState, validators);
        return control;
    }
    static numberControl(formState = null, validators) {
        const control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = TypeConverter.asGermanFloat;
        control.convertTo = TypeConverter.toNumber;
        control.setValue(formState);
        return control;
    }
    static numberBooleanControl(formState = null, validators) {
        const control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = TypeConverter.numberToBoolean;
        control.convertTo = TypeConverter.booleanToNumber;
        control.setValue(formState);
        return control;
    }
    static numberDigitsControl(formState = null, validators, digits = 3) {
        const control = AccessableControlFactory.simpleControl(null, validators);
        control.showAs = (n) => {
            return TypeConverter.asGermanFloat(n, digits);
        };
        control.convertTo = TypeConverter.toNumber;
        control.setValue(formState);
        return control;
    }
    /**
       * Erzeuge eine AccessableFormControl für eine Zahl mit {digits} oder {minDigits}/{maxDigits} Nachkommastellen und einem Tausenderpunkt.
       */
    static numberDigitsExtendedControl(formState = null, validators, digits = 3, minDigits, maxDigits = 100) {
        let validatorFloat = _.find(validators, (v) => v instanceof ValidatorFloat);
        if (!Util.isDefined(validatorFloat)) {
            validatorFloat = new ValidatorFloat(undefined, digits ?? maxDigits);
            validators.push(validatorFloat);
        }
        const control = AccessableControlFactory.simpleControl(null, validators);
        if (true) { // !trennpunkt
            control.showAs = (n) => {
                if (Util.isDefined(digits)) {
                    return TypeConverter.asGermanFloat(n, digits);
                }
                else if (Util.isDefined(minDigits) && Util.isDefined(maxDigits)) {
                    if (!Util.isDefined(n)) {
                        return undefined;
                    }
                    if (!_.isNumber(n) || _.isNaN(Number(n))) {
                        return n.toString();
                    }
                    return Number(Number(n).toFixed(maxDigits)).toLocaleString('de-DE', {
                        minimumFractionDigits: minDigits,
                        maximumFractionDigits: maxDigits
                    }).replace('.', '');
                }
                else {
                    return TypeConverter.asGermanFloat(n);
                }
            };
            control.convertTo = TypeConverter.toNumber;
        }
        else {
            control.showAs = (n) => {
                if (!Util.isDefined(n)) {
                    return undefined;
                }
                if (!_.isNumber(n) || _.isNaN(Number(n))) {
                    return n.toString();
                }
                if (Util.isDefined(digits)) {
                    minDigits = digits;
                    maxDigits = digits;
                }
                else if (!Util.isDefined(minDigits) && !Util.isDefined(maxDigits)) {
                    minDigits = 3;
                    maxDigits = 3;
                }
                return Number(Number(n).toFixed(maxDigits)).toLocaleString('de-DE', {
                    minimumFractionDigits: minDigits,
                    maximumFractionDigits: maxDigits
                });
            };
            control.convertTo = (value) => {
                // Falls null oder undefined übergeben wurde, brechen wir ab
                if (!value) {
                    return value;
                }
                // Falls der Wert bereits eine Zahl ist, sind wir fertig
                if (_.isNumber(value)) {
                    return value;
                }
                // Falls der Wert ein String ist, testen wir, ob er aussieht wie eine Zahl und versuchen ihn anschließend zu konvertieren
                if (_.isString(value) && REGEX.ALL_NUMBERS.test(value)) {
                    return Number.parseFloat(value.replace(/\./g, '').replace(',', '.'));
                }
                // Wir haben keine Regel für die Konvertierung gefunden
                return value;
            };
        }
        control.setValue(formState);
        return control;
    }
    static dateControl(formState = null, validators) {
        const control = AccessableControlFactory.simpleControl(formState, validators);
        return control;
    }
    static momentDateControl(formState = null, validators) {
        const control = AccessableControlFactory.simpleControl(null, validators);
        control.showAs = TypeConverter.asGermanDate;
        control.convertTo = TypeConverter.toMoment;
        control.setValue(formState);
        return control;
    }
    static momentTimeControl(formState = null, validators, withSeconds = false, withMilliseconds = false) {
        const control = AccessableControlFactory.simpleControl(null, validators);
        control.showAs = (v) => {
            return TypeConverter.asGermanTime(v, withSeconds, withMilliseconds);
        };
        control.convertTo = TypeConverter.toMoment;
        control.setValue(formState);
        return control;
    }
    /** Schneides alle Whitespaces am Ende und Anfang weg */
    static trimControl(formState = null, validators) {
        const control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = (str) => {
            if (Util.isDefined(str)) {
                return str.trim();
            }
            return str;
        };
        control.convertTo = (str) => {
            if (Util.isDefined(str)) {
                return str.trim();
            }
            return str;
        };
        return control;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1jb250cm9sLWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWNvbnRyb2wtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNsQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekMsT0FBTyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQzNCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUduRCxNQUFNLE9BQWdCLHdCQUF3QjtJQUVyQyxNQUFNLENBQUMsYUFBYSxDQUN6QixZQUFpQixJQUFJLEVBQ3JCLFVBQXdCO1FBRXhCLE1BQU0sT0FBTyxHQUFHLElBQUkscUJBQXFCLEVBQUUsQ0FBQztRQUM1QyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMxQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU0sTUFBTSxDQUFDLGFBQWEsQ0FDekIsWUFBaUIsSUFBSSxFQUNyQixVQUF3QjtRQUV4QixNQUFNLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM3QyxPQUFPLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDM0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixPQUFP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RyxDQUFDO1FBQ2IsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7QWNjZXNzYWJsZUZvcm1Db250cm9sfSBmcm9tICcuLi8uLi9hYnN0cmFjdC92YWxpZGF0aW9uL2FjY2Vzc2FibGUtZm9ybS1jb250cm9sJztcclxuaW1wb3J0IHtUeXBlQ29udmVydGVyfSBmcm9tICcuLi91dGlsL3R5cGUtY29udmVydGVyJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi91dGlsL3V0aWwnO1xyXG5pbXBvcnQgeyBSRUdFWCB9IGZyb20gJy4uLy4uL2VudW0vcmVnZXgnO1xyXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHsgVmFsaWRhdG9yRmxvYXQgfSBmcm9tICcuL3ZhbGlkYXRvci1mbG9hdCc7XHJcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5IHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBzaW1wbGVDb250cm9sKFxyXG4gICAgZm9ybVN0YXRlOiBhbnkgPSBudWxsLFxyXG4gICAgdmFsaWRhdG9yczogSVZhbGlkYXRvcltdXHJcbiAgKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgQWNjZXNzYWJsZUZvcm1Db250cm9sKCk7XHJcbiAgICBjb250cm9sLmluaXRpYWxpemUoZm9ybVN0YXRlLCB2YWxpZGF0b3JzKTtcclxuICAgIHJldHVybiBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBudW1iZXJDb250cm9sKFxyXG4gICAgZm9ybVN0YXRlOiBhbnkgPSBudWxsLFxyXG4gICAgdmFsaWRhdG9yczogSVZhbGlkYXRvcltdXHJcbiAgKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBBY2Nlc3NhYmxlQ29udHJvbEZhY3Rvcnkuc2ltcGxlQ29udHJvbChmb3JtU3RhdGUsIHZhbGlkYXRvcnMpO1xyXG4gICAgY29udHJvbC5zaG93QXMgPSBUeXBlQ29udmVydGVyLmFzR2VybWFuRmxvYXQ7XHJcbiAgICBjb250cm9sLmNvbnZlcnRUbyA9IFR5cGVDb252ZXJ0ZXIudG9OdW1iZXI7XHJcbiAgICBjb250cm9sLnNldFZhbHVlKGZvcm1TdGF0ZSk7XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbnVtYmVyQm9vbGVhbkNvbnRyb2woXHJcbiAgICBmb3JtU3RhdGU6IGFueSA9IG51bGwsXHJcbiAgICB2YWxpZGF0b3JzOiBJVmFsaWRhdG9yW11cclxuICApOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xyXG4gICAgY29uc3QgY29udHJvbCA9IEFjY2Vzc2FibGVDb250cm9sRmFjdG9yeS5zaW1wbGVDb250cm9sKGZvcm1TdGF0ZSwgdmFsaWRhdG9ycyk7XHJcbiAgICBjb250cm9sLnNob3dBcyA9IFR5cGVDb252ZXJ0ZXIubnVtYmVyVG9Cb29sZWFuO1xyXG4gICAgY29udHJvbC5jb252ZXJ0VG8gPSBUeXBlQ29udmVydGVyLmJvb2xlYW5Ub051bWJlcjtcclxuICAgIGNvbnRyb2wuc2V0VmFsdWUoZm9ybVN0YXRlKTtcclxuICAgIHJldHVybiBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBudW1iZXJEaWdpdHNDb250cm9sKFxyXG4gICAgZm9ybVN0YXRlOiBhbnkgPSBudWxsLFxyXG4gICAgdmFsaWRhdG9yczogSVZhbGlkYXRvcltdLFxyXG4gICAgZGlnaXRzOiBudW1iZXIgPSAzXHJcbiAgKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBBY2Nlc3NhYmxlQ29udHJvbEZhY3Rvcnkuc2ltcGxlQ29udHJvbChudWxsLCB2YWxpZGF0b3JzKTtcclxuICAgIGNvbnRyb2wuc2hvd0FzID0gKG46IG51bWJlcik6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwgPT4ge1xyXG4gICAgICByZXR1cm4gVHlwZUNvbnZlcnRlci5hc0dlcm1hbkZsb2F0KG4sIGRpZ2l0cyk7XHJcbiAgICB9O1xyXG4gICAgY29udHJvbC5jb252ZXJ0VG8gPSBUeXBlQ29udmVydGVyLnRvTnVtYmVyO1xyXG4gICAgY29udHJvbC5zZXRWYWx1ZShmb3JtU3RhdGUpO1xyXG4gICAgcmV0dXJuIGNvbnRyb2w7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICAqIEVyemV1Z2UgZWluZSBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wgZsO8ciBlaW5lIFphaGwgbWl0IHtkaWdpdHN9IG9kZXIge21pbkRpZ2l0c30ve21heERpZ2l0c30gTmFjaGtvbW1hc3RlbGxlbiB1bmQgZWluZW0gVGF1c2VuZGVycHVua3QuXHJcbiAgICAgKi9cclxuICBwdWJsaWMgc3RhdGljIG51bWJlckRpZ2l0c0V4dGVuZGVkQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogYW55ID0gbnVsbCxcclxuICAgIHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXSxcclxuICAgIGRpZ2l0czogbnVtYmVyID0gMyxcclxuICAgIG1pbkRpZ2l0cz86IG51bWJlcixcclxuICAgIG1heERpZ2l0czogbnVtYmVyID0gMTAwLFxyXG4gICAgLy8gdHJlbm5wdW5rdDogYm9vbGVhbiA9IGZhbHNlLCAvLyBLbGFwcHQgbm9jaCBuaWNodFxyXG4gICk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBsZXQgdmFsaWRhdG9yRmxvYXQ6IFZhbGlkYXRvckZsb2F0fHVuZGVmaW5lZCA9IF8uZmluZCh2YWxpZGF0b3JzLCAodjogSVZhbGlkYXRvcikgPT4gdiBpbnN0YW5jZW9mIFZhbGlkYXRvckZsb2F0KSBhcyBWYWxpZGF0b3JGbG9hdHx1bmRlZmluZWQ7XHJcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHZhbGlkYXRvckZsb2F0KSkge1xyXG4gICAgICB2YWxpZGF0b3JGbG9hdCA9IG5ldyBWYWxpZGF0b3JGbG9hdCh1bmRlZmluZWQsIGRpZ2l0cyA/PyBtYXhEaWdpdHMpO1xyXG4gICAgICB2YWxpZGF0b3JzLnB1c2godmFsaWRhdG9yRmxvYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbnRyb2wgPSBBY2Nlc3NhYmxlQ29udHJvbEZhY3Rvcnkuc2ltcGxlQ29udHJvbChudWxsLCB2YWxpZGF0b3JzKTtcclxuXHJcbiAgICBpZiAodHJ1ZSkgeyAvLyAhdHJlbm5wdW5rdFxyXG4gICAgICBjb250cm9sLnNob3dBcyA9IChuOiBudW1iZXIpOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsID0+IHtcclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZGlnaXRzKSkge1xyXG4gICAgICAgICAgcmV0dXJuIFR5cGVDb252ZXJ0ZXIuYXNHZXJtYW5GbG9hdChuLCBkaWdpdHMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoVXRpbC5pc0RlZmluZWQobWluRGlnaXRzKSAmJiBVdGlsLmlzRGVmaW5lZChtYXhEaWdpdHMpKSB7XHJcbiAgICAgICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKG4pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIV8uaXNOdW1iZXIobikgfHwgXy5pc05hTihOdW1iZXIobikpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gTnVtYmVyKE51bWJlcihuKS50b0ZpeGVkKG1heERpZ2l0cykpLnRvTG9jYWxlU3RyaW5nKFxyXG4gICAgICAgICAgICAnZGUtREUnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IG1pbkRpZ2l0cyxcclxuICAgICAgICAgICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogbWF4RGlnaXRzXHJcbiAgICAgICAgICAgIH0pLnJlcGxhY2UoJy4nLCAnJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBUeXBlQ29udmVydGVyLmFzR2VybWFuRmxvYXQobik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBjb250cm9sLmNvbnZlcnRUbyA9IFR5cGVDb252ZXJ0ZXIudG9OdW1iZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb250cm9sLnNob3dBcyA9IChuOiBudW1iZXIpOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsID0+IHtcclxuICAgICAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKG4pKSB7XHJcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIV8uaXNOdW1iZXIobikgfHwgXy5pc05hTihOdW1iZXIobikpKSB7XHJcbiAgICAgICAgICByZXR1cm4gbi50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoVXRpbC5pc0RlZmluZWQoZGlnaXRzKSkge1xyXG4gICAgICAgICAgbWluRGlnaXRzID0gZGlnaXRzO1xyXG4gICAgICAgICAgbWF4RGlnaXRzID0gZGlnaXRzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIVV0aWwuaXNEZWZpbmVkKG1pbkRpZ2l0cykgJiYgIVV0aWwuaXNEZWZpbmVkKG1heERpZ2l0cykpIHtcclxuICAgICAgICAgIG1pbkRpZ2l0cyA9IDM7XHJcbiAgICAgICAgICBtYXhEaWdpdHMgPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTnVtYmVyKE51bWJlcihuKS50b0ZpeGVkKG1heERpZ2l0cykpLnRvTG9jYWxlU3RyaW5nKFxyXG4gICAgICAgICAgJ2RlLURFJyxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IG1pbkRpZ2l0cyxcclxuICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IG1heERpZ2l0c1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnRyb2wuY29udmVydFRvID0gKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIgfCBzdHJpbmcgID0+IHtcclxuICAgICAgICAvLyBGYWxscyBudWxsIG9kZXIgdW5kZWZpbmVkIMO8YmVyZ2ViZW4gd3VyZGUsIGJyZWNoZW4gd2lyIGFiXHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBGYWxscyBkZXIgV2VydCBiZXJlaXRzIGVpbmUgWmFobCBpc3QsIHNpbmQgd2lyIGZlcnRpZ1xyXG4gICAgICAgIGlmIChfLmlzTnVtYmVyKHZhbHVlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBGYWxscyBkZXIgV2VydCBlaW4gU3RyaW5nIGlzdCwgdGVzdGVuIHdpciwgb2IgZXIgYXVzc2llaHQgd2llIGVpbmUgWmFobCB1bmQgdmVyc3VjaGVuIGlobiBhbnNjaGxpZcOfZW5kIHp1IGtvbnZlcnRpZXJlblxyXG4gICAgICAgIGlmIChfLmlzU3RyaW5nKHZhbHVlKSAmJiBSRUdFWC5BTExfTlVNQkVSUy50ZXN0KHZhbHVlIGFzIHN0cmluZykpIHtcclxuICAgICAgICAgIHJldHVybiBOdW1iZXIucGFyc2VGbG9hdCgodmFsdWUgYXMgc3RyaW5nKS5yZXBsYWNlKC9cXC4vZywgJycpLnJlcGxhY2UoJywnLCAnLicpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gV2lyIGhhYmVuIGtlaW5lIFJlZ2VsIGbDvHIgZGllIEtvbnZlcnRpZXJ1bmcgZ2VmdW5kZW5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29udHJvbC5zZXRWYWx1ZShmb3JtU3RhdGUpO1xyXG4gICAgcmV0dXJuIGNvbnRyb2w7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRhdGVDb250cm9sKFxyXG4gICAgZm9ybVN0YXRlOiBhbnkgPSBudWxsLFxyXG4gICAgdmFsaWRhdG9yczogSVZhbGlkYXRvcltdXHJcbiAgKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBBY2Nlc3NhYmxlQ29udHJvbEZhY3Rvcnkuc2ltcGxlQ29udHJvbChmb3JtU3RhdGUsIHZhbGlkYXRvcnMpO1xyXG4gICAgcmV0dXJuIGNvbnRyb2w7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG1vbWVudERhdGVDb250cm9sKFxyXG4gICAgZm9ybVN0YXRlOiBzdHJpbmcgfCBtb21lbnQuTW9tZW50IHwgbnVsbCA9IG51bGwsXHJcbiAgICB2YWxpZGF0b3JzOiBJVmFsaWRhdG9yW11cclxuICApOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xyXG4gICAgY29uc3QgY29udHJvbCA9IEFjY2Vzc2FibGVDb250cm9sRmFjdG9yeS5zaW1wbGVDb250cm9sKG51bGwsIHZhbGlkYXRvcnMpO1xyXG4gICAgY29udHJvbC5zaG93QXMgPSBUeXBlQ29udmVydGVyLmFzR2VybWFuRGF0ZTtcclxuICAgIGNvbnRyb2wuY29udmVydFRvID0gVHlwZUNvbnZlcnRlci50b01vbWVudDtcclxuICAgIGNvbnRyb2wuc2V0VmFsdWUoZm9ybVN0YXRlKTtcclxuICAgIHJldHVybiBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBtb21lbnRUaW1lQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogc3RyaW5nIHwgbW9tZW50Lk1vbWVudCB8IG51bGwgPSBudWxsLFxyXG4gICAgdmFsaWRhdG9yczogSVZhbGlkYXRvcltdLFxyXG4gICAgd2l0aFNlY29uZHM6IGJvb2xlYW4gPSBmYWxzZSwgXHJcbiAgICB3aXRoTWlsbGlzZWNvbmRzOiBib29sZWFuID0gZmFsc2VcclxuICApOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xyXG4gICAgY29uc3QgY29udHJvbCA9IEFjY2Vzc2FibGVDb250cm9sRmFjdG9yeS5zaW1wbGVDb250cm9sKG51bGwsIHZhbGlkYXRvcnMpO1xyXG4gICAgY29udHJvbC5zaG93QXMgPSAodjogc3RyaW5nfE1vbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gVHlwZUNvbnZlcnRlci5hc0dlcm1hblRpbWUodiwgd2l0aFNlY29uZHMsIHdpdGhNaWxsaXNlY29uZHMpO1xyXG4gICAgfVxyXG4gICAgY29udHJvbC5jb252ZXJ0VG8gPSBUeXBlQ29udmVydGVyLnRvTW9tZW50OyBcclxuICAgIGNvbnRyb2wuc2V0VmFsdWUoZm9ybVN0YXRlKTtcclxuICAgIHJldHVybiBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNjaG5laWRlcyBhbGxlIFdoaXRlc3BhY2VzIGFtIEVuZGUgdW5kIEFuZmFuZyB3ZWcgKi9cclxuICBwdWJsaWMgc3RhdGljIHRyaW1Db250cm9sKFxyXG4gICAgZm9ybVN0YXRlOiBhbnkgPSBudWxsLFxyXG4gICAgdmFsaWRhdG9yczogSVZhbGlkYXRvcltdXHJcbiAgKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBBY2Nlc3NhYmxlQ29udHJvbEZhY3Rvcnkuc2ltcGxlQ29udHJvbChmb3JtU3RhdGUsIHZhbGlkYXRvcnMpO1xyXG4gICAgY29udHJvbC5zaG93QXMgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsID0+IHtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHN0cikpIHtcclxuICAgICAgICByZXR1cm4gc3RyLnRyaW0oKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgfTtcclxuICAgIGNvbnRyb2wuY29udmVydFRvID0gKHN0cjogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9PiB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChzdHIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci50cmltKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcbn1cclxuIl19