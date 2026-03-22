import { Observable, Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as i0 from '@angular/core';
import { OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ValidatorFn, FormGroup, FormControl, FormArray } from '@angular/forms';
import moment$1 from 'moment';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Data, Resolve, Router, ActivatedRoute } from '@angular/router';

/** Basis Interface um einen Restservice mit Lesezugriff zu implementieren. */
interface IReadonlyRestService<T> {
    /** Der Key Parameter um zu testen ob ein Object neu angelegt, oder geladen wurde. Z.B.: ID */
    identifier: string;
    /** Holt alle Entitäten ab */
    all(searchParams?: object, httpOptions?: object): Observable<T[]>;
    /** Holt eine Entität anhand einer ID ab */
    show(id: any, getParams?: object, httpOptions?: object): Observable<T>;
}

declare class ItemStore<T> {
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
    get items(): T[];
}

/** Basis Interface um einen Restservice mit Lesezugriff zu implementieren. */
interface IReadonlyStoreRestService<T> extends IReadonlyRestService<T> {
    store: ItemStore<T>;
}

interface ISubscriptionHandler {
    onSuccess?: (...args: any[]) => any;
    onError?: (...args: any[]) => any;
    onFinished?: (...args: any[]) => any;
}

/** Diese Klasse kümmert sich um die Speicherverwaltung von Subscriptions.
 Diese erzeugen Memory-Leaks, wenn sie nicht sauber gelöscht werden. */
declare abstract class SubscriptionManager {
    private static subscriptions;
    /** Subscription mit einem Namen. Diese Funktion ist nützlich,
     falls eine Subscription öfters aufgerufen wird und die vorherige, falls
     noch nicht abgeschlossen, beendet werden soll (HTTP Aufrufe). */
    static subscribeAs<T>(name: string, observable: Observable<T>, handler: ISubscriptionHandler): Subscription;
    /** Funktion für einmalige Subscriptions (z.B.: Initialisierungsaufrufe) */
    static subscribe<T>(observable: Observable<T>, handler: ISubscriptionHandler): Subscription;
    private static pushSubscription;
    private static deleteSubscription;
}

declare class Util {
    static isDefined(obj: any): boolean;
    /**
     * Prüft, ob ein Objekt definiert ist und nicht leer oder 0 ist.
     * Als nicht definiert gelten: null, undefined
     * Objekte, die als leer gelten, sind: {}
     * Strings, die als leer gelten, sind: ''
     * Arrays, die als leer gelten, sind: []
     * Zahlen, die als Zero gelten, sind: 0
     *
     * @param obj Das zu prüfende Objekt
     * @param returnTheValueIfDefined Gibt an, ob der Wert zurückgegeben werden soll, wenn das Objekt definiert ist
     * @param undefinedReturnValue Der Wert, der zurückgegeben wird, wenn das Objekt nicht definiert ist und returnTheValueIfDefined auf true gesetzt ist
     * @returns Wenn returnTheValueIfDefined auf true gesetzt ist, wird der Wert des Objekts zurückgegeben, wenn es definiert ist oder undefinedRetrunValue (default: false).
     * Ansonsten wird true zurückgegeben, wenn das Objekt definiert ist, ansonsten false.
     */
    static isDefinedNotEmptyOrZero(obj: any, returnTheValueIfDefined?: boolean, undefinedReturnValue?: any): boolean | any;
    static armUrlWithSearchParams(url: string, queryParams: object): string;
    static createEntityUrl(url: string, id: any): string;
    static getBrowser(): string;
    static getCurrentUnixTimestamp(): number;
    static guid(): string;
    private static transformUmlaute;
    static sortAlpabetically<TListType>(list: TListType[], attribute: string): TListType[];
}

