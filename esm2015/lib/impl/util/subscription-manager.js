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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3V0aWwvc3Vic2NyaXB0aW9uLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRzlDLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDOzs7Ozs7QUFJaEMsTUFBTSxPQUFnQixtQkFBbUI7Ozs7Ozs7Ozs7O0lBTWhDLE1BQU0sQ0FBQyxXQUFXLENBQ3ZCLElBQVksRUFDWixVQUF5QixFQUN6QixPQUE2Qjs7Y0FFdkIsR0FBRyxHQUFHLFVBQVU7YUFDbkIsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxRQUFROzs7O1FBQUMsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMvQjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQ0g7YUFDQSxTQUFTOzs7O1FBQ1IsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUM7Ozs7UUFDRCxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDakMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxFQUNGO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7Ozs7O0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FDckIsVUFBeUIsRUFDekIsT0FBNkI7O2NBRXZCLEdBQUcsR0FBRyxVQUFVO2FBQ25CLElBQUksQ0FDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsUUFBUTs7OztRQUFDLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLElBQUksR0FBRyxFQUFFO29CQUNQLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0I7YUFDRjtRQUNILENBQUMsRUFBQyxDQUNIO2FBQ0EsU0FBUzs7OztRQUNSLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDNUI7UUFDSCxDQUFDOzs7O1FBQ0QsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUMxQjtRQUNILENBQUMsRUFDRjtRQUNILE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7OztJQUVPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFZLEVBQUUsWUFBMEI7UUFDdEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRU8sTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQVk7O2NBQ3RDLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ25ELElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xCLE9BQU8sbUJBQW1CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQzs7O0FBL0VjLGlDQUFhLEdBQVcsRUFBRSxDQUFDOzs7Ozs7SUFBMUMsa0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaW5hbGl6ZSwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtJU3Vic2NyaXB0aW9uSGFuZGxlcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91dGlsL2ktc3Vic2NyaXB0aW9uLWhhbmRsZXJcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbi8qKiBEaWVzZSBLbGFzc2Uga8O8bW1lcnQgc2ljaCB1bSBkaWUgU3BlaWNoZXJ2ZXJ3YWx0dW5nIHZvbiBTdWJzY3JpcHRpb25zLlxyXG4gRGllc2UgZXJ6ZXVnZW4gTWVtb3J5LUxlYWtzLCB3ZW5uIHNpZSBuaWNodCBzYXViZXIgZ2Vsw7ZzY2h0IHdlcmRlbi4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1YnNjcmlwdGlvbk1hbmFnZXIge1xyXG4gIC8vIEFsbGUgYmVuYW5udGVuIFN1YnNjcmlwdGlvbnMgd2VyZGVuIGhpZXIgZ2VjYWNoZWRcclxuICBwcml2YXRlIHN0YXRpYyBzdWJzY3JpcHRpb25zOiBvYmplY3QgPSB7fTtcclxuICAvKiogU3Vic2NyaXB0aW9uIG1pdCBlaW5lbSBOYW1lbi4gRGllc2UgRnVua3Rpb24gaXN0IG7DvHR6bGljaCxcclxuICAgZmFsbHMgZWluZSBTdWJzY3JpcHRpb24gw7ZmdGVycyBhdWZnZXJ1ZmVuIHdpcmQgdW5kIGRpZSB2b3JoZXJpZ2UsIGZhbGxzXHJcbiAgIG5vY2ggbmljaHQgYWJnZXNjaGxvc3NlbiwgYmVlbmRldCB3ZXJkZW4gc29sbCAoSFRUUCBBdWZydWZlKS4gKi9cclxuICBwdWJsaWMgc3RhdGljIHN1YnNjcmliZUFzPFQ+KFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPixcclxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyXHJcbiAgKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIGNvbnN0IHN1YiA9IG9ic2VydmFibGVcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICBmaW5hbGl6ZSgoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oaGFuZGxlci5vbkZpbmlzaGVkKSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyLm9uRmluaXNoZWQoLi4uYXJncyk7XHJcbiAgICAgICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1YnNjcmlwdGlvbihuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oaGFuZGxlci5vblN1Y2Nlc3MpKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIub25TdWNjZXNzKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25FcnJvcikpIHtcclxuICAgICAgICAgICAgaGFuZGxlci5vbkVycm9yKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIHRoaXMucHVzaFN1YnNjcmlwdGlvbihuYW1lLCBzdWIpO1xyXG4gICAgcmV0dXJuIHN1YjtcclxuICB9XHJcbiAgLyoqIEZ1bmt0aW9uIGbDvHIgZWlubWFsaWdlIFN1YnNjcmlwdGlvbnMgKHouQi46IEluaXRpYWxpc2llcnVuZ3NhdWZydWZlKSAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgc3Vic2NyaWJlPFQ+KFxyXG4gICAgb2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxUPixcclxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyXHJcbiAgKTogU3Vic2NyaXB0aW9uIHtcclxuICAgIGNvbnN0IHN1YiA9IG9ic2VydmFibGVcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZSgxKSxcclxuICAgICAgICBmaW5hbGl6ZSgoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oaGFuZGxlci5vbkZpbmlzaGVkKSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyLm9uRmluaXNoZWQoLi4uYXJncyk7XHJcbiAgICAgICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1YnNjcmlwdGlvbihuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oaGFuZGxlci5vblN1Y2Nlc3MpKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIub25TdWNjZXNzKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25FcnJvcikpIHtcclxuICAgICAgICAgICAgaGFuZGxlci5vbkVycm9yKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIHJldHVybiBzdWI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBwdXNoU3Vic2NyaXB0aW9uKG5hbWU6IHN0cmluZywgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuZGVsZXRlU3Vic2NyaXB0aW9uKG5hbWUpO1xyXG4gICAgU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpcHRpb25zW25hbWVdID0gc3Vic2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZGVsZXRlU3Vic2NyaXB0aW9uKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3ViID0gU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpcHRpb25zW25hbWVdO1xyXG4gICAgaWYgKHN1Yikge1xyXG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgZGVsZXRlIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaXB0aW9uc1tuYW1lXTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=