using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Bridge;
using Bridge.Html5;

namespace ClientTestLibrary
{
    [FileName("testSets.js")]
    public struct Point
    {
        //TODO Add more types
        public static int StatitIntNotInitialized;
        public static string StatitStringNotInitialized;
        public static int StaticInt;
        public static string StaticString;

        public const char CONST_CHAR = 'W';

        public int x, y;

        static Point()
        {
            StaticInt = 500;
            StaticString = "Initialized";
        }

        public int Test1()
        {
            return StaticInt + x;
        }

        public Point Test2(Point p)
        {
            return new Point() { x = x + p.x, y = y + p.y };
        }

        public static int Test3()
        {
            return StatitIntNotInitialized + StaticInt;
        }
    }

    [FileName("testSets.js")]
    public struct Rectangle
    {
        public Point l;
        public Point t;

        public Rectangle(int x, int y)
        {
            //[#69]
            this = new Rectangle();

            l.x = x;
            l.y = y;
        }

        //[#66]
        public Rectangle(int x1, int y1, int x2, int y2)
        {
            l.x = x1;
            l.y = y1;
            t.x = x2;
            t.y = y2;
        }
    }

    // Tests:
    // Check value types
    [FileName("testSets.js")]
    class TestValueTypes
    {
        //Check instance methods and constructors
        public static void Test1()
        {
            TestHelper.Expect(18);

            //Check parameterless constructor
            var a = new Point();
            TestHelper.DeepEqual(a.x, 0, "x 0");
            TestHelper.DeepEqual(a.y, 0, "y 0");

            var r = new Rectangle();
            TestHelper.DeepEqual(r.l.x, 0, "r.l.x 0");
            TestHelper.DeepEqual(r.l.y, 0, "r.l.y 0");
            TestHelper.DeepEqual(r.t.x, 0, "r.t.x 0");
            TestHelper.DeepEqual(r.t.y, 0, "r.t.y 0");

            r = new Rectangle(10, 20);
            TestHelper.DeepEqual(r.l.x, 10, "r.l.x 10");
            TestHelper.DeepEqual(r.l.y, 20, "r.l.y 20");
            TestHelper.DeepEqual(r.t.x, 0, "r.t.x 0");
            TestHelper.DeepEqual(r.t.y, 0, "r.t.y 0");

            r = new Rectangle(30, 40, 50, 60);
            TestHelper.DeepEqual(r.l.x, 30, "r.l.x 30");
            TestHelper.DeepEqual(r.l.y, 40, "r.l.y 40");
            TestHelper.DeepEqual(r.t.x, 50, "r.t.x 50");
            TestHelper.DeepEqual(r.t.y, 60, "r.t.y 60");

            var i = a.Test1();
            TestHelper.DeepEqual(i, 500, "i 500");
            a.x = 300;
            i = a.Test1();
            TestHelper.DeepEqual(i, 800, "i 800");

            a.y = 400;
            var b = new Point(){x = 5, y = 7};
            var c = b.Test2(a);
            TestHelper.DeepEqual(c.x, 305, "c.x 305");
            TestHelper.DeepEqual(c.y, 407, "c.y 407");
        }

        //Check static methods and constructor
        public static void Test2()
        {
            TestHelper.Expect(7);

            TestHelper.DeepEqual(Point.StaticInt, 500, "Point.StaticInt 500");
            TestHelper.DeepEqual(Point.StaticString, "Initialized", "Point.StaticString Initialized");
            TestHelper.DeepEqual(Point.StatitIntNotInitialized, 0, "Point.StatitIntNotInitialized 0");
            TestHelper.DeepEqual(Point.StatitStringNotInitialized, null, "Point.StatitStringNotInitialized null");
            TestHelper.DeepEqual(Point.CONST_CHAR, (int)'W', "Point.CONST_CHAR W");

            Point.StatitIntNotInitialized = -1;
            TestHelper.DeepEqual(Point.StatitIntNotInitialized, -1, "Point.StatitIntNotInitialized -1");
            var i = Point.Test3();
            TestHelper.DeepEqual(i, 499, "i 499");
        }
    }
}
