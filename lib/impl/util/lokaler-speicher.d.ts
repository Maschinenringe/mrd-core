/**
 * Typisierter Zugriff auf den localStorage fuer Einstellungen wie Sortierung, Filter oder gewaehltes Erntejahr.
 * Lesen liefert null, wenn nichts oder etwas Unpassendes gespeichert ist; leere Werte entfernen den Eintrag.
 * Ist der Speicher gesperrt (privater Modus, blockierte Website-Daten), wird nichts gespeichert und null gelesen.
 *
 * `LokalerSpeicher.ganzzahl('selectedErntejahr')`, `LokalerSpeicher.schreiben('selectedErntejahr', 2026)`
 */
export declare class LokalerSpeicher {
    /** Text; ein leerer Text gilt als nicht gespeichert */
    static text(schluessel: string): string | null;
    /** Nicht-negative Ganzzahl, z. B. eine Id */
    static ganzzahl(schluessel: string): number | null;
    /** true/false, gespeichert als "true" bzw. "false" */
    static wahrheitswert(schluessel: string): boolean | null;
    /** Einer der erlaubten Werte, z. B. eine Sortierrichtung; alles andere gilt als nicht gespeichert */
    static auswahl<T extends string>(schluessel: string, erlaubt: readonly T[]): T | null;
    /** Als JSON gespeichertes Objekt; nicht lesbares JSON gilt als nicht gespeichert */
    static json<T>(schluessel: string): T | null;
    /** Speichert Texte, Zahlen und Wahrheitswerte als Text, Objekte als JSON; null, undefined und '' entfernen den Eintrag */
    static schreiben(schluessel: string, wert: string | number | boolean | object | null | undefined): void;
    static entfernen(schluessel: string): void;
    private static lesen;
}
