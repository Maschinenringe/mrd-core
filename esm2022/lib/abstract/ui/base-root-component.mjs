import { Component } from '@angular/core';
import { SubscriptionHandler } from "../../impl/util/subscription-handler";
import * as _ from 'underscore';
import { BasePushStrategyObject } from "./base-push-strategy-object";
import * as i0 from "@angular/core";
export class BaseRootComponent extends BasePushStrategyObject {
    observables = [];
    listenTo(observable, resolver) {
        this.observables.push(observable);
        observable.isVisible.value = true;
        this.watch(observable.nextRequested, new SubscriptionHandler((dataSet) => {
            this.onNextRequested(observable, dataSet, resolver);
        }));
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        _.each(this.observables, (observable) => observable.isVisible.value = false);
    }
    onNextRequested(observable, dataSet, resolver) {
        this.subscribe(this.canDeactivate(), new SubscriptionHandler((canDeactivate) => {
            if (canDeactivate) {
                // Maybe catch error
                resolver.resolve(this.activatedRoute, dataSet, observable);
            }
        }));
    }
    /** @nocollapse */ static ɵfac = /** @pureOrBreakMyCode */ function () { let ɵBaseRootComponent_BaseFactory; return function BaseRootComponent_Factory(t) { return (ɵBaseRootComponent_BaseFactory || (ɵBaseRootComponent_BaseFactory = i0.ɵɵgetInheritedFactory(BaseRootComponent)))(t || BaseRootComponent); }; }();
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: BaseRootComponent, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BaseRootComponent_Template(rf, ctx) { }, encapsulation: 2 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseRootComponent, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yb290LWNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlL3NyYy9saWIvYWJzdHJhY3QvdWkvYmFzZS1yb290LWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sS0FBSyxDQUFDLE1BQU0sWUFBWSxDQUFDO0FBR2hDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDOztBQUtuRSxNQUFNLE9BQWdCLGlCQUFrQixTQUFRLHNCQUFzQjtJQUkxRCxXQUFXLEdBQTJCLEVBQUUsQ0FBQztJQUU1QyxRQUFRLENBQUMsVUFBZ0MsRUFBRSxRQUEwQztRQUMxRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksbUJBQW1CLENBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtZQUM1RSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFTSxXQUFXO1FBQ2hCLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFnQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRVMsZUFBZSxDQUN2QixVQUFnQyxFQUNoQyxPQUFZLEVBQ1osUUFBMEM7UUFFMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLGFBQXNCLEVBQUUsRUFBRTtZQUN0RixJQUFJLGFBQWEsRUFBRTtnQkFDakIsb0JBQW9CO2dCQUNwQixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQzVEO1FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7cVFBOUJtQixpQkFBaUIsU0FBakIsaUJBQWlCOzRGQUFqQixpQkFBaUI7O3VGQUFqQixpQkFBaUI7Y0FIdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxFQUFFO2FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lEZWFjdGl2YXRlfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlL3V0aWwvaS1kZWFjdGl2YXRlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJRW50aXR5U2VsZWN0b3J9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2UvdWkvaS1lbnRpdHktc2VsZWN0b3JcIjtcclxuaW1wb3J0IHtTdWJzY3JpcHRpb25IYW5kbGVyfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3N1YnNjcmlwdGlvbi1oYW5kbGVyXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCB7QWJzdHJhY3RFbnRpdHlSZXNvbHZlcn0gZnJvbSBcIi4uL3V0aWwvYWJzdHJhY3QtZW50aXR5LXJlc29sdmVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0fSBmcm9tIFwiLi9iYXNlLXB1c2gtc3RyYXRlZ3ktb2JqZWN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSb290Q29tcG9uZW50IGV4dGVuZHMgQmFzZVB1c2hTdHJhdGVneU9iamVjdCBpbXBsZW1lbnRzIElEZWFjdGl2YXRlLCBPbkRlc3Ryb3kge1xyXG5cclxuICBwdWJsaWMgYWJzdHJhY3QgY2FuRGVhY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGU7XHJcbiAgcHJvdGVjdGVkIG9ic2VydmFibGVzOiBJRW50aXR5U2VsZWN0b3I8YW55PltdID0gW107XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW5UbyhvYnNlcnZhYmxlOiBJRW50aXR5U2VsZWN0b3I8YW55PiwgcmVzb2x2ZXI6IEFic3RyYWN0RW50aXR5UmVzb2x2ZXI8YW55LCBhbnk+KTogdm9pZCB7XHJcbiAgICB0aGlzLm9ic2VydmFibGVzLnB1c2gob2JzZXJ2YWJsZSk7XHJcbiAgICBvYnNlcnZhYmxlLmlzVmlzaWJsZS52YWx1ZSA9IHRydWU7XHJcbiAgICB0aGlzLndhdGNoKG9ic2VydmFibGUubmV4dFJlcXVlc3RlZCwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKGRhdGFTZXQ6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLm9uTmV4dFJlcXVlc3RlZChvYnNlcnZhYmxlLCBkYXRhU2V0LCByZXNvbHZlcik7XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xyXG4gICAgXy5lYWNoKHRoaXMub2JzZXJ2YWJsZXMsIChvYnNlcnZhYmxlOiBJRW50aXR5U2VsZWN0b3I8YW55PikgPT4gb2JzZXJ2YWJsZS5pc1Zpc2libGUudmFsdWUgPSBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgb25OZXh0UmVxdWVzdGVkKFxyXG4gICAgb2JzZXJ2YWJsZTogSUVudGl0eVNlbGVjdG9yPGFueT4sXHJcbiAgICBkYXRhU2V0OiBhbnksXHJcbiAgICByZXNvbHZlcjogQWJzdHJhY3RFbnRpdHlSZXNvbHZlcjxhbnksIGFueT5cclxuICApOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaWJlKHRoaXMuY2FuRGVhY3RpdmF0ZSgpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcigoY2FuRGVhY3RpdmF0ZTogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAoY2FuRGVhY3RpdmF0ZSkge1xyXG4gICAgICAgIC8vIE1heWJlIGNhdGNoIGVycm9yXHJcbiAgICAgICAgcmVzb2x2ZXIucmVzb2x2ZSh0aGlzLmFjdGl2YXRlZFJvdXRlLCBkYXRhU2V0LCBvYnNlcnZhYmxlKTtcclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19