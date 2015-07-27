/* global Bridge */

/**
 * @class ClientTestLibrary.Linq.TestLinqRestrictionOperators
 */
Bridge.define('ClientTestLibrary.Linq.TestLinqRestrictionOperators', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Linq.TestLinqRestrictionOperators
         * @memberof ClientTestLibrary.Linq.TestLinqRestrictionOperators
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        test: function (assert) {
            assert.expect(5);

            // TEST
            var numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
            var filteredNumbers = (Bridge.Linq.Enumerable.from(numbers).where(function (n) {
                return n <= 6;
            })).toArray();
            assert.deepEqual(filteredNumbers, [5, 4, 1, 3, 6, 2, 0], "Where elements in integer array are below or equal 6");

            // TEST
            var filteredCounts = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).where(function (p) {
                return p.getCount() < 501;
            }).select(function (p) {
                return p.getCount();
            })).toArray();
            assert.deepEqual(filteredCounts, [300, 100, 500, 50], "Where elements in Person array have Count below 501");

            // TEST
            filteredCounts = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).where(function (p) {
                return p.getCount() < 501 && p.getGroup() === "A";
            }).select(function (p) {
                return p.getCount();
            })).toArray();
            assert.deepEqual(filteredCounts, [300], "Where elements in Person array have Count below 501 ang in group 'A'");

            // TEST
            var persons = ClientTestLibrary.Utilities.Person.getPersons();
            var filteredPersonByCounts = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).where(function (p) {
                return p.getCount() < 501;
            })).toArray();

            assert.deepEqual(filteredPersonByCounts, [persons.get(0), persons.get(1), persons.get(3), persons.get(4)], "Where elements in Person array have Count below 501. Returns Person instances");

            // TEST
            var filteredPersonByCountAndIndex = Bridge.Linq.Enumerable.from(persons).where(function (p, index) {
                return p.getCount() < index * 100;
            }).toArray();

            assert.deepEqual(filteredPersonByCountAndIndex, [persons.get(4)], "Where elements in Person array have Count meet condition (p.Count < index * 100). Returns Person instances");
        }
    }
});

