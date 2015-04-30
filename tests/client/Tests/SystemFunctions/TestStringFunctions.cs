using Bridge;
using Bridge.QUnit;
using System;
using System.Text;

namespace ClientTestLibrary
{
    // Tests DateTime functions
    class TestStringFunctions
    {
        // String functions
        public static void Strings(Assert assert)
        {
            assert.Expect(2);

            // TEST
            var msg = "HELLO".ToLowerCase();
            assert.DeepEqual(msg, "hello", "'HELLO'.ToLowerCase()");

            // TEST
            msg = "hello".ToUpperCase();
            assert.DeepEqual(msg, "HELLO", "'hello'.ToUpperCase()");
        }
    }
}
