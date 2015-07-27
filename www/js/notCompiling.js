/* global Bridge */

/**
 * @class ClientTestLibrary.Class59
 */
Bridge.define('ClientTestLibrary.Class59', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Class59
         * @memberof ClientTestLibrary.Class59
         * @return  {void}        
         */
        method1: function () {
        }
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Class59
     * @memberof ClientTestLibrary.Class59
     * @param   {ClientTestLibrary.Class59.Aux1}    d    
     * @return  {void}                                   
     */
    method1: function (d) {
    }
});

/**
 * @public
 * @class ClientTestLibrary.Class59.Aux1
 */
Bridge.define('ClientTestLibrary.Class59.Aux1');

/**
 * @class ClientTestLibrary.Class64
 */
Bridge.define('ClientTestLibrary.Class64', {
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Class64
     * @memberof ClientTestLibrary.Class64
     * @return  {void}        
     */
    constructor: function () {
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Class64
     * @memberof ClientTestLibrary.Class64
     * @param   {ClientTestLibrary.Class64.Aux1}    related    
     * @return  {void}                                         
     */
    constructor$1: function (related) {
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Class64
     * @memberof ClientTestLibrary.Class64
     * @return  {void}        
     */
    test: function () {
        var aux = new ClientTestLibrary.Class64.Aux1();
        new ClientTestLibrary.Class64("constructor$1", aux);
    }
});

/**
 * @public
 * @class ClientTestLibrary.Class64.Aux1
 */
Bridge.define('ClientTestLibrary.Class64.Aux1');

/**
 * @class ClientTestLibrary.Class65_1
 */
Bridge.define('ClientTestLibrary.Class65_1');

/**
 * @public
 * @class ClientTestLibrary.Class65_1.Nested
 */
Bridge.define('ClientTestLibrary.Class65_1.Nested');

/**
 * @class ClientTestLibrary.Class65_2
 * @augments ClientTestLibrary.Class65_1.Nested
 */
Bridge.define('ClientTestLibrary.Class65_2', {
    inherits: [ClientTestLibrary.Class65_1.Nested]
});

/**
 * @class ClientTestLibrary.Class84
 */
Bridge.define('ClientTestLibrary.Class84', {
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Class84
     * @memberof ClientTestLibrary.Class84
     * @return  {void}        
     */
    test1: function () {
        try {
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
        }
    }
});

/**
 * @public
 * @class ClientTestLibrary.Rectangle66
 */
Bridge.define('ClientTestLibrary.Rectangle66', {
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Rectangle66
     * @memberof ClientTestLibrary.Rectangle66
     * @param   {number}    x1    
     * @return  {void}            
     */
    constructor$1: function (x1) {
        (new ClientTestLibrary.Rectangle66("constructor")).$clone(this);
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Rectangle66
     * @memberof ClientTestLibrary.Rectangle66
     * @param   {number}    x1    
     * @param   {number}    x2    
     * @return  {void}            
     */
    constructor$2: function (x1, x2) {
    },
    constructor: function () {
    },
    $clone: function (to) { return this; }
});

