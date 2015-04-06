using System;
using Bridge;

namespace Bridge.QUnit1
{
    [Ignore]
    public partial class QUnit
    {
        /// <summary>
        /// Group related tests under a single label.
        /// </summary>
        /// <param name="name">Label for this group of tests</param>
        public static void Module(string name)
        {
        }

        /// <summary>
        /// Group related tests under a single label.
        /// </summary>
        /// <param name="name">Label for this group of tests</param>
        /// <param name="hooks">Callbacks to run before and after each test</param>
        public static void Module(string name, ModuleHooks hooks)
        {
        }

        /// <summary>
        /// Adds a test like object to be skipped.
        /// </summary>
        /// <param name="name">Title of unit being tested</param>
        public static void Skip(string name)
        {
        }

        /// <summary>
        /// Start running tests again after the testrunner was stopped.
        /// The method must be used to start a test run that has QUnit.config.autostart set to false.
        /// </summary>
        public static void Start()
        {
        }

        /// <summary>
        /// Add a test to run.
        /// The assert argument to the callback contains all of QUnit's assertion methods. Use this argument to call your test assertions.
        /// </summary>
        /// <param name="name">Title of unit being tested</param>
        /// <param name="callback">Function to close over assertions</param>
        public static void Test(string name, Action<Assert> callback)
        {
        }
    }
}
