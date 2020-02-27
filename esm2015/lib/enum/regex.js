/**
 * @fileoverview added by tsickle
 * Generated from: lib/enum/regex.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Hier werden alle von der Applikation genutzten REGEX gespeichert.
 * @type {?}
 */
export const REGEX = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tcmQtY29yZS8iLCJzb3VyY2VzIjpbImxpYi9lbnVtL3JlZ2V4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLE1BQU0sT0FBTyxLQUFLLEdBQUc7Ozs7SUFFbkIsTUFBTSxFQUFFLHlCQUF5Qjs7OztJQUVqQyxZQUFZLEVBQUUsb0JBQW9CO0lBQ2xDLE9BQU8sRUFBRSxVQUFVO0lBQ25CLGNBQWMsRUFBRSxZQUFZOzs7O0lBRTVCLEtBQUssRUFBRSx3SkFBd0o7SUFDL0osV0FBVyxFQUFFLFlBQVk7SUFDekIsbUJBQW1CLEVBQUUscUNBQXFDO0lBQzFELElBQUksRUFBRSx1Q0FBdUM7Q0FDOUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogSGllciB3ZXJkZW4gYWxsZSB2b24gZGVyIEFwcGxpa2F0aW9uIGdlbnV0enRlbiBSRUdFWCBnZXNwZWljaGVydC4gKi9cclxuZXhwb3J0IGNvbnN0IFJFR0VYID0ge1xyXG4gIC8qKiBSZWdleCBmw7xyIGVpbmUgWmFobC4gSmVkZSBaYWhsIHNvbGx0ZSBkYW1pdCBlcmthbm50IHdlcmRlbiAqL1xyXG4gIE5VTUJFUjogL14tP1swLTldKyhbLC5dWzAtOV0rKT8kLyxcclxuICAvKiogRGllIFJlcHJlc2VudGF0aW9uIGVpbmVyIChHbGVpdGtvbW1hKVphaGwsIGRpZSBkZXIgQW53ZW5kZXIgZWluZ2ViZW4gZGFyZiAqL1xyXG4gIElOUFVUX05VTUJFUjogL15bMC05XSsoLFswLTldKyk/JC8sXHJcbiAgSU5URUdFUjogL15bMC05XSskLyxcclxuICBTSUdORURfSU5URUdFUjogL14tP1swLTldKyQvLFxyXG4gIC8qKiBPZmZpemllbGxlciBSRkMgNTMyMiBTdGFuZGFydCByZWdleCAqL1xyXG4gIEVNQUlMOiAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyxcclxuICBQT1NUQUxfQ09ERTogL15bMC05XXs1fSQvLFxyXG4gIFNQRUNJQUxfQ0hBUlNfUkVHRVg6IC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZyxcclxuICBEQVRFOiAvXihcXGR7MSwyfSlbLVxcL10oXFxkezEsMn0pWy1cXC9dKFxcZHs0fSkkL1xyXG59O1xyXG4iXX0=