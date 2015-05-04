/* global Bridge */

Bridge.define('ClientTestLibrary.TestStringFunctions', {
    statics: {
        strings: function (assert) {
            assert.expect(21);

            // TEST ToLowerCase
            var s = "HELLO".toLowerCase();
            assert.deepEqual(s, "hello", "'HELLO'.ToLowerCase()");

            // TEST ToUpperCase
            s = "hello".toUpperCase();
            assert.deepEqual(s, "HELLO", "'hello'.ToUpperCase()");

            s = "Hello Bridge.NET";
            // TEST String(string) constructor
            assert.deepEqual(String(s), s, "new String('" + s + "')");

            // TEST String(char, count) constructor
            assert.deepEqual(Bridge.String.fromCharCount(45, 4), "----", "new String('-',4)");

            // TEST IndexOfAny
            var anyOf = [120, 98, 105];
            var sAnyOf = "['x','b','i']";

            assert.deepEqual(Bridge.String.indexOfAny(s, anyOf), 8, "'" + s + "'.IndexOfAny(" + sAnyOf + ")");
            assert.throws(function () {
                return Bridge.String.indexOfAny(s, anyOf, 18, 8);
            }, "'" + s + "'.IndexOfAny(" + sAnyOf + ")");
            assert.throws(function () {
                return Bridge.String.indexOfAny(s, null);
            }, "'" + s + "'.IndexOfAny(null)");

            s = "";
            assert.deepEqual(Bridge.String.indexOfAny(s, anyOf), -1, "String.Empty.IndexOfAny(" + sAnyOf + ")");

            s = null;
            assert.deepEqual(Bridge.String.indexOfAny(s, anyOf), -1, "null.IndexOfAny(" + sAnyOf + ")");

            // TEST IndexOf
            s = "Hello Bridge.NET";

            assert.deepEqual(Bridge.String.indexOf(s, String.fromCharCode(101)), 1, "'" + s + "'.IndexOf('e')");
            assert.deepEqual(Bridge.String.indexOf(s, "e."), 11, "'" + s + "'.IndexOf('e.')");
            assert.deepEqual(Bridge.String.indexOf(s, String.fromCharCode(101), 6, 8), 11, "'" + s + "'.IndexOf('e', 6, 8)");
            assert.throws(function () {
                return Bridge.String.indexOf(s, null);
            }, "'" + s + "'.IndexOf(null)");

            s = "";
            assert.deepEqual(Bridge.String.indexOf(s, String.fromCharCode(101)), -1, "String.Empty.IndexOf('e')");

            s = null;
            assert.deepEqual(Bridge.String.indexOf(s, String.fromCharCode(101)), -1, "null.IndexOf('e')");

            // TEST Compare
            var s1 = "Animal";
            var s2 = "animal";

            assert.deepEqual(Bridge.String.compare(s1, s2, true), 0, "String.Compare('" + s1 + "', '" + s2 + "', true)");
            assert.deepEqual(Bridge.String.compare(s1, s2, false), 1, "String.Compare('" + s1 + "', '" + s2 + "', false)");


            // TEST Contains            
            s = "Hello Bridge.NET";

            assert.deepEqual(Bridge.String.contains(s,"Bridge"), true, "'" + s + "'.Contains('Bridge')");
            assert.deepEqual(Bridge.String.contains(s,""), true, "'" + s + "'.Contains(String.Empty)");
            assert.deepEqual(Bridge.String.contains("","Bridge"), false, "String.Empty.Contains('Bridge')");
            assert.throws(function () {
                return Bridge.String.contains(s,null);
            }, "null.Contains('Bridge')");
        }
    }
});

