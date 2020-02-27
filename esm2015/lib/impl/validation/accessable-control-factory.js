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
export class AccessableControlFactory {
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    static simpleControl(formState = null, validators) {
        /** @type {?} */
        const control = new AccessableFormControl();
        control.initialize(formState, validators);
        return control;
    }
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    static numberControl(formState = null, validators) {
        /** @type {?} */
        const control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = TypeConverter.asGermanFloat;
        control.convertTo = TypeConverter.toNumber;
        control.setValue(formState);
        return control;
    }
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    static numberBooleanControl(formState = null, validators) {
        /** @type {?} */
        const control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = TypeConverter.numberToBoolean;
        control.convertTo = TypeConverter.booleanToNumber;
        control.setValue(formState);
        return control;
    }
    /**
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    static dateControl(formState = null, validators) {
        /** @type {?} */
        const control = AccessableControlFactory.simpleControl(formState, validators);
        return control;
    }
    /**
     * Schneides alle Whitespaces am Ende und Anfang weg
     * @param {?=} formState
     * @param {?=} validators
     * @return {?}
     */
    static trimControl(formState = null, validators) {
        /** @type {?} */
        const control = AccessableControlFactory.simpleControl(formState, validators);
        control.showAs = (/**
         * @param {?} str
         * @return {?}
         */
        (str) => {
            if (Util.isDefined(str)) {
                return str.trim();
            }
            return str;
        });
        control.convertTo = (/**
         * @param {?} str
         * @return {?}
         */
        (str) => {
            if (Util.isDefined(str)) {
                return str.trim();
            }
            return str;
        });
        return control;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzYWJsZS1jb250cm9sLWZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9pbXBsL3ZhbGlkYXRpb24vYWNjZXNzYWJsZS1jb250cm9sLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGNBQWMsQ0FBQzs7OztBQUVsQyxNQUFNLE9BQWdCLHdCQUF3Qjs7Ozs7O0lBRXJDLE1BQU0sQ0FBQyxhQUFhLENBQ3pCLFlBQWlCLElBQUksRUFDckIsVUFBd0I7O2NBRWxCLE9BQU8sR0FBRyxJQUFJLHFCQUFxQixFQUFFO1FBQzNDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVNLE1BQU0sQ0FBQyxhQUFhLENBQ3pCLFlBQWlCLElBQUksRUFDckIsVUFBd0I7O2NBRWxCLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQztRQUM3RSxPQUFPLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDN0MsT0FBTyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRU0sTUFBTSxDQUFDLG9CQUFvQixDQUNoQyxZQUFpQixJQUFJLEVBQ3JCLFVBQXdCOztjQUVsQixPQUFPLEdBQUcsd0JBQXdCLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7UUFDN0UsT0FBTyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUNsRCxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVNLE1BQU0sQ0FBQyxXQUFXLENBQ3ZCLFlBQWlCLElBQUksRUFDckIsVUFBd0I7O2NBRWxCLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQztRQUM3RSxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7Ozs7O0lBR00sTUFBTSxDQUFDLFdBQVcsQ0FDdkIsWUFBaUIsSUFBSSxFQUNyQixVQUF3Qjs7Y0FFbEIsT0FBTyxHQUFHLHdCQUF3QixDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO1FBQzdFLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUcsQ0FBQyxHQUFXLEVBQTZCLEVBQUU7WUFDMUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNuQjtZQUNELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFBLENBQUM7UUFDRixPQUFPLENBQUMsU0FBUzs7OztRQUFHLENBQUMsR0FBVyxFQUE2QixFQUFFO1lBQzdELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkI7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQSxDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVmFsaWRhdG9yfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvdmFsaWRhdGlvbi9pLXZhbGlkYXRvcic7XHJcbmltcG9ydCB7QWNjZXNzYWJsZUZvcm1Db250cm9sfSBmcm9tICcuLi8uLi9hYnN0cmFjdC92YWxpZGF0aW9uL2FjY2Vzc2FibGUtZm9ybS1jb250cm9sJztcclxuaW1wb3J0IHtUeXBlQ29udmVydGVyfSBmcm9tICcuLi91dGlsL3R5cGUtY29udmVydGVyJztcclxuaW1wb3J0IHtVdGlsfSBmcm9tICcuLi91dGlsL3V0aWwnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFjY2Vzc2FibGVDb250cm9sRmFjdG9yeSB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2ltcGxlQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogYW55ID0gbnVsbCxcclxuICAgIHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXVxyXG4gICk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdCBjb250cm9sID0gbmV3IEFjY2Vzc2FibGVGb3JtQ29udHJvbCgpO1xyXG4gICAgY29udHJvbC5pbml0aWFsaXplKGZvcm1TdGF0ZSwgdmFsaWRhdG9ycyk7XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgbnVtYmVyQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogYW55ID0gbnVsbCxcclxuICAgIHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXVxyXG4gICk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdCBjb250cm9sID0gQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5LnNpbXBsZUNvbnRyb2woZm9ybVN0YXRlLCB2YWxpZGF0b3JzKTtcclxuICAgIGNvbnRyb2wuc2hvd0FzID0gVHlwZUNvbnZlcnRlci5hc0dlcm1hbkZsb2F0O1xyXG4gICAgY29udHJvbC5jb252ZXJ0VG8gPSBUeXBlQ29udmVydGVyLnRvTnVtYmVyO1xyXG4gICAgY29udHJvbC5zZXRWYWx1ZShmb3JtU3RhdGUpO1xyXG4gICAgcmV0dXJuIGNvbnRyb2w7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIG51bWJlckJvb2xlYW5Db250cm9sKFxyXG4gICAgZm9ybVN0YXRlOiBhbnkgPSBudWxsLFxyXG4gICAgdmFsaWRhdG9yczogSVZhbGlkYXRvcltdXHJcbiAgKTogQWNjZXNzYWJsZUZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSBBY2Nlc3NhYmxlQ29udHJvbEZhY3Rvcnkuc2ltcGxlQ29udHJvbChmb3JtU3RhdGUsIHZhbGlkYXRvcnMpO1xyXG4gICAgY29udHJvbC5zaG93QXMgPSBUeXBlQ29udmVydGVyLm51bWJlclRvQm9vbGVhbjtcclxuICAgIGNvbnRyb2wuY29udmVydFRvID0gVHlwZUNvbnZlcnRlci5ib29sZWFuVG9OdW1iZXI7XHJcbiAgICBjb250cm9sLnNldFZhbHVlKGZvcm1TdGF0ZSk7XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGF0ZUNvbnRyb2woXHJcbiAgICBmb3JtU3RhdGU6IGFueSA9IG51bGwsXHJcbiAgICB2YWxpZGF0b3JzOiBJVmFsaWRhdG9yW11cclxuICApOiBBY2Nlc3NhYmxlRm9ybUNvbnRyb2wge1xyXG4gICAgY29uc3QgY29udHJvbCA9IEFjY2Vzc2FibGVDb250cm9sRmFjdG9yeS5zaW1wbGVDb250cm9sKGZvcm1TdGF0ZSwgdmFsaWRhdG9ycyk7XHJcbiAgICByZXR1cm4gY29udHJvbDtcclxuICB9XHJcblxyXG4gIC8qKiBTY2huZWlkZXMgYWxsZSBXaGl0ZXNwYWNlcyBhbSBFbmRlIHVuZCBBbmZhbmcgd2VnICovXHJcbiAgcHVibGljIHN0YXRpYyB0cmltQ29udHJvbChcclxuICAgIGZvcm1TdGF0ZTogYW55ID0gbnVsbCxcclxuICAgIHZhbGlkYXRvcnM6IElWYWxpZGF0b3JbXVxyXG4gICk6IEFjY2Vzc2FibGVGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdCBjb250cm9sID0gQWNjZXNzYWJsZUNvbnRyb2xGYWN0b3J5LnNpbXBsZUNvbnRyb2woZm9ybVN0YXRlLCB2YWxpZGF0b3JzKTtcclxuICAgIGNvbnRyb2wuc2hvd0FzID0gKHN0cjogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbCA9PiB7XHJcbiAgICAgIGlmIChVdGlsLmlzRGVmaW5lZChzdHIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci50cmltKCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH07XHJcbiAgICBjb250cm9sLmNvbnZlcnRUbyA9IChzdHI6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGwgPT4ge1xyXG4gICAgICBpZiAoVXRpbC5pc0RlZmluZWQoc3RyKSkge1xyXG4gICAgICAgIHJldHVybiBzdHIudHJpbSgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbnRyb2w7XHJcbiAgfVxyXG59XHJcbiJdfQ==