/// <reference path="./bridge.d.ts" />

declare module BasicTypes {
    export interface Keywords {
        $break: string;
        $case: string;
        $catch: string;
        $class: string;
        $const: string;
        $continue: string;
        $debugger: string;
        $default: string;
        $delete: string;
        $do: string;
        $else: string;
        $enum: string;
        $export: string;
        $extends: string;
        $false: string;
        $finally: string;
        $for: string;
        $function: string;
        $if: string;
        $import: string;
        $in: string;
        $instanceof: string;
        $new: string;
        $null: string;
        $return: string;
        $super: string;
        $switch: string;
        $this: string;
        $throw: string;
        $true: string;
        $try: string;
        $typeof: string;
        $var: string;
        $void: string;
        $while: string;
        $with: string;
        $as: string;
        $implements: string;
        $interface: string;
        $let: string;
        $package: string;
        $private: string;
        $protected: string;
        $public: string;
        $static: string;
        $yield: string;
        any: string;
        $boolean: string;
        $constructor$: string;
        constructor$$1: string;
        declare: string;
        get: string;
        module: string;
        require: string;
        number: string;
        set: string;
        string: string;
        symbol: string;
        type: string;
        from: string;
        of: string;
    }
    export interface KeywordsFunc extends Function {
        prototype: Keywords;
        new (): Keywords;
    }
    var Keywords: KeywordsFunc;

    export enum Color {
        red = 0,
        green = 1,
        blue = 2
    }

    export interface BasicTypes {
        boolValue: boolean;
        integerValue: number;
        floatValue: number;
        stringValue: string;
        integerArray: number[];
        stringArray: string[];
        colorArray: BasicTypes.Color[];
        colorValue: BasicTypes.Color;
        anyValueString: Object;
        anyValueInteger: Object;
        dynamicValueInteger: any;
        undefinedValue: Object;
        voidFunction(): void;
    }
    export interface BasicTypesFunc extends Function {
        prototype: BasicTypes;
        new (): BasicTypes;
    }
    var BasicTypes: BasicTypesFunc;

}
