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
export class ObservableValue {
    /**
     * @param {?=} initialValue
     * @param {?=} equals
     */
    constructor(initialValue, equals) {
        this.equals = equals;
        this.changed = new Subject();
        this.value$ = initialValue;
        this.equals = Util.isDefined(this.equals) ? this.equals : this.defaultComparator;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (!this.equals(this.value$, value)) {
            this.value$ = value;
            this.changed.next(value);
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this.value$;
    }
    /**
     * @private
     * @param {?} current
     * @param {?} next
     * @return {?}
     */
    defaultComparator(current, next) {
        return current === next;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2ltcGwvdXRpbC9vYnNlcnZhYmxlLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7QUFNNUIsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBSzFCLFlBQ0UsWUFBeUIsRUFDUixNQUEyRDtRQUEzRCxXQUFNLEdBQU4sTUFBTSxDQUFxRDtRQUo5RCxZQUFPLEdBQXdCLElBQUksT0FBTyxFQUFjLENBQUM7UUFNdkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ25GLENBQUM7Ozs7O0lBR0QsSUFBVyxLQUFLLENBQUMsS0FBaUI7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7OztJQUdPLGlCQUFpQixDQUFDLE9BQW1CLEVBQUUsSUFBZ0I7UUFDN0QsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDO0lBQzFCLENBQUM7Q0FFRjs7Ozs7O0lBNUJDLGlDQUEyQjs7SUFDM0Isa0NBQXlFOzs7OztJQUl2RSxpQ0FBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1V0aWx9IGZyb20gXCIuL3V0aWxcIjtcblxuLyoqXG4gKiBEaWVzZSBLbGFzc2Uga2FubiB2ZXJ3ZW5kZXQgd2VyZGVuIHVtIFdlcnRlIHp1IHNwZWljaGVybiB1bmQgZGllIGF1dG9tYXRpc2NoXG4gKiDDvGJlcndhY2hiYXIgenUgbWFjaGVuLiBEYWR1cmNoIGvDtm5uZW4gVUkgUHVzaCBTdHJhdGVnaWVuIGxlaWNodGVyIGltcGxlbWVudGllcnQgd2VyZGVuLlxuICovXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZVZhbHVlPFRWYWx1ZVR5cGU+IHtcblxuICBwcml2YXRlIHZhbHVlJDogVFZhbHVlVHlwZTtcbiAgcHVibGljIHJlYWRvbmx5IGNoYW5nZWQ6IFN1YmplY3Q8VFZhbHVlVHlwZT4gPSBuZXcgU3ViamVjdDxUVmFsdWVUeXBlPigpO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBpbml0aWFsVmFsdWU/OiBUVmFsdWVUeXBlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZXF1YWxzPzogKGN1cnJlbnQ6IFRWYWx1ZVR5cGUsIG5leHQ6IFRWYWx1ZVR5cGUpID0+IGJvb2xlYW5cbiAgKSB7XG4gICAgdGhpcy52YWx1ZSQgPSBpbml0aWFsVmFsdWU7XG4gICAgdGhpcy5lcXVhbHMgPSBVdGlsLmlzRGVmaW5lZCh0aGlzLmVxdWFscykgPyB0aGlzLmVxdWFscyA6IHRoaXMuZGVmYXVsdENvbXBhcmF0b3I7XG4gIH1cblxuXG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IFRWYWx1ZVR5cGUpIHtcbiAgICBpZiAoIXRoaXMuZXF1YWxzKHRoaXMudmFsdWUkLCB2YWx1ZSkpIHtcbiAgICAgIHRoaXMudmFsdWUkID0gdmFsdWU7XG4gICAgICB0aGlzLmNoYW5nZWQubmV4dCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCB2YWx1ZSgpOiBUVmFsdWVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSQ7XG4gIH1cblxuXG4gIHByaXZhdGUgZGVmYXVsdENvbXBhcmF0b3IoY3VycmVudDogVFZhbHVlVHlwZSwgbmV4dDogVFZhbHVlVHlwZSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjdXJyZW50ID09PSBuZXh0O1xuICB9XG5cbn1cbiJdfQ==