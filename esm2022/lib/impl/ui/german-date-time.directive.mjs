import { Directive, Input, NgModule, Pipe } from '@angular/core';
import moment from 'moment';
import { Util } from '../util/util';
import * as i0 from "@angular/core";
/** Gemeinsame Formatierung fuer Direktive und Pipe: DD.MM.YYYY bzw. DD.MM.YYYY HH:mm, sonst leer */
export function deutschesDatum(wert, mitZeit = false) {
    if (!Util.isDefined(wert) || wert === '') {
        return '';
    }
    const datum = moment(wert);
    return datum.isValid() ? datum.format(mitZeit ? 'DD.MM.YYYY HH:mm' : 'DD.MM.YYYY') : '';
}
/** Zeigt ein Datum deutsch an: `<span [appGermanDateTime]="aufgabe.datum" [showTime]="true"></span>` */
export class GermanDateTimeDirective {
    el;
    appGermanDateTime;
    showTime = false;
    constructor(el) {
        this.el = el;
    }
    ngOnChanges() {
        this.el.nativeElement.textContent = deutschesDatum(this.appGermanDateTime, this.showTime === true);
    }
    /** @nocollapse */ static ɵfac = function GermanDateTimeDirective_Factory(t) { return new (t || GermanDateTimeDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: GermanDateTimeDirective, selectors: [["", "appGermanDateTime", ""]], inputs: { appGermanDateTime: "appGermanDateTime", showTime: "showTime" }, features: [i0.ɵɵNgOnChangesFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GermanDateTimeDirective, [{
        type: Directive,
        args: [{
                selector: '[appGermanDateTime]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { appGermanDateTime: [{
            type: Input
        }], showTime: [{
            type: Input
        }] }); })();
/** Datum in Interpolationen und Attributen: `{{ aufgabe.datum | deutschesDatum }}`, mit Uhrzeit `| deutschesDatum: true` */
export class DeutschesDatumPipe {
    transform(wert, mitZeit = false) {
        return deutschesDatum(wert, mitZeit);
    }
    /** @nocollapse */ static ɵfac = function DeutschesDatumPipe_Factory(t) { return new (t || DeutschesDatumPipe)(); };
    /** @nocollapse */ static ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "deutschesDatum", type: DeutschesDatumPipe, pure: true });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DeutschesDatumPipe, [{
        type: Pipe,
        args: [{
                name: 'deutschesDatum'
            }]
    }], null, null); })();
