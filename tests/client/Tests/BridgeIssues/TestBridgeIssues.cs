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

    // Tests Bridge GitHub issues
    class TestBridgeIssues
    {

        // Bridge[#169]
        public static void N169(Assert assert)
        {
            assert.Expect(2);

            Bridge169.M1();
            assert.DeepEqual(Bridge169.Number, 1, "M1()");

            Bridge169.M2();
            assert.DeepEqual(Bridge169.Number, 2, "M2()");
        }
    }
}
