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
    }
}
