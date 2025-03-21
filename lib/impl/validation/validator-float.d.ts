import { IValidator } from '../../interface/validation/i-validator';
import { ValidatorFn } from '@angular/forms';
export declare class ValidatorFloat implements IValidator {
    digitsBefore?: number;
    digitsAfter?: number;
    hasError: boolean;
    error: string;
    private value;
    constructor(digitsBefore?: number, digitsAfter?: number);
    validator(): ValidatorFn;
    validate(): any;
}
