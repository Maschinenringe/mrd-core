/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/ui/base-push-strategy-object.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseObject } from './base-object';
import { SubscriptionHandler } from '../../impl/util/subscription-handler';
/**
 * @abstract
 */
var /**
 * @abstract
 */
BasePushStrategyObject = /** @class */ (function (_super) {
    tslib_1.__extends(BasePushStrategyObject, _super);
    function BasePushStrategyObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @protected
     * @param {?} subject
     * @return {?}
     */
    BasePushStrategyObject.prototype.markForCheckIf = /**
     * @protected
     * @param {?} subject
     * @return {?}
     */
    function (subject) {
        return this.watch(subject, new SubscriptionHandler(this.cdr.markForCheck.bind(this.cdr)));
    };
    return BasePushStrategyObject;
}(BaseObject));
/**
 * @abstract
 */
export { BasePushStrategyObject };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BasePushStrategyObject.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wdXNoLXN0cmF0ZWd5LW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3VpL2Jhc2UtcHVzaC1zdHJhdGVneS1vYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUd6RTs7OztJQUFxRCxrREFBVTtJQUEvRDs7SUFRQSxDQUFDOzs7Ozs7SUFKVywrQ0FBYzs7Ozs7SUFBeEIsVUFBeUIsT0FBd0I7UUFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFFSCw2QkFBQztBQUFELENBQUMsQUFSRCxDQUFxRCxVQUFVLEdBUTlEOzs7Ozs7Ozs7O0lBTkMscUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlT2JqZWN0fSBmcm9tICcuL2Jhc2Utb2JqZWN0JztcclxuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtTdWJzY3JpcHRpb25IYW5kbGVyfSBmcm9tICcuLi8uLi9pbXBsL3V0aWwvc3Vic2NyaXB0aW9uLWhhbmRsZXInO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0IGV4dGVuZHMgQmFzZU9iamVjdCB7XHJcblxyXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBjZHI6IENoYW5nZURldGVjdG9yUmVmO1xyXG5cclxuICBwcm90ZWN0ZWQgbWFya0ZvckNoZWNrSWYoc3ViamVjdDogT2JzZXJ2YWJsZTxhbnk+KTogU3Vic2NyaXB0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLndhdGNoKHN1YmplY3QsIG5ldyBTdWJzY3JpcHRpb25IYW5kbGVyKHRoaXMuY2RyLm1hcmtGb3JDaGVjay5iaW5kKHRoaXMuY2RyKSkpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19