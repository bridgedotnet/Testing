using System;
using Bridge;

namespace Bridge.QUnit1
{
    public partial class QUnit
    {
        /// <summary>
        /// Copy the properties defined by the mixin object into the target object.
        /// This method will modify the target object to contain the "own" properties defined by the mixin.
        /// If the mixin object specifies the value of any attribute as undefined, this property will instead be removed from the target object.
        /// </summary>
        /// <param name="target">An object whose properties are to be modified.</param>
        /// <param name="mixin">An object describing which properties should be modified.</param>
        /// <returns></returns>
        public static void Extend(object target, object mixin)
        {
        }
    }
}