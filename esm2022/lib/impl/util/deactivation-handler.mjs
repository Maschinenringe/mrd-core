import { Observable } from 'rxjs';
import { SubscriptionManager } from "./subscription-manager";
import { SubscriptionHandler } from "./subscription-handler";
export class DeactivationHandler {
    deactivators$ = {};
    register(name, component) {
        this.deactivators$[name] = component;
    }
    remove(name) {
        delete this.deactivators$[name];
    }
    canDeactivate() {
        return new Observable(subscriber => {
            this._deactivateComponent(0, subscriber);
        });
    }
    _deactivateComponent(index, observer) {
        const component = Object.values(this.deactivators$)[index];
        if (!component) {
            observer.next(true);
            observer.complete();
        }
        else {
            SubscriptionManager.subscribe(component.canDeactivate(), new SubscriptionHandler((canDeactivate) => {
                if (!canDeactivate) {
                    observer.next(false);
                    observer.complete();
                }
                else {
                    this._deactivateComponent(index + 1, observer);
                }
            }));
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVhY3RpdmF0aW9uLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdXRpbC9kZWFjdGl2YXRpb24taGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRTNELE1BQU0sT0FBTyxtQkFBbUI7SUFFdEIsYUFBYSxHQUFvQyxFQUFFLENBQUM7SUFHckQsUUFBUSxDQUFDLElBQVksRUFBRSxTQUFzQjtRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sTUFBTSxDQUFDLElBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxhQUFhO1FBQ2xCLE9BQU8sSUFBSSxVQUFVLENBQVUsVUFBVSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxLQUFhLEVBQUUsUUFBNkI7UUFDdkUsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksbUJBQW1CLENBQUUsQ0FBQyxhQUFzQixFQUFFLEVBQUU7Z0JBQzNHLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDckI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQ2hEO1lBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNMO0lBQ0gsQ0FBQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJRGVhY3RpdmF0ZX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZS91dGlsL2ktZGVhY3RpdmF0ZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpYmVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7U3Vic2NyaXB0aW9uTWFuYWdlcn0gZnJvbSBcIi4vc3Vic2NyaXB0aW9uLW1hbmFnZXJcIjtcclxuaW1wb3J0IHtTdWJzY3JpcHRpb25IYW5kbGVyfSBmcm9tIFwiLi9zdWJzY3JpcHRpb24taGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlYWN0aXZhdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBJRGVhY3RpdmF0ZSB7XHJcblxyXG4gIHByaXZhdGUgZGVhY3RpdmF0b3JzJDogeyBbbmFtZTogc3RyaW5nXTogSURlYWN0aXZhdGUgfSA9IHt9O1xyXG5cclxuXHJcbiAgcHVibGljIHJlZ2lzdGVyKG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBJRGVhY3RpdmF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kZWFjdGl2YXRvcnMkW25hbWVdID0gY29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbW92ZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGRlbGV0ZSB0aGlzLmRlYWN0aXZhdG9ycyRbbmFtZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuRGVhY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxib29sZWFuPihzdWJzY3JpYmVyID0+IHtcclxuICAgICAgdGhpcy5fZGVhY3RpdmF0ZUNvbXBvbmVudCgwLCBzdWJzY3JpYmVyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZGVhY3RpdmF0ZUNvbXBvbmVudChpbmRleDogbnVtYmVyLCBvYnNlcnZlcjogU3Vic2NyaWJlcjxib29sZWFuPik6IHZvaWQge1xyXG4gICAgY29uc3QgY29tcG9uZW50ID0gT2JqZWN0LnZhbHVlcyh0aGlzLmRlYWN0aXZhdG9ycyQpW2luZGV4XTtcclxuICAgIGlmICghY29tcG9uZW50KSB7XHJcbiAgICAgIG9ic2VydmVyLm5leHQodHJ1ZSk7XHJcbiAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmliZShjb21wb25lbnQuY2FuRGVhY3RpdmF0ZSgpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlciggKGNhbkRlYWN0aXZhdGU6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAoIWNhbkRlYWN0aXZhdGUpIHtcclxuICAgICAgICAgIG9ic2VydmVyLm5leHQoZmFsc2UpO1xyXG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5fZGVhY3RpdmF0ZUNvbXBvbmVudChpbmRleCArIDEsIG9ic2VydmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==