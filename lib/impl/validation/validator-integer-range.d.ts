import { ValidatorFn } from '@angular/forms';
import { IValidator } from '../../interface/validation/i-validator';
export declare class ValidatorIntegerRange implements IValidator {
    private minValue$;
    private maxValue$;
    private showSmallError;
    error: string;
    smallError: string;
    hasError: boolean;
    private value$;
    constructor(minValue$?: number, maxValue$?: number, showSmallError?: boolean);
    validate(): any;
    validator(): ValidatorFn;
}
