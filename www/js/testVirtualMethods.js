/* global Bridge */

/**
 * @class ClientTestLibrary.TestVirtualMethods
 */
Bridge.define('ClientTestLibrary.TestVirtualMethods', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestVirtualMethods
         * @memberof ClientTestLibrary.TestVirtualMethods
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testB: function (assert) {
            assert.expect(7);

            var a = new ClientTestLibrary.TestVirtualMethods.A();

            assert.ok(a !== null, "Instance of A created");
            assert.equal(a.test(), "A", "a.Test() = 'A'");


            var b = new ClientTestLibrary.TestVirtualMethods.B();

            assert.ok(b !== null, "Instance of B created");
            assert.equal(b.test(), "B", "b.Test() = 'B'");
            assert.equal(b.testA(), "A", "b.TestA() = 'A'");

            var c = new ClientTestLibrary.TestVirtualMethods.B();

            assert.ok(c !== null, "Instance of C created");
            assert.equal(c.test(), "B", "c.Test() = 'B'");
        }
    }
});

/**
 * @private
 * @class ClientTestLibrary.TestVirtualMethods.A
 */
Bridge.define('ClientTestLibrary.TestVirtualMethods.A', {
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestVirtualMethods.A
     * @memberof ClientTestLibrary.TestVirtualMethods.A
     * @return  {string}        
     */
    test: function () {
        return "A";
    }
});

/**
 * @private
 * @class ClientTestLibrary.TestVirtualMethods.B
 * @augments ClientTestLibrary.TestVirtualMethods.A
 */
Bridge.define('ClientTestLibrary.TestVirtualMethods.B', {
    inherits: [ClientTestLibrary.TestVirtualMethods.A],
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestVirtualMethods.B
     * @memberof ClientTestLibrary.TestVirtualMethods.B
     * @return  {string}        
     */
    testA: function () {
        return ClientTestLibrary.TestVirtualMethods.A.prototype.test.call(this);
    },
    /**
     * @instance
     * @public
     * @override
     * @this ClientTestLibrary.TestVirtualMethods.B
     * @memberof ClientTestLibrary.TestVirtualMethods.B
     * @return  {string}        
     */
    test: function () {
        return "B";
    }
});

