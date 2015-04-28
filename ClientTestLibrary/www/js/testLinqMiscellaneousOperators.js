Bridge.define('ClientTestLibrary.Linq.TestLinqMiscellaneousOperators', {
    statics: {
        test: function (assert) {
            assert.expect(4);

            var numbersA = [4, 1, 3];
            var numbersB = [2, 3, 5];
            var concatNumbers = numbersA.concat(numbersB);
            assert.deepEqual(concatNumbers, [4, 1, 3, 2, 3, 5], "Concat() numbers.");

            var names = Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).select(function (p) {
                return p.getName();
            });
            var cities = Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).select(function (p) {
                return p.getCity();
            });
            var concatNames = names.concat(cities).toArray();
            assert.deepEqual(concatNames, ["Frank", "Zeppa", "John", "Billy", "Dora", "Ian", "Mary", "Nemo", "Edmonton", "Tokyo", "Lisbon", "Paris", "Budapest", "Rome", "Dortmund", "Ocean"], "Concat() two sequences.");

            var a = ["a", "b", "z"];
            var b = ["a", "b", "z"];
            assert.ok(Bridge.Linq.Enumerable.from(a).sequenceEqual(b), "SequenceEqual() for equal sequences.");

            var c = ["a", "b", "z"];
            var d = ["a", "z", "b"];
            assert.ok(!Bridge.Linq.Enumerable.from(c).sequenceEqual(d), "SequenceEqual() for not equal sequences.");
        }
    }
});

