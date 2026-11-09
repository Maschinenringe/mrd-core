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
        // textContent statt innerHTML: Texte, die keine Zahl sind, erscheinen unveraendert und duerfen kein HTML einschleusen
        this.el.nativeElement.textContent = Util.isDefined(this.appGermanFloat)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VybWFuLWZsb2F0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlL3NyYy9saWIvaW1wbC91aS9nZXJtYW4tZmxvYXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFcEM7OztHQUdHO0FBSUgsTUFBTSxPQUFPLG9CQUFvQjtJQVdyQjtJQVRNLGNBQWMsQ0FBK0I7SUFDN0MsTUFBTSxDQUFtQjtJQUN6QixxQkFBcUIsR0FBWSxLQUFLLENBQUM7SUFDdkQsMkZBQTJGO0lBQzNFLFNBQVMsQ0FBbUI7SUFDNUMsc0dBQXNHO0lBQ3RGLFNBQVMsQ0FBbUI7SUFFNUMsWUFDVSxFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUNyQixDQUFDO0lBRUcsV0FBVztRQUNoQixzSEFBc0g7UUFDdEgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNyRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNsRixDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFhO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFTSxTQUFTLENBQUMsS0FBYTtRQUM1QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRU8sT0FBTyxDQUFDLEtBQXNCLEVBQUUscUJBQThCLEVBQUUsTUFBZTtRQUNyRiw2RkFBNkY7UUFDN0YsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyRixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDL0YsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO2dCQUMzRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDckMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQ3JDLFdBQVcsRUFBRSxxQkFBcUI7YUFDbkMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqSDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QztRQUNELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ25FLHFCQUFxQixFQUFFLE1BQU07WUFDN0IscUJBQXFCLEVBQUUsTUFBTTtTQUM5QixDQUFDLENBQUM7SUFDTCxDQUFDO2lHQW5EVSxvQkFBb0I7NEZBQXBCLG9CQUFvQjs7dUZBQXBCLG9CQUFvQjtjQUhoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs2REFHaUIsY0FBYztrQkFBN0IsS0FBSztZQUNVLE1BQU07a0JBQXJCLEtBQUs7WUFDVSxxQkFBcUI7a0JBQXBDLEtBQUs7WUFFVSxTQUFTO2tCQUF4QixLQUFLO1lBRVUsU0FBUztrQkFBeEIsS0FBSzs7QUFrRFIsTUFBTSxPQUFPLGlCQUFpQjs4RkFBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7Ozt1RkFBakIsaUJBQWlCO2NBSjdCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDaEM7O3dGQUNZLGlCQUFpQixtQkExRGpCLG9CQUFvQixhQUFwQixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBOZ01vZHVsZSwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUeXBlQ29udmVydGVyIH0gZnJvbSAnLi4vdXRpbC90eXBlLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuLyoqXG4gKiBaZWlndCBlaW5lIFphaGwgbWl0IERlemltYWxrb21tYSBhbiwgb3B0aW9uYWwgbWl0IGZlc3RlbiBOYWNoa29tbWFzdGVsbGVuIChgZGlnaXRzYCksIGVpbmVtIEJlcmVpY2hcbiAqIChgbWluRGlnaXRzYC9gbWF4RGlnaXRzYCwgei4gQi4gMCBiaXMgMikgdW5kIFRhdXNlbmRlcnB1bmt0LiBUZXh0ZSwgZGllIGtlaW5lIFphaGwgc2luZCwgZXJzY2hlaW5lbiB1bnZlcmFlbmRlcnQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBHZXJtYW5GbG9hdF0nXG59KVxuZXhwb3J0IGNsYXNzIEdlcm1hbkZsb2F0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBwdWJsaWMgYXBwR2VybWFuRmxvYXQ6IHN0cmluZ3xudW1iZXJ8dW5kZWZpbmVkfG51bGw7XG4gIEBJbnB1dCgpIHB1YmxpYyBkaWdpdHM6IG51bWJlcnx1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIHB1YmxpYyB0YXVzZW5kZXJ0cmVubnplaWNoZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqIE1pbmRlc3RlbnMgc28gdmllbGUgTmFjaGtvbW1hc3RlbGxlbjsgbnVyIHp1c2FtbWVuIG1pdCBgbWF4RGlnaXRzYCB1bmQgb2huZSBgZGlnaXRzYCAqL1xuICBASW5wdXQoKSBwdWJsaWMgbWluRGlnaXRzOiBudW1iZXJ8dW5kZWZpbmVkO1xuICAvKiogSG9lY2hzdGVucyBzbyB2aWVsZSBOYWNoa29tbWFzdGVsbGVuIChnZXJ1bmRldCk7IG51ciB6dXNhbW1lbiBtaXQgYG1pbkRpZ2l0c2AgdW5kIG9obmUgYGRpZ2l0c2AgKi9cbiAgQElucHV0KCkgcHVibGljIG1heERpZ2l0czogbnVtYmVyfHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICkge31cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgLy8gdGV4dENvbnRlbnQgc3RhdHQgaW5uZXJIVE1MOiBUZXh0ZSwgZGllIGtlaW5lIFphaGwgc2luZCwgZXJzY2hlaW5lbiB1bnZlcmFlbmRlcnQgdW5kIGR1ZXJmZW4ga2VpbiBIVE1MIGVpbnNjaGxldXNlblxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9IFV0aWwuaXNEZWZpbmVkKHRoaXMuYXBwR2VybWFuRmxvYXQpXG4gICAgICA/IHRoaXMuY29udmVydCh0aGlzLmFwcEdlcm1hbkZsb2F0LCB0aGlzLnRhdXNlbmRlcnRyZW5uemVpY2hlbiwgdGhpcy5kaWdpdHMpID8/ICcnXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHVibGljIHBhcnNlKGZsb2F0OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnQoZmxvYXQsIHRoaXMudGF1c2VuZGVydHJlbm56ZWljaGVuKSA/PyAnJztcbiAgfVxuXG4gIHB1YmxpYyB0cmFuc2Zvcm0oZmxvYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVydChmbG9hdCwgdGhpcy50YXVzZW5kZXJ0cmVubnplaWNoZW4pID8/ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0KGZsb2F0OiBzdHJpbmcgfCBudW1iZXIsIHRhdXNlbmRlcnRyZW5uemVpY2hlbjogYm9vbGVhbiwgZGlnaXRzPzogbnVtYmVyKTogc3RyaW5nfHVuZGVmaW5lZCB7XG4gICAgLy8gUGxhdHpoYWx0ZXIgd2llIFwiLVwiIG9kZXIgYmVyZWl0cyBkZXV0c2NoIGZvcm1hdGllcnRlIFRleHRlIHNvbGxlbiBuaWNodCBhbHMgTmFOIGVyc2NoZWluZW5cbiAgICBpZiAodHlwZW9mIGZsb2F0ID09PSAnc3RyaW5nJyAmJiAoZmxvYXQudHJpbSgpID09PSAnJyB8fCBOdW1iZXIuaXNOYU4oTnVtYmVyKGZsb2F0KSkpKSB7XG4gICAgICByZXR1cm4gZmxvYXQ7XG4gICAgfVxuICAgIGlmICghVXRpbC5pc0RlZmluZWQoZGlnaXRzKSAmJiBVdGlsLmlzRGVmaW5lZCh0aGlzLm1pbkRpZ2l0cykgJiYgVXRpbC5pc0RlZmluZWQodGhpcy5tYXhEaWdpdHMpKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKE51bWJlcihmbG9hdCkudG9GaXhlZCh0aGlzLm1heERpZ2l0cykpLnRvTG9jYWxlU3RyaW5nKCdkZS1ERScsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiB0aGlzLm1pbkRpZ2l0cyxcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiB0aGlzLm1heERpZ2l0cyxcbiAgICAgICAgdXNlR3JvdXBpbmc6IHRhdXNlbmRlcnRyZW5uemVpY2hlblxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghdGF1c2VuZGVydHJlbm56ZWljaGVuKSB7XG4gICAgICByZXR1cm4gVXRpbC5pc0RlZmluZWQoZGlnaXRzKSA/IFR5cGVDb252ZXJ0ZXIuYXNHZXJtYW5GbG9hdChmbG9hdCwgZGlnaXRzKSA6IFR5cGVDb252ZXJ0ZXIuYXNHZXJtYW5GbG9hdChmbG9hdCk7XG4gICAgfVxuICAgIGlmICghVXRpbC5pc0RlZmluZWQoZGlnaXRzKSkge1xuICAgICAgcmV0dXJuIE51bWJlcihmbG9hdCkudG9Mb2NhbGVTdHJpbmcoJ2RlLURFJyk7XG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIoTnVtYmVyKGZsb2F0KS50b0ZpeGVkKGRpZ2l0cykpLnRvTG9jYWxlU3RyaW5nKCdkZS1ERScsIHtcbiAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZGlnaXRzLFxuICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiBkaWdpdHNcbiAgICB9KTtcbiAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtHZXJtYW5GbG9hdERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtHZXJtYW5GbG9hdERpcmVjdGl2ZV1cbn0pXG5leHBvcnQgY2xhc3MgR2VybWFuRmxvYXRNb2R1bGUge31cbiJdfQ==