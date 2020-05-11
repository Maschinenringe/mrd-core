import { IValidator } from '../../interface/validation/i-validator';
import { AccessableFormControl } from '../../abstract/validation/accessable-form-control';
export declare abstract class AccessableControlFactory {
    static simpleControl(formState: any, validators: IValidator[]): AccessableFormControl;
    static numberControl(formState: any, validators: IValidator[]): AccessableFormControl;
    static numberBooleanControl(formState: any, validators: IValidator[]): AccessableFormControl;
    static dateControl(formState: any, validators: IValidator[]): AccessableFormControl;
    /** Schneides alle Whitespaces am Ende und Anfang weg */
    static trimControl(formState: any, validators: IValidator[]): AccessableFormControl;
}
