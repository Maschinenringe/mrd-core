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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2ltcGwvdXRpbC9vYnNlcnZhYmxlLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7QUFNNUI7Ozs7OztJQUtFLHlCQUNFLFlBQXlCLEVBQ1IsTUFBMkQ7UUFBM0QsV0FBTSxHQUFOLE1BQU0sQ0FBcUQ7UUFKOUQsWUFBTyxHQUF3QixJQUFJLE9BQU8sRUFBYyxDQUFDO1FBTXZFLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNuRixDQUFDO0lBR0Qsc0JBQVcsa0NBQUs7Ozs7UUFPaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFURCxVQUFpQixLQUFpQjtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDOzs7T0FBQTs7Ozs7OztJQU9PLDJDQUFpQjs7Ozs7O0lBQXpCLFVBQTBCLE9BQW1CLEVBQUUsSUFBZ0I7UUFDN0QsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFSCxzQkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7Ozs7Ozs7Ozs7OztJQTVCQyxpQ0FBMkI7O0lBQzNCLGtDQUF5RTs7Ozs7SUFJdkUsaUNBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gXCIuL3V0aWxcIjtcclxuXHJcbi8qKlxyXG4gKiBEaWVzZSBLbGFzc2Uga2FubiB2ZXJ3ZW5kZXQgd2VyZGVuIHVtIFdlcnRlIHp1IHNwZWljaGVybiB1bmQgZGllIGF1dG9tYXRpc2NoXHJcbiAqIMO8YmVyd2FjaGJhciB6dSBtYWNoZW4uIERhZHVyY2gga8O2bm5lbiBVSSBQdXNoIFN0cmF0ZWdpZW4gbGVpY2h0ZXIgaW1wbGVtZW50aWVydCB3ZXJkZW4uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZVZhbHVlPFRWYWx1ZVR5cGU+IHtcclxuXHJcbiAgcHJpdmF0ZSB2YWx1ZSQ6IFRWYWx1ZVR5cGU7XHJcbiAgcHVibGljIHJlYWRvbmx5IGNoYW5nZWQ6IFN1YmplY3Q8VFZhbHVlVHlwZT4gPSBuZXcgU3ViamVjdDxUVmFsdWVUeXBlPigpO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICBpbml0aWFsVmFsdWU/OiBUVmFsdWVUeXBlLFxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlcXVhbHM/OiAoY3VycmVudDogVFZhbHVlVHlwZSwgbmV4dDogVFZhbHVlVHlwZSkgPT4gYm9vbGVhblxyXG4gICkge1xyXG4gICAgdGhpcy52YWx1ZSQgPSBpbml0aWFsVmFsdWU7XHJcbiAgICB0aGlzLmVxdWFscyA9IFV0aWwuaXNEZWZpbmVkKHRoaXMuZXF1YWxzKSA/IHRoaXMuZXF1YWxzIDogdGhpcy5kZWZhdWx0Q29tcGFyYXRvcjtcclxuICB9XHJcblxyXG5cclxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBUVmFsdWVUeXBlKSB7XHJcbiAgICBpZiAoIXRoaXMuZXF1YWxzKHRoaXMudmFsdWUkLCB2YWx1ZSkpIHtcclxuICAgICAgdGhpcy52YWx1ZSQgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5jaGFuZ2VkLm5leHQodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB2YWx1ZSgpOiBUVmFsdWVUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlJDtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGRlZmF1bHRDb21wYXJhdG9yKGN1cnJlbnQ6IFRWYWx1ZVR5cGUsIG5leHQ6IFRWYWx1ZVR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBjdXJyZW50ID09PSBuZXh0O1xyXG4gIH1cclxuXHJcbn1cclxuIl19