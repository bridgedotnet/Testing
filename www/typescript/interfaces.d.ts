/// <reference path="./bridge.d.ts" />

declare module Interfaces {
    /** @namespace Interfaces */
    
    /**
     * @public
     * @class Interfaces.Class2
     * @augments Interfaces.Class1
     * @implements  Interfaces.Interface2
     */
    export interface Class2 extends Interfaces.Class1,Interfaces.Interface2 {
        /**
         * @instance
         * @public
         * @this Interfaces.Class2
         * @memberof Interfaces.Class2
         * @return  {void}        
         */
        method1(): void;
        /**
         * @instance
         * @public
         * @this Interfaces.Class2
         * @memberof Interfaces.Class2
         * @param   {string}    s    
         * @return  {void}           
         */
        method2(s: string): void;
        /**
         * @instance
         * @public
         * @this Interfaces.Class2
         * @memberof Interfaces.Class2
         * @return  {number}        
         */
        method3(): number;
        /**
         * @instance
         * @public
         * @this Interfaces.Class2
         * @memberof Interfaces.Class2
         * @param   {Interfaces.Interface1}    i    
         * @return  {boolean}                       
         */
        method4(i: Interfaces.Interface1): boolean;
    }
    export interface Class2Func extends Function {
        prototype: Class2;
        new (): Class2;
    }
    var Class2: Class2Func;

    /**
     * @public
     * @class Interfaces.Class6
     * @implements  Interfaces.Interface6
     */
    export interface Class6 extends Interfaces.Interface6 {
        /**
         * @instance
         * @public
         * @this Interfaces.Class6
         * @memberof Interfaces.Class6
         * @function getProperty$3
         * @return  {number}        
         */
        /**
         * @instance
         * @public
         * @this Interfaces.Class6
         * @memberof Interfaces.Class6
         * @function setProperty$3
         * @param   {number}    value    
         * @return  {void}               
         */
        getProperty$3(): number;
        /**
         * @instance
         * @public
         * @this Interfaces.Class6
         * @memberof Interfaces.Class6
         * @function getProperty$3
         * @return  {number}        
         */
        /**
         * @instance
         * @public
         * @this Interfaces.Class6
         * @memberof Interfaces.Class6
         * @function setProperty$3
         * @param   {number}    value    
         * @return  {void}               
         */
        setProperty$3(value: number): void;
        /**
         * @instance
         * @public
         * @this Interfaces.Class6
         * @memberof Interfaces.Class6
         * @function getMethodProperty
         * @return  {number}        
         */
        /**
         * @instance
         * @public
         * @this Interfaces.Class6
         * @memberof Interfaces.Class6
         * @function setMethodProperty
         * @param   {number}    value    
         * @return  {void}               
         */
        getMethodProperty(): number;
        /**
         * @instance
         * @public
         * @this Interfaces.Class6
         * @memberof Interfaces.Class6
         * @function getMethodProperty
         * @return  {number}        
         */
        /**
         * @instance
         * @public
         * @this Interfaces.Class6
         * @memberof Interfaces.Class6
         * @function setMethodProperty
         * @param   {number}    value    
         * @return  {void}               
         */
        setMethodProperty(value: number): void;
        /**
         * @instance
         * @public
         * @this Interfaces.Class6
         * @memberof Interfaces.Class6
         * @return  {number}        
         */
        getProperty(): number;
        /**
         * @instance
         * @public
         * @this Interfaces.Class6
         * @memberof Interfaces.Class6
         * @param   {string}    s    
         * @return  {void}           
         */
        setProperty$1(s: string): void;
        /**
         * @instance
         * @public
         * @this Interfaces.Class6
         * @memberof Interfaces.Class6
         * @param   {number}    i    
         * @return  {void}           
         */
        setProperty(i: number): void;
    }
    export interface Class6Func extends Function {
        prototype: Class6;
        new (): Class6;
    }
    var Class6: Class6Func;

