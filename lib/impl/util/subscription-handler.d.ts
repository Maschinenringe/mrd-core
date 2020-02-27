/** Standart Implementierung zur Nutzung von Subscriptions
 *  Generell hat es wenig Sinn diese Klasse zu erzwingen,
 *  allerdings ergibt sich eine bessere Lesbarkeit des Codes daraus.
 */
import { ISubscriptionHandler } from "../../interface/util/i-subscription-handler";
export declare class SubscriptionHandler implements ISubscriptionHandler {
    onSuccess?: (...args: any[]) => any;
    onError?: (...args: any[]) => any;
    onFinished?: (...args: any[]) => any;
    constructor(onSuccess?: (...args: any[]) => any, onError?: (...args: any[]) => any, onFinished?: (...args: any[]) => any);
}
