export declare abstract class AbstractRouteConfiguration<TParams> {
    protected pathSegments: string[];
    protected paramNames?: TParams;
    protected parent?: AbstractRouteConfiguration<any>;
    protected constructor(pathSegments: string[], paramNames?: TParams, parent?: AbstractRouteConfiguration<any>);
    readonly path: string;
    readonly paramDefinition: TParams;
    buildNavigation(params?: TParams): any[];
    validate(): boolean;
}