    /**
     * @abstract
     * @public
     * @class Interfaces.Interface6
     */
    export interface Interface6 {
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface6
         * @memberof Interfaces.Interface6
         * @function getProperty$3
         * @return  {number}        
         */
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface6
         * @memberof Interfaces.Interface6
         * @function setProperty$3
         * @param   {number}    value    
         * @return  {void}               
         */
        getProperty$3(): number;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface6
         * @memberof Interfaces.Interface6
         * @function getProperty$3
         * @return  {number}        
         */
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface6
         * @memberof Interfaces.Interface6
         * @function setProperty$3
         * @param   {number}    value    
         * @return  {void}               
         */
        setProperty$3(value: number): void;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface6
         * @memberof Interfaces.Interface6
         * @return  {number}        
         */
        getProperty(): number;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface6
         * @memberof Interfaces.Interface6
         * @param   {string}    s    
         * @return  {void}           
         */
        setProperty$1(s: string): void;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface6
         * @memberof Interfaces.Interface6
         * @param   {number}    i    
         * @return  {void}           
         */
        setProperty(i: number): void;
    }
    var Interface6: Function;

    /**
     * @public
     * @class Interfaces.Class4
     * @implements  Interfaces.Interface4
     */
    export interface Class4 extends Interfaces.Interface4 {
        /**
         * @instance
         * @public
         * @this Interfaces.Class4
         * @memberof Interfaces.Class4
         * @param   {System.Boolean&}    b    
         * @return  {void}                    
         */
        method6(b: {v: boolean}): void;
        /**
         * @instance
         * @public
         * @this Interfaces.Class4
         * @memberof Interfaces.Class4
         * @param   {number}             i    
         * @param   {System.Boolean&}    b    
         * @return  {void}                    
         */
        method7(i: number, b: {v: boolean}): void;
        /**
         * @instance
         * @public
         * @this Interfaces.Class4
         * @memberof Interfaces.Class4
         * @param   {System.String&}    s    
         * @return  {void}                   
         */
        method8(s: {v: string}): void;
        /**
         * @instance
         * @public
         * @this Interfaces.Class4
         * @memberof Interfaces.Class4
         * @param   {number}            i    
         * @param   {System.String&}    s    
         * @return  {void}                   
         */
        method9(i: number, s: {v: string}): void;
        /**
         * @instance
         * @public
         * @this Interfaces.Class4
         * @memberof Interfaces.Class4
         * @param   {number}             i    
         * @param   {System.Boolean&}    b    
         * @param   {System.String&}     s    
         * @return  {void}                    
         */
        method10(i: number, b: {v: boolean}, s: {v: string}): void;
    }
    export interface Class4Func extends Function {
        prototype: Class4;
        new (): Class4;
    }
    var Class4: Class4Func;

    /**
     * @abstract
     * @public
     * @class Interfaces.Interface4
     */
    export interface Interface4 {
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface4
         * @memberof Interfaces.Interface4
         * @param   {System.Boolean&}    b    
         * @return  {void}                    
         */
        method6(b: {v: boolean}): void;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface4
         * @memberof Interfaces.Interface4
         * @param   {number}             i    
         * @param   {System.Boolean&}    b    
         * @return  {void}                    
         */
        method7(i: number, b: {v: boolean}): void;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface4
         * @memberof Interfaces.Interface4
         * @param   {System.String&}    s    
         * @return  {void}                   
         */
        method8(s: {v: string}): void;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface4
         * @memberof Interfaces.Interface4
         * @param   {number}            i    
         * @param   {System.String&}    s    
         * @return  {void}                   
         */
        method9(i: number, s: {v: string}): void;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface4
         * @memberof Interfaces.Interface4
         * @param   {number}             i    
         * @param   {System.Boolean&}    b    
         * @param   {System.String&}     s    
         * @return  {void}                    
         */
        method10(i: number, b: {v: boolean}, s: {v: string}): void;
    }
    var Interface4: Function;

    /**
     * @abstract
     * @public
     * @class Interfaces.Interface3
     * @implements  Interfaces.Interface2
     */
    export interface Interface3 extends Interfaces.Interface2 {
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface3
         * @memberof Interfaces.Interface3
         * @param   {Interfaces.Interface3}    i    
         * @return  {Interfaces.Interface2}         
         */
        method5(i: Interfaces.Interface3): Interfaces.Interface2;
    }
    var Interface3: Function;

