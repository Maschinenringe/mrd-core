import { ValidatorFn } from '@angular/forms';
import { IValidator } from '../../interface/validation/i-validator';
import { Bundesland } from '../../enum/bundesland.enum';
export declare class ValidatorBetriebsnummer implements IValidator {
    hasError: boolean;
    _error: any;
    private value;
    static REGEX_BY: RegExp;
    static REGEX_NI: RegExp;
    static REGEX_SH: RegExp;
    private blRegex;
    private blNummer;
    constructor(idBundesland?: Bundesland, error?: string);
    get error(): string;
    validator(): ValidatorFn;
    validate(): any;
}
