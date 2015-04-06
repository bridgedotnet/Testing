using System;
using Bridge;

namespace Bridge.QUnit1
{
    [Ignore]
    [ObjectLiteral]
    public class TestSuiteDoneCallbackArgs
    {
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
        /// The time in milliseconds it took tests to run from start to finish.
        /// </summary>
        public int Runtime { get; set; }
    }
}