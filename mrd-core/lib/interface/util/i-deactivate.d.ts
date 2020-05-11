import { Observable } from 'rxjs';
/** Dieses Interface muss von jeder Komponente implementiert werden, falls beim Routenwechsel geprüft werden soll,
 *  ob der Anwender speichern muss.
 */
export interface IDeactivate {
    canDeactivate(): Observable<boolean>;
}
