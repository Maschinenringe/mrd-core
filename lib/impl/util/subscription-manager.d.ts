import { Observable, Subscription } from "rxjs";
import { ISubscriptionHandler } from "../../interface/util/i-subscription-handler";
/** Diese Klasse kümmert sich um die Speicherverwaltung von Subscriptions.
 Diese erzeugen Memory-Leaks, wenn sie nicht sauber gelöscht werden. */
export declare abstract class SubscriptionManager {
    private static subscriptions;
    /** Subscription mit einem Namen. Diese Funktion ist nützlich,
     falls eine Subscription öfters aufgerufen wird und die vorherige, falls
     noch nicht abgeschlossen, beendet werden soll (HTTP Aufrufe). */
    static subscribeAs<T>(name: string, observable: Observable<T>, handler: ISubscriptionHandler): Subscription;
    /** Funktion für einmalige Subscriptions (z.B.: Initialisierungsaufrufe) */
    static subscribe<T>(observable: Observable<T>, handler: ISubscriptionHandler): Subscription;
    private static pushSubscription;
    private static deleteSubscription;
}
