/* global Bridge */

/**
 * @class ClientTestLibrary.TestInterfaces
 */
Bridge.define('ClientTestLibrary.TestInterfaces', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestInterfaces
         * @memberof ClientTestLibrary.TestInterfaces
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testInterfaceMethodAndProperty: function (assert) {
            assert.expect(6);

            var a = new ClientTestLibrary.TestInterfaces.A();

            assert.ok(a !== null, "Instance of A created through ISimple interface");
            assert.equal(a.getString(), "A.ISimple", "a.GetString() = A.ISimple  through interface");
            assert.equal(a.getData(), 1, "a.Data = 1  through interface");

            var b = Bridge.as(a, ClientTestLibrary.TestInterfaces.A);
            assert.ok(b !== null, "Instance of ISimple as A");
            assert.equal(a.getString(), "A.ISimple", "a.GetString() = A.ISimple through instance");
            assert.equal(a.getData(), 1, "a.Data = 1 through instance");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestInterfaces
         * @memberof ClientTestLibrary.TestInterfaces
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testExplicitInterfaceMethodAndProperty: function (assert) {
            assert.expect(3);

            var b = new ClientTestLibrary.TestInterfaces.B();
            assert.ok(b !== null, "Instance of B created through ISimple interface explicitly");
            assert.equal(b.getString(), "explicit B.ISimple", "b.GetString() = explicit B.ISimple");
            assert.equal(b.getData(), 2, "a.Data = 2");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestInterfaces
         * @memberof ClientTestLibrary.TestInterfaces
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testTwoInterfaces: function (assert) {
            assert.expect(9);

            var c = new ClientTestLibrary.TestInterfaces.C();

            assert.ok(c !== null, "Instance of C created through ISimpleAsWell interface");
            assert.equal(c.getStringAsWell(), "C.ISimpleAsWell", "a.GetStringAsWell() = A.ISimple through instance");
            assert.equal(c.getDataAsWell(), 4, "c.DataAsWell = 4  through instance");

            var a = Bridge.as(c, ClientTestLibrary.TestInterfaces.ISimple);
            assert.ok(a !== null, "Instance of ISimple as C");
            assert.equal(a.getString(), "C.ISimple", "a.GetString() = C.ISimple  through interface");
            assert.equal(a.getData(), 3, "a.Data = 3 through interface");

            var b = Bridge.as(c, ClientTestLibrary.TestInterfaces.ISimpleAsWell);
            assert.ok(b !== null, "Instance of ISimpleAsWell as C");
            assert.equal(b.getStringAsWell(), "C.ISimpleAsWell", "b.GetStringAsWell() = C.ISimpleAsWell  through interface");
            assert.equal(b.getDataAsWell(), 4, "b.DataAsWell = 4 through interface");
        }
    }
});

/**
 * @abstract
 * @private
 * @class ClientTestLibrary.TestInterfaces.ISimple
 */
Bridge.define('ClientTestLibrary.TestInterfaces.ISimple');

/**
 * @private
 * @class ClientTestLibrary.TestInterfaces.B
 * @implements  ClientTestLibrary.TestInterfaces.ISimple
 */
Bridge.define('ClientTestLibrary.TestInterfaces.B', {
    inherits: [ClientTestLibrary.TestInterfaces.ISimple],
    /**
     * @instance
     * @private
     * @memberof ClientTestLibrary.TestInterfaces.B
     * @type number
     */
    data: 0,
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestInterfaces.B
     * @memberof ClientTestLibrary.TestInterfaces.B
     * @return  {void}        
     */
    constructor: function () {
        this.data = 2;
    },
    /**
     * @instance
     * @this ClientTestLibrary.TestInterfaces.B
     * @memberof ClientTestLibrary.TestInterfaces.B
     * @function getData
     * @return  {number}        
     */
    /**
     * @instance
     * @this ClientTestLibrary.TestInterfaces.B
     * @memberof ClientTestLibrary.TestInterfaces.B
     * @function setData
     * @param   {number}    value    
     * @return  {void}               
     */
    getData: function () {
        return this.data;
    },
    /**
     * @instance
     * @this ClientTestLibrary.TestInterfaces.B
     * @memberof ClientTestLibrary.TestInterfaces.B
     * @function getData
     * @return  {number}        
     */
    /**
     * @instance
     * @this ClientTestLibrary.TestInterfaces.B
     * @memberof ClientTestLibrary.TestInterfaces.B
     * @function setData
     * @param   {number}    value    
     * @return  {void}               
     */
    setData: function (value) {
        this.data = value;
    },
    /**
     * @instance
     * @this ClientTestLibrary.TestInterfaces.B
     * @memberof ClientTestLibrary.TestInterfaces.B
     * @return  {string}        
     */
    getString: function () {
        return "explicit B.ISimple";
    }
});

