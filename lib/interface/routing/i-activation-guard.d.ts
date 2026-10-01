import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
export type ActivationGuardResult = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
/** Klassenbasierter Guard; strukturell gleich dem veralteten `CanActivate` aus `@angular/router`. */
export interface IActivationGuard {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ActivationGuardResult;
}
/** Ein Schritt eines `AbstractActivationQueuedGuard`: Guard-Instanz oder funktionaler Guard. */
export type ActivationGuardStep = IActivationGuard | CanActivateFn;
