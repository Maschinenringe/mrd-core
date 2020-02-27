export interface ISubscriptionHandler {
    onSuccess?: (...args: any[]) => any;
    onError?: (...args: any[]) => any;
    onFinished?: (...args: any[]) => any;
}
