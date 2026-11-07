import { Directive } from '@angular/core';
import { merge, Subject } from 'rxjs';
import _ from 'underscore';
import { BaseObject } from '../ui/base-object';
import { SubscriptionHandler } from '../../impl/util/subscription-handler';
import { Util } from '../../impl/util/util';
import { ValidatorRequired } from '../../impl/validation/validator-required';
import * as i0 from "@angular/core";
import * as i1 from "../../impl/util/observable-value";
/**
 * Entscheidet, fuer welche Betriebe ein Bereich arbeitet: die vom Host uebergebenen oder sonst der Betrieb des
 * Kopfzeilen-Selektors. Komponenten, Services und Resolver lesen den Betrieb nur hierueber, nie direkt am Selektor.
 *
 * Jedes Submodul leitet einen eigenen Service ab und reicht seine Ports durch:
 * ```ts
 * @Injectable({ providedIn: 'root' })
 * export class StammdatenBetriebskontextService extends AbstractBetriebskontext<StammdatenBetrieb> {
 *   constructor(@Inject(STAMMDATEN_BETRIEB_SELECTOR) selektor: IEntitySelector<StammdatenBetrieb>,
 *               @Optional() @Inject(STAMMDATEN_BETRIEBE) uebergeben: ObservableValue<StammdatenBetrieb[] | null> | null) {
 *     super(selektor, uebergeben);
 *   }
 * }
 * ```
 */
