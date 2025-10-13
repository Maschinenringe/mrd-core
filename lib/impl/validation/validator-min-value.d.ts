import { ValidatorFn } from '@angular/forms';
import { IValidator } from '../../interface/validation/i-validator';
export declare class ValidatorMinValue implements IValidator {
    private readonly minValue$;
    error: string;
    hasError: boolean;
    private value;
    constructor(minValue$: number);
    validate(): any;
    validator(): ValidatorFn;
}
