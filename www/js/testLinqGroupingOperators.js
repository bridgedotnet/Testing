/* global Bridge */

/** @namespace ClientTestLibrary.Linq */

/**
 * @public
 * @class ClientTestLibrary.Linq.AnagramEqualityComparer
 * @augments Bridge.EqualityComparer$1
 */
Bridge.define('ClientTestLibrary.Linq.AnagramEqualityComparer', {
    inherits: [Bridge.EqualityComparer$1(String)],
    /**
     * @instance
     * @public
     * @override
     * @this ClientTestLibrary.Linq.AnagramEqualityComparer
     * @memberof ClientTestLibrary.Linq.AnagramEqualityComparer
     * @param   {string}     x    
     * @param   {string}     y    
     * @return  {boolean}         
     */
    equals: function (x, y) {
        return this.getCanonicalString(x) === this.getCanonicalString(y);
    },
    /**
     * @instance
     * @public
     * @override
     * @this ClientTestLibrary.Linq.AnagramEqualityComparer
     * @memberof ClientTestLibrary.Linq.AnagramEqualityComparer
     * @param   {string}    obj    
     * @return  {number}           
     */
    getHashCode: function (obj) {
        return Bridge.getHashCode(this.getCanonicalString(obj));
    },
    /**
     * @instance
     * @private
     * @this ClientTestLibrary.Linq.AnagramEqualityComparer
     * @memberof ClientTestLibrary.Linq.AnagramEqualityComparer
     * @param   {string}    word    
     * @return  {string}            
     */
    getCanonicalString: function (word) {
        if (word === null) {
            return null;
        }

        var wordChars = Bridge.String.toCharArray(word, 0, word.length);
        wordChars.sort();

        return String(wordChars);
    }
});

/**
 * @class ClientTestLibrary.Linq.TestLinqGroupingOperators
 */
