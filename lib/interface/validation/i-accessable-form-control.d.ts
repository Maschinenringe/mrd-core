import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
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
    valueChanges: Observable<any>;
}
