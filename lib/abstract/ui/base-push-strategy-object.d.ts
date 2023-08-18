import { BaseObject } from './base-object';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class BasePushStrategyObject extends BaseObject {
    protected abstract cdr: ChangeDetectorRef;
    protected markForCheckIf(subject: Observable<any>): Subscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<BasePushStrategyObject, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BasePushStrategyObject, "ng-component", never, {}, {}, never, never, false, never>;
}
