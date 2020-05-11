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
var /**
 * @abstract
 */
AbstractActivationQueuedGuard = /** @class */ (function () {
    function AbstractActivationQueuedGuard() {
        this.queue = [];
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AbstractActivationQueuedGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        var _this = this;
        this.route = route;
        this.state = state;
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            _this.runQueueRecursive(0, subscriber);
        }));
    };
    /**
     * @protected
     * @param {?} step
     * @return {?}
     */
    AbstractActivationQueuedGuard.prototype.sequence = /**
     * @protected
     * @param {?} step
     * @return {?}
     */
    function (step) {
        if (_.isArray(step)) {
            this.queue.push((/** @type {?} */ (step)));
        }
        else {
            this.queue.push([(/** @type {?} */ (step))]);
        }
        return this;
    };
    /**
     * @private
     * @param {?} level
     * @param {?} subscriber
     * @return {?}
     */
    AbstractActivationQueuedGuard.prototype.runQueueRecursive = /**
     * @private
     * @param {?} level
     * @param {?} subscriber
     * @return {?}
     */
    function (level, subscriber) {
        var _this = this;
        /** @type {?} */
        var currentQueueItems = this.queue[level];
        if (!Util.isDefined(currentQueueItems)) {
            subscriber.next(true);
            subscriber.complete();
            return;
        }
        /** @type {?} */
        var activators = _.map(currentQueueItems, (/**
         * @param {?} queueItem
         * @return {?}
         */
        function (queueItem) {
            return queueItem.canActivate(_this.route, _this.state);
        }));
        SubscriptionManager.subscribe(forkJoin(activators), new SubscriptionHandler((/**
         * @param {?} canActivateStates
         * @return {?}
         */
        function (canActivateStates) {
            if (!_.all(canActivateStates)) {
                subscriber.next(false);
                subscriber.complete();
            }
            else {
                _this.runQueueRecursive(level + 1, subscriber);
            }
        }), (/**
         * @return {?}
         */
        function () {
            subscriber.next(false);
            subscriber.complete();
        })));
    };
    return AbstractActivationQueuedGuard;
}());
/**
 * @abstract
 */
export { AbstractActivationQueuedGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtYWN0aXZhdGlvbi1xdWV1ZWQtZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC9yb3V0aW5nL2Fic3RyYWN0LWFjdGl2YXRpb24tcXVldWVkLWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBYyxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFDaEMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBRXpFOzs7O0lBQUE7UUFFbUIsVUFBSyxHQUFvQixFQUFFLENBQUM7SUFtRC9DLENBQUM7Ozs7OztJQTlDUSxtREFBVzs7Ozs7SUFBbEIsVUFDRSxLQUE2QixFQUM3QixLQUEwQjtRQUY1QixpQkFTQztRQUxDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxVQUFVOzs7O1FBQUMsVUFBQyxVQUFVO1lBQy9CLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFUyxnREFBUTs7Ozs7SUFBbEIsVUFBbUIsSUFBaUM7UUFDbEQsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFBLElBQUksRUFBaUIsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFBLElBQUksRUFBZSxDQUFDLENBQUMsQ0FBQztTQUN4QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVPLHlEQUFpQjs7Ozs7O0lBQXpCLFVBQTBCLEtBQWEsRUFBRSxVQUF5QztRQUFsRixpQkF3QkM7O1lBdkJPLGlCQUFpQixHQUFrQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLE9BQU87U0FDUjs7WUFDSyxVQUFVLEdBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCOzs7O1FBQUUsVUFBQyxTQUFzQjtZQUNoRixPQUFPLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxFQUFDO1FBQ0YsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLG1CQUFtQjs7OztRQUN6RSxVQUFDLGlCQUE0QjtZQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2dCQUM3QixVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDL0M7UUFDSCxDQUFDOzs7UUFDRDtZQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsb0NBQUM7QUFBRCxDQUFDLEFBckRELElBcURDOzs7Ozs7Ozs7O0lBbkRDLDhDQUE2Qzs7Ozs7SUFFN0MsOENBQXNDOzs7OztJQUN0Qyw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpYmVyLCBmb3JrSm9pbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC91dGlsXCI7XG5pbXBvcnQge1N1YnNjcmlwdGlvbk1hbmFnZXJ9IGZyb20gXCIuLi8uLi9pbXBsL3V0aWwvc3Vic2NyaXB0aW9uLW1hbmFnZXJcIjtcbmltcG9ydCB7U3Vic2NyaXB0aW9uSGFuZGxlcn0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC9zdWJzY3JpcHRpb24taGFuZGxlclwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBY3RpdmF0aW9uUXVldWVkR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBxdWV1ZTogQ2FuQWN0aXZhdGVbXVtdID0gW107XG5cbiAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcbiAgcHJpdmF0ZSBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdDtcblxuICBwdWJsaWMgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlIHtcbiAgICB0aGlzLnJvdXRlID0gcm91dGU7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcikgPT4ge1xuICAgICAgdGhpcy5ydW5RdWV1ZVJlY3Vyc2l2ZSgwLCBzdWJzY3JpYmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXF1ZW5jZShzdGVwOiBDYW5BY3RpdmF0ZVtdIHwgQ2FuQWN0aXZhdGUpOiBBYnN0cmFjdEFjdGl2YXRpb25RdWV1ZWRHdWFyZCB7XG4gICAgaWYgKF8uaXNBcnJheShzdGVwKSkge1xuICAgICAgdGhpcy5xdWV1ZS5wdXNoKHN0ZXAgYXMgQ2FuQWN0aXZhdGVbXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucXVldWUucHVzaChbc3RlcCBhcyBDYW5BY3RpdmF0ZV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgcnVuUXVldWVSZWN1cnNpdmUobGV2ZWw6IG51bWJlciwgc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxib29sZWFuIHwgVXJsVHJlZT4pOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50UXVldWVJdGVtczogQ2FuQWN0aXZhdGVbXSA9IHRoaXMucXVldWVbbGV2ZWxdO1xuICAgIGlmICghVXRpbC5pc0RlZmluZWQoY3VycmVudFF1ZXVlSXRlbXMpKSB7XG4gICAgICBzdWJzY3JpYmVyLm5leHQodHJ1ZSk7XG4gICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFjdGl2YXRvcnM6IENhbkFjdGl2YXRlW10gPSBfLm1hcChjdXJyZW50UXVldWVJdGVtcywgKHF1ZXVlSXRlbTogQ2FuQWN0aXZhdGUpID0+IHtcbiAgICAgIHJldHVybiBxdWV1ZUl0ZW0uY2FuQWN0aXZhdGUodGhpcy5yb3V0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgfSk7XG4gICAgU3Vic2NyaXB0aW9uTWFuYWdlci5zdWJzY3JpYmUoZm9ya0pvaW4oYWN0aXZhdG9ycyksIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKFxuICAgICAgKGNhbkFjdGl2YXRlU3RhdGVzOiBib29sZWFuW10pID0+IHtcbiAgICAgICAgaWYgKCFfLmFsbChjYW5BY3RpdmF0ZVN0YXRlcykpIHtcbiAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoZmFsc2UpO1xuICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJ1blF1ZXVlUmVjdXJzaXZlKGxldmVsICsgMSwgc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHN1YnNjcmliZXIubmV4dChmYWxzZSk7XG4gICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICApKTtcbiAgfVxuXG59XG4iXX0=