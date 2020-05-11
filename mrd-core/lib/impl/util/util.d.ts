export declare class Util {
    static isDefined(obj: any): boolean;
    static armUrlWithSearchParams(url: string, queryParams: object): string;
    static createEntityUrl(url: string, id: any): string;
    static getBrowser(): string;
    static getCurrentUnixTimestamp(): number;
    static guid(): string;
    private static transformUmlaute;
    static sortAlpabetically<TListType>(list: TListType[], attribute: string): TListType[];
}