/** Basis Interface um einen vollwertigen RestService zu implementieren */
interface IWriteableRestService<T> {
    /** Erzeugt ein neues Object */
    create(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    /** Updated ein Object */
    update(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    /** Führt ein Teilupdate durch */
    partialUpdate(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    /** Entscheided anhand des Feldes "identifier" welche Operation getätigt werden muss */
    save(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    /** Löscht eine Entität vom Server */
    destroy(id: any, getParams?: object, httpOptions?: object): Observable<void>;
}

declare class ReadonlyRestServiceObserver<T> {
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

declare class RestServiceObserver<T> extends ReadonlyRestServiceObserver<T> {
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
    set isCreatingItem(isCreating: boolean);
    get isCreatingItem(): boolean;
    set isUpdatingItem(isUpdating: boolean);
    get isUpdatingItem(): boolean;
    set isDestoyingItem(isDestroying: boolean);
    get isDestoyingItem(): boolean;
    set isPartiallyUpdatingItem(isUpdating: boolean);
    get isPartiallyUpdatingItem(): boolean;
    set isSavingItem(isSaving: boolean);
    get isSavingItem(): boolean;
}

declare class RestHandler<T> implements IWriteableRestService<T> {
    readonly http: HttpClient;
    readonly url: string;
    readonly observer: RestServiceObserver<T>;
    readonly identifier: string;
    constructor(http: HttpClient, url: string, observer: RestServiceObserver<T>, identifier: string);
    create(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    destroy(id: any, getParams?: object, httpOptions?: object): Observable<void>;
    partialUpdate(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    save(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    set(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    update(model: T, getParams?: object, httpOptions?: object): Observable<T>;
}

/** Standart Implementierung zur Nutzung von Subscriptions
 *  Generell hat es wenig Sinn diese Klasse zu erzwingen,
 *  allerdings ergibt sich eine bessere Lesbarkeit des Codes daraus.
 */

declare class SubscriptionHandler implements ISubscriptionHandler {
    onSuccess?: (...args: any[]) => any;
    onError?: (...args: any[]) => any;
    onFinished?: (...args: any[]) => any;
    constructor(onSuccess?: (...args: any[]) => any, onError?: (...args: any[]) => any, onFinished?: (...args: any[]) => any);
}

declare abstract class BaseObject implements OnDestroy {
    /** Wird benutzt um Observables bei der Zerstörung einer Komponente auszulösen.
     * Wird im ngOnDestroy ausgelöst.
     */
    protected $unsubscribe: Subject<void>;
    /** Funktion zur dauerhaften Überwachung von Subscriptions. Speicher wird bei Zerstörung der Komponente freigegeben. */
    protected watch<T>(observable: Observable<T>, handler: ISubscriptionHandler): Subscription;
    /** Proxy für SubscriptionManager.subscribe */
    protected subscribe<T>(observable: Observable<T>, handler: ISubscriptionHandler): Subscription;
    /** Proxy für SubscriptionManager.subscribeAs */
    protected subscribeAs<T>(name: string, observable: Observable<T>, handler: ISubscriptionHandler): Subscription;
    /** Alle Observables die mit watch überwacht werden, werden hier ausgelöst. Angular kümmert sich im den Aufruf.
     *  Falls das Kind auch das Interface 'OnDestroy' implementiert, nicht vergessen super.ngOnDestroy() auszurufen, oder der Speicher
     *  wird nicht freigegeben.
     */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseObject, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseObject, never, never, {}, {}, never, never, true, never>;
}

interface IValidator {
    hasError: boolean;
    error: string;
    validator(): ValidatorFn;
    validate(): any;
}

interface IAccessableFormControl<TControlType, TType> {
    value: TType;
    rawValue: any;
    dirty: boolean;
    touched: boolean;
    valid: boolean;
    control: FormGroup | FormControl | FormArray;
    markAsUsed(opts?: IAccessableFormOptions): TControlType;
    markAsUnused(opts?: IAccessableFormOptions): TControlType;
    markAsDirty(opts?: IAccessableFormOptions): TControlType;
    markAsTouched(opts?: IAccessableFormOptions): TControlType;
    reset(model: TType): TControlType;
    disable(opts?: IAccessableFormOptions): TControlType;
    enable(opts?: IAccessableFormOptions): TControlType;
    valueChanges: Observable<any>;
}
interface IAccessableFormOptions {
    emitEvent?: boolean;
    onlySelf?: boolean;
}

declare class AccessableFormControl<TType = any> implements IAccessableFormControl<AccessableFormControl<TType>, TType> {
    control: FormControl;
    showAs: (value: any) => any;
    convertTo: (value: any) => any;
    private required$;
    private validators$;
    private blocked$;
    private previousValue$;
    private rawValue$;
    initialize(formState?: any, validators?: IValidator[]): void;
    validateWith(validators?: IValidator[], opts?: IAccessableFormOptions): AccessableFormControl;
    setValue(value: any, skipSetPreviousValue?: boolean, opts?: IAccessableFormOptions): AccessableFormControl;
    reset(value: TType, skipSetPreviousValue?: boolean, opts?: IAccessableFormOptions): AccessableFormControl;
    markAsUsed(opts?: IAccessableFormOptions): AccessableFormControl;
    markAsUnused(opts?: IAccessableFormOptions): AccessableFormControl;
    markAsDirty(opts?: IAccessableFormOptions): AccessableFormControl;
    markAsTouched(opts?: IAccessableFormOptions): AccessableFormControl;
    disable(opts?: IAccessableFormOptions): AccessableFormControl;
    enable(opts?: IAccessableFormOptions): AccessableFormControl;
    blockControls(): void;
    unblockControls(): void;
    get disabled(): boolean;
    get valid(): boolean;
    get validators(): IValidator[];
    get error(): IValidator;
    get value(): any;
    set value(value: any);
    get valueChanges(): Observable<any>;
    get rawValue(): any;
    get rawValueAsType(): TType;
    get previousValue(): any;
    set previousValue(value: any);
    get required(): boolean;
    get touched(): boolean;
    get dirty(): boolean;
    get blocked(): boolean;
}

declare abstract class AccessableFormGroup<TFields, TModel extends object> implements IAccessableFormControl<AccessableFormGroup<TFields, TModel>, TModel> {
    control: FormGroup;
    private fields$;
    private changed$;
    private fieldChanged$;
    initialize(fields: TFields): void;
    markAsUsed(opts?: IAccessableFormOptions): AccessableFormGroup<TFields, TModel>;
    markAsUnused(opts?: IAccessableFormOptions): AccessableFormGroup<TFields, TModel>;
    markAsDirty(opts?: IAccessableFormOptions): AccessableFormGroup<TFields, TModel>;
    markAsTouched(opts?: IAccessableFormOptions): AccessableFormGroup<TFields, TModel>;
    reset(model: TModel, propagateChanges?: boolean): AccessableFormGroup<TFields, TModel>;
    get fields(): TFields;
    get value(): TModel;
    get rawValue(): any;
    get dirty(): boolean;
    get valid(): boolean;
    get touched(): boolean;
    disable(opts?: IAccessableFormOptions): AccessableFormGroup<TFields, TModel>;
    enable(opts?: IAccessableFormOptions): AccessableFormGroup<TFields, TModel>;
    get disabled(): boolean;
    get enabled(): boolean;
    get valueChanges(): Observable<void>;
    get fieldChanges(): Observable<IAccessableFieldChange>;
}
interface IAccessableFieldChange {
    name: string;
    control: IAccessableFormControl<any, any>;
}

declare const Type: FunctionConstructor;
interface Type<T> extends Function {
    new (...args: any[]): T;
}
declare abstract class AccessableFormArray<TModel> implements IAccessableFormControl<AccessableFormArray<TModel>, TModel[]> {
    private validators$;
    control: FormArray;
    type: Type<IAccessableFormControl<any, any>>;
    private required$;
    private entries$;
    private previousEntries$;
    private disabled$;
    private enabled$;
    initialize(type: Type<IAccessableFormControl<any, any>>): void;
    push(entry: TModel, skipSetPreviousEntries?: boolean, opts?: IAccessableFormOptions): IAccessableFormControl<any, TModel>;
    removeAt(index: number, skipSetPreviousEntries?: boolean, opts?: IAccessableFormOptions): void;
    validateWith(validators: IValidator[], opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    clearValidators(): void;
    generateFormEntry(value: any): IAccessableFormControl<any, TModel>;
    get errors(): string[];
    get error(): IValidator;
    get validators(): IValidator[];
    get required(): boolean;
    get dirty(): boolean;
    get touched(): boolean;
    get valid(): boolean;
    get value(): TModel[];
    get rawValue(): TModel[];
    get entries(): IAccessableFormControl<any, TModel>[];
    get previousEntries(): IAccessableFormControl<any, TModel>[];
    get valueChanges(): Observable<any>;
    get disabled(): boolean;
    get enabled(): boolean;
    get controlDisabled(): boolean;
    get controlEnabled(): boolean;
    controlDisable(opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    controlEnable(opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    disable(opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    enable(opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    markAsDirty(opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    markAsTouched(opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    markAsUnused(opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    markAsUsed(opts?: IAccessableFormOptions): AccessableFormArray<TModel>;
    reset(models: TModel[], skipSetPreviousEntries?: boolean): AccessableFormArray<TModel>;
}

declare abstract class AbstractReadonlyRestservice<T> extends BaseObject implements IReadonlyRestService<T> {
    identifier: string;
    abstract url: string;
    readonly observer: ReadonlyRestServiceObserver<T>;
    protected abstract http: HttpClient;
    protected constructor(restServiceObserver?: ReadonlyRestServiceObserver<T>);
    all(searchParams?: object, httpOptions?: object): Observable<T[]>;
    show(id: any, getParams?: object, httpOptions?: object): Observable<T>;
}

declare abstract class AbstractRestservice<T> extends AbstractReadonlyRestservice<T> implements IWriteableRestService<T> {
    abstract identifier: string;
    readonly observer: RestServiceObserver<any>;
    protected abstract http: HttpClient;
    protected constructor();
    create(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    destroy(id: any, getParams?: object, httpOptions?: object): Observable<void>;
    partialUpdate(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    save(model: T, getParams?: object, httpOptions?: object): Observable<T>;
    update(model: T, getParams?: object, httpOptions?: object): Observable<T>;
}

declare abstract class ValidatorCustom implements IValidator {
    abstract error: string;
    abstract hasError: boolean;
    private value;
    protected constructor();
    validator(): ValidatorFn;
    validate(): any;
}

declare class ValidatorDate implements IValidator {
    static readonly DATE_FORMAT = "DD.MM.YYYY";
    error: string;
    hasError: boolean;
    private value;
    constructor();
    validator(): ValidatorFn;
    validate(): any;
    private _fail;
}

declare class ValidatorEmail implements IValidator {
    hasError: boolean;
    error: string;
    private value;
    constructor(error?: string);
    validator(): ValidatorFn;
    validate(): any;
}

declare class ValidatorFixedValue implements IValidator {
    comparator: any;
    error: string;
    hasError: boolean;
    private value$;
    constructor(comparator: any, error?: string);
    validate(): any;
    validator(): ValidatorFn;
}

declare class ValidatorFloat implements IValidator {
    digitsBefore?: number;
    digitsAfter?: number;
    hasError: boolean;
    error: string;
    private value;
    constructor(digitsBefore?: number, digitsAfter?: number);
    validator(): ValidatorFn;
    validate(): any;
}

declare class ValidatorIntegerRange implements IValidator {
    private minValue$;
    private maxValue$;
    private showSmallError;
    error: string;
    hasError: boolean;
    private value$;
    constructor(minValue$?: number, maxValue$?: number, showSmallError?: boolean);
    get smallError(): string;
    validate(): any;
    validator(): ValidatorFn;
}

declare class ValidatorInteger implements IValidator {
    private allowNegativeValues$;
    error: string;
    hasError: boolean;
    private value$;
    private regex$;
    constructor(allowNegativeValues$?: boolean);
    validate(): any;
    validator(): ValidatorFn;
}

declare class ValidatorLength implements IValidator {
    maxLength?: number;
    minLength?: number;
    static readonly ERROR_MAXLENGTH = "Dieses Feld darf maximal __MAX_LENGTH__ Zeichen enthalten.";
    static readonly ERROR_MINLENGTH = "Dieses Feld muss minimal __MIN_LENGTH__ Zeichen enthalten.";
    error: string;
    hasError: boolean;
    private value;
    constructor(maxLength?: number, minLength?: number);
    validator(): ValidatorFn;
    validate(): any;
}

declare class ValidatorMinValue implements IValidator {
    private readonly minValue$;
    error: string;
    hasError: boolean;
    private value;
    constructor(minValue$: number);
    validate(): any;
    validator(): ValidatorFn;
}

declare class ValidatorPostalCode implements IValidator {
    hasError: boolean;
    error: string;
    private value;
    constructor(error?: string);
    validator(): ValidatorFn;
    validate(): any;
}

declare class ValidatorRequired implements IValidator {
    hasError: boolean;
    error: string;
    private value;
    constructor(error?: string);
    validator(): ValidatorFn;
    validate(): any;
}

declare enum Bundesland {
    Baden_Wuertemberg = 1,
    Bayern = 2,
    Berlin = 3,
    Brandenburg = 4,
    Bremen = 5,
    Hamburg = 6,
    Hessen = 7,
    Mecklenburg_Vorpommern = 8,
    Niedersachsen = 9,
    Nordrhein_Westfalen = 10,
    Rheinland_Pfalz = 11,
    Saarland = 12,
    Sachsen = 13,
    Sachsen_Anhalt = 14,
    Schleswig_Holstein = 15,
    Thueringen = 16
}

declare class ValidatorBetriebsnummer implements IValidator {
    hasError: boolean;
    _error: any;
    private value;
    static REGEX_BY: RegExp;
    static REGEX_NI: RegExp;
    static REGEX_SH: RegExp;
    private blRegex;
    private blNummer;
    constructor(idBundesland?: Bundesland, error?: string);
    get error(): string;
    validator(): ValidatorFn;
    validate(): any;
}

declare abstract class AccessableControlFactory {
    static simpleControl(formState: any, validators: IValidator[]): AccessableFormControl;
    static numberControl(formState: any, validators: IValidator[]): AccessableFormControl;
    static numberBooleanControl(formState: any, validators: IValidator[]): AccessableFormControl;
    static numberDigitsControl(formState: any, validators: IValidator[], digits?: number): AccessableFormControl;
    /**
       * Erzeuge eine AccessableFormControl für eine Zahl mit {digits} oder {minDigits}/{maxDigits} Nachkommastellen und einem Tausenderpunkt.
       */
    static numberDigitsExtendedControl(formState: any, validators: IValidator[], digits?: number, minDigits?: number, maxDigits?: number): AccessableFormControl;
    static dateControl(formState: any, validators: IValidator[]): AccessableFormControl;
    static momentDateControl(formState: string | moment.Moment | null, validators: IValidator[]): AccessableFormControl;
    static momentTimeControl(formState: string | moment.Moment | null, validators: IValidator[], withSeconds?: boolean, withMilliseconds?: boolean): AccessableFormControl;
    /** Schneides alle Whitespaces am Ende und Anfang weg */
    static trimControl(formState: any, validators: IValidator[]): AccessableFormControl;
}

declare enum HttpStatusCodes {
    OK = 200,
    BAD_REQUEST = 400,
    PRECONDITION_FAILED = 412,
    CONFLICT = 409,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    LOCKED = 423,
    NOT_ACCEPTABLE = 406
}

declare abstract class BasePushStrategyObject extends BaseObject {
    protected abstract cdr: ChangeDetectorRef;
    protected markForCheckIf(subject: Observable<any>): Subscription;
    static ɵfac: i0.ɵɵFactoryDeclaration<BasePushStrategyObject, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BasePushStrategyObject, never, never, {}, {}, never, never, true, never>;
}

/**
 * Diese Klasse kann verwendet werden um Werte zu speichern und die automatisch
 * überwachbar zu machen. Dadurch können UI Push Strategien leichter implementiert werden.
 */
declare class ObservableValue<TValueType> {
    private readonly equals?;
    private value$;
    readonly changed: Subject<TValueType>;
    constructor(initialValue?: TValueType, equals?: (current: TValueType, next: TValueType) => boolean);
    set value(value: TValueType);
    get value(): TValueType;
    private defaultComparator;
}

declare abstract class AbstractStoredReadonlyRestservice<TModel> extends BaseObject implements IReadonlyStoreRestService<TModel> {
    abstract url: string;
    abstract store: ItemStore<TModel>;
    abstract identifier: string;
    protected abstract http: HttpClient;
    readonly observer: ReadonlyRestServiceObserver<TModel>;
    protected constructor(restServiceObserver?: ReadonlyRestServiceObserver<TModel>);
    all(searchParams?: object, httpOptions?: object): Observable<TModel[]>;
    show(id: any, getParams?: object, httpOptions?: object): Observable<TModel>;
}

declare abstract class AbstractStoredRestservice<TModel> extends AbstractStoredReadonlyRestservice<TModel> implements IWriteableRestService<TModel> {
    readonly observer: RestServiceObserver<TModel>;
    protected constructor();
    create(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    destroy(id: any, getParams?: object, httpOptions?: object): Observable<void>;
    partialUpdate(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    save(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    set(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    update(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    protected modifyCreateCall(observable: Observable<TModel>): Observable<TModel>;
    protected modifyUpdateCall(observable: Observable<TModel>): Observable<TModel>;
}

/** Dieses Interface muss von jeder Komponente implementiert werden, falls beim Routenwechsel geprüft werden soll,
 *  ob der Anwender speichern muss.
 */
interface IDeactivate {
    canDeactivate(): Observable<boolean>;
}

declare class DeactivationHandler implements IDeactivate {
    private deactivators$;
    register(name: string, component: IDeactivate): void;
    remove(name: string): void;
    canDeactivate(): Observable<boolean>;
    private _deactivateComponent;
}

declare abstract class TypeConverter {
    private static readonly DATE_REGEX;
    private static readonly DATE_REGEX_INPUT;
    /** Versucht den Wert in eine Zahl zu konvertieren. */
    static toNumber(value: string | number): number | string;
    /** Nimmt eine Zahl und gibt eine deutsche Representation dieses Wertes zurück */
    static asGermanFloat(value: number | string, stellen?: number): string | undefined;
    static toMoment(value: string | moment$1.Moment): moment$1.Moment | string;
    static asGermanDate(value: string | moment$1.Moment): string;
    static asGermanTime(value: string | moment$1.Moment, withSeconds?: boolean, withMilliseconds?: boolean): string;
    /** Erzeugt ein moment object und setzt dieses auf UTC, falls dies noch nicht geschehen ist. */
    /** Konvertiert ein moment Object in die lokale Zeitzone (Entfernt UTC) */
    static booleanNumberToSting(n: number): string;
    /** Konvertiert ein Moment Object zu einem Date Object */
    /** Kovertiert einen String in einen Regex um eine Volltextsuche zu ermöglichen */
    static asRegex(text: string): RegExp;
    static booleanToNumber(bool: boolean): number;
    static numberToBoolean(digit: number): boolean;
    /** Kovertiert einen String, der dem Regex einer Zahl entspricht, in eine Zahl */
    private static convertInputStringToNumber;
}

declare abstract class AbstractActivationQueuedGuard implements CanActivate {
    private readonly queue;
    private route;
    private state;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    protected sequence(step: CanActivate[] | CanActivate): AbstractActivationQueuedGuard;
    private runQueueRecursive;
}

declare abstract class AbstractRouteConfiguration<TParams> {
    protected pathSegments: string[];
    protected paramNames?: TParams;
    protected parent?: AbstractRouteConfiguration<any>;
    protected constructor(pathSegments: string[], paramNames?: TParams, parent?: AbstractRouteConfiguration<any>);
    get path(): string;
    get paramDefinition(): TParams;
    buildNavigation(params?: TParams): any[];
    validate(): boolean;
}

declare abstract class AbstractActivationGuard<TSuccessType, TRouteParams> implements CanActivate {
    protected abstract onSuccess(result: TSuccessType): Observable<boolean>;
    protected abstract onError(error: any): Observable<boolean>;
    protected abstract onActivate(): Observable<TSuccessType>;
    protected route: ActivatedRouteSnapshot;
    protected state: RouterStateSnapshot;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    protected get routeConfiguration(): AbstractRouteConfiguration<TRouteParams>;
}

/** Hier werden alle von der Applikation genutzten REGEX gespeichert. */
declare const REGEX: {
    /** Regex für eine Zahl. Jede Zahl sollte damit erkannt werden */
    NUMBER: RegExp;
    /** Die Representation einer (Gleitkomma)Zahl, die der Anwender eingeben darf */
    INPUT_NUMBER: RegExp;
    /** Regex um wirklich jede Zahl, auch mit Tausendertrennpunkten, zu erkennen, aber invalide Zahlen auszuschließen */
    ALL_NUMBERS: RegExp;
    INTEGER: RegExp;
    SIGNED_INTEGER: RegExp;
    /** Offizieller RFC 5322 Standart regex */
    EMAIL: RegExp;
    POSTAL_CODE: RegExp;
    SPECIAL_CHARS_REGEX: RegExp;
    DATE: RegExp;
};

/**
 * Dieses Interface muss mit jeder Angular Route verundet werden
 * damit die abstrakten Routing-Klassen die aktuelle Konfiguration
 * lesen können.
 */
interface IRoutingConfiguration<TRoutingParams> {
    data: Data & IRoutingData<TRoutingParams>;
}
interface IRoutingData<TRoutingParams> {
    routeConfiguration: AbstractRouteConfiguration<TRoutingParams>;
    pageTitle: string;
}

declare abstract class AbstractResolver<TData, TRouteParams> implements Resolve<TData> {
    protected route: ActivatedRouteSnapshot;
    protected state: RouterStateSnapshot;
    protected abstract onResolve(): Observable<TData>;
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TData> | Promise<TData> | TData;
    protected get routeConfiguration(): AbstractRouteConfiguration<TRouteParams>;
}

interface IEntitySelector<TModelType> {
    data: ObservableValue<TModelType>;
    nextRequested: Subject<TModelType>;
    isVisible: ObservableValue<boolean>;
    resolve(dataSet: TModelType): void;
}

interface IEntityResolverConfiguration {
    keepQueryParams: boolean;
}
declare abstract class AbstractEntityResolver<TRouteParams, TModel> {
    protected readonly router: Router;
    protected readonly routeConfiguration: AbstractRouteConfiguration<TRouteParams>;
    protected readonly configuration?: IEntityResolverConfiguration;
    abstract resolve(activatedRoute: ActivatedRoute, model: TModel, entitySelector: IEntitySelector<TModel>): Promise<boolean>;
    protected constructor(router: Router, routeConfiguration: AbstractRouteConfiguration<TRouteParams>, configuration?: IEntityResolverConfiguration);
    protected runResolver(activatedRoute: ActivatedRoute, params: object): Promise<boolean>;
    private static generateDefaultConfiguration;
}

declare abstract class BaseRootComponent extends BasePushStrategyObject implements IDeactivate, OnDestroy {
    abstract canDeactivate(): Observable<boolean>;
    protected abstract activatedRoute: ActivatedRoute;
    protected observables: IEntitySelector<any>[];
    listenTo(observable: IEntitySelector<any>, resolver: AbstractEntityResolver<any, any>): void;
    /**
       * Übernimmt die gleichen Aufgaben wie listenTo von BaseRootComponent, aber triggert nicht die Deactivator Überprüfung
       * @param observable
       * @param resolver
       */
    silentListenTo(observable: IEntitySelector<any>, resolver: AbstractEntityResolver<any, any>): void;
    ngOnDestroy(): void;
    protected onNextRequested(observable: IEntitySelector<any>, dataSet: any, resolver: AbstractEntityResolver<any, any>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseRootComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseRootComponent, never, never, {}, {}, never, never, true, never>;
}

declare class TimestampItemStore<TModel> extends ItemStore<TModel> {
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

declare abstract class AbstractReadonlyCachedRestservice<TModel> extends AbstractStoredReadonlyRestservice<TModel> {
    abstract store: TimestampItemStore<TModel>;
    all(searchParams?: object, httpOptions?: object): Observable<TModel[]>;
    show(id: any, getParams?: object, httpOptions?: object): Observable<TModel>;
}

declare abstract class AbstractCachedRestservice<TModel> extends AbstractReadonlyCachedRestservice<TModel> implements IWriteableRestService<TModel> {
    readonly observer: RestServiceObserver<TModel>;
    create(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    destroy(id: any, getParams?: object, httpOptions?: object): Observable<void>;
    partialUpdate(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    save(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    set(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    update(model: TModel, getParams?: object, httpOptions?: object): Observable<TModel>;
    protected modifyCreateCall(observable: Observable<TModel>): Observable<TModel>;
    protected modifyUpdateCall(observable: Observable<TModel>): Observable<TModel>;
}

declare class ReadonlyRestHandler<T> implements IReadonlyRestService<T> {
    readonly http: HttpClient;
    readonly url: string;
    readonly observer: ReadonlyRestServiceObserver<T>;
    identifier: string;
    constructor(http: HttpClient, url: string, observer: ReadonlyRestServiceObserver<T>);
    all(searchParams?: object, httpOptions?: object): Observable<T[]>;
    show(id: any, getParams?: object, httpOptions?: object): Observable<T>;
}

export { AbstractActivationGuard, AbstractActivationQueuedGuard, AbstractCachedRestservice, AbstractEntityResolver, AbstractReadonlyCachedRestservice, AbstractReadonlyRestservice, AbstractResolver, AbstractRestservice, AbstractRouteConfiguration, AbstractStoredReadonlyRestservice, AbstractStoredRestservice, AccessableControlFactory, AccessableFormArray, AccessableFormControl, AccessableFormGroup, BaseObject, BasePushStrategyObject, BaseRootComponent, DeactivationHandler, HttpStatusCodes, ItemStore, ObservableValue, REGEX, ReadonlyRestHandler, RestHandler, SubscriptionHandler, SubscriptionManager, TimestampItemStore, Type, TypeConverter, Util, ValidatorBetriebsnummer, ValidatorCustom, ValidatorDate, ValidatorEmail, ValidatorFixedValue, ValidatorFloat, ValidatorInteger, ValidatorIntegerRange, ValidatorLength, ValidatorMinValue, ValidatorPostalCode, ValidatorRequired };
export type { IAccessableFieldChange, IDeactivate, IEntityResolverConfiguration, IEntitySelector, IReadonlyRestService, IReadonlyStoreRestService, IRoutingConfiguration, IRoutingData, ISubscriptionHandler, IValidator };
