using System;
using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using ClientTestLibrary.Linq;

namespace ClientTestLibrary
{
    [FileName("testRunner.js")]
    class RunTests
    {
        //private static int MyCount;

        [Ready]
        public static void Main()
        {
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
            QUnit.Test("DateTime", TestSystemFunctions.DateTimes);
            QUnit.Test("String", TestSystemFunctions.Strings);
            QUnit.Test("StringBuilder", TestSystemFunctions.StringBuilders);

            QUnit.Module("Try/catch");
            QUnit.Test("Try/Catch", TestCatchBlocks.Test1);

            QUnit.Module("Bridge GitHub issues");
            QUnit.Test("#169", TestBridgeIssues.N169);

            QUnit.Module("LINQ");

            QUnit.Test("Aggregate operators", TestLinqAggregateOperators.Test);
            QUnit.Test("Conversion operators", TestLinqConversionOperators.Test);
            QUnit.Test("Element operators", TestLinqElementOperators.Test);
            QUnit.Test("Generation operators", TestLinqGenerationOperators.Test);
            QUnit.Test("Join operators", TestLinqJoinOperators.Test);
            QUnit.Test("Grouping operators", TestLinqGroupingOperators.Test);
            QUnit.Test("Complex grouping operators Issue #219", TestLinqGroupingOperators.TestComplexGrouping);
            QUnit.Test("Anagram grouping operators. Issue #222", TestLinqGroupingOperators.TestAnagrams);
            QUnit.Test("Miscellaneous operators", TestLinqMiscellaneousOperators.Test);
            QUnit.Test("Ordering operators", TestLinqOrderingOperators.Test);
            QUnit.Test("Partitioning operators", TestLinqPartitioningOperators.Test);
            QUnit.Test("Projection operators", TestLinqProjectionOperators.Test);
            QUnit.Test("Quantifiers", TestLinqQuantifiers.Test);
            QUnit.Test("Query execution", TestLinqQueryExecution.Test);
            QUnit.Test("Restriction operators", TestLinqRestrictionOperators.Test);
            QUnit.Test("Set operators", TestLinqSetOperators.Test);
        }
    }
}
