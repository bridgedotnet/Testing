using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Bridge;

namespace ClientTestLibrary
{
    [FileName("testSets.js")]
    class ClassA
    {
        //TODO Add more types
        public static int StatitIntNotInitialized;
        public static string StatitStringNotInitialized;

        public static int StaticInt;
        public static string StaticString;
        public const char CONST_CHAR = 'Q';
        //TODO Add more to check big/small numbers, precision etc
        public const decimal CONST_DECIMAL = 3.123456789324324324m;

        //TODO Add more types
        public int NumberA { get; set; }
        public string StringA { get; set; }
        public bool BoolA { get; set; }
        public double DoubleA { get; set; }
        public decimal DecimalA { get; set; }

        private Aux1 data;
        public Aux1 Data
        {
            get { return data; }
            set { data = value; }
        }

        static ClassA()
        {
            StaticString = "Defined string";
            StaticInt = -340;
        }

        public ClassA()
        {
            NumberA = 10;
            StringA = "Str";
            BoolA = true;
            DoubleA = Double.PositiveInfinity;
            DecimalA = Decimal.MinusOne;
            Data = new Aux1() { Number = 700 };
        }

        public ClassA(Aux1 d)
            : this()
        {
            if (d == null)
                throw new Exception("Related should not be null.");

            Data = d;
        }

        //[#89]
        public ClassA(params object[] p)
            : this()
        {
            if (p == null || p.Length < 6)
                throw new Exception("Should pass six parameters");

            if (p[0] is int)
                NumberA = (int)p[0];
            if (p[1] is string)
                StringA = (string)p[1];
            if (p[2] is bool)
                BoolA = (bool)p[2];
            if (p[3] is double)
                DoubleA = (double)p[3];
            if (p[4] is decimal)
                DecimalA = (decimal)p[4];
            if (p[5] is Aux1)
                Data = (Aux1)p[5];
        }

        public ClassA.Aux1 Method1()
        {
            var a1 = new Aux1() { Number = 1 };
            return new Aux1() { Number = 2, Related = a1 };
        }

        public void Method2(ClassA.Aux1 a)
        {
            a.Related = a;
        }

        public string Method3()
        {
            if (Data != null)
                return Data.ToString();

            return "no data";
        }

        public int Method4(int i, int add)
        {
            i = i + add;
            return i;
        }

        public int Method5(int i = -5)
        {
            return i;
        }

        public int Method5(int i = -50, int k = -60)
        {
            return i + k;
        }

        public static ClassA StaticMethod1(int i, string s, double d)
        {
            StatitIntNotInitialized = i;
            StatitStringNotInitialized = s;
            return new ClassA() { DoubleA = d };
        }

        //[#89]
        public static ClassA StaticMethod2(params object[] p)
        {
            var i = (int)p[0] + 1000;
            var s = (string)p[1];
            var d = (double)p[2];
            return StaticMethod1(i, s, d);
        }

        public static bool TryParse(object o, out int i)
        {
            i = 3;
            return true;
        }

        public static int GetDefaultInt()
        {
            return default(int);
        }

        [FileName("testSets.js")]
        //due to [#73] needs priority to be generated after the parent class
        //[Priority(-1)]
        public class Aux1
        {
            public int Number { get; set; }
            public Aux1 Related { get; set; }

            public override string ToString()
            {
                return string.Format("{0} Has related {1}", Number, Related != null ? Related.Number.ToString() : "No");
            }
        }
    }

    [FileName("testSets.js")]
    //[#68] Multiple field declaration renders incorrectly
    public class Class68
    {
        public int x, y = 1;

        public void Test()
        {
            //Multiple local vars correctly
            int x = 1, y = 2;

            var z = x + y;
        }
    }

    // Tests:
    // Reference type constructors, params method parameters, method overloading, nested classes, [FileName]
    // Full properties, short get/set properties, exceptions
    [FileName("testSets.js")]
    class TestReferenceTypes
    {
        //Check instance methods and constructors
        public static void Test1()
        {
            TestHelper.Expect(26);

            //Check parameterless constructor
            var a = new ClassA();
            TestHelper.DeepEqual(a.NumberA, 10, "NumberA 10");
            TestHelper.DeepEqual(a.StringA, "Str", "StringA Str");
            TestHelper.DeepEqual(a.BoolA, true, "BoolA true");
            TestHelper.Ok(a.DoubleA == Double.PositiveInfinity, "DoubleA Double.PositiveInfinity");
            TestHelper.DeepEqual(a.DecimalA, -1, "DecimalA Decimal.MinusOne");
            TestHelper.Ok(a.Data != null, "Data not null");
            TestHelper.DeepEqual(a.Data.Number, 700, "Data.Number 700");

            //Check constructor with parameter
            TestHelper.Throws((Action)TestSet1FailureHelper.TestConstructor1Failure, "Related should not be null");

            //Check constructor with parameter
            TestHelper.Throws((Action)TestSet1FailureHelper.TestConstructor2Failure, "Should pass six parameters");

            a = new ClassA(150, "151", true, 1.53d, 1.54m, new ClassA.Aux1() { Number = 155 });
            TestHelper.DeepEqual(a.NumberA, 150, "NumberA 150");
            TestHelper.DeepEqual(a.StringA, "151", "StringA 151");
            TestHelper.DeepEqual(a.BoolA, true, "BoolA true");
            TestHelper.DeepEqual(a.DoubleA, 1.53, "DoubleA Double.PositiveInfinity");
            TestHelper.DeepEqual(a.DecimalA, 1.54, "DecimalA 154");
            TestHelper.Ok(a.Data != null, "Data not null");
            TestHelper.DeepEqual(a.Data.Number, 155, "Data.Number 155");

            //Check instance methods
            var b = a.Method1();
            TestHelper.Ok(b != null, "b not null");
            TestHelper.DeepEqual(b.Number, 2, "b Number 2");
            TestHelper.Ok(b.Related != null, "b.Related not null");
            TestHelper.DeepEqual(b.Related.Number, 1, "b.Related Number 1");

            a.Data = b;
            TestHelper.DeepEqual(a.Method3(), "2 Has related 1", "Method3 2 Has related 1");
            a.Data = null;
            TestHelper.DeepEqual(a.Method3(), "no data", "Method3 no data");

            //Check [#68]
            var c68 = new Class68();
            TestHelper.DeepEqual(c68.x, 0, "c68.x 0");
            TestHelper.DeepEqual(c68.y, 1, "c68.y 1");
            //Check local vars do not get overridden by fields
            c68.Test();
            TestHelper.DeepEqual(c68.x, 0, "c68.x 0");
            TestHelper.DeepEqual(c68.y, 1, "c68.y 1");
        }