/**
 * @private
 * @class ClientTestLibrary.TestInterfaces.A
 * @implements  ClientTestLibrary.TestInterfaces.ISimple
 */
Bridge.define('ClientTestLibrary.TestInterfaces.A', {
    inherits: [ClientTestLibrary.TestInterfaces.ISimple],
    config: {
        properties: {
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.TestInterfaces.A
             * @memberof ClientTestLibrary.TestInterfaces.A
             * @function getData
             * @return  {number}        
             */
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.TestInterfaces.A
             * @memberof ClientTestLibrary.TestInterfaces.A
             * @function setData
             * @param   {number}    value    
             * @return  {void}               
             */
            Data: 0
        }
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestInterfaces.A
     * @memberof ClientTestLibrary.TestInterfaces.A
     * @return  {void}        
     */
    constructor: function () {
        this.setData(1);
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestInterfaces.A
     * @memberof ClientTestLibrary.TestInterfaces.A
     * @return  {string}        
     */
    getString: function () {
        return "A.ISimple";
    }
});

/**
 * @abstract
 * @private
 * @class ClientTestLibrary.TestInterfaces.ISimpleAsWell
 */
Bridge.define('ClientTestLibrary.TestInterfaces.ISimpleAsWell');

/**
 * @private
 * @class ClientTestLibrary.TestInterfaces.C
 * @implements  ClientTestLibrary.TestInterfaces.ISimple
 * @implements  ClientTestLibrary.TestInterfaces.ISimpleAsWell
 */
Bridge.define('ClientTestLibrary.TestInterfaces.C', {
    inherits: [ClientTestLibrary.TestInterfaces.ISimple,ClientTestLibrary.TestInterfaces.ISimpleAsWell],
    /**
     * @instance
     * @private
     * @memberof ClientTestLibrary.TestInterfaces.C
     * @type number
     */
    data: 0,
    /**
     * @instance
     * @private
     * @memberof ClientTestLibrary.TestInterfaces.C
     * @type number
     */
    dataAsWell: 0,
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestInterfaces.C
     * @memberof ClientTestLibrary.TestInterfaces.C
     * @return  {void}        
     */
    constructor: function () {
        this.data = 3;
        this.dataAsWell = 4;
    },
    /**
     * @instance
     * @this ClientTestLibrary.TestInterfaces.C
     * @memberof ClientTestLibrary.TestInterfaces.C
     * @function getData
     * @return  {number}        
     */
    /**
     * @instance
     * @this ClientTestLibrary.TestInterfaces.C
     * @memberof ClientTestLibrary.TestInterfaces.C
     * @function setData
     * @param   {number}    value    
     * @return  {void}               
     */
    getData: function () {
        return this.data;
    },
    /**
     * @instance
     * @this ClientTestLibrary.TestInterfaces.C
     * @memberof ClientTestLibrary.TestInterfaces.C
     * @function getData
     * @return  {number}        
     */
    /**
     * @instance
     * @this ClientTestLibrary.TestInterfaces.C
     * @memberof ClientTestLibrary.TestInterfaces.C
     * @function setData
     * @param   {number}    value    
     * @return  {void}               
     */
    setData: function (value) {
        this.data = value;
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestInterfaces.C
     * @memberof ClientTestLibrary.TestInterfaces.C
     * @function getDataAsWell
     * @return  {number}        
     */
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestInterfaces.C
     * @memberof ClientTestLibrary.TestInterfaces.C
     * @function setDataAsWell
     * @param   {number}    value    
     * @return  {void}               
     */
    getDataAsWell: function () {
        return this.dataAsWell;
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestInterfaces.C
     * @memberof ClientTestLibrary.TestInterfaces.C
     * @function getDataAsWell
     * @return  {number}        
     */
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestInterfaces.C
     * @memberof ClientTestLibrary.TestInterfaces.C
     * @function setDataAsWell
     * @param   {number}    value    
     * @return  {void}               
     */
    setDataAsWell: function (value) {
        this.dataAsWell = value;
    },
    /**
     * @instance
     * @this ClientTestLibrary.TestInterfaces.C
     * @memberof ClientTestLibrary.TestInterfaces.C
     * @return  {string}        
     */
    getString: function () {
        return "C.ISimple";
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestInterfaces.C
     * @memberof ClientTestLibrary.TestInterfaces.C
     * @return  {string}        
     */
    getStringAsWell: function () {
        return "C.ISimpleAsWell";
    }
});

