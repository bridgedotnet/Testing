using System;
using Bridge;

namespace Bridge.QUnit1
{
    [Ignore]
    [ObjectLiteral]
    public class ModuleDoneCallbackArgs
    {
        /// <summary>
        /// Name of the module
        /// </summary>
        public string Name { get; set; }

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
        /// The total runtime in millseconds of this module.
        /// </summary>
        public int Runtime { get; set; }
    }
}