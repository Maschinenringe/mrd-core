import { Subject } from 'rxjs';
export declare class ItemStore<T> {
    readonly identifier: string;
    readonly transform?: (items: T[]) => T[];
    readonly onChanged: Subject<T[]>;
    protected items$: Record<string, T>;
    protected transformedItems$: T[];
    constructor(identifier: string, transform?: (items: T[]) => T[]);
    updateItems(items: T[]): void;
    clear(): void;
    remove(item: T): void;
    removeByIdentifier(identifier: any): void;
    update(item: T): void;
    push(item: T): void;
    protected internalTransform$(): void;
    /** `identifier` ist bewusst `string` statt `keyof T`, sonst passt `ItemStore<TModel>` nicht zu `ItemStore<Basismodel>`. */
    protected identifierOf(item: T): any;
    private keyOf;
    get items(): T[];
}
