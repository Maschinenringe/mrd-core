import { ItemStore } from "./item-store";
/**
 * Store, dessen Eintraege nach `itemLifetimeInSeconds` als veraltet gelten (fuer gecachte REST-Services). Die
 * Zeitstempel liegen im Store, nicht in den Eintraegen - sonst wuerden sie beim Speichern ans Backend mitgeschickt.
 */
export declare class TimestampItemStore<TModel> extends ItemStore<TModel> {
    private itemLifetimeInSeconds;
    /** @deprecated Zeitstempel stehen nicht mehr in den Eintraegen; nur noch aus Kompatibilitaet vorhanden */
    static readonly ITEM_TIMESTAMP_KEY = "__timestamp__";
    private wasFilled;
    private readonly zeitstempel;
    constructor(identifier: any, itemLifetimeInSeconds: number, transform?: (items: TModel[]) => TModel[]);
    updateItems(items: TModel[]): void;
    clear(): void;
    update(item: TModel): void;
    push(item: TModel): void;
    remove(item: TModel): void;
    removeByIdentifier(identifier: any): void;
    isItemValid(identifier: any): boolean;
    isStoreValid(): boolean;
    private trackItem;
}
