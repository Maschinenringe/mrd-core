/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/ui/base-object.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from "rxjs";
import { SubscriptionManager } from "../../impl/util/subscription-manager";
/**
 * Abstracte Klasse von der alle Komponenten und Services erben. Sie stellt eine Speicherverwaltung für Observables bereit.
 * @abstract
 */
export class BaseObject {
    constructor() {
        /**
         * Wird benutzt um Observables bei der Zerstörung einer Komponente auszulösen.
         * Wird im ngOnDestroy ausgelöst.
         */
        this.$unsubscribe = new Subject();
    }
    /**
     * Funktion zur dauerhaften Überwachung von Subscriptions. Speicher wird bei Zerstörung der Komponente freigegeben.
     * @protected
     * @template T
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    watch(observable, handler) {
        return observable
            .pipe(takeUntil(this.$unsubscribe), finalize((/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (handler.onFinished) {
                handler.onFinished(...args);
            }
        })))
            .subscribe((/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (handler.onSuccess) {
                handler.onSuccess(...args);
            }
        }), (/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (handler.onError) {
                handler.onError(...args);
            }
        }));
    }
    /**
     * Proxy für SubscriptionManager.subscribe
     * @protected
     * @template T
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    subscribe(observable, handler) {
        return SubscriptionManager.subscribe(observable, handler);
    }
    /**
     * Proxy für SubscriptionManager.subscribeAs
     * @protected
     * @template T
     * @param {?} name
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    subscribeAs(name, observable, handler) {
        return SubscriptionManager.subscribeAs(name, observable, handler);
    }
    /**
     * Alle Observables die mit watch überwacht werden, werden hier ausgelöst. Angular kümmert sich im den Aufruf.
     *  Falls das Kind auch das Interface 'OnDestroy' implementiert, nicht vergessen super.ngOnDestroy() auszurufen, oder der Speicher
     *  wird nicht freigegeben.
     * @return {?}
     */
    ngOnDestroy() {
        this.$unsubscribe.next();
        this.$unsubscribe.complete();
    }
}
if (false) {
    /**
     * Wird benutzt um Observables bei der Zerstörung einer Komponente auszulösen.
     * Wird im ngOnDestroy ausgelöst.
     * @type {?}
     * @protected
     */
    BaseObject.prototype.$unsubscribe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1vYmplY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC91aS9iYXNlLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFhLE9BQU8sRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7QUFJekUsTUFBTSxPQUFnQixVQUFVO0lBQWhDOzs7OztRQUlZLGlCQUFZLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7SUFvRDlELENBQUM7Ozs7Ozs7OztJQWxEVyxLQUFLLENBQ2IsVUFBeUIsRUFDekIsT0FBNkI7UUFFN0IsT0FBTyxVQUFVO2FBQ2QsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQzVCLFFBQVE7Ozs7UUFBRSxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUN0QixPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDN0I7UUFDSCxDQUFDLEVBQUMsQ0FDSDthQUNBLFNBQVM7Ozs7UUFDUixDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7WUFDakIsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2dCQUNyQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDNUI7UUFDSCxDQUFDOzs7O1FBQ0QsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1lBQ2pCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxFQUNGLENBQUM7SUFDTixDQUFDOzs7Ozs7Ozs7SUFFUyxTQUFTLENBQ2pCLFVBQXlCLEVBQ3pCLE9BQTZCO1FBRTdCLE9BQU8sbUJBQW1CLENBQUMsU0FBUyxDQUFJLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7Ozs7O0lBRVMsV0FBVyxDQUNuQixJQUFZLEVBQ1osVUFBeUIsRUFDekIsT0FBNkI7UUFFN0IsT0FBTyxtQkFBbUIsQ0FBQyxXQUFXLENBQUksSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7O0lBS00sV0FBVztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztDQUVGOzs7Ozs7OztJQXBEQyxrQ0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2ZpbmFsaXplLCB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtJU3Vic2NyaXB0aW9uSGFuZGxlcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91dGlsL2ktc3Vic2NyaXB0aW9uLWhhbmRsZXJcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9uTWFuYWdlcn0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC9zdWJzY3JpcHRpb24tbWFuYWdlclwiO1xuXG5cbi8qKiBBYnN0cmFjdGUgS2xhc3NlIHZvbiBkZXIgYWxsZSBLb21wb25lbnRlbiB1bmQgU2VydmljZXMgZXJiZW4uIFNpZSBzdGVsbHQgZWluZSBTcGVpY2hlcnZlcndhbHR1bmcgZsO8ciBPYnNlcnZhYmxlcyBiZXJlaXQuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZU9iamVjdCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBXaXJkIGJlbnV0enQgdW0gT2JzZXJ2YWJsZXMgYmVpIGRlciBaZXJzdMO2cnVuZyBlaW5lciBLb21wb25lbnRlIGF1c3p1bMO2c2VuLlxuICAgKiBXaXJkIGltIG5nT25EZXN0cm95IGF1c2dlbMO2c3QuXG4gICAqL1xuICBwcm90ZWN0ZWQgJHVuc3Vic2NyaWJlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgLyoqIEZ1bmt0aW9uIHp1ciBkYXVlcmhhZnRlbiDDnGJlcndhY2h1bmcgdm9uIFN1YnNjcmlwdGlvbnMuIFNwZWljaGVyIHdpcmQgYmVpIFplcnN0w7ZydW5nIGRlciBLb21wb25lbnRlIGZyZWlnZWdlYmVuLiAqL1xuICBwcm90ZWN0ZWQgd2F0Y2g8VD4oXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPixcbiAgICBoYW5kbGVyOiBJU3Vic2NyaXB0aW9uSGFuZGxlclxuICApOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuJHVuc3Vic2NyaWJlKSxcbiAgICAgICAgZmluYWxpemUoICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgIGlmIChoYW5kbGVyLm9uRmluaXNoZWQpIHtcbiAgICAgICAgICAgIGhhbmRsZXIub25GaW5pc2hlZCguLi5hcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICBpZiAoaGFuZGxlci5vblN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGhhbmRsZXIub25TdWNjZXNzKC4uLmFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgICAgaWYgKGhhbmRsZXIub25FcnJvcikge1xuICAgICAgICAgICAgaGFuZGxlci5vbkVycm9yKC4uLmFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuICAvKiogUHJveHkgZsO8ciBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmliZSAqL1xuICBwcm90ZWN0ZWQgc3Vic2NyaWJlPFQ+KFxuICAgIG9ic2VydmFibGU6IE9ic2VydmFibGU8VD4sXG4gICAgaGFuZGxlcjogSVN1YnNjcmlwdGlvbkhhbmRsZXIsXG4gICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaWJlPFQ+KG9ic2VydmFibGUsIGhhbmRsZXIpO1xuICB9XG4gIC8qKiBQcm94eSBmw7xyIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaWJlQXMgKi9cbiAgcHJvdGVjdGVkIHN1YnNjcmliZUFzPFQ+KFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFQ+LFxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyXG4gICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaWJlQXM8VD4obmFtZSwgb2JzZXJ2YWJsZSwgaGFuZGxlcik7XG4gIH1cbiAgLyoqIEFsbGUgT2JzZXJ2YWJsZXMgZGllIG1pdCB3YXRjaCDDvGJlcndhY2h0IHdlcmRlbiwgd2VyZGVuIGhpZXIgYXVzZ2Vsw7ZzdC4gQW5ndWxhciBrw7xtbWVydCBzaWNoIGltIGRlbiBBdWZydWYuXG4gICAqICBGYWxscyBkYXMgS2luZCBhdWNoIGRhcyBJbnRlcmZhY2UgJ09uRGVzdHJveScgaW1wbGVtZW50aWVydCwgbmljaHQgdmVyZ2Vzc2VuIHN1cGVyLm5nT25EZXN0cm95KCkgYXVzenVydWZlbiwgb2RlciBkZXIgU3BlaWNoZXJcbiAgICogIHdpcmQgbmljaHQgZnJlaWdlZ2ViZW4uXG4gICAqL1xuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy4kdW5zdWJzY3JpYmUubmV4dCgpO1xuICAgIHRoaXMuJHVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XG4gIH1cblxufVxuIl19