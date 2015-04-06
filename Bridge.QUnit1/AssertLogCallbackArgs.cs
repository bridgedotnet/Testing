using System;
using Bridge;

namespace Bridge.QUnit1
{
    [Ignore]
    [ObjectLiteral]
    public class AssertLogCallbackArgs
    {
        /// <summary>
        /// The boolean result of an assertion, true means passed, false means failed.
        /// </summary>
        public bool Result { get; set; }

        /// <summary>
        /// One side of a comparision assertion. Can be undefined when ok() is used.
        /// </summary>
        public object Actual { get; set; }

        /// <summary>
        /// One side of a comparision assertion. Can be undefined when ok() is used.
        /// </summary>
        public object Expected { get; set; }

        /// <summary>
        /// A string description provided by the assertion.
        /// </summary>
        public string Message { get; set; }

        /// <summary>
        /// The associated stacktrace, either from an exception or pointing to the source of the assertion. Depends on browser support for providing stacktraces, so can be undefined.
        /// </summary>
        public string Source { get; set; }

        /// <summary>
        /// The test module name of the assertion. If the assertion is not connected to any module, the property's value will be undefined.
        /// </summary>
        public string Module { get; set; }

        /// <summary>
        /// The test block name of the assertion.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// The time elapsed in milliseconds since the start of the containing Test(), including setup.
        /// </summary>
        public int Runtime { get; set; }
    }
}