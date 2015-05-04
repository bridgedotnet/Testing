using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Tests:
    // Check Inheritance and overloading, base classes, virtual and new methods etc
    class TestInheritance
    {
        [FileName("testInheritanceOverloading.js")]
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
        }

        [FileName("testInheritanceOverloading.js")]
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

        public static void Test1(Assert assert)
        {
            assert.Expect(0);
        }
    }
}
