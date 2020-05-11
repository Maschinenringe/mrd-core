import { IDeactivate } from "../../interface/util/i-deactivate";
import { Observable } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { IEntitySelector } from "../../interface/ui/i-entity-selector";
import { AbstractEntityResolver } from "../util/abstract-entity-resolver";
import { ActivatedRoute } from '@angular/router';
import { BasePushStrategyObject } from "./base-push-strategy-object";
export declare abstract class BaseRootComponent extends BasePushStrategyObject implements IDeactivate, OnDestroy {
    abstract canDeactivate(): Observable<boolean>;
    protected abstract activatedRoute: ActivatedRoute;
    protected observables: IEntitySelector<any>[];
    listenTo(observable: IEntitySelector<any>, resolver: AbstractEntityResolver<any, any>): void;
    ngOnDestroy(): void;
    protected onNextRequested(observable: IEntitySelector<any>, dataSet: any, resolver: AbstractEntityResolver<any, any>): void;
}
