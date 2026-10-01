import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractRouteConfiguration } from "./abstract-route-configuration";
import { ActivationGuardResult, IActivationGuard } from "../../interface/routing/i-activation-guard";
export declare abstract class AbstractActivationGuard<TSuccessType, TRouteParams> implements IActivationGuard {
    protected abstract onSuccess(result: TSuccessType): Observable<boolean>;
    protected abstract onError(error: any): Observable<boolean>;
    protected abstract onActivate(): Observable<TSuccessType>;
    protected route: ActivatedRouteSnapshot;
    protected state: RouterStateSnapshot;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ActivationGuardResult;
    protected get routeConfiguration(): AbstractRouteConfiguration<TRouteParams>;
}
