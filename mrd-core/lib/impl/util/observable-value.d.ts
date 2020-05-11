import { Subject } from 'rxjs';
/**
 * Diese Klasse kann verwendet werden um Werte zu speichern und die automatisch
 * überwachbar zu machen. Dadurch können UI Push Strategien leichter implementiert werden.
 */
export declare class ObservableValue<TValueType> {
    private readonly equals?;
    private value$;
    readonly changed: Subject<TValueType>;
    constructor(initialValue?: TValueType, equals?: (current: TValueType, next: TValueType) => boolean);
    value: TValueType;
    private defaultComparator;
}
