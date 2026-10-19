import { ValidatorFn } from '@angular/forms';
import { IValidator } from '../../interface/validation/i-validator';
/** Prueft Uhrzeiten im Format HH:mm; Moment-Werte gelten als gueltig, wenn sie gueltig sind. */
export declare class ValidatorTime implements IValidator {
    static readonly TIME_FORMAT = "HH:mm";
    error: string;
    iconError?: string | undefined;
    hasError: boolean;
    private value;
    /** @param fehlertext Eigener Text statt der Standardmeldung */
    constructor(fehlertext?: string, iconFehlertext?: string);
    validator(): ValidatorFn;
    validate(): any;
}
