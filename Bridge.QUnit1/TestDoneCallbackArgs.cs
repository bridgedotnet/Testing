using System;
using Bridge;

namespace Bridge.QUnit1
{
    [Ignore]
    [ObjectLiteral]
    public class TestDoneCallbackArgs
    {
        /// <summary>
        /// Name of the current test
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Name of the current module
        /// </summary>
        public string Module { get; set; }

        /// <summary>
        /// The number of failed assertions
        /// </summary>
        public int Failed { get; set; }

        /// <summary>
        /// The number of passed assertions
        /// </summary>
        public int Passed { get; set; }

        /// <summary>
        /// The total number of assertions
        /// </summary>
        public int Total { get; set; }

        /// <summary>
        /// The total runtime in millseconds of the test, including beforeEach and afterEach.
        /// </summary>
        public int Runtime { get; set; }
    }
}