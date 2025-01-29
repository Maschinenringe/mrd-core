import { IAccessableFormControl } from '../../interface/validation/i-accessable-form-control';
import { FormArray } from '@angular/forms';
import { IValidator } from '../../interface/validation/i-validator';
import { Observable } from 'rxjs';
export declare const Type: FunctionConstructor;
export interface Type<T> extends Function {
    new (...args: any[]): T;
}
export declare abstract class AccessableFormArray<TModel> implements IAccessableFormControl<AccessableFormArray<TModel>, TModel[]> {
    private validators$;
    control: FormArray;
    type: Type<IAccessableFormControl<any, any>>;
    private required$;
    private entries$;
    private previousEntries$;
    initialize(type: Type<IAccessableFormControl<any, any>>): void;
    push(entry: TModel, skipSetPreviousEntries?: boolean): IAccessableFormControl<any, TModel>;
    removeAt(index: number, skipSetPreviousEntries?: boolean): void;
    validateWith(validators: IValidator[]): AccessableFormArray<TModel>;
    clearValidators(): void;
    generateFormEntry(value: any): IAccessableFormControl<any, TModel>;
    get errors(): string[];
    get error(): IValidator;
    get validators(): IValidator[];
    get required(): boolean;
    get dirty(): boolean;
    get touched(): boolean;
    get valid(): boolean;
    get value(): TModel[];
    get entries(): IAccessableFormControl<any, TModel>[];
    get previousEntries(): IAccessableFormControl<any, TModel>[];
    get valueChanges(): Observable<any>;
    disable(): AccessableFormArray<TModel>;
    enable(): AccessableFormArray<TModel>;
    markAsDirty(): AccessableFormArray<TModel>;
    markAsTouched(): AccessableFormArray<TModel>;
    markAsUnused(): AccessableFormArray<TModel>;
    markAsUsed(): AccessableFormArray<TModel>;
    reset(models: TModel[], skipSetPreviousEntries?: boolean): AccessableFormArray<TModel>;
}
