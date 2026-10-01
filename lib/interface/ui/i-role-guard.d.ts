import { InjectionToken } from '@angular/core';
import { ObservableValue } from '../../impl/util/observable-value';
/** Rollenpruefung der Anwendung, die die `RoleGuardDirective` steuert; der Host bindet seinen Service an `ROLE_GUARD`. */
export interface IRoleGuard {
    /** Rollenpruefung ist initialisiert */
    readonly isActive: ObservableValue<boolean>;
    /** Die markierten Elemente der Seite sind geprueft */
    readonly elementsChecked: ObservableValue<boolean>;
    /** Das Menue ist geprueft */
    readonly menuChecked: ObservableValue<boolean>;
    readonly isCurrentPageReadonly: boolean;
    /** Stoesst eine erneute Pruefung der Elemente an */
    trigger(): void;
}
export declare const ROLE_GUARD: InjectionToken<IRoleGuard>;
