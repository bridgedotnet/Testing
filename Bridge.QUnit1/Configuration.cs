using System;
using Bridge;

namespace Bridge.QUnit1
{
    /// <summary>
    /// Configuration for QUnit
    /// </summary>
    [Ignore]
    public class Configuration
    {
        /// <summary>
        /// By default, QUnit runs tests when load event is triggered on the window.
        /// If you're loading tests asynchronously, you can set this property to false, then call QUnit.start() once everything is loaded.
        /// </summary>
        public bool Altertitle;

        /// <summary>
        /// By default, QUnit runs tests when load event is triggered on the window.
        /// If you're loading tests asynchronously, you can set this property to false, then call QUnit.start() once everything is loaded.
        /// </summary>
        public bool Autostart;

        /// <summary>
        /// This object isn't actually a configuration property, but is listed here anyway, as its exported through QUnit.config.
        /// This gives you access to some QUnit internals at runtime.
        /// </summary>
        //TODO!!! find out its format
        public object Current;

        /// <summary>
        /// By default, the HTML Reporter will show all the tests results. Enabling this option will make it show only the failing tests, hiding all that pass. 
        /// This can also be managed by the HTML interface.
        /// </summary>
        public bool Hidepassed;

        /// <summary>
        /// Specify a single module to run by declaring its name. By default, QUnit will run all the loaded modules when this property is not specified. 
        /// This property value must match (case insensitive) the module name or QUnit won't run any module.
        /// Prior to version 1.16.0, this property was called module.
        /// </summary>
        public string ModuleFilter;

        /// <summary>
        /// By default, QUnit will run tests first that failed on a previous run. In a large testsuite, this can speed up testing a lot.
        /// It can also lead to random errors, in case your testsuite has non-atomic tests, where the order is important. You should fix those issues, instead of disabling reordering!
        /// </summary>
        public bool Reorder;

        /// <summary>
        /// The expect() method is optional by default, though it can be useful to require each test to specify the number of expected assertions.
        /// Enabling this option will cause tests to fail, if they don't call expect() at all.
        /// </summary>
        public bool RequireExpects;

        /// <summary>
        /// This property allows QUnit to run specific test blocks by a hashed string combining their module name and test name.
        /// You can specify one or multiple tests to run.
        /// </summary>
        //TODO!!! Type Array
        public object TestId;

        /// <summary>
        /// Specify a global timeout in milliseconds after which all tests will fail with an appropriate message.
        /// Useful when async tests aren't finishing, to prevent the testrunner getting stuck.
        /// Set to something high, e.g. 30000 (30 seconds) to avoid slow tests to time out by accident.
        /// </summary>
        public int TestTimeout;

        /// <summary>
        /// By default, scroll to top of the page when suite is done. Setting this to false will leave the page scroll alone.
        /// </summary>
        public bool Scrolltop;

        /// <summary>
        /// This property controls which form controls to put into the QUnit toolbar element (below the header). By default, the "noglobals" and "notrycatch" checkboxes are there. By extending this array, you can add your own checkboxes and select lists.
        /// Each element should be an object with an id property (used as the config and query-string key) and a label property (used as text in the UI), and optionally a tooltip property (used as the title attribute to explain what the control does). Each element should also have a value property controlling available options and rendering.
        /// If value is undefined, the option will render as a checkbox. The corresponding URL parameter will be set to "true" when the checkbox is checked, and otherwise will be absent.
        /// If value is a string, the option will render as a checkbox. The corresponding URL parameter will be set to the string when the checkbox is checked, and otherwise will be absent.
        /// If value is an array, the option will render as a select-one with an empty first option, followed by an option for each element of the array, with text and value matching the element. The corresponding URL parameter will be absent when the empty option is selected, and otherwise will be set to the value of the selected array element.
        /// If value is an object, the option will render as a select-one with an empty first option, followed by an option for each property of the object, with text and value matching the name and value (respectively) of the property. The corresponding URL parameter will be absent when the empty option is selected, and otherwise will be set to the value of the selected object property.
        /// </summary>
        //TODO!!! Type Array
        public object UrlConfig;
    }
}