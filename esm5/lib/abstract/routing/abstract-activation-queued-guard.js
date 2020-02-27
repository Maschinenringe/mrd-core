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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtYWN0aXZhdGlvbi1xdWV1ZWQtZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hYnN0cmFjdC9yb3V0aW5nL2Fic3RyYWN0LWFjdGl2YXRpb24tcXVldWVkLWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBYyxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxLQUFLLENBQUMsTUFBTSxZQUFZLENBQUM7QUFDaEMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBRXpFOzs7O0lBQUE7UUFFbUIsVUFBSyxHQUFvQixFQUFFLENBQUM7SUFtRC9DLENBQUM7Ozs7OztJQTlDUSxtREFBVzs7Ozs7SUFBbEIsVUFDRSxLQUE2QixFQUM3QixLQUEwQjtRQUY1QixpQkFTQztRQUxDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxVQUFVOzs7O1FBQUMsVUFBQyxVQUFVO1lBQy9CLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFUyxnREFBUTs7Ozs7SUFBbEIsVUFBbUIsSUFBaUM7UUFDbEQsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFBLElBQUksRUFBaUIsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFBLElBQUksRUFBZSxDQUFDLENBQUMsQ0FBQztTQUN4QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVPLHlEQUFpQjs7Ozs7O0lBQXpCLFVBQTBCLEtBQWEsRUFBRSxVQUF5QztRQUFsRixpQkF3QkM7O1lBdkJPLGlCQUFpQixHQUFrQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RCLE9BQU87U0FDUjs7WUFDSyxVQUFVLEdBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCOzs7O1FBQUUsVUFBQyxTQUFzQjtZQUNoRixPQUFPLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxFQUFDO1FBQ0YsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLG1CQUFtQjs7OztRQUN6RSxVQUFDLGlCQUE0QjtZQUMzQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2dCQUM3QixVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDL0M7UUFDSCxDQUFDOzs7UUFDRDtZQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUgsb0NBQUM7QUFBRCxDQUFDLEFBckRELElBcURDOzs7Ozs7Ozs7O0lBbkRDLDhDQUE2Qzs7Ozs7SUFFN0MsOENBQXNDOzs7OztJQUN0Qyw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmliZXIsIGZvcmtKb2luIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC91dGlsXCI7XHJcbmltcG9ydCB7U3Vic2NyaXB0aW9uTWFuYWdlcn0gZnJvbSBcIi4uLy4uL2ltcGwvdXRpbC9zdWJzY3JpcHRpb24tbWFuYWdlclwiO1xyXG5pbXBvcnQge1N1YnNjcmlwdGlvbkhhbmRsZXJ9IGZyb20gXCIuLi8uLi9pbXBsL3V0aWwvc3Vic2NyaXB0aW9uLWhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEFjdGl2YXRpb25RdWV1ZWRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBxdWV1ZTogQ2FuQWN0aXZhdGVbXVtdID0gW107XHJcblxyXG4gIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3Q7XHJcbiAgcHJpdmF0ZSBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdDtcclxuXHJcbiAgcHVibGljIGNhbkFjdGl2YXRlKFxyXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXHJcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxyXG4gICk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4gfCBib29sZWFuIHwgVXJsVHJlZSB7XHJcbiAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKHN1YnNjcmliZXIpID0+IHtcclxuICAgICAgdGhpcy5ydW5RdWV1ZVJlY3Vyc2l2ZSgwLCBzdWJzY3JpYmVyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNlcXVlbmNlKHN0ZXA6IENhbkFjdGl2YXRlW10gfCBDYW5BY3RpdmF0ZSk6IEFic3RyYWN0QWN0aXZhdGlvblF1ZXVlZEd1YXJkIHtcclxuICAgIGlmIChfLmlzQXJyYXkoc3RlcCkpIHtcclxuICAgICAgdGhpcy5xdWV1ZS5wdXNoKHN0ZXAgYXMgQ2FuQWN0aXZhdGVbXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnF1ZXVlLnB1c2goW3N0ZXAgYXMgQ2FuQWN0aXZhdGVdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBydW5RdWV1ZVJlY3Vyc2l2ZShsZXZlbDogbnVtYmVyLCBzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGJvb2xlYW4gfCBVcmxUcmVlPik6IHZvaWQge1xyXG4gICAgY29uc3QgY3VycmVudFF1ZXVlSXRlbXM6IENhbkFjdGl2YXRlW10gPSB0aGlzLnF1ZXVlW2xldmVsXTtcclxuICAgIGlmICghVXRpbC5pc0RlZmluZWQoY3VycmVudFF1ZXVlSXRlbXMpKSB7XHJcbiAgICAgIHN1YnNjcmliZXIubmV4dCh0cnVlKTtcclxuICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBhY3RpdmF0b3JzOiBDYW5BY3RpdmF0ZVtdID0gXy5tYXAoY3VycmVudFF1ZXVlSXRlbXMsIChxdWV1ZUl0ZW06IENhbkFjdGl2YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiBxdWV1ZUl0ZW0uY2FuQWN0aXZhdGUodGhpcy5yb3V0ZSwgdGhpcy5zdGF0ZSk7XHJcbiAgICB9KTtcclxuICAgIFN1YnNjcmlwdGlvbk1hbmFnZXIuc3Vic2NyaWJlKGZvcmtKb2luKGFjdGl2YXRvcnMpLCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcihcclxuICAgICAgKGNhbkFjdGl2YXRlU3RhdGVzOiBib29sZWFuW10pID0+IHtcclxuICAgICAgICBpZiAoIV8uYWxsKGNhbkFjdGl2YXRlU3RhdGVzKSkge1xyXG4gICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGZhbHNlKTtcclxuICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5ydW5RdWV1ZVJlY3Vyc2l2ZShsZXZlbCArIDEsIHN1YnNjcmliZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHN1YnNjcmliZXIubmV4dChmYWxzZSk7XHJcbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICApKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==