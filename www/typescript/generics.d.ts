/// <reference path="./bridge.d.ts" />

declare module Generics {
    /** @namespace Generics */
    
    /**
     * @public
     * @class Generics.NamedEntity
     * @augments Generics.INamedEntity
     */
    export interface NamedEntity extends Generics.INamedEntity {
        /**
         * @instance
         * @public
         * @this Generics.NamedEntity
         * @memberof Generics.NamedEntity
         * @function getName$1
         * @return  {string}        
         */
        /**
         * @instance
         * @public
         * @this Generics.NamedEntity
         * @memberof Generics.NamedEntity
         * @function setName$1
         * @param   {string}    value    
         * @return  {void}               
         */
        getName$1(): string;
        /**
         * @instance
         * @public
         * @this Generics.NamedEntity
         * @memberof Generics.NamedEntity
         * @function getName$1
         * @return  {string}        
         */
        /**
         * @instance
         * @public
         * @this Generics.NamedEntity
         * @memberof Generics.NamedEntity
         * @function setName$1
         * @param   {string}    value    
         * @return  {void}               
         */
        setName$1(value: string): void;
    }
    export interface NamedEntityFunc extends Function {
        prototype: NamedEntity;
        new (): NamedEntity;
    }
    var NamedEntity: NamedEntityFunc;

    /**
     * @public
     * @class Generics.SimpleGeneric$1
     */
    export interface SimpleGeneric$1<T> {
        /**
         * @instance
         * @public
         * @memberof Generics.SimpleGeneric$1
         * @type T
         */
        instance: T;
        /**
         * @instance
         * @public
         * @this Generics.SimpleGeneric$1
         * @memberof Generics.SimpleGeneric$1
         * @param   {T}    input    
         * @return  {T}             
         */
        getSomething(input: T): T;
    }
    export function SimpleGeneric$1<T>(T: {prototype: T}): {
        prototype: SimpleGeneric$1<T>;
        /**
         * @instance
         * @public
         * @this Generics.SimpleGeneric$1
         * @memberof Generics.SimpleGeneric$1
         * @param   {T}       instance    
         * @return  {void}                
         */
        new (instance: T): SimpleGeneric$1<T>;
    }

    /**
     * @public
     * @class Generics.SimpleDoubleGeneric$2
     */
    export interface SimpleDoubleGeneric$2<T,K> {
        /**
         * @instance
         * @public
         * @memberof Generics.SimpleDoubleGeneric$2
         * @type T
         */
        instanceT: T;
        /**
         * @instance
         * @public
         * @memberof Generics.SimpleDoubleGeneric$2
         * @type K
         */
        instanceK: K;
        /**
         * @instance
         * @public
         * @this Generics.SimpleDoubleGeneric$2
         * @memberof Generics.SimpleDoubleGeneric$2
         * @param   {T}    input    
         * @return  {T}             
         */
        getSomething(input: T): T;
        /**
         * @instance
         * @public
         * @this Generics.SimpleDoubleGeneric$2
         * @memberof Generics.SimpleDoubleGeneric$2
         * @param   {K}    input    
         * @return  {K}             
         */
        getSomethingMore(input: K): K;
    }
    export function SimpleDoubleGeneric$2<T,K>(T: {prototype: T}, K: {prototype: K}): {
        prototype: SimpleDoubleGeneric$2<T,K>;
        /**
         * @instance
         * @public
         * @this Generics.SimpleDoubleGeneric$2
         * @memberof Generics.SimpleDoubleGeneric$2
         * @return  {void}        
         */
        $constructor: {
            new (): SimpleDoubleGeneric$2<T,K>
        };
        /**
         * @instance
         * @public
         * @this Generics.SimpleDoubleGeneric$2
         * @memberof Generics.SimpleDoubleGeneric$2
         * @param   {T}       instanceT    
         * @param   {K}       instanceK    
         * @return  {void}                 
         */
        constructor$1: {
            new (instanceT: T, instanceK: K): SimpleDoubleGeneric$2<T,K>
        };
    }

