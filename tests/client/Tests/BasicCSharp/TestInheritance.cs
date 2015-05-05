using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    class TestInheritance
    {
        [FileName("testInheritance.js")]
        class A
        {
            public int X { get; set; }

            public A(int x)
            {
                this.X = x;
            }

            public int HandleNumber(int i)
            {
                return i;
            }

            public string HandleString(string s)
            {
                return s;
            }
        }

        [FileName("testInheritance.js")]
        class B : A
        {
            public int Y { get; set; }

            public B(int x, int y): base(x)
            {
                this.Y = y;
            }

            public new int HandleNumber(int i)
            {
                return i * 100;
            }
        }

        public static void TestA(Assert assert)
        {
            assert.Expect(4);

            var a = new A(10);

            assert.Ok(a != null, "Instance of A created");
            assert.Equal(a.X, 10, "a.X = 10");
            assert.Equal(a.HandleNumber(100), 100, "a.HandleNumber(100) = 100");
            assert.Equal(a.HandleString("Hundred"), "Hundred", "a.HandleString('Hundred') = 'Hundred'");
        }

        public static void TestB(Assert assert)
        {
            assert.Expect(5);

            var b = new B(10, 20);

            assert.Ok(b != null, "Instance of B created");
            assert.Equal(b.X, 10, "b.X = 10");
            assert.Equal(b.Y, 20, "b.Y = 20");
            assert.Equal(b.HandleNumber(1), 100, "b.HandleNumber(1) = 100");
            assert.Equal(b.HandleString("Hundred"), "Hundred", "b.HandleString('Hundred') = 'Hundred'");
        }

        public static void TestAB(Assert assert)
        {
            assert.Expect(4);

            A b = new B(10, 20);

            assert.Ok(b != null, "Instance of B created as A type");
            assert.Equal(b.X, 10, "b.X = 10");
            assert.Equal(b.HandleNumber(10), 10, "b.HandleNumber(10) = 10");
            assert.Equal(b.HandleString("Hundred"), "Hundred", "b.HandleString('Hundred') = 'Hundred'");
        }
    }
}
