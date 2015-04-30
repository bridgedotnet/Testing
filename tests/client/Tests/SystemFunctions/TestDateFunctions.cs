using Bridge;
using Bridge.QUnit;
using System;
using System.Text;

namespace ClientTestLibrary
{
    // Tests DateTime functions
    class TestDateFunctions
    {
        // DateTime functions
        public static void DateTimes(Assert assert)
        {
            assert.Expect(2);

            // TEST
            //[#83] by C#
            var str = "2015-03-24T10:48:09.1500225+03:00";
            var bridgeDate = DateTime.Parse(str);
            var bridgeDate1 = new DateTime(str);

            assert.DeepEqual(bridgeDate, bridgeDate1, "[#83] C# bridgeDate = bridgeDate1");

            // TEST
            //[#83] by JavaScript code. This is to check the same issue as above and just to check another way of calling QUnit from JavaScript
            Script.Write<dynamic>(@"var str = ""2015-03-24T10:48:09.1500225+03:00"",
    bridgeDate = Bridge.Date.parse(str),
    jsDate = new Date(Date.parse(str)),
    format = ""yyyy-MM-dd hh:mm:ss"";
    assert.deepEqual(Bridge.Date.format(bridgeDate, format), Bridge.Date.format(jsDate, format), ""[#83] js"")");
        }
    }
}
