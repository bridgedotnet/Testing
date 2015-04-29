Bridge.define('ClientTestLibrary.Bridge169', {
    statics: {
        number: 0,
        m1: function () {
            (function () {
                ClientTestLibrary.Bridge169.number = 1;
            })();
        },
        m2: function () {
            (function () {
                return ClientTestLibrary.Bridge169.number = 2;
            })();
        }
    }
});

Bridge.define('ClientTestLibrary.TestBridgeIssues', {
    statics: {
        n169: function (assert) {
            assert.expect(2);

            // TEST
            ClientTestLibrary.Bridge169.m1();
            assert.deepEqual(ClientTestLibrary.Bridge169.number, 1, "M1()");

            // TEST
            ClientTestLibrary.Bridge169.m2();
            assert.deepEqual(ClientTestLibrary.Bridge169.number, 2, "M2()");
        }
    }
});

