using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Bridge;
using Bridge.Html5;

namespace ClientTestLibrary
{
    [FileName("testRunner.js")]
    class TestHelper
    {
        #region QUnit API

        public static void Equal(object op1, object op2, string description = null)
        {
            Script.Write("equal(op1, op2, description);");
        }

        public static void DeepEqual(object op1, object op2, string description = null)
        {
            Script.Write("deepEqual(op1, op2, description);");
        }

        //TODO check that it works properly - compares exceptionMessage
        //public static void Throws(Delegate d, string exceptionMessage, string description = null)
        //{
        //    Window.Instance.ToDynamic().TestWrapper.throwsFuncWrapper1(d, exceptionMessage, description);
        //}

        public static void Throws(Delegate d, string description = null)
        {
            Window.Instance.ToDynamic().throws(d, description);
        }

        public static void Expect(int count)
        {
            Script.Write("expect(count);");
        }

        public static void Module(string name)
        {
            Script.Write("module(name);");
        }

        public static void Ok(object condition, string description = null)
        {
            Script.Write("ok(condition, description);");
        }

        public static void Test(string name, Delegate d)
        {
            Window.Instance.ToDynamic().test(name, d);
        }

        #endregion QUnit API
    }
}
