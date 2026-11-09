import moment from 'moment';
export declare abstract class TypeConverter {
    /** Deutsches Datum am Anfang des Textes, z. B. `07.11.2026` (auch mit folgender Uhrzeit) */
    private static readonly DATE_REGEX;
    /** ISO-Datum am Anfang des Textes, z. B. `2026-11-07` oder `2026-11-07T10:15:30` */
    private static readonly DATE_REGEX_INPUT;
    /**
     * Versucht den Wert in eine Zahl zu konvertieren: `'1,5'` und `'1.5'` werden 1.5. Ein einzelner Punkt gilt als
     * Dezimaltrennzeichen, Tausenderpunkte (`'1.234,5'`) werden nicht erkannt; solche Texte bleiben unveraendert.
     */
    static toNumber(value: string | number): number | string;
    /** Nimmt eine Zahl und gibt eine deutsche Representation dieses Wertes zurück */
    static asGermanFloat(value: number | string, stellen?: number): string | undefined;
    /** Deutsches oder ISO-Datum als Moment (Uhrzeit als UTC uebernommen); andere Texte bleiben unveraendert. */
    static toMoment(value: string | moment.Moment): moment.Moment | string | undefined;
    static asGermanDate(value: string | moment.Moment): string | undefined;
    static asGermanTime(value: string | moment.Moment, withSeconds?: boolean, withMilliseconds?: boolean): string | undefined;
    static booleanNumberToSting(n: number): string;
    /** Text als Suchmuster fuer eine Volltextsuche: Sonderzeichen werden maskiert, Gross-/Kleinschreibung zaehlt nicht. */
    static asRegex(text: string): RegExp;
    static booleanToNumber(bool: boolean): number;
    static numberToBoolean(digit: number): boolean;
    /** Kovertiert einen String, der dem Regex einer Zahl entspricht, in eine Zahl */
    private static convertInputStringToNumber;
}