Bridge.define('ClientTestLibrary.Linq.TestLinqGroupingOperators', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Linq.TestLinqGroupingOperators
         * @memberof ClientTestLibrary.Linq.TestLinqGroupingOperators
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        test: function (assert) {
            assert.expect(3);

            // TEST
            var numbers = [2, 10, 3, 5, 30, 1, -15];
            var words = ["1.one", "3.three", "2.two", "22.twentytwo", "11.eleven", "30.thirty"];

            var numberGroups = (Bridge.Linq.Enumerable.from(numbers).groupBy(function (n) {
                return n % 5;
            }).select(function (g) {
                return { remainder: g.key(), numbers: g.toArray() };
            })).toArray();

            var numberGroupsExpected = [{ remainder: 2, numbers: [2] }, { remainder: 0, numbers: [10, 5, 30, -15] }, { remainder: 3, numbers: [3] }, { remainder: 1, numbers: [1] }];

            assert.deepEqual(numberGroups, numberGroupsExpected, "Group numbers by remainders");

            // TEST
            var wordGroups = (Bridge.Linq.Enumerable.from(words).groupBy(function (w) {
                return w.charCodeAt(0);
            }).select(function (g) {
                return { firstLetter: g.key(), words: g.toArray() };
            })).toArray();

            var wordGroupsExpected = [{ firstLetter: 49, words: ["1.one", "11.eleven"] }, { firstLetter: 51, words: ["3.three", "30.thirty"] }, { firstLetter: 50, words: ["2.two", "22.twentytwo"] }];

            assert.deepEqual(wordGroups, wordGroupsExpected, "Group words by first letters");

            // TEST
            var personGroups = (Bridge.Linq.Enumerable.from(ClientTestLibrary.Utilities.Person.getPersons()).groupBy(function (p) {
                return p.getGroup();
            }).select(function (g) {
                return { group: g.key(), persons: g.select(function (x) {
                    return x.getName();
                }).toArray() };
            })).toArray();

            var personGroupsExpected = [{ group: "A", persons: ["Frank"] }, { group: "C", persons: ["Zeppa", "Billy"] }, { group: "B", persons: ["John", "Dora", "Ian", "Mary"] }, { group: Bridge.cast(null, String), persons: ["Nemo"] }];

            assert.deepEqual(personGroups, personGroupsExpected, "Person group by Group field");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Linq.TestLinqGroupingOperators
         * @memberof ClientTestLibrary.Linq.TestLinqGroupingOperators
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testComplexGrouping: function (assert) {
            assert.expect(1);

            // TEST
            var numbers = [2, 10, 3, 5, 30, 1, -15];
            var words = ["1.one", "3.three", "2.two", "22.twentytwo", "11.eleven", "30.thirty"];

            var complexGrouping = (Bridge.Linq.Enumerable.from(numbers).select(function (n) {
                return { number: n, words: (Bridge.Linq.Enumerable.from(words).where(function (w) {
                    return String.fromCharCode(w.charCodeAt(0)) === n.toString();
                }).groupBy(function (w) {
                    return w.charCodeAt(0);
                }).select(function (g) {
                    return { letter: g.key(), letterGroups: (Bridge.Linq.Enumerable.from(g).groupBy(function (l) {
                        return l;
                    }, function (l) {
                        return l;
                    }).select(function (mg) {
                        return { letter: mg.key(), letters: mg.toArray() };
                    })).toArray() };
                })).toArray() };
            })).toArray();

            var complexGroupingExpected = ClientTestLibrary.Linq.TestLinqGroupingOperators.getComplexGroupingExpectedResult();
            assert.deepEqual(complexGrouping, complexGroupingExpected, "Complex grouping for numbers and words");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Linq.TestLinqGroupingOperators
         * @memberof ClientTestLibrary.Linq.TestLinqGroupingOperators
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testAnagrams: function (assert) {
            assert.expect(2);

            // TEST
            var anagrams = [" from ", " salt ", " earn ", " last ", " near ", " form "];

            var anagramsGroups = Bridge.Linq.Enumerable.from(anagrams).groupBy(function (w) {
                return w.trim();
            }, null, null, new ClientTestLibrary.Linq.AnagramEqualityComparer()).select(function (x) {
                return { key: x.key(), words: x.toArray() };
            }).toArray();

            var anagramsGroupsExpected = [{ key: "from", words: [" from ", " form "] }, { key: "salt", words: [" salt ", " last "] }, { key: "earn", words: [" earn ", " near "] }];

            assert.deepEqual(anagramsGroups, anagramsGroupsExpected, "Anagram grouping with equality comparer");

            // TEST
            var anagramsGroups1 = Bridge.Linq.Enumerable.from(anagrams).groupBy(function (w) {
                return w.trim();
            }, function (a) {
                return a.toUpperCase();
            }, null, new ClientTestLibrary.Linq.AnagramEqualityComparer()).select(function (x) {
                return { key: x.key(), words: x.toArray() };
            }).toArray();
            var anagramsGroupsExpected1 = [{ key: "from", words: [" FROM ", " FORM "] }, { key: "salt", words: [" SALT ", " LAST "] }, { key: "earn", words: [" EARN ", " NEAR "] }];

            assert.deepEqual(anagramsGroups1, anagramsGroupsExpected1, "Anagram grouping with equality compare and upper case");
        },
        /**
         * @static
         * @private
         * @this ClientTestLibrary.Linq.TestLinqGroupingOperators
         * @memberof ClientTestLibrary.Linq.TestLinqGroupingOperators
         * @return  {Object}        
         */
        getComplexGroupingExpectedResult: function () {
            var complexGroupingExpected = [{ number: 2, words: [{ letter: 50, letterGroups: [{ letter: "2.two", letters: ["2.two"] }, { letter: "22.twentytwo", letters: ["22.twentytwo"] }] }] }, { number: 10, words: [] }, { number: 3, words: [{ letter: 51, letterGroups: [{ letter: "3.three", letters: ["3.three"] }, { letter: "30.thirty", letters: ["30.thirty"] }] }] }, { number: 5, words: [] }, { number: 30, words: [] }, { number: 1, words: [{ letter: 49, letterGroups: [{ letter: "1.one", letters: ["1.one"] }, { letter: "11.eleven", letters: ["11.eleven"] }] }] }, { number: -15, words: [] }];

            return complexGroupingExpected;
        }
    }
});

