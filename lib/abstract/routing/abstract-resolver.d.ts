import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractRouteConfiguration } from "./abstract-route-configuration";
export declare abstract class AbstractResolver<TData, TRouteParams> implements Resolve<TData> {
    protected route: ActivatedRouteSnapshot;
    protected state: RouterStateSnapshot;
    protected abstract onResolve(): Observable<TData>;
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TData> | Promise<TData> | TData;
    protected get routeConfiguration(): AbstractRouteConfiguration<TRouteParams>;
}
