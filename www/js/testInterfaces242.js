/* global Bridge */

Bridge.define('ClientTestLibrary.TestInterfaces.B', {
    inherits: [ClientTestLibrary.TestInterfaces.ISimple],
    data: 0,
    constructor: function () {
        this.data = 2;
    },
    getData: function () {
        return this.data;
    },
    setData: function (value) {
        this.data = value;
    },
    getString: function () {
        return "explicit B.ISimple";
    }
});

Bridge.define('ClientTestLibrary.TestInterfaces.A', {
    inherits: [ClientTestLibrary.TestInterfaces.ISimple],
    config: {
        properties: {
            Data: 0
        }
    },
    constructor: function () {
        this.setData(1);
    },
    getString: function () {
        return "A.ISimple";
    }
});

Bridge.define('ClientTestLibrary.TestInterfaces.C', {
    inherits: [ClientTestLibrary.TestInterfaces.ISimple,ClientTestLibrary.TestInterfaces.ISimpleAsWell],
    data: 0,
    dataAsWell: 0,
    constructor: function () {
        this.data = 3;
        this.dataAsWell = 4;
    },
    getData: function () {
        return this.data;
    },
    setData: function (value) {
        this.data = value;
    },
    getDataAsWell: function () {
        return this.dataAsWell;
    },
    setDataAsWell: function (value) {
        this.dataAsWell = value;
    },
    getString: function () {
        return "C.ISimple";
    },
    getStringAsWell: function () {
        return "C.ISimpleAsWell";
    }
});

