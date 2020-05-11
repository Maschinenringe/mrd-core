export declare abstract class TypeConverter {
    /** Versucht den Wert in eine Zahl zu konvertieren. */
    static toNumber(value: string | number): number | string;
    /** Nimmt eine Zahl und gibt eine deutsche Representation dieses Wertes zurück */
    static asGermanFloat(value: number | string, stellen?: number): string | undefined;
    /** Erzeugt ein moment object und setzt dieses auf UTC, falls dies noch nicht geschehen ist. */
    /** Konvertiert ein moment Object in die lokale Zeitzone (Entfernt UTC) */
    static booleanNumberToSting(n: number): string;
    /** Konvertiert ein Moment Object zu einem Date Object */
    /** Kovertiert einen String in einen Regex um eine Volltextsuche zu ermöglichen */
    static asRegex(text: string): RegExp;
    static booleanToNumber(bool: boolean): number;
    static numberToBoolean(digit: number): boolean;
    /** Kovertiert einen String, der dem Regex einer Zahl entspricht, in eine Zahl */
    private static convertInputStringToNumber;
}
