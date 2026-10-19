import { ValidatorFn } from '@angular/forms';
import { Moment } from 'moment';
import { IValidator } from '../../interface/validation/i-validator';
/** Laesst nur Datumswerte an oder vor dem uebergebenen Tag zu; leere und ungueltige Werte prueft ValidatorDate. */
export declare class ValidatorMaxDate implements IValidator {
    error: string;
    iconError?: string | undefined;
    hasError: boolean;
    private value;
    private readonly maxDatum;
    /**
     * @param maxDate Spaetester erlaubter Tag
     * @param fehlertext Eigener Text statt der Standardmeldung, z. B. in du-Form
     */
    constructor(maxDate: Moment | Date, fehlertext?: string, iconFehlertext?: string);
    validator(): ValidatorFn;
    validate(): any;
    /** Texte kommen aus Eingabefeldern im deutschen Format */
    private alsDatum;
}
