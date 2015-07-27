/* global Bridge */

/** @namespace Generics */

/**
 * @public
 * @class Generics.GenericClass$1
 */
Bridge.define('Generics.GenericClass$1', function (T) { return {
    /**
     * @instance
     * @public
     * @memberof Generics.GenericClass$1
     * @type T
     */
    instance: null,
    /**
     * @instance
     * @public
     * @this Generics.GenericClass$1
     * @memberof Generics.GenericClass$1
     * @param   {T}       instance    
     * @return  {void}                
     */
    constructor: function (instance) {
        this.instance = instance;
    },
    /**
     * @instance
     * @public
     * @this Generics.GenericClass$1
     * @memberof Generics.GenericClass$1
     * @param   {T}    input    
     * @return  {T}             
     */
    getSomething: function (input) {
        return input;
    }
}; });

/**
 * @public
 * @class Generics.GenericINamedEntity$1
 */
Bridge.define('Generics.GenericINamedEntity$1', function (T) { return {
    /**
     * @instance
     * @public
     * @memberof Generics.GenericINamedEntity$1
     * @type T
     */
    instance: null,
    /**
     * @instance
     * @public
     * @this Generics.GenericINamedEntity$1
     * @memberof Generics.GenericINamedEntity$1
     * @param   {T}       instance    
     * @return  {void}                
     */
    constructor: function (instance) {
        this.instance = instance;
    },
    /**
     * @instance
     * @public
     * @this Generics.GenericINamedEntity$1
     * @memberof Generics.GenericINamedEntity$1
     * @param   {T}    input    
     * @return  {T}             
     */
    getSomething: function (input) {
        return input;
    }
}; });

/**
 * @public
 * @class Generics.GenericNamedEntity$1
 */
Bridge.define('Generics.GenericNamedEntity$1', function (T) { return {
    /**
     * @instance
     * @public
     * @memberof Generics.GenericNamedEntity$1
     * @type T
     */
    instance: null,
    /**
     * @instance
     * @public
     * @this Generics.GenericNamedEntity$1
     * @memberof Generics.GenericNamedEntity$1
     * @param   {T}       instance    
     * @return  {void}                
     */
    constructor: function (instance) {
        this.instance = instance;
    },
    /**
     * @instance
     * @public
     * @this Generics.GenericNamedEntity$1
     * @memberof Generics.GenericNamedEntity$1
     * @param   {T}    input    
     * @return  {T}             
     */
    getSomething: function (input) {
        return input;
    }
}; });

/**
 * @public
 * @class Generics.GenericNew$1
 */
Bridge.define('Generics.GenericNew$1', function (T) { return {
    /**
     * @instance
     * @public
     * @memberof Generics.GenericNew$1
     * @type T
     */
    instance: null,
    /**
     * @instance
     * @public
     * @this Generics.GenericNew$1
     * @memberof Generics.GenericNew$1
     * @param   {T}       instance    
     * @return  {void}                
     */
    constructor: function (instance) {
        this.instance = instance;
    },
    /**
     * @instance
     * @public
     * @this Generics.GenericNew$1
     * @memberof Generics.GenericNew$1
     * @param   {T}    input    
     * @return  {T}             
     */
    getSomething: function (input) {
        return input;
    }
}; });

/**
 * @public
 * @class Generics.GenericNewAndClass$1
 */
Bridge.define('Generics.GenericNewAndClass$1', function (T) { return {
    /**
     * @instance
     * @public
     * @memberof Generics.GenericNewAndClass$1
     * @type T
     */
    instance: null,
    /**
     * @instance
     * @public
     * @this Generics.GenericNewAndClass$1
     * @memberof Generics.GenericNewAndClass$1
     * @param   {T}       instance    
     * @return  {void}                
     */
    constructor: function (instance) {
        this.instance = instance;
    },
    /**
     * @instance
     * @public
     * @this Generics.GenericNewAndClass$1
     * @memberof Generics.GenericNewAndClass$1
     * @param   {T}    input    
     * @return  {T}             
     */
    getSomething: function (input) {
        return input;
    }
}; });

/**
 * @public
 * @class Generics.GenericStruct$1
 */
Bridge.define('Generics.GenericStruct$1', function (T) { return {
    /**
     * @instance
     * @public
     * @memberof Generics.GenericStruct$1
     * @type T
     */
    instance: null,
    /**
     * @instance
     * @public
     * @this Generics.GenericStruct$1
     * @memberof Generics.GenericStruct$1
     * @param   {T}       instance    
     * @return  {void}                
     */
    constructor: function (instance) {
        this.instance = instance;
    },
    /**
     * @instance
     * @public
     * @this Generics.GenericStruct$1
     * @memberof Generics.GenericStruct$1
     * @param   {T}    input    
     * @return  {T}             
     */
    getSomething: function (input) {
        return input;
    }
}; });

