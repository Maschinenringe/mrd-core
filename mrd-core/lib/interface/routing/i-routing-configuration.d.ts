import { Data } from '@angular/router';
import { AbstractRouteConfiguration } from "../../abstract/routing/abstract-route-configuration";
/**
 * Dieses Interface muss mit jeder Angular Route verundet werden
 * damit die abstrakten Routing-Klassen die aktuelle Konfiguration
 * lesen können.
 */
export interface IRoutingConfiguration<TRoutingParams> {
    data: Data & IRoutingData<TRoutingParams>;
}
export interface IRoutingData<TRoutingParams> {
    routeConfiguration: AbstractRouteConfiguration<TRoutingParams>;
    pageTitle: string;
}
