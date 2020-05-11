import { ValidatorFn } from '@angular/forms';
import { IValidator } from '../../interface/validation/i-validator';
export declare class ValidatorFixedValue implements IValidator {
    comparator: any;
    error: string;
    hasError: boolean;
    private value$;
    constructor(comparator: any, error?: string);
    validate(): any;
    validator(): ValidatorFn;
}
