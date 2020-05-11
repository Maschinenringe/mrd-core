/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/util/observable-value.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { Util } from "./util";
/**
 * Diese Klasse kann verwendet werden um Werte zu speichern und die automatisch
 * überwachbar zu machen. Dadurch können UI Push Strategien leichter implementiert werden.
 * @template TValueType
 */
var /**
 * Diese Klasse kann verwendet werden um Werte zu speichern und die automatisch
 * überwachbar zu machen. Dadurch können UI Push Strategien leichter implementiert werden.
 * @template TValueType
 */
ObservableValue = /** @class */ (function () {
    function ObservableValue(initialValue, equals) {
        this.equals = equals;
        this.changed = new Subject();
        this.value$ = initialValue;
        this.equals = Util.isDefined(this.equals) ? this.equals : this.defaultComparator;
    }
    Object.defineProperty(ObservableValue.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value$;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!this.equals(this.value$, value)) {
                this.value$ = value;
                this.changed.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} current
     * @param {?} next
     * @return {?}
     */
    ObservableValue.prototype.defaultComparator = /**
     * @private
     * @param {?} current
     * @param {?} next
     * @return {?}
     */
    function (current, next) {
        return current === next;
    };
    return ObservableValue;
}());
/**
 * Diese Klasse kann verwendet werden um Werte zu speichern und die automatisch
 * überwachbar zu machen. Dadurch können UI Push Strategien leichter implementiert werden.
 * @template TValueType
 */
export { ObservableValue };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ObservableValue.prototype.value$;
    /** @type {?} */
    ObservableValue.prototype.changed;
    /**
     * @type {?}
     * @private
     */
    ObservableValue.prototype.equals;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2ltcGwvdXRpbC9vYnNlcnZhYmxlLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7QUFNNUI7Ozs7OztJQUtFLHlCQUNFLFlBQXlCLEVBQ1IsTUFBMkQ7UUFBM0QsV0FBTSxHQUFOLE1BQU0sQ0FBcUQ7UUFKOUQsWUFBTyxHQUF3QixJQUFJLE9BQU8sRUFBYyxDQUFDO1FBTXZFLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNuRixDQUFDO0lBR0Qsc0JBQVcsa0NBQUs7Ozs7UUFPaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFURCxVQUFpQixLQUFpQjtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDOzs7T0FBQTs7Ozs7OztJQU9PLDJDQUFpQjs7Ozs7O0lBQXpCLFVBQTBCLE9BQW1CLEVBQUUsSUFBZ0I7UUFDN0QsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFSCxzQkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7Ozs7Ozs7Ozs7OztJQTVCQyxpQ0FBMkI7O0lBQzNCLGtDQUF5RTs7Ozs7SUFJdkUsaUNBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtVdGlsfSBmcm9tIFwiLi91dGlsXCI7XG5cbi8qKlxuICogRGllc2UgS2xhc3NlIGthbm4gdmVyd2VuZGV0IHdlcmRlbiB1bSBXZXJ0ZSB6dSBzcGVpY2hlcm4gdW5kIGRpZSBhdXRvbWF0aXNjaFxuICogw7xiZXJ3YWNoYmFyIHp1IG1hY2hlbi4gRGFkdXJjaCBrw7ZubmVuIFVJIFB1c2ggU3RyYXRlZ2llbiBsZWljaHRlciBpbXBsZW1lbnRpZXJ0IHdlcmRlbi5cbiAqL1xuZXhwb3J0IGNsYXNzIE9ic2VydmFibGVWYWx1ZTxUVmFsdWVUeXBlPiB7XG5cbiAgcHJpdmF0ZSB2YWx1ZSQ6IFRWYWx1ZVR5cGU7XG4gIHB1YmxpYyByZWFkb25seSBjaGFuZ2VkOiBTdWJqZWN0PFRWYWx1ZVR5cGU+ID0gbmV3IFN1YmplY3Q8VFZhbHVlVHlwZT4oKTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgaW5pdGlhbFZhbHVlPzogVFZhbHVlVHlwZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVxdWFscz86IChjdXJyZW50OiBUVmFsdWVUeXBlLCBuZXh0OiBUVmFsdWVUeXBlKSA9PiBib29sZWFuXG4gICkge1xuICAgIHRoaXMudmFsdWUkID0gaW5pdGlhbFZhbHVlO1xuICAgIHRoaXMuZXF1YWxzID0gVXRpbC5pc0RlZmluZWQodGhpcy5lcXVhbHMpID8gdGhpcy5lcXVhbHMgOiB0aGlzLmRlZmF1bHRDb21wYXJhdG9yO1xuICB9XG5cblxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBUVmFsdWVUeXBlKSB7XG4gICAgaWYgKCF0aGlzLmVxdWFscyh0aGlzLnZhbHVlJCwgdmFsdWUpKSB7XG4gICAgICB0aGlzLnZhbHVlJCA9IHZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2VkLm5leHQodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogVFZhbHVlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUkO1xuICB9XG5cblxuICBwcml2YXRlIGRlZmF1bHRDb21wYXJhdG9yKGN1cnJlbnQ6IFRWYWx1ZVR5cGUsIG5leHQ6IFRWYWx1ZVR5cGUpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VycmVudCA9PT0gbmV4dDtcbiAgfVxuXG59XG4iXX0=