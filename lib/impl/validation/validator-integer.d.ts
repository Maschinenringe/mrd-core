import { IValidator } from '../../interface/validation/i-validator';
import { ValidatorFn } from '@angular/forms';
export declare class ValidatorInteger implements IValidator {
    private allowNegativeValues$;
    error: string;
    hasError: boolean;
    private value$;
    private regex$;
    constructor(allowNegativeValues$?: boolean);
    validate(): any;
    validator(): ValidatorFn;
}
