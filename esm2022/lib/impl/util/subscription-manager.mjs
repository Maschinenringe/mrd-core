import { finalize, take } from 'rxjs/operators';
import * as _ from 'underscore';
/** Diese Klasse kümmert sich um die Speicherverwaltung von Subscriptions.
 Diese erzeugen Memory-Leaks, wenn sie nicht sauber gelöscht werden. */
export class SubscriptionManager {
    // Alle benannten Subscriptions werden hier gecached
    static subscriptions = {};
    /** Subscription mit einem Namen. Diese Funktion ist nützlich,
     falls eine Subscription öfters aufgerufen wird und die vorherige, falls
     noch nicht abgeschlossen, beendet werden soll (HTTP Aufrufe). */
    static subscribeAs(name, observable, handler) {
        const sub = observable
            .pipe(take(1), finalize((...args) => {
            if (_.isFunction(handler.onFinished)) {
                handler.onFinished(...args);
                if (sub) {
                    this.deleteSubscription(name);
                }
            }
        }))
            .subscribe((...args) => {
            if (_.isFunction(handler.onSuccess)) {
                handler.onSuccess(...args);
            }
        }, (...args) => {
            if (_.isFunction(handler.onError)) {
                handler.onError(...args);
            }
        });
        this.pushSubscription(name, sub);
        return sub;
    }
    /** Funktion für einmalige Subscriptions (z.B.: Initialisierungsaufrufe) */
    static subscribe(observable, handler) {
        const sub = observable
            .pipe(take(1), finalize((...args) => {
            if (_.isFunction(handler.onFinished)) {
                handler.onFinished(...args);
                // if (sub) {
                //   this.deleteSubscription();
                // }
            }
        }))
            .subscribe((...args) => {
            if (_.isFunction(handler.onSuccess)) {
                handler.onSuccess(...args);
            }
        }, (...args) => {
            if (_.isFunction(handler.onError)) {
                handler.onError(...args);
            }
        });
        return sub;
    }
    static pushSubscription(name, subscription) {
        this.deleteSubscription(name);
        SubscriptionManager.subscriptions[name] = subscription;
    }
    static deleteSubscription(name) {
        const sub = SubscriptionManager.subscriptions[name];
        if (sub) {
            sub.unsubscribe();
            delete SubscriptionManager.subscriptions[name];
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdXRpbC9zdWJzY3JpcHRpb24tbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRzlDLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBRWhDO3VFQUN1RTtBQUN2RSxNQUFNLE9BQWdCLG1CQUFtQjtJQUN2QyxvREFBb0Q7SUFDNUMsTUFBTSxDQUFDLGFBQWEsR0FBVyxFQUFFLENBQUM7SUFDMUM7O3FFQUVpRTtJQUMxRCxNQUFNLENBQUMsV0FBVyxDQUN2QixJQUFZLEVBQ1osVUFBeUIsRUFDekIsT0FBNkI7UUFFN0IsTUFBTSxHQUFHLEdBQUcsVUFBVTthQUNuQixJQUFJLENBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDcEMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUM1QixJQUFJLEdBQUcsRUFBRTtvQkFDUCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9CO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsQ0FDUixDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxFQUNELENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNqQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQ0YsQ0FBQztRQUNKLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakMsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0QsMkVBQTJFO0lBQ3BFLE1BQU0sQ0FBQyxTQUFTLENBQ3JCLFVBQXlCLEVBQ3pCLE9BQTZCO1FBRTdCLE1BQU0sR0FBRyxHQUFHLFVBQVU7YUFDbkIsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3BDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsYUFBYTtnQkFDYiwrQkFBK0I7Z0JBQy9CLElBQUk7YUFDTDtRQUNILENBQUMsQ0FBQyxDQUNIO2FBQ0EsU0FBUyxDQUNSLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDNUI7UUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUMxQjtRQUNILENBQUMsQ0FDRixDQUFDO1FBQ0osT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQVksRUFBRSxZQUEwQjtRQUN0RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsbUJBQW1CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQztJQUN6RCxDQUFDO0lBRU8sTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQVk7UUFDNUMsTUFBTSxHQUFHLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xCLE9BQU8sbUJBQW1CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZmluYWxpemUsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7SVN1YnNjcmlwdGlvbkhhbmRsZXJ9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvdXRpbC9pLXN1YnNjcmlwdGlvbi1oYW5kbGVyXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcblxyXG4vKiogRGllc2UgS2xhc3NlIGvDvG1tZXJ0IHNpY2ggdW0gZGllIFNwZWljaGVydmVyd2FsdHVuZyB2b24gU3Vic2NyaXB0aW9ucy5cclxuIERpZXNlIGVyemV1Z2VuIE1lbW9yeS1MZWFrcywgd2VubiBzaWUgbmljaHQgc2F1YmVyIGdlbMO2c2NodCB3ZXJkZW4uICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdWJzY3JpcHRpb25NYW5hZ2VyIHtcclxuICAvLyBBbGxlIGJlbmFubnRlbiBTdWJzY3JpcHRpb25zIHdlcmRlbiBoaWVyIGdlY2FjaGVkXHJcbiAgcHJpdmF0ZSBzdGF0aWMgc3Vic2NyaXB0aW9uczogb2JqZWN0ID0ge307XHJcbiAgLyoqIFN1YnNjcmlwdGlvbiBtaXQgZWluZW0gTmFtZW4uIERpZXNlIEZ1bmt0aW9uIGlzdCBuw7x0emxpY2gsXHJcbiAgIGZhbGxzIGVpbmUgU3Vic2NyaXB0aW9uIMO2ZnRlcnMgYXVmZ2VydWZlbiB3aXJkIHVuZCBkaWUgdm9yaGVyaWdlLCBmYWxsc1xyXG4gICBub2NoIG5pY2h0IGFiZ2VzY2hsb3NzZW4sIGJlZW5kZXQgd2VyZGVuIHNvbGwgKEhUVFAgQXVmcnVmZSkuICovXHJcbiAgcHVibGljIHN0YXRpYyBzdWJzY3JpYmVBczxUPihcclxuICAgIG5hbWU6IHN0cmluZyxcclxuICAgIG9ic2VydmFibGU6IE9ic2VydmFibGU8VD4sXHJcbiAgICBoYW5kbGVyOiBJU3Vic2NyaXB0aW9uSGFuZGxlclxyXG4gICk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICBjb25zdCBzdWIgPSBvYnNlcnZhYmxlXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2UoMSksXHJcbiAgICAgICAgZmluYWxpemUoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25GaW5pc2hlZCkpIHtcclxuICAgICAgICAgICAgaGFuZGxlci5vbkZpbmlzaGVkKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kZWxldGVTdWJzY3JpcHRpb24obmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25TdWNjZXNzKSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyLm9uU3VjY2VzcyguLi5hcmdzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgICguLi5hcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihoYW5kbGVyLm9uRXJyb3IpKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIub25FcnJvciguLi5hcmdzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB0aGlzLnB1c2hTdWJzY3JpcHRpb24obmFtZSwgc3ViKTtcclxuICAgIHJldHVybiBzdWI7XHJcbiAgfVxyXG4gIC8qKiBGdW5rdGlvbiBmw7xyIGVpbm1hbGlnZSBTdWJzY3JpcHRpb25zICh6LkIuOiBJbml0aWFsaXNpZXJ1bmdzYXVmcnVmZSkgKi9cclxuICBwdWJsaWMgc3RhdGljIHN1YnNjcmliZTxUPihcclxuICAgIG9ic2VydmFibGU6IE9ic2VydmFibGU8VD4sXHJcbiAgICBoYW5kbGVyOiBJU3Vic2NyaXB0aW9uSGFuZGxlclxyXG4gICk6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICBjb25zdCBzdWIgPSBvYnNlcnZhYmxlXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRha2UoMSksXHJcbiAgICAgICAgZmluYWxpemUoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25GaW5pc2hlZCkpIHtcclxuICAgICAgICAgICAgaGFuZGxlci5vbkZpbmlzaGVkKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICAvLyBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgIC8vICAgdGhpcy5kZWxldGVTdWJzY3JpcHRpb24oKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oaGFuZGxlci5vblN1Y2Nlc3MpKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIub25TdWNjZXNzKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25FcnJvcikpIHtcclxuICAgICAgICAgICAgaGFuZGxlci5vbkVycm9yKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIHJldHVybiBzdWI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBwdXNoU3Vic2NyaXB0aW9uKG5hbWU6IHN0cmluZywgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuZGVsZXRlU3Vic2NyaXB0aW9uKG5hbWUpO1xyXG4gICAgU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpcHRpb25zW25hbWVdID0gc3Vic2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZGVsZXRlU3Vic2NyaXB0aW9uKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3Qgc3ViID0gU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpcHRpb25zW25hbWVdO1xyXG4gICAgaWYgKHN1Yikge1xyXG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgZGVsZXRlIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaXB0aW9uc1tuYW1lXTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=