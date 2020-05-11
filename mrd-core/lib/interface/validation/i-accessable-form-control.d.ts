import { FormArray, FormControl, FormGroup } from '@angular/forms';
export interface IAccessableFormControl<TControlType, TType> {
    value: TType;
    dirty: boolean;
    touched: boolean;
    valid: boolean;
    control: FormGroup | FormControl | FormArray;
    markAsUsed(): TControlType;
    markAsUnused(): TControlType;
    markAsDirty(): TControlType;
    markAsTouched(): TControlType;
    reset(model: TType): TControlType;
    disable(): TControlType;
    enable(): TControlType;
}
