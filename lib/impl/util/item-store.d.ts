import { Subject } from 'rxjs';
export declare class ItemStore<T> {
    readonly identifier: any;
    readonly transform?: (items: T[]) => T[];
    readonly onChanged: Subject<T[]>;
    protected items$: object;
    protected transformedItems$: T[];
    constructor(identifier: any, transform?: (items: T[]) => T[]);
    updateItems(items: T[]): void;
    clear(): void;
    remove(item: T): void;
    removeByIdentifier(identifier: any): void;
    update(item: T): void;
    push(item: T): void;
    protected internalTransform$(): void;
    readonly items: T[];
}
