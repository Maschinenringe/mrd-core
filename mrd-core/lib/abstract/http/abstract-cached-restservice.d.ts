import { AbstractReadonlyCachedRestservice } from "./abstract-readonly-cached-restservice";
import { RestServiceObserver } from "../../impl/http/rest-service-observer";
import { IWriteableRestService } from "../../interface/http/i-writeable-rest-service";
import { Observable } from 'rxjs';
export declare abstract class AbstractCachedRestservice<TModel> extends AbstractReadonlyCachedRestservice<TModel> implements IWriteableRestService<TModel> {
    readonly observer: RestServiceObserver<TModel>;
    create(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    destroy(id: any, getParams?: object, httpOptions?: object): Observable<void>;
    partialUpdate(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    save(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    set(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    update(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    protected modifyCreateCall(observable: Observable<TModel>): Observable<TModel>;
    protected modifyUpdateCall(observable: Observable<TModel>): Observable<TModel>;
}
