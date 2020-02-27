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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS12YWx1ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21yZC1jb3JlLyIsInNvdXJjZXMiOlsibGliL2ltcGwvdXRpbC9vYnNlcnZhYmxlLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7QUFNNUIsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBSzFCLFlBQ0UsWUFBeUIsRUFDUixNQUEyRDtRQUEzRCxXQUFNLEdBQU4sTUFBTSxDQUFxRDtRQUo5RCxZQUFPLEdBQXdCLElBQUksT0FBTyxFQUFjLENBQUM7UUFNdkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ25GLENBQUM7Ozs7O0lBR0QsSUFBVyxLQUFLLENBQUMsS0FBaUI7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7OztJQUdPLGlCQUFpQixDQUFDLE9BQW1CLEVBQUUsSUFBZ0I7UUFDN0QsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDO0lBQzFCLENBQUM7Q0FFRjs7Ozs7O0lBNUJDLGlDQUEyQjs7SUFDM0Isa0NBQXlFOzs7OztJQUl2RSxpQ0FBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7VXRpbH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5cclxuLyoqXHJcbiAqIERpZXNlIEtsYXNzZSBrYW5uIHZlcndlbmRldCB3ZXJkZW4gdW0gV2VydGUgenUgc3BlaWNoZXJuIHVuZCBkaWUgYXV0b21hdGlzY2hcclxuICogw7xiZXJ3YWNoYmFyIHp1IG1hY2hlbi4gRGFkdXJjaCBrw7ZubmVuIFVJIFB1c2ggU3RyYXRlZ2llbiBsZWljaHRlciBpbXBsZW1lbnRpZXJ0IHdlcmRlbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlVmFsdWU8VFZhbHVlVHlwZT4ge1xyXG5cclxuICBwcml2YXRlIHZhbHVlJDogVFZhbHVlVHlwZTtcclxuICBwdWJsaWMgcmVhZG9ubHkgY2hhbmdlZDogU3ViamVjdDxUVmFsdWVUeXBlPiA9IG5ldyBTdWJqZWN0PFRWYWx1ZVR5cGU+KCk7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgIGluaXRpYWxWYWx1ZT86IFRWYWx1ZVR5cGUsXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVxdWFscz86IChjdXJyZW50OiBUVmFsdWVUeXBlLCBuZXh0OiBUVmFsdWVUeXBlKSA9PiBib29sZWFuXHJcbiAgKSB7XHJcbiAgICB0aGlzLnZhbHVlJCA9IGluaXRpYWxWYWx1ZTtcclxuICAgIHRoaXMuZXF1YWxzID0gVXRpbC5pc0RlZmluZWQodGhpcy5lcXVhbHMpID8gdGhpcy5lcXVhbHMgOiB0aGlzLmRlZmF1bHRDb21wYXJhdG9yO1xyXG4gIH1cclxuXHJcblxyXG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IFRWYWx1ZVR5cGUpIHtcclxuICAgIGlmICghdGhpcy5lcXVhbHModGhpcy52YWx1ZSQsIHZhbHVlKSkge1xyXG4gICAgICB0aGlzLnZhbHVlJCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmNoYW5nZWQubmV4dCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IFRWYWx1ZVR5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsdWUkO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZGVmYXVsdENvbXBhcmF0b3IoY3VycmVudDogVFZhbHVlVHlwZSwgbmV4dDogVFZhbHVlVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGN1cnJlbnQgPT09IG5leHQ7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=