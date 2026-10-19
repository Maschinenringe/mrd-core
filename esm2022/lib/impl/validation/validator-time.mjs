import moment from 'moment';
/** Prueft Uhrzeiten im Format HH:mm; Moment-Werte gelten als gueltig, wenn sie gueltig sind. */
export class ValidatorTime {
    static TIME_FORMAT = 'HH:mm';
    error;
    iconError;
    hasError = false;
    value;
    /** @param fehlertext Eigener Text statt der Standardmeldung */
    constructor(fehlertext, iconFehlertext) {
        this.error = fehlertext ?? 'Uhrzeit ungültig';
        this.iconError = iconFehlertext ?? 'Bitte gib eine gültige Uhrzeit ein';
    }
    validator() {
        return (input) => {
            this.value = input.value;
            return this.validate();
        };
    }
    validate() {
        this.hasError = false;
        if (!this.value) {
            return null;
        }
        const gueltig = moment.isMoment(this.value)
            ? this.value.isValid()
            : typeof this.value === 'string' && moment(this.value, ValidatorTime.TIME_FORMAT, true).isValid();
        if (gueltig) {
            return null;
        }
        this.hasError = true;
        return { invalidTime: true };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLXRpbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2ltcGwvdmFsaWRhdGlvbi92YWxpZGF0b3ItdGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFHNUIsZ0dBQWdHO0FBQ2hHLE1BQU0sT0FBTyxhQUFhO0lBRWpCLE1BQU0sQ0FBVSxXQUFXLEdBQUcsT0FBTyxDQUFDO0lBRXRDLEtBQUssQ0FBUztJQUNkLFNBQVMsQ0FBc0I7SUFDL0IsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUV6QixLQUFLLENBQVU7SUFFdkIsK0RBQStEO0lBQy9ELFlBQVksVUFBbUIsRUFBRSxjQUF1QjtRQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsSUFBSSxrQkFBa0IsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsSUFBSSxvQ0FBb0MsQ0FBQztJQUMxRSxDQUFDO0lBRU0sU0FBUztRQUNkLE9BQU8sQ0FBQyxLQUFzQixFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsTUFBTSxPQUFPLEdBQVksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2xELENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUN0QixDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BHLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE9BQU8sRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDLENBQUM7SUFDN0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JGbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtJVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLXZhbGlkYXRvcic7XG5cbi8qKiBQcnVlZnQgVWhyemVpdGVuIGltIEZvcm1hdCBISDptbTsgTW9tZW50LVdlcnRlIGdlbHRlbiBhbHMgZ3VlbHRpZywgd2VubiBzaWUgZ3VlbHRpZyBzaW5kLiAqL1xuZXhwb3J0IGNsYXNzIFZhbGlkYXRvclRpbWUgaW1wbGVtZW50cyBJVmFsaWRhdG9yIHtcblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRJTUVfRk9STUFUID0gJ0hIOm1tJztcblxuICBwdWJsaWMgZXJyb3I6IHN0cmluZztcbiAgcHVibGljIGljb25FcnJvcj86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcHVibGljIGhhc0Vycm9yOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSB2YWx1ZTogdW5rbm93bjtcblxuICAvKiogQHBhcmFtIGZlaGxlcnRleHQgRWlnZW5lciBUZXh0IHN0YXR0IGRlciBTdGFuZGFyZG1lbGR1bmcgKi9cbiAgY29uc3RydWN0b3IoZmVobGVydGV4dD86IHN0cmluZywgaWNvbkZlaGxlcnRleHQ/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmVycm9yID0gZmVobGVydGV4dCA/PyAnVWhyemVpdCB1bmfDvGx0aWcnO1xuICAgIHRoaXMuaWNvbkVycm9yID0gaWNvbkZlaGxlcnRleHQgPz8gJ0JpdHRlIGdpYiBlaW5lIGfDvGx0aWdlIFVocnplaXQgZWluJztcbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0b3IoKTogVmFsaWRhdG9yRm4ge1xuICAgIHJldHVybiAoaW5wdXQ6IEFic3RyYWN0Q29udHJvbCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHZhbGlkYXRlKCk6IGFueSB7XG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgIGlmICghdGhpcy52YWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGd1ZWx0aWc6IGJvb2xlYW4gPSBtb21lbnQuaXNNb21lbnQodGhpcy52YWx1ZSlcbiAgICAgID8gdGhpcy52YWx1ZS5pc1ZhbGlkKClcbiAgICAgIDogdHlwZW9mIHRoaXMudmFsdWUgPT09ICdzdHJpbmcnICYmIG1vbWVudCh0aGlzLnZhbHVlLCBWYWxpZGF0b3JUaW1lLlRJTUVfRk9STUFULCB0cnVlKS5pc1ZhbGlkKCk7XG4gICAgaWYgKGd1ZWx0aWcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICByZXR1cm4ge2ludmFsaWRUaW1lOiB0cnVlfTtcbiAgfVxufVxuIl19