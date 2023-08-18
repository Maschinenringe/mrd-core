import { Component } from '@angular/core';
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
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: BaseObject, selectors: [["ng-component"]], decls: 0, vars: 0, template: function BaseObject_Template(rf, ctx) { }, encapsulation: 2 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseObject, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1vYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2Fic3RyYWN0L3VpL2Jhc2Utb2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQWEsT0FBTyxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBRXZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDOztBQU16RSwrSEFBK0g7QUFDL0gsTUFBTSxPQUFnQixVQUFVO0lBQzlCOztPQUVHO0lBQ08sWUFBWSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO0lBQzVELHVIQUF1SDtJQUM3RyxLQUFLLENBQ2IsVUFBeUIsRUFDekIsT0FBNkI7UUFFN0IsT0FBTyxVQUFVO2FBQ2QsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQzVCLFFBQVEsQ0FBRSxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUN0QixPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDN0I7UUFDSCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsQ0FDUixDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7WUFDakIsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2dCQUNyQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDNUI7UUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1lBQ2pCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBQ0QsOENBQThDO0lBQ3BDLFNBQVMsQ0FDakIsVUFBeUIsRUFDekIsT0FBNkI7UUFFN0IsT0FBTyxtQkFBbUIsQ0FBQyxTQUFTLENBQUksVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxnREFBZ0Q7SUFDdEMsV0FBVyxDQUNuQixJQUFZLEVBQ1osVUFBeUIsRUFDekIsT0FBNkI7UUFFN0IsT0FBTyxtQkFBbUIsQ0FBQyxXQUFXLENBQUksSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksV0FBVztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQzt1RkF0RG1CLFVBQVU7NEZBQVYsVUFBVTs7dUZBQVYsVUFBVTtjQUovQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLEVBQUU7YUFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge2ZpbmFsaXplLCB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7SVN1YnNjcmlwdGlvbkhhbmRsZXJ9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvdXRpbC9pLXN1YnNjcmlwdGlvbi1oYW5kbGVyXCI7XHJcbmltcG9ydCB7U3Vic2NyaXB0aW9uTWFuYWdlcn0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC9zdWJzY3JpcHRpb24tbWFuYWdlclwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG4vKiogQWJzdHJhY3RlIEtsYXNzZSB2b24gZGVyIGFsbGUgS29tcG9uZW50ZW4gdW5kIFNlcnZpY2VzIGVyYmVuLiBTaWUgc3RlbGx0IGVpbmUgU3BlaWNoZXJ2ZXJ3YWx0dW5nIGbDvHIgT2JzZXJ2YWJsZXMgYmVyZWl0LiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZU9iamVjdCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgLyoqIFdpcmQgYmVudXR6dCB1bSBPYnNlcnZhYmxlcyBiZWkgZGVyIFplcnN0w7ZydW5nIGVpbmVyIEtvbXBvbmVudGUgYXVzenVsw7ZzZW4uXHJcbiAgICogV2lyZCBpbSBuZ09uRGVzdHJveSBhdXNnZWzDtnN0LlxyXG4gICAqL1xyXG4gIHByb3RlY3RlZCAkdW5zdWJzY3JpYmU6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIC8qKiBGdW5rdGlvbiB6dXIgZGF1ZXJoYWZ0ZW4gw5xiZXJ3YWNodW5nIHZvbiBTdWJzY3JpcHRpb25zLiBTcGVpY2hlciB3aXJkIGJlaSBaZXJzdMO2cnVuZyBkZXIgS29tcG9uZW50ZSBmcmVpZ2VnZWJlbi4gKi9cclxuICBwcm90ZWN0ZWQgd2F0Y2g8VD4oXHJcbiAgICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFQ+LFxyXG4gICAgaGFuZGxlcjogSVN1YnNjcmlwdGlvbkhhbmRsZXJcclxuICApOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuJHVuc3Vic2NyaWJlKSxcclxuICAgICAgICBmaW5hbGl6ZSggKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaGFuZGxlci5vbkZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIub25GaW5pc2hlZCguLi5hcmdzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaGFuZGxlci5vblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgaGFuZGxlci5vblN1Y2Nlc3MoLi4uYXJncyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAgIGlmIChoYW5kbGVyLm9uRXJyb3IpIHtcclxuICAgICAgICAgICAgaGFuZGxlci5vbkVycm9yKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICB9XHJcbiAgLyoqIFByb3h5IGbDvHIgU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpYmUgKi9cclxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlPFQ+KFxyXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPixcclxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyLFxyXG4gICk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpYmU8VD4ob2JzZXJ2YWJsZSwgaGFuZGxlcik7XHJcbiAgfVxyXG4gIC8qKiBQcm94eSBmw7xyIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaWJlQXMgKi9cclxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlQXM8VD4oXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFQ+LFxyXG4gICAgaGFuZGxlcjogSVN1YnNjcmlwdGlvbkhhbmRsZXJcclxuICApOiBTdWJzY3JpcHRpb24ge1xyXG4gICAgcmV0dXJuIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaWJlQXM8VD4obmFtZSwgb2JzZXJ2YWJsZSwgaGFuZGxlcik7XHJcbiAgfVxyXG4gIC8qKiBBbGxlIE9ic2VydmFibGVzIGRpZSBtaXQgd2F0Y2ggw7xiZXJ3YWNodCB3ZXJkZW4sIHdlcmRlbiBoaWVyIGF1c2dlbMO2c3QuIEFuZ3VsYXIga8O8bW1lcnQgc2ljaCBpbSBkZW4gQXVmcnVmLlxyXG4gICAqICBGYWxscyBkYXMgS2luZCBhdWNoIGRhcyBJbnRlcmZhY2UgJ09uRGVzdHJveScgaW1wbGVtZW50aWVydCwgbmljaHQgdmVyZ2Vzc2VuIHN1cGVyLm5nT25EZXN0cm95KCkgYXVzenVydWZlbiwgb2RlciBkZXIgU3BlaWNoZXJcclxuICAgKiAgd2lyZCBuaWNodCBmcmVpZ2VnZWJlbi5cclxuICAgKi9cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLiR1bnN1YnNjcmliZS5uZXh0KCk7XHJcbiAgICB0aGlzLiR1bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19