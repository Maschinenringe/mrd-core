import { ValidatorFn } from '@angular/forms';
import { Moment } from 'moment';
import { IValidator } from '../../interface/validation/i-validator';
/**
 * Datum muss innerhalb der Grenzen liegen, jeweils einschliesslich des Grenztages; beide Grenzen sind optional.
 * Geprueft werden nur Moment-Werte, unfertige Eingaben bleiben dem ValidatorDate ueberlassen.
 */
export declare class ValidatorDateRange implements IValidator {
    private readonly fehlertext?;
    error: string;
    hasError: boolean;
    private value;
    private readonly von?;
    private readonly bis?;
    /**
     * @param von Fruehestes erlaubtes Datum
     * @param bis Spaetestes erlaubtes Datum
     * @param fehlertext Eigener Text statt der Standardmeldung, z. B. in du-Form
     */
    constructor(von?: Moment | Date, bis?: Moment | Date, fehlertext?: string);
    validator(): ValidatorFn;
    validate(): any;
    private fehler;
}