/**
 * @public
 * @class Generics.implementation
 */
Bridge.define('Generics.implementation', {
    statics: {
        config: {
            init: function () {
                this.simpleGenericInt = new Generics.SimpleGeneric$1(Bridge.Int)(1);
                this.simpleDoubleGenericIntString = new Generics.SimpleDoubleGeneric$2(Bridge.Int,String)("constructor");
                this.genericINamedEntity = new Generics.GenericINamedEntity$1(Generics.INamedEntity)(new Generics.NamedEntity());
                this.genericNamedEntity = new Generics.GenericNamedEntity$1(Generics.NamedEntity)(new Generics.NamedEntity());
                this.genericClassObject = new Generics.GenericClass$1(Object)(2);
                this.genericClassNamedEntity = new Generics.GenericClass$1(Generics.NamedEntity)(new Generics.NamedEntity());
                this.genericNew = new Generics.GenericNew$1(Generics.NewClass)(new Generics.NewClass());
                this.genericNewAndClass = new Generics.GenericNewAndClass$1(Generics.NewClass)(new Generics.NewClass());
            }
        }
    }
});

/**
 * @public
 * @class Generics.INamedEntity
 */
Bridge.define('Generics.INamedEntity', {
    config: {
        properties: {
            /**
             * @instance
             * @private
             * @this Generics.INamedEntity
             * @memberof Generics.INamedEntity
             * @function getName
             * @return  {string}        
             */
            /**
             * @instance
             * @private
             * @this Generics.INamedEntity
             * @memberof Generics.INamedEntity
             * @function setName
             * @param   {string}    value    
             * @return  {void}               
             */
            Name: null
        }
    }
});

/**
 * @public
 * @class Generics.NamedEntity
 * @augments Generics.INamedEntity
 */
Bridge.define('Generics.NamedEntity', {
    inherits: [Generics.INamedEntity],
    config: {
        properties: {
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
            Name$1: null
        }
    }
});

/**
 * @public
 * @class Generics.NewClass
 */
Bridge.define('Generics.NewClass', {
    /**
     * @instance
     * @public
     * @memberof Generics.NewClass
     * @type number
     */
    data: 0,
    /**
     * @instance
     * @public
     * @this Generics.NewClass
     * @memberof Generics.NewClass
     * @return  {void}        
     */
    constructor: function () {
        this.data = 30;
    }
});

/**
 * @public
 * @class Generics.SimpleDoubleGeneric$2
 */
Bridge.define('Generics.SimpleDoubleGeneric$2', function (T, K) { return {
    /**
     * @instance
     * @public
     * @memberof Generics.SimpleDoubleGeneric$2
     * @type T
     */
    instanceT: null,
    /**
     * @instance
     * @public
     * @memberof Generics.SimpleDoubleGeneric$2
     * @type K
     */
    instanceK: null,
    /**
     * @instance
     * @public
     * @this Generics.SimpleDoubleGeneric$2
     * @memberof Generics.SimpleDoubleGeneric$2
     * @return  {void}        
     */
    constructor: function () {
    },
    /**
     * @instance
     * @public
     * @this Generics.SimpleDoubleGeneric$2
     * @memberof Generics.SimpleDoubleGeneric$2
     * @param   {T}       instanceT    
     * @param   {K}       instanceK    
     * @return  {void}                 
     */
    constructor$1: function (instanceT, instanceK) {
        this.instanceT = instanceT;
        this.instanceK = instanceK;
    },
    /**
     * @instance
     * @public
     * @this Generics.SimpleDoubleGeneric$2
     * @memberof Generics.SimpleDoubleGeneric$2
     * @param   {T}    input    
     * @return  {T}             
     */
    getSomething: function (input) {
        return input;
    },
    /**
     * @instance
     * @public
     * @this Generics.SimpleDoubleGeneric$2
     * @memberof Generics.SimpleDoubleGeneric$2
     * @param   {K}    input    
     * @return  {K}             
     */
    getSomethingMore: function (input) {
        return input;
    }
}; });

/**
 * @public
 * @class Generics.SimpleGeneric$1
 */
Bridge.define('Generics.SimpleGeneric$1', function (T) { return {
    /**
     * @instance
     * @public
     * @memberof Generics.SimpleGeneric$1
     * @type T
     */
    instance: null,
    /**
     * @instance
     * @public
     * @this Generics.SimpleGeneric$1
     * @memberof Generics.SimpleGeneric$1
     * @param   {T}       instance    
     * @return  {void}                
     */
    constructor: function (instance) {
        this.instance = instance;
    },
    /**
     * @instance
     * @public
     * @this Generics.SimpleGeneric$1
     * @memberof Generics.SimpleGeneric$1
     * @param   {T}    input    
     * @return  {T}             
     */
    getSomething: function (input) {
        return input;
    }
}; });

