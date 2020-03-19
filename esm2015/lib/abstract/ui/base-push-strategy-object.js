/**
 * @fileoverview added by tsickle
 * Generated from: lib/abstract/ui/base-push-strategy-object.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseObject } from './base-object';
import { SubscriptionHandler } from '../../impl/util/subscription-handler';
/**
 * @abstract
 */
export class BasePushStrategyObject extends BaseObject {
    /**
     * @protected
     * @param {?} subject
     * @return {?}
     */
    markForCheckIf(subject) {
        return this.watch(subject, new SubscriptionHandler(this.cdr.markForCheck.bind(this.cdr)));
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BasePushStrategyObject.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wdXNoLXN0cmF0ZWd5LW9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2Fic3RyYWN0L3VpL2Jhc2UtcHVzaC1zdHJhdGVneS1vYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3pDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBR3pFLE1BQU0sT0FBZ0Isc0JBQXVCLFNBQVEsVUFBVTs7Ozs7O0lBSW5ELGNBQWMsQ0FBQyxPQUF3QjtRQUMvQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQztDQUVGOzs7Ozs7SUFOQyxxQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jhc2VPYmplY3R9IGZyb20gJy4vYmFzZS1vYmplY3QnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbkhhbmRsZXJ9IGZyb20gJy4uLy4uL2ltcGwvdXRpbC9zdWJzY3JpcHRpb24taGFuZGxlcic7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VQdXNoU3RyYXRlZ3lPYmplY3QgZXh0ZW5kcyBCYXNlT2JqZWN0IHtcblxuICBwcm90ZWN0ZWQgYWJzdHJhY3QgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZjtcblxuICBwcm90ZWN0ZWQgbWFya0ZvckNoZWNrSWYoc3ViamVjdDogT2JzZXJ2YWJsZTxhbnk+KTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy53YXRjaChzdWJqZWN0LCBuZXcgU3Vic2NyaXB0aW9uSGFuZGxlcih0aGlzLmNkci5tYXJrRm9yQ2hlY2suYmluZCh0aGlzLmNkcikpKTtcbiAgfVxuXG59XG4iXX0=