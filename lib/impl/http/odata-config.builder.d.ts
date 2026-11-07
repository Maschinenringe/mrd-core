import { HttpParams } from '@angular/common/http';
/**
 * Baut OData-Abfragen (`$filter`, `$orderby`, `$top`) fuer REST-Services.
 *
 * ```ts
 * ODataConfigBuilder.build()
 *   .filter('idErntejahr', [12, 13])
 *   .filterArray('aufgaben.idSchlag', idSchlag)
 *   .orderBy('datum', true)
 *   .toHttpParams();
 * ```
 */
export declare class ODataConfigBuilder {
    static build(): ODataConfigClass;
}
export type ODataBedingung = string | string[] | number | number[];
export declare class ODataConfigClass {
    filters: ODataFilterConfigMap;
    orderBys: ODataOrderByConfigMap;
    topCount: number | undefined;
    /**
     * @param orFilter der naechste Filter wird mit `or` statt `and` angehaengt
     */
    filter(field: string, condition: ODataBedingung, comparator?: ODataComparator, orFilter?: boolean): ODataConfigClass;
    orderBy(field: string, desc?: boolean): ODataConfigClass;
    top(count: number): ODataConfigClass;
    /** Filter auf ein Feld der Elemente einer Liste, z. B. `aufgaben.idSchlag` -> `aufgaben/any(x: x/idSchlag eq ...)` */
    filterArray(field: string, condition: ODataBedingung, anyOrAll?: 'any' | 'all', comparator?: ODataComparator): ODataConfigClass;
    toString(): string;
    toHttpParams(): HttpParams;
    toParamObject(): Record<string, string | number>;
    private getOdataArrayCondition;
    private getOdataCondition;
    private generateFilterString;
    private generateOrderByString;
}
export interface ODataFilterConfigMap extends Map<string, ODataFilterConfig> {
}
export interface ODataOrderByConfigMap extends Map<string, ODataOrderByConfig> {
}
export interface ODataConfig {
    filter?: ODataFilterConfigMap;
}
export interface ODataFilterConfig {
    condition: string;
    orFilter?: boolean;
}
export interface ODataOrderByConfig {
    direction: 'asc' | 'desc';
}
export declare enum ODataComparator {
    EQUALS = "eq",
    NOT_EQUALS = "ne",
    GREATER = "gt",
    LESS = "lt"
}
