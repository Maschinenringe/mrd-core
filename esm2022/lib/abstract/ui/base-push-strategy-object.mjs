import { BaseObject } from './base-object';
import { Directive } from '@angular/core';
import { SubscriptionHandler } from '../../impl/util/subscription-handler';
import * as i0 from "@angular/core";
export class BasePushStrategyObject extends BaseObject {
    markForCheckIf(subject) {
        return this.watch(subject, new SubscriptionHandler(this.cdr.markForCheck.bind(this.cdr)));
    }
    /** @nocollapse */ static ɵfac = /** @pureOrBreakMyCode */ function () { let ɵBasePushStrategyObject_BaseFactory; return function BasePushStrategyObject_Factory(t) { return (ɵBasePushStrategyObject_BaseFactory || (ɵBasePushStrategyObject_BaseFactory = i0.ɵɵgetInheritedFactory(BasePushStrategyObject)))(t || BasePushStrategyObject); }; }();
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: BasePushStrategyObject, features: [i0.ɵɵInheritDefinitionFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BasePushStrategyObject, [{
        type: Directive
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wdXNoLXN0cmF0ZWd5LW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlL3NyYy9saWIvYWJzdHJhY3QvdWkvYmFzZS1wdXNoLXN0cmF0ZWd5LW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBb0IsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDOztBQUd6RSxNQUFNLE9BQWdCLHNCQUF1QixTQUFRLFVBQVU7SUFJbkQsY0FBYyxDQUFDLE9BQXdCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO3lSQU5tQixzQkFBc0IsU0FBdEIsc0JBQXNCOzRGQUF0QixzQkFBc0I7O3VGQUF0QixzQkFBc0I7Y0FEM0MsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZU9iamVjdH0gZnJvbSAnLi9iYXNlLW9iamVjdCc7XHJcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtTdWJzY3JpcHRpb25IYW5kbGVyfSBmcm9tICcuLi8uLi9pbXBsL3V0aWwvc3Vic2NyaXB0aW9uLWhhbmRsZXInO1xyXG5cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0IGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjZHI6IENoYW5nZURldGVjdG9yUmVmO1xyXG5cclxuICBwcm90ZWN0ZWQgbWFya0ZvckNoZWNrSWYoc3ViamVjdDogT2JzZXJ2YWJsZTxhbnk+KTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLndhdGNoKHN1YmplY3QsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKHRoaXMuY2RyLm1hcmtGb3JDaGVjay5iaW5kKHRoaXMuY2RyKSkpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19