using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Bridge;
using Bridge.Html5;

namespace ClientTestLibrary
{
    [FileName("testRunner.js")]
    class TestRunner
    {
        [DOMContentLoaded]
        public static void Main()
        {
            TestHelper.Module("Reference types");
            TestHelper.Test("Test1", (Action)TestReferenceTypes.Test1);
            TestHelper.Test("Test2", (Action)TestReferenceTypes.Test2);
            TestHelper.Test("Test3", (Action)TestReferenceTypes.Test3);

            TestHelper.Module("Inheritance and overloading");
            TestHelper.Test("Test1", (Action)TestInheritanceOverloading.Test1);

            TestHelper.Module("Value types");
            TestHelper.Test("Test1", (Action)TestValueTypes.Test1);
            TestHelper.Test("Test2", (Action)TestValueTypes.Test2);

            TestHelper.Module("System functions");
            TestHelper.Test("DateTime", (Action)TestSystemFunctions.Test1);
            TestHelper.Test("String", (Action)TestSystemFunctions.Test2);

            TestHelper.Module("Try/catch");
            TestHelper.Test("DateTime", (Action)TestCatchBlocks.Test1);
        }
    }
}
