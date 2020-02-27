import { ValidatorFn } from '@angular/forms';
import { IValidator } from '../../interface/validation/i-validator';
export declare abstract class ValidatorCustom implements IValidator {
    abstract error: string;
    abstract hasError: boolean;
    private value;
    protected constructor();
    validator(): ValidatorFn;
    validate(): any;
}
