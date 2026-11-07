/**
 * Sortierung von Feldstuecknummern (und aehnlichen Kennungen aus Zahlen und Text) wie die Universalapp
 * (FeldstuecknummerComparer).
 *
 * `schlaege.sort((a, b) => FeldstuecknummerUtil.compare(a.feldstuecknummer, b.feldstuecknummer))`
 */
export declare class FeldstuecknummerUtil {
    /**
     * Numerisch (auch mit Komma als Dezimaltrennzeichen), leere Werte ans Ende, nicht-numerische hinter numerischen,
     * sonst Textvergleich ohne Gross-/Kleinschreibung.
     */
    static compare(a: string | null | undefined, b: string | null | undefined): number;
    /** Sortiert eine Kopie der Liste nach der Feldstuecknummer, die `wert` liefert. */
    static sortieren<T>(liste: T[], wert: (eintrag: T) => string | null | undefined, absteigend?: boolean): T[];
    /** Feldstuecknummern mit Komma als Dezimaltrennzeichen (z. B. "3,10") werden ebenfalls numerisch behandelt */
    private static alsZahl;
}
