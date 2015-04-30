using Bridge;
using Bridge.QUnit;
using System;
using System.Text;

namespace ClientTestLibrary
{
    // Tests DateTime functions
    class TestStringBuilderFunctions
    {
        // StringBuilder functions
        public static void StringBuilders(Assert assert)
        {
            assert.Expect(1);

            // TEST
            var sb = new StringBuilder("foo");

            assert.DeepEqual(sb.ToString(), "foo", "StringBuilder(string) .ctor");
        }
    }
}
