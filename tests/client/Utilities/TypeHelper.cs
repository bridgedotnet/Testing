using Bridge;

namespace ClientTestLibrary.Utilities
{
    [FileName("utilities.js")]
    public class TypeHelper
    {
        public static string GetTypeName(object o)
        {
            return o.GetClassName();
            //return Script.Get<string>("o.__proto__.$$name");
        }
    }
}
