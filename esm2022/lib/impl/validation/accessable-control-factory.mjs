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
        // Erst jetzt greift showAs, sonst erschiene der Startwert ungekuerzt
        control.setValue(formState, true);
        return control;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1jb250cm9sLWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWNvbnRyb2wtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNsQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekMsT0FBTyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBQzNCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUduRCxNQUFNLE9BQWdCLHdCQUF3QjtJQUVyQyxNQUFNLENBQUMsYUFBYSxDQUN6QixZQUFpQixJQUFJLEVBQ3JCLFVBQXdCO1FBRXhCLE1BQU0sT0FBTyxHQUFHLElBQUkscUJBQXFCLEVBQUUsQ0FBQztRQUM1QyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMxQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU0sTUFBTSxDQUFDLGFBQWEsQ0FDekIsWUFBaUIsSUFBSSxFQUNyQixVQUF3QjtRQUV4QixNQUFNLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUM3QyxPQUFPLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDM0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixPQUFP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RyxDQUFDO1FBQ2IsQ0FBQyxDQUFDO1FBQ0YscUVBQXFFO1FBQ3JFLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVZhbGlkYXRvcn0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3ZhbGlkYXRpb24vaS12YWxpZGF0b3InO1xyXG5pbXBvcnQge0FjY2Vzc2FibGVGb3JtQ29udHJvbH0gZnJvbSAnLi4vLi4vYWJzdHJhY3QvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWZvcm0tY29udHJvbCc7XHJcbmltcG9ydCB7VHlwZUNvbnZlcnRlcn0gZnJvbSAnLi4vdXRpbC90eXBlLWNvbnZlcnRlcic7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSAnLi4vdXRpbC91dGlsJztcclxuaW1wb3J0IHsgUkVHRVggfSBmcm9tICcuLi8uLi9lbnVtL3JlZ2V4JztcclxuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRvckZsb2F0IH0gZnJvbSAnLi92YWxpZGF0b3ItZmxvYXQnO1xyXG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjY2Vzc2FibGVDb250cm9sRmFjdG9yeSB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2ltcGxlQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogYW55ID0gbnVsbCxcclxuICAgIHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXVxyXG4gICk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdCBjb250cm9sID0gbmV3IEFjY2Vzc2FibGVGb3JtQ29udHJvbCgpO1xyXG4gICAgY29udHJvbC5pbml0aWFsaXplKGZvcm1TdGF0ZSwgdmFsaWRhdG9ycyk7XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbnVtYmVyQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogYW55ID0gbnVsbCxcclxuICAgIHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXVxyXG4gICk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdCBjb250cm9sID0gQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5LnNpbXBsZUNvbnRyb2woZm9ybVN0YXRlLCB2YWxpZGF0b3JzKTtcclxuICAgIGNvbnRyb2wuc2hvd0FzID0gVHlwZUNvbnZlcnRlci5hc0dlcm1hbkZsb2F0O1xyXG4gICAgY29udHJvbC5jb252ZXJ0VG8gPSBUeXBlQ29udmVydGVyLnRvTnVtYmVyO1xyXG4gICAgY29udHJvbC5zZXRWYWx1ZShmb3JtU3RhdGUpO1xyXG4gICAgcmV0dXJuIGNvbnRyb2w7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG51bWJlckJvb2xlYW5Db250cm9sKFxyXG4gICAgZm9ybVN0YXRlOiBhbnkgPSBudWxsLFxyXG4gICAgdmFsaWRhdG9yczogSVZhbGlkYXRvcltdXHJcbiAgKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBBY2Nlc3NhYmxlQ29udHJvbEZhY3Rvcnkuc2ltcGxlQ29udHJvbChmb3JtU3RhdGUsIHZhbGlkYXRvcnMpO1xyXG4gICAgY29udHJvbC5zaG93QXMgPSBUeXBlQ29udmVydGVyLm51bWJlclRvQm9vbGVhbjtcclxuICAgIGNvbnRyb2wuY29udmVydFRvID0gVHlwZUNvbnZlcnRlci5ib29sZWFuVG9OdW1iZXI7XHJcbiAgICBjb250cm9sLnNldFZhbHVlKGZvcm1TdGF0ZSk7XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbnVtYmVyRGlnaXRzQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogYW55ID0gbnVsbCxcclxuICAgIHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXSxcclxuICAgIGRpZ2l0czogbnVtYmVyID0gM1xyXG4gICk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdCBjb250cm9sID0gQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5LnNpbXBsZUNvbnRyb2wobnVsbCwgdmFsaWRhdG9ycyk7XHJcbiAgICBjb250cm9sLnNob3dBcyA9IChuOiBudW1iZXIpOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsID0+IHtcclxuICAgICAgcmV0dXJuIFR5cGVDb252ZXJ0ZXIuYXNHZXJtYW5GbG9hdChuLCBkaWdpdHMpO1xyXG4gICAgfTtcclxuICAgIGNvbnRyb2wuY29udmVydFRvID0gVHlwZUNvbnZlcnRlci50b051bWJlcjtcclxuICAgIGNvbnRyb2wuc2V0VmFsdWUoZm9ybVN0YXRlKTtcclxuICAgIHJldHVybiBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAgKiBFcnpldWdlIGVpbmUgQWNjZXNzYWJsZUZvcm1Db250cm9sIGbDvHIgZWluZSBaYWhsIG1pdCB7ZGlnaXRzfSBvZGVyIHttaW5EaWdpdHN9L3ttYXhEaWdpdHN9IE5hY2hrb21tYXN0ZWxsZW4gdW5kIGVpbmVtIFRhdXNlbmRlcnB1bmt0LlxyXG4gICAgICovXHJcbiAgcHVibGljIHN0YXRpYyBudW1iZXJEaWdpdHNFeHRlbmRlZENvbnRyb2woXHJcbiAgICBmb3JtU3RhdGU6IGFueSA9IG51bGwsXHJcbiAgICB2YWxpZGF0b3JzOiBJVmFsaWRhdG9yW10sXHJcbiAgICBkaWdpdHM6IG51bWJlciA9IDMsXHJcbiAgICBtaW5EaWdpdHM/OiBudW1iZXIsXHJcbiAgICBtYXhEaWdpdHM6IG51bWJlciA9IDEwMCxcclxuICAgIC8vIHRyZW5ucHVua3Q6IGJvb2xlYW4gPSBmYWxzZSwgLy8gS2xhcHB0IG5vY2ggbmljaHRcclxuICApOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xyXG4gICAgbGV0IHZhbGlkYXRvckZsb2F0OiBWYWxpZGF0b3JGbG9hdHx1bmRlZmluZWQgPSBfLmZpbmQodmFsaWRhdG9ycywgKHY6IElWYWxpZGF0b3IpID0+IHYgaW5zdGFuY2VvZiBWYWxpZGF0b3JGbG9hdCkgYXMgVmFsaWRhdG9yRmxvYXR8dW5kZWZpbmVkO1xyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh2YWxpZGF0b3JGbG9hdCkpIHtcclxuICAgICAgdmFsaWRhdG9yRmxvYXQgPSBuZXcgVmFsaWRhdG9yRmxvYXQodW5kZWZpbmVkLCBkaWdpdHMgPz8gbWF4RGlnaXRzKTtcclxuICAgICAgdmFsaWRhdG9ycy5wdXNoKHZhbGlkYXRvckZsb2F0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250cm9sID0gQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5LnNpbXBsZUNvbnRyb2wobnVsbCwgdmFsaWRhdG9ycyk7XHJcblxyXG4gICAgaWYgKHRydWUpIHsgLy8gIXRyZW5ucHVua3RcclxuICAgICAgY29udHJvbC5zaG93QXMgPSAobjogbnVtYmVyKTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGRpZ2l0cykpIHtcclxuICAgICAgICAgIHJldHVybiBUeXBlQ29udmVydGVyLmFzR2VybWFuRmxvYXQobiwgZGlnaXRzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFV0aWwuaXNEZWZpbmVkKG1pbkRpZ2l0cykgJiYgVXRpbC5pc0RlZmluZWQobWF4RGlnaXRzKSkge1xyXG4gICAgICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZChuKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFfLmlzTnVtYmVyKG4pIHx8IF8uaXNOYU4oTnVtYmVyKG4pKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbi50b1N0cmluZygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIE51bWJlcihOdW1iZXIobikudG9GaXhlZChtYXhEaWdpdHMpKS50b0xvY2FsZVN0cmluZyhcclxuICAgICAgICAgICAgJ2RlLURFJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBtaW5EaWdpdHMsXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IG1heERpZ2l0c1xyXG4gICAgICAgICAgICB9KS5yZXBsYWNlKCcuJywgJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gVHlwZUNvbnZlcnRlci5hc0dlcm1hbkZsb2F0KG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgY29udHJvbC5jb252ZXJ0VG8gPSBUeXBlQ29udmVydGVyLnRvTnVtYmVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29udHJvbC5zaG93QXMgPSAobjogbnVtYmVyKTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZChuKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFfLmlzTnVtYmVyKG4pIHx8IF8uaXNOYU4oTnVtYmVyKG4pKSkge1xyXG4gICAgICAgICAgcmV0dXJuIG4udG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGRpZ2l0cykpIHtcclxuICAgICAgICAgIG1pbkRpZ2l0cyA9IGRpZ2l0cztcclxuICAgICAgICAgIG1heERpZ2l0cyA9IGRpZ2l0cztcclxuICAgICAgICB9IGVsc2UgaWYgKCFVdGlsLmlzRGVmaW5lZChtaW5EaWdpdHMpICYmICFVdGlsLmlzRGVmaW5lZChtYXhEaWdpdHMpKSB7XHJcbiAgICAgICAgICBtaW5EaWdpdHMgPSAzO1xyXG4gICAgICAgICAgbWF4RGlnaXRzID0gMztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcihOdW1iZXIobikudG9GaXhlZChtYXhEaWdpdHMpKS50b0xvY2FsZVN0cmluZyhcclxuICAgICAgICAgICdkZS1ERScsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBtaW5EaWdpdHMsXHJcbiAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBtYXhEaWdpdHNcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBjb250cm9sLmNvbnZlcnRUbyA9ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHwgc3RyaW5nICA9PiB7XHJcbiAgICAgICAgLy8gRmFsbHMgbnVsbCBvZGVyIHVuZGVmaW5lZCDDvGJlcmdlYmVuIHd1cmRlLCBicmVjaGVuIHdpciBhYlxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRmFsbHMgZGVyIFdlcnQgYmVyZWl0cyBlaW5lIFphaGwgaXN0LCBzaW5kIHdpciBmZXJ0aWdcclxuICAgICAgICBpZiAoXy5pc051bWJlcih2YWx1ZSkpIHtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRmFsbHMgZGVyIFdlcnQgZWluIFN0cmluZyBpc3QsIHRlc3RlbiB3aXIsIG9iIGVyIGF1c3NpZWh0IHdpZSBlaW5lIFphaGwgdW5kIHZlcnN1Y2hlbiBpaG4gYW5zY2hsaWXDn2VuZCB6dSBrb252ZXJ0aWVyZW5cclxuICAgICAgICBpZiAoXy5pc1N0cmluZyh2YWx1ZSkgJiYgUkVHRVguQUxMX05VTUJFUlMudGVzdCh2YWx1ZSBhcyBzdHJpbmcpKSB7XHJcbiAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQoKHZhbHVlIGFzIHN0cmluZykucmVwbGFjZSgvXFwuL2csICcnKS5yZXBsYWNlKCcsJywgJy4nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdpciBoYWJlbiBrZWluZSBSZWdlbCBmw7xyIGRpZSBLb252ZXJ0aWVydW5nIGdlZnVuZGVuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnRyb2wuc2V0VmFsdWUoZm9ybVN0YXRlKTtcclxuICAgIHJldHVybiBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkYXRlQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogYW55ID0gbnVsbCxcclxuICAgIHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXVxyXG4gICk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdCBjb250cm9sID0gQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5LnNpbXBsZUNvbnRyb2woZm9ybVN0YXRlLCB2YWxpZGF0b3JzKTtcclxuICAgIHJldHVybiBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBtb21lbnREYXRlQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogc3RyaW5nIHwgbW9tZW50Lk1vbWVudCB8IG51bGwgPSBudWxsLFxyXG4gICAgdmFsaWRhdG9yczogSVZhbGlkYXRvcltdXHJcbiAgKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBBY2Nlc3NhYmxlQ29udHJvbEZhY3Rvcnkuc2ltcGxlQ29udHJvbChudWxsLCB2YWxpZGF0b3JzKTtcclxuICAgIGNvbnRyb2wuc2hvd0FzID0gVHlwZUNvbnZlcnRlci5hc0dlcm1hbkRhdGU7XHJcbiAgICBjb250cm9sLmNvbnZlcnRUbyA9IFR5cGVDb252ZXJ0ZXIudG9Nb21lbnQ7XHJcbiAgICBjb250cm9sLnNldFZhbHVlKGZvcm1TdGF0ZSk7XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbW9tZW50VGltZUNvbnRyb2woXHJcbiAgICBmb3JtU3RhdGU6IHN0cmluZyB8IG1vbWVudC5Nb21lbnQgfCBudWxsID0gbnVsbCxcclxuICAgIHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXSxcclxuICAgIHdpdGhTZWNvbmRzOiBib29sZWFuID0gZmFsc2UsIFxyXG4gICAgd2l0aE1pbGxpc2Vjb25kczogYm9vbGVhbiA9IGZhbHNlXHJcbiAgKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBBY2Nlc3NhYmxlQ29udHJvbEZhY3Rvcnkuc2ltcGxlQ29udHJvbChudWxsLCB2YWxpZGF0b3JzKTtcclxuICAgIGNvbnRyb2wuc2hvd0FzID0gKHY6IHN0cmluZ3xNb21lbnQpID0+IHtcclxuICAgICAgcmV0dXJuIFR5cGVDb252ZXJ0ZXIuYXNHZXJtYW5UaW1lKHYsIHdpdGhTZWNvbmRzLCB3aXRoTWlsbGlzZWNvbmRzKTtcclxuICAgIH1cclxuICAgIGNvbnRyb2wuY29udmVydFRvID0gVHlwZUNvbnZlcnRlci50b01vbWVudDsgXHJcbiAgICBjb250cm9sLnNldFZhbHVlKGZvcm1TdGF0ZSk7XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcblxyXG4gIC8qKiBTY2huZWlkZXMgYWxsZSBXaGl0ZXNwYWNlcyBhbSBFbmRlIHVuZCBBbmZhbmcgd2VnICovXHJcbiAgcHVibGljIHN0YXRpYyB0cmltQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogYW55ID0gbnVsbCxcclxuICAgIHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXVxyXG4gICk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdCBjb250cm9sID0gQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5LnNpbXBsZUNvbnRyb2woZm9ybVN0YXRlLCB2YWxpZGF0b3JzKTtcclxuICAgIGNvbnRyb2wuc2hvd0FzID0gKHN0cjogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9PiB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChzdHIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci50cmltKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH07XHJcbiAgICBjb250cm9sLmNvbnZlcnRUbyA9IChzdHI6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwgPT4ge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoc3RyKSkge1xyXG4gICAgICAgIHJldHVybiBzdHIudHJpbSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9O1xyXG4gICAgLy8gRXJzdCBqZXR6dCBncmVpZnQgc2hvd0FzLCBzb25zdCBlcnNjaGllbmUgZGVyIFN0YXJ0d2VydCB1bmdla3Vlcnp0XHJcbiAgICBjb250cm9sLnNldFZhbHVlKGZvcm1TdGF0ZSwgdHJ1ZSk7XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcbn1cclxuIl19