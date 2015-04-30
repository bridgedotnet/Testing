Bridge.define('ClientTestLibrary.TestStringBuilderFunctions', {
    statics: {
        stringBuilders: function (assert) {
            assert.expect(1);

            // TEST
            var sb = new Bridge.Text.StringBuilder("foo");

            assert.deepEqual(sb.toString(), "foo", "StringBuilder(string) .ctor");
        }
    }
});

