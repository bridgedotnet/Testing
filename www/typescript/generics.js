Bridge.define('Generics.GenericClass$1', function (T) { return {
    getSomething: function (input) {
        return input;
    }
}; });

Bridge.define('Generics.GenericINamedEntity$1', function (T) { return {
    getSomething: function (input) {
        return input;
    }
}; });

Bridge.define('Generics.GenericNamedEntity$1', function (T) { return {
    getSomething: function (input) {
        return input;
    }
}; });

Bridge.define('Generics.GenericNew$1', function (T) { return {
    getSomething: function (input) {
        return input;
    }
}; });

Bridge.define('Generics.GenericNewAndClass$1', function (T) { return {
    getSomething: function (input) {
        return input;
    }
}; });

Bridge.define('Generics.GenericStruct$1', function (T) { return {
    getSomething: function (input) {
        return input;
    }
}; });

Bridge.define('Generics.implementation', {
    statics: {
        config: {
            init: function () {
                this.simpleGenericInt = new Generics.SimpleGeneric$1(Bridge.Int)();
                this.simpleDoubleGenericIntString = new Generics.SimpleDoubleGeneric$2(Bridge.Int,String)();
                this.genericINamedEntity = new Generics.GenericINamedEntity$1(Generics.INamedEntity)();
                this.genericNamedEntity = new Generics.GenericNamedEntity$1(Generics.NamedEntity)();
                this.genericClassObject = new Generics.GenericClass$1(Object)();
                this.genericClassNamedEntity = new Generics.GenericClass$1(Generics.NamedEntity)();
                this.genericNew = new Generics.GenericNew$1(Generics.NewClass)();
                this.genericNewAndClass = new Generics.GenericNewAndClass$1(Generics.NewClass)();
            }
        }
    }
});

Bridge.define('Generics.INamedEntity', {
    config: {
        properties: {
            Name: null
        }
    }
});

Bridge.define('Generics.NamedEntity', {
    inherits: [Generics.INamedEntity],
    config: {
        properties: {
            Name$1: null
        }
    }
});

Bridge.define('Generics.NewClass', {
    data: 0,
    constructor: function () {
        this.data = 30;
    }
});

Bridge.define('Generics.SimpleDoubleGeneric$2', function (T, K) { return {
    getSomething: function (input) {
        return input;
    },
    getSomethingMore: function (input) {
        return input;
    }
}; });

Bridge.define('Generics.SimpleGeneric$1', function (T) { return {
    statics: {
        getInstance: function () {
            return null;
        }
    },
    getSomething: function (input) {
        return input;
    }
}; });

