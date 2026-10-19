import { ElementRef, OnChanges, PipeTransform } from '@angular/core';
import { Moment } from 'moment';
import * as i0 from "@angular/core";
/** Datumswerte, die Direktive und Pipe anzeigen koennen; Texte im ISO-Format (z. B. vom Backend) */
export type DeutschesDatumWert = Moment | Date | string | null | undefined;
/** Gemeinsame Formatierung fuer Direktive und Pipe: DD.MM.YYYY bzw. DD.MM.YYYY HH:mm, sonst leer */
export declare function deutschesDatum(wert: DeutschesDatumWert, mitZeit?: boolean): string;
/** Zeigt ein Datum deutsch an: `<span [appGermanDateTime]="aufgabe.datum" [showTime]="true"></span>` */
export declare class GermanDateTimeDirective implements OnChanges {
    private el;
    appGermanDateTime: DeutschesDatumWert;
    showTime: boolean;
    constructor(el: ElementRef);
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GermanDateTimeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GermanDateTimeDirective, "[appGermanDateTime]", never, { "appGermanDateTime": { "alias": "appGermanDateTime"; "required": false; }; "showTime": { "alias": "showTime"; "required": false; }; }, {}, never, never, false, never>;
}
/** Datum in Interpolationen und Attributen: `{{ aufgabe.datum | deutschesDatum }}`, mit Uhrzeit `| deutschesDatum: true` */
export declare class DeutschesDatumPipe implements PipeTransform {
    transform(wert: DeutschesDatumWert, mitZeit?: boolean): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeutschesDatumPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DeutschesDatumPipe, "deutschesDatum", false>;
}
export declare class GermanDateTimeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<GermanDateTimeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<GermanDateTimeModule, [typeof GermanDateTimeDirective, typeof DeutschesDatumPipe], never, [typeof GermanDateTimeDirective, typeof DeutschesDatumPipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<GermanDateTimeModule>;
}
