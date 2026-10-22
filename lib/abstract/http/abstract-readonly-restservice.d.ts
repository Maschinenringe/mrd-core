import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseObject } from '../ui/base-object';
import { IReadonlyRestService } from '../../interface/http/i-readonly-restservice';
import { ReadonlyRestServiceObserver } from '../../impl/http/readonly-rest-service-observer';
export declare abstract class AbstractReadonlyRestservice<T> extends BaseObject implements IReadonlyRestService<T> {
    identifier: string;
    abstract url: string;
    readonly observer: ReadonlyRestServiceObserver<T>;
    protected abstract http: HttpClient;
    protected constructor(restServiceObserver?: ReadonlyRestServiceObserver<T>);
    all(searchParams?: object, httpOptions?: object): Observable<T[]>;
    show(id: any, getParams?: object, httpOptions?: object): Observable<T>;
    /**
     * Basis-URL je Methode, ohne Id des Eintrags (die haengt der Handler an). Ueberschreiben, wenn eine Methode
     * eine andere URL braucht als `url`, z. B. Lesen ueber mehrere Betriebe, Schreiben nur fuer den des Eintrags.
     */
    protected urlFuerAll(): string;
    protected urlFuerShow(id: any): string;
}
