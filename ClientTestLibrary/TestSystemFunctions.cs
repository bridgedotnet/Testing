using System;
using Bridge;
using Bridge.QUnit1;

namespace ClientTestLibrary
{
    // Tests DateTime functions
    [FileName("testSets.js")]
    class TestSystemFunctions
    {
        // DateTime functions
        public static void Test1(Assert assert)
        {
            assert.Expect(2);

            //[#83] by C#
            var str = "2015-03-24T10:48:09.1500225+03:00";
            var bridgeDate = DateTime.Parse(str);
            var bridgeDate1 = new DateTime(str);
            assert.DeepEqual(bridgeDate, bridgeDate1, "[#83] C# bridgeDate = bridgeDate1");

            //[#83] by js
            Script.Write<dynamic>(@"var str = ""2015-03-24T10:48:09.1500225+03:00"",
    bridgeDate = Bridge.Date.parse(str),
    jsDate = new Date(Date.parse(str)),
    format = ""yyyy-MM-dd hh:mm:ss"";
    deepEqual(Bridge.Date.format(bridgeDate, format), Bridge.Date.format(jsDate, format), ""[#83] js"")");
        }

        // String functions
        public static void Test2(Assert assert)
        {
            assert.Expect(2);

            var msg = "HELLO".ToLowerCase();
            assert.DeepEqual(msg, "hello", "'HELLO'.ToLowerCase()");

            msg = "hello".ToUpperCase();
            assert.DeepEqual(msg, "HELLO", "'hello'.ToUpperCase()");
        }
    }
}
