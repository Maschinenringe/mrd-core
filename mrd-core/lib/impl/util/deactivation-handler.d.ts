import { IDeactivate } from "../../interface/util/i-deactivate";
import { Observable } from 'rxjs';
export declare class DeactivationHandler implements IDeactivate {
    private deactivators$;
    register(name: string, component: IDeactivate): void;
    remove(name: string): void;
    canDeactivate(): Observable<boolean>;
    private _deactivateComponent;
}
