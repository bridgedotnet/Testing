/// <reference path="./bridge.d.ts" />

declare module BasicTypes {
    /** @namespace BasicTypes */
    
    /**
     * @public
     * @class BasicTypes.BasicTypes
     */
    export interface BasicTypes {
        /**
         * @instance
         * @public
         * @memberof BasicTypes.BasicTypes
         * @default true
         * @type boolean
         */
        boolValue: boolean;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.BasicTypes
         * @type number
         */
        integerValue: number;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.BasicTypes
         * @type number
         */
        floatValue: number;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.BasicTypes
         * @default "Some string value"
         * @type string
         */
        stringValue: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.BasicTypes
         * @type Array.<number>
         */
        integerArray: number[];
        /**
         * @instance
         * @public
         * @memberof BasicTypes.BasicTypes
         * @type Array.<string>
         */
        stringArray: string[];
        /**
         * @instance
         * @public
         * @memberof BasicTypes.BasicTypes
         * @type Array.<BasicTypes.Color>
         */
        colorArray: BasicTypes.Color[];
        /**
         * @instance
         * @public
         * @memberof BasicTypes.BasicTypes
         * @type BasicTypes.Color
         */
        colorValue: BasicTypes.Color;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.BasicTypes
         * @default "AnyValueString"
         * @type Object
         */
        anyValueString: Object;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.BasicTypes
         * @default 1
         * @type Object
         */
        anyValueInteger: Object;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.BasicTypes
         * @default 7
         * @type object
         */
        dynamicValueInteger: any;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.BasicTypes
         * @type Object
         */
        undefinedValue: Object;
        /**
         * @instance
         * @public
         * @this BasicTypes.BasicTypes
         * @memberof BasicTypes.BasicTypes
         * @return  {void}        
         */
        voidFunction(): void;
    }
    export interface BasicTypesFunc extends Function {
        prototype: BasicTypes;
        new (): BasicTypes;
    }
    var BasicTypes: BasicTypesFunc;

    /**
     * @public
     * @class BasicTypes.Color
     */
    export enum Color {
        red = 0,
        green = 1,
        blue = 2
    }

    /**
     * @public
     * @class BasicTypes.Keywords
     */
    export interface Keywords {
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "break"
         * @type string
         */
        $break: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "case"
         * @type string
         */
        $case: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "catch"
         * @type string
         */
        $catch: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "class"
         * @type string
         */
        $class: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "const"
         * @type string
         */
        $const: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "continue"
         * @type string
         */
        $continue: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "debugger"
         * @type string
         */
        $debugger: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "default"
         * @type string
         */
        $default: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "delete"
         * @type string
         */
        $delete: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "do"
         * @type string
         */
        $do: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "else"
         * @type string
         */
        $else: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "enum"
         * @type string
         */
        $enum: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "export"
         * @type string
         */
        $export: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "extends"
         * @type string
         */
        $extends: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "false"
         * @type string
         */
        $false: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "finally"
         * @type string
         */
        $finally: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "for"
         * @type string
         */
        $for: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "function"
         * @type string
         */
        $function: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "if"
         * @type string
         */
        $if: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "import"
         * @type string
         */
        $import: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "in"
         * @type string
         */
        $in: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "instanceof"
         * @type string
         */
        $instanceof: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "new"
         * @type string
         */
        $new: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "null"
         * @type string
         */
        $null: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "return"
         * @type string
         */
        $return: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "super"
         * @type string
         */
        $super: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "switch"
         * @type string
         */
        $switch: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "this"
         * @type string
         */
        $this: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "throw"
         * @type string
         */
        $throw: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "true"
         * @type string
         */
        $true: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "try"
         * @type string
         */
        $try: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "typeof"
         * @type string
         */
        $typeof: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "var"
         * @type string
         */
        $var: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "void"
         * @type string
         */
        $void: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "while"
         * @type string
         */
        $while: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "with"
         * @type string
         */
        $with: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "as"
         * @type string
         */
        $as: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "implements"
         * @type string
         */
        $implements: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "interface"
         * @type string
         */
        $interface: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "let"
         * @type string
         */
        $let: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "package"
         * @type string
         */
        $package: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "private"
         * @type string
         */
        $private: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "protected"
         * @type string
         */
        $protected: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "public"
         * @type string
         */
        $public: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "static"
         * @type string
         */
        $static: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "yield"
         * @type string
         */
        $yield: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "any"
         * @type string
         */
        any: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "boolean"
         * @type string
         */
        $boolean: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "constructor"
         * @type string
         */
        $constructor$: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "new constructor"
         * @type string
         */
        constructor$$1: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "declare"
         * @type string
         */
        declare: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "get"
         * @type string
         */
        get: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "module"
         * @type string
         */
        module: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "require"
         * @type string
         */
        require: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "number"
         * @type string
         */
        number: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "set"
         * @type string
         */
        set: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "string"
         * @type string
         */
        string: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "symbol"
         * @type string
         */
        symbol: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "type"
         * @type string
         */
        type: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "from"
         * @type string
         */
        from: string;
        /**
         * @instance
         * @public
         * @memberof BasicTypes.Keywords
         * @default "of"
         * @type string
         */
        of: string;
    }
    export interface KeywordsFunc extends Function {
        prototype: Keywords;
        new (): Keywords;
    }
    var Keywords: KeywordsFunc;

}