    /**
     * @public
     * @class Generics.NewClass
     */
    export interface NewClass {
        /**
         * @instance
         * @public
         * @memberof Generics.NewClass
         * @type number
         */
        data: number;
    }
    export interface NewClassFunc extends Function {
        prototype: NewClass;
        /**
         * @instance
         * @public
         * @this Generics.NewClass
         * @memberof Generics.NewClass
         * @return  {void}        
         */
        new (): NewClass;
    }
    var NewClass: NewClassFunc;

    /**
     * @public
     * @class Generics.INamedEntity
     */
    export interface INamedEntity {
    }
    export interface INamedEntityFunc extends Function {
        prototype: INamedEntity;
        new (): INamedEntity;
    }
    var INamedEntity: INamedEntityFunc;

    /**
     * @public
     * @class Generics.implementation
     */
    export interface implementation {
    }
    export interface implementationFunc extends Function {
        prototype: implementation;
        new (): implementation;
        /**
         * @static
         * @public
         * @memberof Generics.implementation
         * @type Generics.SimpleGeneric$1
         */
        simpleGenericInt: Generics.SimpleGeneric$1<number>;
        /**
         * @static
         * @public
         * @memberof Generics.implementation
         * @type Generics.SimpleDoubleGeneric$2
         */
        simpleDoubleGenericIntString: Generics.SimpleDoubleGeneric$2<number,string>;
        /**
         * @static
         * @public
         * @memberof Generics.implementation
         * @type Generics.GenericINamedEntity$1
         */
        genericINamedEntity: Generics.GenericINamedEntity$1<Generics.INamedEntity>;
        /**
         * @static
         * @public
         * @memberof Generics.implementation
         * @type Generics.GenericNamedEntity$1
         */
        genericNamedEntity: Generics.GenericNamedEntity$1<Generics.NamedEntity>;
        /**
         * @static
         * @public
         * @memberof Generics.implementation
         * @type Generics.GenericClass$1
         */
        genericClassObject: Generics.GenericClass$1<Object>;
        /**
         * @static
         * @public
         * @memberof Generics.implementation
         * @type Generics.GenericClass$1
         */
        genericClassNamedEntity: Generics.GenericClass$1<Generics.NamedEntity>;
        /**
         * @static
         * @public
         * @memberof Generics.implementation
         * @type Generics.GenericNew$1
         */
        genericNew: Generics.GenericNew$1<Generics.NewClass>;
        /**
         * @static
         * @public
         * @memberof Generics.implementation
         * @type Generics.GenericNewAndClass$1
         */
        genericNewAndClass: Generics.GenericNewAndClass$1<Generics.NewClass>;
    }
    var implementation: implementationFunc;

    /**
     * @public
     * @class Generics.GenericNewAndClass$1
     */
    export interface GenericNewAndClass$1<T> {
        /**
         * @instance
         * @public
         * @memberof Generics.GenericNewAndClass$1
         * @type T
         */
        instance: T;
        /**
         * @instance
         * @public
         * @this Generics.GenericNewAndClass$1
         * @memberof Generics.GenericNewAndClass$1
         * @param   {T}    input    
         * @return  {T}             
         */
        getSomething(input: T): T;
    }
    export function GenericNewAndClass$1<T>(T: {prototype: T}): {
        prototype: GenericNewAndClass$1<T>;
        /**
         * @instance
         * @public
         * @this Generics.GenericNewAndClass$1
         * @memberof Generics.GenericNewAndClass$1
         * @param   {T}       instance    
         * @return  {void}                
         */
        new (instance: T): GenericNewAndClass$1<T>;
    }

