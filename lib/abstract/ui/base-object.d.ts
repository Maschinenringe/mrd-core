import { OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from "rxjs";
import { ISubscriptionHandler } from "../../interface/util/i-subscription-handler";
/** Abstracte Klasse von der alle Komponenten und Services erben. Sie stellt eine Speicherverwaltung für Observables bereit. */
export declare abstract class BaseObject implements OnDestroy {
    /** Wird benutzt um Observables bei der Zerstörung einer Komponente auszulösen.
     * Wird im ngOnDestroy ausgelöst.
     */
    protected $unsubscribe: Subject<void>;
    /** Funktion zur dauerhaften Überwachung von Subscriptions. Speicher wird bei Zerstörung der Komponente freigegeben. */
    protected watch<T>(observable: Observable<T>, handler: ISubscriptionHandler): Subscription;
    /** Proxy für SubscriptionManager.subscribe */
    protected subscribe<T>(observable: Observable<T>, handler: ISubscriptionHandler): Subscription;
    /** Proxy für SubscriptionManager.subscribeAs */
    protected subscribeAs<T>(name: string, observable: Observable<T>, handler: ISubscriptionHandler): Subscription;
    /** Alle Observables die mit watch überwacht werden, werden hier ausgelöst. Angular kümmert sich im den Aufruf.
     *  Falls das Kind auch das Interface 'OnDestroy' implementiert, nicht vergessen super.ngOnDestroy() auszurufen, oder der Speicher
     *  wird nicht freigegeben.
     */
    ngOnDestroy(): void;
}
