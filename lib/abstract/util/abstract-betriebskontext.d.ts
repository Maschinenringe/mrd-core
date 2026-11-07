import { Observable } from 'rxjs';
import { BaseObject } from '../ui/base-object';
import { AccessableFormControl } from '../validation/accessable-form-control';
import { IEntitySelector } from '../../interface/ui/i-entity-selector';
import { ObservableValue } from '../../impl/util/observable-value';
import * as i0 from "@angular/core";
/** Mindestangaben eines Betriebs fuer den Betriebskontext; Feldnamen wie im Betriebs-Model der Hosts. */
export interface BetriebskontextBetrieb {
    id: number;
    hofname?: string;
}
/** Betrieb in Auswahlfeldern und Betriebs-Filtern der Listen; Feldnamen wie `MrdDatenListeBetrieb` (mrd-core-ui). */
export interface BetriebOption {
    id: number;
    name: string;
}
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
export declare abstract class AbstractBetriebskontext<TBetrieb extends BetriebskontextBetrieb> extends BaseObject {
    protected betriebSelector: IEntitySelector<TBetrieb>;
    protected uebergebeneBetriebe: ObservableValue<TBetrieb[] | null> | null;
    private readonly gewechselt$;
    /** Meldet nur Wechsel der wirksamen Betriebe; ein Selektorwechsel bei uebergebenen Betrieben bleibt still. */
    readonly gewechselt: Observable<TBetrieb[]>;
    private letzteIds;
    private optionen;
    /**
     * @param betriebSelector Betrieb der Kopfzeile
     * @param uebergebeneBetriebe vom Host uebergebene Betriebe; `null`, leer oder ungebunden: es gilt der Selektor
     */
    protected constructor(betriebSelector: IEntitySelector<TBetrieb>, uebergebeneBetriebe: ObservableValue<TBetrieb[] | null> | null);
    /** `true`, wenn der Host Betriebe uebergeben hat; sonst gilt der Selektor. */
    get explizit(): boolean;
    get betriebe(): TBetrieb[];
    /** Der einzige bzw. erste der uebergebenen Betriebe */
    get betrieb(): TBetrieb;
    get idBetrieb(): number;
    get idsBetriebe(): number[];
    get mehrereBetriebe(): boolean;
    /**
     * Betriebe fuer die Seiten-Resolver: ohne Uebergabe zaehlt der Betrieb der Route, weil der Selektor
     * parallel dazu erst aus der Route aufgeloest wird und hier noch den vorherigen Betrieb haben kann.
     */
    idsBetriebeOder(idAusRoute: number): number[];
    /** Stabile Liste fuer Auswahlfelder und Listen-Filter; aendert sich nur mit den wirksamen Betrieben. */
    get betriebOptionen(): BetriebOption[];
    /**
     * Betriebsfeld eines Formulars: neue Eintraege bekommen den einzigen Betrieb, bei mehreren den vorbelegten
     * (z. B. aus dem Betriebsfilter einer Liste) oder die Auswahl ist Pflicht; bestehende behalten ihren Betrieb.
     */
    betriebFeldVorbereiten(feld: AccessableFormControl<number>, neu: boolean, vorbelegt?: number | null): void;
    private pruefeWechsel;
    private optionenBerechnen;
    static ɵfac: i0.ɵɵFactoryDeclaration<AbstractBetriebskontext<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AbstractBetriebskontext<any>, never, never, {}, {}, never, never, false, never>;
}
