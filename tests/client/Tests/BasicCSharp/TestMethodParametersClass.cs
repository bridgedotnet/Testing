using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    [FileName("testMethodParameters.js")]
    class TestMethodParametersClass
    {
        private static int MethodDefault(int i = 5)
        {
            return i;
        }

        private static int MethodParams(params int[] n)
        {
            int sum = 0;
            for (int i = 0; i < n.Length; i++)
            {
                sum += n[i];
            }

            return sum;
        }

        public static void Test(Assert assert)
        {
            assert.Expect(3);

            assert.Equal(TestMethodParametersClass.MethodDefault(), 5, "Default parameter - 5");
            assert.Equal(TestMethodParametersClass.MethodDefault(10), 10, "Default parameter - 10");

            assert.Equal(TestMethodParametersClass.MethodParams(new[] { 1, 2, 3 }), 6, "params int[]");
        }
    }
}
