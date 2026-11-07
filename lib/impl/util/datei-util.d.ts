/** Dateien im Browser speichern und Dateinamen aus HTTP-Antworten lesen. */
export declare class DateiUtil {
    /** Speichert die Datei im Download-Ordner des Benutzers (ueber einen unsichtbaren Link). */
    static speichern(datei: Blob, dateiname: string): void;
    /** Dateiname aus dem Header `Content-Disposition`; RFC 5987 (`filename*=UTF-8''...`) hat Vorrang vor `filename=`. */
    static dateinameAusContentDisposition(header: string | null | undefined): string | null;
}
