import { ValidatorFn } from '@angular/forms';
import { IValidator } from '../../interface/validation/i-validator';
import { BUNDESLAND_IDS } from '../../enum/bundesland-ids.enum';
export declare class ValidatorBetriebsnummer implements IValidator {
    hasError: boolean;
    _error: string | null;
    private value;
    static REGEX_BY: RegExp;
    static REGEX_NI: RegExp;
    static REGEX_SH: RegExp;
    private blRegex;
    private blNummer;
    constructor(idBundesland?: BUNDESLAND_IDS, error?: string);
    get error(): string;
    validator(): ValidatorFn;
    validate(): any;
}
