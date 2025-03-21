/** Hier werden alle von der Applikation genutzten REGEX gespeichert. */
export const REGEX = {
    /** Regex für eine Zahl. Jede Zahl sollte damit erkannt werden */
    NUMBER: /^-?[0-9]+([,.][0-9]+)?$/,
    /** Die Representation einer (Gleitkomma)Zahl, die der Anwender eingeben darf */
    INPUT_NUMBER: /^[0-9]+(,[0-9]+)?$/,
    /** Regex um wirklich jede Zahl, auch mit Tausendertrennpunkten, zu erkennen, aber invalide Zahlen auszuschließen */
    ALL_NUMBERS: /-?^(?![\.\,A-Za-z])(((?:\d{1,3}(?:\.\d{3}(?!\d))+|\d{4,})|(?:(?![\.A-Za-z])\d+(?![\.A-Za-z])))(?:,\d+)?)(?![,A-Za-z])/,
    INTEGER: /^[0-9]+$/,
    SIGNED_INTEGER: /^-?[0-9]+$/,
    /** Offizieller RFC 5322 Standart regex */
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    POSTAL_CODE: /^[0-9]{5}$/,
    SPECIAL_CHARS_REGEX: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
    DATE: /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2VudW0vcmVnZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFO0FBQ3hFLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRztJQUNuQixpRUFBaUU7SUFDakUsTUFBTSxFQUFFLHlCQUF5QjtJQUNqQyxnRkFBZ0Y7SUFDaEYsWUFBWSxFQUFFLG9CQUFvQjtJQUNsQyxvSEFBb0g7SUFDcEgsV0FBVyxFQUFFLHVIQUF1SDtJQUNwSSxPQUFPLEVBQUUsVUFBVTtJQUNuQixjQUFjLEVBQUUsWUFBWTtJQUM1QiwwQ0FBMEM7SUFDMUMsS0FBSyxFQUFFLHdKQUF3SjtJQUMvSixXQUFXLEVBQUUsWUFBWTtJQUN6QixtQkFBbUIsRUFBRSxxQ0FBcUM7SUFDMUQsSUFBSSxFQUFFLHVDQUF1QztDQUM5QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEhpZXIgd2VyZGVuIGFsbGUgdm9uIGRlciBBcHBsaWthdGlvbiBnZW51dHp0ZW4gUkVHRVggZ2VzcGVpY2hlcnQuICovXHJcbmV4cG9ydCBjb25zdCBSRUdFWCA9IHtcclxuICAvKiogUmVnZXggZsO8ciBlaW5lIFphaGwuIEplZGUgWmFobCBzb2xsdGUgZGFtaXQgZXJrYW5udCB3ZXJkZW4gKi9cclxuICBOVU1CRVI6IC9eLT9bMC05XSsoWywuXVswLTldKyk/JC8sXHJcbiAgLyoqIERpZSBSZXByZXNlbnRhdGlvbiBlaW5lciAoR2xlaXRrb21tYSlaYWhsLCBkaWUgZGVyIEFud2VuZGVyIGVpbmdlYmVuIGRhcmYgKi9cclxuICBJTlBVVF9OVU1CRVI6IC9eWzAtOV0rKCxbMC05XSspPyQvLFxyXG4gIC8qKiBSZWdleCB1bSB3aXJrbGljaCBqZWRlIFphaGwsIGF1Y2ggbWl0IFRhdXNlbmRlcnRyZW5ucHVua3RlbiwgenUgZXJrZW5uZW4sIGFiZXIgaW52YWxpZGUgWmFobGVuIGF1c3p1c2NobGllw59lbiAqL1xyXG4gIEFMTF9OVU1CRVJTOiAvLT9eKD8hW1xcLlxcLEEtWmEtel0pKCgoPzpcXGR7MSwzfSg/OlxcLlxcZHszfSg/IVxcZCkpK3xcXGR7NCx9KXwoPzooPyFbXFwuQS1aYS16XSlcXGQrKD8hW1xcLkEtWmEtel0pKSkoPzosXFxkKyk/KSg/IVssQS1aYS16XSkvLFxyXG4gIElOVEVHRVI6IC9eWzAtOV0rJC8sXHJcbiAgU0lHTkVEX0lOVEVHRVI6IC9eLT9bMC05XSskLyxcclxuICAvKiogT2ZmaXppZWxsZXIgUkZDIDUzMjIgU3RhbmRhcnQgcmVnZXggKi9cclxuICBFTUFJTDogL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8sXHJcbiAgUE9TVEFMX0NPREU6IC9eWzAtOV17NX0kLyxcclxuICBTUEVDSUFMX0NIQVJTX1JFR0VYOiAvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csXHJcbiAgREFURTogL14oXFxkezEsMn0pWy1cXC9dKFxcZHsxLDJ9KVstXFwvXShcXGR7NH0pJC9cclxufTtcclxuIl19