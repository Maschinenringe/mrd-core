import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IReadonlyRestService } from "../../interface/http/i-readonly-restservice";
import { ReadonlyRestServiceObserver } from "./readonly-rest-service-observer";
export declare class ReadonlyRestHandler<T> implements IReadonlyRestService<T> {
    readonly http: HttpClient;
    readonly url: string;
    readonly observer: ReadonlyRestServiceObserver<T>;
    identifier: string;
    constructor(http: HttpClient, url: string, observer: ReadonlyRestServiceObserver<T>);
    all(searchParams?: object, httpOptions?: object): Observable<T[]>;
    show(id: any, getParams?: object, httpOptions?: object): Observable<T>;
}
