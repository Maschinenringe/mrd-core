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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wdXNoLXN0cmF0ZWd5LW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3VpL2Jhc2UtcHVzaC1zdHJhdGVneS1vYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUd6QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUd6RTs7OztJQUFxRCxrREFBVTtJQUEvRDs7SUFRQSxDQUFDOzs7Ozs7SUFKVywrQ0FBYzs7Ozs7SUFBeEIsVUFBeUIsT0FBd0I7UUFDL0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFFSCw2QkFBQztBQUFELENBQUMsQUFSRCxDQUFxRCxVQUFVLEdBUTlEOzs7Ozs7Ozs7O0lBTkMscUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYXNlT2JqZWN0fSBmcm9tICcuL2Jhc2Utb2JqZWN0JztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb25IYW5kbGVyfSBmcm9tICcuLi8uLi9pbXBsL3V0aWwvc3Vic2NyaXB0aW9uLWhhbmRsZXInO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUHVzaFN0cmF0ZWd5T2JqZWN0IGV4dGVuZHMgQmFzZU9iamVjdCB7XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWY7XG5cbiAgcHJvdGVjdGVkIG1hcmtGb3JDaGVja0lmKHN1YmplY3Q6IE9ic2VydmFibGU8YW55Pik6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMud2F0Y2goc3ViamVjdCwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIodGhpcy5jZHIubWFya0ZvckNoZWNrLmJpbmQodGhpcy5jZHIpKSk7XG4gIH1cblxufVxuIl19