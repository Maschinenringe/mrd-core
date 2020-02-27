import { Subject } from "rxjs";
export declare class ReadonlyRestServiceObserver<T> {
    readonly onItemFetched: Subject<T>;
    readonly onItemsFetched: Subject<T[]>;
    private isFetchingItem$;
    private isFetchingItems$;
    constructor();
    isActivate(): boolean;
    isFetchingItems: boolean;
    isFetchingItem: boolean;
}
