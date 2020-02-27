import { Observable } from 'rxjs';
/** Basis Interface um einen vollwertigen RestService zu implementieren */
export interface IWriteableRestService<T> {
    /** Erzeugt ein neues Object */
    create(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    /** Updated ein Object */
    update(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    /** Führt ein Teilupdate durch */
    partialUpdate(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    /** Entscheided anhand des Feldes "identifier" welche Operation getätigt werden muss */
    save(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    /** Löscht eine Entität vom Server */
    destroy(id: any, getParams?: object, httpOptions?: object): Observable<void>;
}
