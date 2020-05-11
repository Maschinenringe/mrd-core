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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtYWN0aXZhdGlvbi1xdWV1ZWQtZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC9yb3V0aW5nL2Fic3RyYWN0LWFjdGl2YXRpb24tcXVldWVkLWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBYyxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFDaEMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBRXpFLE1BQU0sT0FBZ0IsNkJBQTZCO0lBQW5EO1FBRW1CLFVBQUssR0FBb0IsRUFBRSxDQUFDO0lBbUQvQyxDQUFDOzs7Ozs7SUE5Q1EsV0FBVyxDQUNoQixLQUE2QixFQUM3QixLQUEwQjtRQUUxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixPQUFPLElBQUksVUFBVTs7OztRQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUVTLFFBQVEsQ0FBQyxJQUFpQztRQUNsRCxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQUEsSUFBSSxFQUFpQixDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQUEsSUFBSSxFQUFlLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRU8saUJBQWlCLENBQUMsS0FBYSxFQUFFLFVBQXlDOztjQUMxRSxpQkFBaUIsR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUN0QyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixPQUFPO1NBQ1I7O2NBQ0ssVUFBVSxHQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLGlCQUFpQjs7OztRQUFFLENBQUMsU0FBc0IsRUFBRSxFQUFFO1lBQ3BGLE9BQU8sU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQUM7UUFDRixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksbUJBQW1COzs7O1FBQ3pFLENBQUMsaUJBQTRCLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2dCQUM3QixVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDL0M7UUFDSCxDQUFDOzs7UUFDRCxHQUFHLEVBQUU7WUFDSCxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUVGOzs7Ozs7SUFuREMsOENBQTZDOzs7OztJQUU3Qyw4Q0FBc0M7Ozs7O0lBQ3RDLDhDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmliZXIsIGZvcmtKb2luIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3V0aWxcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9uTWFuYWdlcn0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC9zdWJzY3JpcHRpb24tbWFuYWdlclwiO1xuaW1wb3J0IHtTdWJzY3JpcHRpb25IYW5kbGVyfSBmcm9tIFwiLi4vLi4vaW1wbC91dGlsL3N1YnNjcmlwdGlvbi1oYW5kbGVyXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEFjdGl2YXRpb25RdWV1ZWRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICBwcml2YXRlIHJlYWRvbmx5IHF1ZXVlOiBDYW5BY3RpdmF0ZVtdW10gPSBbXTtcblxuICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuICBwcml2YXRlIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90O1xuXG4gIHB1YmxpYyBjYW5BY3RpdmF0ZShcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IFByb21pc2U8Ym9vbGVhbiB8IFVybFRyZWU+IHwgYm9vbGVhbiB8IFVybFRyZWUge1xuICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChzdWJzY3JpYmVyKSA9PiB7XG4gICAgICB0aGlzLnJ1blF1ZXVlUmVjdXJzaXZlKDAsIHN1YnNjcmliZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNlcXVlbmNlKHN0ZXA6IENhbkFjdGl2YXRlW10gfCBDYW5BY3RpdmF0ZSk6IEFic3RyYWN0QWN0aXZhdGlvblF1ZXVlZEd1YXJkIHtcbiAgICBpZiAoXy5pc0FycmF5KHN0ZXApKSB7XG4gICAgICB0aGlzLnF1ZXVlLnB1c2goc3RlcCBhcyBDYW5BY3RpdmF0ZVtdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtzdGVwIGFzIENhbkFjdGl2YXRlXSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5RdWV1ZVJlY3Vyc2l2ZShsZXZlbDogbnVtYmVyLCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGJvb2xlYW4gfCBVcmxUcmVlPik6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRRdWV1ZUl0ZW1zOiBDYW5BY3RpdmF0ZVtdID0gdGhpcy5xdWV1ZVtsZXZlbF07XG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZChjdXJyZW50UXVldWVJdGVtcykpIHtcbiAgICAgIHN1YnNjcmliZXIubmV4dCh0cnVlKTtcbiAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZhdG9yczogQ2FuQWN0aXZhdGVbXSA9IF8ubWFwKGN1cnJlbnRRdWV1ZUl0ZW1zLCAocXVldWVJdGVtOiBDYW5BY3RpdmF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHF1ZXVlSXRlbS5jYW5BY3RpdmF0ZSh0aGlzLnJvdXRlLCB0aGlzLnN0YXRlKTtcbiAgICB9KTtcbiAgICBTdWJzY3JpcHRpb25NYW5hZ2VyLnN1YnNjcmliZShmb3JrSm9pbihhY3RpdmF0b3JzKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoXG4gICAgICAoY2FuQWN0aXZhdGVTdGF0ZXM6IGJvb2xlYW5bXSkgPT4ge1xuICAgICAgICBpZiAoIV8uYWxsKGNhbkFjdGl2YXRlU3RhdGVzKSkge1xuICAgICAgICAgIHN1YnNjcmliZXIubmV4dChmYWxzZSk7XG4gICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucnVuUXVldWVSZWN1cnNpdmUobGV2ZWwgKyAxLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGZhbHNlKTtcbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgICkpO1xuICB9XG5cbn1cbiJdfQ==