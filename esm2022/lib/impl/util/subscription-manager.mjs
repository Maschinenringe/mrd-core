import { finalize, take } from 'rxjs/operators';
import _ from 'underscore';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdXRpbC9zdWJzY3JpcHRpb24tbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRzlDLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUUzQjt1RUFDdUU7QUFDdkUsTUFBTSxPQUFnQixtQkFBbUI7SUFDdkMsb0RBQW9EO0lBQzVDLE1BQU0sQ0FBQyxhQUFhLEdBQWlDLEVBQUUsQ0FBQztJQUNoRTs7cUVBRWlFO0lBQzFELE1BQU0sQ0FBQyxXQUFXLENBQ3ZCLElBQVksRUFDWixVQUF5QixFQUN6QixPQUE2QjtRQUU3QixNQUFNLEdBQUcsR0FBRyxVQUFVO2FBQ25CLElBQUksQ0FDSCxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQzVCLElBQUksR0FBRyxFQUFFO29CQUNQLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0I7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUNIO2FBQ0EsU0FBUyxDQUNSLENBQUMsR0FBRyxJQUFXLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDNUI7UUFDSCxDQUFDLEVBQ0QsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUMxQjtRQUNILENBQUMsQ0FDRixDQUFDO1FBQ0osSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDRCwyRUFBMkU7SUFDcEUsTUFBTSxDQUFDLFNBQVMsQ0FDckIsVUFBeUIsRUFDekIsT0FBNkI7UUFFN0IsTUFBTSxHQUFHLEdBQUcsVUFBVTthQUNuQixJQUFJLENBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDcEMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUM1QixhQUFhO2dCQUNiLCtCQUErQjtnQkFDL0IsSUFBSTthQUNMO1FBQ0gsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLENBQ1IsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUM1QjtRQUNILENBQUMsRUFDRCxDQUFDLEdBQUcsSUFBVyxFQUFFLEVBQUU7WUFDakIsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDakMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUNGLENBQUM7UUFDSixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLFlBQTBCO1FBQ3RFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDO0lBQ3pELENBQUM7SUFFTyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBWTtRQUM1QyxNQUFNLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbEIsT0FBTyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaW5hbGl6ZSwgdGFrZX0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0lTdWJzY3JpcHRpb25IYW5kbGVyfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL3V0aWwvaS1zdWJzY3JpcHRpb24taGFuZGxlclwiO1xuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XG5cbi8qKiBEaWVzZSBLbGFzc2Uga8O8bW1lcnQgc2ljaCB1bSBkaWUgU3BlaWNoZXJ2ZXJ3YWx0dW5nIHZvbiBTdWJzY3JpcHRpb25zLlxuIERpZXNlIGVyemV1Z2VuIE1lbW9yeS1MZWFrcywgd2VubiBzaWUgbmljaHQgc2F1YmVyIGdlbMO2c2NodCB3ZXJkZW4uICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3Vic2NyaXB0aW9uTWFuYWdlciB7XG4gIC8vIEFsbGUgYmVuYW5udGVuIFN1YnNjcmlwdGlvbnMgd2VyZGVuIGhpZXIgZ2VjYWNoZWRcbiAgcHJpdmF0ZSBzdGF0aWMgc3Vic2NyaXB0aW9uczogUmVjb3JkPHN0cmluZywgU3Vic2NyaXB0aW9uPiA9IHt9O1xuICAvKiogU3Vic2NyaXB0aW9uIG1pdCBlaW5lbSBOYW1lbi4gRGllc2UgRnVua3Rpb24gaXN0IG7DvHR6bGljaCxcbiAgIGZhbGxzIGVpbmUgU3Vic2NyaXB0aW9uIMO2ZnRlcnMgYXVmZ2VydWZlbiB3aXJkIHVuZCBkaWUgdm9yaGVyaWdlLCBmYWxsc1xuICAgbm9jaCBuaWNodCBhYmdlc2NobG9zc2VuLCBiZWVuZGV0IHdlcmRlbiBzb2xsIChIVFRQIEF1ZnJ1ZmUpLiAqL1xuICBwdWJsaWMgc3RhdGljIHN1YnNjcmliZUFzPFQ+KFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBvYnNlcnZhYmxlOiBPYnNlcnZhYmxlPFQ+LFxuICAgIGhhbmRsZXI6IElTdWJzY3JpcHRpb25IYW5kbGVyXG4gICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3Qgc3ViID0gb2JzZXJ2YWJsZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIGZpbmFsaXplKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24oaGFuZGxlci5vbkZpbmlzaGVkKSkge1xuICAgICAgICAgICAgaGFuZGxlci5vbkZpbmlzaGVkKC4uLmFyZ3MpO1xuICAgICAgICAgICAgaWYgKHN1Yikge1xuICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVN1YnNjcmlwdGlvbihuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25TdWNjZXNzKSkge1xuICAgICAgICAgICAgaGFuZGxlci5vblN1Y2Nlc3MoLi4uYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIub25FcnJvcikpIHtcbiAgICAgICAgICAgIGhhbmRsZXIub25FcnJvciguLi5hcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgdGhpcy5wdXNoU3Vic2NyaXB0aW9uKG5hbWUsIHN1Yik7XG4gICAgcmV0dXJuIHN1YjtcbiAgfVxuICAvKiogRnVua3Rpb24gZsO8ciBlaW5tYWxpZ2UgU3Vic2NyaXB0aW9ucyAoei5CLjogSW5pdGlhbGlzaWVydW5nc2F1ZnJ1ZmUpICovXG4gIHB1YmxpYyBzdGF0aWMgc3Vic2NyaWJlPFQ+KFxuICAgIG9ic2VydmFibGU6IE9ic2VydmFibGU8VD4sXG4gICAgaGFuZGxlcjogSVN1YnNjcmlwdGlvbkhhbmRsZXJcbiAgKTogU3Vic2NyaXB0aW9uIHtcbiAgICBjb25zdCBzdWIgPSBvYnNlcnZhYmxlXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgZmluYWxpemUoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihoYW5kbGVyLm9uRmluaXNoZWQpKSB7XG4gICAgICAgICAgICBoYW5kbGVyLm9uRmluaXNoZWQoLi4uYXJncyk7XG4gICAgICAgICAgICAvLyBpZiAoc3ViKSB7XG4gICAgICAgICAgICAvLyAgIHRoaXMuZGVsZXRlU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihoYW5kbGVyLm9uU3VjY2VzcykpIHtcbiAgICAgICAgICAgIGhhbmRsZXIub25TdWNjZXNzKC4uLmFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihoYW5kbGVyLm9uRXJyb3IpKSB7XG4gICAgICAgICAgICBoYW5kbGVyLm9uRXJyb3IoLi4uYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIHJldHVybiBzdWI7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBwdXNoU3Vic2NyaXB0aW9uKG5hbWU6IHN0cmluZywgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24pOiB2b2lkIHtcbiAgICB0aGlzLmRlbGV0ZVN1YnNjcmlwdGlvbihuYW1lKTtcbiAgICBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmlwdGlvbnNbbmFtZV0gPSBzdWJzY3JpcHRpb247XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBkZWxldGVTdWJzY3JpcHRpb24obmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgc3ViID0gU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpcHRpb25zW25hbWVdO1xuICAgIGlmIChzdWIpIHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgZGVsZXRlIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaXB0aW9uc1tuYW1lXTtcbiAgICB9XG4gIH1cblxufVxuXG4iXX0=