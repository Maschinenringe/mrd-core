/**
 * Betriebe, fuer die ein Service gerade geladen hat. Gelesen wird ueber alle (z. B. `/multi-betriebe/1,2,3/...`),
 * geschrieben immer nur fuer einen Betrieb.
 */
export declare class Betriebsauswahl {
    private ids;
    get idsBetriebe(): number[];
    /** Liefert `true`, wenn sich die Betriebe geaendert haben und der Store deshalb geleert werden muss. */
    setzen(idsBetriebe: (number | null | undefined)[]): boolean;
    enthaelt(idBetrieb: number | null | undefined): boolean;
    /**
     * Betrieb fuer Schreibzugriffe: der des Eintrags; betriebsuebergreifende Eintraege (ohne Betrieb, z. B.
     * Standardsorten oder -duenger) gehen an den Betrieb, wenn genau einer gewaehlt ist.
     */
    betriebZumSchreiben(idBetriebDesEintrags?: number | null): number;
}