    /**
     * @public
     * @class Generics.GenericNew$1
     */
    export interface GenericNew$1<T> {
        /**
         * @instance
         * @public
         * @memberof Generics.GenericNew$1
         * @type T
         */
        instance: T;
        /**
         * @instance
         * @public
         * @this Generics.GenericNew$1
         * @memberof Generics.GenericNew$1
         * @param   {T}    input    
         * @return  {T}             
         */
        getSomething(input: T): T;
    }
    export function GenericNew$1<T>(T: {prototype: T}): {
        prototype: GenericNew$1<T>;
        /**
         * @instance
         * @public
         * @this Generics.GenericNew$1
         * @memberof Generics.GenericNew$1
         * @param   {T}       instance    
         * @return  {void}                
         */
        new (instance: T): GenericNew$1<T>;
    }

    /**
     * @public
     * @class Generics.GenericNamedEntity$1
     */
    export interface GenericNamedEntity$1<T> {
        /**
         * @instance
         * @public
         * @memberof Generics.GenericNamedEntity$1
         * @type T
         */
        instance: T;
        /**
         * @instance
         * @public
         * @this Generics.GenericNamedEntity$1
         * @memberof Generics.GenericNamedEntity$1
         * @param   {T}    input    
         * @return  {T}             
         */
        getSomething(input: T): T;
    }
    export function GenericNamedEntity$1<T>(T: {prototype: T}): {
        prototype: GenericNamedEntity$1<T>;
        /**
         * @instance
         * @public
         * @this Generics.GenericNamedEntity$1
         * @memberof Generics.GenericNamedEntity$1
         * @param   {T}       instance    
         * @return  {void}                
         */
        new (instance: T): GenericNamedEntity$1<T>;
    }

    /**
     * @public
     * @class Generics.GenericINamedEntity$1
     */
    export interface GenericINamedEntity$1<T> {
        /**
         * @instance
         * @public
         * @memberof Generics.GenericINamedEntity$1
         * @type T
         */
        instance: T;
        /**
         * @instance
         * @public
         * @this Generics.GenericINamedEntity$1
         * @memberof Generics.GenericINamedEntity$1
         * @param   {T}    input    
         * @return  {T}             
         */
        getSomething(input: T): T;
    }
    export function GenericINamedEntity$1<T>(T: {prototype: T}): {
        prototype: GenericINamedEntity$1<T>;
        /**
         * @instance
         * @public
         * @this Generics.GenericINamedEntity$1
         * @memberof Generics.GenericINamedEntity$1
         * @param   {T}       instance    
         * @return  {void}                
         */
        new (instance: T): GenericINamedEntity$1<T>;
    }

    /**
     * @public
     * @class Generics.GenericClass$1
     */
    export interface GenericClass$1<T> {
        /**
         * @instance
         * @public
         * @memberof Generics.GenericClass$1
         * @type T
         */
        instance: T;
        /**
         * @instance
         * @public
         * @this Generics.GenericClass$1
         * @memberof Generics.GenericClass$1
         * @param   {T}    input    
         * @return  {T}             
         */
        getSomething(input: T): T;
    }
    export function GenericClass$1<T>(T: {prototype: T}): {
        prototype: GenericClass$1<T>;
        /**
         * @instance
         * @public
         * @this Generics.GenericClass$1
         * @memberof Generics.GenericClass$1
         * @param   {T}       instance    
         * @return  {void}                
         */
        new (instance: T): GenericClass$1<T>;
    }

    /**
     * @public
     * @class Generics.GenericStruct$1
     */
    export interface GenericStruct$1<T> {
        /**
         * @instance
         * @public
         * @memberof Generics.GenericStruct$1
         * @type T
         */
        instance: T;
        /**
         * @instance
         * @public
         * @this Generics.GenericStruct$1
         * @memberof Generics.GenericStruct$1
         * @param   {T}    input    
         * @return  {T}             
         */
        getSomething(input: T): T;
    }
    export function GenericStruct$1<T>(T: {prototype: T}): {
        prototype: GenericStruct$1<T>;
        /**
         * @instance
         * @public
         * @this Generics.GenericStruct$1
         * @memberof Generics.GenericStruct$1
         * @param   {T}       instance    
         * @return  {void}                
         */
        new (instance: T): GenericStruct$1<T>;
    }

}
