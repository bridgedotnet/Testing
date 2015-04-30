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
            QUnit.Test("Instance constructors and methods", TestReferenceTypes.TestInstanceConstructorsAndMethods);
            QUnit.Test("Static constructors and methods", TestReferenceTypes.TestStaticConstructorsAndMethods);
            QUnit.Test("Method parameters", TestReferenceTypes.TestMethodParameters);

            QUnit.Module("Inheritance and overloading");
            QUnit.Test("Test1", TestInheritanceOverloading.Test1);

            QUnit.Module("Value types");
            QUnit.Test("Instance constructors and methods", TestValueTypes.TestInstanceConstructorsAndMethods);
            QUnit.Test("Static constructors and methods", TestValueTypes.TestStaticConstructorsAndMethods);

            QUnit.Module("System functions");
            QUnit.Test("DateTime", TestDateFunctions.DateTimes);
            QUnit.Test("String", TestStringFunctions.Strings);
            QUnit.Test("StringBuilder", TestStringBuilderFunctions.StringBuilders);

            QUnit.Module("Try/Catch");
            QUnit.Test("Try/Catch simpe", TestTryCatchBlocks.SimpleTryCatch);
            QUnit.Test("Try/Catch caught exceptions", TestTryCatchBlocks.CaughtExceptions);
            QUnit.Test("Try/Catch thrown exceptions", TestTryCatchBlocks.ThrownExceptions);
            QUnit.Test("Try/Catch/Finally simple", TestTryCatchFinallyBlocks.SimpleTryCatchFinally);
            QUnit.Test("Try/Catch/Finally caught exceptions", TestTryCatchFinallyBlocks.CaughtExceptions);
            QUnit.Test("Try/Catch/Finally thrown exceptions", TestTryCatchFinallyBlocks.ThrownExceptions);

            QUnit.Module("Bridge GitHub issues");
            QUnit.Test("#169", TestBridgeIssues.N169);

            QUnit.Module("LINQ");

            QUnit.Test("Aggregate operators", TestLinqAggregateOperators.Test);
            QUnit.Test("Conversion operators", TestLinqConversionOperators.Test);
            QUnit.Test("Element operators", TestLinqElementOperators.Test);
            QUnit.Test("Generation operators", TestLinqGenerationOperators.Test);
            QUnit.Test("Join operators", TestLinqJoinOperators.Test);
            QUnit.Test("Grouping operators", TestLinqGroupingOperators.Test);
            QUnit.Test("Complex grouping operators.", TestLinqGroupingOperators.TestComplexGrouping);
            QUnit.Test("Anagram grouping operators.", TestLinqGroupingOperators.TestAnagrams);
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
