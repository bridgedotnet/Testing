/* global Bridge */

Bridge.define('ClientTestLibrary.TestInheritance.A', {
    config: {
        properties: {
            X: 0
        }
    },
    constructor: function (x) {
        this.setX(x);
    },
    handleNumber: function (i) {
        return i;
    }
});

Bridge.define('ClientTestLibrary.TestInheritance.B', {
    inherits: [ClientTestLibrary.TestInheritance.A],
    config: {
        properties: {
            Y: 0
        }
    },
    constructor: function (x, y) {
        ClientTestLibrary.TestInheritance.A.prototype.$constructor.call(this, x);

        this.setY(y);
    },
    handleNumber$1: function (i) {
        return i * 100;
    }
});

