using System;
using Bridge;
using Bridge.QUnit1;

namespace ClientTestLibrary
{
    // Tests catch, finally etc
    [FileName("testSets.js")]
    class TestCatchBlocks
    {
        //[#84] Does not compile
        public static void Test1(Assert assert)
        {
            assert.Expect(0);

            try { }
            catch { }
        }
    }
}
