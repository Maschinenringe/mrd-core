import { Observable } from 'rxjs';
/** Basis Interface um einen Restservice mit Lesezugriff zu implementieren. */
export interface IReadonlyRestService<T> {
    /** Der Key Parameter um zu testen ob ein Object neu angelegt, oder geladen wurde. Z.B.: ID */
    identifier: string;
    /** Holt alle Entitäten ab */
    all(searchParams?: object, httpOptions?: object): Observable<T[]>;
    /** Holt eine Entität anhand einer ID ab */
    show(id: any, getParams?: object, httpOptions?: object): Observable<T>;
}
