using System;
using System.Collections;
using System.Collections.Generic;
using Bridge;

namespace ClientTestLibrary.Utilities
{
    [FileName("utilities.js")]
    public class TypeHelper
    {
        public static string GetTypeName(object o)
        {
            return Script.Get<string>("o.__proto__.$$name");
        }
    }
}
