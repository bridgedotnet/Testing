using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.QUnit;

using ClientTestLibrary.Utilities;

namespace ClientTestLibrary.Linq
{
    class TestLinqSetOperators
    {
        public static void Test(Assert assert)
        {
            int[] a = { 1, 2 };
            int[] b = { 1, 2 };
            var result = a.Intersect(b).ToArray();

            assert.Expect(8);

            int[] numbers = { 1, 2, 3, 3, 1, 5, 4, 2, 3 };
            var uniqueNumbers = numbers.Distinct().ToArray();
            assert.DeepEqual(uniqueNumbers, new[] { 1, 2, 3, 5, 4 }, "Distinct() to remove duplicate elements.");

            var distinctPersonGroups = (from p in Person.GetPersons() select p.Group).Distinct().ToArray();
            assert.DeepEqual(distinctPersonGroups, new[] { "A", "C", "B", null }, "Distinct() to remove duplicate Group elements.");

            int[] numbersA = { 0, 2, 4, 5, 6, 8, 9 };
            int[] numbersB = { 1, 3, 5, 7, 8 };
            var uniqueNumbersAB = numbersA.Union(numbersB).ToArray();
            assert.DeepEqual(uniqueNumbersAB, new[] { 0, 2, 4, 5, 6, 8, 9, 1, 3, 7 }, "Union() to get unique number sequence.");

            var nameChars = from p in Person.GetPersons() select p.Name[0];
            var cityChars = from p in Person.GetPersons() select p.City[0];
            var uniqueFirstChars = nameChars.Union(cityChars).ToArray();
            assert.DeepEqual(uniqueFirstChars, new[] { (int)'F', (int)'Z', (int)'J', (int)'B', (int)'D', (int)'I', (int)'M', (int)'N',
                                                        (int)'E', (int)'T', (int)'L', (int)'P', (int)'R', (int)'O' },
                "Union to get unique first letters of Name and City.");

            var commonNumbersCD = numbersA.Intersect(numbersB).ToArray();
            assert.DeepEqual(commonNumbersCD, new[] { 5, 8 }, "Intersect() to get common number sequence.");

            nameChars = from p in Person.GetPersons() select p.Name[0];
            cityChars = from p in Person.GetPersons() select p.City[0];
            var commonFirstChars = nameChars.Intersect(cityChars).ToArray();
            assert.DeepEqual(commonFirstChars, new[] { (int)'B', (int)'D' }, "Intersect() to get common first letters of Name and City.");

            var exceptNumbersCD = numbersA.Except(numbersB).ToArray();
            assert.DeepEqual(exceptNumbersCD, new[] { 0, 2, 4, 6, 9 },
                "Except() to get numbers from first sequence and does not contain the second sequence numbers.");

            var exceptFirstChars = nameChars.Except(cityChars).ToArray();
            assert.DeepEqual(exceptFirstChars, new[] { (int)'F', (int)'Z', (int)'J', (int)'I', (int)'M', (int)'N' },
                "Except() to get letters from Name sequence and does not contain City letters.");
        }
    }
}
