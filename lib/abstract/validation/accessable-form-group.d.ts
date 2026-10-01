import { FormGroup } from '@angular/forms';
import { IAccessableFormControl, IAccessableFormOptions } from '../../interface/validation/i-accessable-form-control';
import { Observable } from 'rxjs';
export declare abstract class AccessableFormGroup<TFields, TModel extends object> implements IAccessableFormControl<AccessableFormGroup<TFields, TModel>, TModel> {
    control: FormGroup;
    private fields$;
    private changed$;
    private fieldChanged$;
    initialize(fields: TFields): void;
    markAsUsed(opts?: IAccessableFormOptions): AccessableFormGroup<TFields, TModel>;
    markAsUnused(opts?: IAccessableFormOptions): AccessableFormGroup<TFields, TModel>;
    /**
     * `mrd-form-field` markiert ein Feld bei jedem valueChanges als dirty - auch beim Laden per reset() und bei
     * enable()/disable(). Nach dem programmatischen Befuellen gilt das Formular damit wieder als unveraendert;
     * `emitEvent: false`, damit die Neuvalidierung nicht erneut valueChanges und damit dirty ausloest.
     */
    markAsUnchanged(): AccessableFormGroup<TFields, TModel>;
    /**
     * `mrd-form-field` zeigt Fehler erst nach valueChanges oder Touched/Blur des Feldes - beim Speichern
     * unberuehrter Felder also nicht. Zeigt die Fehler aller Felder an; dirty bleibt nur, wenn der Benutzer
     * wirklich etwas geaendert hat, sonst fragt ein Seitenwechsel grundlos nach.
     */
    showErrors(): AccessableFormGroup<TFields, TModel>;
    markAsDirty(opts?: IAccessableFormOptions): AccessableFormGroup<TFields, TModel>;
    markAsTouched(opts?: IAccessableFormOptions): AccessableFormGroup<TFields, TModel>;
    reset(model: TModel, propagateChanges?: boolean): AccessableFormGroup<TFields, TModel>;
    get fields(): TFields;
    /** `TFields` ist generisch und fuer underscore nicht als Objekt erkennbar; vor `initialize()` leer. */
    private get controls$();
    get value(): TModel;
    get rawValue(): any;
    get dirty(): boolean;
    get valid(): boolean;
    get touched(): boolean;
    disable(opts?: IAccessableFormOptions): AccessableFormGroup<TFields, TModel>;
    enable(opts?: IAccessableFormOptions): AccessableFormGroup<TFields, TModel>;
    get disabled(): boolean;
    get enabled(): boolean;
    get valueChanges(): Observable<void>;
    get fieldChanges(): Observable<IAccessableFieldChange>;
}
export interface IAccessableFieldChange {
    name: string;
    control: IAccessableFormControl<any, any>;
}
