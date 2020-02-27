/**
 * @fileoverview added by tsickle
 * Generated from: lib/impl/validation/accessable-control-factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AccessableFormControl } from '../../abstract/validation/accessable-form-control';
import { TypeConverter } from '../util/type-converter';
import { Util } from '../util/util';
/**
 * @abstract
 */
var /**
 * @abstract
 */
AccessableControlFactory = /** @class */ (function () {
    function AccessableControlFactory() {
    }
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    AccessableControlFactory.simpleControl = /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    function (formState, validators) {
        if (formState === void 0) { formState = null; }
        /** @type {?} */
        var control = new AccessableFormControl();
        control.initialize(formState, validators);
        return control;
    };
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    AccessableControlFactory.numberControl = /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    function (formState, validators) {
        if (formState === void 0) { formState = null; }
        /** @type {?} */
        var control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = TypeConverter.asGermanFloat;
        control.convertTo = TypeConverter.toNumber;
        control.setValue(formState);
        return control;
    };
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    AccessableControlFactory.numberBooleanControl = /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    function (formState, validators) {
        if (formState === void 0) { formState = null; }
        /** @type {?} */
        var control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = TypeConverter.numberToBoolean;
        control.convertTo = TypeConverter.booleanToNumber;
        control.setValue(formState);
        return control;
    };
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    AccessableControlFactory.dateControl = /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    function (formState, validators) {
        if (formState === void 0) { formState = null; }
        /** @type {?} */
        var control = AccessableControlFactory.simpleControl(formState, validators);
        return control;
    };
    /** Schneides alle Whitespaces am Ende und Anfang weg */
    /**
     * Schneides alle Whitespaces am Ende und Anfang weg
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    AccessableControlFactory.trimControl = /**
     * Schneides alle Whitespaces am Ende und Anfang weg
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    function (formState, validators) {
        if (formState === void 0) { formState = null; }
        /** @type {?} */
        var control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = (/**
         * @param {?} str
         * @return {?}
         */
        function (str) {
            if (Util.isDefined(str)) {
                return str.trim();
            }
            return str;
        });
        control.convertTo = (/**
         * @param {?} str
         * @return {?}
         */
        function (str) {
            if (Util.isDefined(str)) {
                return str.trim();
            }
            return str;
        });
        return control;
    };
    return AccessableControlFactory;
}());
/**
 * @abstract
 */
export { AccessableControlFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1jb250cm9sLWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3ZhbGlkYXRpb24vYWNjZXNzYWJsZS1jb250cm9sLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGNBQWMsQ0FBQzs7OztBQUVsQzs7OztJQUFBO0lBNkRBLENBQUM7Ozs7OztJQTNEZSxzQ0FBYTs7Ozs7SUFBM0IsVUFDRSxTQUFxQixFQUNyQixVQUF3QjtRQUR4QiwwQkFBQSxFQUFBLGdCQUFxQjs7WUFHZixPQUFPLEdBQUcsSUFBSSxxQkFBcUIsRUFBRTtRQUMzQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMxQyxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7Ozs7SUFFYSxzQ0FBYTs7Ozs7SUFBM0IsVUFDRSxTQUFxQixFQUNyQixVQUF3QjtRQUR4QiwwQkFBQSxFQUFBLGdCQUFxQjs7WUFHZixPQUFPLEdBQUcsd0JBQXdCLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7UUFDN0UsT0FBTyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUMzQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVhLDZDQUFvQjs7Ozs7SUFBbEMsVUFDRSxTQUFxQixFQUNyQixVQUF3QjtRQUR4QiwwQkFBQSxFQUFBLGdCQUFxQjs7WUFHZixPQUFPLEdBQUcsd0JBQXdCLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7UUFDN0UsT0FBTyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUNsRCxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVhLG9DQUFXOzs7OztJQUF6QixVQUNFLFNBQXFCLEVBQ3JCLFVBQXdCO1FBRHhCLDBCQUFBLEVBQUEsZ0JBQXFCOztZQUdmLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQztRQUM3RSxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsd0RBQXdEOzs7Ozs7O0lBQzFDLG9DQUFXOzs7Ozs7SUFBekIsVUFDRSxTQUFxQixFQUNyQixVQUF3QjtRQUR4QiwwQkFBQSxFQUFBLGdCQUFxQjs7WUFHZixPQUFPLEdBQUcsd0JBQXdCLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7UUFDN0UsT0FBTyxDQUFDLE1BQU07Ozs7UUFBRyxVQUFDLEdBQVc7WUFDM0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNuQjtZQUNELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFBLENBQUM7UUFDRixPQUFPLENBQUMsU0FBUzs7OztRQUFHLFVBQUMsR0FBVztZQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ25CO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUEsQ0FBQztRQUNGLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUE3REQsSUE2REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lWYWxpZGF0b3J9IGZyb20gJy4uLy4uL2ludGVyZmFjZS92YWxpZGF0aW9uL2ktdmFsaWRhdG9yJztcclxuaW1wb3J0IHtBY2Nlc3NhYmxlRm9ybUNvbnRyb2x9IGZyb20gJy4uLy4uL2Fic3RyYWN0L3ZhbGlkYXRpb24vYWNjZXNzYWJsZS1mb3JtLWNvbnRyb2wnO1xyXG5pbXBvcnQge1R5cGVDb252ZXJ0ZXJ9IGZyb20gJy4uL3V0aWwvdHlwZS1jb252ZXJ0ZXInO1xyXG5pbXBvcnQge1V0aWx9IGZyb20gJy4uL3V0aWwvdXRpbCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5IHtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBzaW1wbGVDb250cm9sKFxyXG4gICAgZm9ybVN0YXRlOiBhbnkgPSBudWxsLFxyXG4gICAgdmFsaWRhdG9yczogSVZhbGlkYXRvcltdXHJcbiAgKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgQWNjZXNzYWJsZUZvcm1Db250cm9sKCk7XHJcbiAgICBjb250cm9sLmluaXRpYWxpemUoZm9ybVN0YXRlLCB2YWxpZGF0b3JzKTtcclxuICAgIHJldHVybiBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBudW1iZXJDb250cm9sKFxyXG4gICAgZm9ybVN0YXRlOiBhbnkgPSBudWxsLFxyXG4gICAgdmFsaWRhdG9yczogSVZhbGlkYXRvcltdXHJcbiAgKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBBY2Nlc3NhYmxlQ29udHJvbEZhY3Rvcnkuc2ltcGxlQ29udHJvbChmb3JtU3RhdGUsIHZhbGlkYXRvcnMpO1xyXG4gICAgY29udHJvbC5zaG93QXMgPSBUeXBlQ29udmVydGVyLmFzR2VybWFuRmxvYXQ7XHJcbiAgICBjb250cm9sLmNvbnZlcnRUbyA9IFR5cGVDb252ZXJ0ZXIudG9OdW1iZXI7XHJcbiAgICBjb250cm9sLnNldFZhbHVlKGZvcm1TdGF0ZSk7XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbnVtYmVyQm9vbGVhbkNvbnRyb2woXHJcbiAgICBmb3JtU3RhdGU6IGFueSA9IG51bGwsXHJcbiAgICB2YWxpZGF0b3JzOiBJVmFsaWRhdG9yW11cclxuICApOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xyXG4gICAgY29uc3QgY29udHJvbCA9IEFjY2Vzc2FibGVDb250cm9sRmFjdG9yeS5zaW1wbGVDb250cm9sKGZvcm1TdGF0ZSwgdmFsaWRhdG9ycyk7XHJcbiAgICBjb250cm9sLnNob3dBcyA9IFR5cGVDb252ZXJ0ZXIubnVtYmVyVG9Cb29sZWFuO1xyXG4gICAgY29udHJvbC5jb252ZXJ0VG8gPSBUeXBlQ29udmVydGVyLmJvb2xlYW5Ub051bWJlcjtcclxuICAgIGNvbnRyb2wuc2V0VmFsdWUoZm9ybVN0YXRlKTtcclxuICAgIHJldHVybiBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkYXRlQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogYW55ID0gbnVsbCxcclxuICAgIHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXVxyXG4gICk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdCBjb250cm9sID0gQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5LnNpbXBsZUNvbnRyb2woZm9ybVN0YXRlLCB2YWxpZGF0b3JzKTtcclxuICAgIHJldHVybiBjb250cm9sO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNjaG5laWRlcyBhbGxlIFdoaXRlc3BhY2VzIGFtIEVuZGUgdW5kIEFuZmFuZyB3ZWcgKi9cclxuICBwdWJsaWMgc3RhdGljIHRyaW1Db250cm9sKFxyXG4gICAgZm9ybVN0YXRlOiBhbnkgPSBudWxsLFxyXG4gICAgdmFsaWRhdG9yczogSVZhbGlkYXRvcltdXHJcbiAgKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBBY2Nlc3NhYmxlQ29udHJvbEZhY3Rvcnkuc2ltcGxlQ29udHJvbChmb3JtU3RhdGUsIHZhbGlkYXRvcnMpO1xyXG4gICAgY29udHJvbC5zaG93QXMgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQgfCBudWxsID0+IHtcclxuICAgICAgaWYgKFV0aWwuaXNEZWZpbmVkKHN0cikpIHtcclxuICAgICAgICByZXR1cm4gc3RyLnRyaW0oKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc3RyO1xyXG4gICAgfTtcclxuICAgIGNvbnRyb2wuY29udmVydFRvID0gKHN0cjogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9PiB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChzdHIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci50cmltKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcbn1cclxuIl19