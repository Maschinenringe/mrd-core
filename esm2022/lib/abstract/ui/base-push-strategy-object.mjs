import { BaseObject } from './base-object';
import { Component } from '@angular/core';
import { SubscriptionHandler } from '../../impl/util/subscription-handler';
import * as i0 from "@angular/core";
export class BasePushStrategyObject extends BaseObject {
    markForCheckIf(subject) {
        return this.watch(subject, new SubscriptionHandler(this.cdr.markForCheck.bind(this.cdr)));
    }
    /** @nocollapse */ static ɵfac = /** @pureOrBreakMyCode */ function () { let ɵBasePushStrategyObject_BaseFactory; return function BasePushStrategyObject_Factory(t) { return (ɵBasePushStrategyObject_BaseFactory || (ɵBasePushStrategyObject_BaseFactory = i0.ɵɵgetInheritedFactory(BasePushStrategyObject)))(t || BasePushStrategyObject); }; }();
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: BasePushStrategyObject, selectors: [["ng-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function BasePushStrategyObject_Template(rf, ctx) { }, encapsulation: 2 });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BasePushStrategyObject, [{
        type: Component,
        args: [{
                template: ''
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wdXNoLXN0cmF0ZWd5LW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlL3NyYy9saWIvYWJzdHJhY3QvdWkvYmFzZS1wdXNoLXN0cmF0ZWd5LW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBb0IsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDOztBQUt6RSxNQUFNLE9BQWdCLHNCQUF1QixTQUFRLFVBQVU7SUFJbkQsY0FBYyxDQUFDLE9BQXdCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO3lSQU5tQixzQkFBc0IsU0FBdEIsc0JBQXNCOzRGQUF0QixzQkFBc0I7O3VGQUF0QixzQkFBc0I7Y0FIM0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxFQUFFO2FBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VPYmplY3R9IGZyb20gJy4vYmFzZS1vYmplY3QnO1xyXG5pbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7U3Vic2NyaXB0aW9uSGFuZGxlcn0gZnJvbSAnLi4vLi4vaW1wbC91dGlsL3N1YnNjcmlwdGlvbi1oYW5kbGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiAnJ1xyXG59KVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVB1c2hTdHJhdGVneU9iamVjdCBleHRlbmRzIEJhc2VPYmplY3Qge1xyXG5cclxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZjtcclxuXHJcbiAgcHJvdGVjdGVkIG1hcmtGb3JDaGVja0lmKHN1YmplY3Q6IE9ic2VydmFibGU8YW55Pik6IFN1YnNjcmlwdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy53YXRjaChzdWJqZWN0LCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcih0aGlzLmNkci5tYXJrRm9yQ2hlY2suYmluZCh0aGlzLmNkcikpKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==