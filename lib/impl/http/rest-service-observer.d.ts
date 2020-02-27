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
    isCreatingItem: boolean;
    isUpdatingItem: boolean;
    isDestoyingItem: boolean;
    isPartiallyUpdatingItem: boolean;
    isSavingItem: boolean;
}
