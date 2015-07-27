/* global Bridge */

/**
 * @class ClientTestLibrary.TestInheritance
 */
Bridge.define('ClientTestLibrary.TestInheritance', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestInheritance
         * @memberof ClientTestLibrary.TestInheritance
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testA: function (assert) {
            assert.expect(4);

            var a = new ClientTestLibrary.TestInheritance.A(10);

            assert.ok(a !== null, "Instance of A created");
            assert.equal(a.getX(), 10, "a.X = 10");
            assert.equal(a.handleNumber(100), 100, "a.HandleNumber(100) = 100");
            assert.equal(a.handleString("Hundred"), "Hundred", "a.HandleString('Hundred') = 'Hundred'");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestInheritance
         * @memberof ClientTestLibrary.TestInheritance
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testB: function (assert) {
            assert.expect(5);

            var b = new ClientTestLibrary.TestInheritance.B(10, 20);

            assert.ok(b !== null, "Instance of B created");
            assert.equal(b.getX(), 10, "b.X = 10");
            assert.equal(b.getY(), 20, "b.Y = 20");
            assert.equal(b.handleNumber$1(1), 100, "b.HandleNumber(1) = 100");
            assert.equal(b.handleString("Hundred"), "Hundred", "b.HandleString('Hundred') = 'Hundred'");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestInheritance
         * @memberof ClientTestLibrary.TestInheritance
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testAB: function (assert) {
            assert.expect(4);

            var b = new ClientTestLibrary.TestInheritance.B(10, 20);

            assert.ok(b !== null, "Instance of B created as A type");
            assert.equal(b.getX(), 10, "b.X = 10");
            assert.equal(b.handleNumber(10), 10, "b.HandleNumber(10) = 10");
            assert.equal(b.handleString("Hundred"), "Hundred", "b.HandleString('Hundred') = 'Hundred'");
        }
    }
});

/**
 * @private
 * @class ClientTestLibrary.TestInheritance.A
 */
Bridge.define('ClientTestLibrary.TestInheritance.A', {
    config: {
        properties: {
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.TestInheritance.A
             * @memberof ClientTestLibrary.TestInheritance.A
             * @function getX
             * @return  {number}        
             */
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.TestInheritance.A
             * @memberof ClientTestLibrary.TestInheritance.A
             * @function setX
             * @param   {number}    value    
             * @return  {void}               
             */
            X: 0
        }
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestInheritance.A
     * @memberof ClientTestLibrary.TestInheritance.A
     * @param   {number}    x    
     * @return  {void}           
     */
    constructor: function (x) {
        this.setX(x);
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestInheritance.A
     * @memberof ClientTestLibrary.TestInheritance.A
     * @param   {number}    i    
     * @return  {number}         
     */
    handleNumber: function (i) {
        return i;
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestInheritance.A
     * @memberof ClientTestLibrary.TestInheritance.A
     * @param   {string}    s    
     * @return  {string}         
     */
    handleString: function (s) {
        return s;
    }
});

/**
 * @private
 * @class ClientTestLibrary.TestInheritance.B
 * @augments ClientTestLibrary.TestInheritance.A
 */
Bridge.define('ClientTestLibrary.TestInheritance.B', {
    inherits: [ClientTestLibrary.TestInheritance.A],
    config: {
        properties: {
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.TestInheritance.B
             * @memberof ClientTestLibrary.TestInheritance.B
             * @function getY
             * @return  {number}        
             */
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.TestInheritance.B
             * @memberof ClientTestLibrary.TestInheritance.B
             * @function setY
             * @param   {number}    value    
             * @return  {void}               
             */
            Y: 0
        }
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestInheritance.B
     * @memberof ClientTestLibrary.TestInheritance.B
     * @param   {number}    x    
     * @param   {number}    y    
     * @return  {void}           
     */
    constructor: function (x, y) {
        ClientTestLibrary.TestInheritance.A.prototype.$constructor.call(this, x);

        this.setY(y);
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestInheritance.B
     * @memberof ClientTestLibrary.TestInheritance.B
     * @param   {number}    i    
     * @return  {number}         
     */
    handleNumber$1: function (i) {
        return i * 100;
    }
});

