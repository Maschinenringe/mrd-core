/**
 * @fileoverview added by tsickle
 * Generated from: lib/enum/regex.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Hier werden alle von der Applikation genutzten REGEX gespeichert.
 * @type {?}
 */
export var REGEX = {
    /**
     * Regex für eine Zahl. Jede Zahl sollte damit erkannt werden
     */
    NUMBER: /^-?[0-9]+([,.][0-9]+)?$/,
    /**
     * Die Representation einer (Gleitkomma)Zahl, die der Anwender eingeben darf
     */
    INPUT_NUMBER: /^[0-9]+(,[0-9]+)?$/,
    INTEGER: /^[0-9]+$/,
    SIGNED_INTEGER: /^-?[0-9]+$/,
    /**
     * Offizieller RFC 5322 Standart regex
     */
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    POSTAL_CODE: /^[0-9]{5}$/,
    SPECIAL_CHARS_REGEX: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
    DATE: /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9lbnVtL3JlZ2V4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLE1BQU0sS0FBTyxLQUFLLEdBQUc7Ozs7SUFFbkIsTUFBTSxFQUFFLHlCQUF5Qjs7OztJQUVqQyxZQUFZLEVBQUUsb0JBQW9CO0lBQ2xDLE9BQU8sRUFBRSxVQUFVO0lBQ25CLGNBQWMsRUFBRSxZQUFZOzs7O0lBRTVCLEtBQUssRUFBRSx3SkFBd0o7SUFDL0osV0FBVyxFQUFFLFlBQVk7SUFDekIsbUJBQW1CLEVBQUUscUNBQXFDO0lBQzFELElBQUksRUFBRSx1Q0FBdUM7Q0FDOUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogSGllciB3ZXJkZW4gYWxsZSB2b24gZGVyIEFwcGxpa2F0aW9uIGdlbnV0enRlbiBSRUdFWCBnZXNwZWljaGVydC4gKi9cbmV4cG9ydCBjb25zdCBSRUdFWCA9IHtcbiAgLyoqIFJlZ2V4IGbDvHIgZWluZSBaYWhsLiBKZWRlIFphaGwgc29sbHRlIGRhbWl0IGVya2FubnQgd2VyZGVuICovXG4gIE5VTUJFUjogL14tP1swLTldKyhbLC5dWzAtOV0rKT8kLyxcbiAgLyoqIERpZSBSZXByZXNlbnRhdGlvbiBlaW5lciAoR2xlaXRrb21tYSlaYWhsLCBkaWUgZGVyIEFud2VuZGVyIGVpbmdlYmVuIGRhcmYgKi9cbiAgSU5QVVRfTlVNQkVSOiAvXlswLTldKygsWzAtOV0rKT8kLyxcbiAgSU5URUdFUjogL15bMC05XSskLyxcbiAgU0lHTkVEX0lOVEVHRVI6IC9eLT9bMC05XSskLyxcbiAgLyoqIE9mZml6aWVsbGVyIFJGQyA1MzIyIFN0YW5kYXJ0IHJlZ2V4ICovXG4gIEVNQUlMOiAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyxcbiAgUE9TVEFMX0NPREU6IC9eWzAtOV17NX0kLyxcbiAgU1BFQ0lBTF9DSEFSU19SRUdFWDogL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLFxuICBEQVRFOiAvXihcXGR7MSwyfSlbLVxcL10oXFxkezEsMn0pWy1cXC9dKFxcZHs0fSkkL1xufTtcbiJdfQ==