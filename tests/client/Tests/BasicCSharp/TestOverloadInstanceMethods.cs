using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    class TestOverloadInstanceMethods
    {
        [FileName("testOverloadInstanceMethods.js")]
        class Instance
        {
            public string Foo(int x)
            {
                return "Foo(int x)";
            }

            public string Foo(string s)
            {
                return "Foo(string s)";
            }

            public string Foo(double d)
            {
                return "Foo(double d)";
            }

            public string Foo(int x, int y)
            {
                return "Foo(int x, int y)";
            }

            public string Foo(int x, double y)
            {
                return "Foo(int x, double y)";
            }

            public string Foo(double x, int y)
            {
                return "Foo(double x, int y)";
            }

            public char FooReturnType(int x)
            {
                return 'C';
            }

            public string FooReturnType(double d)
            {
                return "string FooReturnType(double d)";
            }

            public string FooOptionalParameters(int x, int y = 5)
            {
                return "FooOptionalParameters(int x, int y = 5)";
            }

            public string FooOptionalParameters(int x)
            {
                return "FooOptionalParameters(int x)";
            }

            public string FooMultipleOptionalParameters(int x, int y = 5, int z = 10)
            {
                return "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)";
            }

            public string FooMultipleOptionalParameters(int x, int y = 5)
            {
                return "FooMultipleOptionalParameters(int x, int y = 5)";
            }

            public string FooNamedArgument(int x)
            {
                return "FooNamedArgument(int x)";
            }

            public string FooNamedArgument(double d)
            {
                return "FooNamedArgument(double d)";
            }
        }

        public static void TestInstance(Assert assert)
        {
            assert.Expect(17);

            var i = new Instance();

            assert.Ok(i != null, "i created");
            assert.Equal(i.Foo(1), "Foo(int x)", "Instance Foo(int x)");
            assert.Equal(i.Foo("string"), "Foo(string s)", "Instance Foo(string s)");
            assert.Equal(i.Foo(1.1), "Foo(double d)", "Instance Foo(double d)");
            assert.Equal(i.Foo(1, 2), "Foo(int x, int y)", "Instance Foo(int x, int y)");
            assert.Equal(i.Foo(1, 1.1), "Foo(int x, double y)", "Instance Foo(int x, double y)");
            assert.Equal(i.Foo(1.1, 1), "Foo(double x, int y)", "Instance Foo(double x, int y)");

            assert.Equal(i.FooReturnType(1), 'C', "Instance char FooReturnType(int y)");
            assert.Equal(i.FooReturnType(1.1), "string FooReturnType(double d)", "Instance string FooReturnType(double d)");

            assert.Equal(i.FooOptionalParameters(1), "FooOptionalParameters(int x)", "Instance FooOptionalParameters(int x)");
            assert.Equal(i.FooOptionalParameters(1, 2), "FooOptionalParameters(int x, int y = 5)", "Instance FooOptionalParameters(int x, int y = 5)");

            assert.Equal(i.FooMultipleOptionalParameters(1, 2), "FooMultipleOptionalParameters(int x, int y = 5)", "Instance FooMultipleOptionalParameters(int x, int y = 5)");
            assert.Equal(i.FooMultipleOptionalParameters(1, z: 2), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            assert.Equal(i.FooMultipleOptionalParameters(1, 2, 3), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");
            assert.Equal(i.FooMultipleOptionalParameters(1, z: 2, y: 3), "FooMultipleOptionalParameters(int x, int y = 5, int z = 10)", "Instance FooMultipleOptionalParameters(int x, int y = 5, int z = 10)");

            assert.Equal(i.FooNamedArgument(x: 1), "FooNamedArgument(int x)", "Static FooNamedArgument(int x)");
            assert.Equal(i.FooNamedArgument(d: 1), "FooNamedArgument(double d)", "Static FooNamedArgument(double d)");
        }
    }
}
