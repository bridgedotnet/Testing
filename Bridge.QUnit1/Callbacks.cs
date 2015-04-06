using System;
using Bridge;

namespace Bridge.QUnit1
{
    /// <summary>
    /// When integrating QUnit into other tools like CI servers, use these callbacks as an API to read test results.
    /// </summary>
    public partial class QUnit
    {
        /// <summary>
        /// Register a callback to fire whenever the test suite begins. It is called once before running any tests.
        /// </summary>
        /// <param name="callback ">Callback to execute</param>
        public static void Begin(Action<TestSuiteBeginCallbackArgs> callback)
        { }

        /// <summary>
        /// Register a callback to fire whenever the test suite ends.
        /// </summary>
        /// <param name="callback ">Callback to execute</param>
        public static void Done(Action<TestSuiteDoneCallbackArgs> callback)
        { }

        /// <summary>
        /// Register a callback to fire whenever an assertion completes.
        /// </summary>
        /// <param name="callback ">Callback to execute</param>
        public static void Log(Action<AssertLogCallbackArgs> callback)
        { }

        /// <summary>
        /// Register a callback to fire whenever a module ends.
        /// </summary>
        /// <param name="callback ">Callback to execute</param>
        public static void ModuleDone(Action<ModuleDoneCallbackArgs> callback)
        { }

        /// <summary>
        /// Register a callback to fire whenever a module begins.
        /// </summary>
        /// <param name="callback ">Callback to execute</param>
        public static void ModuleStart(Action<ModuleStartCallbackArgs> callback)
        { }

        /// <summary>
        /// Register a callback to fire whenever a test ends.
        /// </summary>
        /// <param name="callback ">Callback to execute</param>
        public static void TestDone(Action<TestDoneCallbackArgs> callback)
        { }

        /// <summary>
        /// Register a callback to fire whenever a test begins.
        /// </summary>
        /// <param name="callback ">Callback to execute</param>
        public static void TestStart(Action<TestStartCallbackArgs> callback)
        { }
    }
}