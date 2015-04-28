Bridge.define('ClientTestLibrary.TestCatchBlocks', {
    statics: {
        test1: function (assert) {
            assert.expect(0);

            try {
            }
            catch ($e) {
            }
        }
    }
});

