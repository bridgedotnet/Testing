using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    class TestAbstractClass
    {
        [FileName("testAbstractClass.js")]
        abstract class A
        {
            public int Data { get; set; }
            public abstract string GetString();
        }

        [FileName("testAbstractClass.js")]
        class B : A
        {
            public override string GetString()
            {
                Data++;
                return "B";
            }
        }

        [FileName("testAbstractClass.js")]
        class C : B
        {
            public override string GetString()
            {
                Data--;
                return "C";
            }
        }

        public static void TestB(Assert assert)
        {
            assert.Expect(3);

            var b = new B();

            assert.Ok(b != null, "Instance of B created");
            assert.Equal(b.GetString(), "B", "b.GetString() = 'B'");
            assert.Equal(b.Data, 1, "b.Data = 1");
        }

        public static void TestC(Assert assert)
        {
            assert.Expect(3);

            var c = new C();

            assert.Ok(c != null, "Instance of C created");
            assert.Equal(c.GetString(), "C", "c.GetString() = 'C'");
            assert.Equal(c.Data, -1, "c.Data = -1");
        }

        public static void TestBC(Assert assert)
        {
            assert.Expect(6);

            A b = new B();

            assert.Ok(b != null, "Instance of B created as instance of A");
            assert.Equal(b.GetString(), "B", "b.GetString() = 'B'");
            assert.Equal(b.Data, 1, "b.Data = 1");

            A c = new C();
            assert.Ok(c != null, "Instance of C created as instance of A");
            assert.Equal(c.GetString(), "C", "c.GetString() = 'C'");
            assert.Equal(c.Data, -1, "c.Data = -1");
        }
    }
}
