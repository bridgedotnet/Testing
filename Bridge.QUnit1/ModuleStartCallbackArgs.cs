using System;
using Bridge;

namespace Bridge.QUnit1
{
    [Ignore]
    [ObjectLiteral]
    public class ModuleStartCallbackArgs
    {
        /// <summary>
        /// Name of the next module to run
        /// </summary>
        public string Name { get; set; }
    }
}