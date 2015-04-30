Bridge.define('ClientTestLibrary.RunTests', {
    statics: {
        config: {
            init: function () {
                Bridge.ready(this.main);
            }
        },
        main: function () {
            //Test Module hooks
            // Commented out due to issue [#130]
            //var hooks = new ModuleHooks()
            //{
            //    BeforeEach = () => { TestRunner.MyCount++; This.Instance.ToDynamic().MyCount = MyCount; },
            //    AfterEach = () => { Window.Alert(This.Instance.ToDynamic().MyCount); },
            //};
            //QUnit.Module("Reference types", hooks);

            QUnit.module("Reference types");
            QUnit.test("Test1", ClientTestLibrary.TestReferenceTypes.test1);
            QUnit.test("Test2", ClientTestLibrary.TestReferenceTypes.test2);
            QUnit.test("Test3", ClientTestLibrary.TestReferenceTypes.test3);

            QUnit.module("Inheritance and overloading");
            QUnit.test("Test1", ClientTestLibrary.TestInheritanceOverloading.test1);

            QUnit.module("Value types");
            QUnit.test("Test1", ClientTestLibrary.TestValueTypes.test1);
            QUnit.test("Test2", ClientTestLibrary.TestValueTypes.test2);

            QUnit.module("System functions");
            QUnit.test("DateTime", ClientTestLibrary.TestDateFunctions.dateTimes);
            QUnit.test("String", ClientTestLibrary.TestStringFunctions.strings);
            QUnit.test("StringBuilder", ClientTestLibrary.TestStringBuilderFunctions.stringBuilders);

            QUnit.module("Try/catch");
            QUnit.test("Try/Catch", ClientTestLibrary.TestCatchBlocks.test1);

            QUnit.module("Bridge GitHub issues");
            QUnit.test("#169", ClientTestLibrary.TestBridgeIssues.n169);

            QUnit.module("LINQ");

            QUnit.test("Aggregate operators", ClientTestLibrary.Linq.TestLinqAggregateOperators.test);
            QUnit.test("Conversion operators", ClientTestLibrary.Linq.TestLinqConversionOperators.test);
            QUnit.test("Element operators", ClientTestLibrary.Linq.TestLinqElementOperators.test);
            QUnit.test("Generation operators", ClientTestLibrary.Linq.TestLinqGenerationOperators.test);
            QUnit.test("Join operators", ClientTestLibrary.Linq.TestLinqJoinOperators.test);
            QUnit.test("Grouping operators", ClientTestLibrary.Linq.TestLinqGroupingOperators.test);
            QUnit.test("Complex grouping operators.", ClientTestLibrary.Linq.TestLinqGroupingOperators.testComplexGrouping);
            QUnit.test("Anagram grouping operators.", ClientTestLibrary.Linq.TestLinqGroupingOperators.testAnagrams);
            QUnit.test("Miscellaneous operators", ClientTestLibrary.Linq.TestLinqMiscellaneousOperators.test);
            QUnit.test("Ordering operators", ClientTestLibrary.Linq.TestLinqOrderingOperators.test);
            QUnit.test("Partitioning operators", ClientTestLibrary.Linq.TestLinqPartitioningOperators.test);
            QUnit.test("Projection operators", ClientTestLibrary.Linq.TestLinqProjectionOperators.test);
            QUnit.test("Quantifiers", ClientTestLibrary.Linq.TestLinqQuantifiers.test);
            QUnit.test("Query execution", ClientTestLibrary.Linq.TestLinqQueryExecution.test);
            QUnit.test("Restriction operators", ClientTestLibrary.Linq.TestLinqRestrictionOperators.test);
            QUnit.test("Set operators", ClientTestLibrary.Linq.TestLinqSetOperators.test);
        }
    }
});

