/// <reference path="./bridge.d.ts" />

declare namespace BasicTypes {
    interface BasicTypes {
        BoolValue: boolean;
        IntegerValue: number;
        FloatValue: number;
        StringValue: string | null;
        IntegerArray: number[] | null;
        StringArray: string[] | null;
        ColorArray: BasicTypes.Color[] | null;
        TwoDimensionalArray: number[][] | null;
        ColorValue: BasicTypes.Color;
        AnyValueString: any | null;
        AnyValueInteger: any | null;
        DynamicValueInteger: any | null;
        UndefinedValue: any | null;
        VoidFunction(): void;
    }
    interface BasicTypesFunc extends Function {
        prototype: BasicTypes;
        new (): BasicTypes;
    }
    var BasicTypes: BasicTypesFunc;

    enum Color {
        Red = 0,
        Green = 1,
        Blue = 2
    }

    interface Keywords {
        Break: string | null;
        Case: string | null;
        Catch: string | null;
        Class: string | null;
        Const: string | null;
        Continue: string | null;
        Debugger: string | null;
        Default: string | null;
        Delete: string | null;
        Do: string | null;
        Else: string | null;
        Enum: string | null;
        Export: string | null;
        Extends: string | null;
        False: string | null;
        Finally: string | null;
        For: string | null;
        Function: string | null;
        If: string | null;
        Import: string | null;
        In: string | null;
        Instanceof: string | null;
        New: string | null;
        Null: string | null;
        Return: string | null;
        Super: string | null;
        Switch: string | null;
        This: string | null;
        Throw: string | null;
        True: string | null;
        Try: string | null;
        Typeof: string | null;
        Var: string | null;
        Void: string | null;
        While: string | null;
        With: string | null;
        As: string | null;
        Implements: string | null;
        Interface: string | null;
        Let: string | null;
        Package: string | null;
        Private: string | null;
        Protected: string | null;
        Public: string | null;
        Static: string | null;
        Yield: string | null;
        Any: string | null;
        Boolean: string | null;
        constructor: string | null;
        Constructor$1: string | null;
        Declare: string | null;
        Get: string | null;
        Module: string | null;
        Require: string | null;
        Number: string | null;
        Set: string | null;
        String: string | null;
        Symbol: string | null;
        Type: string | null;
        From: string | null;
        Of: string | null;
    }
    interface KeywordsFunc extends Function {
        prototype: Keywords;
        new (): Keywords;
    }
    var Keywords: KeywordsFunc;

}
