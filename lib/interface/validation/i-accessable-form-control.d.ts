import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
export interface IAccessableFormControl<TControlType, TType> {
    value: TType;
    rawValue: any;
    dirty: boolean;
    touched: boolean;
    valid: boolean;
    control: FormGroup | FormControl | FormArray;
    markAsUsed(opts?: IAccessableFormOptions): TControlType;
    markAsUnused(opts?: IAccessableFormOptions): TControlType;
    markAsDirty(opts?: IAccessableFormOptions): TControlType;
    markAsTouched(opts?: IAccessableFormOptions): TControlType;
    reset(model: TType): TControlType;
    disable(opts?: IAccessableFormOptions): TControlType;
    enable(opts?: IAccessableFormOptions): TControlType;
    valueChanges: Observable<any>;
}
export interface IAccessableFormOptions {
    emitEvent?: boolean;
    onlySelf?: boolean;
}
