import { IReadonlyRestService } from "./i-readonly-restservice";
import { ItemStore } from "../../impl/util/item-store";
/** Basis Interface um einen Restservice mit Lesezugriff zu implementieren. */
export interface IReadonlyStoreRestService<T> extends IReadonlyRestService<T> {
    store: ItemStore<T>;
}
