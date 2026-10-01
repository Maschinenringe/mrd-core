import { ElementRef, OnInit } from '@angular/core';
import { BaseObject } from '../../abstract/ui/base-object';
import { AccessableFormGroup } from '../../abstract/validation/accessable-form-group';
import { IRoleGuard } from '../../interface/ui/i-role-guard';
import * as i0 from "@angular/core";
/**
 * Markiert Elemente fuer die rollenabhaengige Frontend-Konfiguration. Das eigentliche Ausblenden erledigt die
 * an `ROLE_GUARD` gebundene Rollenpruefung anhand der `configname`-Attribute; die Direktive verhindert nur das
 * Aufblitzen vor der Pruefung und sperrt schreibgeschuetzte Formulare.
 */
export declare class RoleGuardDirective extends BaseObject implements OnInit {
    private el;
    private roleGuard;
    /** Name des Elements in der Frontend-Konfiguration */
    configname: string;
    /** Formular, das bei Leserecht gesperrt wird (nur mit `configname="readonly-form"`) */
    readonlyFormControl?: AccessableFormGroup<any, any>;
    constructor(el: ElementRef, roleGuard: IRoleGuard);
    ngOnInit(): void;
    private checkElement;
    /** Listen laden ihre Eintraege nachtraeglich - neue Unterelemente muessen erneut geprueft werden. */
    private watchChildren;
    private lockFormIfReadonly;
    /** Ohne Rollenpruefung entfallen Ersatz-Elemente und Readonly-Titel; der Rest wartet auf die Menuepruefung. */
    private checkWithoutRoleGuard;
    private hideUntilChecked;
    static ɵfac: i0.ɵɵFactoryDeclaration<RoleGuardDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RoleGuardDirective, "[configname]", never, { "configname": { "alias": "configname"; "required": false; }; "readonlyFormControl": { "alias": "readonlyFormControl"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class RoleGuardModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<RoleGuardModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RoleGuardModule, [typeof RoleGuardDirective], never, [typeof RoleGuardDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RoleGuardModule>;
}
