/**
 * @memberof Functions
 * @callback Functions.Delegates.StringDelegateIntResult
 * @param   {string}    s    
 * @return  {number}         
 */

/**
 * @memberof Functions
 * @callback Functions.Delegates.StringDelegate
 * @param   {string}    s    
 * @return  {void}           
 */

/**
 * @memberof Functions
 * @callback Functions.Delegates.VoidDelegate
 * @return  {void}        
 */

/// <reference path="./bridge.d.ts" />

declare module Functions {
    /** @namespace Functions */
    
    /**
     * @public
     * @class Functions.DelegateClass
     */
    export interface DelegateClass {
        /**
         * @instance
         * @public
         * @memberof Functions.DelegateClass
         * @type Functions.Delegates.VoidDelegate
         */
        methodVoidDelegate: {(): void};
        /**
         * @instance
         * @public
         * @memberof Functions.DelegateClass
         * @type Functions.Delegates.StringDelegate
         */
        methodStringDelegate: {(s: string): void};
        /**
         * @instance
         * @public
         * @memberof Functions.DelegateClass
         * @type Functions.Delegates.StringDelegateIntResult
         */
        methodStringDelegateIntResult: {(s: string): number};
    }
    export interface DelegateClassFunc extends Function {
        prototype: DelegateClass;
        new (): DelegateClass;
    }
    var DelegateClass: DelegateClassFunc;

    /**
     * @abstract
     * @public
     * @class Functions.DelegateInterface
     */
    export interface DelegateInterface {
    }
    var DelegateInterface: Function;

    /**
     * @public
     * @class Functions.Delegates
     */
    export interface Delegates {
    }
    export interface DelegatesFunc extends Function {
        prototype: Delegates;
        new (): Delegates;
    }
    var Delegates: DelegatesFunc;

    /**
     * @public
     * @class Functions.Parameters
     */
    export interface Parameters {
        /**
         * @instance
         * @public
         * @this Functions.Parameters
         * @memberof Functions.Parameters
         * @param   {number}    i    
         * @return  {number}         
         */
        getSomething(i: number): number;
        /**
         * @instance
         * @public
         * @this Functions.Parameters
         * @memberof Functions.Parameters
         * @param   {Array.<number>}    numbers    
         * @return  {string}                       
         */
        join(numbers: number[]): string;
    }
    export interface ParametersFunc extends Function {
        prototype: Parameters;
        new (): Parameters;
    }
    var Parameters: ParametersFunc;

}
