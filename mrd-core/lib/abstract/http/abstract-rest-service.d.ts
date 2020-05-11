import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AbstractReadonlyRestservice } from './abstract-readonly-restservice';
import { IWriteableRestService } from "../../interface/http/i-writeable-rest-service";
import { RestServiceObserver } from "../../impl/http/rest-service-observer";
export declare abstract class AbstractRestservice<T> extends AbstractReadonlyRestservice<T> implements IWriteableRestService<T> {
    abstract identifier: string;
    readonly observer: RestServiceObserver<any>;
    protected abstract http: HttpClient;
    protected constructor();
    create(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    destroy(id: any, getParams?: object, httpOptions?: object): Observable<void>;
    partialUpdate(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    save(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    update(model: T, getParams?: object, httpOptions?: object): Observable<T>;
}
