/* global Bridge */

/** @namespace Misc.A */

/**
 * @public
 * @class Misc.A.Class1
 */
Bridge.define('Misc.A.Class1', {
    /**
     * @instance
     * @public
     * @this Misc.A.Class1
     * @memberof Misc.A.Class1
     * @param   {number}    i    
     * @return  {number}         
     */
    getInt: function (i) {
        return i;
    }
});

/**
 * @class Misc.A.EnumTest
 */
Bridge.define('Misc.A.EnumTest', {
    /**
     * @instance
     * @public
     * @this Misc.A.EnumTest
     * @memberof Misc.A.EnumTest
     * @param   {number}    m    
     * @return  {number}         
     */
    doSomething: function (m) {
        return m;
    }
});

/**
 * @public
 * @class number
 */
Bridge.define('Misc.A.EnumTest.EnumA', {
    statics: {
        /**
         * @static
         * @public
         * @memberof number
         * @constant
         * @default 0
         * @type number
         */
        m1: 0,
        /**
         * @static
         * @public
         * @memberof number
         * @constant
         * @default 1
         * @type number
         */
        m2: 1
    }
});