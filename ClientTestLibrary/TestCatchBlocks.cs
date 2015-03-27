using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Bridge;

namespace ClientTestLibrary
{
    // Tests catch, finally etc
    [FileName("testSets.js")]
    class TestCatchBlocks
    {
        //[#84] Does not compile
        public static void Test1()
        {
            TestHelper.Expect(0);

            try { }
            catch { }
        }
    }
}
