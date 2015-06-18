using Bridge;
using Bridge.QUnit;
using System;

namespace ClientTestLibrary
{
    [FileName("testBridgeIssues.js")]
    class Bridge169
    {
        public static int Number = 0;

        public static void M1()
        {
            new Action(() => { Bridge169.Number = 1; })();
        }

        public static void M2()
        {
            new Action(() => Bridge169.Number = 2)();
        }
    }

    [FileName("testBridgeIssues.js")]
    abstract class Bridge240A
    {
        public int Data { get; set; }
    }

    [FileName("testBridgeIssues.js")]
    class Bridge240B : Bridge240A
    {
        public string GetString()
        {
            base.Data++;
            return "B";
        }
    }

    [FileName("testBridgeIssues.js")]
    class Bridge266A
    {
        public static object Test()
        {
            // Nothing gets written for Class1 in the output JavaScript due to the "new object()" argument.
            // If null is used instead (as commented-out) then it works as expected.
            // No compile error.
            return Bridge266B.Test("test", new object());
            //Bridge266B.Test("test", null);
        }
    }

    [FileName("testBridgeIssues.js")]
    class Bridge266B
    {
        public static object Test(string arg1, object arg2)
        {
            return arg2;
        }
    }

    [FileName("testBridgeIssues.js")]
    class Bridge272
    {
        [FileName("testBridgeIssues.js")]
        public enum MyEnum { Abc = 1, Def = 2, Ghi = 3 };

        public static MyEnum Test(int i)
        {
            return (MyEnum)i;
        }
    }

    // Tests Bridge GitHub issues
    class TestBridgeIssues
    {

        // Bridge[#169]
        public static void N169(Assert assert)
        {
            assert.Expect(2);

            // TEST
            Bridge169.M1();
            assert.DeepEqual(Bridge169.Number, 1, "M1()");

            // TEST
            Bridge169.M2();
            assert.DeepEqual(Bridge169.Number, 2, "M2()");
        }

        // Bridge[#240]
        public static void N240(Assert assert)
        {
            assert.Expect(3);

            // TEST
            var b = new Bridge240B();
            assert.Ok(b != null, "Instance of B created");
            assert.Equal(b.GetString(), "B", "b.GetString() = 'B'");
            assert.Equal(b.Data, 1, "b.Data = 1");
        }

        // Bridge[#266]
        public static void N266(Assert assert)
        {
            assert.Expect(1);

            // TEST
            assert.Ok(Bridge266A.Test() != null, "new object() call transpiled");
        }

        // Bridge[#272]
        public static void N272(Assert assert)
        {
            assert.Expect(3);

            // TEST
            assert.DeepEqual(Bridge272.Test(1), Bridge272.MyEnum.Abc, "Casted MyEnum.Abc");
            assert.DeepEqual(Bridge272.Test(3), Bridge272.MyEnum.Ghi, "Casted MyEnum.Ghi");
            assert.DeepEqual(Bridge272.Test(4), 4, "Casted MyEnum.Abc");
        }
    }
}
