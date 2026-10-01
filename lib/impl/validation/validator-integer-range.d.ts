import { ValidatorFn } from '@angular/forms';
import { IValidator } from '../../interface/validation/i-validator';
/** Prueft, ob ein (Dezimal-)Wert innerhalb der Grenzen liegt; beide Grenzen sind optional. */
export declare class ValidatorIntegerRange implements IValidator {
    private minValue$;
    private maxValue$;
    private showSmallError;
    error: string;
    smallError: string;
    hasError: boolean;
    private value$?;
    constructor(minValue$?: number | undefined, maxValue$?: number | undefined, showSmallError?: boolean);
    validate(): any;
    validator(): ValidatorFn;
}
