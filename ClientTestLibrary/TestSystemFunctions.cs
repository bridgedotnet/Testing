using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Bridge;

namespace ClientTestLibrary
{
    // Tests DateTime functions
    [FileName("testSets.js")]
    class TestSystemFunctions
    {
        // DateTime functions
        public static void Test1()
        {
            TestHelper.Expect(2);

            //[#83] by C#
            var str = "2015-03-24T10:48:09.1500225+03:00";
            var bridgeDate = DateTime.Parse(str);
            var bridgeDate1 = new DateTime(str);
            TestHelper.DeepEqual(bridgeDate, bridgeDate1, "[#83] C# bridgeDate = bridgeDate1");

            //[#83] by js
            Script.Write<dynamic>(@"var str = ""2015-03-24T10:48:09.1500225+03:00"",
    bridgeDate = Bridge.Date.parse(str),
    jsDate = new Date(Date.parse(str)),
    format = ""yyyy-MM-dd hh:mm:ss"";
    deepEqual(Bridge.Date.format(bridgeDate, format), Bridge.Date.format(jsDate, format), ""[#83] js"")");
        }

        // String functions
        public static void Test2()
        {
            TestHelper.Expect(0);
        }
    }
}
