import { AccessableFormControl } from '../../abstract/validation/accessable-form-control';
import { TypeConverter } from '../util/type-converter';
import { Util } from '../util/util';
import { REGEX } from '../../enum/regex';
import * as _ from 'underscore';
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
            validatorFloat = new ValidatorFloat(null, digits ?? maxDigits);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1jb250cm9sLWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdmFsaWRhdGlvbi9hY2Nlc3NhYmxlLWNvbnRyb2wtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNsQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekMsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFDaEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRW5ELE1BQU0sT0FBZ0Isd0JBQXdCO0lBRXJDLE1BQU0sQ0FBQyxhQUFhLENBQ3pCLFlBQWlCLElBQUksRUFDckIsVUFBd0I7UUFFeEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUN6QixZQUFpQixJQUFJLEVBQ3JCLFVBQXdCO1FBRXhCLE1BQU0sT0FBTyxHQUFHLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDOUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUMzQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVC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Q0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsd0RBQXdEO0lBQ2pELE1BQU0sQ0FBQyxXQUFXLENBQ3ZCLFlBQWlCLElBQUksRUFDckIsVUFBd0I7UUFFeEIsTUFBTSxPQUFPLEdBQUcsd0JBQXdCLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM5RSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBVyxFQUE2QixFQUFFO1lBQzFELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkI7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFXLEVBQTZCLEVBQUU7WUFDN0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNuQjtZQUNELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7QWNjZXNzYWJsZUZvcm1Db250cm9sfSBmcm9tICcuLi8uLi9hYnN0cmFjdC92YWxpZGF0aW9uL2FjY2Vzc2FibGUtZm9ybS1jb250cm9sJztcclxuaW1wb3J0IHtUeXBlQ29udmVydGVyfSBmcm9tICcuLi91dGlsL3R5cGUtY29udmVydGVyJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi91dGlsL3V0aWwnO1xyXG5pbXBvcnQgeyBSRUdFWCB9IGZyb20gJy4uLy4uL2VudW0vcmVnZXgnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JGbG9hdCB9IGZyb20gJy4vdmFsaWRhdG9yLWZsb2F0JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBY2Nlc3NhYmxlQ29udHJvbEZhY3Rvcnkge1xyXG5cclxuICBwdWJsaWMgc3RhdGljIHNpbXBsZUNvbnRyb2woXHJcbiAgICBmb3JtU3RhdGU6IGFueSA9IG51bGwsXHJcbiAgICB2YWxpZGF0b3JzOiBJVmFsaWRhdG9yW11cclxuICApOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xyXG4gICAgY29uc3QgY29udHJvbCA9IG5ldyBBY2Nlc3NhYmxlRm9ybUNvbnRyb2woKTtcclxuICAgIGNvbnRyb2wuaW5pdGlhbGl6ZShmb3JtU3RhdGUsIHZhbGlkYXRvcnMpO1xyXG4gICAgcmV0dXJuIGNvbnRyb2w7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG51bWJlckNvbnRyb2woXHJcbiAgICBmb3JtU3RhdGU6IGFueSA9IG51bGwsXHJcbiAgICB2YWxpZGF0b3JzOiBJVmFsaWRhdG9yW11cclxuICApOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xyXG4gICAgY29uc3QgY29udHJvbCA9IEFjY2Vzc2FibGVDb250cm9sRmFjdG9yeS5zaW1wbGVDb250cm9sKGZvcm1TdGF0ZSwgdmFsaWRhdG9ycyk7XHJcbiAgICBjb250cm9sLnNob3dBcyA9IFR5cGVDb252ZXJ0ZXIuYXNHZXJtYW5GbG9hdDtcclxuICAgIGNvbnRyb2wuY29udmVydFRvID0gVHlwZUNvbnZlcnRlci50b051bWJlcjtcclxuICAgIGNvbnRyb2wuc2V0VmFsdWUoZm9ybVN0YXRlKTtcclxuICAgIHJldHVybiBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBudW1iZXJCb29sZWFuQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogYW55ID0gbnVsbCxcclxuICAgIHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXVxyXG4gICk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdCBjb250cm9sID0gQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5LnNpbXBsZUNvbnRyb2woZm9ybVN0YXRlLCB2YWxpZGF0b3JzKTtcclxuICAgIGNvbnRyb2wuc2hvd0FzID0gVHlwZUNvbnZlcnRlci5udW1iZXJUb0Jvb2xlYW47XHJcbiAgICBjb250cm9sLmNvbnZlcnRUbyA9IFR5cGVDb252ZXJ0ZXIuYm9vbGVhblRvTnVtYmVyO1xyXG4gICAgY29udHJvbC5zZXRWYWx1ZShmb3JtU3RhdGUpO1xyXG4gICAgcmV0dXJuIGNvbnRyb2w7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG51bWJlckRpZ2l0c0NvbnRyb2woXHJcbiAgICBmb3JtU3RhdGU6IGFueSA9IG51bGwsXHJcbiAgICB2YWxpZGF0b3JzOiBJVmFsaWRhdG9yW10sXHJcbiAgICBkaWdpdHM6IG51bWJlciA9IDNcclxuICApOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xyXG4gICAgY29uc3QgY29udHJvbCA9IEFjY2Vzc2FibGVDb250cm9sRmFjdG9yeS5zaW1wbGVDb250cm9sKG51bGwsIHZhbGlkYXRvcnMpO1xyXG4gICAgY29udHJvbC5zaG93QXMgPSAobjogbnVtYmVyKTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9PiB7XHJcbiAgICAgIHJldHVybiBUeXBlQ29udmVydGVyLmFzR2VybWFuRmxvYXQobiwgZGlnaXRzKTtcclxuICAgIH07XHJcbiAgICBjb250cm9sLmNvbnZlcnRUbyA9IFR5cGVDb252ZXJ0ZXIudG9OdW1iZXI7XHJcbiAgICBjb250cm9sLnNldFZhbHVlKGZvcm1TdGF0ZSk7XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgICogRXJ6ZXVnZSBlaW5lIEFjY2Vzc2FibGVGb3JtQ29udHJvbCBmw7xyIGVpbmUgWmFobCBtaXQge2RpZ2l0c30gb2RlciB7bWluRGlnaXRzfS97bWF4RGlnaXRzfSBOYWNoa29tbWFzdGVsbGVuIHVuZCBlaW5lbSBUYXVzZW5kZXJwdW5rdC5cclxuICAgICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgbnVtYmVyRGlnaXRzRXh0ZW5kZWRDb250cm9sKFxyXG4gICAgZm9ybVN0YXRlOiBhbnkgPSBudWxsLFxyXG4gICAgdmFsaWRhdG9yczogSVZhbGlkYXRvcltdLFxyXG4gICAgZGlnaXRzOiBudW1iZXIgPSAzLFxyXG4gICAgbWluRGlnaXRzPzogbnVtYmVyLFxyXG4gICAgbWF4RGlnaXRzOiBudW1iZXIgPSAxMDAsXHJcbiAgICAvLyB0cmVubnB1bmt0OiBib29sZWFuID0gZmFsc2UsIC8vIEtsYXBwdCBub2NoIG5pY2h0XHJcbiAgKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGxldCB2YWxpZGF0b3JGbG9hdDogVmFsaWRhdG9yRmxvYXQgPSBfLmZpbmQodmFsaWRhdG9ycywgKHY6IElWYWxpZGF0b3IpID0+IHYgaW5zdGFuY2VvZiBWYWxpZGF0b3JGbG9hdCk7XHJcbiAgICBpZiAoIVV0aWwuaXNEZWZpbmVkKHZhbGlkYXRvckZsb2F0KSkge1xyXG4gICAgICB2YWxpZGF0b3JGbG9hdCA9IG5ldyBWYWxpZGF0b3JGbG9hdChudWxsLCBkaWdpdHMgPz8gbWF4RGlnaXRzKTtcclxuICAgICAgdmFsaWRhdG9ycy5wdXNoKHZhbGlkYXRvckZsb2F0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb250cm9sID0gQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5LnNpbXBsZUNvbnRyb2wobnVsbCwgdmFsaWRhdG9ycyk7XHJcblxyXG4gICAgaWYgKHRydWUpIHsgLy8gIXRyZW5ucHVua3RcclxuICAgICAgY29udHJvbC5zaG93QXMgPSAobjogbnVtYmVyKTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGRpZ2l0cykpIHtcclxuICAgICAgICAgIHJldHVybiBUeXBlQ29udmVydGVyLmFzR2VybWFuRmxvYXQobiwgZGlnaXRzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKFV0aWwuaXNEZWZpbmVkKG1pbkRpZ2l0cykgJiYgVXRpbC5pc0RlZmluZWQobWF4RGlnaXRzKSkge1xyXG4gICAgICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZChuKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCFfLmlzTnVtYmVyKG4pIHx8IF8uaXNOYU4oTnVtYmVyKG4pKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbi50b1N0cmluZygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIE51bWJlcihOdW1iZXIobikudG9GaXhlZChtYXhEaWdpdHMpKS50b0xvY2FsZVN0cmluZyhcclxuICAgICAgICAgICAgJ2RlLURFJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBtaW5EaWdpdHMsXHJcbiAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IG1heERpZ2l0c1xyXG4gICAgICAgICAgICB9KS5yZXBsYWNlKCcuJywgJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gVHlwZUNvbnZlcnRlci5hc0dlcm1hbkZsb2F0KG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgY29udHJvbC5jb252ZXJ0VG8gPSBUeXBlQ29udmVydGVyLnRvTnVtYmVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29udHJvbC5zaG93QXMgPSAobjogbnVtYmVyKTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgaWYgKCFVdGlsLmlzRGVmaW5lZChuKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFfLmlzTnVtYmVyKG4pIHx8IF8uaXNOYU4oTnVtYmVyKG4pKSkge1xyXG4gICAgICAgICAgcmV0dXJuIG4udG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKGRpZ2l0cykpIHtcclxuICAgICAgICAgIG1pbkRpZ2l0cyA9IGRpZ2l0cztcclxuICAgICAgICAgIG1heERpZ2l0cyA9IGRpZ2l0cztcclxuICAgICAgICB9IGVsc2UgaWYgKCFVdGlsLmlzRGVmaW5lZChtaW5EaWdpdHMpICYmICFVdGlsLmlzRGVmaW5lZChtYXhEaWdpdHMpKSB7XHJcbiAgICAgICAgICBtaW5EaWdpdHMgPSAzO1xyXG4gICAgICAgICAgbWF4RGlnaXRzID0gMztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE51bWJlcihOdW1iZXIobikudG9GaXhlZChtYXhEaWdpdHMpKS50b0xvY2FsZVN0cmluZyhcclxuICAgICAgICAgICdkZS1ERScsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBtaW5EaWdpdHMsXHJcbiAgICAgICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBtYXhEaWdpdHNcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBjb250cm9sLmNvbnZlcnRUbyA9ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHwgc3RyaW5nICA9PiB7XHJcbiAgICAgICAgLy8gRmFsbHMgbnVsbCBvZGVyIHVuZGVmaW5lZCDDvGJlcmdlYmVuIHd1cmRlLCBicmVjaGVuIHdpciBhYlxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRmFsbHMgZGVyIFdlcnQgYmVyZWl0cyBlaW5lIFphaGwgaXN0LCBzaW5kIHdpciBmZXJ0aWdcclxuICAgICAgICBpZiAoXy5pc051bWJlcih2YWx1ZSkpIHtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRmFsbHMgZGVyIFdlcnQgZWluIFN0cmluZyBpc3QsIHRlc3RlbiB3aXIsIG9iIGVyIGF1c3NpZWh0IHdpZSBlaW5lIFphaGwgdW5kIHZlcnN1Y2hlbiBpaG4gYW5zY2hsaWXDn2VuZCB6dSBrb252ZXJ0aWVyZW5cclxuICAgICAgICBpZiAoXy5pc1N0cmluZyh2YWx1ZSkgJiYgUkVHRVguQUxMX05VTUJFUlMudGVzdCh2YWx1ZSBhcyBzdHJpbmcpKSB7XHJcbiAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlRmxvYXQoKHZhbHVlIGFzIHN0cmluZykucmVwbGFjZSgvXFwuL2csICcnKS5yZXBsYWNlKCcsJywgJy4nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdpciBoYWJlbiBrZWluZSBSZWdlbCBmw7xyIGRpZSBLb252ZXJ0aWVydW5nIGdlZnVuZGVuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnRyb2wuc2V0VmFsdWUoZm9ybVN0YXRlKTtcclxuICAgIHJldHVybiBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkYXRlQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogYW55ID0gbnVsbCxcclxuICAgIHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXVxyXG4gICk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdCBjb250cm9sID0gQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5LnNpbXBsZUNvbnRyb2woZm9ybVN0YXRlLCB2YWxpZGF0b3JzKTtcclxuICAgIHJldHVybiBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBtb21lbnREYXRlQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogc3RyaW5nIHwgbW9tZW50Lk1vbWVudCB8IG51bGwgPSBudWxsLFxyXG4gICAgdmFsaWRhdG9yczogSVZhbGlkYXRvcltdXHJcbiAgKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBBY2Nlc3NhYmxlQ29udHJvbEZhY3Rvcnkuc2ltcGxlQ29udHJvbChudWxsLCB2YWxpZGF0b3JzKTtcclxuICAgIGNvbnRyb2wuc2hvd0FzID0gVHlwZUNvbnZlcnRlci5hc0dlcm1hbkRhdGU7XHJcbiAgICBjb250cm9sLmNvbnZlcnRUbyA9IFR5cGVDb252ZXJ0ZXIudG9Nb21lbnQ7XHJcbiAgICBjb250cm9sLnNldFZhbHVlKGZvcm1TdGF0ZSk7XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcblxyXG4gIC8qKiBTY2huZWlkZXMgYWxsZSBXaGl0ZXNwYWNlcyBhbSBFbmRlIHVuZCBBbmZhbmcgd2VnICovXHJcbiAgcHVibGljIHN0YXRpYyB0cmltQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogYW55ID0gbnVsbCxcclxuICAgIHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXVxyXG4gICk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdCBjb250cm9sID0gQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5LnNpbXBsZUNvbnRyb2woZm9ybVN0YXRlLCB2YWxpZGF0b3JzKTtcclxuICAgIGNvbnRyb2wuc2hvd0FzID0gKHN0cjogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9PiB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChzdHIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci50cmltKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH07XHJcbiAgICBjb250cm9sLmNvbnZlcnRUbyA9IChzdHI6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwgPT4ge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoc3RyKSkge1xyXG4gICAgICAgIHJldHVybiBzdHIudHJpbSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbnRyb2w7XHJcbiAgfVxyXG59XHJcbiJdfQ==