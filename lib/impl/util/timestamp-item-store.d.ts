import { ItemStore } from "./item-store";
export declare class TimestampItemStore<TModel> extends ItemStore<TModel> {
    private itemLifetimeInSeconds;
    static readonly ITEM_TIMESTAMP_KEY = "__timestamp__";
    private wasFilled;
    constructor(identifier: any, itemLifetimeInSeconds: number, transform?: (items: TModel[]) => TModel[]);
    updateItems(items: TModel[]): void;
    clear(): void;
    update(item: TModel): void;
    push(item: TModel): void;
    isItemValid(identifier: any): boolean;
    isStoreValid(): boolean;
    private trackItem;
}
