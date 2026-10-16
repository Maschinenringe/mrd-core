import { ValidatorFn } from '@angular/forms';
export interface IValidator {
    hasError: boolean;
    error?: string;
    iconError?: string;
    validator(): ValidatorFn;
    validate(): any;
}
