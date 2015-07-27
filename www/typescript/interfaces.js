/* global Bridge */

/** @namespace Interfaces */

/**
 * @abstract
 * @public
 * @class Interfaces.Interface1
 */
Bridge.define('Interfaces.Interface1');

/**
 * @abstract
 * @public
 * @class Interfaces.Interface2
 * @implements  Interfaces.Interface1
 */
Bridge.define('Interfaces.Interface2', {
    inherits: [Interfaces.Interface1]
});

/**
 * @abstract
 * @public
 * @class Interfaces.Interface3
 * @implements  Interfaces.Interface2
 */
Bridge.define('Interfaces.Interface3', {
    inherits: [Interfaces.Interface2]
});

/**
 * @public
 * @class Interfaces.Class1
 * @implements  Interfaces.Interface1
 */
Bridge.define('Interfaces.Class1', {
    inherits: [Interfaces.Interface1],
    /**
     * @instance
     * @public
     * @memberof Interfaces.Class1
     * @default 200
     * @type number
     */
    field: 200,
    /**
     * @instance
     * @private
     * @memberof Interfaces.Class1
     * @default 100
     * @type number
     */
    property: 100,
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
    getProperty: function () {
        return this.property;
    },
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
    setProperty: function (value) {
        this.property = value;
    }
});

/**
 * @public
 * @class Interfaces.Class2
 * @augments Interfaces.Class1
 * @implements  Interfaces.Interface2
 */
Bridge.define('Interfaces.Class2', {
    inherits: [Interfaces.Class1,Interfaces.Interface2],
    /**
     * @instance
     * @public
     * @this Interfaces.Class2
     * @memberof Interfaces.Class2
     * @return  {void}        
     */
    method1: function () {
        this.field = 1;
        this.setProperty(2);
    },
    /**
     * @instance
     * @public
     * @this Interfaces.Class2
     * @memberof Interfaces.Class2
     * @param   {string}    s    
     * @return  {void}           
     */
    method2: function (s) {
        this.field = s.length;
    },
    /**
     * @instance
     * @public
     * @this Interfaces.Class2
     * @memberof Interfaces.Class2
     * @return  {number}        
     */
    method3: function () {
        return this.field;
    },
    /**
     * @instance
     * @public
     * @this Interfaces.Class2
     * @memberof Interfaces.Class2
     * @param   {Interfaces.Interface1}    i    
     * @return  {boolean}                       
     */
    method4: function (i) {
        this.field = i.getProperty();

        return true;
    }
});

/**
 * @public
 * @class Interfaces.Class3
 * @augments Interfaces.Class2
 * @implements  Interfaces.Interface3
 */
Bridge.define('Interfaces.Class3', {
    inherits: [Interfaces.Class2,Interfaces.Interface3],
    /**
     * @instance
     * @public
     * @this Interfaces.Class3
     * @memberof Interfaces.Class3
     * @param   {Interfaces.Interface3}    i    
     * @return  {Interfaces.Interface2}         
     */
    method5: function (i) {
        return i;
    }
});

/**
 * @abstract
 * @public
 * @class Interfaces.Interface4
 */
Bridge.define('Interfaces.Interface4');

/**
 * @public
 * @class Interfaces.Class4
 * @implements  Interfaces.Interface4
 */
Bridge.define('Interfaces.Class4', {
    inherits: [Interfaces.Interface4],
    /**
     * @instance
     * @public
     * @this Interfaces.Class4
     * @memberof Interfaces.Class4
     * @param   {System.Boolean&}    b    
     * @return  {void}                    
     */
    method6: function (b) {
        b.v = true;
    },
    /**
     * @instance
     * @public
     * @this Interfaces.Class4
     * @memberof Interfaces.Class4
     * @param   {number}             i    
     * @param   {System.Boolean&}    b    
     * @return  {void}                    
     */
    method7: function (i, b) {
        b.v = true;
    },
    /**
     * @instance
     * @public
     * @this Interfaces.Class4
     * @memberof Interfaces.Class4
     * @param   {System.String&}    s    
     * @return  {void}                   
     */
    method8: function (s) {
        s.v = s.v + "Method8";
    },
    /**
     * @instance
     * @public
     * @this Interfaces.Class4
     * @memberof Interfaces.Class4
     * @param   {number}            i    
     * @param   {System.String&}    s    
     * @return  {void}                   
     */
    method9: function (i, s) {
        s.v = s.v + i;
    },
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
    method10: function (i, b, s) {
        b.v = true;
        s.v = s.v + i;
    }
});

/**
 * @abstract
 * @public
 * @class Interfaces.Interface6
 */
Bridge.define('Interfaces.Interface6');

/**
 * @public
 * @class Interfaces.Class6
 * @implements  Interfaces.Interface6
 */
Bridge.define('Interfaces.Class6', {
    inherits: [Interfaces.Interface6],
    config: {
        properties: {
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
            Property$3: 0,
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
            MethodProperty: 0
        }
    },
    /**
     * @instance
     * @public
     * @this Interfaces.Class6
     * @memberof Interfaces.Class6
     * @return  {number}        
     */
    getProperty: function () {
        return this.getMethodProperty();
    },
    /**
     * @instance
     * @public
     * @this Interfaces.Class6
     * @memberof Interfaces.Class6
     * @param   {string}    s    
     * @return  {void}           
     */
    setProperty$1: function (s) {
        this.setMethodProperty(s.length);
    },
    /**
     * @instance
     * @public
     * @this Interfaces.Class6
     * @memberof Interfaces.Class6
     * @param   {number}    i    
     * @return  {void}           
     */
    setProperty: function (i) {
        this.setMethodProperty(i);
    }
});

/**
 * @abstract
 * @public
 * @class Interfaces.Interface61
 */
Bridge.define('Interfaces.Interface61');

/**
 * @abstract
 * @public
 * @class Interfaces.Interface62
 */
Bridge.define('Interfaces.Interface62');

