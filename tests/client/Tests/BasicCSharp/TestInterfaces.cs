using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    class TestInterfaces
    {
        [FileName("testInterfaces.js")]
        interface ISimple
        {
            int Data { get; set; }
            string GetString();
        }

        [FileName("testInterfaces.js")]
        interface ISimpleAsWell
        {
            int DataAsWell { get; set; }
            string GetStringAsWell();
        }

        [FileName("testInterfaces.js")]
        class A : ISimple
        {
            public int Data { get; set; }
            public string GetString()
            {
                return "A.ISimple";
            }

            public A()
            {
                Data = 1;
            }
        }

        [FileName("testInterfaces.js")]
        class B : ISimple
        {
            int data;
            int ISimple.Data { get { return data; } set { data = value; } }
            string ISimple.GetString()
            {
                return "explicit B.ISimple";
            }

            public B()
            {
                data = 2;
            }
        }

        [FileName("testInterfaces.js")]
        class C : ISimple, ISimpleAsWell
        {
            int data;
            int ISimple.Data { get { return data; } set { data = value; } }
            string ISimple.GetString()
            {
                return "C.ISimple";
            }

            int dataAsWell;
            public int DataAsWell { get { return dataAsWell; } set { dataAsWell = value; } }
            public string GetStringAsWell()
            {
                return "C.ISimpleAsWell";
            }

            public C()
            {
                data = 3;
                dataAsWell = 4;
            }
        }

        public static void TestInterfaceMethodAndProperty(Assert assert)
        {
            assert.Expect(6);

            ISimple a = new A();

            assert.Ok(a != null, "Instance of A created through ISimple interface");
            assert.Equal(a.GetString(), "A.ISimple", "a.GetString() = A.ISimple  through interface");
            assert.Equal(a.Data, 1, "a.Data = 1  through interface");

            var b = a as A;
            assert.Ok(b != null, "Instance of ISimple as A");
            assert.Equal(a.GetString(), "A.ISimple", "a.GetString() = A.ISimple through instance");
            assert.Equal(a.Data, 1, "a.Data = 1 through instance");
        }

        public static void TestExplicitInterfaceMethodAndProperty(Assert assert)
        {
            assert.Expect(3);

            ISimple b = new B();
            assert.Ok(b != null, "Instance of B created through ISimple interface explicitly");
            assert.Equal(b.GetString(), "explicit B.ISimple", "b.GetString() = explicit B.ISimple");
            assert.Equal(b.Data, 2, "a.Data = 2");
        }

        public static void TestTwoInterfaces(Assert assert)
        {
            assert.Expect(9);

            var c = new C();

            assert.Ok(c != null, "Instance of C created through ISimpleAsWell interface");
            assert.Equal(c.GetStringAsWell(), "C.ISimpleAsWell", "a.GetStringAsWell() = A.ISimple through instance");
            assert.Equal(c.DataAsWell, 4, "c.DataAsWell = 4  through instance");

            var a = c as ISimple;
            assert.Ok(a != null, "Instance of ISimple as C");
            assert.Equal(a.GetString(), "C.ISimple", "a.GetString() = C.ISimple  through interface");
            assert.Equal(a.Data, 3, "a.Data = 3 through interface");

            var b = c as ISimpleAsWell;
            assert.Ok(b != null, "Instance of ISimpleAsWell as C");
            assert.Equal(b.GetStringAsWell(), "C.ISimpleAsWell", "b.GetStringAsWell() = C.ISimpleAsWell  through interface");
            assert.Equal(b.DataAsWell, 4, "b.DataAsWell = 4 through interface");
        }
    }
}
