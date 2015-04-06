using System;
using Bridge;

namespace Bridge.QUnit1
{
    [Ignore]
    [ObjectLiteral]
    public class TestStartCallbackArgs
    {
        /// <summary>
        /// Name of the next test to run
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Name of the current module
        /// </summary>
        public string Module { get; set; }
    }
}