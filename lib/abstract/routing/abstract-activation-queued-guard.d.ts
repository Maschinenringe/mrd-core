import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ActivationGuardStep, ActivationGuardResult, IActivationGuard } from "../../interface/routing/i-activation-guard";
/**
 * Fuehrt Guards schrittweise aus: die Guards eines Schritts parallel, die Schritte nacheinander. Schlaegt ein
 * Guard fehl oder leitet um (`UrlTree`), laufen die folgenden Schritte nicht mehr; eine Umleitung wird an den Router
 * weitergegeben. Bricht der Router die Navigation ab, werden laufende Guards abbestellt. Fehler gelten als `false`.
 * In Routen als Klasse oder ueber `mapToCanActivate([...])` aus `@angular/router` verwendbar.
 */
export declare abstract class AbstractActivationQueuedGuard implements IActivationGuard {
    private readonly queue;
    private readonly injector;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ActivationGuardResult;
    protected sequence(step: ActivationGuardStep[] | ActivationGuardStep): AbstractActivationQueuedGuard;
    /** Nur ein per DI erzeugter Guard kennt seinen Injector; funktionale Schritte brauchen ihn. */
    private static currentInjector;
    private schritt;
    private runStep;
    /** forkJoin braucht Observables; synchrone und Promise-Ergebnisse eines Guards werden daher umgewandelt. */
    private asObservable;
}
