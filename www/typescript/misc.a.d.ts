/// <reference path="./bridge.d.ts" />

declare module Misc.A {
    /** @namespace Misc.A */
    
    /**
     * @class Misc.A.EnumTest
     */
    export interface EnumTest {
        /**
         * @instance
         * @public
         * @this Misc.A.EnumTest
         * @memberof Misc.A.EnumTest
         * @param   {number}    m    
         * @return  {number}         
         */
        doSomething(m: number): number;
    }
    export interface EnumTestFunc extends Function {
        prototype: EnumTest;
        EnumA: EnumTest.EnumAFunc;
        new (): EnumTest;
    }
    var EnumTest: EnumTestFunc;
    module EnumTest {
        /**
         * @public
         * @class number
         */
        export interface EnumA {
        }
        export interface EnumAFunc extends Function {
            prototype: EnumA;
            /**
             * @static
             * @public
             * @memberof number
             * @constant
             * @default 0
             * @type number
             */
            m1: number;
            /**
             * @static
             * @public
             * @memberof number
             * @constant
             * @default 1
             * @type number
             */
            m2: number;
        }
    }

    /**
     * @public
     * @class Misc.A.Class1
     */
    export interface Class1 {
        /**
         * @instance
         * @public
         * @this Misc.A.Class1
         * @memberof Misc.A.Class1
         * @param   {number}    i    
         * @return  {number}         
         */
        getInt(i: number): number;
    }
    export interface Class1Func extends Function {
        prototype: Class1;
        new (): Class1;
    }
    var Class1: Class1Func;

}
