/* global Bridge */

/**
 * @class ClientTestLibrary.TestOverloadInstanceMethods
 */
Bridge.define('ClientTestLibrary.TestOverloadInstanceMethods', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadInstanceMethods
         * @memberof ClientTestLibrary.TestOverloadInstanceMethods
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testInstance: function (assert) {
            assert.expect(17);

            var i = new ClientTestLibrary.TestOverloadInstanceMethods.Instance();

            assert.ok(i !== null, "i created");
            assert.equal(i.foo$2(1), "Foo(int x)", "Instance Foo(int x)");
            assert.equal(i.foo$5("string"), "Foo(string s)", "Instance Foo(string s)");
            assert.equal(i.foo(1.1), "Foo(double d)", "Instance Foo(double d)");
            assert.equal(i.foo$4(1, 2), "Foo(int x, int y)", "Instance Foo(int x, int y)");
            assert.equal(i.foo$3(1, 1.1), "Foo(int x, double y)", "Instance Foo(int x, double y)");
            assert.equal(i.foo$1(1.1, 1), "Foo(double x, int y)", "Instance Foo(double x, int y)");

            assert.equal(i.fooReturnType(1), 67, "Instance char FooReturnType(int y)");
            assert.equal(i.fooReturnType$1(1.1), "string FooReturnType(double d)", "Instance string FooReturnType(double d)");

            assert.equal(i.fooOptionalParameters(1), "FooOptionalParameters(int x)", "Instance FooOptionalParameters(int x)");
            assert.equal(i.fooOptionalParameters$1(1, 2), "FooOptionalParameters(int x, int y = 5)", "Instance FooOptionalParameters(int x, int y = 5)");

            assert.equal(i.fooMultipleOptionalParameters(1, 2), "FooMultipleOptionalParameters(int x, int y = 5)", "Instance FooMultipleOptionalParameters(int x, int y = 5)");
            assert.equal(i.fooMultipleOptionalParameters$1(1, 5, 2), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            assert.equal(i.fooMultipleOptionalParameters$1(1, 2, 3), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            assert.equal(i.fooMultipleOptionalParameters$1(1, 3, 2), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");

            assert.equal(i.fooNamedArgument$1(1), "FooNamedArgument(int x)", "Static FooNamedArgument(int x)");
            assert.equal(i.fooNamedArgument(1), "FooNamedArgument(double d)", "Static FooNamedArgument(double d)");
        }
    }
});

/**
 * @private
 * @class ClientTestLibrary.TestOverloadInstanceMethods.Instance
 */
Bridge.define('ClientTestLibrary.TestOverloadInstanceMethods.Instance', {
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @memberof ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @param   {number}    x    
     * @return  {string}         
     */
    foo$2: function (x) {
        return "Foo(int x)";
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @memberof ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @param   {string}    s    
     * @return  {string}         
     */
    foo$5: function (s) {
        return "Foo(string s)";
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @memberof ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @param   {number}    d    
     * @return  {string}         
     */
    foo: function (d) {
        return "Foo(double d)";
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @memberof ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @param   {number}    x    
     * @param   {number}    y    
     * @return  {string}         
     */
    foo$4: function (x, y) {
        return "Foo(int x, int y)";
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @memberof ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @param   {number}    x    
     * @param   {number}    y    
     * @return  {string}         
     */
    foo$3: function (x, y) {
        return "Foo(int x, double y)";
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @memberof ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @param   {number}    x    
     * @param   {number}    y    
     * @return  {string}         
     */
    foo$1: function (x, y) {
        return "Foo(double x, int y)";
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @memberof ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @param   {number}    x    
     * @return  {number}         
     */
    fooReturnType: function (x) {
        return 67;
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @memberof ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @param   {number}    d    
     * @return  {string}         
     */
    fooReturnType$1: function (d) {
        return "string FooReturnType(double d)";
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @memberof ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @param   {number}    x    
     * @param   {number}    y    
     * @return  {string}         
     */
    fooOptionalParameters$1: function (x, y) {
        return "FooOptionalParameters(int x, int y = 5)";
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @memberof ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @param   {number}    x    
     * @return  {string}         
     */
    fooOptionalParameters: function (x) {
        return "FooOptionalParameters(int x)";
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @memberof ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @param   {number}    x    
     * @param   {number}    y    
     * @param   {number}    z    
     * @return  {string}         
     */
    fooMultipleOptionalParameters$1: function (x, y, z) {
        return "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)";
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @memberof ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @param   {number}    x    
     * @param   {number}    y    
     * @return  {string}         
     */
    fooMultipleOptionalParameters: function (x, y) {
        return "FooMultipleOptionalParameters(int x, int y = 5)";
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @memberof ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @param   {number}    x    
     * @return  {string}         
     */
    fooNamedArgument$1: function (x) {
        return "FooNamedArgument(int x)";
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @memberof ClientTestLibrary.TestOverloadInstanceMethods.Instance
     * @param   {number}    d    
     * @return  {string}         
     */
    fooNamedArgument: function (d) {
        return "FooNamedArgument(double d)";
    }
});

