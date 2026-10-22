import { BaseObject } from "../ui/base-object";
import { IReadonlyStoreRestService } from "../../interface/http/i-readonly-stored-rest-service";
import { ItemStore } from "../../impl/util/item-store";
import { ReadonlyRestServiceObserver } from "../../impl/http/readonly-rest-service-observer";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare abstract class AbstractStoredReadonlyRestservice<TModel> extends BaseObject implements IReadonlyStoreRestService<TModel> {
    abstract url: string;
    abstract store: ItemStore<TModel>;
    abstract identifier: string;
    protected abstract http: HttpClient;
    readonly observer: ReadonlyRestServiceObserver<TModel>;
    protected constructor(restServiceObserver?: ReadonlyRestServiceObserver<TModel>);
    all(searchParams?: object, httpOptions?: object): Observable<TModel[]>;
    show(id: any, getParams?: object, httpOptions?: object): Observable<TModel>;
    /**
     * Basis-URL je Methode, ohne Id des Eintrags (die haengt der Handler an). Ueberschreiben, wenn eine Methode
     * eine andere URL braucht als `url`, z. B. Lesen ueber mehrere Betriebe, Schreiben nur fuer den des Eintrags.
     */
    protected urlFuerAll(): string;
    protected urlFuerShow(id: any): string;
}
