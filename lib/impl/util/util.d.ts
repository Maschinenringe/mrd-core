export declare class Util {
    static isDefined(obj: any): boolean;
    /**
     * Prüft, ob ein Objekt definiert ist und nicht leer oder 0 ist.
     * Als nicht definiert gelten: null, undefined
     * Objekte, die als leer gelten, sind: {}
     * Strings, die als leer gelten, sind: ''
     * Arrays, die als leer gelten, sind: []
     * Zahlen, die als Zero gelten, sind: 0
     *
     * @param obj Das zu prüfende Objekt
     * @param returnTheValueIfDefined Gibt an, ob der Wert zurückgegeben werden soll, wenn das Objekt definiert ist
     * @param undefinedReturnValue Der Wert, der zurückgegeben wird, wenn das Objekt nicht definiert ist und returnTheValueIfDefined auf true gesetzt ist
     * @returns Wenn returnTheValueIfDefined auf true gesetzt ist, wird der Wert des Objekts zurückgegeben, wenn es definiert ist oder undefinedRetrunValue (default: false).
     * Ansonsten wird true zurückgegeben, wenn das Objekt definiert ist, ansonsten false.
     */
    static isDefinedNotEmptyOrZero(obj: any, returnTheValueIfDefined?: boolean, undefinedReturnValue?: any): boolean | any;
    static armUrlWithSearchParams(url: string, queryParams: object): string;
    static createEntityUrl(url: string, id: any): string;
    static getBrowser(): string;
    static getCurrentUnixTimestamp(): number;
    static guid(): string;
    private static transformUmlaute;
    static sortAlpabetically<TListType>(list: TListType[], attribute: string): TListType[];
}
