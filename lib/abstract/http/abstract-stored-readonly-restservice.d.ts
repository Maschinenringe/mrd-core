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
    /** Injector, der diesen Service erzeugt hat; ohne DI erzeugte Instanzen (z. B. in Tests mit `new`) haben keinen. */
    private readonly erzeugendeInjector;
    private readonly bereiche;
    protected constructor(restServiceObserver?: ReadonlyRestServiceObserver<TModel>);
    /**
     * Eigene Instanz dieses Services fuer einen Bereich der Anwendung (z. B. eine Maske, die Daten eines anderen Betriebs
     * laedt), damit sie den Store der Seite nicht ueberschreibt. Sie hat eigenen Store und eigenen Kontext (`forBetrieb`
     * usw.), teilt aber die Abhaengigkeiten (HttpClient, andere Services) mit dieser Instanz. Je Name gibt es eine Instanz.
     */
    bereich(name: string): this;
    /** Leert den Store des Bereichs und gibt die Instanz frei; der naechste Aufruf von `bereich(name)` beginnt neu. */
    bereichFreigeben(name: string): void;
    private static injectorImKontext;
    all(searchParams?: object, httpOptions?: object): Observable<TModel[]>;
    show(id: any, getParams?: object, httpOptions?: object): Observable<TModel>;
    /**
     * Basis-URL je Methode, ohne Id des Eintrags (die haengt der Handler an). Ueberschreiben, wenn eine Methode
     * eine andere URL braucht als `url`, z. B. Lesen ueber mehrere Betriebe, Schreiben nur fuer den des Eintrags.
     */
    protected urlFuerAll(): string;
    protected urlFuerShow(id: any): string;
}
