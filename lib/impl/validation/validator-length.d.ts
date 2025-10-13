import { IValidator } from '../../interface/validation/i-validator';
import { ValidatorFn } from '@angular/forms';
export declare class ValidatorLength implements IValidator {
    maxLength?: number;
    minLength?: number;
    static readonly ERROR_MAXLENGTH = "Dieses Feld darf maximal __MAX_LENGTH__ Zeichen enthalten.";
    static readonly ERROR_MINLENGTH = "Dieses Feld muss minimal __MIN_LENGTH__ Zeichen enthalten.";
    error: string;
    hasError: boolean;
    private value;
    constructor(maxLength?: number, minLength?: number);
    validator(): ValidatorFn;
    validate(): any;
}
