import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IWriteableRestService } from "../../interface/http/i-writeable-rest-service";
import { RestServiceObserver } from "./rest-service-observer";
/**
 * Fuehrt die Schreibzugriffe eines REST-Services aus und meldet sie am Observer. Die `is...`-Flags gelten erst ab dem
 * Abonnieren (ein nie abonnierter Aufruf laesst sie unveraendert) und bis zum Ende des Requests.
 */
export declare class RestHandler<T> implements IWriteableRestService<T> {
    readonly http: HttpClient;
    readonly url: string;
    readonly observer: RestServiceObserver<T>;
    readonly identifier: string;
    constructor(http: HttpClient, url: string, observer: RestServiceObserver<T>, identifier: string);
    create(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    destroy(id: any, getParams?: object, httpOptions?: object): Observable<void>;
    partialUpdate(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    /** Legt an oder aktualisiert, je nachdem ob der Eintrag schon eine Id hat. */
    save(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    /** PUT auf die Basis-URL ohne Id, z. B. fuer Einstellungen, die es je Kontext nur einmal gibt. */
    set(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    update(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    private idVon;
}
