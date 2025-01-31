import { IAccessableFormControl, IAccessableFormOptions } from '../../interface/validation/i-accessable-form-control';
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
    push(entry: TModel, skipSetPreviousEntries?: boolean, opts?: IAccessableFormOptions): IAccessableFormControl<any, TModel>;
    removeAt(index: number, skipSetPreviousEntries?: boolean, opts?: IAccessableFormOptions): void;
    validateWith(validators: IValidator[], opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
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
    disable(opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    enable(opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    markAsDirty(opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    markAsTouched(opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    markAsUnused(opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    markAsUsed(opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    reset(models: TModel[], skipSetPreviousEntries?: boolean): AccessableFormArray<TModel>;
}
