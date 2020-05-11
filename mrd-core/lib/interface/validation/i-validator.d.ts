import { ValidatorFn } from '@angular/forms';
export interface IValidator {
    hasError: boolean;
    error: string;
    validator(): ValidatorFn;
    validate(): any;
}
