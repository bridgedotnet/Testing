﻿Bridge.merge(new Bridge.CultureInfo("co-FR", true), {
    englishName: "Corsican (France)",
    nativeName: "Corsu (Francia)",

    numberFormat: Bridge.merge(new Bridge.NumberFormatInfo(), {
        naNSymbol: "Micca numericu",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinitu",
        positiveInfinitySymbol: "+Infinitu",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "€",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new Bridge.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["dum.","lun.","mar.","mer.","ghj.","ven.","sab."],
        abbreviatedMonthGenitiveNames: ["ghje","ferr","marz","apri","magh","ghju","lugl","aost","sett","otto","nuve","dice",""],
        abbreviatedMonthNames: ["ghje","ferr","marz","apri","magh","ghju","lugl","aost","sett","otto","nuve","dice",""],
        amDesignator: "",
        dateSeparator: "/",
        dayNames: ["dumenica","luni","marti","mercuri","ghjovi","venneri","sabbatu"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy H:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "H:mm:ss",
        monthDayPattern: "d' di 'MMMM",
        monthGenitiveNames: ["ghjennaghju","ferraghju","marzu","aprile","maghju","ghjunghju","lugliu","aostu","settembre","ottobre","nuvembre","dicembre",""],
        monthNames: ["ghjennaghju","ferraghju","marzu","aprile","maghju","ghjunghju","lugliu","aostu","settembre","ottobre","nuvembre","dicembre",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["du","lu","ma","me","gh","ve","sa"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM' di u 'yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
