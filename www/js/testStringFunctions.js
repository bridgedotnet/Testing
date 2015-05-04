/* global Bridge */

Bridge.define('ClientTestLibrary.TestStringFunctions', {
    statics: {
        strings: function (assert) {
            assert.expect(2);

            // TEST
            var msg = "HELLO".toLowerCase();
            assert.deepEqual(msg, "hello", "'HELLO'.ToLowerCase()");

            // TEST
            msg = "hello".toUpperCase();
            assert.deepEqual(msg, "HELLO", "'hello'.ToUpperCase()");
        }
    }
});

