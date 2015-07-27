/* global Bridge */

/**
 * @class ClientTestLibrary.TestOverloadStaticMethods
 */
Bridge.define('ClientTestLibrary.TestOverloadStaticMethods', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods
         * @memberof ClientTestLibrary.TestOverloadStaticMethods
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testStatic: function (assert) {
            assert.expect(16);

            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.foo$2(1), "Foo(int x)", "Static Foo(int x)");
            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.foo$5("string"), "Foo(string s)", "Static Foo(string s)");
            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.foo(1.1), "Foo(double d)", "Static Foo(double d)");
            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.foo$4(1, 2), "Foo(int x, int y)", "Static Foo(int x, int y)");
            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.foo$3(1, 1.1), "Foo(int x, double y)", "Static Foo(int x, double y)");
            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.foo$1(1.1, 1), "Foo(double x, int y)", "Static Foo(double x, int y)");

            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.fooReturnType(1), 67, "Static char FooReturnType(int y)");
            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.fooReturnType$1(1.1), "string FooReturnType(double d)", "Static string FooReturnType(double d)");

            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.fooOptionalParameters(1), "FooOptionalParameters(int x)", "Static FooOptionalParameters(int x)");
            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.fooOptionalParameters$1(1, 2), "FooOptionalParameters(int x, int y = 5)", "Static FooOptionalParameters(int x, int y = 5)");

            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.fooMultipleOptionalParameters(1, 2), "FooMultipleOptionalParameters(int x, int y = 5)", "Static FooMultipleOptionalParameters(int x, int y = 5)");
            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.fooMultipleOptionalParameters$1(1, 5, 2), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Static FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.fooMultipleOptionalParameters$1(1, 2, 3), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Static FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.fooMultipleOptionalParameters$1(1, 3, 2), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Static FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");

            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.fooNamedArgument$1(1), "FooNamedArgument(int x)", "Static FooNamedArgument(int x)");
            assert.equal(ClientTestLibrary.TestOverloadStaticMethods.Static.fooNamedArgument(1), "FooNamedArgument(double d)", "Static FooNamedArgument(double d)");
        }
    }
});

/**
 * @private
 * @class ClientTestLibrary.TestOverloadStaticMethods.Static
 */
Bridge.define('ClientTestLibrary.TestOverloadStaticMethods.Static', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods.Static
         * @memberof ClientTestLibrary.TestOverloadStaticMethods.Static
         * @param   {number}    x    
         * @return  {string}         
         */
        foo$2: function (x) {
            return "Foo(int x)";
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods.Static
         * @memberof ClientTestLibrary.TestOverloadStaticMethods.Static
         * @param   {string}    s    
         * @return  {string}         
         */
        foo$5: function (s) {
            return "Foo(string s)";
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods.Static
         * @memberof ClientTestLibrary.TestOverloadStaticMethods.Static
         * @param   {number}    d    
         * @return  {string}         
         */
        foo: function (d) {
            return "Foo(double d)";
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods.Static
         * @memberof ClientTestLibrary.TestOverloadStaticMethods.Static
         * @param   {number}    x    
         * @param   {number}    y    
         * @return  {string}         
         */
        foo$4: function (x, y) {
            return "Foo(int x, int y)";
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods.Static
         * @memberof ClientTestLibrary.TestOverloadStaticMethods.Static
         * @param   {number}    x    
         * @param   {number}    y    
         * @return  {string}         
         */
        foo$3: function (x, y) {
            return "Foo(int x, double y)";
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods.Static
         * @memberof ClientTestLibrary.TestOverloadStaticMethods.Static
         * @param   {number}    x    
         * @param   {number}    y    
         * @return  {string}         
         */
        foo$1: function (x, y) {
            return "Foo(double x, int y)";
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods.Static
         * @memberof ClientTestLibrary.TestOverloadStaticMethods.Static
         * @param   {number}    x    
         * @return  {number}         
         */
        fooReturnType: function (x) {
            return 67;
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods.Static
         * @memberof ClientTestLibrary.TestOverloadStaticMethods.Static
         * @param   {number}    d    
         * @return  {string}         
         */
        fooReturnType$1: function (d) {
            return "string FooReturnType(double d)";
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods.Static
         * @memberof ClientTestLibrary.TestOverloadStaticMethods.Static
         * @param   {number}    x    
         * @param   {number}    y    
         * @return  {string}         
         */
        fooOptionalParameters$1: function (x, y) {
            return "FooOptionalParameters(int x, int y = 5)";
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods.Static
         * @memberof ClientTestLibrary.TestOverloadStaticMethods.Static
         * @param   {number}    x    
         * @return  {string}         
         */
        fooOptionalParameters: function (x) {
            return "FooOptionalParameters(int x)";
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods.Static
         * @memberof ClientTestLibrary.TestOverloadStaticMethods.Static
         * @param   {number}    x    
         * @param   {number}    y    
         * @param   {number}    z    
         * @return  {string}         
         */
        fooMultipleOptionalParameters$1: function (x, y, z) {
            return "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)";
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods.Static
         * @memberof ClientTestLibrary.TestOverloadStaticMethods.Static
         * @param   {number}    x    
         * @param   {number}    y    
         * @return  {string}         
         */
        fooMultipleOptionalParameters: function (x, y) {
            return "FooMultipleOptionalParameters(int x, int y = 5)";
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods.Static
         * @memberof ClientTestLibrary.TestOverloadStaticMethods.Static
         * @param   {number}    x    
         * @return  {string}         
         */
        fooNamedArgument$1: function (x) {
            return "FooNamedArgument(int x)";
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestOverloadStaticMethods.Static
         * @memberof ClientTestLibrary.TestOverloadStaticMethods.Static
         * @param   {number}    d    
         * @return  {string}         
         */
        fooNamedArgument: function (d) {
            return "FooNamedArgument(double d)";
        }
    }
});

