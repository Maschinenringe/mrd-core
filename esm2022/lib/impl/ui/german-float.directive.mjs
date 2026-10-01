import { Directive, Input, NgModule } from '@angular/core';
import { TypeConverter } from '../util/type-converter';
import { Util } from '../util/util';
import * as i0 from "@angular/core";
/** Zeigt eine Zahl mit Dezimalkomma an, optional mit festen Nachkommastellen und Tausenderpunkt. */
export class GermanFloatDirective {
    el;
    appGermanFloat;
    digits;
    tausendertrennzeichen = false;
    constructor(el) {
        this.el = el;
    }
    ngOnChanges() {
        this.el.nativeElement.innerHTML = Util.isDefined(this.appGermanFloat)
            ? this.convert(this.appGermanFloat, this.tausendertrennzeichen, this.digits)
            : '';
    }
    parse(float) {
        return this.convert(float, this.tausendertrennzeichen) ?? '';
    }
    transform(float) {
        return this.convert(float, this.tausendertrennzeichen) ?? '';
    }
    convert(float, tausendertrennzeichen, digits) {
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
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: GermanFloatDirective, selectors: [["", "appGermanFloat", ""]], inputs: { appGermanFloat: "appGermanFloat", digits: "digits", tausendertrennzeichen: "tausendertrennzeichen" }, features: [i0.ɵɵNgOnChangesFeature] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VybWFuLWZsb2F0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlL3NyYy9saWIvaW1wbC91aS9nZXJtYW4tZmxvYXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLFFBQVEsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFcEMsb0dBQW9HO0FBSXBHLE1BQU0sT0FBTyxvQkFBb0I7SUFPckI7SUFMTSxjQUFjLENBQTBCO0lBQ3hDLE1BQU0sQ0FBbUI7SUFDekIscUJBQXFCLEdBQVksS0FBSyxDQUFDO0lBRXZELFlBQ1UsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDckIsQ0FBQztJQUVHLFdBQVc7UUFDaEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztZQUNuRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzVFLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQWE7UUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVNLFNBQVMsQ0FBQyxLQUFhO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFTyxPQUFPLENBQUMsS0FBc0IsRUFBRSxxQkFBOEIsRUFBRSxNQUFlO1FBQ3JGLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pIO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0IsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDbkUscUJBQXFCLEVBQUUsTUFBTTtZQUM3QixxQkFBcUIsRUFBRSxNQUFNO1NBQzlCLENBQUMsQ0FBQztJQUNMLENBQUM7aUdBbkNVLG9CQUFvQjs0RkFBcEIsb0JBQW9COzt1RkFBcEIsb0JBQW9CO2NBSGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzZEQUdpQixjQUFjO2tCQUE3QixLQUFLO1lBQ1UsTUFBTTtrQkFBckIsS0FBSztZQUNVLHFCQUFxQjtrQkFBcEMsS0FBSzs7QUFzQ1IsTUFBTSxPQUFPLGlCQUFpQjs4RkFBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7Ozt1RkFBakIsaUJBQWlCO2NBSjdCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDaEM7O3dGQUNZLGlCQUFpQixtQkExQ2pCLG9CQUFvQixhQUFwQixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBOZ01vZHVsZSwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUeXBlQ29udmVydGVyIH0gZnJvbSAnLi4vdXRpbC90eXBlLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBVdGlsIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuLyoqIFplaWd0IGVpbmUgWmFobCBtaXQgRGV6aW1hbGtvbW1hIGFuLCBvcHRpb25hbCBtaXQgZmVzdGVuIE5hY2hrb21tYXN0ZWxsZW4gdW5kIFRhdXNlbmRlcnB1bmt0LiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcEdlcm1hbkZsb2F0XSdcbn0pXG5leHBvcnQgY2xhc3MgR2VybWFuRmxvYXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBhcHBHZXJtYW5GbG9hdDogc3RyaW5nfG51bWJlcnx1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIHB1YmxpYyBkaWdpdHM6IG51bWJlcnx1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIHB1YmxpYyB0YXVzZW5kZXJ0cmVubnplaWNoZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG4gICkge31cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IFV0aWwuaXNEZWZpbmVkKHRoaXMuYXBwR2VybWFuRmxvYXQpXG4gICAgICA/IHRoaXMuY29udmVydCh0aGlzLmFwcEdlcm1hbkZsb2F0LCB0aGlzLnRhdXNlbmRlcnRyZW5uemVpY2hlbiwgdGhpcy5kaWdpdHMpXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHVibGljIHBhcnNlKGZsb2F0OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnQoZmxvYXQsIHRoaXMudGF1c2VuZGVydHJlbm56ZWljaGVuKSA/PyAnJztcbiAgfVxuXG4gIHB1YmxpYyB0cmFuc2Zvcm0oZmxvYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29udmVydChmbG9hdCwgdGhpcy50YXVzZW5kZXJ0cmVubnplaWNoZW4pID8/ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBjb252ZXJ0KGZsb2F0OiBzdHJpbmcgfCBudW1iZXIsIHRhdXNlbmRlcnRyZW5uemVpY2hlbjogYm9vbGVhbiwgZGlnaXRzPzogbnVtYmVyKTogc3RyaW5nfHVuZGVmaW5lZCB7XG4gICAgaWYgKCF0YXVzZW5kZXJ0cmVubnplaWNoZW4pIHtcbiAgICAgIHJldHVybiBVdGlsLmlzRGVmaW5lZChkaWdpdHMpID8gVHlwZUNvbnZlcnRlci5hc0dlcm1hbkZsb2F0KGZsb2F0LCBkaWdpdHMpIDogVHlwZUNvbnZlcnRlci5hc0dlcm1hbkZsb2F0KGZsb2F0KTtcbiAgICB9XG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZChkaWdpdHMpKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKGZsb2F0KS50b0xvY2FsZVN0cmluZygnZGUtREUnKTtcbiAgICB9XG4gICAgcmV0dXJuIE51bWJlcihOdW1iZXIoZmxvYXQpLnRvRml4ZWQoZGlnaXRzKSkudG9Mb2NhbGVTdHJpbmcoJ2RlLURFJywge1xuICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBkaWdpdHMsXG4gICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGRpZ2l0c1xuICAgIH0pO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0dlcm1hbkZsb2F0RGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0dlcm1hbkZsb2F0RGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBHZXJtYW5GbG9hdE1vZHVsZSB7fVxuIl19