export class GermanDateTimeModule {
    /** @nocollapse */ static ɵfac = function GermanDateTimeModule_Factory(t) { return new (t || GermanDateTimeModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: GermanDateTimeModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({});
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GermanDateTimeModule, [{
        type: NgModule,
        args: [{
                declarations: [GermanDateTimeDirective, DeutschesDatumPipe],
                exports: [GermanDateTimeDirective, DeutschesDatumPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GermanDateTimeModule, { declarations: [GermanDateTimeDirective, DeutschesDatumPipe], exports: [GermanDateTimeDirective, DeutschesDatumPipe] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VybWFuLWRhdGUtdGltZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdWkvZ2VybWFuLWRhdGUtdGltZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQUUsUUFBUSxFQUFhLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxNQUFrQixNQUFNLFFBQVEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUtwQyxvR0FBb0c7QUFDcEcsTUFBTSxVQUFVLGNBQWMsQ0FBQyxJQUF3QixFQUFFLFVBQW1CLEtBQUs7SUFDL0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtRQUN4QyxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsTUFBTSxLQUFLLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUYsQ0FBQztBQUVELHdHQUF3RztBQUl4RyxNQUFNLE9BQU8sdUJBQXVCO0lBTXhCO0lBSk0saUJBQWlCLENBQXFCO0lBQ3RDLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFFMUMsWUFDVSxFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUNyQixDQUFDO0lBRUcsV0FBVztRQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ3JHLENBQUM7b0dBWFUsdUJBQXVCOzRGQUF2Qix1QkFBdUI7O3VGQUF2Qix1QkFBdUI7Y0FIbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7YUFDaEM7NkRBR2lCLGlCQUFpQjtrQkFBaEMsS0FBSztZQUNVLFFBQVE7a0JBQXZCLEtBQUs7O0FBV1IsNEhBQTRIO0FBSTVILE1BQU0sT0FBTyxrQkFBa0I7SUFFdEIsU0FBUyxDQUFDLElBQXdCLEVBQUUsVUFBbUIsS0FBSztRQUNqRSxPQUFPLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQzsrRkFKVSxrQkFBa0I7Z0hBQWxCLGtCQUFrQjs7dUZBQWxCLGtCQUFrQjtjQUg5QixJQUFJO2VBQUM7Z0JBQ0osSUFBSSxFQUFFLGdCQUFnQjthQUN2Qjs7QUFZRCxNQUFNLE9BQU8sb0JBQW9CO2lHQUFwQixvQkFBb0I7MkZBQXBCLG9CQUFvQjs7O3VGQUFwQixvQkFBb0I7Y0FKaEMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLGtCQUFrQixDQUFDO2dCQUMzRCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxrQkFBa0IsQ0FBQzthQUN2RDs7d0ZBQ1ksb0JBQW9CLG1CQTdCcEIsdUJBQXVCLEVBa0J2QixrQkFBa0IsYUFsQmxCLHVCQUF1QixFQWtCdkIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdNb2R1bGUsIE9uQ2hhbmdlcywgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IG1vbWVudCwgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5cbi8qKiBEYXR1bXN3ZXJ0ZSwgZGllIERpcmVrdGl2ZSB1bmQgUGlwZSBhbnplaWdlbiBrb2VubmVuOyBUZXh0ZSBpbSBJU08tRm9ybWF0ICh6LiBCLiB2b20gQmFja2VuZCkgKi9cbmV4cG9ydCB0eXBlIERldXRzY2hlc0RhdHVtV2VydCA9IE1vbWVudCB8IERhdGUgfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4vKiogR2VtZWluc2FtZSBGb3JtYXRpZXJ1bmcgZnVlciBEaXJla3RpdmUgdW5kIFBpcGU6IERELk1NLllZWVkgYnp3LiBERC5NTS5ZWVlZIEhIOm1tLCBzb25zdCBsZWVyICovXG5leHBvcnQgZnVuY3Rpb24gZGV1dHNjaGVzRGF0dW0od2VydDogRGV1dHNjaGVzRGF0dW1XZXJ0LCBtaXRaZWl0OiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xuICBpZiAoIVV0aWwuaXNEZWZpbmVkKHdlcnQpIHx8IHdlcnQgPT09ICcnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGNvbnN0IGRhdHVtOiBNb21lbnQgPSBtb21lbnQod2VydCk7XG4gIHJldHVybiBkYXR1bS5pc1ZhbGlkKCkgPyBkYXR1bS5mb3JtYXQobWl0WmVpdCA/ICdERC5NTS5ZWVlZIEhIOm1tJyA6ICdERC5NTS5ZWVlZJykgOiAnJztcbn1cblxuLyoqIFplaWd0IGVpbiBEYXR1bSBkZXV0c2NoIGFuOiBgPHNwYW4gW2FwcEdlcm1hbkRhdGVUaW1lXT1cImF1ZmdhYmUuZGF0dW1cIiBbc2hvd1RpbWVdPVwidHJ1ZVwiPjwvc3Bhbj5gICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwR2VybWFuRGF0ZVRpbWVdJ1xufSlcbmV4cG9ydCBjbGFzcyBHZXJtYW5EYXRlVGltZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgcHVibGljIGFwcEdlcm1hbkRhdGVUaW1lOiBEZXV0c2NoZXNEYXR1bVdlcnQ7XG4gIEBJbnB1dCgpIHB1YmxpYyBzaG93VGltZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkZXV0c2NoZXNEYXR1bSh0aGlzLmFwcEdlcm1hbkRhdGVUaW1lLCB0aGlzLnNob3dUaW1lID09PSB0cnVlKTtcbiAgfVxufVxuXG4vKiogRGF0dW0gaW4gSW50ZXJwb2xhdGlvbmVuIHVuZCBBdHRyaWJ1dGVuOiBge3sgYXVmZ2FiZS5kYXR1bSB8IGRldXRzY2hlc0RhdHVtIH19YCwgbWl0IFVocnplaXQgYHwgZGV1dHNjaGVzRGF0dW06IHRydWVgICovXG5AUGlwZSh7XG4gIG5hbWU6ICdkZXV0c2NoZXNEYXR1bSdcbn0pXG5leHBvcnQgY2xhc3MgRGV1dHNjaGVzRGF0dW1QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgcHVibGljIHRyYW5zZm9ybSh3ZXJ0OiBEZXV0c2NoZXNEYXR1bVdlcnQsIG1pdFplaXQ6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRldXRzY2hlc0RhdHVtKHdlcnQsIG1pdFplaXQpO1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0dlcm1hbkRhdGVUaW1lRGlyZWN0aXZlLCBEZXV0c2NoZXNEYXR1bVBpcGVdLFxuICBleHBvcnRzOiBbR2VybWFuRGF0ZVRpbWVEaXJlY3RpdmUsIERldXRzY2hlc0RhdHVtUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgR2VybWFuRGF0ZVRpbWVNb2R1bGUge31cbiJdfQ==