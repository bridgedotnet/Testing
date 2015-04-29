using Bridge.QUnit;
using ClientTestLibrary.Utilities;
using System.Linq;

namespace ClientTestLibrary.Linq
{
    class TestLinqMiscellaneousOperators
    {
        public static void Test(Assert assert)
        {
            assert.Expect(4);

            int[] numbersA = { 4, 1, 3 };
            int[] numbersB = { 2, 3, 5 };

            var concatNumbers = numbersA.Concat(numbersB);
            assert.DeepEqual(concatNumbers, new[] { 4, 1, 3, 2, 3, 5 }, "Concat() numbers");

            var names = from p in Person.GetPersons() select p.Name;
            var cities = from p in Person.GetPersons() select p.City;
            var concatNames = names.Concat(cities).ToArray();

            assert.DeepEqual(concatNames,
                            new[] { "Frank", "Zeppa", "John", "Billy", "Dora", "Ian", "Mary", "Nemo",
                                    "Edmonton", "Tokyo", "Lisbon", "Paris", "Budapest", "Rome", "Dortmund", "Ocean"},
                            "Concat() two sequences");

            var a = new[] { "a", "b", "z" };
            var b = new[] { "a", "b", "z" };

            assert.Ok(a.SequenceEqual(b), "SequenceEqual() for equal sequences");

            var c = new[] { "a", "b", "z" };
            var d = new[] { "a", "z", "b" };

            assert.Ok(!c.SequenceEqual(d), "SequenceEqual() for not equal sequences");
        }
    }
}
