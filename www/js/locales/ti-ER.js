﻿Bridge.merge(new Bridge.CultureInfo("ti-ER", true), {
    englishName: "Tigrinya (Eritrea)",
    nativeName: "ትግርኛ (ኤርትራ)",

    numberFormat: Bridge.merge(new Bridge.NumberFormatInfo(), {
        naNSymbol: "NAN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infinity",
        positiveInfinitySymbol: "Infinity",
        percentSymbol: "%",
        percentGroupSizes: [3,0],
        percentDecimalDigits: 1,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "ERN",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 1,
        numberGroupSizes: [3,0],
        numberDecimalDigits: 1,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new Bridge.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["ሰንበት","ሰኑይ","ሰሉስ","ሮቡዕ","ሓሙስ","ዓርቢ","ቀዳም"],
        abbreviatedMonthGenitiveNames: ["ጥሪ","የካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ",""],
        abbreviatedMonthNames: ["ጥሪ","የካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ",""],
        amDesignator: "ንጉሆ",
        dateSeparator: "/",
        dayNames: ["ሰንበት","ሰኑይ","ሰሉስ","ሮቡዕ","ሓሙስ","ዓርቢ","ቀዳም"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd '፣' MMMM d 'መዓልቲ' yyyy h:mm:ss tt",
        longDatePattern: "dddd '፣' MMMM d 'መዓልቲ' yyyy",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "MMMM d",
        monthGenitiveNames: ["ጥሪ","ለካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ",""],
        monthNames: ["ጥሪ","ለካቲት","መጋቢት","ሚያዝያ","ግንቦት","ሰነ","ሓምለ","ነሓሰ","መስከረም","ጥቅምቲ","ሕዳር","ታሕሳስ",""],
        pmDesignator: "ድሕሪ ቐትሪ",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/M/yyyy",
        shortestDayNames: ["ሰን","ሰኑ","ሰሉ","ሮቡ","ሓሙ","ዓር","ቀዳ"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.uzzz"
    })
});
