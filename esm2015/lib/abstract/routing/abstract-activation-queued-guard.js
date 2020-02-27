/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/routing/abstract-activation-queued-guard.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable, forkJoin } from 'rxjs';
import * as _ from 'underscore';
import { Util } from "../../impl/util/util";
import { SubscriptionManager } from "../../impl/util/subscription-manager";
import { SubscriptionHandler } from "../../impl/util/subscription-handler";
/**
 * @abstract
 */
export class AbstractActivationQueuedGuard {
    constructor() {
        this.queue = [];
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        this.route = route;
        this.state = state;
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        (subscriber) => {
            this.runQueueRecursive(0, subscriber);
        }));
    }
    /**
     * @protected
     * @param {?} step
     * @return {?}
     */
    sequence(step) {
        if (_.isArray(step)) {
            this.queue.push((/** @type {?} */ (step)));
        }
        else {
            this.queue.push([(/** @type {?} */ (step))]);
        }
        return this;
    }
    /**
     * @private
     * @param {?} level
     * @param {?} subscriber
     * @return {?}
     */
    runQueueRecursive(level, subscriber) {
        /** @type {?} */
        const currentQueueItems = this.queue[level];
        if (!Util.isDefined(currentQueueItems)) {
            subscriber.next(true);
            subscriber.complete();
            return;
        }
        /** @type {?} */
        const activators = _.map(currentQueueItems, (/**
         * @param {?} queueItem
         * @return {?}
         */
        (queueItem) => {
            return queueItem.canActivate(this.route, this.state);
        }));
        SubscriptionManager.subscribe(forkJoin(activators), new SubscriptionHandler((/**
         * @param {?} canActivateStates
         * @return {?}
         */
        (canActivateStates) => {
            if (!_.all(canActivateStates)) {
                subscriber.next(false);
                subscriber.complete();
            }
            else {
                this.runQueueRecursive(level + 1, subscriber);
            }
        }), (/**
         * @return {?}
         */
        () => {
            subscriber.next(false);
            subscriber.complete();
        })));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AbstractActivationQueuedGuard.prototype.queue;
    /**
     * @type {?}
     * @private
     */
    AbstractActivationQueuedGuard.prototype.route;
    /**
     * @type {?}
     * @private
     */
    AbstractActivationQueuedGuard.prototype.state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtYWN0aXZhdGlvbi1xdWV1ZWQtZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC9yb3V0aW5nL2Fic3RyYWN0LWFjdGl2YXRpb24tcXVldWVkLWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBYyxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFDaEMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBRXpFLE1BQU0sT0FBZ0IsNkJBQTZCO0lBQW5EO1FBRW1CLFVBQUssR0FBb0IsRUFBRSxDQUFDO0lBbUQvQyxDQUFDOzs7Ozs7SUE5Q1EsV0FBVyxDQUNoQixLQUE2QixFQUM3QixLQUEwQjtRQUUxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksVUFBVTs7OztRQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVTLFFBQVEsQ0FBQyxJQUFpQztRQUNsRCxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQUEsSUFBSSxFQUFpQixDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQUEsSUFBSSxFQUFlLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRU8saUJBQWlCLENBQUMsS0FBYSxFQUFFLFVBQXlDOztjQUMxRSxpQkFBaUIsR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUN0QyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixPQUFPO1NBQ1I7O2NBQ0ssVUFBVSxHQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLGlCQUFpQjs7OztRQUFFLENBQUMsU0FBc0IsRUFBRSxFQUFFO1lBQ3BGLE9BQU8sU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQUM7UUFDRixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksbUJBQW1COzs7O1FBQ3pFLENBQUMsaUJBQTRCLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2dCQUM3QixVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDL0M7UUFDSCxDQUFDOzs7UUFDRCxHQUFHLEVBQUU7WUFDSCxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGOzs7Ozs7SUFuREMsOENBQTZDOzs7OztJQUU3Qyw4Q0FBc0M7Ozs7O0lBQ3RDLDhDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaWJlciwgZm9ya0pvaW4gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3V0aWxcIjtcclxuaW1wb3J0IHtTdWJzY3JpcHRpb25NYW5hZ2VyfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3N1YnNjcmlwdGlvbi1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7U3Vic2NyaXB0aW9uSGFuZGxlcn0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC9zdWJzY3JpcHRpb24taGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QWN0aXZhdGlvblF1ZXVlZEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IHF1ZXVlOiBDYW5BY3RpdmF0ZVtdW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcclxuICBwcml2YXRlIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90O1xyXG5cclxuICBwdWJsaWMgY2FuQWN0aXZhdGUoXHJcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XHJcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlIHtcclxuICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcikgPT4ge1xyXG4gICAgICB0aGlzLnJ1blF1ZXVlUmVjdXJzaXZlKDAsIHN1YnNjcmliZXIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2VxdWVuY2Uoc3RlcDogQ2FuQWN0aXZhdGVbXSB8IENhbkFjdGl2YXRlKTogQWJzdHJhY3RBY3RpdmF0aW9uUXVldWVkR3VhcmQge1xyXG4gICAgaWYgKF8uaXNBcnJheShzdGVwKSkge1xyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goc3RlcCBhcyBDYW5BY3RpdmF0ZVtdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucXVldWUucHVzaChbc3RlcCBhcyBDYW5BY3RpdmF0ZV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJ1blF1ZXVlUmVjdXJzaXZlKGxldmVsOiBudW1iZXIsIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8Ym9vbGVhbiB8IFVybFRyZWU+KTogdm9pZCB7XHJcbiAgICBjb25zdCBjdXJyZW50UXVldWVJdGVtczogQ2FuQWN0aXZhdGVbXSA9IHRoaXMucXVldWVbbGV2ZWxdO1xyXG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZChjdXJyZW50UXVldWVJdGVtcykpIHtcclxuICAgICAgc3Vic2NyaWJlci5uZXh0KHRydWUpO1xyXG4gICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGFjdGl2YXRvcnM6IENhbkFjdGl2YXRlW10gPSBfLm1hcChjdXJyZW50UXVldWVJdGVtcywgKHF1ZXVlSXRlbTogQ2FuQWN0aXZhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHF1ZXVlSXRlbS5jYW5BY3RpdmF0ZSh0aGlzLnJvdXRlLCB0aGlzLnN0YXRlKTtcclxuICAgIH0pO1xyXG4gICAgU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpYmUoZm9ya0pvaW4oYWN0aXZhdG9ycyksIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKFxyXG4gICAgICAoY2FuQWN0aXZhdGVTdGF0ZXM6IGJvb2xlYW5bXSkgPT4ge1xyXG4gICAgICAgIGlmICghXy5hbGwoY2FuQWN0aXZhdGVTdGF0ZXMpKSB7XHJcbiAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoZmFsc2UpO1xyXG4gICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnJ1blF1ZXVlUmVjdXJzaXZlKGxldmVsICsgMSwgc3Vic2NyaWJlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGZhbHNlKTtcclxuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgICkpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19