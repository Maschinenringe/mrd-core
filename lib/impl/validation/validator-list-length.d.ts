import { ValidatorFn } from '@angular/forms';
import { IValidator } from '../../interface/validation/i-validator';
/** Prueft, ob eine Liste mindestens `minSize` Elemente enthaelt. */
export declare class ValidatorListLength implements IValidator {
    minSize: number;
    private customError?;
    static readonly ERROR_EMPTY = "Das Feld muss mindestens __MIN_SIZE__ Element(e) enthalten.";
    error?: string;
    hasError: boolean;
    private value?;
    constructor(minSize: number, customError?: string);
    validator(): ValidatorFn;
    validate(): any;
}
