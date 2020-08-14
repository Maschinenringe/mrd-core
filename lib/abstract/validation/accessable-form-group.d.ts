import { FormGroup } from '@angular/forms';
import { IAccessableFormControl } from '../../interface/validation/i-accessable-form-control';
import { Observable } from 'rxjs';
export declare abstract class AccessableFormGroup<TFields, TModel extends object> implements IAccessableFormControl<AccessableFormGroup<TFields, TModel>, TModel> {
    control: FormGroup;
    private fields$;
    private changed$;
    initialize(fields: TFields): void;
    markAsUsed(): AccessableFormGroup<TFields, TModel>;
    markAsUnused(): AccessableFormGroup<TFields, TModel>;
    markAsDirty(): AccessableFormGroup<TFields, TModel>;
    markAsTouched(): AccessableFormGroup<TFields, TModel>;
    reset(model: TModel, propagateChanges?: boolean): AccessableFormGroup<TFields, TModel>;
    readonly fields: TFields;
    readonly value: TModel;
    readonly dirty: boolean;
    readonly valid: boolean;
    readonly touched: boolean;
    disable(): AccessableFormGroup<TFields, TModel>;
    enable(): AccessableFormGroup<TFields, TModel>;
    readonly disabled: boolean;
    readonly enabled: boolean;
    readonly changed: Observable<void>;
}
