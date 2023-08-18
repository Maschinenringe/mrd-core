import { Subject } from "rxjs";
export declare class ReadonlyRestServiceObserver<T> {
    readonly onItemFetched: Subject<T>;
    readonly onItemsFetched: Subject<T[]>;
    private isFetchingItem$;
    private isFetchingItems$;
    constructor();
    isActivate(): boolean;
    set isFetchingItems(fetching: boolean);
    get isFetchingItems(): boolean;
    set isFetchingItem(fetching: boolean);
    get isFetchingItem(): boolean;
}
