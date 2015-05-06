using Bridge;
using Bridge.QUnit;
using System;
using System.Text;

namespace ClientTestLibrary
{
    // Tests DateTime functions
    class TestStringFunctions
    {
        // String functions
        public static void Strings(Assert assert)
        {
            assert.Expect(39);

            // TEST ToLowerCase
            var s = "HELLO".ToLowerCase();
            assert.DeepEqual(s, "hello", "'HELLO'.ToLowerCase()");

            // TEST ToUpperCase
            s = "hello".ToUpperCase();
            assert.DeepEqual(s, "HELLO", "'hello'.ToUpperCase()");

            s = "Hello Bridge.NET";
            // TEST String(string) constructor
            assert.DeepEqual(new String(s), s, "new String('" + s + "')");

            // TEST String(char, count) constructor
            assert.DeepEqual(new String('-', 4), "----", "new String('-',4)");

            // TEST IndexOfAny
            char[] anyOf = new char[] { 'x', 'b', 'i' };
            string sAnyOf = "['x','b','i']";

            assert.DeepEqual(s.IndexOfAny(anyOf), 8, "'" + s + "'.IndexOfAny(" + sAnyOf + ")");
            assert.Throws(() => s.IndexOfAny(anyOf, 18, 8), "'" + s + "'.IndexOfAny(" + sAnyOf + ")");
            assert.Throws(() => s.IndexOfAny(null), "'" + s + "'.IndexOfAny(null)");

            s = string.Empty;
            assert.DeepEqual(s.IndexOfAny(anyOf), -1, "String.Empty.IndexOfAny(" + sAnyOf + ")");
            
            s = null;
            assert.DeepEqual(s.IndexOfAny(anyOf), -1, "null.IndexOfAny(" + sAnyOf + ")");

            // TEST IndexOf
            s = "Hello Bridge.NET";

            assert.DeepEqual(s.IndexOf('e'), 1, "'" + s + "'.IndexOf('e')");
            assert.DeepEqual(s.IndexOf("e."), 11, "'" + s + "'.IndexOf('e.')");
            assert.DeepEqual(s.IndexOf('e', 6, 8), 11, "'" + s + "'.IndexOf('e', 6, 8)");            
            assert.Throws(() => s.IndexOf(null), "'" + s + "'.IndexOf(null)");

            s = string.Empty;
            assert.DeepEqual(s.IndexOf('e'), -1, "String.Empty.IndexOf('e')");

            s = null;
            assert.DeepEqual(s.IndexOf('e'), -1, "null.IndexOf('e')");

            // TEST Compare
            string s1 = "Animal";
            string s2 = "animal";

            assert.DeepEqual(string.Compare(s1, s2, true), 0, "String.Compare('" + s1 + "', '" + s2 + "', true)");
            assert.DeepEqual(string.Compare(s1, s2, false), 1, "String.Compare('" + s1 + "', '" + s2 + "', false)");

            string[] threeIs = new string[3];
            threeIs[0] = "\u0069";
            threeIs[1] = "\u0131";
            threeIs[2] = "\u0049";

            StringComparison[] scValues = {
                StringComparison.CurrentCulture,
                StringComparison.CurrentCultureIgnoreCase,
                StringComparison.InvariantCulture,
                StringComparison.InvariantCultureIgnoreCase,
                StringComparison.Ordinal,
                StringComparison.OrdinalIgnoreCase };

            int[] expected = { -1,-1,1,-1,0,1,-1,-1,1,-1,0,1,-1,1,1,0,0,0 };
            int expectedIndex = 0;

            foreach (StringComparison sc in scValues)
            {
                Test(0, 1, sc, threeIs, expected, expectedIndex++, assert);
                Test(0, 2, sc, threeIs, expected, expectedIndex++, assert);
                Test(1, 2, sc, threeIs, expected, expectedIndex++, assert);
            }

            // TEST Contains            
            s = "Hello Bridge.NET";

            assert.DeepEqual(s.Contains("Bridge"), true, "'" + s + "'.Contains('Bridge')");
            assert.DeepEqual(s.Contains(String.Empty), true, "'" + s + "'.Contains(String.Empty)");
            assert.DeepEqual(String.Empty.Contains("Bridge"), false, "String.Empty.Contains('Bridge')");
            assert.Throws(() => s.Contains(null), "null.Contains('Bridge')");
        }

        protected static void Test(int x, int y,
                                   StringComparison comparison,
                                   string[] testI, int[] expected, int expectedIndex, Assert assert)
        {
            int cmpValue = 0;
            cmpValue = String.Compare(testI[x], testI[y], comparison);
            assert.DeepEqual(cmpValue, expected[expectedIndex], "String.Compare('" + testI[x] + "', '" + testI[y] + "'," + comparison + ")");
        }
    }
}
