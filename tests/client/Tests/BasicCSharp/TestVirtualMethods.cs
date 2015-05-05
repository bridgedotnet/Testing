using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    class TestVirtualMethods
    {
        [FileName("testVirtualMethods.js")]
        class A
        {
            public virtual string Test()
            {
                return "A";
            }
        }

        [FileName("testVirtualMethods.js")]
        class B : A
        {
            public string TestA()
            {
                return base.Test();
            }

            public override string Test()
            {
                return "B";
            }
        }
        public static void TestB(Assert assert)
        {
            assert.Expect(7);

            var a = new A();

            assert.Ok(a != null, "Instance of A created");
            assert.Equal(a.Test(), "A", "a.Test() = 'A'");


            var b = new B();

            assert.Ok(b != null, "Instance of B created");
            assert.Equal(b.Test(), "B", "b.Test() = 'B'");
            assert.Equal(b.TestA(), "A", "b.TestA() = 'A'");

            A c = new B();

            assert.Ok(c != null, "Instance of C created");
            assert.Equal(c.Test(), "B", "c.Test() = 'B'");
        }
    }
}
