import { IAccessableFormControl } from '../../interface/validation/i-accessable-form-control';
import { FormArray } from '@angular/forms';
import { Type } from '@angular/core';
export declare abstract class AccessableFormArray<TModel> implements IAccessableFormControl<AccessableFormArray<TModel>, TModel[]> {
    control: FormArray;
    type: Type<IAccessableFormControl<any, any>>;
    private entries$;
    initialize(type: Type<IAccessableFormControl<any, any>>): void;
    push(entry: TModel): IAccessableFormControl<any, TModel>;
    removeAt(index: number): void;
    generateFormEntry(value: any): IAccessableFormControl<any, TModel>;
    readonly dirty: boolean;
    readonly touched: boolean;
    readonly valid: boolean;
    readonly value: TModel[];
    readonly entries: IAccessableFormControl<any, TModel>[];
    disable(): AccessableFormArray<TModel>;
    enable(): AccessableFormArray<TModel>;
    markAsDirty(): AccessableFormArray<TModel>;
    markAsTouched(): AccessableFormArray<TModel>;
    markAsUnused(): AccessableFormArray<TModel>;
    markAsUsed(): AccessableFormArray<TModel>;
    reset(models: TModel[]): AccessableFormArray<TModel>;
}
