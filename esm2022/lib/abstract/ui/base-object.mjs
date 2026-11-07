import { Directive } from '@angular/core';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject } from "rxjs";
import { SubscriptionManager } from "../../impl/util/subscription-manager";
import * as i0 from "@angular/core";
/** Abstracte Klasse von der alle Komponenten und Services erben. Sie stellt eine Speicherverwaltung für Observables bereit. */
export class BaseObject {
    /** Wird benutzt um Observables bei der Zerstörung einer Komponente auszulösen.
     * Wird im ngOnDestroy ausgelöst.
     */
    $unsubscribe = new Subject();
    /** Funktion zur dauerhaften Überwachung von Subscriptions. Speicher wird bei Zerstörung der Komponente freigegeben. */
    watch(observable, handler) {
        return observable
            .pipe(takeUntil(this.$unsubscribe), finalize((...args) => {
            if (handler.onFinished) {
                handler.onFinished(...args);
            }
        }))
            .subscribe((...args) => {
            if (handler.onSuccess) {
                handler.onSuccess(...args);
            }
        }, (...args) => {
            if (handler.onError) {
                handler.onError(...args);
            }
        });
    }
    /**
     * Wie `watch`, ruft aber `onSuccess` des Handlers zusaetzlich einmal sofort auf (ohne Wert), z. B. um einen Zustand
     * gleich zu berechnen und danach bei jeder Änderung neu: `this.watchAndTrigger(selektor.data.changed, handler)`.
     * Der sofortige Aufruf kommt vor dem Abonnieren; ein Observable, das selbst sofort einen Wert liefert, loest den
     * Handler deshalb ein zweites Mal aus.
     */
    watchAndTrigger(observable, handler) {
        if (handler.onSuccess) {
            handler.onSuccess();
        }
        return this.watch(observable, handler);
    }
    /** Proxy für SubscriptionManager.subscribe */
    subscribe(observable, handler) {
        return SubscriptionManager.subscribe(observable, handler);
    }
    /** Proxy für SubscriptionManager.subscribeAs */
    subscribeAs(name, observable, handler) {
        return SubscriptionManager.subscribeAs(name, observable, handler);
    }
    /** Alle Observables die mit watch überwacht werden, werden hier ausgelöst. Angular kümmert sich im den Aufruf.
     *  Falls das Kind auch das Interface 'OnDestroy' implementiert, nicht vergessen super.ngOnDestroy() auszurufen, oder der Speicher
     *  wird nicht freigegeben.
     */
    ngOnDestroy() {
        this.$unsubscribe.next();
        this.$unsubscribe.complete();
    }
    /** @nocollapse */ static ɵfac = function BaseObject_Factory(t) { return new (t || BaseObject)(); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: BaseObject });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseObject, [{
        type: Directive
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1vYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2Fic3RyYWN0L3VpL2Jhc2Utb2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQWEsT0FBTyxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBRXZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDOztBQUl6RSwrSEFBK0g7QUFDL0gsTUFBTSxPQUFnQixVQUFVO0lBQzlCOztPQUVHO0lBQ08sWUFBWSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO0lBQzVELHVIQUF1SDtJQUM3RyxLQUFLLENBQ2IsVUFBeUIsRUFDekIsT0FBNkI7UUFFN0IsT0FBTyxVQUFVO2FBQ2QsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQzVCLFFBQVEsQ0FBRSxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUN0QixPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDN0I7UUFDSCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsQ0FDUixDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7WUFDakIsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2dCQUNyQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDNUI7UUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1lBQ2pCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBQ0Q7Ozs7O09BS0c7SUFDTyxlQUFlLENBQ3ZCLFVBQXlCLEVBQ3pCLE9BQTZCO1FBRTdCLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUNyQixPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDckI7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCw4Q0FBOEM7SUFDcEMsU0FBUyxDQUNqQixVQUF5QixFQUN6QixPQUE2QjtRQUU3QixPQUFPLG1CQUFtQixDQUFDLFNBQVMsQ0FBSSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNELGdEQUFnRDtJQUN0QyxXQUFXLENBQ25CLElBQVksRUFDWixVQUF5QixFQUN6QixPQUE2QjtRQUU3QixPQUFPLG1CQUFtQixDQUFDLFdBQVcsQ0FBSSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFDRDs7O09BR0c7SUFDSSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMvQixDQUFDO3VGQXJFbUIsVUFBVTs0RkFBVixVQUFVOzt1RkFBVixVQUFVO2NBRi9CLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtmaW5hbGl6ZSwgdGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge0lTdWJzY3JpcHRpb25IYW5kbGVyfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL3V0aWwvaS1zdWJzY3JpcHRpb24taGFuZGxlclwiO1xyXG5pbXBvcnQge1N1YnNjcmlwdGlvbk1hbmFnZXJ9IGZyb20gXCIuLi8uLi9pbXBsL3V0aWwvc3Vic2NyaXB0aW9uLW1hbmFnZXJcIjtcclxuXHJcblxyXG5ARGlyZWN0aXZlKClcclxuLyoqIEFic3RyYWN0ZSBLbGFzc2Ugdm9uIGRlciBhbGxlIEtvbXBvbmVudGVuIHVuZCBTZXJ2aWNlcyBlcmJlbi4gU2llIHN0ZWxsdCBlaW5lIFNwZWljaGVydmVyd2FsdHVuZyBmw7xyIE9ic2VydmFibGVzIGJlcmVpdC4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VPYmplY3QgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIC8qKiBXaXJkIGJlbnV0enQgdW0gT2JzZXJ2YWJsZXMgYmVpIGRlciBaZXJzdMO2cnVuZyBlaW5lciBLb21wb25lbnRlIGF1c3p1bMO2c2VuLlxyXG4gICAqIFdpcmQgaW0gbmdPbkRlc3Ryb3kgYXVzZ2Vsw7ZzdC5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgJHVuc3Vic2NyaWJlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAvKiogRnVua3Rpb24genVyIGRhdWVyaGFmdGVuIMOcYmVyd2FjaHVuZyB2b24gU3Vic2NyaXB0aW9ucy4gU3BlaWNoZXIgd2lyZCBiZWkgWmVyc3TDtnJ1bmcgZGVyIEtvbXBvbmVudGUgZnJlaWdlZ2ViZW4uICovXHJcbiAgcHJvdGVjdGVkIHdhdGNoPFQ+KFxyXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPixcclxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyXHJcbiAgKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiBvYnNlcnZhYmxlXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLiR1bnN1YnNjcmliZSksXHJcbiAgICAgICAgZmluYWxpemUoICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGhhbmRsZXIub25GaW5pc2hlZCkge1xyXG4gICAgICAgICAgICBoYW5kbGVyLm9uRmluaXNoZWQoLi4uYXJncyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGhhbmRsZXIub25TdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIub25TdWNjZXNzKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaGFuZGxlci5vbkVycm9yKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIub25FcnJvciguLi5hcmdzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFdpZSBgd2F0Y2hgLCBydWZ0IGFiZXIgYG9uU3VjY2Vzc2AgZGVzIEhhbmRsZXJzIHp1c2FldHpsaWNoIGVpbm1hbCBzb2ZvcnQgYXVmIChvaG5lIFdlcnQpLCB6LiBCLiB1bSBlaW5lbiBadXN0YW5kXHJcbiAgICogZ2xlaWNoIHp1IGJlcmVjaG5lbiB1bmQgZGFuYWNoIGJlaSBqZWRlciDDhG5kZXJ1bmcgbmV1OiBgdGhpcy53YXRjaEFuZFRyaWdnZXIoc2VsZWt0b3IuZGF0YS5jaGFuZ2VkLCBoYW5kbGVyKWAuXHJcbiAgICogRGVyIHNvZm9ydGlnZSBBdWZydWYga29tbXQgdm9yIGRlbSBBYm9ubmllcmVuOyBlaW4gT2JzZXJ2YWJsZSwgZGFzIHNlbGJzdCBzb2ZvcnQgZWluZW4gV2VydCBsaWVmZXJ0LCBsb2VzdCBkZW5cclxuICAgKiBIYW5kbGVyIGRlc2hhbGIgZWluIHp3ZWl0ZXMgTWFsIGF1cy5cclxuICAgKi9cclxuICBwcm90ZWN0ZWQgd2F0Y2hBbmRUcmlnZ2VyPFQ+KFxyXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPixcclxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyXHJcbiAgKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIGlmIChoYW5kbGVyLm9uU3VjY2Vzcykge1xyXG4gICAgICBoYW5kbGVyLm9uU3VjY2VzcygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMud2F0Y2gob2JzZXJ2YWJsZSwgaGFuZGxlcik7XHJcbiAgfVxyXG4gIC8qKiBQcm94eSBmw7xyIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaWJlICovXHJcbiAgcHJvdGVjdGVkIHN1YnNjcmliZTxUPihcclxuICAgIG9ic2VydmFibGU6IE9ic2VydmFibGU8VD4sXHJcbiAgICBoYW5kbGVyOiBJU3Vic2NyaXB0aW9uSGFuZGxlcixcclxuICApOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaWJlPFQ+KG9ic2VydmFibGUsIGhhbmRsZXIpO1xyXG4gIH1cclxuICAvKiogUHJveHkgZsO8ciBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmliZUFzICovXHJcbiAgcHJvdGVjdGVkIHN1YnNjcmliZUFzPFQ+KFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPixcclxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyXHJcbiAgKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmliZUFzPFQ+KG5hbWUsIG9ic2VydmFibGUsIGhhbmRsZXIpO1xyXG4gIH1cclxuICAvKiogQWxsZSBPYnNlcnZhYmxlcyBkaWUgbWl0IHdhdGNoIMO8YmVyd2FjaHQgd2VyZGVuLCB3ZXJkZW4gaGllciBhdXNnZWzDtnN0LiBBbmd1bGFyIGvDvG1tZXJ0IHNpY2ggaW0gZGVuIEF1ZnJ1Zi5cclxuICAgKiAgRmFsbHMgZGFzIEtpbmQgYXVjaCBkYXMgSW50ZXJmYWNlICdPbkRlc3Ryb3knIGltcGxlbWVudGllcnQsIG5pY2h0IHZlcmdlc3NlbiBzdXBlci5uZ09uRGVzdHJveSgpIGF1c3p1cnVmZW4sIG9kZXIgZGVyIFNwZWljaGVyXHJcbiAgICogIHdpcmQgbmljaHQgZnJlaWdlZ2ViZW4uXHJcbiAgICovXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy4kdW5zdWJzY3JpYmUubmV4dCgpO1xyXG4gICAgdGhpcy4kdW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==