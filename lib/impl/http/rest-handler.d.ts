import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IWriteableRestService } from "../../interface/http/i-writeable-rest-service";
import { RestServiceObserver } from "./rest-service-observer";
export declare class RestHandler<T> implements IWriteableRestService<T> {
    readonly http: HttpClient;
    readonly url: string;
    readonly observer: RestServiceObserver<T>;
    readonly identifier: string;
    constructor(http: HttpClient, url: string, observer: RestServiceObserver<T>, identifier: string);
    create(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    destroy(id: any, getParams?: object, httpOptions?: object): Observable<void>;
    partialUpdate(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    save(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    set(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    update(model: T, getParams?: object, httpOptions?: object): Observable<T>;
}
