using Bridge;

namespace ClientTestLibrary
{
    //Does not compile issue [#59]
    [FileName("notCompiling.js")]
    class Class59
    {
        public static void Method1() { }

        public void Method1(Aux1 d) { }

        public class Aux1 { }
    }

    //Does not compile issue [#61]
    //TODO It shows a correct error description now. How to check that in tests?
    //[FileName("notCompiling.js")]
    //class Class61
    //{
    //    public static void Test1(bool condition, string message = null)
    //    {
    //        Bridge.Script.Write(string.Format("var q = {0};", 1));
    //    }
    //}

    //Error: Index was outside the bounds of the array.
    //public class Class2
    //{
    //    public static void Test1(bool condition, string message = null)
    //    {
    //        Bridge.Script.Write("");
    //    }
    //}


    //[#64]
    [FileName("notCompiling.js")]
    class Class64
    {
        public class Aux1 { }

        public Class64() { }

        public Class64(Aux1 related) { }

        public void Test()
        {
            var aux = new Class64.Aux1();
            new Class64(aux);
        }
    }

    //[#65]
    [FileName("notCompiling.js")]
    class Class65_1
    {
        public class Nested { }
    }

    [FileName("notCompiling.js")]
    class Class65_2 : Class65_1.Nested
    {
    }

    //[#66]
    [FileName("notCompiling.js")]
    public struct Rectangle66
    {
        public Rectangle66(int x1) { this = new Rectangle66(); }
        public Rectangle66(int x1, int x2) { }
    }

    [FileName("notCompiling.js")]
    //[#84] Does not compile
    class Class84
    {
        public void Test1()
        {
            try { }
            catch { }
        }
    }

    //[#89]
    //[FileName("notCompiling.js")]
    //public class Class89
    //{
    //    void Test(params object[] p)
    //    {
    //        var i = p[0];
    //    }
    //}

    //[#391]
    [FileName("notCompiling.js")]
    class Class391
    {
        public static void Main()
        {
            var TestArray1 = new[] { "TestA", "TestB", "TestC" };
            var TestArray2 = new[] { "TestA", "TestB", "TestC" };

            bool doSomething = false;
            foreach (var x in TestArray1)
            {
                foreach (var y in TestArray2)
                {
                    doSomething = x.Equals(y);
                }
            }

            foreach (var x in TestArray1)
            {
                foreach (var y in TestArray2)
                {
                    doSomething = x.Equals(y);
                }
            }
        }
    }
}
