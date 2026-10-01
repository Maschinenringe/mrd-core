import { ElementRef, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
/** Zeigt eine Zahl mit Dezimalkomma an, optional mit festen Nachkommastellen und Tausenderpunkt. */
export declare class GermanFloatDirective implements OnChanges {
    private el;
    appGermanFloat: string | number | undefined;
    digits: number | undefined;
    tausendertrennzeichen: boolean;
    constructor(el: ElementRef);
    ngOnChanges(): void;
    parse(float: number): string;
    transform(float: string): string;
    private convert;
    static ɵfac: i0.ɵɵFactoryDeclaration<GermanFloatDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GermanFloatDirective, "[appGermanFloat]", never, { "appGermanFloat": { "alias": "appGermanFloat"; "required": false; }; "digits": { "alias": "digits"; "required": false; }; "tausendertrennzeichen": { "alias": "tausendertrennzeichen"; "required": false; }; }, {}, never, never, false, never>;
}
export declare class GermanFloatModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<GermanFloatModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<GermanFloatModule, [typeof GermanFloatDirective], never, [typeof GermanFloatDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<GermanFloatModule>;
}
