import { AbstractStoredReadonlyRestservice } from "./abstract-stored-readonly-restservice";
import { IWriteableRestService } from "../../interface/http/i-writeable-rest-service";
import { RestServiceObserver } from "../../impl/http/rest-service-observer";
import { Observable } from 'rxjs';
export declare abstract class AbstractStoredRestservice<TModel> extends AbstractStoredReadonlyRestservice<TModel> implements IWriteableRestService<TModel> {
    readonly observer: RestServiceObserver<TModel>;
    protected constructor();
    create(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    destroy(id: any, getParams?: object, httpOptions?: object): Observable<void>;
    partialUpdate(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    save(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    set(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    update(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    protected modifyCreateCall(observable: Observable<TModel>): Observable<TModel>;
    protected modifyUpdateCall(observable: Observable<TModel>): Observable<TModel>;
    /** Basis-URLs der Schreibmethoden, siehe `urlFuerAll`; ohne Ueberschreiben gilt `url`. */
    protected urlFuerCreate(model: TModel): string;
    protected urlFuerUpdate(model: TModel): string;
    protected urlFuerPartialUpdate(model: TModel): string;
    protected urlFuerSet(model: TModel): string;
    /** Fuer `destroy` ist nur die Id bekannt; den Eintrag dazu liefert bei Bedarf der Store. */
    protected urlFuerDestroy(id: any): string;
    /** `save` legt an oder aktualisiert, je nachdem ob der Eintrag schon eine Id hat. */
    protected urlFuerSave(model: TModel): string;
    private hatId;
}
