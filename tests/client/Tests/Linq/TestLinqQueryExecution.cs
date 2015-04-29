using Bridge.Linq;
using Bridge.QUnit;
using System.Linq;

namespace ClientTestLibrary.Linq
{
    class TestLinqQueryExecution
    {
        public static void Test(Assert assert)
        {
            assert.Expect(6);

            // TEST
            int[] numbers = new int[] { 5, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
            int i = 0;

            var aQuery = from n in numbers select ++i;
            assert.Equal(i, 0, "Query is not executed until you enumerate over them");

            // TEST
            aQuery.ToList();
            assert.Equal(i, 10, "Query is  executed after you enumerate over them");

            i = 0;

            // TEST
            var bQuery = (from n in numbers select ++i).Max();
            assert.Equal(i, 10, "Max() executes immediately");

            // TEST
            var smallNumbers = from n in numbers where n <= 3 select n;
            var smallerEvenNumbers = from n in smallNumbers where n % 2 == 0 select n;
            assert.DeepEqual(smallerEvenNumbers.ToArray(), new[] { 2, 0 }, "Query in a query");

            // TEST
            numbers.ForEach((x, index) => numbers[index] = -numbers[index]);
            assert.DeepEqual(numbers.ToArray(), new int[] { -5, -4, -1, -3, -9, -8, -6, -7, -2, 0 }, "ForEach()");

            // TEST
            assert.DeepEqual(smallerEvenNumbers.ToArray(), new[] { -4, -8, -6, -2, 0 }, "Second query run on a modified source");
        }
    }
}
