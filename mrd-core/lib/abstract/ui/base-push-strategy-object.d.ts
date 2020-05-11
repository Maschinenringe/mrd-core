import { BaseObject } from './base-object';
import { ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
export declare abstract class BasePushStrategyObject extends BaseObject {
    protected abstract cdr: ChangeDetectorRef;
    protected markForCheckIf(subject: Observable<any>): Subscription;
}
