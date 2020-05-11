import { AbstractStoredReadonlyRestservice } from "./abstract-stored-readonly-restservice";
import { Observable } from 'rxjs';
import { TimestampItemStore } from "../../impl/util/timestamp-item-store";
export declare abstract class AbstractReadonlyCachedRestservice<TModel> extends AbstractStoredReadonlyRestservice<TModel> {
    abstract store: TimestampItemStore<TModel>;
    all(searchParams?: object, httpOptions?: object): Observable<TModel[]>;
    show(id: any, getParams?: object, httpOptions?: object): Observable<TModel>;
}
