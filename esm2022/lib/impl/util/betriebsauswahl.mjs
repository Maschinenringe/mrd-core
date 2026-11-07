import _ from 'underscore';
import { Util } from './util';
/**
 * Betriebe, fuer die ein Service gerade geladen hat. Gelesen wird ueber alle (z. B. `/multi-betriebe/1,2,3/...`),
 * geschrieben immer nur fuer einen Betrieb.
 */
export class Betriebsauswahl {
    ids = [];
    get idsBetriebe() {
        return this.ids;
    }
    /** Liefert `true`, wenn sich die Betriebe geaendert haben und der Store deshalb geleert werden muss. */
    setzen(idsBetriebe) {
        const neueIds = _.uniq(idsBetriebe.filter((id) => Util.isDefined(id))).sort((a, b) => a - b);
        if (_.isEqual(neueIds, this.ids)) {
            return false;
        }
        this.ids = neueIds;
        return true;
    }
    enthaelt(idBetrieb) {
        return Util.isDefined(idBetrieb) && this.ids.includes(idBetrieb);
    }
    /**
     * Betrieb fuer Schreibzugriffe: der des Eintrags; betriebsuebergreifende Eintraege (ohne Betrieb, z. B.
     * Standardsorten oder -duenger) gehen an den Betrieb, wenn genau einer gewaehlt ist.
     */
    betriebZumSchreiben(idBetriebDesEintrags) {
        if (Util.isDefined(idBetriebDesEintrags)) {
            return idBetriebDesEintrags;
        }
        if (this.ids.length === 1) {
            return this.ids[0];
        }
        throw new Error(`Schreibzugriff ohne eindeutigen Betrieb (gewaehlt: ${this.ids.join(',')})`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV0cmllYnNhdXN3YWhsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbXJkLWNvcmUvc3JjL2xpYi9pbXBsL3V0aWwvYmV0cmllYnNhdXN3YWhsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQztBQUMzQixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTlCOzs7R0FHRztBQUNILE1BQU0sT0FBTyxlQUFlO0lBRWxCLEdBQUcsR0FBYSxFQUFFLENBQUM7SUFFM0IsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQsd0dBQXdHO0lBQ2pHLE1BQU0sQ0FBQyxXQUEwQztRQUN0RCxNQUFNLE9BQU8sR0FBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckksSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLFFBQVEsQ0FBQyxTQUFvQztRQUNsRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG1CQUFtQixDQUFDLG9CQUFvQztRQUM3RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUN4QyxPQUFPLG9CQUFvQixDQUFDO1NBQzdCO1FBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogQmV0cmllYmUsIGZ1ZXIgZGllIGVpbiBTZXJ2aWNlIGdlcmFkZSBnZWxhZGVuIGhhdC4gR2VsZXNlbiB3aXJkIHVlYmVyIGFsbGUgKHouIEIuIGAvbXVsdGktYmV0cmllYmUvMSwyLDMvLi4uYCksXG4gKiBnZXNjaHJpZWJlbiBpbW1lciBudXIgZnVlciBlaW5lbiBCZXRyaWViLlxuICovXG5leHBvcnQgY2xhc3MgQmV0cmllYnNhdXN3YWhsIHtcblxuICBwcml2YXRlIGlkczogbnVtYmVyW10gPSBbXTtcblxuICBwdWJsaWMgZ2V0IGlkc0JldHJpZWJlKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5pZHM7XG4gIH1cblxuICAvKiogTGllZmVydCBgdHJ1ZWAsIHdlbm4gc2ljaCBkaWUgQmV0cmllYmUgZ2VhZW5kZXJ0IGhhYmVuIHVuZCBkZXIgU3RvcmUgZGVzaGFsYiBnZWxlZXJ0IHdlcmRlbiBtdXNzLiAqL1xuICBwdWJsaWMgc2V0emVuKGlkc0JldHJpZWJlOiAobnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZClbXSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5ldWVJZHM6IG51bWJlcltdID0gXy51bmlxKGlkc0JldHJpZWJlLmZpbHRlcigoaWQpOiBpZCBpcyBudW1iZXIgPT4gVXRpbC5pc0RlZmluZWQoaWQpKSkuc29ydCgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgLSBiKTtcbiAgICBpZiAoXy5pc0VxdWFsKG5ldWVJZHMsIHRoaXMuaWRzKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmlkcyA9IG5ldWVJZHM7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgZW50aGFlbHQoaWRCZXRyaWViOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFV0aWwuaXNEZWZpbmVkKGlkQmV0cmllYikgJiYgdGhpcy5pZHMuaW5jbHVkZXMoaWRCZXRyaWViKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBCZXRyaWViIGZ1ZXIgU2NocmVpYnp1Z3JpZmZlOiBkZXIgZGVzIEVpbnRyYWdzOyBiZXRyaWVic3VlYmVyZ3JlaWZlbmRlIEVpbnRyYWVnZSAob2huZSBCZXRyaWViLCB6LiBCLlxuICAgKiBTdGFuZGFyZHNvcnRlbiBvZGVyIC1kdWVuZ2VyKSBnZWhlbiBhbiBkZW4gQmV0cmllYiwgd2VubiBnZW5hdSBlaW5lciBnZXdhZWhsdCBpc3QuXG4gICAqL1xuICBwdWJsaWMgYmV0cmllYlp1bVNjaHJlaWJlbihpZEJldHJpZWJEZXNFaW50cmFncz86IG51bWJlciB8IG51bGwpOiBudW1iZXIge1xuICAgIGlmIChVdGlsLmlzRGVmaW5lZChpZEJldHJpZWJEZXNFaW50cmFncykpIHtcbiAgICAgIHJldHVybiBpZEJldHJpZWJEZXNFaW50cmFncztcbiAgICB9XG4gICAgaWYgKHRoaXMuaWRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuaWRzWzBdO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNjaHJlaWJ6dWdyaWZmIG9obmUgZWluZGV1dGlnZW4gQmV0cmllYiAoZ2V3YWVobHQ6ICR7dGhpcy5pZHMuam9pbignLCcpfSlgKTtcbiAgfVxufVxuIl19