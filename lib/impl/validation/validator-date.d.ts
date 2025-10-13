import { ValidatorFn } from '@angular/forms';
import { IValidator } from '../../interface/validation/i-validator';
export declare class ValidatorDate implements IValidator {
    static readonly DATE_FORMAT = "DD.MM.YYYY";
    error: string;
    hasError: boolean;
    private value;
    constructor();
    validator(): ValidatorFn;
    validate(): any;
    private _fail;
}
