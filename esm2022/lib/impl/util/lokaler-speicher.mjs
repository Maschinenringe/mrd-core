import { REGEX } from '../../enum/regex';
import { Util } from './util';
/**
 * Typisierter Zugriff auf den localStorage fuer Einstellungen wie Sortierung, Filter oder gewaehltes Erntejahr.
 * Lesen liefert null, wenn nichts oder etwas Unpassendes gespeichert ist; leere Werte entfernen den Eintrag.
 * Ist der Speicher gesperrt (privater Modus, blockierte Website-Daten), wird nichts gespeichert und null gelesen.
 *
 * `LokalerSpeicher.ganzzahl('selectedErntejahr')`, `LokalerSpeicher.schreiben('selectedErntejahr', 2026)`
 */
export class LokalerSpeicher {
    /** Text; ein leerer Text gilt als nicht gespeichert */
    static text(schluessel) {
        const wert = LokalerSpeicher.lesen(schluessel);
        return Util.isDefined(wert) && wert !== '' ? wert : null;
    }
    /** Nicht-negative Ganzzahl, z. B. eine Id */
    static ganzzahl(schluessel) {
        const wert = LokalerSpeicher.lesen(schluessel);
        return Util.isDefined(wert) && REGEX.INTEGER.test(wert) ? Number.parseInt(wert, 10) : null;
    }
    /** true/false, gespeichert als "true" bzw. "false" */
    static wahrheitswert(schluessel) {
        const wert = LokalerSpeicher.lesen(schluessel);
        return wert === 'true' ? true : wert === 'false' ? false : null;
    }
    /** Einer der erlaubten Werte, z. B. eine Sortierrichtung; alles andere gilt als nicht gespeichert */
    static auswahl(schluessel, erlaubt) {
        const wert = LokalerSpeicher.lesen(schluessel);
        return Util.isDefined(wert) && erlaubt.includes(wert) ? wert : null;
    }
    /** Als JSON gespeichertes Objekt; nicht lesbares JSON gilt als nicht gespeichert */
    static json(schluessel) {
        const wert = LokalerSpeicher.text(schluessel);
        if (!Util.isDefined(wert)) {
            return null;
        }
        try {
            return JSON.parse(wert);
        }
        catch {
            return null;
        }
    }
    /** Speichert Texte, Zahlen und Wahrheitswerte als Text, Objekte als JSON; null, undefined und '' entfernen den Eintrag */
    static schreiben(schluessel, wert) {
        if (!Util.isDefined(wert) || wert === '') {
            LokalerSpeicher.entfernen(schluessel);
            return;
        }
        const text = typeof wert === 'object' ? JSON.stringify(wert) : String(wert);
        try {
            localStorage.setItem(schluessel, text);
        }
        catch {
            // Gesperrter oder voller Speicher: die Einstellung gilt dann nur bis zum Neuladen
        }
    }
    static entfernen(schluessel) {
        try {
            localStorage.removeItem(schluessel);
        }
        catch {
            // Gesperrter Speicher: es gibt nichts zu entfernen
        }
    }
    static lesen(schluessel) {
        try {
            return localStorage.getItem(schluessel);
        }
        catch {
            return null;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9rYWxlci1zcGVpY2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21yZC1jb3JlL3NyYy9saWIvaW1wbC91dGlsL2xva2FsZXItc3BlaWNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFOUI7Ozs7OztHQU1HO0FBQ0gsTUFBTSxPQUFPLGVBQWU7SUFFMUIsdURBQXVEO0lBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBa0I7UUFDbkMsTUFBTSxJQUFJLEdBQWtCLGVBQWUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNELENBQUM7SUFFRCw2Q0FBNkM7SUFDdEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFrQjtRQUN2QyxNQUFNLElBQUksR0FBa0IsZUFBZSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDN0YsQ0FBQztJQUVELHNEQUFzRDtJQUMvQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQWtCO1FBQzVDLE1BQU0sSUFBSSxHQUFrQixlQUFlLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlELE9BQU8sSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsRSxDQUFDO0lBRUQscUdBQXFHO0lBQzlGLE1BQU0sQ0FBQyxPQUFPLENBQW1CLFVBQWtCLEVBQUUsT0FBcUI7UUFDL0UsTUFBTSxJQUFJLEdBQWtCLGVBQWUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFLLE9BQTZCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsRyxDQUFDO0lBRUQsb0ZBQW9GO0lBQzdFLE1BQU0sQ0FBQyxJQUFJLENBQUksVUFBa0I7UUFDdEMsTUFBTSxJQUFJLEdBQWtCLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUk7WUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFNLENBQUM7U0FDOUI7UUFBQyxNQUFNO1lBQ04sT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCwwSEFBMEg7SUFDbkgsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFrQixFQUFFLElBQTJEO1FBQ3JHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUU7WUFDeEMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0QyxPQUFPO1NBQ1I7UUFDRCxNQUFNLElBQUksR0FBVyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRixJQUFJO1lBQ0YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDeEM7UUFBQyxNQUFNO1lBQ04sa0ZBQWtGO1NBQ25GO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBa0I7UUFDeEMsSUFBSTtZQUNGLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDckM7UUFBQyxNQUFNO1lBQ04sbURBQW1EO1NBQ3BEO0lBQ0gsQ0FBQztJQUVPLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBa0I7UUFDckMsSUFBSTtZQUNGLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN6QztRQUFDLE1BQU07WUFDTixPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUkVHRVggfSBmcm9tICcuLi8uLi9lbnVtL3JlZ2V4JztcbmltcG9ydCB7IFV0aWwgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFR5cGlzaWVydGVyIFp1Z3JpZmYgYXVmIGRlbiBsb2NhbFN0b3JhZ2UgZnVlciBFaW5zdGVsbHVuZ2VuIHdpZSBTb3J0aWVydW5nLCBGaWx0ZXIgb2RlciBnZXdhZWhsdGVzIEVybnRlamFoci5cbiAqIExlc2VuIGxpZWZlcnQgbnVsbCwgd2VubiBuaWNodHMgb2RlciBldHdhcyBVbnBhc3NlbmRlcyBnZXNwZWljaGVydCBpc3Q7IGxlZXJlIFdlcnRlIGVudGZlcm5lbiBkZW4gRWludHJhZy5cbiAqIElzdCBkZXIgU3BlaWNoZXIgZ2VzcGVycnQgKHByaXZhdGVyIE1vZHVzLCBibG9ja2llcnRlIFdlYnNpdGUtRGF0ZW4pLCB3aXJkIG5pY2h0cyBnZXNwZWljaGVydCB1bmQgbnVsbCBnZWxlc2VuLlxuICpcbiAqIGBMb2thbGVyU3BlaWNoZXIuZ2FuenphaGwoJ3NlbGVjdGVkRXJudGVqYWhyJylgLCBgTG9rYWxlclNwZWljaGVyLnNjaHJlaWJlbignc2VsZWN0ZWRFcm50ZWphaHInLCAyMDI2KWBcbiAqL1xuZXhwb3J0IGNsYXNzIExva2FsZXJTcGVpY2hlciB7XG5cbiAgLyoqIFRleHQ7IGVpbiBsZWVyZXIgVGV4dCBnaWx0IGFscyBuaWNodCBnZXNwZWljaGVydCAqL1xuICBwdWJsaWMgc3RhdGljIHRleHQoc2NobHVlc3NlbDogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgY29uc3Qgd2VydDogc3RyaW5nIHwgbnVsbCA9IExva2FsZXJTcGVpY2hlci5sZXNlbihzY2hsdWVzc2VsKTtcbiAgICByZXR1cm4gVXRpbC5pc0RlZmluZWQod2VydCkgJiYgd2VydCAhPT0gJycgPyB3ZXJ0IDogbnVsbDtcbiAgfVxuXG4gIC8qKiBOaWNodC1uZWdhdGl2ZSBHYW56emFobCwgei4gQi4gZWluZSBJZCAqL1xuICBwdWJsaWMgc3RhdGljIGdhbnp6YWhsKHNjaGx1ZXNzZWw6IHN0cmluZyk6IG51bWJlciB8IG51bGwge1xuICAgIGNvbnN0IHdlcnQ6IHN0cmluZyB8IG51bGwgPSBMb2thbGVyU3BlaWNoZXIubGVzZW4oc2NobHVlc3NlbCk7XG4gICAgcmV0dXJuIFV0aWwuaXNEZWZpbmVkKHdlcnQpICYmIFJFR0VYLklOVEVHRVIudGVzdCh3ZXJ0KSA/IE51bWJlci5wYXJzZUludCh3ZXJ0LCAxMCkgOiBudWxsO1xuICB9XG5cbiAgLyoqIHRydWUvZmFsc2UsIGdlc3BlaWNoZXJ0IGFscyBcInRydWVcIiBiencuIFwiZmFsc2VcIiAqL1xuICBwdWJsaWMgc3RhdGljIHdhaHJoZWl0c3dlcnQoc2NobHVlc3NlbDogc3RyaW5nKTogYm9vbGVhbiB8IG51bGwge1xuICAgIGNvbnN0IHdlcnQ6IHN0cmluZyB8IG51bGwgPSBMb2thbGVyU3BlaWNoZXIubGVzZW4oc2NobHVlc3NlbCk7XG4gICAgcmV0dXJuIHdlcnQgPT09ICd0cnVlJyA/IHRydWUgOiB3ZXJ0ID09PSAnZmFsc2UnID8gZmFsc2UgOiBudWxsO1xuICB9XG5cbiAgLyoqIEVpbmVyIGRlciBlcmxhdWJ0ZW4gV2VydGUsIHouIEIuIGVpbmUgU29ydGllcnJpY2h0dW5nOyBhbGxlcyBhbmRlcmUgZ2lsdCBhbHMgbmljaHQgZ2VzcGVpY2hlcnQgKi9cbiAgcHVibGljIHN0YXRpYyBhdXN3YWhsPFQgZXh0ZW5kcyBzdHJpbmc+KHNjaGx1ZXNzZWw6IHN0cmluZywgZXJsYXVidDogcmVhZG9ubHkgVFtdKTogVCB8IG51bGwge1xuICAgIGNvbnN0IHdlcnQ6IHN0cmluZyB8IG51bGwgPSBMb2thbGVyU3BlaWNoZXIubGVzZW4oc2NobHVlc3NlbCk7XG4gICAgcmV0dXJuIFV0aWwuaXNEZWZpbmVkKHdlcnQpICYmIChlcmxhdWJ0IGFzIHJlYWRvbmx5IHN0cmluZ1tdKS5pbmNsdWRlcyh3ZXJ0KSA/IHdlcnQgYXMgVCA6IG51bGw7XG4gIH1cblxuICAvKiogQWxzIEpTT04gZ2VzcGVpY2hlcnRlcyBPYmpla3Q7IG5pY2h0IGxlc2JhcmVzIEpTT04gZ2lsdCBhbHMgbmljaHQgZ2VzcGVpY2hlcnQgKi9cbiAgcHVibGljIHN0YXRpYyBqc29uPFQ+KHNjaGx1ZXNzZWw6IHN0cmluZyk6IFQgfCBudWxsIHtcbiAgICBjb25zdCB3ZXJ0OiBzdHJpbmcgfCBudWxsID0gTG9rYWxlclNwZWljaGVyLnRleHQoc2NobHVlc3NlbCk7XG4gICAgaWYgKCFVdGlsLmlzRGVmaW5lZCh3ZXJ0KSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh3ZXJ0KSBhcyBUO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNwZWljaGVydCBUZXh0ZSwgWmFobGVuIHVuZCBXYWhyaGVpdHN3ZXJ0ZSBhbHMgVGV4dCwgT2JqZWt0ZSBhbHMgSlNPTjsgbnVsbCwgdW5kZWZpbmVkIHVuZCAnJyBlbnRmZXJuZW4gZGVuIEVpbnRyYWcgKi9cbiAgcHVibGljIHN0YXRpYyBzY2hyZWliZW4oc2NobHVlc3NlbDogc3RyaW5nLCB3ZXJ0OiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgb2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIGlmICghVXRpbC5pc0RlZmluZWQod2VydCkgfHwgd2VydCA9PT0gJycpIHtcbiAgICAgIExva2FsZXJTcGVpY2hlci5lbnRmZXJuZW4oc2NobHVlc3NlbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRleHQ6IHN0cmluZyA9IHR5cGVvZiB3ZXJ0ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHdlcnQpIDogU3RyaW5nKHdlcnQpO1xuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzY2hsdWVzc2VsLCB0ZXh0KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEdlc3BlcnJ0ZXIgb2RlciB2b2xsZXIgU3BlaWNoZXI6IGRpZSBFaW5zdGVsbHVuZyBnaWx0IGRhbm4gbnVyIGJpcyB6dW0gTmV1bGFkZW5cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGVudGZlcm5lbihzY2hsdWVzc2VsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc2NobHVlc3NlbCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBHZXNwZXJydGVyIFNwZWljaGVyOiBlcyBnaWJ0IG5pY2h0cyB6dSBlbnRmZXJuZW5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBsZXNlbihzY2hsdWVzc2VsOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNjaGx1ZXNzZWwpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=