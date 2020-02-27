import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
export declare abstract class AbstractActivationQueuedGuard implements CanActivate {
    private readonly queue;
    private route;
    private state;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    protected sequence(step: CanActivate[] | CanActivate): AbstractActivationQueuedGuard;
    private runQueueRecursive;
}