export class AbstractBetriebskontext extends BaseObject {
    betriebSelector;
    uebergebeneBetriebe;
    gewechselt$ = new Subject();
    /** Meldet nur Wechsel der wirksamen Betriebe; ein Selektorwechsel bei uebergebenen Betrieben bleibt still. */
    gewechselt = this.gewechselt$.asObservable();
    letzteIds;
    optionen = [];
    /**
     * @param betriebSelector Betrieb der Kopfzeile
     * @param uebergebeneBetriebe vom Host uebergebene Betriebe; `null`, leer oder ungebunden: es gilt der Selektor
     */
    constructor(betriebSelector, uebergebeneBetriebe) {
        super();
        this.betriebSelector = betriebSelector;
        this.uebergebeneBetriebe = uebergebeneBetriebe;
        this.letzteIds = this.idsBetriebe;
        this.optionenBerechnen();
        const quellen = Util.isDefined(this.uebergebeneBetriebe)
            ? [this.betriebSelector.data.changed, this.uebergebeneBetriebe.changed]
            : [this.betriebSelector.data.changed];
        this.watch(merge(...quellen), new SubscriptionHandler(() => this.pruefeWechsel()));
    }
    /** `true`, wenn der Host Betriebe uebergeben hat; sonst gilt der Selektor. */
    get explizit() {
        return Util.isDefined(this.uebergebeneBetriebe) && !_.isEmpty(this.uebergebeneBetriebe.value);
    }
    get betriebe() {
        if (this.explizit) {
            return this.uebergebeneBetriebe.value;
        }
        const betrieb = this.betriebSelector.data.value;
        return Util.isDefined(betrieb) ? [betrieb] : [];
    }
    /** Der einzige bzw. erste der uebergebenen Betriebe */
    get betrieb() {
        return _.first(this.betriebe);
    }
    get idBetrieb() {
        return this.betrieb?.id;
    }
    get idsBetriebe() {
        return this.betriebe.map((betrieb) => betrieb.id);
    }
    get mehrereBetriebe() {
        return this.betriebe.length > 1;
    }
    /**
     * Betriebe fuer die Seiten-Resolver: ohne Uebergabe zaehlt der Betrieb der Route, weil der Selektor
     * parallel dazu erst aus der Route aufgeloest wird und hier noch den vorherigen Betrieb haben kann.
     */
    idsBetriebeOder(idAusRoute) {
        return this.explizit ? this.idsBetriebe : [idAusRoute];
    }
    /** Stabile Liste fuer Auswahlfelder und Listen-Filter; aendert sich nur mit den wirksamen Betrieben. */
    get betriebOptionen() {
        return this.optionen;
    }
    /**
     * Betriebsfeld eines Formulars: neue Eintraege bekommen den einzigen Betrieb, bei mehreren den vorbelegten
     * (z. B. aus dem Betriebsfilter einer Liste) oder die Auswahl ist Pflicht; bestehende behalten ihren Betrieb.
     */
    betriebFeldVorbereiten(feld, neu, vorbelegt) {
        if (neu) {
            const vorbelegterBetrieb = Util.isDefined(vorbelegt) && this.idsBetriebe.includes(vorbelegt) ? vorbelegt : null;
            feld.setValue(this.mehrereBetriebe ? vorbelegterBetrieb : this.idBetrieb, true);
        }
        feld.validateWith(neu && this.mehrereBetriebe ? [new ValidatorRequired()] : []);
    }
    pruefeWechsel() {
        const ids = this.idsBetriebe;
        if (!_.isEqual(ids, this.letzteIds)) {
            this.letzteIds = ids;
            this.optionenBerechnen();
            this.gewechselt$.next(this.betriebe);
        }
    }
    optionenBerechnen() {
        this.optionen = this.betriebe.map((betrieb) => ({
            id: betrieb.id,
            name: betrieb.hofname || `Betrieb ${betrieb.id}`
        }));
    }
    /** @nocollapse */ static ɵfac = function AbstractBetriebskontext_Factory(t) { i0.ɵɵinvalidFactory(); };
    /** @nocollapse */ static ɵdir = /** @pureOrBreakMyCode */ i0.ɵɵdefineDirective({ type: AbstractBetriebskontext, features: [i0.ɵɵInheritDefinitionFeature] });
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractBetriebskontext, [{
        type: Directive
    }], function () { return [{ type: undefined }, { type: i1.ObservableValue }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtYmV0cmllYnNrb250ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUvc3JjL2xpYi9hYnN0cmFjdC91dGlsL2Fic3RyYWN0LWJldHJpZWJza29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxLQUFLLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUMzQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7QUFjN0U7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFSCxNQUFNLE9BQWdCLHVCQUFpRSxTQUFRLFVBQVU7SUFlM0Y7SUFDQTtJQWRLLFdBQVcsR0FBd0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUVsRSw4R0FBOEc7SUFDOUYsVUFBVSxHQUEyQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRTdFLFNBQVMsQ0FBVztJQUNwQixRQUFRLEdBQW9CLEVBQUUsQ0FBQztJQUV2Qzs7O09BR0c7SUFDSCxZQUNZLGVBQTBDLEVBQzFDLG1CQUE4RDtRQUV4RSxLQUFLLEVBQUUsQ0FBQztRQUhFLG9CQUFlLEdBQWYsZUFBZSxDQUEyQjtRQUMxQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTJDO1FBR3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNsQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FB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QUM7SUFDbEYsQ0FBQztJQUVPLGFBQWE7UUFDbkIsTUFBTSxHQUFHLEdBQWEsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEQsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ2QsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLElBQUksV0FBVyxPQUFPLENBQUMsRUFBRSxFQUFFO1NBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7NEZBaEdtQix1QkFBdUI7O3VGQUF2Qix1QkFBdUI7Y0FENUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHsgQmFzZU9iamVjdCB9IGZyb20gJy4uL3VpL2Jhc2Utb2JqZWN0JztcbmltcG9ydCB7IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB9IGZyb20gJy4uL3ZhbGlkYXRpb24vYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHsgSUVudGl0eVNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3VpL2ktZW50aXR5LXNlbGVjdG9yJztcbmltcG9ydCB7IE9ic2VydmFibGVWYWx1ZSB9IGZyb20gJy4uLy4uL2ltcGwvdXRpbC9vYnNlcnZhYmxlLXZhbHVlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkhhbmRsZXIgfSBmcm9tICcuLi8uLi9pbXBsL3V0aWwvc3Vic2NyaXB0aW9uLWhhbmRsZXInO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4uLy4uL2ltcGwvdXRpbC91dGlsJztcbmltcG9ydCB7IFZhbGlkYXRvclJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vaW1wbC92YWxpZGF0aW9uL3ZhbGlkYXRvci1yZXF1aXJlZCc7XG5cbi8qKiBNaW5kZXN0YW5nYWJlbiBlaW5lcyBCZXRyaWVicyBmdWVyIGRlbiBCZXRyaWVic2tvbnRleHQ7IEZlbGRuYW1lbiB3aWUgaW0gQmV0cmllYnMtTW9kZWwgZGVyIEhvc3RzLiAqL1xuZXhwb3J0IGludGVyZmFjZSBCZXRyaWVic2tvbnRleHRCZXRyaWViIHtcbiAgaWQ6IG51bWJlcjtcbiAgaG9mbmFtZT86IHN0cmluZztcbn1cblxuLyoqIEJldHJpZWIgaW4gQXVzd2FobGZlbGRlcm4gdW5kIEJldHJpZWJzLUZpbHRlcm4gZGVyIExpc3RlbjsgRmVsZG5hbWVuIHdpZSBgTXJkRGF0ZW5MaXN0ZUJldHJpZWJgIChtcmQtY29yZS11aSkuICovXG5leHBvcnQgaW50ZXJmYWNlIEJldHJpZWJPcHRpb24ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRW50c2NoZWlkZXQsIGZ1ZXIgd2VsY2hlIEJldHJpZWJlIGVpbiBCZXJlaWNoIGFyYmVpdGV0OiBkaWUgdm9tIEhvc3QgdWViZXJnZWJlbmVuIG9kZXIgc29uc3QgZGVyIEJldHJpZWIgZGVzXG4gKiBLb3BmemVpbGVuLVNlbGVrdG9ycy4gS29tcG9uZW50ZW4sIFNlcnZpY2VzIHVuZCBSZXNvbHZlciBsZXNlbiBkZW4gQmV0cmllYiBudXIgaGllcnVlYmVyLCBuaWUgZGlyZWt0IGFtIFNlbGVrdG9yLlxuICpcbiAqIEplZGVzIFN1Ym1vZHVsIGxlaXRldCBlaW5lbiBlaWdlbmVuIFNlcnZpY2UgYWIgdW5kIHJlaWNodCBzZWluZSBQb3J0cyBkdXJjaDpcbiAqIGBgYHRzXG4gKiBASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuICogZXhwb3J0IGNsYXNzIFN0YW1tZGF0ZW5CZXRyaWVic2tvbnRleHRTZXJ2aWNlIGV4dGVuZHMgQWJzdHJhY3RCZXRyaWVic2tvbnRleHQ8U3RhbW1kYXRlbkJldHJpZWI+IHtcbiAqICAgY29uc3RydWN0b3IoQEluamVjdChTVEFNTURBVEVOX0JFVFJJRUJfU0VMRUNUT1IpIHNlbGVrdG9yOiBJRW50aXR5U2VsZWN0b3I8U3RhbW1kYXRlbkJldHJpZWI+LFxuICogICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFNUQU1NREFURU5fQkVUUklFQkUpIHVlYmVyZ2ViZW46IE9ic2VydmFibGVWYWx1ZTxTdGFtbWRhdGVuQmV0cmllYltdIHwgbnVsbD4gfCBudWxsKSB7XG4gKiAgICAgc3VwZXIoc2VsZWt0b3IsIHVlYmVyZ2ViZW4pO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RCZXRyaWVic2tvbnRleHQ8VEJldHJpZWIgZXh0ZW5kcyBCZXRyaWVic2tvbnRleHRCZXRyaWViPiBleHRlbmRzIEJhc2VPYmplY3Qge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZ2V3ZWNoc2VsdCQ6IFN1YmplY3Q8VEJldHJpZWJbXT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKiBNZWxkZXQgbnVyIFdlY2hzZWwgZGVyIHdpcmtzYW1lbiBCZXRyaWViZTsgZWluIFNlbGVrdG9yd2VjaHNlbCBiZWkgdWViZXJnZWJlbmVuIEJldHJpZWJlbiBibGVpYnQgc3RpbGwuICovXG4gIHB1YmxpYyByZWFkb25seSBnZXdlY2hzZWx0OiBPYnNlcnZhYmxlPFRCZXRyaWViW10+ID0gdGhpcy5nZXdlY2hzZWx0JC5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIGxldHp0ZUlkczogbnVtYmVyW107XG4gIHByaXZhdGUgb3B0aW9uZW46IEJldHJpZWJPcHRpb25bXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gYmV0cmllYlNlbGVjdG9yIEJldHJpZWIgZGVyIEtvcGZ6ZWlsZVxuICAgKiBAcGFyYW0gdWViZXJnZWJlbmVCZXRyaWViZSB2b20gSG9zdCB1ZWJlcmdlYmVuZSBCZXRyaWViZTsgYG51bGxgLCBsZWVyIG9kZXIgdW5nZWJ1bmRlbjogZXMgZ2lsdCBkZXIgU2VsZWt0b3JcbiAgICovXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYmV0cmllYlNlbGVjdG9yOiBJRW50aXR5U2VsZWN0b3I8VEJldHJpZWI+LFxuICAgIHByb3RlY3RlZCB1ZWJlcmdlYmVuZUJldHJpZWJlOiBPYnNlcnZhYmxlVmFsdWU8VEJldHJpZWJbXSB8IG51bGw+IHwgbnVsbFxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubGV0enRlSWRzID0gdGhpcy5pZHNCZXRyaWViZTtcbiAgICB0aGlzLm9wdGlvbmVuQmVyZWNobmVuKCk7XG4gICAgY29uc3QgcXVlbGxlbjogT2JzZXJ2YWJsZTx1bmtub3duPltdID0gVXRpbC5pc0RlZmluZWQodGhpcy51ZWJlcmdlYmVuZUJldHJpZWJlKVxuICAgICAgPyBbdGhpcy5iZXRyaWViU2VsZWN0b3IuZGF0YS5jaGFuZ2VkLCB0aGlzLnVlYmVyZ2ViZW5lQmV0cmllYmUuY2hhbmdlZF1cbiAgICAgIDogW3RoaXMuYmV0cmllYlNlbGVjdG9yLmRhdGEuY2hhbmdlZF07XG4gICAgdGhpcy53YXRjaChtZXJnZSguLi5xdWVsbGVuKSwgbmV3IFN1YnNjcmlwdGlvbkhhbmRsZXIoKCkgPT4gdGhpcy5wcnVlZmVXZWNoc2VsKCkpKTtcbiAgfVxuXG4gIC8qKiBgdHJ1ZWAsIHdlbm4gZGVyIEhvc3QgQmV0cmllYmUgdWViZXJnZWJlbiBoYXQ7IHNvbnN0IGdpbHQgZGVyIFNlbGVrdG9yLiAqL1xuICBwdWJsaWMgZ2V0IGV4cGxpeml0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBVdGlsLmlzRGVmaW5lZCh0aGlzLnVlYmVyZ2ViZW5lQmV0cmllYmUpICYmICFfLmlzRW1wdHkodGhpcy51ZWJlcmdlYmVuZUJldHJpZWJlLnZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYmV0cmllYmUoKTogVEJldHJpZWJbXSB7XG4gICAgaWYgKHRoaXMuZXhwbGl6aXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnVlYmVyZ2ViZW5lQmV0cmllYmUhLnZhbHVlITtcbiAgICB9XG4gICAgY29uc3QgYmV0cmllYjogVEJldHJpZWIgPSB0aGlzLmJldHJpZWJTZWxlY3Rvci5kYXRhLnZhbHVlO1xuICAgIHJldHVybiBVdGlsLmlzRGVmaW5lZChiZXRyaWViKSA/IFtiZXRyaWViXSA6IFtdO1xuICB9XG5cbiAgLyoqIERlciBlaW56aWdlIGJ6dy4gZXJzdGUgZGVyIHVlYmVyZ2ViZW5lbiBCZXRyaWViZSAqL1xuICBwdWJsaWMgZ2V0IGJldHJpZWIoKTogVEJldHJpZWIge1xuICAgIHJldHVybiBfLmZpcnN0KHRoaXMuYmV0cmllYmUpIGFzIFRCZXRyaWViO1xuICB9XG5cbiAgcHVibGljIGdldCBpZEJldHJpZWIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5iZXRyaWViPy5pZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaWRzQmV0cmllYmUoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiB0aGlzLmJldHJpZWJlLm1hcCgoYmV0cmllYjogVEJldHJpZWIpID0+IGJldHJpZWIuaWQpO1xuICB9XG5cbiAgcHVibGljIGdldCBtZWhyZXJlQmV0cmllYmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYmV0cmllYmUubGVuZ3RoID4gMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCZXRyaWViZSBmdWVyIGRpZSBTZWl0ZW4tUmVzb2x2ZXI6IG9obmUgVWViZXJnYWJlIHphZWhsdCBkZXIgQmV0cmllYiBkZXIgUm91dGUsIHdlaWwgZGVyIFNlbGVrdG9yXG4gICAqIHBhcmFsbGVsIGRhenUgZXJzdCBhdXMgZGVyIFJvdXRlIGF1ZmdlbG9lc3Qgd2lyZCB1bmQgaGllciBub2NoIGRlbiB2b3JoZXJpZ2VuIEJldHJpZWIgaGFiZW4ga2Fubi5cbiAgICovXG4gIHB1YmxpYyBpZHNCZXRyaWViZU9kZXIoaWRBdXNSb3V0ZTogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIHJldHVybiB0aGlzLmV4cGxpeml0ID8gdGhpcy5pZHNCZXRyaWViZSA6IFtpZEF1c1JvdXRlXTtcbiAgfVxuXG4gIC8qKiBTdGFiaWxlIExpc3RlIGZ1ZXIgQXVzd2FobGZlbGRlciB1bmQgTGlzdGVuLUZpbHRlcjsgYWVuZGVydCBzaWNoIG51ciBtaXQgZGVuIHdpcmtzYW1lbiBCZXRyaWViZW4uICovXG4gIHB1YmxpYyBnZXQgYmV0cmllYk9wdGlvbmVuKCk6IEJldHJpZWJPcHRpb25bXSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uZW47XG4gIH1cblxuICAvKipcbiAgICogQmV0cmllYnNmZWxkIGVpbmVzIEZvcm11bGFyczogbmV1ZSBFaW50cmFlZ2UgYmVrb21tZW4gZGVuIGVpbnppZ2VuIEJldHJpZWIsIGJlaSBtZWhyZXJlbiBkZW4gdm9yYmVsZWd0ZW5cbiAgICogKHouIEIuIGF1cyBkZW0gQmV0cmllYnNmaWx0ZXIgZWluZXIgTGlzdGUpIG9kZXIgZGllIEF1c3dhaGwgaXN0IFBmbGljaHQ7IGJlc3RlaGVuZGUgYmVoYWx0ZW4gaWhyZW4gQmV0cmllYi5cbiAgICovXG4gIHB1YmxpYyBiZXRyaWViRmVsZFZvcmJlcmVpdGVuKGZlbGQ6IEFjY2Vzc2FibGVGb3JtQ29udHJvbDxudW1iZXI+LCBuZXU6IGJvb2xlYW4sIHZvcmJlbGVndD86IG51bWJlciB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAobmV1KSB7XG4gICAgICBjb25zdCB2b3JiZWxlZ3RlckJldHJpZWI6IG51bWJlciB8IG51bGwgPSBVdGlsLmlzRGVmaW5lZCh2b3JiZWxlZ3QpICYmIHRoaXMuaWRzQmV0cmllYmUuaW5jbHVkZXModm9yYmVsZWd0KSA/IHZvcmJlbGVndCA6IG51bGw7XG4gICAgICBmZWxkLnNldFZhbHVlKHRoaXMubWVocmVyZUJldHJpZWJlID8gdm9yYmVsZWd0ZXJCZXRyaWViIDogdGhpcy5pZEJldHJpZWIsIHRydWUpO1xuICAgIH1cbiAgICBmZWxkLnZhbGlkYXRlV2l0aChuZXUgJiYgdGhpcy5tZWhyZXJlQmV0cmllYmUgPyBbbmV3IFZhbGlkYXRvclJlcXVpcmVkKCldIDogW10pO1xuICB9XG5cbiAgcHJpdmF0ZSBwcnVlZmVXZWNoc2VsKCk6IHZvaWQge1xuICAgIGNvbnN0IGlkczogbnVtYmVyW10gPSB0aGlzLmlkc0JldHJpZWJlO1xuICAgIGlmICghXy5pc0VxdWFsKGlkcywgdGhpcy5sZXR6dGVJZHMpKSB7XG4gICAgICB0aGlzLmxldHp0ZUlkcyA9IGlkcztcbiAgICAgIHRoaXMub3B0aW9uZW5CZXJlY2huZW4oKTtcbiAgICAgIHRoaXMuZ2V3ZWNoc2VsdCQubmV4dCh0aGlzLmJldHJpZWJlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9wdGlvbmVuQmVyZWNobmVuKCk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9uZW4gPSB0aGlzLmJldHJpZWJlLm1hcCgoYmV0cmllYjogVEJldHJpZWIpID0+ICh7XG4gICAgICBpZDogYmV0cmllYi5pZCxcbiAgICAgIG5hbWU6IGJldHJpZWIuaG9mbmFtZSB8fCBgQmV0cmllYiAke2JldHJpZWIuaWR9YFxuICAgIH0pKTtcbiAgfVxufVxuIl19