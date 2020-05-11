import { ObservableValue } from "../../impl/util/observable-value";
import { Subject } from 'rxjs';
export interface IEntitySelector<TModelType> {
    data: ObservableValue<TModelType>;
    nextRequested: Subject<TModelType>;
    isVisible: ObservableValue<boolean>;
    resolve(dataSet: TModelType): void;
}
