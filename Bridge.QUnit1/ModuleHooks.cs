using System;
using Bridge;

namespace Bridge.QUnit1
{
    /// <summary>
    /// You can specify code to run before and after each test using the hooks argument, and also to create properties that will be shared on the context of each test.
    /// Any additional properties on the hooks object will be added to that context.
    /// </summary>
    [Ignore]
    [ObjectLiteral]
    public class ModuleHooks
    {
        /// <summary>
        /// Runs before each test
        /// </summary>
        public Action BeforeEach { get; set; }

        /// <summary>
        /// Runs after each test
        /// </summary>
        public Action AfterEach { get; set; }
    }
}