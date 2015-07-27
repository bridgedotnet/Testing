/* global Bridge */

/**
 * @class ClientTestLibrary.TestAbstractClass
 */
Bridge.define('ClientTestLibrary.TestAbstractClass', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestAbstractClass
         * @memberof ClientTestLibrary.TestAbstractClass
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testB: function (assert) {
            assert.expect(3);

            var b = new ClientTestLibrary.TestAbstractClass.B();

            assert.ok(b !== null, "Instance of B created");
            assert.equal(b.getString(), "B", "b.GetString() = 'B'");
            assert.equal(b.getData(), 1, "b.Data = 1");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestAbstractClass
         * @memberof ClientTestLibrary.TestAbstractClass
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testC: function (assert) {
            assert.expect(3);

            var c = new ClientTestLibrary.TestAbstractClass.C();

            assert.ok(c !== null, "Instance of C created");
            assert.equal(c.getString(), "C", "c.GetString() = 'C'");
            assert.equal(c.getData(), -1, "c.Data = -1");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestAbstractClass
         * @memberof ClientTestLibrary.TestAbstractClass
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testBC: function (assert) {
            assert.expect(6);

            var b = new ClientTestLibrary.TestAbstractClass.B();

            assert.ok(b !== null, "Instance of B created as instance of A");
            assert.equal(b.getString(), "B", "b.GetString() = 'B'");
            assert.equal(b.getData(), 1, "b.Data = 1");

            var c = new ClientTestLibrary.TestAbstractClass.C();
            assert.ok(c !== null, "Instance of C created as instance of A");
            assert.equal(c.getString(), "C", "c.GetString() = 'C'");
            assert.equal(c.getData(), -1, "c.Data = -1");
        }
    }
});

/**
 * @abstract
 * @private
 * @class ClientTestLibrary.TestAbstractClass.A
 */
Bridge.define('ClientTestLibrary.TestAbstractClass.A', {
    config: {
        properties: {
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.TestAbstractClass.A
             * @memberof ClientTestLibrary.TestAbstractClass.A
             * @function getData
             * @return  {number}        
             */
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.TestAbstractClass.A
             * @memberof ClientTestLibrary.TestAbstractClass.A
             * @function setData
             * @param   {number}    value    
             * @return  {void}               
             */
            Data: 0
        }
    }
});

/**
 * @private
 * @class ClientTestLibrary.TestAbstractClass.B
 * @augments ClientTestLibrary.TestAbstractClass.A
 */
Bridge.define('ClientTestLibrary.TestAbstractClass.B', {
    inherits: [ClientTestLibrary.TestAbstractClass.A],
    /**
     * @instance
     * @public
     * @override
     * @this ClientTestLibrary.TestAbstractClass.B
     * @memberof ClientTestLibrary.TestAbstractClass.B
     * @return  {string}        
     */
    getString: function () {
        this.setData(this.getData()+1);
        return "B";
    }
});

/**
 * @private
 * @class ClientTestLibrary.TestAbstractClass.C
 * @augments ClientTestLibrary.TestAbstractClass.B
 */
Bridge.define('ClientTestLibrary.TestAbstractClass.C', {
    inherits: [ClientTestLibrary.TestAbstractClass.B],
    /**
     * @instance
     * @public
     * @override
     * @this ClientTestLibrary.TestAbstractClass.C
     * @memberof ClientTestLibrary.TestAbstractClass.C
     * @return  {string}        
     */
    getString: function () {
        this.setData(this.getData()-1);
        return "C";
    }
});

