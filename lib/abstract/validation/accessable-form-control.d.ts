import { IValidator } from '../../interface/validation/i-validator';
import { FormControl } from '@angular/forms';
import { IAccessableFormControl } from '../../interface/validation/i-accessable-form-control';
export declare class AccessableFormControl<TType = any> implements IAccessableFormControl<AccessableFormControl<TType>, TType> {
    control: FormControl;
    showAs: (value: any) => any;
    convertTo: (value: any) => any;
    private required$;
    private validators$;
    initialize(formState?: any, validators?: IValidator[]): void;
    validateWith(validators?: IValidator[]): AccessableFormControl;
    setValue(value: any): AccessableFormControl;
    reset(value: TType): AccessableFormControl;
    markAsUsed(): AccessableFormControl;
    markAsUnused(): AccessableFormControl;
    markAsDirty(): AccessableFormControl;
    markAsTouched(): AccessableFormControl;
    disable(): AccessableFormControl;
    enable(): AccessableFormControl;
    readonly disabled: boolean;
    readonly valid: boolean;
    readonly validators: IValidator[];
    readonly error: IValidator;
    value: any;
    readonly required: boolean;
    readonly touched: boolean;
    readonly dirty: boolean;
}
