/* global Bridge */

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

Bridge.define('ClientTestLibrary.Bridge240A', {
    config: {
        properties: {
            Data: 0
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge240B', {
    inherits: [ClientTestLibrary.Bridge240A],
    getString: function () {
        this.setData(this.getData()+1);
        return "B";
    }
});

Bridge.define('ClientTestLibrary.Bridge266A', {
    statics: {
        test: function () {
            // Nothing gets written for Class1 in the output JavaScript due to the "new object()" argument.
            // If null is used instead (as commented-out) then it works as expected.
            // No compile error.
            return ClientTestLibrary.Bridge266B.test("test", { });
            //Bridge266B.Test("test", null);
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge266B', {
    statics: {
        test: function (arg1, arg2) {
            return arg2;
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge272', {
    statics: {
        test: function (i) {
            return i;
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge272.MyEnum', {
    statics: {
        abc: 1,
        def: 2,
        ghi: 3
    }
});

Bridge.define('ClientTestLibrary.Bridge277', {
    statics: {
        $int: 0
    }
});

Bridge.define('ClientTestLibrary.Bridge294', {
    name: null,
    constructor: function (name) {
        this.name = name;
    },
    getName: function () {
        return this.name;
    },
    getNameThroughGeneric: function (T) {
        return Bridge.fn.bind(this, function () {
            return this.name;
        });
    }
});

Bridge.define('ClientTestLibrary.Bridge305', {
    inherits: [Bridge.IEnumerable$1(String)],
    config: {
        properties: {
            Items: null
        }
    },
    constructor: function (items) {
        this.setItems(new Bridge.List$1(String)(items));
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return this.getItems().getEnumerator();
    }
});

Bridge.define('ClientTestLibrary.Bridge306A.Props', {
    name: null,
    toString: function () {
        return this.name;
    }
});

Bridge.define('ClientTestLibrary.Bridge306B.Props', {
    name: null,
    toString: function () {
        return this.name;
    }
});

Bridge.define('ClientTestLibrary.Bridge306Component$1', function (TProps) { return {
    statics: {
        $new: function (TComponent) {
            return Bridge.fn.bind(this, function (props) {
                return Bridge.getTypeName(props) + ":" + props;
            });
        }
    }
}; });

Bridge.define('ClientTestLibrary.Bridge306B', {
    inherits: [ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306B.Props)],
    statics: {
        $new: function (props) {
            return ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306B.Props).$new(ClientTestLibrary.Bridge306B)(props);
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge306A', {
    inherits: [ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306A.Props)],
    statics: {
        $new: function (props) {
            return ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306A.Props).$new(ClientTestLibrary.Bridge306A)(props);
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge341A', {
    config: {
        properties: {
            Str: null
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge341B', {
    inherits: function () { return [Bridge.IEquatable$1(ClientTestLibrary.Bridge341B)]; },
    config: {
        properties: {
            Str: null
        }
    },
    equals: function (other) {
        if (other === null) {
            return false;
        }
        return this.getStr() === other.getStr();
    },
    getHashCode: function () {
        return Bridge.getHashCode(this.getStr());
    }
});

Bridge.define('ClientTestLibrary.Bridge342', {
    inherits: [Bridge.IDictionary$2(Bridge.Int,String)],
    _backingDictionary: null,
    constructor: function () {
        this.constructor$1(new Bridge.Dictionary$2(Bridge.Int,String)());

    },
    constructor$1: function (initialValues) {
        this._backingDictionary = initialValues;
    },
    getItem: function (key) {
        return this._backingDictionary.get(key);
    },
    setItem: function (key, value) {
        this._backingDictionary.set(key, value);
    },
    getKeys: function () {
        return this._backingDictionary.getKeys();
    },
    getValues: function () {
        return this._backingDictionary.getValues();
    },
    getCount: function () {
        return this._backingDictionary.getCount();
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return this._backingDictionary.getEnumerator();
    },
    add: function (key, value) {
        this._backingDictionary.add(key, value);
    },
    remove: function (key) {
        return this._backingDictionary.remove(key);
    },
    containsKey: function (key) {
        return this._backingDictionary.containsKey(key);
    },
    tryGetValue: function (key, value) {
        return this._backingDictionary.tryGetValue(key, value);
    },
    clear: function () {
        this._backingDictionary.clear();
    }
});

Bridge.define('ClientTestLibrary.Bridge383', {
    statics: {
        doSomething: function (person) {
            return person.getName();
        }
    }
});

Bridge.define('ClientTestLibrary.Bridge395', {
    config: {
        properties: {
            Id: null,
            data: 0
        }
    }
});

Bridge.define('ClientTestLibrary.IBridge304');

Bridge.define('ClientTestLibrary.Bridge304', {
    inherits: [ClientTestLibrary.IBridge304],
    config: {
        properties: {
            X: null
        }
    },
    f: function (x) {
        this.setX(x);
    },
    f$1: function () {
        this.setX("void F()");
    }
});

Bridge.define('ClientTestLibrary.Person383', {
    config: {
        properties: {
            Name: null
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
        },
        n240: function (assert) {
            assert.expect(3);

            // TEST
            var b = new ClientTestLibrary.Bridge240B();
            assert.ok(b !== null, "Instance of B created");
            assert.equal(b.getString(), "B", "b.GetString() = 'B'");
            assert.equal(b.getData(), 1, "b.Data = 1");
        },
        n264: function (assert) {
            assert.expect(1);

            // TEST
            var oldHash = Bridge.global.location.hash;
            Bridge.global.location.hash = "#new-hash";
            assert.equal(Bridge.global.location.hash, "#new-hash", "Setting Location.Hash works");
            Bridge.global.location.hash = oldHash; // to clean up the url
        },
        n266: function (assert) {
            assert.expect(1);

            // TEST
            assert.ok(ClientTestLibrary.Bridge266A.test() !== null, "new object() call transpiled");
        },
        n272: function (assert) {
            assert.expect(3);

            // TEST
            assert.deepEqual(ClientTestLibrary.Bridge272.test(1), ClientTestLibrary.Bridge272.MyEnum.abc, "Casted MyEnum.Abc");
            assert.deepEqual(ClientTestLibrary.Bridge272.test(3), ClientTestLibrary.Bridge272.MyEnum.ghi, "Casted MyEnum.Ghi");
            assert.deepEqual(ClientTestLibrary.Bridge272.test(4), 4, "Casted MyEnum.Abc");
        },
        n273: function (assert) {
            assert.expect(4);

            // TEST
            var items = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [0], 
                [1], 
                [2], 
                [3], 
                [4]
            ] );

            var r = items.slice(-1).toArray();
            assert.deepEqual(r, [4], "Slices start = -1");

            r = items.slice(1).toArray();
            assert.deepEqual(r, [1, 2, 3, 4], "Slices start = 1");

            r = items.slice(-3, 4).toArray();
            assert.deepEqual(r, [2, 3], "Slices start = -3, end = 3");

            r = items.slice(1, 3).toArray();
            assert.deepEqual(r, [1, 2], "Slices start = 1, end = 2");

        },
        n277: function (assert) {
            assert.expect(1);

            assert.equal(ClientTestLibrary.Bridge277.$int, 0, "Enum member with reserved name initialized");
        },
        n294: function (assert) {
            assert.expect(2);

            var c = new ClientTestLibrary.Bridge294("Vlad");

            assert.equal(c.getName(), "Vlad", "Class method works");
            assert.equal(c.getNameThroughGeneric(Bridge.Int)(), "Vlad", "Generic class method works");

        },
        n304: function (assert) {
            assert.expect(2);

            var c = new ClientTestLibrary.Bridge304();
            var i = c;

            i.f("1");
            assert.equal(c.getX(), "1", "Interface method works");

            c.f$1();
            assert.equal(c.getX(), "void F()", "Class method works");
        },
        n305: function (assert) {
            var $t;
            assert.expect(1);

            var c = new ClientTestLibrary.Bridge305(["1", "2", "3"]);

            var result = "";
            $t = Bridge.getEnumerator(c);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                result = result + item;
            }

            assert.equal(result, "123", "IEnumerator works");
        }        ,
        n306: function (assert) {
            assert.expect(2);

            var b = ClientTestLibrary.Bridge306B.$new(Bridge.merge(new ClientTestLibrary.Bridge306B.Props(), {
                name: "B"
            } ));
            assert.equal(b, "ClientTestLibrary.Bridge306B.Props:B", "Bridge306B.New() works");

            var a = ClientTestLibrary.Bridge306A.$new(Bridge.merge(new ClientTestLibrary.Bridge306A.Props(), {
                name: "A"
            } ));
            assert.equal(a, "ClientTestLibrary.Bridge306A.Props:A", "Bridge306A.New() works");
        },
        n335: function (assert) {
            assert.expect(1);

            var l = new Bridge.List$1(String)(["1", "2", "3", "1"]);
            assert.equal(l.indexOf("1", 2), 3, "IndexOf with startIndex used");
        },
        n336: function (assert) {
            assert.expect(2);

            var l = new Bridge.List$1(String)(["4"]);

            l.insertRange(0, ["1", "2"]);
            assert.deepEqual(l.toArray(), ["1", "2", "4"], "InsertRange works (1)");

            l.insertRange(2, ["3"]);
            assert.deepEqual(l.toArray(), ["1", "2", "3", "4"], "InsertRange works (2)");
        },
        n337: function (assert) {
            assert.expect(4);

            var l = new Bridge.List$1(String)(["1", "2"]);

            var b = l.remove("7");
            assert.notOk(b, "Remove() not existing element returns false");
            assert.deepEqual(l.toArray(), ["1", "2"], "Remove() not existing does not change the List");

            b = l.remove("2");
            assert.ok(b, "Remove() existing element returns true");
            assert.deepEqual(l.toArray(), ["1"], "Remove() not existing changes the List");
        },
        n338: function (assert) {
            assert.expect(1);

            var l = new Bridge.List$1(String)(1000);

            var b = Bridge.is(l, Bridge.IList$1(String));

            assert.ok(b, "List<T> declares it implemets IList<T>");
        },
        n339: function (assert) {
            assert.expect(2);

            var c = new Bridge.Comparer$1(Bridge.Int)(Bridge.Comparer$1.$default.fn);

            assert.ok(c !== null, "Comparer<int>.Default works");
            assert.ok(Bridge.is(c, Bridge.IComparer$1(Bridge.Int)), "Comparer<T> declares it implemets IComparer<T>");
        },
        n340: function (assert) {
            assert.expect(6);

            var c = new Bridge.EqualityComparer$1(Bridge.Int)();

            assert.ok(c !== null, "EqualityComparer<int>.Default works");
            assert.ok(c.equals(10, 10), "EqualityComparer<int>.Default.Equals(10, 10) works");
            assert.notOk(c.equals(10, 11), "EqualityComparer<int>.Default.Equals(10, 11) works");

            var s = new Bridge.EqualityComparer$1(String)();
            assert.ok(s !== null, "EqualityComparer<string>.Default works");
            assert.ok(s.equals("a", "a"), "EqualityComparer<string>.Default.Equals(\"a\", \"a\") works");
            assert.notOk(s.equals("a", "b"), "EqualityComparer<string>.Default.Equals(\"a\", \"b\") works");
        },
        n341: function (assert) {
            assert.expect(4);

            var o11 = { };
            var o12 = { };
            var b1 = new Bridge.EqualityComparer$1(Object)().equals(o11, o12);
            assert.notOk(b1, "EqualityComparer<object>.Default.Equals(o11, o12) works");

            var o21 = { i: 7 };
            var o22 = { i: 7 };
            var b2 = new Bridge.EqualityComparer$1(Object)().equals(o21, o22);
            assert.ok(b2, "EqualityComparer<object>.Default.Equals(o21, o22) works");

            var o31 = Bridge.merge(new ClientTestLibrary.Bridge341A(), {
                setStr: "String"
            } );
            var o32 = Bridge.merge(new ClientTestLibrary.Bridge341A(), {
                setStr: "String"
            } );
            var b3 = new Bridge.EqualityComparer$1(Object)().equals(o31, o32);
            assert.notOk(b3, "EqualityComparer<object>.Default.Equals(o31, o32) works");

            var o41 = Bridge.merge(new ClientTestLibrary.Bridge341B(), {
                setStr: "String"
            } );
            var o42 = Bridge.merge(new ClientTestLibrary.Bridge341B(), {
                setStr: "String"
            } );
            var b4 = new Bridge.EqualityComparer$1(Object)().equals(o41, o42);
            assert.ok(b4, "EqualityComparer<object>.Default.Equals(o41, o42) works");
        },
        n342: function (assert) {
            assert.expect(2);

            var dictionary = new ClientTestLibrary.Bridge342("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
                [3, "b"], 
                [6, "z"], 
                [9, "x"]
            ] ));

            var interfacedDictionary = Bridge.cast(dictionary, Bridge.IDictionary$2(Bridge.Int,String));

            assert.equal(interfacedDictionary.getItem(6), "z", "IDictionary getter works");
            assert.throws(function () {
                var r = interfacedDictionary.getItem(1);
            }, "IDictionary getter throws exception when incorrect key used");
        },
        n377: function (assert) {
            assert.expect(6);

            var objectLiteralInstance = { field1: "field1 value", field3: 7 };

            assert.equal(objectLiteralInstance.hasOwnProperty("field1"), true, "ObjectLiteral's field with an explicit value is emitted");
            assert.equal(objectLiteralInstance.field1, "field1 value", "ObjectLiteral's field with an explicit value is emitted correctly");

            assert.equal(objectLiteralInstance.hasOwnProperty("field3"), true, "ObjectLiteral's field with an explicit value is emitted");
            assert.equal(objectLiteralInstance.field3, 7, "ObjectLiteral's field with an explicit value is emitted correctly");

            assert.equal(objectLiteralInstance.hasOwnProperty("field2"), false, "ObjectLiteral's field without an explicit value is not emitted");
            assert.equal(objectLiteralInstance.hasOwnProperty("field4"), false, "ObjectLiteral's field without an explicit value is not emitted");
        },
        n383: function (assert) {
            assert.expect(2);

            var person1 = Bridge.merge(new ClientTestLibrary.Person383(), {
                setName: "Johnny"
            } );
            var msg1 = ClientTestLibrary.Bridge383.doSomething(person1);

            assert.equal(msg1, "Johnny", "Instance extention Johnny");

            var person2 = Bridge.merge(new ClientTestLibrary.Person383(), {
                setName: "Madison"
            } );
            var msg2 = ClientTestLibrary.Bridge383.doSomething(person2);

            assert.equal(msg2, "Madison", "Static extention Madison");
        },
        n395: function (assert) {
            var $t;
            assert.expect(3);

            var _dictOfTests = new Bridge.Dictionary$2(String,ClientTestLibrary.Bridge395)();

            var tests = [Bridge.merge(new ClientTestLibrary.Bridge395(), {
                setId: "a"
            } ), Bridge.merge(new ClientTestLibrary.Bridge395(), {
                setId: "b"
            } )];

            $t = Bridge.getEnumerator(tests);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                if (!_dictOfTests.containsKey(item.getId())) {
                    _dictOfTests.set(item.getId(), item);
                }
            }

            assert.equal(_dictOfTests.getCount(), 2, "All items added");
            assert.equal(_dictOfTests.get("a").getId(), "a", "First element is a");
            assert.equal(_dictOfTests.get("b").getId(), "b", "Second element is b");
        }
    }
});

