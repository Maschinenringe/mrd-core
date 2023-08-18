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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1vYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2Fic3RyYWN0L3VpL2Jhc2Utb2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQWEsT0FBTyxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBRXZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDOztBQUl6RSwrSEFBK0g7QUFDL0gsTUFBTSxPQUFnQixVQUFVO0lBQzlCOztPQUVHO0lBQ08sWUFBWSxHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO0lBQzVELHVIQUF1SDtJQUM3RyxLQUFLLENBQ2IsVUFBeUIsRUFDekIsT0FBNkI7UUFFN0IsT0FBTyxVQUFVO2FBQ2QsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQzVCLFFBQVEsQ0FBRSxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7WUFDM0IsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUN0QixPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDN0I7UUFDSCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsQ0FDUixDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7WUFDakIsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2dCQUNyQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDNUI7UUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1lBQ2pCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBQ0QsOENBQThDO0lBQ3BDLFNBQVMsQ0FDakIsVUFBeUIsRUFDekIsT0FBNkI7UUFFN0IsT0FBTyxtQkFBbUIsQ0FBQyxTQUFTLENBQUksVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDRCxnREFBZ0Q7SUFDdEMsV0FBVyxDQUNuQixJQUFZLEVBQ1osVUFBeUIsRUFDekIsT0FBNkI7UUFFN0IsT0FBTyxtQkFBbUIsQ0FBQyxXQUFXLENBQUksSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksV0FBVztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQzt1RkF0RG1CLFVBQVU7NEZBQVYsVUFBVTs7dUZBQVYsVUFBVTtjQUYvQixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7ZmluYWxpemUsIHRha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtJU3Vic2NyaXB0aW9uSGFuZGxlcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91dGlsL2ktc3Vic2NyaXB0aW9uLWhhbmRsZXJcIjtcclxuaW1wb3J0IHtTdWJzY3JpcHRpb25NYW5hZ2VyfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3N1YnNjcmlwdGlvbi1tYW5hZ2VyXCI7XHJcblxyXG5cclxuQERpcmVjdGl2ZSgpXHJcbi8qKiBBYnN0cmFjdGUgS2xhc3NlIHZvbiBkZXIgYWxsZSBLb21wb25lbnRlbiB1bmQgU2VydmljZXMgZXJiZW4uIFNpZSBzdGVsbHQgZWluZSBTcGVpY2hlcnZlcndhbHR1bmcgZsO8ciBPYnNlcnZhYmxlcyBiZXJlaXQuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlT2JqZWN0IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAvKiogV2lyZCBiZW51dHp0IHVtIE9ic2VydmFibGVzIGJlaSBkZXIgWmVyc3TDtnJ1bmcgZWluZXIgS29tcG9uZW50ZSBhdXN6dWzDtnNlbi5cclxuICAgKiBXaXJkIGltIG5nT25EZXN0cm95IGF1c2dlbMO2c3QuXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkICR1bnN1YnNjcmliZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgLyoqIEZ1bmt0aW9uIHp1ciBkYXVlcmhhZnRlbiDDnGJlcndhY2h1bmcgdm9uIFN1YnNjcmlwdGlvbnMuIFNwZWljaGVyIHdpcmQgYmVpIFplcnN0w7ZydW5nIGRlciBLb21wb25lbnRlIGZyZWlnZWdlYmVuLiAqL1xyXG4gIHByb3RlY3RlZCB3YXRjaDxUPihcclxuICAgIG9ic2VydmFibGU6IE9ic2VydmFibGU8VD4sXHJcbiAgICBoYW5kbGVyOiBJU3Vic2NyaXB0aW9uSGFuZGxlclxyXG4gICk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gb2JzZXJ2YWJsZVxyXG4gICAgICAucGlwZShcclxuICAgICAgICB0YWtlVW50aWwodGhpcy4kdW5zdWJzY3JpYmUpLFxyXG4gICAgICAgIGZpbmFsaXplKCAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAgIGlmIChoYW5kbGVyLm9uRmluaXNoZWQpIHtcclxuICAgICAgICAgICAgaGFuZGxlci5vbkZpbmlzaGVkKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAgIGlmIChoYW5kbGVyLm9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICBoYW5kbGVyLm9uU3VjY2VzcyguLi5hcmdzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGhhbmRsZXIub25FcnJvcikge1xyXG4gICAgICAgICAgICBoYW5kbGVyLm9uRXJyb3IoLi4uYXJncyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gIH1cclxuICAvKiogUHJveHkgZsO8ciBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmliZSAqL1xyXG4gIHByb3RlY3RlZCBzdWJzY3JpYmU8VD4oXHJcbiAgICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFQ+LFxyXG4gICAgaGFuZGxlcjogSVN1YnNjcmlwdGlvbkhhbmRsZXIsXHJcbiAgKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmliZTxUPihvYnNlcnZhYmxlLCBoYW5kbGVyKTtcclxuICB9XHJcbiAgLyoqIFByb3h5IGbDvHIgU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpYmVBcyAqL1xyXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVBczxUPihcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIG9ic2VydmFibGU6IE9ic2VydmFibGU8VD4sXHJcbiAgICBoYW5kbGVyOiBJU3Vic2NyaXB0aW9uSGFuZGxlclxyXG4gICk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpYmVBczxUPihuYW1lLCBvYnNlcnZhYmxlLCBoYW5kbGVyKTtcclxuICB9XHJcbiAgLyoqIEFsbGUgT2JzZXJ2YWJsZXMgZGllIG1pdCB3YXRjaCDDvGJlcndhY2h0IHdlcmRlbiwgd2VyZGVuIGhpZXIgYXVzZ2Vsw7ZzdC4gQW5ndWxhciBrw7xtbWVydCBzaWNoIGltIGRlbiBBdWZydWYuXHJcbiAgICogIEZhbGxzIGRhcyBLaW5kIGF1Y2ggZGFzIEludGVyZmFjZSAnT25EZXN0cm95JyBpbXBsZW1lbnRpZXJ0LCBuaWNodCB2ZXJnZXNzZW4gc3VwZXIubmdPbkRlc3Ryb3koKSBhdXN6dXJ1ZmVuLCBvZGVyIGRlciBTcGVpY2hlclxyXG4gICAqICB3aXJkIG5pY2h0IGZyZWlnZWdlYmVuLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuJHVuc3Vic2NyaWJlLm5leHQoKTtcclxuICAgIHRoaXMuJHVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=