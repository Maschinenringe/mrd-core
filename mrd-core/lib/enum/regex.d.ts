/** Hier werden alle von der Applikation genutzten REGEX gespeichert. */
export declare const REGEX: {
    /** Regex für eine Zahl. Jede Zahl sollte damit erkannt werden */
    NUMBER: RegExp;
    /** Die Representation einer (Gleitkomma)Zahl, die der Anwender eingeben darf */
    INPUT_NUMBER: RegExp;
    INTEGER: RegExp;
    SIGNED_INTEGER: RegExp;
    /** Offizieller RFC 5322 Standart regex */
    EMAIL: RegExp;
    POSTAL_CODE: RegExp;
    SPECIAL_CHARS_REGEX: RegExp;
    DATE: RegExp;
};
