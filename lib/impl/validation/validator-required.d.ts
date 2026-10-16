import { ValidatorFn } from '@angular/forms';
import { IValidator } from '../../interface/validation/i-validator';
export declare class ValidatorRequired implements IValidator {
    hasError: boolean;
    error: string;
    iconError: string;
    private value;
    constructor(error?: string, iconError?: string);
    validator(): ValidatorFn;
    validate(): any;
}
