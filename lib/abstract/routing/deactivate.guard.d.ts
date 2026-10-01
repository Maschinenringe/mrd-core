import { CanDeactivateFn } from '@angular/router';
import { IDeactivate } from '../../interface/util/i-deactivate';
/** Fragt vor dem Verlassen einer Seite nach ungespeicherten Aenderungen; Komponenten ohne `canDeactivate` duerfen immer verlassen werden. */
export declare const deactivateGuard: CanDeactivateFn<IDeactivate>;
