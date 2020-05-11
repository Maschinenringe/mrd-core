/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/subscription-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { finalize, take } from 'rxjs/operators';
import * as _ from 'underscore';
/**
 * Diese Klasse kümmert sich um die Speicherverwaltung von Subscriptions.
 * Diese erzeugen Memory-Leaks, wenn sie nicht sauber gelöscht werden.
 * @abstract
 */
export class SubscriptionManager {
    /**
     * Subscription mit einem Namen. Diese Funktion ist nützlich,
     * falls eine Subscription öfters aufgerufen wird und die vorherige, falls
     * noch nicht abgeschlossen, beendet werden soll (HTTP Aufrufe).
     * @template T
     * @param {?} name
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    static subscribeAs(name, observable, handler) {
        /** @type {?} */
        const sub = observable
            .pipe(take(1), finalize((/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (_.isFunction(handler.onFinished)) {
                handler.onFinished(...args);
                if (sub) {
                    this.deleteSubscription(name);
                }
            }
        })))
            .subscribe((/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (_.isFunction(handler.onSuccess)) {
                handler.onSuccess(...args);
            }
        }), (/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (_.isFunction(handler.onError)) {
                handler.onError(...args);
            }
        }));
        this.pushSubscription(name, sub);
        return sub;
    }
    /**
     * Funktion für einmalige Subscriptions (z.B.: Initialisierungsaufrufe)
     * @template T
     * @param {?} observable
     * @param {?} handler
     * @return {?}
     */
    static subscribe(observable, handler) {
        /** @type {?} */
        const sub = observable
            .pipe(take(1), finalize((/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (_.isFunction(handler.onFinished)) {
                handler.onFinished(...args);
                if (sub) {
                    this.deleteSubscription(name);
                }
            }
        })))
            .subscribe((/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (_.isFunction(handler.onSuccess)) {
                handler.onSuccess(...args);
            }
        }), (/**
         * @param {...?} args
         * @return {?}
         */
        (...args) => {
            if (_.isFunction(handler.onError)) {
                handler.onError(...args);
            }
        }));
        return sub;
    }
    /**
     * @private
     * @param {?} name
     * @param {?} subscription
     * @return {?}
     */
    static pushSubscription(name, subscription) {
        this.deleteSubscription(name);
        SubscriptionManager.subscriptions[name] = subscription;
    }
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    static deleteSubscription(name) {
        /** @type {?} */
        const sub = SubscriptionManager.subscriptions[name];
        if (sub) {
            sub.unsubscribe();
            delete SubscriptionManager.subscriptions[name];
        }
    }
}
// Alle benannten Subscriptions werden hier gecached
SubscriptionManager.subscriptions = {};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SubscriptionManager.subscriptions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvc3Vic2NyaXB0aW9uLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRzlDLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDOzs7Ozs7QUFJaEMsTUFBTSxPQUFnQixtQkFBbUI7Ozs7Ozs7Ozs7O0lBTWhDLE1BQU0sQ0FBQyxXQUFXLENBQ3ZCLElBQVksRUFDWixVQUF5QixFQUN6QixPQUE2Qjs7Y0FFdkIsR0FBRyxHQUFHLFVBQVU7YUFDbkIsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxRQUFROzs7O1FBQUMsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMvQjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQ0g7YUFDQSxTQUFTOzs7O1FBQ1IsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUM7Ozs7UUFDRCxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDakMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxFQUNGO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7Ozs7O0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FDckIsVUFBeUIsRUFDekIsT0FBNkI7O2NBRXZCLEdBQUcsR0FBRyxVQUFVO2FBQ25CLElBQUksQ0FDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsUUFBUTs7OztRQUFDLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLElBQUksR0FBRyxFQUFFO29CQUNQLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0I7YUFDRjtRQUNILENBQUMsRUFBQyxDQUNIO2FBQ0EsU0FBUzs7OztRQUNSLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDNUI7UUFDSCxDQUFDOzs7O1FBQ0QsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUMxQjtRQUNILENBQUMsRUFDRjtRQUNILE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7OztJQUVPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsWUFBMEI7UUFDdEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRU8sTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQVk7O2NBQ3RDLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ25ELElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xCLE9BQU8sbUJBQW1CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7O0FBL0VjLGlDQUFhLEdBQVcsRUFBRSxDQUFDOzs7Ozs7SUFBMUMsa0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaW5hbGl6ZSwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0lTdWJzY3JpcHRpb25IYW5kbGVyfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL3V0aWwvaS1zdWJzY3JpcHRpb24taGFuZGxlclwiO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcblxuLyoqIERpZXNlIEtsYXNzZSBrw7xtbWVydCBzaWNoIHVtIGRpZSBTcGVpY2hlcnZlcndhbHR1bmcgdm9uIFN1YnNjcmlwdGlvbnMuXG4gRGllc2UgZXJ6ZXVnZW4gTWVtb3J5LUxlYWtzLCB3ZW5uIHNpZSBuaWNodCBzYXViZXIgZ2Vsw7ZzY2h0IHdlcmRlbi4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWJzY3JpcHRpb25NYW5hZ2VyIHtcbiAgLy8gQWxsZSBiZW5hbm50ZW4gU3Vic2NyaXB0aW9ucyB3ZXJkZW4gaGllciBnZWNhY2hlZFxuICBwcml2YXRlIHN0YXRpYyBzdWJzY3JpcHRpb25zOiBvYmplY3QgPSB7fTtcbiAgLyoqIFN1YnNjcmlwdGlvbiBtaXQgZWluZW0gTmFtZW4uIERpZXNlIEZ1bmt0aW9uIGlzdCBuw7x0emxpY2gsXG4gICBmYWxscyBlaW5lIFN1YnNjcmlwdGlvbiDDtmZ0ZXJzIGF1ZmdlcnVmZW4gd2lyZCB1bmQgZGllIHZvcmhlcmlnZSwgZmFsbHNcbiAgIG5vY2ggbmljaHQgYWJnZXNjaGxvc3NlbiwgYmVlbmRldCB3ZXJkZW4gc29sbCAoSFRUUCBBdWZydWZlKS4gKi9cbiAgcHVibGljIHN0YXRpYyBzdWJzY3JpYmVBczxUPihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPixcbiAgICBoYW5kbGVyOiBJU3Vic2NyaXB0aW9uSGFuZGxlclxuICApOiBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0IHN1YiA9IG9ic2VydmFibGVcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBmaW5hbGl6ZSgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25GaW5pc2hlZCkpIHtcbiAgICAgICAgICAgIGhhbmRsZXIub25GaW5pc2hlZCguLi5hcmdzKTtcbiAgICAgICAgICAgIGlmIChzdWIpIHtcbiAgICAgICAgICAgICAgdGhpcy5kZWxldGVTdWJzY3JpcHRpb24obmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihoYW5kbGVyLm9uU3VjY2VzcykpIHtcbiAgICAgICAgICAgIGhhbmRsZXIub25TdWNjZXNzKC4uLmFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihoYW5kbGVyLm9uRXJyb3IpKSB7XG4gICAgICAgICAgICBoYW5kbGVyLm9uRXJyb3IoLi4uYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIHRoaXMucHVzaFN1YnNjcmlwdGlvbihuYW1lLCBzdWIpO1xuICAgIHJldHVybiBzdWI7XG4gIH1cbiAgLyoqIEZ1bmt0aW9uIGbDvHIgZWlubWFsaWdlIFN1YnNjcmlwdGlvbnMgKHouQi46IEluaXRpYWxpc2llcnVuZ3NhdWZydWZlKSAqL1xuICBwdWJsaWMgc3RhdGljIHN1YnNjcmliZTxUPihcbiAgICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFQ+LFxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyXG4gICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3Qgc3ViID0gb2JzZXJ2YWJsZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIGZpbmFsaXplKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oaGFuZGxlci5vbkZpbmlzaGVkKSkge1xuICAgICAgICAgICAgaGFuZGxlci5vbkZpbmlzaGVkKC4uLmFyZ3MpO1xuICAgICAgICAgICAgaWYgKHN1Yikge1xuICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1YnNjcmlwdGlvbihuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25TdWNjZXNzKSkge1xuICAgICAgICAgICAgaGFuZGxlci5vblN1Y2Nlc3MoLi4uYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25FcnJvcikpIHtcbiAgICAgICAgICAgIGhhbmRsZXIub25FcnJvciguLi5hcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgcmV0dXJuIHN1YjtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIHB1c2hTdWJzY3JpcHRpb24obmFtZTogc3RyaW5nLCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbik6IHZvaWQge1xuICAgIHRoaXMuZGVsZXRlU3Vic2NyaXB0aW9uKG5hbWUpO1xuICAgIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaXB0aW9uc1tuYW1lXSA9IHN1YnNjcmlwdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGRlbGV0ZVN1YnNjcmlwdGlvbihuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBzdWIgPSBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmlwdGlvbnNbbmFtZV07XG4gICAgaWYgKHN1Yikge1xuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICBkZWxldGUgU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpcHRpb25zW25hbWVdO1xuICAgIH1cbiAgfVxuXG59XG5cbiJdfQ==