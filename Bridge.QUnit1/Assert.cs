using System;
using Bridge;

namespace Bridge.QUnit1
{
    [Ignore]
    public class Assert
    {
        /// <summary>
        /// Instruct QUnit to wait for an asynchronous operation.
        /// When your test has any asynchronous exit points, call assert.async() to get a unique resolution callback for each async operation.
        /// The callback returned from assert.async() will throw an Error if is invoked more than once.
        /// </summary>
        public virtual Action Async()
        {
            return null;
        }

        /// <summary>
        /// A non-strict comparison, roughly equivalent to JUnit's assertEquals.
        /// </summary>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        public virtual void Equal(object actual, object expected)
        {
        }

        /// <summary>
        /// A non-strict comparison, roughly equivalent to JUnit's assertEquals.
        /// </summary>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        /// <param name="message">A short description of the assertion</param>
        public virtual void Equal(object actual, object expected, string message)
        {
        }

        /// <summary>
        ///  A deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.
        /// </summary>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        public virtual void DeepEqual(object actual, object expected)
        {
        }

        /// <summary>
        ///  A deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.
        /// </summary>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        /// <param name="message">A short description of the assertion</param>
        public virtual void DeepEqual(object actual, object expected, string message)
        {
        }

        /// <summary>
        /// Specify how many assertions are expected to run within a test.
        /// If the number of assertions run does not match the expected count, the test will fail.
        /// </summary>
        /// <param name="number">Number of assertions in this test.</param>
        public virtual void Expect(int number)
        { }

        /// <summary>
        /// An inverted deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.
        /// </summary>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        public virtual void NotDeepEqual(object actual, object expected)
        {
        }

        /// <summary>
        /// An inverted deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.
        /// </summary>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        /// <param name="message">A short description of the assertion</param>
        public virtual void NotDeepEqual(object actual, object expected, string message)
        {
        }

        /// <summary>
        /// A non-strict comparison, checking for inequality.
        /// </summary>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        public virtual void NotEqual(object actual, object expected)
        {
        }

        /// <summary>
        /// A non-strict comparison, checking for inequality.
        /// </summary>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        /// <param name="message">A short description of the assertion</param>
        public virtual void NotEqual(object actual, object expected, string message)
        {
        }

        /// <summary>
        /// A strict comparison of an object's own properties, checking for inequality.
        /// </summary>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        /// <param name="message">A short description of the assertion</param>
        public virtual void NotPropEqual(object actual, object expected)
        {
        }

        /// <summary>
        /// A strict comparison of an object's own properties, checking for inequality.
        /// </summary>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        /// <param name="message">A short description of the assertion</param>
        public virtual void NotPropEqual(object actual, object expected, string message)
        {
        }

        /// <summary>
        /// A strict comparison, checking for inequality.
        /// </summary>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        public virtual void NotStrictEqual(object actual, object expected)
        {
        }

        /// <summary>
        /// A strict comparison, checking for inequality.
        /// </summary>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        /// <param name="message">A short description of the assertion</param>
        public virtual void NotStrictEqual(object actual, object expected, string message)
        {
        }

        /// <summary>
        /// A boolean check, equivalent to CommonJS's assert.ok() and JUnit's assertTrue(). Passes if the first argument is truthy.
        /// </summary>
        /// <param name="state">Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        public virtual void Ok(object state)
        {
        }

        /// <summary>
        /// A boolean check, equivalent to CommonJS's assert.ok() and JUnit's assertTrue(). Passes if the first argument is truthy.
        /// </summary>
        /// <param name="state">Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        /// <param name="message">A short description of the assertion</param>
        public virtual void Ok(object state, string message)
        {
        }

        /// <summary>
        /// A strict type and value comparison of an object's own properties.
        /// </summary>
        /// <param name="actual">Object being tested</param>
        /// <param name="expected">Known comparison value</param>
        public virtual void PropEqual(object actual, object expected)
        {
        }

        /// <summary>
        /// A strict type and value comparison of an object's own properties.
        /// </summary>
        /// <param name="actual">Object being tested</param>
        /// <param name="expected">Known comparison value</param>
        /// <param name="message">A short description of the assertion</param>
        public virtual void PropEqual(object actual, object expected, string message)
        {
        }

        /// <summary>
        /// Report the result of a custom assertion
        /// </summary>
        /// <param name="result">Result of the assertion</param>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        public virtual void Push(bool result, object actual, object expected)
        {
        }

        /// <summary>
        /// Report the result of a custom assertion
        /// </summary>
        /// <param name="result">Result of the assertion</param>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        /// <param name="message">A short description of the assertion</param>
        public virtual void Push(bool result, object actual, object expected, string message)
        {
        }

        /// <summary>
        /// A strict type and value comparison.
        /// </summary>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        public virtual void StrictEqual(object actual, object expected)
        {
        }

        /// <summary>
        /// A strict type and value comparison.
        /// </summary>
        /// <param name="actual">Object or Expression being tested</param>
        /// <param name="expected">Known comparison value</param>
        /// <param name="message">A short description of the assertion</param>
        public virtual void StrictEqual(object actual, object expected, string message)
        {
        }

        /// <summary>
        /// Test if a callback throws an exception, and optionally compare the thrown error.
        /// </summary>
        /// <param name="block">Function to execute</param>
        /// <param name="message">A short description of the assertion</param>
        public virtual void Throws(Action block, string message)
        {
        }
    }
}
