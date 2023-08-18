import { ReadonlyRestServiceObserver } from './readonly-rest-service-observer';
import { Subject } from "rxjs";
export declare class RestServiceObserver<T> extends ReadonlyRestServiceObserver<T> {
    readonly onItemCreated: Subject<T>;
    readonly onItemUpdated: Subject<T>;
    readonly onItemDestroyed: Subject<T>;
    readonly onItemPartialUpdated: Subject<T>;
    readonly onItemSaved: Subject<T>;
    private isCreatingItem$;
    private isUpdatingItem$;
    private isDestoyingItem$;
    private isPartiallyUpdatingItem$;
    private isSavingItem$;
    constructor();
    isActivate(): boolean;
    set isCreatingItem(isCreating: boolean);
    get isCreatingItem(): boolean;
    set isUpdatingItem(isUpdating: boolean);
    get isUpdatingItem(): boolean;
    set isDestoyingItem(isDestroying: boolean);
    get isDestoyingItem(): boolean;
    set isPartiallyUpdatingItem(isUpdating: boolean);
    get isPartiallyUpdatingItem(): boolean;
    set isSavingItem(isSaving: boolean);
    get isSavingItem(): boolean;
}
