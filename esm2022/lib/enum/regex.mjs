/** Hier werden alle von der Applikation genutzten REGEX gespeichert. */
export const REGEX = {
    /** Regex für eine Zahl. Jede Zahl sollte damit erkannt werden */
    NUMBER: /^-?[0-9]+([,.][0-9]+)?$/,
    /** Die Representation einer (Gleitkomma)Zahl, die der Anwender eingeben darf */
    INPUT_NUMBER: /^[0-9]+(,[0-9]+)?$/,
    /** Regex um wirklich jede Zahl, auch mit Tausendertrennpunkten, zu erkennen, aber invalide Zahlen auszuschließen */
    ALL_NUMBERS: /^-?(?![\.\,A-Za-z])(((?:\d{1,3}(?:\.\d{3}(?!\d))+|\d{4,})|(?:(?![\.A-Za-z])\d+(?![\.A-Za-z])))(?:,\d+)?)(?![,A-Za-z])$/,
    INTEGER: /^[0-9]+$/,
    SIGNED_INTEGER: /^-?[0-9]+$/,
    /** Offizieller RFC 5322 Standart regex */
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    POSTAL_CODE: /^[0-9]{5}$/,
    SPECIAL_CHARS_REGEX: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
    DATE: /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tcmQtY29yZS9zcmMvbGliL2VudW0vcmVnZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0VBQXdFO0FBQ3hFLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRztJQUNuQixpRUFBaUU7SUFDakUsTUFBTSxFQUFFLHlCQUF5QjtJQUNqQyxnRkFBZ0Y7SUFDaEYsWUFBWSxFQUFFLG9CQUFvQjtJQUNsQyxvSEFBb0g7SUFDcEgsV0FBVyxFQUFFLHdIQUF3SDtJQUNySSxPQUFPLEVBQUUsVUFBVTtJQUNuQixjQUFjLEVBQUUsWUFBWTtJQUM1QiwwQ0FBMEM7SUFDMUMsS0FBSyxFQUFFLHdKQUF3SjtJQUMvSixXQUFXLEVBQUUsWUFBWTtJQUN6QixtQkFBbUIsRUFBRSxxQ0FBcUM7SUFDMUQsSUFBSSxFQUFFLHVDQUF1QztDQUM5QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEhpZXIgd2VyZGVuIGFsbGUgdm9uIGRlciBBcHBsaWthdGlvbiBnZW51dHp0ZW4gUkVHRVggZ2VzcGVpY2hlcnQuICovXHJcbmV4cG9ydCBjb25zdCBSRUdFWCA9IHtcclxuICAvKiogUmVnZXggZsO8ciBlaW5lIFphaGwuIEplZGUgWmFobCBzb2xsdGUgZGFtaXQgZXJrYW5udCB3ZXJkZW4gKi9cclxuICBOVU1CRVI6IC9eLT9bMC05XSsoWywuXVswLTldKyk/JC8sXHJcbiAgLyoqIERpZSBSZXByZXNlbnRhdGlvbiBlaW5lciAoR2xlaXRrb21tYSlaYWhsLCBkaWUgZGVyIEFud2VuZGVyIGVpbmdlYmVuIGRhcmYgKi9cclxuICBJTlBVVF9OVU1CRVI6IC9eWzAtOV0rKCxbMC05XSspPyQvLFxyXG4gIC8qKiBSZWdleCB1bSB3aXJrbGljaCBqZWRlIFphaGwsIGF1Y2ggbWl0IFRhdXNlbmRlcnRyZW5ucHVua3RlbiwgenUgZXJrZW5uZW4sIGFiZXIgaW52YWxpZGUgWmFobGVuIGF1c3p1c2NobGllw59lbiAqL1xyXG4gIEFMTF9OVU1CRVJTOiAvXi0/KD8hW1xcLlxcLEEtWmEtel0pKCgoPzpcXGR7MSwzfSg/OlxcLlxcZHszfSg/IVxcZCkpK3xcXGR7NCx9KXwoPzooPyFbXFwuQS1aYS16XSlcXGQrKD8hW1xcLkEtWmEtel0pKSkoPzosXFxkKyk/KSg/IVssQS1aYS16XSkkLyxcclxuICBJTlRFR0VSOiAvXlswLTldKyQvLFxyXG4gIFNJR05FRF9JTlRFR0VSOiAvXi0/WzAtOV0rJC8sXHJcbiAgLyoqIE9mZml6aWVsbGVyIFJGQyA1MzIyIFN0YW5kYXJ0IHJlZ2V4ICovXHJcbiAgRU1BSUw6IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLFxyXG4gIFBPU1RBTF9DT0RFOiAvXlswLTldezV9JC8sXHJcbiAgU1BFQ0lBTF9DSEFSU19SRUdFWDogL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLFxyXG4gIERBVEU6IC9eKFxcZHsxLDJ9KVstXFwvXShcXGR7MSwyfSlbLVxcL10oXFxkezR9KSQvXHJcbn07XHJcbiJdfQ==