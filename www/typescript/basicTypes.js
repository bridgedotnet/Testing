/* global Bridge */

/** @namespace BasicTypes */

/**
 * @public
 * @class BasicTypes.BasicTypes
 */
Bridge.define('BasicTypes.BasicTypes', {
    /**
     * @instance
     * @public
     * @memberof BasicTypes.BasicTypes
     * @default true
     * @type boolean
     */
    boolValue: true,
    /**
     * @instance
     * @public
     * @memberof BasicTypes.BasicTypes
     * @default "Some string value"
     * @type string
     */
    stringValue: "Some string value",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.BasicTypes
     * @default "AnyValueString"
     * @type Object
     */
    anyValueString: "AnyValueString",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.BasicTypes
     * @default 1
     * @type Object
     */
    anyValueInteger: 1,
    /**
     * @instance
     * @public
     * @memberof BasicTypes.BasicTypes
     * @default 7
     * @type object
     */
    dynamicValueInteger: 7,
    config: {
        init: function () {
            this.integerValue = -1000;
            this.floatValue = Bridge.cast(2.3, Number);
            this.integerArray = [1, 2, 3];
            this.stringArray = ["1", "2", "3"];
            this.colorArray = [BasicTypes.Color.blue, BasicTypes.Color.green, BasicTypes.Color.red];
            this.colorValue = BasicTypes.Color.green;
            this.undefinedValue = undefined;
        }
    },
    /**
     * @instance
     * @public
     * @this BasicTypes.BasicTypes
     * @memberof BasicTypes.BasicTypes
     * @return  {void}        
     */
    voidFunction: function () {
    }
});

/**
 * @public
 * @class BasicTypes.Color
 */
Bridge.define('BasicTypes.Color', {
    statics: {
        /**
         * @static
         * @public
         * @memberof BasicTypes.Color
         * @constant
         * @default 0
         * @type BasicTypes.Color
         */
        red: 0,
        /**
         * @static
         * @public
         * @memberof BasicTypes.Color
         * @constant
         * @default 1
         * @type BasicTypes.Color
         */
        green: 1,
        /**
         * @static
         * @public
         * @memberof BasicTypes.Color
         * @constant
         * @default 2
         * @type BasicTypes.Color
         */
        blue: 2
    }
});

/**
 * @public
 * @class BasicTypes.Keywords
 */
Bridge.define('BasicTypes.Keywords', {
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "break"
     * @type string
     */
    $break: "break",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "case"
     * @type string
     */
    $case: "case",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "catch"
     * @type string
     */
    $catch: "catch",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "class"
     * @type string
     */
    $class: "class",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "const"
     * @type string
     */
    $const: "const",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "continue"
     * @type string
     */
    $continue: "continue",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "debugger"
     * @type string
     */
    $debugger: "debugger",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "default"
     * @type string
     */
    $default: "default",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "delete"
     * @type string
     */
    $delete: "delete",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "do"
     * @type string
     */
    $do: "do",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "else"
     * @type string
     */
    $else: "else",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "enum"
     * @type string
     */
    $enum: "enum",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "export"
     * @type string
     */
    $export: "export",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "extends"
     * @type string
     */
    $extends: "extends",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "false"
     * @type string
     */
    $false: "false",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "finally"
     * @type string
     */
    $finally: "finally",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "for"
     * @type string
     */
    $for: "for",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "function"
     * @type string
     */
    $function: "function",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "if"
     * @type string
     */
    $if: "if",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "import"
     * @type string
     */
    $import: "import",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "in"
     * @type string
     */
    $in: "in",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "instanceof"
     * @type string
     */
    $instanceof: "instanceof",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "new"
     * @type string
     */
    $new: "new",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "null"
     * @type string
     */
    $null: "null",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "return"
     * @type string
     */
    $return: "return",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "super"
     * @type string
     */
    $super: "super",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "switch"
     * @type string
     */
    $switch: "switch",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "this"
     * @type string
     */
    $this: "this",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "throw"
     * @type string
     */
    $throw: "throw",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "true"
     * @type string
     */
    $true: "true",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "try"
     * @type string
     */
    $try: "try",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "typeof"
     * @type string
     */
    $typeof: "typeof",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "var"
     * @type string
     */
    $var: "var",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "void"
     * @type string
     */
    $void: "void",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "while"
     * @type string
     */
    $while: "while",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "with"
     * @type string
     */
    $with: "with",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "as"
     * @type string
     */
    $as: "as",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "implements"
     * @type string
     */
    $implements: "implements",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "interface"
     * @type string
     */
    $interface: "interface",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "let"
     * @type string
     */
    $let: "let",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "package"
     * @type string
     */
    $package: "package",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "private"
     * @type string
     */
    $private: "private",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "protected"
     * @type string
     */
    $protected: "protected",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "public"
     * @type string
     */
    $public: "public",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "static"
     * @type string
     */
    $static: "static",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "yield"
     * @type string
     */
    $yield: "yield",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "any"
     * @type string
     */
    any: "any",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "boolean"
     * @type string
     */
    $boolean: "boolean",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "constructor"
     * @type string
     */
    $constructor$: "constructor",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "new constructor"
     * @type string
     */
    constructor$$1: "new constructor",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "declare"
     * @type string
     */
    declare: "declare",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "get"
     * @type string
     */
    get: "get",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "module"
     * @type string
     */
    module: "module",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "require"
     * @type string
     */
    require: "require",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "number"
     * @type string
     */
    number: "number",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "set"
     * @type string
     */
    set: "set",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "string"
     * @type string
     */
    string: "string",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "symbol"
     * @type string
     */
    symbol: "symbol",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "type"
     * @type string
     */
    type: "type",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "from"
     * @type string
     */
    from: "from",
    /**
     * @instance
     * @public
     * @memberof BasicTypes.Keywords
     * @default "of"
     * @type string
     */
    of: "of"
});

