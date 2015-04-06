using System;
using Bridge;

namespace Bridge.QUnit1
{
    /// <summary>
    ///  Advanced and extensible data dumping for JavaScript.
    /// </summary>
    [Ignore]
    public class Dump
    {
        /// <summary>
        /// This method does string serialization by parsing data structures and objects.
        /// It parses DOM elements to a string representation of their outer HTML.
        /// By default, nested structures will be displayed up to five levels deep.
        /// Anything beyond that is replaced by [object Object] and [object Array] placeholders.
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public virtual object Parse(object data)
        {
            return null;
        }

        /// <summary>
        /// Representing how deep the elements should be parsed by <Dump(object data)>.
        /// </summary>
        public int MaxDepth;
    }
}
