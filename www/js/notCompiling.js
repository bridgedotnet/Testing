/* global Bridge */

Bridge.define('ClientTestLibrary.Class59', {
    statics: {
        method1: function () {
        }
    },
    method1: function (d) {
    }
});

Bridge.define('ClientTestLibrary.Class59.Aux1');

Bridge.define('ClientTestLibrary.Class64', {
    constructor: function () {
    },
    constructor$1: function (related) {
    },
    test: function () {
        var aux = new ClientTestLibrary.Class64.Aux1();
        new ClientTestLibrary.Class64("constructor$1", aux);
    }
});

Bridge.define('ClientTestLibrary.Class64.Aux1');

Bridge.define('ClientTestLibrary.Class65_1');

Bridge.define('ClientTestLibrary.Class65_1.Nested');

Bridge.define('ClientTestLibrary.Class65_2', {
    inherits: [ClientTestLibrary.Class65_1.Nested]
});

Bridge.define('ClientTestLibrary.Class84', {
    test1: function () {
        try {
        }
        catch ($e) {
        }
    }
});

Bridge.define('ClientTestLibrary.Rectangle66', {
    constructor$1: function (x1) {
        (new ClientTestLibrary.Rectangle66("constructor")).$clone(this);
    },
    constructor$2: function (x1, x2) {
    },
    constructor: function () {
    },
    $clone: function (to) { return this; }
});