        //Check static methods and constructor
        public static void Test2()
        {
            TestHelper.Expect(13);

            //Check static fields initialization
            TestHelper.DeepEqual(ClassA.StatitIntNotInitialized, 0, "#74 StatitInt not initialized");
            TestHelper.DeepEqual(ClassA.StatitStringNotInitialized, null, "#74 StatitString not initialized");
            TestHelper.DeepEqual(ClassA.CONST_CHAR, 81, "#74 CONST_CHAR Q");
            TestHelper.DeepEqual(ClassA.CONST_DECIMAL, 3.123456789324324324, "#74 CONST_DECIMAL 3.123456789324324324m");

            //Check static constructor
            TestHelper.DeepEqual(ClassA.StaticInt, -340, "StatitInt initialized");
            TestHelper.DeepEqual(ClassA.StaticString, "Defined string", "StatitString initialized");

            //Check static methods
            var a = ClassA.StaticMethod1(678, "ASD", double.NaN);
            TestHelper.DeepEqual(ClassA.StatitIntNotInitialized, 678, "StatitIntNotInitialized 678");
            TestHelper.DeepEqual(ClassA.StatitStringNotInitialized, "ASD", "ClassA.StatitStringNotInitialized ASD");
            TestHelper.DeepEqual(a.DoubleA, double.NaN, "DoubleA double.NaN");

            a = ClassA.StaticMethod2((object)678, "QWE", 234);
            TestHelper.DeepEqual(ClassA.StatitIntNotInitialized, 1678, "StatitIntNotInitialized 1678");
            TestHelper.DeepEqual(ClassA.StatitStringNotInitialized, "QWE", "ClassA.StatitStringNotInitialized QWE");
            TestHelper.DeepEqual(a.DoubleA, 234, "DoubleA 234");

            TestHelper.Throws((Action)TestSet1FailureHelper.TestConstructor2Failure, description: "Cast exception should occur");
        }

        //Check default parameters, method parameters, default values
        public static void Test3()
        {
            TestHelper.Expect(16);

            //Check default parameters
            var ra = new ClassA();
            int r = ra.Method5(5);
            TestHelper.DeepEqual(r, 5, "r 5");
            r = ra.Method5(i: 15);
            TestHelper.DeepEqual(r, 15, "r 15");
            r = ra.Method5(5, 6);
            TestHelper.DeepEqual(r, 11, "r 11");
            r = ra.Method5(k: 6);
            TestHelper.DeepEqual(r, -44, "r -44");

            //Check referencing did not change data
            var a = new ClassA();
            var b = a.Method1();
            var c = b.Related;
            a.Method2(b);
            TestHelper.Ok(b != null, "b not null");
            TestHelper.DeepEqual(b.Number, 2, "b Number 2");
            TestHelper.Ok(b.Related != null, "b.Related not null");
            TestHelper.DeepEqual(b.Related.Number, 2, "b.Related Number 2");

            TestHelper.Ok(c != null, "c not null");
            TestHelper.DeepEqual(c.Number, 1, "c Number 1");
            TestHelper.Ok(c.Related == null, "c.Related null");

            //Check value local parameter
            var input = 1;
            var result = a.Method4(input, 4);
            TestHelper.DeepEqual(input, 1, "input 1");
            TestHelper.DeepEqual(result, 5, "result 5");

            //[#86]
            var di = ClassA.GetDefaultInt();
            TestHelper.DeepEqual(di, 0, "di 0");

            //Check  "out parameter"
            //[#85]
            int i;
            var tryResult = ClassA.TryParse("", out i);
            TestHelper.Ok(tryResult, "tryResult");
            TestHelper.DeepEqual(i, 3, "i 3");
        }
    }

    [FileName("testSets.js")]
    public class TestSet1FailureHelper
    {
        //For testing exception throwing in constructors we need a separate method as constructors cannot be delegates
        public static void TestConstructor1Failure()
        {
            new ClassA((ClassA.Aux1)null);
        }

        public static void TestConstructor2Failure()
        {
            var t = new ClassA(new object[2]);
        }

        public static void StaticMethod2Failure()
        {
            ClassA.StaticMethod2("1", "some string", "345.345435");
        }
    }
}
