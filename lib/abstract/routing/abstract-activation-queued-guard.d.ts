import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ActivationGuardStep, ActivationGuardResult, IActivationGuard } from "../../interface/routing/i-activation-guard";
/**
 * Fuehrt Guards schrittweise aus: die Guards eines Schritts parallel, die Schritte nacheinander. Schlaegt ein
 * Guard fehl, laufen die folgenden Schritte nicht mehr. In Routen als Klasse oder ueber
 * `mapToCanActivate([...])` aus `@angular/router` verwendbar.
 */
export declare abstract class AbstractActivationQueuedGuard implements IActivationGuard {
    private readonly queue;
    private readonly injector;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ActivationGuardResult;
    protected sequence(step: ActivationGuardStep[] | ActivationGuardStep): AbstractActivationQueuedGuard;
    /** Nur ein per DI erzeugter Guard kennt seinen Injector; funktionale Schritte brauchen ihn. */
    private static currentInjector;
    private runQueueRecursive;
    private runStep;
    /** forkJoin braucht Observables; synchrone und Promise-Ergebnisse eines Guards werden daher umgewandelt. */
    private asObservable;
}
