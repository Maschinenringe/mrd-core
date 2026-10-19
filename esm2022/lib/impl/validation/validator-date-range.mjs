import moment from 'moment';
import { Util } from '../util/util';
/**
 * Datum muss innerhalb der Grenzen liegen, jeweils einschliesslich des Grenztages; beide Grenzen sind optional.
 * Geprueft werden nur Moment-Werte, unfertige Eingaben bleiben dem ValidatorDate ueberlassen.
 */
export class ValidatorDateRange {
    fehlertext;
    error = '';
    hasError = false;
    value;
    von;
    bis;
    /**
     * @param von Fruehestes erlaubtes Datum
     * @param bis Spaetestes erlaubtes Datum
     * @param fehlertext Eigener Text statt der Standardmeldung, z. B. in du-Form
     */
    constructor(von, bis, fehlertext) {
        this.fehlertext = fehlertext;
        // Kopien, damit die Datumswerte des Aufrufers nicht auf Tagesanfang/-ende verschoben werden
        this.von = Util.isDefined(von) ? moment(von).startOf('day') : undefined;
        this.bis = Util.isDefined(bis) ? moment(bis).endOf('day') : undefined;
    }
    validator() {
        return (input) => {
            this.value = input.value;
            return this.validate();
        };
    }
    validate() {
        this.hasError = false;
        if (!moment.isMoment(this.value)) {
            return null;
        }
        if (Util.isDefined(this.von) && this.value.isBefore(this.von)) {
            return this.fehler(`Bitte wählen Sie einen Zeitpunkt nach dem ${this.von.clone().subtract(1, 'day').format('DD.MM.YYYY')}`);
        }
        if (Util.isDefined(this.bis) && this.value.isAfter(this.bis)) {
            return this.fehler(`Bitte wählen Sie einen Zeitpunkt vor dem ${this.bis.clone().add(1, 'day').format('DD.MM.YYYY')}`);
        }
        return null;
    }
    fehler(standard) {
        this.error = this.fehlertext ?? standard;
        this.hasError = true;
        return { invalidDateRange: true };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWRhdGUtcmFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdmFsaWRhdGlvbi92YWxpZGF0b3ItZGF0ZS1yYW5nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLE1BQWdCLE1BQU0sUUFBUSxDQUFDO0FBRXRDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFbEM7OztHQUdHO0FBQ0gsTUFBTSxPQUFPLGtCQUFrQjtJQWMwQztJQVpoRSxLQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ25CLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFFekIsS0FBSyxDQUFVO0lBQ04sR0FBRyxDQUFVO0lBQ2IsR0FBRyxDQUFVO0lBRTlCOzs7O09BSUc7SUFDSCxZQUFZLEdBQW1CLEVBQUUsR0FBbUIsRUFBbUIsVUFBbUI7UUFBbkIsZUFBVSxHQUFWLFVBQVUsQ0FBUztRQUN4Riw0RkFBNEY7UUFDNUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEUsQ0FBQztJQUVNLFNBQVM7UUFDZCxPQUFPLENBQUMsS0FBc0IsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sUUFBUTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLDZDQUE2QyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3SDtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyw0Q0FBNEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdkg7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTyxNQUFNLENBQUMsUUFBZ0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLFFBQVEsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRvckZufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgbW9tZW50LCB7TW9tZW50fSBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtJVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLXZhbGlkYXRvcic7XG5pbXBvcnQge1V0aWx9IGZyb20gJy4uL3V0aWwvdXRpbCc7XG5cbi8qKlxuICogRGF0dW0gbXVzcyBpbm5lcmhhbGIgZGVyIEdyZW56ZW4gbGllZ2VuLCBqZXdlaWxzIGVpbnNjaGxpZXNzbGljaCBkZXMgR3Jlbnp0YWdlczsgYmVpZGUgR3JlbnplbiBzaW5kIG9wdGlvbmFsLlxuICogR2VwcnVlZnQgd2VyZGVuIG51ciBNb21lbnQtV2VydGUsIHVuZmVydGlnZSBFaW5nYWJlbiBibGVpYmVuIGRlbSBWYWxpZGF0b3JEYXRlIHVlYmVybGFzc2VuLlxuICovXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9yRGF0ZVJhbmdlIGltcGxlbWVudHMgSVZhbGlkYXRvciB7XG5cbiAgcHVibGljIGVycm9yOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGhhc0Vycm9yOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSB2YWx1ZTogdW5rbm93bjtcbiAgcHJpdmF0ZSByZWFkb25seSB2b24/OiBNb21lbnQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgYmlzPzogTW9tZW50O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gdm9uIEZydWVoZXN0ZXMgZXJsYXVidGVzIERhdHVtXG4gICAqIEBwYXJhbSBiaXMgU3BhZXRlc3RlcyBlcmxhdWJ0ZXMgRGF0dW1cbiAgICogQHBhcmFtIGZlaGxlcnRleHQgRWlnZW5lciBUZXh0IHN0YXR0IGRlciBTdGFuZGFyZG1lbGR1bmcsIHouIEIuIGluIGR1LUZvcm1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHZvbj86IE1vbWVudCB8IERhdGUsIGJpcz86IE1vbWVudCB8IERhdGUsIHByaXZhdGUgcmVhZG9ubHkgZmVobGVydGV4dD86IHN0cmluZykge1xuICAgIC8vIEtvcGllbiwgZGFtaXQgZGllIERhdHVtc3dlcnRlIGRlcyBBdWZydWZlcnMgbmljaHQgYXVmIFRhZ2VzYW5mYW5nLy1lbmRlIHZlcnNjaG9iZW4gd2VyZGVuXG4gICAgdGhpcy52b24gPSBVdGlsLmlzRGVmaW5lZCh2b24pID8gbW9tZW50KHZvbikuc3RhcnRPZignZGF5JykgOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5iaXMgPSBVdGlsLmlzRGVmaW5lZChiaXMpID8gbW9tZW50KGJpcykuZW5kT2YoJ2RheScpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHZhbGlkYXRvcigpOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChpbnB1dDogQWJzdHJhY3RDb250cm9sKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZSgpO1xuICAgIH07XG4gIH1cblxuICBwdWJsaWMgdmFsaWRhdGUoKTogYW55IHtcbiAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgaWYgKCFtb21lbnQuaXNNb21lbnQodGhpcy52YWx1ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy52b24pICYmIHRoaXMudmFsdWUuaXNCZWZvcmUodGhpcy52b24pKSB7XG4gICAgICByZXR1cm4gdGhpcy5mZWhsZXIoYEJpdHRlIHfDpGhsZW4gU2llIGVpbmVuIFplaXRwdW5rdCBuYWNoIGRlbSAke3RoaXMudm9uLmNsb25lKCkuc3VidHJhY3QoMSwgJ2RheScpLmZvcm1hdCgnREQuTU0uWVlZWScpfWApO1xuICAgIH1cbiAgICBpZiAoVXRpbC5pc0RlZmluZWQodGhpcy5iaXMpICYmIHRoaXMudmFsdWUuaXNBZnRlcih0aGlzLmJpcykpIHtcbiAgICAgIHJldHVybiB0aGlzLmZlaGxlcihgQml0dGUgd8OkaGxlbiBTaWUgZWluZW4gWmVpdHB1bmt0IHZvciBkZW0gJHt0aGlzLmJpcy5jbG9uZSgpLmFkZCgxLCAnZGF5JykuZm9ybWF0KCdERC5NTS5ZWVlZJyl9YCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBmZWhsZXIoc3RhbmRhcmQ6IHN0cmluZyk6IG9iamVjdCB7XG4gICAgdGhpcy5lcnJvciA9IHRoaXMuZmVobGVydGV4dCA/PyBzdGFuZGFyZDtcbiAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICByZXR1cm4ge2ludmFsaWREYXRlUmFuZ2U6IHRydWV9O1xuICB9XG59XG4iXX0=