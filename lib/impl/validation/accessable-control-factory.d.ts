import { IValidator } from '../../interface/validation/i-validator';
import { AccessableFormControl } from '../../abstract/validation/accessable-form-control';
export declare abstract class AccessableControlFactory {
    static simpleControl(formState: any, validators: IValidator[]): AccessableFormControl;
    static numberControl(formState: any, validators: IValidator[]): AccessableFormControl;
    static numberBooleanControl(formState: any, validators: IValidator[]): AccessableFormControl;
    static numberDigitsControl(formState: any, validators: IValidator[], digits?: number): AccessableFormControl;
    /**
       * Erzeuge eine AccessableFormControl für eine Zahl mit {digits} oder {minDigits}/{maxDigits} Nachkommastellen und einem Tausenderpunkt.
       */
    static numberDigitsExtendedControl(formState: any, validators: IValidator[], digits?: number, minDigits?: number, maxDigits?: number): AccessableFormControl;
    static dateControl(formState: any, validators: IValidator[]): AccessableFormControl;
    static momentDateControl(formState: string | moment.Moment | null, validators: IValidator[]): AccessableFormControl;
    static momentTimeControl(formState: string | moment.Moment | null, validators: IValidator[], withSeconds?: boolean, withMilliseconds?: boolean): AccessableFormControl;
    /** Schneides alle Whitespaces am Ende und Anfang weg */
    static trimControl(formState: any, validators: IValidator[]): AccessableFormControl;
}