    /**
     * @public
     * @class Interfaces.Class1
     * @implements  Interfaces.Interface1
     */
    export interface Class1 extends Interfaces.Interface1 {
        /**
         * @instance
         * @public
         * @memberof Interfaces.Class1
         * @default 200
         * @type number
         */
        field: number;
        /**
         * @instance
         * @public
         * @this Interfaces.Class1
         * @memberof Interfaces.Class1
         * @function getProperty
         * @return  {number}        
         */
        /**
         * @instance
         * @public
         * @this Interfaces.Class1
         * @memberof Interfaces.Class1
         * @function setProperty
         * @param   {number}    value    
         * @return  {void}               
         */
        getProperty(): number;
        /**
         * @instance
         * @public
         * @this Interfaces.Class1
         * @memberof Interfaces.Class1
         * @function getProperty
         * @return  {number}        
         */
        /**
         * @instance
         * @public
         * @this Interfaces.Class1
         * @memberof Interfaces.Class1
         * @function setProperty
         * @param   {number}    value    
         * @return  {void}               
         */
        setProperty(value: number): void;
    }
    export interface Class1Func extends Function {
        prototype: Class1;
        new (): Class1;
    }
    var Class1: Class1Func;

    /**
     * @abstract
     * @public
     * @class Interfaces.Interface61
     */
    export interface Interface61 {
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface61
         * @memberof Interfaces.Interface61
         * @function getProperty
         * @return  {number}        
         */
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface61
         * @memberof Interfaces.Interface61
         * @function setProperty
         * @param   {number}    value    
         * @return  {void}               
         */
        getProperty(): number;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface61
         * @memberof Interfaces.Interface61
         * @function getProperty
         * @return  {number}        
         */
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface61
         * @memberof Interfaces.Interface61
         * @function setProperty
         * @param   {number}    value    
         * @return  {void}               
         */
        setProperty(value: number): void;
    }
    var Interface61: Function;

    /**
     * @abstract
     * @public
     * @class Interfaces.Interface2
     * @implements  Interfaces.Interface1
     */
    export interface Interface2 extends Interfaces.Interface1 {
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface2
         * @memberof Interfaces.Interface2
         * @return  {void}        
         */
        method1(): void;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface2
         * @memberof Interfaces.Interface2
         * @param   {string}    i    
         * @return  {void}           
         */
        method2(i: string): void;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface2
         * @memberof Interfaces.Interface2
         * @return  {number}        
         */
        method3(): number;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface2
         * @memberof Interfaces.Interface2
         * @param   {Interfaces.Interface1}    i    
         * @return  {boolean}                       
         */
        method4(i: Interfaces.Interface1): boolean;
    }
    var Interface2: Function;

    /**
     * @abstract
     * @public
     * @class Interfaces.Interface1
     */
    export interface Interface1 {
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface1
         * @memberof Interfaces.Interface1
         * @function getProperty
         * @return  {number}        
         */
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface1
         * @memberof Interfaces.Interface1
         * @function setProperty
         * @param   {number}    value    
         * @return  {void}               
         */
        getProperty(): number;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface1
         * @memberof Interfaces.Interface1
         * @function getProperty
         * @return  {number}        
         */
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface1
         * @memberof Interfaces.Interface1
         * @function setProperty
         * @param   {number}    value    
         * @return  {void}               
         */
        setProperty(value: number): void;
    }
    var Interface1: Function;

    /**
     * @public
     * @class Interfaces.Class3
     * @augments Interfaces.Class2
     * @implements  Interfaces.Interface3
     */
    export interface Class3 extends Interfaces.Class2,Interfaces.Interface3 {
        /**
         * @instance
         * @public
         * @this Interfaces.Class3
         * @memberof Interfaces.Class3
         * @param   {Interfaces.Interface3}    i    
         * @return  {Interfaces.Interface2}         
         */
        method5(i: Interfaces.Interface3): Interfaces.Interface2;
    }
    export interface Class3Func extends Function {
        prototype: Class3;
        new (): Class3;
    }
    var Class3: Class3Func;

    /**
     * @abstract
     * @public
     * @class Interfaces.Interface62
     */
    export interface Interface62 {
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface62
         * @memberof Interfaces.Interface62
         * @return  {number}        
         */
        getProperty(): number;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface62
         * @memberof Interfaces.Interface62
         * @param   {string}    s    
         * @return  {void}           
         */
        setProperty$1(s: string): void;
        /**
         * @instance
         * @abstract
         * @public
         * @this Interfaces.Interface62
         * @memberof Interfaces.Interface62
         * @param   {number}    i    
         * @return  {void}           
         */
        setProperty(i: number): void;
    }
    var Interface62: Function;

}
