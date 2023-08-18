import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractRouteConfiguration } from "./abstract-route-configuration";
export declare abstract class AbstractActivationGuard<TSuccessType, TRouteParams> implements CanActivate {
    protected abstract onSuccess(result: TSuccessType): Observable<boolean>;
    protected abstract onError(error: any): Observable<boolean>;
    protected abstract onActivate(): Observable<TSuccessType>;
    protected route: ActivatedRouteSnapshot;
    protected state: RouterStateSnapshot;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    protected get routeConfiguration(): AbstractRouteConfiguration<TRouteParams>;
}
