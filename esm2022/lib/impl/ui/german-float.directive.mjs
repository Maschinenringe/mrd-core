import { Directive, Input, NgModule } from '@angular/core';
import { TypeConverter } from '../util/type-converter';
import { Util } from '../util/util';
import * as i0 from "@angular/core";
/**
 * Zeigt eine Zahl mit Dezimalkomma an, optional mit festen Nachkommastellen (`digits`), einem Bereich
 * (`minDigits`/`maxDigits`, z. B. 0 bis 2) und Tausenderpunkt. Texte, die keine Zahl sind, erscheinen unveraendert.
 */
export class GermanFloatDirective {
    el;
    appGermanFloat;
    digits;
    tausendertrennzeichen = false;
    /** Mindestens so viele Nachkommastellen; nur zusammen mit `maxDigits` und ohne `digits` */
    minDigits;
    /** Hoechstens so viele Nachkommastellen (gerundet); nur zusammen mit `minDigits` und ohne `digits` */
    maxDigits;
    constructor(el) {
        this.el = el;
    }
    ngOnChanges() {
        this.el.nativeElement.innerHTML = Util.isDefined(this.appGermanFloat)
            ? this.convert(this.appGermanFloat, this.tausendertrennzeichen, this.digits) ?? ''
            : '';
    }
    parse(float) {
        return this.convert(float, this.tausendertrennzeichen) ?? '';
    }
    transform(float) {
        return this.convert(float, this.tausendertrennzeichen) ?? '';
    }
    convert(float, tausendertrennzeichen, digits) {
        // Platzhalter wie "-" oder bereits deutsch formatierte Texte sollen nicht als NaN erscheinen
        if (typeof float === 'string' && (float.trim() === '' || Number.isNaN(Number(float)))) {
            return float;
        }
        if (!Util.isDefined(digits) && Util.isDefined(this.minDigits) && Util.isDefined(this.maxDigits)) {
            return Number(Number(float).toFixed(this.maxDigits)).toLocaleString('de-DE', {
                minimumFractionDigits: this.minDigits,
                maximumFractionDigits: this.maxDigits,
                useGrouping: tausendertrennzeichen
            });
        }
        if (!tausendertrennzeichen) {
            return Util.isDefined(digits) ? TypeConverter.asGermanFloat(float, digits) : TypeConverter.asGermanFloat(float);
        }
        if (!Util.isDefined(digits)) {
            return Number(float).toLocaleString('de-DE');
        }
        return Number(Number(float).toFixed(digits)).toLocaleString('de-DE', {
            minimumFractionDigits: digits,
            maximumFractionDigits: digits
        });
    }
    /** @nocollapse */ static ɵfac = function GermanFloatDirective_Factory(t) { return new (t || GermanFloatDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: GermanFloatDirective, selectors: [["", "appGermanFloat", ""]], inputs: { appGermanFloat: "appGermanFloat", digits: "digits", tausendertrennzeichen: "tausendertrennzeichen", minDigits: "minDigits", maxDigits: "maxDigits" }, features: [i0.ɵɵNgOnChangesFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GermanFloatDirective, [{
        type: Directive,
        args: [{
                selector: '[appGermanFloat]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { appGermanFloat: [{
            type: Input
        }], digits: [{
            type: Input
        }], tausendertrennzeichen: [{
            type: Input
        }], minDigits: [{
            type: Input
        }], maxDigits: [{
            type: Input
        }] }); })();
export class GermanFloatModule {
    /** @nocollapse */ static ɵfac = function GermanFloatModule_Factory(t) { return new (t || GermanFloatModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: GermanFloatModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({});
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GermanFloatModule, [{
        type: NgModule,
        args: [{
                declarations: [GermanFloatDirective],
                exports: [GermanFloatDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GermanFloatModule, { declarations: [GermanFloatDirective], exports: [GermanFloatDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VybWFuLWZsb2F0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlL3NyYy9saWIvaW1wbC91aS9nZXJtYW4tZmxvYXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFcEM7OztHQUdHO0FBSUgsTUFBTSxPQUFPLG9CQUFvQjtJQVdyQjtJQVRNLGNBQWMsQ0FBK0I7SUFDN0MsTUFBTSxDQUFtQjtJQUN6QixxQkFBcUIsR0FBWSxLQUFLLENBQUM7SUFDdkQsMkZBQTJGO0lBQzNFLFNBQVMsQ0FBbUI7SUFDNUMsc0dBQXNHO0lBQ3RGLFNBQVMsQ0FBbUI7SUFFNUMsWUFDVSxFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUNyQixDQUFDO0lBRUcsV0FBVztRQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ25FLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2xGLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQWE7UUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVNLFNBQVMsQ0FBQyxLQUFhO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFTyxPQUFPLENBQUMsS0FBc0IsRUFBRSxxQkFBOEIsRUFBRSxNQUFlO1FBQ3JGLDZGQUE2RjtRQUM3RixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMvRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7Z0JBQzNFLHFCQUFxQixFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUNyQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDckMsV0FBVyxFQUFFLHFCQUFxQjthQUNuQyxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pIO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0IsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDbkUscUJBQXFCLEVBQUUsTUFBTTtZQUM3QixxQkFBcUIsRUFBRSxNQUFNO1NBQzlCLENBQUMsQ0FBQztJQUNMLENBQUM7aUdBbERVLG9CQUFvQjs0RkFBcEIsb0JBQW9COzt1RkFBcEIsb0JBQW9CO2NBSGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzZEQUdpQixjQUFjO2tCQUE3QixLQUFLO1lBQ1UsTUFBTTtrQkFBckIsS0FBSztZQUNVLHFCQUFxQjtrQkFBcEMsS0FBSztZQUVVLFNBQVM7a0JBQXhCLEtBQUs7WUFFVSxTQUFTO2tCQUF4QixLQUFLOztBQWlEUixNQUFNLE9BQU8saUJBQWlCOzhGQUFqQixpQkFBaUI7MkZBQWpCLGlCQUFpQjs7O3VGQUFqQixpQkFBaUI7Y0FKN0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzthQUNoQzs7d0ZBQ1ksaUJBQWlCLG1CQXpEakIsb0JBQW9CLGFBQXBCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE5nTW9kdWxlLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFR5cGVDb252ZXJ0ZXIgfSBmcm9tICcuLi91dGlsL3R5cGUtY29udmVydGVyJztcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuXG4vKipcbiAqIFplaWd0IGVpbmUgWmFobCBtaXQgRGV6aW1hbGtvbW1hIGFuLCBvcHRpb25hbCBtaXQgZmVzdGVuIE5hY2hrb21tYXN0ZWxsZW4gKGBkaWdpdHNgKSwgZWluZW0gQmVyZWljaFxuICogKGBtaW5EaWdpdHNgL2BtYXhEaWdpdHNgLCB6LiBCLiAwIGJpcyAyKSB1bmQgVGF1c2VuZGVycHVua3QuIFRleHRlLCBkaWUga2VpbmUgWmFobCBzaW5kLCBlcnNjaGVpbmVuIHVudmVyYWVuZGVydC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcEdlcm1hbkZsb2F0XSdcbn0pXG5leHBvcnQgY2xhc3MgR2VybWFuRmxvYXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBhcHBHZXJtYW5GbG9hdDogc3RyaW5nfG51bWJlcnx1bmRlZmluZWR8bnVsbDtcbiAgQElucHV0KCkgcHVibGljIGRpZ2l0czogbnVtYmVyfHVuZGVmaW5lZDtcbiAgQElucHV0KCkgcHVibGljIHRhdXNlbmRlcnRyZW5uemVpY2hlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAvKiogTWluZGVzdGVucyBzbyB2aWVsZSBOYWNoa29tbWFzdGVsbGVuOyBudXIgenVzYW1tZW4gbWl0IGBtYXhEaWdpdHNgIHVuZCBvaG5lIGBkaWdpdHNgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBtaW5EaWdpdHM6IG51bWJlcnx1bmRlZmluZWQ7XG4gIC8qKiBIb2VjaHN0ZW5zIHNvIHZpZWxlIE5hY2hrb21tYXN0ZWxsZW4gKGdlcnVuZGV0KTsgbnVyIHp1c2FtbWVuIG1pdCBgbWluRGlnaXRzYCB1bmQgb2huZSBgZGlnaXRzYCAqL1xuICBASW5wdXQoKSBwdWJsaWMgbWF4RGlnaXRzOiBudW1iZXJ8dW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gVXRpbC5pc0RlZmluZWQodGhpcy5hcHBHZXJtYW5GbG9hdClcbiAgICAgID8gdGhpcy5jb252ZXJ0KHRoaXMuYXBwR2VybWFuRmxvYXQsIHRoaXMudGF1c2VuZGVydHJlbm56ZWljaGVuLCB0aGlzLmRpZ2l0cykgPz8gJydcbiAgICAgIDogJyc7XG4gIH1cblxuICBwdWJsaWMgcGFyc2UoZmxvYXQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVydChmbG9hdCwgdGhpcy50YXVzZW5kZXJ0cmVubnplaWNoZW4pID8/ICcnO1xuICB9XG5cbiAgcHVibGljIHRyYW5zZm9ybShmbG9hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0KGZsb2F0LCB0aGlzLnRhdXNlbmRlcnRyZW5uemVpY2hlbikgPz8gJyc7XG4gIH1cblxuICBwcml2YXRlIGNvbnZlcnQoZmxvYXQ6IHN0cmluZyB8IG51bWJlciwgdGF1c2VuZGVydHJlbm56ZWljaGVuOiBib29sZWFuLCBkaWdpdHM/OiBudW1iZXIpOiBzdHJpbmd8dW5kZWZpbmVkIHtcbiAgICAvLyBQbGF0emhhbHRlciB3aWUgXCItXCIgb2RlciBiZXJlaXRzIGRldXRzY2ggZm9ybWF0aWVydGUgVGV4dGUgc29sbGVuIG5pY2h0IGFscyBOYU4gZXJzY2hlaW5lblxuICAgIGlmICh0eXBlb2YgZmxvYXQgPT09ICdzdHJpbmcnICYmIChmbG9hdC50cmltKCkgPT09ICcnIHx8IE51bWJlci5pc05hTihOdW1iZXIoZmxvYXQpKSkpIHtcbiAgICAgIHJldHVybiBmbG9hdDtcbiAgICB9XG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZChkaWdpdHMpICYmIFV0aWwuaXNEZWZpbmVkKHRoaXMubWluRGlnaXRzKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLm1heERpZ2l0cykpIHtcbiAgICAgIHJldHVybiBOdW1iZXIoTnVtYmVyKGZsb2F0KS50b0ZpeGVkKHRoaXMubWF4RGlnaXRzKSkudG9Mb2NhbGVTdHJpbmcoJ2RlLURFJywge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IHRoaXMubWluRGlnaXRzLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHRoaXMubWF4RGlnaXRzLFxuICAgICAgICB1c2VHcm91cGluZzogdGF1c2VuZGVydHJlbm56ZWljaGVuXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCF0YXVzZW5kZXJ0cmVubnplaWNoZW4pIHtcbiAgICAgIHJldHVybiBVdGlsLmlzRGVmaW5lZChkaWdpdHMpID8gVHlwZUNvbnZlcnRlci5hc0dlcm1hbkZsb2F0KGZsb2F0LCBkaWdpdHMpIDogVHlwZUNvbnZlcnRlci5hc0dlcm1hbkZsb2F0KGZsb2F0KTtcbiAgICB9XG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZChkaWdpdHMpKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKGZsb2F0KS50b0xvY2FsZVN0cmluZygnZGUtREUnKTtcbiAgICB9XG4gICAgcmV0dXJuIE51bWJlcihOdW1iZXIoZmxvYXQpLnRvRml4ZWQoZGlnaXRzKSkudG9Mb2NhbGVTdHJpbmcoJ2RlLURFJywge1xuICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBkaWdpdHMsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGRpZ2l0c1xuICAgIH0pO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0dlcm1hbkZsb2F0RGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0dlcm1hbkZsb2F0RGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBHZXJtYW5GbG9hdE1vZHVsZSB7fVxuIl19