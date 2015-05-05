using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    class TestOverloadStaticMethods
    {
        [FileName("testOverloadStaticMethods.js")]
        class Static
        {
            public static string Foo(int x)
            {
                return "Foo(int x)";
            }

            public static string Foo(string s)
            {
                return "Foo(string s)";
            }

            public static string Foo(double d)
            {
                return "Foo(double d)";
            }

            public static string Foo(int x, int y)
            {
                return "Foo(int x, int y)";
            }

            public static string Foo(int x, double y)
            {
                return "Foo(int x, double y)";
            }

            public static string Foo(double x, int y)
            {
                return "Foo(double x, int y)";
            }

            public static char FooReturnType(int x)
            {
                return 'C';
            }

            public static string FooReturnType(double d)
            {
                return "string FooReturnType(double d)";
            }

            public static string FooOptionalParameters(int x, int y = 5)
            {
                return "FooOptionalParameters(int x, int y = 5)";
            }

            public static string FooOptionalParameters(int x)
            {
                return "FooOptionalParameters(int x)";
            }

            public static string FooMultipleOptionalParameters(int x, int y = 5, int z = 10)
            {
                return "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)";
            }

            public static string FooMultipleOptionalParameters(int x, int y = 5)
            {
                return "FooMultipleOptionalParameters(int x, int y = 5)";
            }

            public static string FooNamedArgument(int x)
            {
                return "FooNamedArgument(int x)";
            }

            public static string FooNamedArgument(double d)
            {
                return "FooNamedArgument(double d)";
            }
        }

        public static void TestStatic(Assert assert)
        {
            assert.Expect(16);

            assert.Equal(Static.Foo(1), "Foo(int x)", "Static Foo(int x)");
            assert.Equal(Static.Foo("string"), "Foo(string s)", "Static Foo(string s)");
            assert.Equal(Static.Foo(1.1), "Foo(double d)", "Static Foo(double d)");
            assert.Equal(Static.Foo(1, 2), "Foo(int x, int y)", "Static Foo(int x, int y)");
            assert.Equal(Static.Foo(1, 1.1), "Foo(int x, double y)", "Static Foo(int x, double y)");
            assert.Equal(Static.Foo(1.1, 1), "Foo(double x, int y)", "Static Foo(double x, int y)");

            assert.Equal(Static.FooReturnType(1), 'C', "Static char FooReturnType(int y)");
            assert.Equal(Static.FooReturnType(1.1), "string FooReturnType(double d)", "Static string FooReturnType(double d)");

            assert.Equal(Static.FooOptionalParameters(1), "FooOptionalParameters(int x)", "Static FooOptionalParameters(int x)");
            assert.Equal(Static.FooOptionalParameters(1, 2), "FooOptionalParameters(int x, int y = 5)", "Static FooOptionalParameters(int x, int y = 5)");

            assert.Equal(Static.FooMultipleOptionalParameters(1, 2), "FooMultipleOptionalParameters(int x, int y = 5)", "Static FooMultipleOptionalParameters(int x, int y = 5)");
            assert.Equal(Static.FooMultipleOptionalParameters(1, z: 2), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Static FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            assert.Equal(Static.FooMultipleOptionalParameters(1, 2, 3), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Static FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            assert.Equal(Static.FooMultipleOptionalParameters(1, z: 2, y: 3), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Static FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");

            assert.Equal(Static.FooNamedArgument(x: 1), "FooNamedArgument(int x)", "Static FooNamedArgument(int x)");
            assert.Equal(Static.FooNamedArgument(d: 1), "FooNamedArgument(double d)", "Static FooNamedArgument(double d)");
        }
    }
}
