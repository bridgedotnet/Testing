using System;
using Bridge;
using Bridge.Html5;
using Bridge.QUnit1;

namespace ClientTestLibrary
{
    [FileName("testRunner.js")]
    class RunTests
    {
        //private static int MyCount;

        [Ready]
        public static void Main()
        {
            //Test configuration
            //QUnit.Config.Autostart = true;

            //Test callbacks
            //QUnit.ModuleDone((e) => { Window.Alert(e.Name); });

            //Test Dump
            //var arr = new[] { 1, 2, 3 };
            //var du = QUnit.Dump.Parse(arr);
            //Console.Log(du);

            //Test Exdend
            //var b = new
            //{
            //    a = 1,
            //    b = 2,
            //    z = 3
            //};
            //Console.Log(b);

            //QUnit.Extend(b, new
            //{
            //    b = 2.5,
            //    c = 3,
            //    z = "undefined"
            //});
            //Console.Log(b);

            //Test Module hooks
            // Commented out due to issue [#130]
            //var hooks = new ModuleHooks()
            //{
            //    BeforeEach = () => { TestRunner.MyCount++; This.Instance.ToDynamic().MyCount = MyCount; },
            //    AfterEach = () => { Window.Alert(This.Instance.ToDynamic().MyCount); },
            //};
            //QUnit.Module("Reference types", hooks);

            QUnit.Module("Reference types");
            QUnit.Test("Test1", TestReferenceTypes.Test1);
            QUnit.Test("Test2", TestReferenceTypes.Test2);
            QUnit.Test("Test3", TestReferenceTypes.Test3);

            QUnit.Module("Inheritance and overloading");
            QUnit.Test("Test1", TestInheritanceOverloading.Test1);

            QUnit.Module("Value types");
            QUnit.Test("Test1", TestValueTypes.Test1);
            QUnit.Test("Test2", TestValueTypes.Test2);

            QUnit.Module("System functions");
            QUnit.Test("DateTime", TestSystemFunctions.Test1);
            QUnit.Test("String", TestSystemFunctions.Test2);
            QUnit.Test("StringBuilder", TestSystemFunctions.Test3);

            QUnit.Module("Try/catch");
            QUnit.Test("Try/Catch", TestCatchBlocks.Test1);


            QUnit.Module("Bridge GitHub issues");
            QUnit.Test("#169", TestBridgeIssues.N169);
        }
    }
}
