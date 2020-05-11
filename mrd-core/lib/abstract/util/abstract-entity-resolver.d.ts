import { AbstractRouteConfiguration } from "../routing/abstract-route-configuration";
import { ActivatedRoute, Router } from '@angular/router';
import { IEntitySelector } from "../../interface/ui/i-entity-selector";
export interface IEntityResolverConfiguration {
    keepQueryParams: boolean;
}
export declare abstract class AbstractEntityResolver<TRouteParams, TModel> {
    protected readonly router: Router;
    protected readonly routeConfiguration: AbstractRouteConfiguration<TRouteParams>;
    protected readonly configuration?: IEntityResolverConfiguration;
    abstract resolve(activatedRoute: ActivatedRoute, model: TModel, entitySelector: IEntitySelector<TModel>): Promise<boolean>;
    protected constructor(router: Router, routeConfiguration: AbstractRouteConfiguration<TRouteParams>, configuration?: IEntityResolverConfiguration);
    protected runResolver(activatedRoute: ActivatedRoute, params: object): Promise<boolean>;
    private static generateDefaultConfiguration;
}
