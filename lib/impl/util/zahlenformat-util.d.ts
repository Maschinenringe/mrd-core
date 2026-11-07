/** Zahlen und Dateigroessen fuer Anzeigetexte im deutschen Format (Dezimalkomma, Tausenderpunkt). */
export declare class ZahlenformatUtil {
    private static readonly KILO;
    private static readonly EINHEITEN;
    private static readonly EINHEIT_MB;
    /** Rundet auf genau `nachkommastellen` Stellen und setzt Tausenderpunkte: `1234.5` mit 2 -> `1.234,50` */
    static mitNachkommastellen(zahl: number, nachkommastellen: number): string;
    /** Groesse in der passenden Einheit, z. B. `1536` -> `1,5 KB`; ohne Wert `null` */
    static dateigroesse(groesseInByte: number | null | undefined, nachkommastellen?: number): string | null;
    /** Wie `dateigroesse`, fuer eine Angabe in MB (z. B. Speicherplatz): `2048` -> `2 GB` */
    static dateigroesseAusMB(groesseInMB: number | null | undefined, nachkommastellen?: number): string | null;
    static byteInMB(groesseInByte: number | null | undefined): number | null;
    static mbInByte(mb: number): number;
    /** Bytes einer Einheit (`'KB'` -> 1024); wirft bei unbekannter Einheit */
    static byteJeEinheit(einheit: string): number;
    private static mitEinheit;
}
