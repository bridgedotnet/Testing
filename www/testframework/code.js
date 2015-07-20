/* global Bridge */

Bridge.define('Bridge.ClientTest.ArrayTests', {
    typePropertiesAreCorrect: function () {
        //Assert.AreEqual(typeof(int[]).FullName, "Array", "FullName should be Array");
        //Assert.True(typeof(Array).IsClass, "IsClass should be true");
        //Assert.True(typeof(int[]).IsClass, "IsClass should be true");
        //Assert.AreEqual(typeof(Array).BaseType, typeof(Object), "BaseType of Array should be object");

        //var interfaces = typeof(int[]).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 5, "Interface count should be 5");
        //Assert.True(interfaces.Contains(typeof(IEnumerable<int>)), "Interfaces should contain IEnumerable<int>");
        //Assert.True(interfaces.Contains(typeof(ICollection<int>)), "Interfaces should contain ICollection<int>");
        //Assert.True(interfaces.Contains(typeof(IList<int>)), "Interfaces should contain IList<int>");
        //Assert.True(interfaces.Contains(typeof(IReadOnlyCollection<int>)), "Interfaces should contain IReadOnlyCollection<int>");
        //Assert.True(interfaces.Contains(typeof(IReadOnlyList<int>)), "Interfaces should contain IReadOnlyList<int>");

        var arr = [1, 2, 3];
        Bridge.Test.Assert.true$1(Bridge.is(arr, Array), "is Array should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Array), "is int[] should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Bridge.ICollection), "is ICollection should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Bridge.IEnumerable), "is IEnumerable should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Bridge.ICloneable), "is ICloneable should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Bridge.ICollection$1(Bridge.Int)), "is ICollection<int> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Bridge.IEnumerable$1(Bridge.Int)), "is IEnumerable<int> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(arr, Bridge.IList$1(Bridge.Int)), "is IList<int> should be true");
        //Assert.True(arr is IReadOnlyList<int>, "is IReadOnlyList<int> should be true");
        //Assert.True(arr is IReadOnlyCollection<int>, "is IReadOnlyCollection<int> should be true");
    },
    lengthWorks: function () {
        Bridge.Test.Assert.areEqual(new Array(0).length, 0);
        Bridge.Test.Assert.areEqual(["x"].length, 1);
        Bridge.Test.Assert.areEqual(["x", "y"].length, 2);
    },
    rankIsOne: function () {
        Bridge.Test.Assert.areEqual(Bridge.Array.getRank(new Array(0)), 1);
    },
    getLengthWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Array.getLength(new Array(0), 0), 0);
        Bridge.Test.Assert.areEqual(Bridge.Array.getLength(["x"], 0), 1);
        Bridge.Test.Assert.areEqual(Bridge.Array.getLength(["x", "y"], 0), 2);
    },
    getLowerBound: function () {
        Bridge.Test.Assert.areEqual(Bridge.Array.getLower(new Array(0), 0), 0);
        Bridge.Test.Assert.areEqual(Bridge.Array.getLower(["x"], 0), 0);
        Bridge.Test.Assert.areEqual(Bridge.Array.getLower(["x", "y"], 0), 0);
    },
    getUpperBoundWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.Array.getLength(new Array(0), 0) - 1), -1);
        Bridge.Test.Assert.areEqual((Bridge.Array.getLength(["x"], 0) - 1), 0);
        Bridge.Test.Assert.areEqual((Bridge.Array.getLength(["x", "y"], 0) - 1), 1);
    },
    gettingValueByIndexWorks: function () {
        Bridge.Test.Assert.areEqual(["x", "y"][0], "x");
        Bridge.Test.Assert.areEqual(["x", "y"][1], "y");
    },
    getValueWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Array.get(["x", "y"], 0), "x");
        Bridge.Test.Assert.areEqual(Bridge.Array.get(["x", "y"], 1), "y");
    },
    settingValueByIndexWorks: function () {
        var arr = new Array(2);
        arr[0] = "x";
        arr[1] = "y";
        Bridge.Test.Assert.areEqual(arr[0], "x");
        Bridge.Test.Assert.areEqual(arr[1], "y");
    },
    setValueWorks: function () {
        var arr = new Array(2);
        Bridge.Array.set(arr, "x", 0);
        Bridge.Array.set(arr, "y", 1);
        Bridge.Test.Assert.areEqual(arr[0], "x");
        Bridge.Test.Assert.areEqual(arr[1], "y");
    },
    foreachWorks: function () {
        var $t;
        var result = "";
        $t = Bridge.getEnumerator(["x", "y"]);
        while ($t.moveNext()) {
            var s = $t.getCurrent();
            result += s;
        }
        Bridge.Test.Assert.areEqual(result, "xy");
    }    ,
    concatWorks: function () {
        var arr = ["a", "b"];
        Bridge.Test.Assert.areEqual(arr.concat("c"), ["a", "b", "c"]);
        Bridge.Test.Assert.areEqual(arr.concat("c", "d"), ["a", "b", "c", "d"]);
        Bridge.Test.Assert.areEqual(arr, ["a", "b"]);
    },
    containsWorks: function () {
        var arr = ["x", "y"];
        Bridge.Test.Assert.$true(Bridge.Linq.Enumerable.from(arr).contains("x"));
        Bridge.Test.Assert.$false(Bridge.Linq.Enumerable.from(arr).contains("z"));
    },
    containsUsesEqualsMethod: function () {
        var arr = [new Bridge.ClientTest.ArrayTests.C(1), new Bridge.ClientTest.ArrayTests.C(2), new Bridge.ClientTest.ArrayTests.C(3)];
        Bridge.Test.Assert.$true(Bridge.Linq.Enumerable.from(arr).contains(new Bridge.ClientTest.ArrayTests.C(2)));
        Bridge.Test.Assert.$false(Bridge.Linq.Enumerable.from(arr).contains(new Bridge.ClientTest.ArrayTests.C(4)));
    },
    allWithArrayItemFilterCallbackWorks: function () {
        Bridge.Test.Assert.$true(Bridge.Linq.Enumerable.from([1, 2, 3]).all(function (x) {
            return x > 0;
        }));
        Bridge.Test.Assert.$false(Bridge.Linq.Enumerable.from([1, 2, 3]).all(function (x) {
            return x > 1;
        }));
    },
    sliceWithoutEndWorks: function () {
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d"].slice(2), ["c", "d"]);
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d"].slice(1, 3), ["b", "c"]);
    },
    foreachWithArrayItemCallbackWorks: function () {
        var result = "";
        Bridge.Linq.Enumerable.from(["a", "b", "c"]).forEach(function (s) {
            return result += s;
        });
        Bridge.Test.Assert.areEqual(result, "abc");
    },
    foreachWithArrayCallbackWorks: function () {
        var result = "";
        Bridge.Linq.Enumerable.from(["a", "b", "c"]).forEach(function (s, i) {
            return result += s + i;
        });
        Bridge.Test.Assert.areEqual(result, "a0b1c2");
    },
    indexOfWithoutStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual(["a", "b", "c", "b"].indexOf("b"), 1);
    },
    indexOfWithoutStartIndexUsesEqualsMethod: function () {
        var arr = [new Bridge.ClientTest.ArrayTests.C(1), new Bridge.ClientTest.ArrayTests.C(2), new Bridge.ClientTest.ArrayTests.C(3)];
        Bridge.Test.Assert.areEqual(Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.ArrayTests.C(2)), 1);
        Bridge.Test.Assert.areEqual(Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.ArrayTests.C(4)), -1);
    },
    indexOfWithStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual(["a", "b", "c", "b"].indexOf("b", 2), 3);
    },
    joinWithoutDelimiterWorks: function () {
        Bridge.Test.Assert.areEqual(["a", "b", "c", "b"].join(","), "a,b,c,b");

        Bridge.Test.Assert.areEqual(["a", "b", "c", "b"].join("|"), "a|b|c|b");
    },
    reverseWorks: function () {
        var arr = [1, 3, 4, 1, 3, 2];
        arr.reverse();
        Bridge.Test.Assert.areEqual(arr, [2, 3, 1, 4, 3, 1]);
    },
    anyWithArrayItemFilterCallbackWorks: function () {
        Bridge.Test.Assert.$true(Bridge.Linq.Enumerable.from([1, 2, 3, 4]).any(function (i) {
            return i > 1;
        }));
        Bridge.Test.Assert.$false(Bridge.Linq.Enumerable.from([1, 2, 3, 4]).any(function (i) {
            return i > 5;
        }));
    },
    sortWithDefaultCompareWorks: function () {
        var arr = [1, 6, 6, 4, 2];
        arr.sort();
        Bridge.Test.Assert.areEqual(arr, [1, 2, 4, 6, 6]);
    },
    foreachWhenCastToIListWorks: function () {
        var $t;
        var list = ["x", "y"];
        var result = "";
        $t = Bridge.getEnumerator(list);
        while ($t.moveNext()) {
            var s = $t.getCurrent();
            result += s;
        }
        Bridge.Test.Assert.areEqual(result, "xy");
    }    ,
    iCollectionCountWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Test.Assert.areEqual(l.getCount(), 3);
    },
    iCollectionAddWorks: function () {
        var l = ["x", "y", "z"];
        l.add("a");
        Bridge.Test.Assert.areEqual(l, ["x", "y", "z", "a"]);
    },
    iCollectionClearWorks: function () {
        var l = ["x", "y", "z"];
        l.clear();
        Bridge.Test.Assert.areEqual(l, new Array(0));
    },
    iCollectionContainsWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Test.Assert.$true(l.contains("y"));
        Bridge.Test.Assert.$false(l.contains("a"));
    },
    iCollectionContainsUsesEqualsMethod: function () {
        var l = [new Bridge.ClientTest.ArrayTests.C(1), new Bridge.ClientTest.ArrayTests.C(2), new Bridge.ClientTest.ArrayTests.C(3)];
        Bridge.Test.Assert.$true(l.contains(new Bridge.ClientTest.ArrayTests.C(2)));
        Bridge.Test.Assert.$false(l.contains(new Bridge.ClientTest.ArrayTests.C(4)));
    },
    iCollectionRemoveWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Test.Assert.$true(l.remove("y"));
        Bridge.Test.Assert.$false(l.remove("a"));
        Bridge.Test.Assert.areEqual(l, ["x", "z"]);
    },
    iListIndexingWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Test.Assert.areEqual(l.get(1), "y");
        l.set(1, "a");
        Bridge.Test.Assert.areEqual(l, ["x", "a", "z"]);
    },
    iListIndexOfWorks: function () {
        var l = ["x", "y", "z"];
        Bridge.Test.Assert.areEqual(l.indexOf("y"), 1);
        Bridge.Test.Assert.areEqual(l.indexOf("a"), -1);
    },
    iListIndexOfUsesEqualsMethod: function () {
        var arr = [new Bridge.ClientTest.ArrayTests.C(1), new Bridge.ClientTest.ArrayTests.C(2), new Bridge.ClientTest.ArrayTests.C(3)];
        Bridge.Test.Assert.areEqual(Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.ArrayTests.C(2)), 1);
        Bridge.Test.Assert.areEqual(Bridge.Linq.Enumerable.from(arr).indexOf(new Bridge.ClientTest.ArrayTests.C(4)), -1);
    },
    iListInsertWorks: function () {
        var l = ["x", "y", "z"];
        l.insert(1, "a");
        Bridge.Test.Assert.areEqual(l, ["x", "a", "y", "z"]);
    },
    iListRemoveAtWorks: function () {
        var l = ["x", "y", "z"];
        l.removeAt(1);
        Bridge.Test.Assert.areEqual(l, ["x", "z"]);
    }
});

Bridge.define('Bridge.ClientTest.ArrayTests.C', {
    i: 0,
    constructor: function (i) {
        this.i = i;
    },
    equals: function (o) {
        return Bridge.is(o, Bridge.ClientTest.ArrayTests.C) && this.i === (Bridge.cast(o, Bridge.ClientTest.ArrayTests.C)).i;
    },
    getHashCode: function () {
        return this.i;
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ComparerTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.Comparer$1(Object)), "Bridge.Comparer$1$Object", "GetClassName()");
        //Assert.True(typeof(Comparer<object>).IsClass, "IsClass should be true");
        //Assert.AreStrictEqual(typeof(Comparer<object>).BaseType, typeof(object), "BaseType should be correct");
        var comparer = Bridge.Comparer$1(Object).$default;
        // TODO Bug
        //Assert.True(comparer is Comparer<object>, "is Comparer<object> should be true");
        //Assert.True(comparer is IComparer<object>, "is IComparer<object> should be true");
    },
    createWorks: function () {
        var comparer = new Bridge.Comparer$1(Bridge.Int)(function (x, y) {
            Bridge.Test.Assert.areEqual$1(x, 8, "x should be 8");
            Bridge.Test.Assert.areEqual$1(y, 3, "y should be 3");
            return 42;
        });
        Bridge.Test.Assert.areEqual$1(comparer.compare(8, 3), 42, "The result should be 42");
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ComparerTests.C', {
    inherits: function () { return [Bridge.IComparable$1(Bridge.ClientTest.Collections.Generic.ComparerTests.C)]; },
    value: 0,
    constructor: function (value) {
        this.value = value;
    },
    compareTo: function (other) {
        return Bridge.compare(this.value, other.value);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.GenericDictionaryTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.Dictionary$2(Bridge.Int,String)), "Bridge.Dictionary$2$Bridge.Int$String", "FullName should be correct");
        var dict = new Bridge.Dictionary$2(Bridge.Int,String)();
        Bridge.Test.Assert.true$1(Bridge.is(dict, Bridge.Dictionary$2(Bridge.Int,String)), "is Dictionary<int,string> should be true");
        //Assert.True(dict is IReadOnlyDictionary<int, string>, "is IReadOnlyDictionary<int,string> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(dict, Bridge.IDictionary$2(Bridge.Int,String)), "is IDictionary<int,string> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(dict, Bridge.IEnumerable$1(Bridge.KeyValuePair$2(Bridge.Int,String))), "is IEnumerable<KeyValuePair<int,string>> should be true");
    },
    defaultConstructorWorks: function () {
        var d = new Bridge.Dictionary$2(Bridge.Int,String)();
        Bridge.Test.Assert.areEqual$1(d.getCount(), 0, "Count is 0");
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(d.getEnumerator()), "Bridge.CustomEnumerator", "Enumerator should be Bridge.CustomEnumerator");
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(d.getComparer()), "Bridge.EqualityComparer$1$Object", "Comparer should be Bridge.EqualityComparer$1$Object");
    },
    capacityConstructorWorks: function () {
        var d = new Bridge.Dictionary$2(Bridge.Int,String)(10);
        Bridge.Test.Assert.areEqual(d.getCount(), 0);
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(d.getEnumerator()), "Bridge.CustomEnumerator", "Enumerator should be Bridge.CustomEnumerator");
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(d.getComparer()), "Bridge.EqualityComparer$1$Object", "Comparer should be Bridge.EqualityComparer$1$Object");
    },
    capacityAndEqualityComparerWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.GenericDictionaryTests.TestEqualityComparer();
        var d = new Bridge.Dictionary$2(String,String)(10, c);
        Bridge.Test.Assert.areEqual(d.getCount(), 0);
        Bridge.Test.Assert.areStrictEqual(d.getComparer(), c);
    },
    equalityComparerOnlyConstructorWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.GenericDictionaryTests.TestEqualityComparer();
        var d = new Bridge.Dictionary$2(String, Bridge.Int)(null, c);
        Bridge.Test.Assert.areEqual(d.getCount(), 0);
        Bridge.Test.Assert.areStrictEqual(d.getComparer(), c);
    },
    countWorks: function () {
        var d = new Bridge.Dictionary$2(Bridge.Int,String)();
        Bridge.Test.Assert.areEqual(d.getCount(), 0);
        d.add(1, "1");
        Bridge.Test.Assert.areEqual(d.getCount(), 1);
        d.add(2, "2");
        Bridge.Test.Assert.areEqual(d.getCount(), 2);
    },
    keysWorks: function () {
        var $t;
        var d = Bridge.merge(new Bridge.Dictionary$2(String,String)(), [
            ["1", "a"], 
            ["2", "b"]
        ] );
        var keys = d.getKeys();
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(keys, Object), Bridge.IEnumerable$1(String)));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(keys, Object), Bridge.ICollection$1(String)));
        Bridge.Test.Assert.areEqual(keys.getCount(), 2);
        Bridge.Test.Assert.$true(keys.contains("1"));
        Bridge.Test.Assert.$true(keys.contains("2"));
        Bridge.Test.Assert.$false(keys.contains("a"));

        var count = 0;
        $t = Bridge.getEnumerator(d.getKeys());
        while ($t.moveNext()) {
            var key = $t.getCurrent();
            if (key !== "1" && key !== "2") {
                Bridge.Test.Assert.fail$1("Unexpected key " + key);
            }
            count++;
        }
        Bridge.Test.Assert.areEqual(count, 2);
    }    ,
    valuesWorks: function () {
        var $t;
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        var values = d.getValues();
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(values, Object), Bridge.IEnumerable$1(String)));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(values, Object), Bridge.ICollection$1(String)));
        Bridge.Test.Assert.areEqual(values.getCount(), 2);
        Bridge.Test.Assert.$true(values.contains("a"));
        Bridge.Test.Assert.$true(values.contains("b"));
        Bridge.Test.Assert.$false(values.contains("1"));

        var count = 0;
        $t = Bridge.getEnumerator(d.getValues());
        while ($t.moveNext()) {
            var value = $t.getCurrent();
            if (value !== "a" && value !== "b") {
                Bridge.Test.Assert.fail$1("Unexpected key " + value);
            }
            count++;
        }
        Bridge.Test.Assert.areEqual(count, 2);
    }    ,
    indexerGetterWorksForExistingItems: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        Bridge.Test.Assert.areEqual(d.get(1), "a");
    },
    indexerSetterWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        d.set(2, "c");
        d.set(3, "d");
        Bridge.Test.Assert.areEqual(3, d.getCount());
        Bridge.Test.Assert.areEqual(d.get(1), "a");
        Bridge.Test.Assert.areEqual(d.get(2), "c");
        Bridge.Test.Assert.areEqual(d.get(3), "d");
    },
    indexerGetterThrowsForNonExistingItems: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        try {
            var x = d.get(10);
            Bridge.Test.Assert.$true(false);
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            if (Bridge.is($e, Bridge.KeyNotFoundException)) {
            }
            else {
                throw $e;
            }
        }
    },
    addWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        d.add(3, "c");
        Bridge.Test.Assert.areEqual(3, d.getCount());
        Bridge.Test.Assert.areEqual(d.get(1), "a");
        Bridge.Test.Assert.areEqual(d.get(2), "b");
        Bridge.Test.Assert.areEqual(d.get(3), "c");
    },
    addThrowsIfItemAlreadyExists: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        try {
            d.add(2, "b");
            Bridge.Test.Assert.$true(false);
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            if (Bridge.is($e, Bridge.ArgumentException)) {
            }
            else {
                throw $e;
            }
        }
    },
    clearWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        d.clear();
        Bridge.Test.Assert.areEqual(d.getCount(), 0);
    },
    containsKeyWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        Bridge.Test.Assert.$true(d.containsKey(1));
        Bridge.Test.Assert.$false(d.containsKey(3));
    },
    enumeratingWorks: function () {
        var $t;
        var d = Bridge.merge(new Bridge.Dictionary$2(String,String)(), [
            ["1", "a"], 
            ["2", "b"]
        ] );
        var count = 0;
        $t = Bridge.getEnumerator(d);
        while ($t.moveNext()) {
            var kvp = $t.getCurrent();
            if (kvp.key === "1") {
                Bridge.Test.Assert.areEqual(kvp.value, "a");
            }
            else 
                if (kvp.key === "2") {
                    Bridge.Test.Assert.areEqual(kvp.value, "b");
                }
                else  {
                    Bridge.Test.Assert.fail$1("Invalid key " + kvp.key);
                }
            count++;
        }
        Bridge.Test.Assert.areEqual(count, 2);
    }    ,
    removeWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [1, "a"], 
            [2, "b"]
        ] );
        Bridge.Test.Assert.areStrictEqual(d.remove(2), true);
        Bridge.Test.Assert.areStrictEqual(d.remove(3), false);
        Bridge.Test.Assert.areEqual(d.getCount(), 1);
        Bridge.Test.Assert.areEqual(d.get(1), "a");
    },
    tryGetValueWithIntKeysWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(String,Bridge.Int)(), [
            ["a", 1], 
            ["b", 2]
        ] );
        var i = { };

        Bridge.Test.Assert.$true(d.tryGetValue("a", i));
        Bridge.Test.Assert.areEqual(i.v, 1);
        Bridge.Test.Assert.$false(d.tryGetValue("c", i));
        Bridge.Test.Assert.areEqual(i.v, 0);
    },
    tryGetValueWithObjectKeysWorks: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(String,Object)(), [
            ["a", 1], 
            ["b", "X"]
        ] );
        var o = { };

        Bridge.Test.Assert.$true(d.tryGetValue("a", o));
        Bridge.Test.Assert.areEqual(o.v, 1);
        Bridge.Test.Assert.$false(d.tryGetValue("c", o));
        Bridge.Test.Assert.areStrictEqual(o.v, null);
    },
    canUseCustomComparer: function () {
        var d = Bridge.merge(new Bridge.Dictionary$2(String, Bridge.Int)(null, new Bridge.ClientTest.Collections.Generic.GenericDictionaryTests.TestEqualityComparer()), [
            ["a", 1], 
            ["b", 2]
        ] );
        d.set("a2", 100);
        Bridge.Test.Assert.areEqual(d.get("a3"), 100);
        Bridge.Test.Assert.areEqual(d.getCount(), 2);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.GenericDictionaryTests.TestEqualityComparer', {
    inherits: [Bridge.EqualityComparer$1(String)],
    equals: function (x, y) {
        return x.charCodeAt(0) === y.charCodeAt(0);
    },
    getHashCode: function (obj) {
        return obj.charCodeAt(0);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ICollectionTests', {
    customClassThatShouldImplementICollectionDoesSo: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(new Array(0)), Object), Bridge.ICollection$1(String)));
    },
    classImplementingICollectionCountWorks: function () {
        Bridge.Test.Assert.areEqual(new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]).getCount(), 2);
    },
    classImplementingICollectionCastToICollectionCountWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y", "z"]), Bridge.ICollection$1(String))).getCount(), 3);
    },
    classImplementingICollectionAddWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        c.add("z");
        Bridge.Test.Assert.areEqual(c.getCount(), 3);
        Bridge.Test.Assert.$true(c.contains("z"));
    },
    classImplementingICollectionCastToICollectionAddWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        c.add("z");
        Bridge.Test.Assert.areEqual(c.getCount(), 3);
        Bridge.Test.Assert.$true(c.contains("z"));
    },
    classImplementingICollectionClearWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        c.clear();
        Bridge.Test.Assert.areEqual(c.getCount(), 0);
    },
    classImplementingICollectionCastToICollectionClearWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        c.clear();
        Bridge.Test.Assert.areEqual(c.getCount(), 0);
    },
    classImplementingICollectionContainsWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        Bridge.Test.Assert.$true(c.contains("x"));
        Bridge.Test.Assert.$false(c.contains("z"));
    },
    classImplementingICollectionCastToICollectionContainsWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        Bridge.Test.Assert.$true(c.contains("x"));
        Bridge.Test.Assert.$false(c.contains("z"));
    },
    classImplementingICollectionRemoveWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        c.remove("x");
        Bridge.Test.Assert.areEqual(c.getCount(), 1);
        c.remove("y");
        Bridge.Test.Assert.areEqual(c.getCount(), 0);
    },
    classImplementingICollectionCastToICollectionRemoveWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection(["x", "y"]);
        c.remove("x");
        Bridge.Test.Assert.areEqual(c.getCount(), 1);
        c.remove("y");
        Bridge.Test.Assert.areEqual(c.getCount(), 0);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ICollectionTests.C', {
    _i: 0,
    constructor: function (i) {
        this._i = i;
    },
    equals: function (o) {
        return Bridge.is(o, Bridge.ClientTest.Collections.Generic.ICollectionTests.C) && this._i === (Bridge.cast(o, Bridge.ClientTest.Collections.Generic.ICollectionTests.C))._i;
    },
    getHashCode: function () {
        return this._i;
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ICollectionTests.MyCollection', {
    inherits: [Bridge.ICollection$1(String)],
    config: {
        properties: {
            Items: null
        }
    },
    constructor: function (items) {
        this.setItems(new Bridge.List$1(String)(items));
    },
    getCount: function () {
        return this.getItems().getCount();
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return this.getItems().getEnumerator();
    },
    add: function (item) {
        this.getItems().add(item);
    },
    clear: function () {
        this.getItems().clear();
    },
    contains: function (item) {
        return this.getItems().contains(item);
    },
    remove: function (item) {
        return this.getItems().remove(item);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IDictionaryTests', {
    classImplementsInterfaces: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor"), Object), Bridge.IDictionary$2(Bridge.Int,String)));
        //Assert.True((object)new MyDictionary() is IReadOnlyDictionary<int, string>);
    },
    countWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor");
        Bridge.Test.Assert.areEqual(d.getCount(), 0);

        var d2 = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "c"]
        ] ));
        Bridge.Test.Assert.areEqual(d2.getCount(), 1);

        var d3 = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor");
        Bridge.Test.Assert.areEqual(d3.getCount(), 0);
    },
    addWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor");
        var di = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        d.add(5, "aa");
        Bridge.Test.Assert.areEqual(d.getItem(5), "aa");
        Bridge.Test.Assert.areEqual(d.getCount(), 1);

        di.add(3, "bb");
        // TODO Bug
        // Assert.AreEqual(di[3], "bb");
        var s = { };
        di.tryGetValue(3, s);
        Bridge.Test.Assert.areEqual(s.v, "bb");
        Bridge.Test.Assert.areEqual(di.getCount(), 2);

        try {
            d.add(5, "zz");
            Bridge.Test.Assert.fail$1("Should throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
        }
    },
    clearWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"], 
            [6, "z"], 
            [9, "x"]
        ] ));

        Bridge.Test.Assert.areEqual(d.getCount(), 3);
        d.clear();
        Bridge.Test.Assert.areEqual(d.getCount(), 0);
    },
    removeWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"], 
            [6, "z"], 
            [9, "x"], 
            [13, "y"]
        ] ));
        var di = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        Bridge.Test.Assert.areStrictEqual(d.remove(6), true);
        Bridge.Test.Assert.areEqual(d.getCount(), 3);
        Bridge.Test.Assert.$false(d.containsKey(6));

        Bridge.Test.Assert.areStrictEqual(di.remove(3), true);
        Bridge.Test.Assert.areEqual(di.getCount(), 2);
        Bridge.Test.Assert.$false(di.containsKey(3));

        Bridge.Test.Assert.$true(di.containsKey(13));
    },
    setItemWorks: function () {
        var d = new Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary("constructor$1", Bridge.merge(new Bridge.Dictionary$2(Bridge.Int,String)(), [
            [3, "b"], 
            [6, "z"], 
            [9, "x"], 
            [13, "y"]
        ] ));
        var di = Bridge.cast(d, Bridge.IDictionary$2(Bridge.Int,String));

        d.setItem(3, "check");
        Bridge.Test.Assert.areEqual(d.getItem(3), "check");
        Bridge.Test.Assert.$false(d.containsKey(10));

        // TODO Bug
        //di[10] = "stuff";
        //Assert.AreEqual(di[10], "stuff");
        //Assert.True(di.ContainsKey(10));
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IDictionaryTests.MyDictionary', {
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

Bridge.define('Bridge.ClientTest.Collections.Generic.IEnumerableTests', {
    customClassThatShouldImplementIEnumerableDoesSo: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(new Bridge.ClientTest.Collections.Generic.IEnumerableTests.MyEnumerable(), Object), Bridge.IEnumerable$1(String)));
    },
    arrayGetEnumeratorMethodWorks: function () {
        var e = Bridge.getEnumerator(["x", "y", "z"]);
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "x");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "y");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "z");
        Bridge.Test.Assert.$false(e.moveNext());
    },
    arrayCastToIEnumerableCanBeEnumerated: function () {
        var enm = ["x", "y", "z"];
        var e = Bridge.getEnumerator(enm, "$1");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "x");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "y");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "z");
        Bridge.Test.Assert.$false(e.moveNext());
    },
    classImplementingIEnumerableCanBeEnumerated: function () {
        var enm = new Bridge.ClientTest.Collections.Generic.IEnumerableTests.MyEnumerable();
        var e = enm.getEnumerator$1();
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "x");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "y");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "z");
        Bridge.Test.Assert.$false(e.moveNext());
    },
    classImplementingIEnumerableCastToIEnumerableCanBeEnumerated: function () {
        var enm = new Bridge.ClientTest.Collections.Generic.IEnumerableTests.MyEnumerable();
        var e = Bridge.getEnumerator(enm, "$1");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "x");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "y");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "z");
        Bridge.Test.Assert.$false(e.moveNext());
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IEnumerableTests.MyEnumerable', {
    inherits: [Bridge.IEnumerable$1(String)],
    getEnumerator$1: function () {
        var $yield = [];
        $yield.push("x");
        $yield.push("y");
        $yield.push("z");
        return Bridge.Array.toEnumerator($yield);
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IListTests', {
    customClassThatShouldImplementIListDoesSo: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(new Bridge.ClientTest.Collections.Generic.IListTests.MyList(new Array(0)), Object), Bridge.IList$1(String)));
    },
    classImplementingIListGetItemWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        Bridge.Test.Assert.areEqual(l.getItem(1), "y");
    },
    classImplementingIListSetItemWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        l.setItem(1, "a");
        Bridge.Test.Assert.areEqual(l.getItem(1), "a");
    },
    classImplementingIListIndexOfWorks: function () {
        var c = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y"]);
        Bridge.Test.Assert.areEqual(c.indexOf("y"), 1);
        Bridge.Test.Assert.areEqual(c.indexOf("z"), -1);
    },
    classImplementingIListCastToIListIndexOfWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y"]);
        Bridge.Test.Assert.areEqual(l.indexOf("y"), 1);
        Bridge.Test.Assert.areEqual(l.indexOf("z"), -1);
    },
    classImplementingIListInsertWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y"]);
        l.insert(1, "z");
        Bridge.Test.Assert.areEqual(l.getItems().toArray(), ["x", "z", "y"]);
    },
    classImplementingIListCastToIListInsertWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y"]);
        l.insert(1, "z");
        Bridge.Test.Assert.areEqual((Bridge.cast(l, Bridge.ClientTest.Collections.Generic.IListTests.MyList)).getItems().toArray(), ["x", "z", "y"]);
    },
    classImplementingIListRemoveAtWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        l.removeAt(1);
        Bridge.Test.Assert.areEqual(l.getItems().toArray(), ["x", "z"]);
    },
    classImplementingIListCastToIListRemoveAtWorks: function () {
        var l = new Bridge.ClientTest.Collections.Generic.IListTests.MyList(["x", "y", "z"]);
        l.removeAt(1);
        Bridge.Test.Assert.areEqual((Bridge.cast(l, Bridge.ClientTest.Collections.Generic.IListTests.MyList)).getItems().toArray(), ["x", "z"]);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IListTests.C', {
    _i: 0,
    constructor: function (i) {
        this._i = i;
    },
    equals: function (o) {
        return Bridge.is(o, Bridge.ClientTest.Collections.Generic.IListTests.C) && this._i === (Bridge.cast(o, Bridge.ClientTest.Collections.Generic.IListTests.C))._i;
    },
    getHashCode: function () {
        return this._i;
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IListTests.MyList', {
    inherits: [Bridge.IList$1(String)],
    config: {
        properties: {
            Items: null
        }
    },
    constructor: function (items) {
        this.setItems(new Bridge.List$1(String)(items));
    },
    getCount: function () {
        return this.getItems().getCount();
    },
    getItem: function (index) {
        return this.getItems().get(index);
    },
    setItem: function (index, value) {
        this.getItems().set(index, value);
    },
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    getEnumerator$1: function () {
        return this.getItems().getEnumerator();
    },
    add: function (item) {
        this.getItems().add(item);
    },
    clear: function () {
        this.getItems().clear();
    },
    contains: function (item) {
        return this.getItems().contains(item);
    },
    remove: function (item) {
        return this.getItems().remove(item);
    },
    indexOf: function (item) {
        return this.getItems().indexOf(item);
    },
    insert: function (index, item) {
        this.getItems().insert(index, item);
    },
    removeAt: function (index) {
        this.getItems().removeAt(index);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IteratorBlockTests', {
    assertEqual: function (actual, expected, message) {
        Bridge.Test.Assert.areEqual$1(Bridge.String.replaceAll(actual, "\r\n", "\n"), Bridge.String.replaceAll(expected, "\r\n", "\n"), message);
    },
    typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable: function () {
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(new Bridge.Text.StringBuilder()).getEnumerator(0);
        //Assert.True((object)enm is IEnumerator<int>);     // TODO Bug: always returns false
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(enm, Object), Bridge.IEnumerator));
        //Assert.True((object)enm is IDisposable);          // TODO Bug: always returns false
    },
    enumeratingIEnumeratorIteratorToEndWorks: function () {
        //TODO expected for v1: yield iterator works with no state machine
        var sb = new Bridge.Text.StringBuilder();
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerator(2);

        while (enm.moveNext()) {
            sb.appendLine("got " + enm.getCurrent());
        }

        this.assertEqual(sb.toString(), "yielding 0\r\nyielding 1\r\nyielding -1\r\nin finally\r\ngot 0\r\ngot 1\r\ngot -1\r\n", null);
    },
    prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks: function () {
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerator(5);

        for (var i = 0; i < 2; i++) {
            enm.moveNext();
            sb.appendLine("got " + enm.getCurrent());
        }
        enm.dispose();

        this.assertEqual(sb.toString(), "yielding 0\r\nyielding 1\r\nyielding 2\r\nyielding 3\r\nyielding 4\r\nyielding -1\r\nin finally\r\ngot 0\r\ngot 1\r\n", null);
    },
    exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks: function () {
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();

        try {
            var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumeratorThrows();
            for (var i = 0; i < 100; i++) {
                enm.moveNext();
                sb.appendLine("got " + enm.getCurrent());
            }
            Bridge.Test.Assert.fail$1("Should have thrown an exception in the loop");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            sb.appendLine("caught exception");
        }

        this.assertEqual(sb.toString(), "yielding 1\r\nyielding 2\r\nthrowing\r\nin finally\r\ncaught exception\r\n", null);
    },
    typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface: function () {
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(new Bridge.Text.StringBuilder()).getEnumerable(0);
        //Assert.True((object)enm is IEnumerable<int>);   // TODO Bug: always returns false
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(enm, Object), Bridge.IEnumerable));
    },
    enumeratingIEnumerableIteratorToEndWorks: function () {
        var $t, $t1;
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();
        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerable(2);

        $t = Bridge.getEnumerator(enm);
        while ($t.moveNext()) {
            var i = $t.getCurrent();
            sb.appendLine("got " + i);
        }
        sb.appendLine("-");
        $t1 = Bridge.getEnumerator(enm);
        while ($t1.moveNext()) {
            var i1 = $t1.getCurrent();
            sb.appendLine("got " + i1);
        }

        this.assertEqual(sb.toString(), "yielding 0\r\nyielding 1\r\nyielding -1\r\nin finally\r\ngot 0\r\ngot 1\r\ngot -1\r\n-\r\ngot 0\r\ngot 1\r\ngot -1\r\n", null);
    }    ,
    prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks: function () {
        var $t;
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();
        var n = 0;
        $t = Bridge.getEnumerator(new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerable(5));
        while ($t.moveNext()) {
            var i = $t.getCurrent();
            sb.appendLine("got " + i);
            if (++n === 2)
                break;
        }

        this.assertEqual(sb.toString(), "yielding 0\r\nyielding 1\r\nyielding 2\r\nyielding 3\r\nyielding 4\r\nyielding -1\r\nin finally\r\ngot 0\r\ngot 1\r\n", null);
    }    ,
    exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks: function () {
        //TODO expected for v1: yield iterator works with no state machine

        var sb = new Bridge.Text.StringBuilder();

        try {
            var enumerable = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerableThrows(5);

            var enumerator = Bridge.getEnumerator(enumerable, "$1");
            for (var i = 0; i < 100; i++) {
                enumerator.moveNext();
                sb.appendLine("got " + enumerator.getCurrent());
            }
            Bridge.Test.Assert.fail$1("Should have thrown");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            sb.appendLine("caught exception");
        }

        this.assertEqual(sb.toString(), "yielding 1\r\nyielding 2\r\nthrowing\r\nin finally\r\ncaught exception\r\n", null);
    },
    enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters: function () {
        var $t, $t1;
        var sb = new Bridge.Text.StringBuilder();

        var enm = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerableMutateParameter(3);
        $t = Bridge.getEnumerator(enm);
        while ($t.moveNext()) {
            var i = $t.getCurrent();
            sb.appendLine(i.toString());
        }
        $t1 = Bridge.getEnumerator(enm);
        while ($t1.moveNext()) {
            var i1 = $t1.getCurrent();
            sb.appendLine(i1.toString());
        }

        this.assertEqual(sb.toString(), "3\r\n2\r\n1\r\n3\r\n2\r\n1\r\n", null);
    }    ,
    differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals: function () {
        var sb = new Bridge.Text.StringBuilder();

        var enumerable = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C(sb).getEnumerableSimple(3);
        var enm1 = Bridge.getEnumerator(enumerable, "$1");
        var enm2 = Bridge.getEnumerator(enumerable, "$1");

        while (enm1.moveNext()) {
            enm2.moveNext();
            sb.appendLine(enm1.getCurrent().toString());
            sb.appendLine(enm2.getCurrent().toString());
        }

        this.assertEqual(sb.toString(), "0\r\n0\r\n1\r\n1\r\n2\r\n2\r\n-1\r\n-1\r\n", null);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.IteratorBlockTests.C', {
    _sb: null,
    constructor: function (sb) {
        this._sb = sb;
    },
    getEnumerator: function (n) {
        var $yield = [];
        try {
            for (var i = 0; i < n; i++) {
                this._sb.appendLine("yielding " + i);
                $yield.push(i);
            }
            this._sb.appendLine("yielding -1");
            $yield.push(-1);
        }
        finally {
            this._sb.appendLine("in finally");
        }
        return Bridge.Array.toEnumerator($yield);
    },
    getEnumeratorThrows: function () {
        var $yield = [];
        try {
            this._sb.appendLine("yielding 1");
            $yield.push(1);
            this._sb.appendLine("yielding 2");
            $yield.push(2);
            this._sb.appendLine("throwing");
            throw new Bridge.Exception("test");
            this._sb.appendLine("yielding 3");
            $yield.push(3);
        }
        finally {
            this._sb.appendLine("in finally");
        }
        return Bridge.Array.toEnumerator($yield);
    },
    getEnumerable: function (n) {
        var $yield = [];
        try {
            for (var i = 0; i < n; i++) {
                this._sb.appendLine("yielding " + i);
                $yield.push(i);
            }
            this._sb.appendLine("yielding -1");
            $yield.push(-1);
        }
        finally {
            this._sb.appendLine("in finally");
        }
        n = 0; // Just to verify that the value of 'n' is not reused in the next call
        return Bridge.Array.toEnumerable($yield);
    },
    getEnumerableThrows: function (n) {
        var $yield = [];
        try {
            this._sb.appendLine("yielding 1");
            $yield.push(1);
            this._sb.appendLine("yielding 2");
            $yield.push(2);
            this._sb.appendLine("throwing");
            throw new Bridge.Exception("test");
            this._sb.appendLine("yielding 3");
            $yield.push(3);
        }
        finally {
            this._sb.appendLine("in finally");
        }
        return Bridge.Array.toEnumerable($yield);
    },
    getEnumerableMutateParameter: function (n) {
        var $yield = [];
        for (; n > 0; n--) {
            $yield.push(n);
        }
        return Bridge.Array.toEnumerable($yield);
    },
    getEnumerableSimple: function (n) {
        var $yield = [];
        for (var i = 0; i < n; i++) {
            $yield.push(i);
        }
        $yield.push(-1);
        return Bridge.Array.toEnumerable($yield);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ListTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.List$1(Bridge.Int)), "Bridge.List$1$Bridge.Int", "GetClassName()");
        //Assert.True(typeof(List<int>).IsClass, "IsClass should be true");
        var list = new Bridge.List$1(Bridge.Int)();
        Bridge.Test.Assert.true$1(Bridge.is(list, Bridge.List$1(Bridge.Int)), "is int[] should be true");
        // TODO Bug
        //Assert.True(list is IList<int>, "is IList<int> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(list, Bridge.ICollection$1(Bridge.Int)), "is ICollection<int> should be true");
        Bridge.Test.Assert.true$1(Bridge.is(list, Bridge.IEnumerable$1(Bridge.Int)), "is IEnumerable<int> should be true");
    },
    defaultConstructorWorks: function () {
        var l = new Bridge.List$1(Bridge.Int)();
        Bridge.Test.Assert.areEqual(l.getCount(), 0);
    },
    constructingFromArrayWorks: function () {
        var arr = [1, 4, 7, 8];
        var l = new Bridge.List$1(Bridge.Int)(arr);
        Bridge.Test.Assert.$false(Bridge.cast(l, Object) === Bridge.cast(arr, Object));
        Bridge.Test.Assert.areEqual(l.toArray(), arr);
    },
    constructingFromListWorks: function () {
        var arr = new Bridge.List$1(Bridge.Int)([1, 4, 7, 8]);
        var l = new Bridge.List$1(Bridge.Int)(arr);
        Bridge.Test.Assert.$false(Bridge.cast(l, Object) === Bridge.cast(arr, Object));
        Bridge.Test.Assert.areEqual(l, arr);
    },
    constructingFromIEnumerableWorks: function () {
        var enm = Bridge.cast(new Bridge.List$1(Bridge.Int)([1, 4, 7, 8]), Bridge.IEnumerable$1(Bridge.Int));
        var l = new Bridge.List$1(Bridge.Int)(enm);
        Bridge.Test.Assert.$false(Bridge.cast(l, Object) === Bridge.cast(enm, Object));
        Bridge.Test.Assert.areEqual(l.toArray(), [1, 4, 7, 8]);
    },
    countWorks: function () {
        Bridge.Test.Assert.areEqual(new Bridge.List$1(String)().getCount(), 0);
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"]
        ] ).getCount(), 1);
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] ).getCount(), 2);
    },
    indexingWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] ).get(0), "x");
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] ).get(1), "y");
    },
    foreachWorks: function () {
        var $t;
        var result = "";
        $t = Bridge.getEnumerator(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] ));
        while ($t.moveNext()) {
            var s = $t.getCurrent();
            result += s;
        }
        Bridge.Test.Assert.areEqual(result, "xy");
    }    ,
    getEnumeratorWorks: function () {
        var e = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] ).getEnumerator();
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "x");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "y");
        Bridge.Test.Assert.$false(e.moveNext());
    },
    addWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] );
        l.add("a");
        Bridge.Test.Assert.areEqual(l.toArray(), ["x", "y", "a"]);
    },
    addRangeWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] );
        l.addRange(["a", "b", "c"]);
        Bridge.Test.Assert.areEqual(l.toArray(), ["x", "y", "a", "b", "c"]);
    },
    clearWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] );
        l.clear();
        Bridge.Test.Assert.areEqual(0, l.getCount());
    },
    containsWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] );
        Bridge.Test.Assert.$true(list.contains("x"));
        Bridge.Test.Assert.$false(list.contains("z"));
    },
    sliceWithoutEndWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["d"]
        ] ).slice(2).toArray(), ["c", "d"]);
    },
    sliceWithEndWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["d"]
        ] ).slice(1, 3).toArray(), ["b", "c"]);
    },
    foreachWithListItemCallbackWorks: function () {
        var result = "";
        Bridge.Linq.Enumerable.from(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"]
        ] )).forEach(function (s) {
            return result += s;
        });
        Bridge.Test.Assert.areEqual(result, "abc");
    },
    foreachWithListCallbackWorks: function () {
        var result = "";
        Bridge.Linq.Enumerable.from(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"]
        ] )).forEach(function (s, i) {
            return result += s + i;
        });
        Bridge.Test.Assert.areEqual(result, "a0b1c2");
    },
    indexOfWithoutStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual(["a", "b", "c", "b"].indexOf("b"), 1);
    },
    insertWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] );
        l.insert(1, "a");
        Bridge.Test.Assert.areEqual(l.toArray(), ["x", "a", "y"]);
    },
    joinWithoutDelimiterWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["b"]
        ] ).join(), "a,b,c,b");
    },
    joinWithDelimiterWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["b"]
        ] ).join("|"), "a|b|c|b");
    },
    removeWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["a"]
        ] );
        Bridge.Test.Assert.$true(list.remove("a"));
        Bridge.Test.Assert.areEqual(list.toArray(), ["b", "c", "a"]);
    },
    removeCanRemoveNullItem: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            [null], 
            ["c"], 
            [null]
        ] );
        Bridge.Test.Assert.$true(list.remove(null));
        Bridge.Test.Assert.areEqual(list.toArray(), ["a", "c", null]);
    },
    removeAtWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["a"]
        ] );
        list.removeAt(1);
        Bridge.Test.Assert.areEqual(list.toArray(), ["a", "c", "a"]);
    },
    removeRangeWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            ["b"], 
            ["c"], 
            ["d"]
        ] );
        list.removeRange(1, 2);
        Bridge.Test.Assert.areEqual(list.toArray(), ["a", "d"]);
    },
    reverseWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1], 
            [3], 
            [4], 
            [1], 
            [3], 
            [2]
        ] );
        list.reverse();
        Bridge.Test.Assert.areEqual(list.toArray(), [2, 3, 1, 4, 3, 1]);
    },
    sortWithDefaultCompareWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1], 
            [6], 
            [6], 
            [4], 
            [2]
        ] );
        list.sort();
        Bridge.Test.Assert.areEqual(list.toArray(), [1, 2, 4, 6, 6]);
    },
    sortWithCompareCallbackWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1], 
            [6], 
            [6], 
            [4], 
            [2]
        ] );
        list.sort(function (x, y) {
            return Bridge.cast(y, Bridge.Int) - Bridge.cast(x, Bridge.Int);
        });
        Bridge.Test.Assert.areEqual(list.toArray(), [6, 6, 4, 2, 1]);
    },
    sortWithIComparerWorks: function () {
        var list = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
            [1], 
            [6], 
            [6], 
            [4], 
            [2]
        ] );
        list.sort(Bridge.fn.bind(new Bridge.ClientTest.Collections.Generic.ListTests.TestReverseComparer(), new Bridge.ClientTest.Collections.Generic.ListTests.TestReverseComparer().compare));
        Bridge.Test.Assert.areEqual(list.toArray(), [6, 6, 4, 2, 1]);
    },
    foreachWhenCastToIEnumerableWorks: function () {
        var $t;
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] );
        var result = "";
        $t = Bridge.getEnumerator(list);
        while ($t.moveNext()) {
            var s = $t.getCurrent();
            result += s;
        }
        Bridge.Test.Assert.areEqual(result, "xy");
    }    ,
    iEnumerableGetEnumeratorWorks: function () {
        var l = Bridge.cast(Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"]
        ] ), Bridge.IEnumerable$1(String));
        var e = Bridge.getEnumerator(l, "$1");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "x");
        Bridge.Test.Assert.$true(e.moveNext());
        Bridge.Test.Assert.areEqual(e.getCurrent(), "y");
        Bridge.Test.Assert.$false(e.moveNext());
    },
    iCollectionCountWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        Bridge.Test.Assert.areEqual(l.getCount(), 3);
    },
    iCollectionAddWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        l.add("a");
        Bridge.Test.Assert.areEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), ["x", "y", "z", "a"]);
    },
    iCollectionClearWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        l.clear();
        Bridge.Test.Assert.areEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), new Array(0));
    },
    iCollectionContainsWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        Bridge.Test.Assert.$true(l.contains("y"));
        Bridge.Test.Assert.$false(l.contains("a"));
    },
    iCollectionRemoveCanRemoveNullItem: function () {
        var list = Bridge.merge(new Bridge.List$1(String)(), [
            ["a"], 
            [null], 
            ["c"], 
            [null]
        ] );
        Bridge.Test.Assert.$true(list.remove(null));
        Bridge.Test.Assert.areEqual((Bridge.cast(list, Bridge.List$1(String))).toArray(), ["a", "c", null]);
    },
    iListIndexingWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        Bridge.Test.Assert.areEqual(l.get(1), "y");
        l.set(1, "a");
        Bridge.Test.Assert.areEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), ["x", "a", "z"]);
    },
    iListIndexOfWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        Bridge.Test.Assert.areEqual(l.indexOf("y"), 1);
        Bridge.Test.Assert.areEqual(l.indexOf("a"), -1);
    },
    iListInsertWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        l.insert(1, "a");
        Bridge.Test.Assert.areEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), ["x", "a", "y", "z"]);
    },
    iListRemoveAtWorks: function () {
        var l = Bridge.merge(new Bridge.List$1(String)(), [
            ["x"], 
            ["y"], 
            ["z"]
        ] );
        l.removeAt(1);
        Bridge.Test.Assert.areEqual((Bridge.cast(l, Bridge.List$1(String))).toArray(), ["x", "z"]);
    },
    toArrayWorks: function () {
        var l = new Bridge.List$1(String)();
        l.add("a");
        l.add("b");
        var actual = l.toArray();
        Bridge.Test.Assert.$false(l === actual);
        Bridge.Test.Assert.$true(Bridge.is(actual, Array));
        Bridge.Test.Assert.areEqual(actual, ["a", "b"]);
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ListTests.C', {
    i: 0,
    constructor: function (i) {
        this.i = i;
    },
    equals: function (o) {
        return Bridge.is(o, Bridge.ClientTest.Collections.Generic.ListTests.C) && this.i === (Bridge.cast(o, Bridge.ClientTest.Collections.Generic.ListTests.C)).i;
    },
    getHashCode: function () {
        return this.i;
    }
});

Bridge.define('Bridge.ClientTest.Collections.Generic.ListTests.TestReverseComparer', {
    inherits: [Bridge.IComparer$1(Bridge.Int)],
    compare: function (x, y) {
        Bridge.Test.Assert.$true(Bridge.is(this, Bridge.ClientTest.Collections.Generic.ListTests.TestReverseComparer));
        return x === y ? 0 : (x > y ? -1 : 1);
    }
});

Bridge.define('Bridge.ClientTest.Constants', {
    statics: {
        PREFIX_SYSTEM_CLASSES: "Simple types",
        PREFIX_SYSTEM_INTERFACES: "System interface",
        PREFIX_COLLECTIONS: "Collections",
        PREFIX_UTILITIES: "Utilities",
        PREFIX_EXCEPTIONS: "Exceptions",
        MODULE_DATETIME: "Date and time",
        MODULE_NULLABLE: "Nullable",
        MODULE_STRING: "String",
        MODULE_REGEX: "Regex",
        MODULE_ENUM: "Enum",
        MODULE_MATH: "Math",
        MODULE_COMPARER: "Comparer",
        MODULE_EQUALITYCOMPARER: "EqualityComparer",
        MODULE_NUMBERFORMATINFO: "NumberFormatInfo",
        MODULE_CULTUREINFO: "СultureInfo",
        MODULE_PROPERTYACCESSOR: "Property accessor",
        config: {
            init: function () {
                this.MODULE_DECIMAL = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_DOUBLE = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_INT16 = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_INT64 = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_SBYTE = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_FLOAT = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_UINT64 = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_UINT32 = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_OBJECT = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_CHAR = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_INT32 = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_UINT16 = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_BYTE = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_TUPLE = Bridge.ClientTest.Constants.PREFIX_SYSTEM_CLASSES;
                this.MODULE_ICOLLECTION = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_IDICTIONARY = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_LIST = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_ILIST = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_ITERATORBLOCK = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_ARRAY = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_IENUMERABLE = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_GENERICDICTIONARY = Bridge.ClientTest.Constants.PREFIX_COLLECTIONS;
                this.MODULE_ICOMPARABLE = Bridge.ClientTest.Constants.PREFIX_SYSTEM_INTERFACES;
                this.MODULE_IEQUATABLE = Bridge.ClientTest.Constants.PREFIX_SYSTEM_INTERFACES;
                this.MODULE_RUNTIMEHELPERS = Bridge.ClientTest.Constants.PREFIX_UTILITIES;
                this.MODULE_ENVIRONMENT = Bridge.ClientTest.Constants.PREFIX_UTILITIES;
                this.MODULE_NOTSUPPORTEDEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_KEYNOTFOUNDEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_EXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_ARGUMENTNULLEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_DIVIDEBYZEROEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_NOTIMPLEMENTEDEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_OVERFLOWEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_ARITHMETICEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_FORMATEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_INVALIDOPERATIONEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_INVALIDCASTEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_ARGUMENTEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_NULLREFERENCEEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
                this.MODULE_ARGUMENTOUTOFRANGEEXCEPTION = Bridge.ClientTest.Constants.PREFIX_EXCEPTIONS;
            }
        }
    }
});

Bridge.define('Bridge.ClientTest.CultureInfoTests', {
    typePropertiesAreCorrect: function () {
        var culture = Bridge.CultureInfo.invariantCulture;
        //Assert.AreEqual(typeof(CultureInfo).FullName, "ss.CultureInfo");
        //Assert.True(typeof(CultureInfo).IsClass);
        //Assert.AreEqual(typeof(CultureInfo).GetInterfaces(), new[] { typeof(IFormatProvider) });
        Bridge.Test.Assert.$true(Bridge.is(culture, Bridge.CultureInfo));
    },
    getFormatWorks: function () {
        var culture = Bridge.CultureInfo.invariantCulture;
        Bridge.Test.Assert.areEqual(culture.getFormat(Bridge.Int), null);
        Bridge.Test.Assert.areEqual(culture.getFormat(Bridge.NumberFormatInfo), culture.numberFormat);
        Bridge.Test.Assert.areEqual(culture.getFormat(Bridge.DateTimeFormatInfo), culture.dateTimeFormat);
    },
    invariantWorks: function () {
        var culture = Bridge.CultureInfo.invariantCulture;
        Bridge.Test.Assert.areEqual(culture.name, "en-US");
        Bridge.Test.Assert.areEqual(culture.dateTimeFormat, Bridge.DateTimeFormatInfo.invariantInfo);
        Bridge.Test.Assert.areEqual(culture.numberFormat, Bridge.NumberFormatInfo.invariantInfo);
    }
});

Bridge.define('Bridge.ClientTest.DateTimeFormatInfoTests', {
    typePropertiesAreCorrect: function () {
        var format = Bridge.DateTimeFormatInfo.invariantInfo;
        //Assert.AreEqual(typeof (DateTimeFormatInfo).FullName, "ss.DateTimeFormatInfo");
        //Assert.True(typeof (DateTimeFormatInfo).IsClass);
        //Assert.AreEqual(typeof(DateTimeFormatInfo).GetInterfaces(), new[] { typeof(IFormatProvider) });
        Bridge.Test.Assert.$true(Bridge.is(format, Bridge.DateTimeFormatInfo));
    },
    getFormatWorks: function () {
        var format = Bridge.DateTimeFormatInfo.invariantInfo;
        Bridge.Test.Assert.areEqual(format.getFormat(Bridge.Int), null);
        Bridge.Test.Assert.areEqual(format.getFormat(Bridge.DateTimeFormatInfo), format);
    },
    invariantWorks: function () {
        var format = Bridge.DateTimeFormatInfo.invariantInfo;
        Bridge.Test.Assert.areEqual(format.amDesignator, "AM");
        Bridge.Test.Assert.areEqual(format.pmDesignator, "PM");

        Bridge.Test.Assert.areEqual(format.dateSeparator, "/");
        Bridge.Test.Assert.areEqual(format.timeSeparator, ":");

        //Assert.AreEqual(format.GMTDateTimePattern, "ddd, dd MMM yyyy HH:mm:ss 'GMT'");
        //Assert.AreEqual(format.UniversalDateTimePattern, "yyyy-MM-dd HH:mm:ssZ");
        Bridge.Test.Assert.areEqual(format.sortableDateTimePattern, "yyyy'-'MM'-'dd'T'HH':'mm':'ss");
        //Assert.AreEqual(format.DateTimePattern, "dddd, MMMM dd, yyyy h:mm:ss tt");

        Bridge.Test.Assert.areEqual(format.longDatePattern, "dddd, MMMM dd, yyyy");
        Bridge.Test.Assert.areEqual(format.shortDatePattern, "M/d/yyyy");

        Bridge.Test.Assert.areEqual(format.longTimePattern, "h:mm:ss tt");
        Bridge.Test.Assert.areEqual(format.shortTimePattern, "h:mm tt");

        Bridge.Test.Assert.areEqual(format.firstDayOfWeek, 0);
        Bridge.Test.Assert.areEqual(format.dayNames, ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
        //Assert.AreEqual(format.ShortDayNames, new[] {"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"});
        //Assert.AreEqual(format.MinimizedDayNames, new[] {"Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"});

        Bridge.Test.Assert.areEqual(format.monthNames, ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""]);
        //Assert.AreEqual(format.ShortMonthNames,
        //    new[] {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""});
    }
});

Bridge.define('Bridge.ClientTest.EnvironmentTests', {
    newLineIsAStringContainingOnlyTheNewLineChar: function () {
        Bridge.Test.Assert.areEqual('\n', "\n");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ArgumentExceptionTests', {
    statics: {
        DefaultMessage: "Value does not fall within the expected range."
    },
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.ArgumentException), "Bridge.ArgumentException", "Name");
        //Assert.True(typeof(ArgumentException).IsClass, "IsClass");
        //Assert.AreEqual(typeof(ArgumentException).BaseType, typeof(Exception), "BaseType");
        var d = new Bridge.ArgumentException();
        Bridge.Test.Assert.$true(Bridge.is(d, Bridge.ArgumentException));
        Bridge.Test.Assert.$true(Bridge.is(d, Bridge.Exception));

        //var interfaces = typeof(ArgumentException).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 0);
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.ArgumentException();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArgumentException), "is ArgumentException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), undefined, "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), Bridge.ClientTest.Exceptions.ArgumentExceptionTests.DefaultMessage);
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.ArgumentException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArgumentException), "is ArgumentException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), undefined, "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArgumentException("The message", null, inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArgumentException), "is ArgumentException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), null, "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndParamNameWorks: function () {
        var ex = new Bridge.ArgumentException("The message", "someParam");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArgumentException), "is ArgumentException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndParamNameAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArgumentException("The message", "someParam", inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArgumentException), "is ArgumentException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.ArgumentNullException), "Bridge.ArgumentNullException", "Name");
        //Assert.True(typeof(ArgumentNullException).IsClass, "IsClass");
        //Assert.AreEqual(typeof(ArgumentNullException).BaseType, typeof(ArgumentException), "BaseType");
        var d = new Bridge.ArgumentNullException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.ArgumentNullException), "is ArgumentNullException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.ArgumentException), "is ArgumentException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");

        //var interfaces = typeof(ArgumentNullException).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 0, "Interfaces length");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.ArgumentNullException();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArgumentNullException), "is ArgumentNullException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), undefined, "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Value cannot be null.");
    },
    constructorWithParamNameWorks: function () {
        var ex = new Bridge.ArgumentNullException("someParam");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArgumentNullException), "is ArgumentNullException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Value cannot be null.\nParameter name: someParam");
    },
    constructorWithParamNameAndMessageWorks: function () {
        var ex = new Bridge.ArgumentNullException("someParam", "The message");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArgumentNullException), "is ArgumentNullException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArgumentNullException(null, "The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArgumentNullException), "is ArgumentException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), null, "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.ArgumentOutOfRangeException), "Bridge.ArgumentOutOfRangeException", "Name");
        //Assert.True(typeof(ArgumentOutOfRangeException).IsClass, "IsClass");
        //Assert.AreEqual(typeof(ArgumentOutOfRangeException).BaseType, typeof(ArgumentException), "BaseType");
        var d = new Bridge.ArgumentOutOfRangeException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.ArgumentException), "is ArgumentException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");

        //var interfaces = typeof(ArgumentOutOfRangeException).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 0, "Interfaces length");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.ArgumentOutOfRangeException();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), undefined, "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual$1(ex.getActualValue(), undefined, "ActualValue");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Value is out of range.");
    },
    constructorWithParamNameWorks: function () {
        var ex = new Bridge.ArgumentOutOfRangeException("someParam");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual$1(ex.getActualValue(), undefined, "ActualValue");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Value is out of range.\nParameter name: someParam");
    },
    constructorWithParamNameAndMessageWorks: function () {
        var ex = new Bridge.ArgumentOutOfRangeException("someParam", "The message");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual$1(ex.getActualValue(), undefined, "ActualValue");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArgumentOutOfRangeException(null, "The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.Test.Assert.null$1(ex.getParamName(), "ParamName");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual$1(ex.getActualValue(), undefined, "ActualValue");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithParamNameAndActualValueAndMessageWorks: function () {
        var ex = new Bridge.ArgumentOutOfRangeException("someParam", "The message", null, 42);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArgumentOutOfRangeException), "is ArgumentOutOfRangeException");
        Bridge.Test.Assert.areEqual$1(ex.getParamName(), "someParam", "ParamName");
        Bridge.Test.Assert.null$1(ex.getInnerException(), "InnerException");
        Bridge.Test.Assert.areEqual$1(ex.getActualValue(), 42, "ActualValue");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ArithmeticExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.ArithmeticException), "Bridge.ArithmeticException", "Name");
        //Assert.True(typeof(ArithmeticException).IsClass, "IsClass");
        //Assert.AreEqual(typeof(ArithmeticException).BaseType, typeof(Exception), "BaseType");
        var d = new Bridge.ArithmeticException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.ArithmeticException), "is DivideByZeroException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");

        //var interfaces = typeof(ArithmeticException).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 0, "Interfaces length");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.ArithmeticException();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArithmeticException), "is ArithmeticException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Overflow or underflow in the arithmetic operation.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.ArithmeticException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArithmeticException), "is OverflowException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.ArithmeticException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.ArithmeticException), "is OverflowException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.DivideByZeroException), "Bridge.DivideByZeroException", "Name");
        //Assert.True(typeof(DivideByZeroException).IsClass, "IsClass");
        //Assert.AreEqual(typeof(DivideByZeroException).BaseType, typeof(ArithmeticException), "BaseType");
        var d = new Bridge.DivideByZeroException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.DivideByZeroException), "is DivideByZeroException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");

        //var interfaces = typeof(DivideByZeroException).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 0, "Interfaces length");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.DivideByZeroException();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.DivideByZeroException), "is DivideByZeroException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Division by 0.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.DivideByZeroException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.DivideByZeroException), "is DivideByZeroException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.DivideByZeroException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.DivideByZeroException), "is DivideByZeroException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.Exception), "Bridge.Exception", "Name");
        //Assert.True(typeof(Exception).IsClass, "IsClass");
        //Assert.AreEqual(typeof(Exception).BaseType, typeof(object), "BaseType");
        var d = new Bridge.Exception();
        Bridge.Test.Assert.$true(Bridge.is(d, Bridge.Exception));

        //var interfaces = typeof(Exception).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 0);
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.Exception();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.Exception), "is Exception");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), undefined);
        //Assert.False(string.IsNullOrEmpty(ex.Stack), "Stack available");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.Exception("The message");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.Exception), "is Exception");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
        //Assert.False(string.IsNullOrEmpty(ex.Stack), "Stack available");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.Exception("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.Exception), "is Exception");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
        //Assert.False(string.IsNullOrEmpty(ex.Stack), "Stack available");
    },
    messagePropertyCanBeOverridden: function () {
        var ex = Bridge.cast(new Bridge.ClientTest.Exceptions.ExceptionTests.MyException("Test message", null), Bridge.Exception);
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Test message");
    },
    innerExceptionPropertyCanBeOverridden: function () {
        var inner = new Bridge.Exception("a");
        var ex = Bridge.cast(new Bridge.ClientTest.Exceptions.ExceptionTests.MyException("Test message", inner), Bridge.Exception);
        Bridge.Test.Assert.$true(ex.getInnerException() === inner);
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.ExceptionTests.MyException', {
    inherits: [Bridge.Exception],
    _message: null,
    _innerException: null,
    constructor: function (message, innerException) {
        Bridge.Exception.prototype.$constructor.call(this);

        this._message = message;
        this._innerException = innerException;
    },
    getMessage: function () {
        return this._message;
    },
    getInnerException: function () {
        return this._innerException;
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.FormatExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.FormatException), "Bridge.FormatException", "Name");
        //Assert.True(typeof(FormatException).IsClass, "IsClass");
        //Assert.AreEqual(typeof(FormatException).BaseType, typeof(Exception), "BaseType");
        var d = new Bridge.FormatException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.FormatException), "is FormatException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");

        //var interfaces = typeof(FormatException).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 0, "Interfaces length");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.FormatException();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.FormatException), "is FormatException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Invalid format.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.FormatException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.FormatException), "is FormatException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.FormatException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.FormatException), "is FormatException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.InvalidCastExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.InvalidCastException), "Bridge.InvalidCastException", "Name");
        //Assert.True(typeof(InvalidCastException).IsClass, "IsClass");
        //Assert.AreEqual(typeof(InvalidCastException).BaseType, typeof(Exception), "BaseType");
        var d = new Bridge.InvalidCastException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.InvalidCastException), "is InvalidCastException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");

        //var interfaces = typeof(InvalidCastException).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 0, "Interfaces length");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.InvalidCastException();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.InvalidCastException), "is InvalidCastException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The cast is not valid.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.InvalidCastException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.InvalidCastException), "is InvalidCastException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.InvalidCastException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.InvalidCastException), "is InvalidCastException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.InvalidOperationException), "Bridge.InvalidOperationException", "Name");
        //Assert.True(typeof(InvalidOperationException).IsClass, "IsClass");
        //Assert.AreEqual(typeof(InvalidOperationException).BaseType, typeof(Exception), "BaseType");
        var d = new Bridge.InvalidOperationException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.InvalidOperationException), "is InvalidOperationException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");

        //var interfaces = typeof(InvalidOperationException).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 0, "Interfaces length");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.InvalidOperationException();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.InvalidOperationException), "is InvalidOperationException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Operation is not valid due to the current state of the object.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.InvalidOperationException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.InvalidOperationException), "is InvalidOperationException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.InvalidOperationException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.InvalidOperationException), "is InvalidOperationException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.KeyNotFoundException), "Bridge.KeyNotFoundException", "Name");
        //Assert.True(typeof(KeyNotFoundException).IsClass, "IsClass");
        //Assert.AreEqual(typeof(KeyNotFoundException).BaseType, typeof(Exception), "BaseType");
        var d = new Bridge.KeyNotFoundException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.KeyNotFoundException), "is KeyNotFoundException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");

        //var interfaces = typeof(KeyNotFoundException).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 0, "Interfaces length");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.KeyNotFoundException();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.KeyNotFoundException), "is KeyNotFoundException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Key not found.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.KeyNotFoundException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.KeyNotFoundException), "is KeyNotFoundException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.KeyNotFoundException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.KeyNotFoundException), "is KeyNotFoundException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.NotImplementedExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.NotImplementedException), "Bridge.NotImplementedException", "Name");
        //Assert.True(typeof(NotImplementedException).IsClass, "IsClass");
        //Assert.AreEqual(typeof(NotImplementedException).BaseType, typeof(Exception), "BaseType");
        var d = new Bridge.NotImplementedException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.NotImplementedException), "is NotImplementedException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");

        //var interfaces = typeof(NotImplementedException).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 0, "Interfaces length");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.NotImplementedException();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.NotImplementedException), "is NotImplementedException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The method or operation is not implemented.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.NotImplementedException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.NotImplementedException), "is NotImplementedException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.NotImplementedException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.NotImplementedException), "is NotImplementedException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.NotSupportedExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.NotSupportedException), "Bridge.NotSupportedException", "Name");
        //Assert.True(typeof(NotSupportedException).IsClass, "IsClass");
        //Assert.AreEqual(typeof(NotSupportedException).BaseType, typeof(Exception), "BaseType");
        var d = new Bridge.NotSupportedException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.NotSupportedException), "is NotSupportedException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");

        //var interfaces = typeof(NotSupportedException).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 0, "Interfaces length");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.NotSupportedException();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.NotSupportedException), "is NotSupportedException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Specified method is not supported.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.NotSupportedException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.NotSupportedException), "is NotSupportedException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.NotSupportedException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.NotSupportedException), "is NotSupportedException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.NullReferenceExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.NullReferenceException), "Bridge.NullReferenceException", "Name");
        //Assert.True(typeof(NullReferenceException).IsClass, "IsClass");
        //Assert.AreEqual(typeof(NullReferenceException).BaseType, typeof(Exception), "BaseType");
        var d = new Bridge.NullReferenceException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.NullReferenceException), "is NullReferenceException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");

        //var interfaces = typeof(NullReferenceException).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 0, "Interfaces length");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.NullReferenceException();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.NullReferenceException), "is NullReferenceException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Object is null.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.NullReferenceException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.NullReferenceException), "is NullReferenceException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.NullReferenceException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.NullReferenceException), "is NullReferenceException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.Exceptions.OverflowExceptionTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual$1(Bridge.getTypeName(Bridge.OverflowException), "Bridge.OverflowException", "Name");
        //Assert.True(typeof(OverflowException).IsClass, "IsClass");
        //Assert.AreEqual(typeof(OverflowException).BaseType, typeof(ArithmeticException), "BaseType");
        var d = new Bridge.OverflowException();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.OverflowException), "is OverflowException");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.Exception), "is Exception");

        //var interfaces = typeof(OverflowException).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 0, "Interfaces length");
    },
    defaultConstructorWorks: function () {
        var ex = new Bridge.OverflowException();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.OverflowException), "is OverflowException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "Arithmetic operation resulted in an overflow.");
    },
    constructorWithMessageWorks: function () {
        var ex = new Bridge.OverflowException("The message");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.OverflowException), "is OverflowException");
        Bridge.Test.Assert.areEqual$1(ex.getInnerException(), undefined, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    },
    constructorWithMessageAndInnerExceptionWorks: function () {
        var inner = new Bridge.Exception("a");
        var ex = new Bridge.OverflowException("The message", inner);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(ex, Object), Bridge.OverflowException), "is OverflowException");
        Bridge.Test.Assert.true$1(ex.getInnerException() === inner, "InnerException");
        Bridge.Test.Assert.areEqual(ex.getMessage(), "The message");
    }
});

Bridge.define('Bridge.ClientTest.ExceptionTests', {
    throwingAndCatchingExceptionsWorks: function () {
        try {
            throw new Bridge.ClientTest.ExceptionTests.E2("The message");
            Bridge.Test.Assert.fail$1("Should not get to statement after throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var e;
            if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E2)) {
                e = $e;
                Bridge.Test.Assert.areEqual(e.getMessage(), "The message");
                return;
            }
            else {
                throw $e;
            }
        }
        Bridge.Test.Assert.fail$1("Should not get to statement after catch");
    },
    exceptionOfWrongTypeIsNotCaught: function () {
        try {
            throw new Bridge.ClientTest.ExceptionTests.E1("The message");
            Bridge.Test.Assert.fail$1("Should not get to statement after throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var e;
            if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E2)) {
                Bridge.Test.Assert.fail$1("Should not catch E2");
            }
            else if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E1)) {
                e = $e;
                Bridge.Test.Assert.areEqual(e.getMessage(), "The message");
                return;
            }
            else {
                throw $e;
            }
        }
        Bridge.Test.Assert.fail$1("Should not get to statement after catch");
    },
    canCatchExceptionAsBaseType: function () {
        try {
            throw new Bridge.ClientTest.ExceptionTests.E2("The message");
            Bridge.Test.Assert.fail$1("Should not get to statement after throw");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            var e;
            if (Bridge.is($e, Bridge.ClientTest.ExceptionTests.E1)) {
                e = $e;
                Bridge.Test.Assert.areEqual(e.getMessage(), "The message");
                return;
            }
            else {
                throw $e;
            }
        }
        Bridge.Test.Assert.fail$1("Should not get to statement after catch");
    }
});

Bridge.define('Bridge.ClientTest.ExceptionTests.E1', {
    inherits: [Bridge.Exception],
    constructor: function (message) {
        Bridge.Exception.prototype.$constructor.call(this, message);

    }
});

Bridge.define('Bridge.ClientTest.ExceptionTests.E2', {
    inherits: [Bridge.ClientTest.ExceptionTests.E1],
    constructor: function (message) {
        Bridge.ClientTest.ExceptionTests.E1.prototype.$constructor.call(this, message);

    }
});

Bridge.define('Bridge.ClientTest.Globals', {
    statics: {
        setTimeout: function (action, milliseconds) {
            return 0;
        }
    }
});

Bridge.define('Bridge.ClientTest.MathTests', {
    assertAlmostEqual: function (d1, d2) {
        var diff = d2 - d1;
        if (diff < 0)
            diff = -diff;
        Bridge.Test.Assert.$true(diff < 1E-08);
    },
    constantsWork: function () {
        this.assertAlmostEqual(Math.E, 2.7182818284590451);
        this.assertAlmostEqual(Math.LN2, 0.69314718055994529);
        this.assertAlmostEqual(Math.LN10, 2.3025850929940459);
        this.assertAlmostEqual(Math.LOG2E, 1.4426950408889634);
        this.assertAlmostEqual(Math.LOG10E, 0.43429448190325182);
        this.assertAlmostEqual(Math.PI, 3.1415926535897931);
        this.assertAlmostEqual(Math.SQRT1_2, 0.70710678118654757);
        this.assertAlmostEqual(Math.SQRT2, 1.4142135623730952);
    },
    absOfDoubleWorks: function () {
        Bridge.Test.Assert.areEqual(Math.abs(-12.5), 12.5);
    },
    absOfIntWorks: function () {
        Bridge.Test.Assert.areEqual(Math.abs(-12), 12);
    },
    absOfLongWorks: function () {
        Bridge.Test.Assert.areEqual(Math.abs(-12), 12);
    },
    absOfSbyteWorks: function () {
        Bridge.Test.Assert.areEqual(Math.abs(Bridge.cast(-15, Bridge.Int)), Bridge.cast(15, Bridge.Int));
    },
    absOfShortWorks: function () {
        Bridge.Test.Assert.areEqual(Math.abs(Bridge.cast(-15, Bridge.Int)), Bridge.cast(15, Bridge.Int));
    },
    absOfFloatWorks: function () {
        Bridge.Test.Assert.areEqual(Math.abs(-17.5), 17.5);
    },
    absOfDecimalWorks: function () {
        // TODO Math.Abs(decimal)
        Bridge.Test.Assert.areEqual(Math.abs(-10.0), 10.0);
    },
    acosWorks: function () {
        this.assertAlmostEqual(Math.acos(0.5), 1.0471975511965979);
    },
    asinWorks: function () {
        this.assertAlmostEqual(Math.asin(0.5), 0.52359877559829893);
    },
    atanWorks: function () {
        this.assertAlmostEqual(Math.atan(0.5), 0.46364760900080609);
    },
    atan2Works: function () {
        this.assertAlmostEqual(Math.atan2(1, 2), 0.46364760900080609);
    },
    cosWorks: function () {
        this.assertAlmostEqual(Math.cos(0.5), 0.87758256189037276);
    },
    expWorks: function () {
        this.assertAlmostEqual(Math.exp(0.5), 1.6487212707001282);
    },
    floorOfDoubleWorks: function () {
        Bridge.Test.Assert.areEqual(Math.floor(3.6), 3.0);
        Bridge.Test.Assert.areEqual(Math.floor(-3.6), -4.0);
    },
    floorOfDecimalWorks: function () {
        // TODO Math.Floor(decimal)
        Bridge.Test.Assert.areEqual(Math.floor(3.6), 3.0);
        Bridge.Test.Assert.areEqual(Math.floor(-3.6), -4.0);
    },
    logWorks: function () {
        this.assertAlmostEqual(Math.log(0.5), -0.69314718055994529);
    },
    maxOfByteWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), 3.0);
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), 5.0);
    },
    maxOfDecimalWorks: function () {
        // TODO Max(decimal)
        Bridge.Test.Assert.areEqual(Math.max(-14.5, 3.0), 3.0);
        Bridge.Test.Assert.areEqual(Math.max(5.4, 3.0), 5.4);
    },
    maxOfDoubleWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(1.0, 3.0), 3.0);
        Bridge.Test.Assert.areEqual(Math.max(4.0, 3.0), 4.0);
    },
    maxOfShortWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(4, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(4, Bridge.Int));
    },
    maxOfIntWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(1, 3), 3);
        Bridge.Test.Assert.areEqual(Math.max(4, 3), 4);
    },
    maxOfLongWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(1, 3), 3);
        Bridge.Test.Assert.areEqual(Math.max(4, 3), 4);
    },
    maxOfSByteWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(-1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(5, Bridge.Int));
    },
    maxOfFloatWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(-14.5, 3.0), 3.0);
        Bridge.Test.Assert.areEqual(Math.max(5.4, 3.0), 5.4);
    },
    maxOfUShortWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(5, Bridge.Int));
    },
    maxOfUIntWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(5, Bridge.Int));
    },
    maxOfULongWorks: function () {
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(100, Bridge.Int), Bridge.cast(300, Bridge.Int)), Bridge.cast(300, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.max(Bridge.cast(500, Bridge.Int), Bridge.cast(300, Bridge.Int)), Bridge.cast(500, Bridge.Int));
    },
    minOfByteWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), 1.0);
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), 3.0);
    },
    minOfDecimalWorks: function () {
        // TODO Min(decimal)
        Bridge.Test.Assert.areEqual(Math.min(-14.5, 3.0), -14.5);
        Bridge.Test.Assert.areEqual(Math.min(5.4, 3.0), 3.0);
    },
    minOfDoubleWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(1.0, 3.0), 1.0);
        Bridge.Test.Assert.areEqual(Math.min(4.0, 3.0), 3.0);
    },
    minOfShortWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(1, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(4, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
    },
    minOfIntWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(1, 3), 1);
        Bridge.Test.Assert.areEqual(Math.min(4, 3), 3);
    },
    minOfLongWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(1, 3), 1);
        Bridge.Test.Assert.areEqual(Math.min(4, 3), 3);
    },
    minOfSByteWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(-1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(-1, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
    },
    minOfFloatWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(-14.5, 3.0), -14.5);
        Bridge.Test.Assert.areEqual(Math.min(5.4, 3.0), 3.0);
    },
    minOfUShortWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(1, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
    },
    minOfUIntWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(1, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(1, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(5, Bridge.Int), Bridge.cast(3, Bridge.Int)), Bridge.cast(3, Bridge.Int));
    },
    minOfULongWorks: function () {
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(100, Bridge.Int), Bridge.cast(300, Bridge.Int)), Bridge.cast(100, Bridge.Int));
        Bridge.Test.Assert.areEqual(Math.min(Bridge.cast(500, Bridge.Int), Bridge.cast(300, Bridge.Int)), Bridge.cast(300, Bridge.Int));
    },
    powWorks: function () {
        this.assertAlmostEqual(Math.pow(3, 0.5), 1.7320508075688772);
    },
    randomWorks: function () {
        for (var i = 0; i < 5; i++) {
            var d = Math.random();
            Bridge.Test.Assert.$true(d >= 0);
            Bridge.Test.Assert.$true(d < 1);
        }
    },
    roundOfDoubleWorks: function () {
        Bridge.Test.Assert.areEqual(Math.round(3.432), 3.0);
        Bridge.Test.Assert.areEqual(Math.round(3.6), 4.0);
        Bridge.Test.Assert.areEqual(Math.round(3.5), 4.0);
        Bridge.Test.Assert.areEqual(Math.round(4.5), 5.0);
        Bridge.Test.Assert.areEqual(Math.round(-3.5), -3.0);
        Bridge.Test.Assert.areEqual(Math.round(-4.5), -4.0);
    },
    sinWorks: function () {
        this.assertAlmostEqual(Math.sin(0.5), 0.479425538604203);
    },
    sqrtWorks: function () {
        this.assertAlmostEqual(Math.sqrt(3), 1.7320508075688772);
    },
    tanWorks: function () {
        this.assertAlmostEqual(Math.tan(0.5), 0.54630248984379048);
    }
});

Bridge.define('Bridge.ClientTest.NullableTests', {
    isOfType: function (T) {
        return Bridge.fn.bind(this, function (value) {
            return Bridge.is(value, T);
        });
    },
    typePropertiesAreCorrect: function () {
        var a = 3, b = null;
        //Assert.AreEqual(typeof(Nullable<>).FullName, "ss.Nullable$1", "Open FullName");
        //Assert.AreEqual(typeof(int?).FullName, "ss.Nullable$1[[ss.Int32, Bridge]]", "Instantiated FullName");
        //Assert.True(typeof(Nullable<>).IsGenericTypeDefinition, "IsGenericTypeDefinition");
        //Assert.AreEqual(typeof(int?).GetGenericTypeDefinition(), typeof(Nullable<>), "GetGenericTypeDefinition");
        //Assert.True(typeof(int?).GetGenericArguments()[0] == typeof(int), "GenericArguments");
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(a, Object), Bridge.Int), "is int? #1");
        Bridge.Test.Assert.false$1(Bridge.is(Bridge.cast(b, Object), Bridge.Int), "is int? #2");

        Bridge.Test.Assert.true$1(this.isOfType(Bridge.Int)(3), "IsOfType #1");
        Bridge.Test.Assert.false$1(this.isOfType(Bridge.Int)(3.14), "IsOfType #2");
        Bridge.Test.Assert.true$1(this.isOfType(Bridge.TimeSpan)(new Bridge.TimeSpan(1)), "IsOfType #3");
        Bridge.Test.Assert.false$1(this.isOfType(Bridge.TimeSpan)(3.14), "IsOfType #4");
    },
    convertingToNullableWorks: function () {
        var i = 3;
        var i1 = i;
        var i2 = i;
        Bridge.Test.Assert.areEqual(i1, 3);
        Bridge.Test.Assert.areEqual(i2, 3);
    },
    hasValueWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.$true(Bridge.Nullable.hasValue(a));
        Bridge.Test.Assert.$false(Bridge.Nullable.hasValue(b));
    },
    boxingWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.$true(Bridge.cast(a, Object) !== null);
        Bridge.Test.Assert.$false(Bridge.cast(b, Object) !== null);
    },
    unboxingWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.areEqual(Bridge.Nullable.getValue(a), 3);
        try {
            var x = Bridge.Nullable.getValue(b);
            Bridge.Test.Assert.fail$1("Unboxing null should have thrown an exception");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            if (Bridge.is($e, Bridge.InvalidOperationException)) {
            }
            else {
                throw $e;
            }
        }
    },
    valueWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.areEqual(Bridge.Nullable.getValue(a), 3);
        try {
            var x = Bridge.Nullable.getValue(b);
            Bridge.Test.Assert.fail$1("null.Value should have thrown an exception");
        }
        catch ($e) {
            $e = Bridge.Exception.create($e);
            if (Bridge.is($e, Bridge.InvalidOperationException)) {
            }
            else {
                throw $e;
            }
        }
    },
    unboxingValueOfWrongTypeThrowsAnException: function () {
        Bridge.Test.Assert.$throws(function () {
            var o = "x";
            var x = Bridge.cast(o, Bridge.Int);
        });
    },
    getValueOrDefaultWithArgWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.areEqual(Bridge.Nullable.getValueOrDefault(a, 1), 3);
        Bridge.Test.Assert.areEqual(Bridge.Nullable.getValueOrDefault(b, 1), 1);
    },
    liftedEqualityWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.eq(a, b), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.eq(a, c), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.eq(a, d), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.eq(d, e), true);
    },
    liftedInequalityWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.neq(a, b), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.neq(a, c), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.neq(a, d), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.neq(d, e), false);
    },
    liftedLessThanWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lt(a, b), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lt(a, c), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lt(a, d), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lt(d, e), false);
    },
    liftedGreaterThanWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gt(a, b), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gt(c, a), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gt(a, d), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gt(d, e), false);
    },
    liftedLessThanOrEqualWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lte(a, b), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lte(c, a), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lte(a, d), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.lte(d, e), false);
    },
    liftedGreaterThanOrEqualWorks: function () {
        var a = 1, b = 1, c = 2, d = null, e = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gte(a, b), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gte(a, c), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gte(a, d), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.gte(d, e), false);
    },
    liftedSubtractionWorks: function () {
        var a = 2, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sub(a, b), -1);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sub(a, c), null);
    },
    liftedAdditionWorks: function () {
        var a = 2, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.add(a, b), 5);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.add(a, c), null);
    },
    liftedModWorks: function () {
        var a = 14, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.mod(a, b), 2);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.mod(a, c), null);
    },
    liftedFloatingPointDivisionWorks: function () {
        var a = 15, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.div(a, b), 5);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.div(a, c), null);
    },
    liftedIntegerDivisionWorks: function () {
        var a = 16, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Int.div(a, b), 5);
        Bridge.Test.Assert.areStrictEqual(Bridge.Int.div(a, c), null);
    },
    liftedMultiplicationWorks: function () {
        var a = 2, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.mul(a, b), 6);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.mul(a, c), null);
    },
    liftedBitwiseAndWorks: function () {
        var a = 6, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.band(a, b), 2);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.band(a, c), null);
    },
    liftedBitwiseOrWorks: function () {
        var a = 6, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.bor(a, b), 7);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.bor(a, c), null);
    },
    liftedBitwiseXorWorks: function () {
        var a = 6, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.xor(a, b), 5);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.xor(a, c), null);
    },
    liftedLeftShiftWorks: function () {
        var a = 6, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sl(a, b), 48);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sl(a, c), null);
    },
    liftedSignedRightShiftWorks: function () {
        var a = 48, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sr(a, b), 6);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sr(a, c), null);
    },
    liftedUnsignedRightShiftWorks: function () {
        var a = -48, b = 3, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sr(a, b), -6);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.sr(a, c), null);
    },
    liftedBooleanAndWorks: function () {
        var a = true, b = true, c = false, d = false, e = null, f = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(a, b), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(a, c), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(a, e), null);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(c, a), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(c, d), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(c, e), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(e, a), null);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(e, c), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.and(e, f), null);
    },
    liftedBooleanOrWorks: function () {
        var a = true, b = true, c = false, d = false, e = null, f = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(a, b), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(a, c), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(a, e), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(c, a), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(c, d), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(c, e), null);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(e, a), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(e, c), null);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.or(e, f), null);
    },
    liftedBooleanNotWorks: function () {
        var a = true, b = false, c = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.not(a), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.not(b), true);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.not(c), null);
    },
    liftedNegationWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.neg(a), -3);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.neg(b), null);
    },
    liftedUnaryPlusWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.pos(a), 3);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.pos(b), null);
    },
    liftedOnesComplementWorks: function () {
        var a = 3, b = null;
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.bnot(a), -4);
        Bridge.Test.Assert.areStrictEqual(Bridge.Nullable.bnot(b), null);
    },
    coalesceWorks: function () {
        var v1 = null, v2 = 1, v3 = 0, v4 = 2;
        var s1 = null, s2 = "x";
        Bridge.Test.Assert.areStrictEqual(Bridge.coalesce(v1, v1), null);
        Bridge.Test.Assert.areStrictEqual(Bridge.coalesce(v1, v2), 1);
        Bridge.Test.Assert.areStrictEqual(Bridge.coalesce(v3, v4), 0);
        Bridge.Test.Assert.areStrictEqual(Bridge.coalesce(s1, s1), null);
        Bridge.Test.Assert.areStrictEqual(Bridge.coalesce(s1, s2), "x");
    }
});

Bridge.define('Bridge.ClientTest.NumberFormatInfoTests', {
    typePropertiesAreCorrect: function () {
        var format = Bridge.NumberFormatInfo.invariantInfo;
        //Assert.AreEqual(typeof(NumberFormatInfo).FullName, "ss.NumberFormatInfo");
        //Assert.True(typeof(NumberFormatInfo).IsClass);
        Bridge.Test.Assert.$true(Bridge.is(format, Bridge.NumberFormatInfo));
        //Assert.AreEqual(typeof(NumberFormatInfo).GetInterfaces(), new[] { typeof(IFormatProvider) });
    },
    getFormatWorks: function () {
        var format = Bridge.NumberFormatInfo.invariantInfo;
        Bridge.Test.Assert.areEqual(format.getFormat(Bridge.Int), null);
        Bridge.Test.Assert.areEqual(format.getFormat(Bridge.NumberFormatInfo), format);
    },
    invariantWorks: function () {
        var format = Bridge.NumberFormatInfo.invariantInfo;
        Bridge.Test.Assert.areEqual(format.nanSymbol, "NaN");
        Bridge.Test.Assert.areEqual(format.negativeSign, "-");
        Bridge.Test.Assert.areEqual(format.positiveSign, "+");
        Bridge.Test.Assert.areEqual(format.negativeInfinitySymbol, "-Infinity");
        Bridge.Test.Assert.areEqual(format.positiveInfinitySymbol, "Infinity");

        Bridge.Test.Assert.areEqual(format.percentSymbol, "%");
        Bridge.Test.Assert.areEqual(format.percentGroupSizes, [3]);
        Bridge.Test.Assert.areEqual(format.percentDecimalDigits, 2);
        Bridge.Test.Assert.areEqual(format.percentDecimalSeparator, ".");
        Bridge.Test.Assert.areEqual(format.percentGroupSeparator, ",");
        Bridge.Test.Assert.areEqual(format.percentPositivePattern, 0);
        Bridge.Test.Assert.areEqual(format.percentNegativePattern, 0);

        Bridge.Test.Assert.areEqual(format.currencySymbol, "$");
        Bridge.Test.Assert.areEqual(format.currencyGroupSizes, [3]);
        Bridge.Test.Assert.areEqual(format.currencyDecimalDigits, 2);
        Bridge.Test.Assert.areEqual(format.currencyDecimalSeparator, ".");
        Bridge.Test.Assert.areEqual(format.currencyGroupSeparator, ",");
        Bridge.Test.Assert.areEqual(format.currencyNegativePattern, 0);
        Bridge.Test.Assert.areEqual(format.currencyPositivePattern, 0);

        Bridge.Test.Assert.areEqual(format.numberGroupSizes, [3]);
        Bridge.Test.Assert.areEqual(format.numberDecimalDigits, 2);
        Bridge.Test.Assert.areEqual(format.numberDecimalSeparator, ".");
        Bridge.Test.Assert.areEqual(format.numberGroupSeparator, ",");
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests', {
    accessorsCanBeInvokedInstance: function () {
        var c = new Bridge.ClientTest.PropertyAccessorTests.C1();

        c.setP1(42);
        Bridge.Test.Assert.areEqual$1(c.f1, 41, "F1 value");

        c.f1 = 15;
        Bridge.Test.Assert.areEqual$1(c.getP1(), 16, "P1 value");

        c.f2 = 17;
        Bridge.Test.Assert.areEqual$1(c.getP2(), 18, "P2 value");

        c.setP3(12);
        Bridge.Test.Assert.areEqual$1(c.f3, 11, "F3 value");
    },
    accessorsCanBeInvokedStatic: function () {
        Bridge.ClientTest.PropertyAccessorTests.C1.setPS1(42);
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C1.fS1, 41, "FS1 value");

        Bridge.ClientTest.PropertyAccessorTests.C1.fS1 = 15;
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C1.getPS1(), 16, "PS1 value");

        Bridge.ClientTest.PropertyAccessorTests.C1.fS2 = 17;
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C1.getPS2(), 18, "PS2 value");

        Bridge.ClientTest.PropertyAccessorTests.C1.setPS3(12);
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C1.fS3, 11, "FS3 value");
    },
    accessorsCanBeInvokedGeneric: function () {
        var c = new Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int)();

        c.setP1(42);
        Bridge.Test.Assert.areEqual$1(c.f1, 41, "F1 value");

        c.f1 = 15;
        Bridge.Test.Assert.areEqual$1(c.getP1(), 16, "P1 value");

        c.f2 = 17;
        Bridge.Test.Assert.areEqual$1(c.getP2(), 18, "P2 value");

        c.setP3(12);
        Bridge.Test.Assert.areEqual$1(c.f3, 11, "F3 value");
    },
    accessorsCanBeInvokedGenericStatic: function () {
        Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).setPS1(42);
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).fS1, 41, "FS1 value");

        Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).fS1 = 15;
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).getPS1(), 16, "PS1 value");

        Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).fS2 = 17;
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).getPS2(), 18, "PS2 value");

        Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).setPS3(12);
        Bridge.Test.Assert.areEqual$1(Bridge.ClientTest.PropertyAccessorTests.C2$1(Bridge.Int).fS3, 11, "FS3 value");
    },
    baseAccessorsCanBeInvoked: function () {
        var d = new Bridge.ClientTest.PropertyAccessorTests.D3();

        d.setP1(42);
        Bridge.Test.Assert.areEqual$1(d.f1, 41, "F1 value");

        d.f1 = 15;
        Bridge.Test.Assert.areEqual$1(d.getP1(), 16, "P1 value");

        d.f2 = 17;
        Bridge.Test.Assert.areEqual$1(d.getP2(), 18, "P2 value");

        d.setP3(12);
        Bridge.Test.Assert.areEqual$1(d.f3, 11, "F3 value");
    },
    baseAccessorsCanBeInvokedGeneric: function () {
        var d = new Bridge.ClientTest.PropertyAccessorTests.D4$1(Bridge.Int)();

        d.setP1(42);
        Bridge.Test.Assert.areEqual$1(d.f1, 41, "F1 value");

        d.f1 = 15;
        Bridge.Test.Assert.areEqual$1(d.getP1(), 16, "P1 value");

        d.f2 = 17;
        Bridge.Test.Assert.areEqual$1(d.getP2(), 18, "P2 value");

        d.setP3(12);
        Bridge.Test.Assert.areEqual$1(d.f3, 11, "F3 value");
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.B3', {
    f1: 0,
    f2: 0,
    f3: 0,
    getP1: function () {
        return this.f1;
    },
    setP1: function (value) {
        this.f1 = value;
    },
    getP2: function () {
        return this.f2;
    },
    setP3: function (value) {
        this.f3 = value;
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.D3', {
    inherits: [Bridge.ClientTest.PropertyAccessorTests.B3],
    getP1: function () {
        return Bridge.ClientTest.PropertyAccessorTests.B3.prototype.getP1.call(this) + 1;
    },
    setP1: function (value) {
        Bridge.ClientTest.PropertyAccessorTests.B3.prototype.setP1.call(this, value - 1);
    },
    getP2: function () {
        return Bridge.ClientTest.PropertyAccessorTests.B3.prototype.getP2.call(this) + 1;
    },
    setP3: function (value) {
        Bridge.ClientTest.PropertyAccessorTests.B3.prototype.setP3.call(this, value - 1);
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.B4$1', function (T) { return {
    f1: null,
    f2: null,
    f3: null,
    getP1: function () {
        return this.f1;
    },
    setP1: function (value) {
        this.f1 = value;
    },
    getP2: function () {
        return this.f2;
    },
    setP3: function (value) {
        this.f3 = value;
    }
}; });

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.D4$1', function (T) { return {
    inherits: [Bridge.ClientTest.PropertyAccessorTests.B4$1(T)],
    getP1: function () {
        return Bridge.ClientTest.PropertyAccessorTests.B4$1(T).prototype.getP1.call(this) + 1;
    },
    setP1: function (value) {
        Bridge.ClientTest.PropertyAccessorTests.B4$1(T).prototype.setP1.call(this, value - 1);
    },
    getP2: function () {
        return Bridge.ClientTest.PropertyAccessorTests.B4$1(T).prototype.getP2.call(this) + 1;
    },
    setP3: function (value) {
        Bridge.ClientTest.PropertyAccessorTests.B4$1(T).prototype.setP3.call(this, value - 1);
    }
}; });

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.C1', {
    statics: {
        fS1: 0,
        fS2: 0,
        fS3: 0,
        getPS1: function () {
            return Bridge.ClientTest.PropertyAccessorTests.C1.fS1 + 1;
        },
        setPS1: function (value) {
            Bridge.ClientTest.PropertyAccessorTests.C1.fS1 = value - 1;
        },
        getPS2: function () {
            return Bridge.ClientTest.PropertyAccessorTests.C1.fS2 + 1;
        },
        setPS3: function (value) {
            Bridge.ClientTest.PropertyAccessorTests.C1.fS3 = value - 1;
        }
    },
    f1: 0,
    f2: 0,
    f3: 0,
    getP1: function () {
        return this.f1 + 1;
    },
    setP1: function (value) {
        this.f1 = value - 1;
    },
    getP2: function () {
        return this.f2 + 1;
    },
    setP3: function (value) {
        this.f3 = value - 1;
    }
});

Bridge.define('Bridge.ClientTest.PropertyAccessorTests.C2$1', function (T) { return {
    statics: {
        fS1: null,
        fS2: null,
        fS3: null,
        getPS1: function () {
            return Bridge.ClientTest.PropertyAccessorTests.C2$1(T).fS1 + 1;
        },
        setPS1: function (value) {
            Bridge.ClientTest.PropertyAccessorTests.C2$1(T).fS1 = value - 1;
        },
        getPS2: function () {
            return Bridge.ClientTest.PropertyAccessorTests.C2$1(T).fS2 + 1;
        },
        setPS3: function (value) {
            Bridge.ClientTest.PropertyAccessorTests.C2$1(T).fS3 = value - 1;
        }
    },
    f1: null,
    f2: null,
    f3: null,
    getP1: function () {
        return this.f1 + 1;
    },
    setP1: function (value) {
        this.f1 = value - 1;
    },
    getP2: function () {
        return this.f2 + 1;
    },
    setP3: function (value) {
        this.f3 = value - 1;
    }
}; });

Bridge.define('Bridge.ClientTest.SimpleTypes.ByteTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(Bridge.cast(0, Bridge.Int), Object), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(Bridge.cast(0.5, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(-1, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(256, Object), Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        // Assert.False(typeof(byte).IsClass);
        //Assert.True(typeof(IComparable<byte>).IsAssignableFrom(typeof(byte)));
        //Assert.True(typeof(IEquatable<byte>).IsAssignableFrom(typeof(byte)));
        //Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(byte)));
        var b = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(b, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(b, Bridge.IComparable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(b, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(b, Bridge.IFormattable));

        //var interfaces = typeof(byte).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 3);
        //Assert.True(interfaces.Contains(typeof(IComparable<byte>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<byte>)));
        //Assert.True(interfaces.Contains(typeof(IFormattable)));
    },
    castsWork: function () {
        var i1 = -1, i2 = 0, i3 = 234, i4 = 255, i5 = 256;
        var ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 255, ni5 = 256, ni6 = null;

        // TODO unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -1, "-1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 255, "255 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 256, "256 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni1, Bridge.Int)), -1, "nullable -1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), 0, "nullable 0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 234, "nullable 234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 255, "nullable 255 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni5, Bridge.Int)), 256, "nullable 256 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null unchecked");
        }

        //checked
        {
            //Assert.Throws<OverflowException>(() => { var x = (byte)i1; }, "-1 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 255, "256 checked");
            //Assert.Throws<OverflowException>(() => { var x = (byte)i5; }, "256 checked");

            //Assert.Throws<OverflowException>(() => { var x = (byte?)ni1; }, "nullable -1 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), 0, "nullable 0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 234, "nullable 234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 255, "nullable 255 checked");
            //Assert.Throws<OverflowException>(() => { var x = (byte?)ni5; }, "nullable 256 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(0, 0);
        Bridge.Test.Assert.areEqual(255, 255);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(18, Bridge.Int)), "x"), "12");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(18, Bridge.Int)), "x"), "12");
        //Assert.AreEqual(((IFormattable)((byte)0x12)).ToString("x"), "12");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("234", numberResult, 0, 255);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 234);

        result = Bridge.Int.tryParseInt("", numberResult, 0, 255);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, 0, 255);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, 0, 255);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("54768", numberResult, 0, 255);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 54768);

        result = Bridge.Int.tryParseInt("-1", numberResult, 0, 255);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -1);

        result = Bridge.Int.tryParseInt("2.5", numberResult, 0, 255);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(18, Bridge.Int)).toString(16), "12");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.CharTests', {
    typePropertiesAreInt32: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(0, Object), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(Bridge.cast(0.5, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(-1, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(65536, Object), Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        //Assert.False(typeof(char).IsClass);
        //Assert.True(typeof(IComparable<byte>).IsAssignableFrom(typeof(char)));
        //Assert.True(typeof(IEquatable<byte>).IsAssignableFrom(typeof(char)));
        //Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(char)));

        //var interfaces = typeof(char).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 3);
        //Assert.True(interfaces.Contains(typeof(IComparable<char>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<char>)));
        //Assert.True(interfaces.Contains(typeof(IFormattable)));
    },
    castsWork: function () {
        var i1 = -1, i2 = 0, i3 = 234, i4 = 65535, i5 = 65536;
        var ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 65535, ni5 = 65536, ni6 = null;

        // TODO unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i1, Bridge.Int), Bridge.Int), -1, "-1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i2, Bridge.Int), Bridge.Int), 0, "0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i3, Bridge.Int), Bridge.Int), 234, "234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i4, Bridge.Int), Bridge.Int), 65535, "65535 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i5, Bridge.Int), Bridge.Int), 65536, "65536 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(Bridge.cast(ni1, Bridge.Int)), Bridge.Int), -1, "nullable -1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), Bridge.Int), 0, "nullable 0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), Bridge.Int), 234, "nullable 234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), Bridge.Int), 65535, "nullable 65535 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(Bridge.cast(ni5, Bridge.Int)), Bridge.Int), 65536, "nullable 65536 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), Bridge.Int), null, "null unchecked");
        }

        //checked
        {
            //Assert.Throws<OverflowException>(() => { var x = (char)i1; }, "-1 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i2, Bridge.Int), Bridge.Int), 0, "0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i3, Bridge.Int), Bridge.Int), 234, "234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.cast(i4, Bridge.Int), Bridge.Int), 65535, "65535 checked");
            //Assert.Throws<OverflowException>(() => { var x = (char)i5; }, "65536 checked");

            //Assert.Throws<OverflowException>(() => { var x = (char?)ni1; }, "nullable -1 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), Bridge.Int), 0, "nullable 0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), Bridge.Int), 234, "nullable 234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), Bridge.Int), 65535, "nullable 65535 checked");
            //Assert.Throws<OverflowException>(() => { var x = (char?)ni5; }, "nullable 65536 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), Bridge.Int), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.cast(this.getDefaultValue(Bridge.Int)(), Bridge.Int), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(Bridge.cast(0, Bridge.Int), 0);
        Bridge.Test.Assert.areEqual(Bridge.cast(65535, Bridge.Int), 65535);
    },
    charComparisonWorks: function () {
        var a = 97, a2 = 97, b = 98;
        Bridge.Test.Assert.$true(a === a2);
        Bridge.Test.Assert.$false(a === b);
        Bridge.Test.Assert.$false(a !== a2);
        Bridge.Test.Assert.$true(a !== b);
        Bridge.Test.Assert.$false(a < a2);
        Bridge.Test.Assert.$true(a < b);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.cast("a".charCodeAt(0), Bridge.Int), Bridge.cast(97, Bridge.Int));
        //Assert.Throws<ArgumentNullException>(() => char.Parse(null));
        //Assert.Throws<FormatException>(() => char.Parse(""));
        //Assert.Throws<FormatException>(() => char.Parse("ab"));
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format(35, "x4"), "0023");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format(35, "x4"), "0023");
    },
    toStringWorks: function () {
        Bridge.Test.Assert.areEqual(String.fromCharCode(65), "A");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode(48), Bridge.getHashCode(48));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode(49), Bridge.getHashCode(49));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode(48), Bridge.getHashCode(49));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals(48, Bridge.cast(48, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals(49, Bridge.cast(48, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equals(48, Bridge.cast(49, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equals(49, Bridge.cast(49, Bridge.Int)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT(48, 48));
        Bridge.Test.Assert.$false(Bridge.equalsT(49, 48));
        Bridge.Test.Assert.$false(Bridge.equalsT(48, 49));
        Bridge.Test.Assert.$true(Bridge.equalsT(49, 49));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare(49, 48) > 0);
        Bridge.Test.Assert.$true(Bridge.compare(48, 49) < 0);
        Bridge.Test.Assert.$true(Bridge.compare(48, 48) === 0);
        Bridge.Test.Assert.$true(Bridge.compare(49, 49) === 0);
    },
    isLowerWorks: function () {
        Bridge.Test.Assert.true$1(Bridge.isLower(97), "#1");
        Bridge.Test.Assert.false$1(Bridge.isLower(65), "#2");
        Bridge.Test.Assert.false$1(Bridge.isLower(51), "#3");
    },
    isUpperWorks: function () {
        Bridge.Test.Assert.true$1(Bridge.isUpper(65), "#1");
        Bridge.Test.Assert.false$1(Bridge.isUpper(97), "#2");
        Bridge.Test.Assert.false$1(Bridge.isUpper(51), "#3");
    },
    toLowerWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.cast(String.fromCharCode(65).toLowerCase().charCodeAt(0), Bridge.Int), Bridge.cast(97, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.cast(String.fromCharCode(97).toLowerCase().charCodeAt(0), Bridge.Int), Bridge.cast(97, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.cast(String.fromCharCode(51).toLowerCase().charCodeAt(0), Bridge.Int), Bridge.cast(51, Bridge.Int));
    },
    toUpperWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.cast(String.fromCharCode(65).toUpperCase().charCodeAt(0), Bridge.Int), Bridge.cast(65, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.cast(String.fromCharCode(97).toUpperCase().charCodeAt(0), Bridge.Int), Bridge.cast(65, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.cast(String.fromCharCode(51).toUpperCase().charCodeAt(0), Bridge.Int), Bridge.cast(51, Bridge.Int));
    },
    isDigitWorks: function () {
        Bridge.Test.Assert.true$1(Bridge.Char.isDigit(48), "#1");
        Bridge.Test.Assert.false$1(Bridge.Char.isDigit(46), "#2");
        Bridge.Test.Assert.false$1(Bridge.Char.isDigit(65), "#3");
    },
    isWhiteSpaceWorks: function () {
        Bridge.Test.Assert.true$1(Bridge.Char.isWhiteSpace(String.fromCharCode(32)), "#1");
        Bridge.Test.Assert.true$1(Bridge.Char.isWhiteSpace(String.fromCharCode(10)), "#2");
        Bridge.Test.Assert.false$1(Bridge.Char.isWhiteSpace(String.fromCharCode(65)), "#3");
    },
    isDigitWithStringAndIndexWorks: function () {
        Bridge.Test.Assert.true$1(Bridge.Char.isDigit("abc0def".charCodeAt(3)), "#1");
        Bridge.Test.Assert.true$1(Bridge.Char.isDigit("1".charCodeAt(0)), "#2");
        Bridge.Test.Assert.true$1(Bridge.Char.isDigit("abcdef5".charCodeAt(6)), "#3");
        Bridge.Test.Assert.true$1(Bridge.Char.isDigit("9abcdef".charCodeAt(0)), "#4");
        Bridge.Test.Assert.false$1(Bridge.Char.isDigit(".012345".charCodeAt(0)), "#5");
        Bridge.Test.Assert.false$1(Bridge.Char.isDigit("012345.".charCodeAt(6)), "#6");
        Bridge.Test.Assert.false$1(Bridge.Char.isDigit("012.345".charCodeAt(3)), "#7");
    },
    isWhiteSpaceWithStringAndIndexWorks: function () {
        Bridge.Test.Assert.true$1(Bridge.Char.isWhiteSpace("abc def".charAt(3)), "#1");
        Bridge.Test.Assert.true$1(Bridge.Char.isWhiteSpace("\t".charAt(0)), "#2");
        Bridge.Test.Assert.true$1(Bridge.Char.isWhiteSpace("abcdef\r".charAt(6)), "#3");
        Bridge.Test.Assert.true$1(Bridge.Char.isWhiteSpace("\nabcdef".charAt(0)), "#4");
        Bridge.Test.Assert.false$1(Bridge.Char.isWhiteSpace(".\r\n     ".charAt(0)), "#5");
        Bridge.Test.Assert.false$1(Bridge.Char.isWhiteSpace("\r\n    .".charAt(6)), "#6");
        Bridge.Test.Assert.false$1(Bridge.Char.isWhiteSpace("\r  .\n  ".charAt(3)), "#7");
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.DecimalTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(Bridge.cast(0.5, Number), Object), Number));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Number), "Number");
        //Assert.False(typeof(decimal).IsClass);
        //Assert.True(typeof(IComparable<decimal>).IsAssignableFrom(typeof(decimal)));
        //Assert.True(typeof(IEquatable<decimal>).IsAssignableFrom(typeof(decimal)));
        //Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(decimal)));
        var d = Bridge.cast(0, Number);
        Bridge.Test.Assert.$true(Bridge.is(d, Number));
        //Assert.True(d is IComparable<decimal>);
        //Assert.True(d is IEquatable<decimal>);
        Bridge.Test.Assert.$true(Bridge.is(d, Bridge.IFormattable));

        //var interfaces = typeof(decimal).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 3);
        //Assert.True(interfaces.Contains(typeof(IComparable<decimal>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<decimal>)));
        //Assert.True(interfaces.Contains(typeof(IFormattable)));
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Number)(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(1.0, 1);
        Bridge.Test.Assert.areEqual(0.0, 0);
        Bridge.Test.Assert.areEqual(-1.0, -1);
    },
    convertingConstructorsWork: function () {
        Bridge.Test.Assert.areEqual(Bridge.cast(0.5, Number), 0.5);
        Bridge.Test.Assert.areEqual(Bridge.cast(1.5, Number), 1.5);
        Bridge.Test.Assert.areEqual(Bridge.cast(2, Bridge.Int), 2);
        Bridge.Test.Assert.areEqual(Bridge.cast(3, Bridge.Int), 3);
        Bridge.Test.Assert.areEqual(Bridge.cast(4, Bridge.Int), 4);
        Bridge.Test.Assert.areEqual(Bridge.cast(5, Bridge.Int), 5);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format(291.0, "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format(291.0, "x"), "123");
        //Assert.AreEqual(((IFormattable)291m).ToString("x"), "123");
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual(123.0.toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual(291.0.toString(10), "291");
        Bridge.Test.Assert.areEqual(291.0.toString(16), "123");
    },
    toExponentialWorks: function () {
        Bridge.Test.Assert.areEqual(123.0.toExponential(), "1.23e+2");
    },
    toExponentialWithFractionalDigitsWorks: function () {
        Bridge.Test.Assert.areEqual(123.0.toExponential(1), "1.2e+2");
    },
    toFixed: function () {
        Bridge.Test.Assert.areEqual(123.0.toFixed(), "123");
    },
    toFixedWithFractionalDigitsWorks: function () {
        Bridge.Test.Assert.areEqual(123.0.toFixed(1), "123.0");
    },
    toPrecisionWorks: function () {
        Bridge.Test.Assert.areEqual(12345.0.toPrecision(), "12345");
    },
    toPrecisionWithPrecisionWorks: function () {
        Bridge.Test.Assert.areEqual(12345.0.toPrecision(2), "1.2e+4");
    },
    conversionsToDecimalWork: function () {
        var x = 0;
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.cast((x + 1), Bridge.Int), Number), 1.0);
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.cast((x + 2), Bridge.Int), Number), 2.0);
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.cast((x + 3), Bridge.Int), Number), 3.0);
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.cast((x + 4), Bridge.Int), Number), 4.0);
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.cast((x + 5), Bridge.Int), Number), 5.0);
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.cast((x + 6), Bridge.Int), Number), 6.0);
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.cast((x + 7), Bridge.Int), Number), 7.0);
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.cast((x + 8), Bridge.Int), Number), 8.0);
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.cast((x + 9), Bridge.Int), Number), 9.0);
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.cast((x + 10.5), Number), Number), 10.5);
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.cast((x + 11.5), Number), Number), 11.5);
    },
    conversionsFromDecimalWork: function () {
        var x = 0;
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(Bridge.cast((x + 1), Number)), 1);
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(Bridge.cast((x + 2), Number)), 2);
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(Bridge.cast((x + 3), Number)), 3);
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(Bridge.cast((x + 4), Number)), 4);
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.Int.trunc(Bridge.cast((x + 5), Number)), Bridge.Int), 5);
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(Bridge.cast((x + 6), Number)), 6);
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(Bridge.cast((x + 7), Number)), 7);
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(Bridge.cast((x + 8), Number)), 8);
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(Bridge.cast((x + 9), Number)), 9);
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.cast((x + 10.5), Number), Number), 10.5);
        Bridge.Test.Assert.areEqual(Bridge.cast(Bridge.cast((x + 11.5), Number), Number), 11.5);
    },
    operatorsWork: function () {
        var x = 3;
        Bridge.Test.Assert.areEqual(x, 3);
        Bridge.Test.Assert.areEqual(-x, -3);
        Bridge.Test.Assert.areEqual(x + 4.0, 7);
        Bridge.Test.Assert.areEqual(x - 2.0, 1);
        Bridge.Test.Assert.areEqual(x++, 3);
        Bridge.Test.Assert.areEqual(++x, 5);
        Bridge.Test.Assert.areEqual(x--, 5);
        Bridge.Test.Assert.areEqual(--x, 3);
        Bridge.Test.Assert.areEqual(x * 3.0, 9);
        Bridge.Test.Assert.areEqual(x / 2.0, 1.5);
        Bridge.Test.Assert.areEqual(14.0 % x, 2);
        Bridge.Test.Assert.$true(x === 3.0);
        Bridge.Test.Assert.$false(x === 4.0);
        Bridge.Test.Assert.$false(x !== 3.0);
        Bridge.Test.Assert.$true(x !== 4.0);
        Bridge.Test.Assert.$true(x > 1.0);
        Bridge.Test.Assert.$false(x > 3.0);
        Bridge.Test.Assert.$true(x >= 3.0);
        Bridge.Test.Assert.$false(x >= 4.0);
        Bridge.Test.Assert.$true(x < 4.0);
        Bridge.Test.Assert.$false(x < 3.0);
        Bridge.Test.Assert.$true(x <= 3.0);
        Bridge.Test.Assert.$false(x <= 2.0);
    },
    addWorks: function () {
        Bridge.Test.Assert.areEqual(3.0 + 4.0, 7.0);
    },
    ceilingWorks: function () {
        Bridge.Test.Assert.areEqual(Math.ceil(3.4), 4);
    },
    divideWorks: function () {
        Bridge.Test.Assert.areEqual(3.0 / 4.0, 0.75);
    },
    floorWorks: function () {
        Bridge.Test.Assert.areEqual(Math.floor(3.2), 3);
    },
    remainderWorks: function () {
        Bridge.Test.Assert.areEqual(14.0 % 3.0, 2);
    },
    multiplyWorks: function () {
        Bridge.Test.Assert.areEqual(3.0 * 2.0, 6);
    },
    negateWorks: function () {
        Bridge.Test.Assert.areEqual(-3.0, -3);
    },
    roundWorks: function () {
        Bridge.Test.Assert.areEqual(Math.round(3.2), 3);
    },
    subtractWorks: function () {
        Bridge.Test.Assert.areEqual(7.0 - 3.0, 4);
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((Bridge.cast(0, Number))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Number))), Bridge.getHashCode((Bridge.cast(1, Number))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((Bridge.cast(1, Number))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((Bridge.cast(0.5, Number))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Number)), Bridge.cast(Bridge.cast(0, Number), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Number)), Bridge.cast(Bridge.cast(0, Number), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Number)), Bridge.cast(Bridge.cast(0.5, Number), Object)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Number)), Bridge.cast(Bridge.cast(1, Number), Object)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Number)), Bridge.cast(0, Number)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Number)), Bridge.cast(0, Number)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Number)), Bridge.cast(0.5, Number)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Number)), Bridge.cast(1, Number)));

        //Assert.True(((IEquatable<decimal>)((decimal)0)).Equals((decimal)0));
        //Assert.False(((IEquatable<decimal>)((decimal)1)).Equals((decimal)0));
        //Assert.False(((IEquatable<decimal>)((decimal)0)).Equals((decimal)0.5));
        //Assert.True(((IEquatable<decimal>)((decimal)1)).Equals((decimal)1));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Number)), Bridge.cast(0, Number)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Number)), Bridge.cast(0, Number)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Number)), Bridge.cast(0.5, Number)) < 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Number)), Bridge.cast(1, Number)) === 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.DoubleTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(Bridge.cast(0.5, Number), Object), Number));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Number), "Number");
        //Assert.False(typeof(double).IsClass);
        //Assert.True(typeof(IComparable<double>).IsAssignableFrom(typeof(double)));
        //Assert.True(typeof(IEquatable<double>).IsAssignableFrom(typeof(double)));
        //Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(double)));
        var d = Bridge.cast(0, Number);
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(d, Object), Number));
        //Assert.True((object)d is IComparable<double>);
        //Assert.True((object)d is IEquatable<double>);
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(d, Object), Bridge.IFormattable));

        //var interfaces = typeof(double).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 3);
        //Assert.True(interfaces.Contains(typeof(IComparable<double>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<double>)));
        //Assert.True(interfaces.Contains(typeof(IFormattable)));
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Number)(), 0);
    },
    constantsWork: function () {
        var zero = 0;
        //Assert.True(double.MinValue < (double)(object)-1.7e+308, "MinValue should be correct");
        //Assert.True(double.MinValue < (decimal)(object)-1.7e+308, "MinValue should be correct");
        Bridge.Test.Assert.true$1(Number.MAX_VALUE > Bridge.cast(Bridge.cast(1.7E+308, Object), Number), "MaxValue should be correct");
        //Assert.AreEqual(double.JsMinValue, 5e-324, "MinValue should be correct");
        Bridge.Test.Assert.areEqual$1(4.94065645841247E-324, 4.94065645841247E-324, "MinValue should be correct");
        Bridge.Test.Assert.true$1(Number.isNaN(Number.NaN), "NaN should be correct");
        Bridge.Test.Assert.areStrictEqual$1(Number.POSITIVE_INFINITY, 1 / zero, "PositiveInfinity should be correct");
        Bridge.Test.Assert.areStrictEqual$1(Number.NEGATIVE_INFINITY, -1 / zero, "NegativeInfinity should be correct");
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((291.0), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format(291.0, "x"), "123");
        //Assert.AreEqual(((IFormattable)291.0).ToString("x"), "123");
    },
    toStringWorks: function () {
        Bridge.Test.Assert.areEqual((123.0).toString(), "123");
    },
    toExponentialWorks: function () {
        Bridge.Test.Assert.areEqual((123.0).toExponential(), "1.23e+2");
    },
    toExponentialWithFractionalDigitsWorks: function () {
        Bridge.Test.Assert.areEqual((123.0).toExponential(1), "1.2e+2");
    },
    toFixed: function () {
        Bridge.Test.Assert.areEqual((123.0).toFixed(), "123");
    },
    toFixedWithFractionalDigitsWorks: function () {
        Bridge.Test.Assert.areEqual((123.0).toFixed(1), "123.0");
    },
    toPrecisionWorks: function () {
        Bridge.Test.Assert.areEqual((12345.0).toPrecision(), "12345");
    },
    toPrecisionWithPrecisionWorks: function () {
        Bridge.Test.Assert.areEqual((12345.0).toPrecision(2), "1.2e+4");
    },
    isPositiveInfinityWorks: function () {
        var inf = "Infinity";
        // TODO Bug
        //Assert.True(double.IsPositiveInfinity(inf), "inf");
        Bridge.Test.Assert.false$1((-inf === Number.POSITIVE_INFINITY), "-inf");
        Bridge.Test.Assert.false$1((0.0 === Number.POSITIVE_INFINITY), "0.0");
        Bridge.Test.Assert.false$1((Number.NaN === Number.POSITIVE_INFINITY), "Double.NaN");
    },
    isNegativeInfinityWorks: function () {
        var inf = "Infinity";
        Bridge.Test.Assert.$false((inf === Number.NEGATIVE_INFINITY));
        Bridge.Test.Assert.$true((-inf === Number.NEGATIVE_INFINITY));
        Bridge.Test.Assert.$false((0.0 === Number.NEGATIVE_INFINITY));
        Bridge.Test.Assert.$false((Number.NaN === Number.NEGATIVE_INFINITY));
    },
    isInfinityWorks: function () {
        var inf = "Infinity";
        Bridge.Test.Assert.$true((Math.abs(inf) === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$true((Math.abs(-inf) === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$false((Math.abs(0.0) === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$false((Math.abs(Number.NaN) === Number.POSITIVE_INFINITY));
    },
    isFiniteWorks: function () {
        var zero = 0, one = 1;
        Bridge.Test.Assert.$true(Number.isFinite(one));
        Bridge.Test.Assert.$false(Number.isFinite(one / zero));
        Bridge.Test.Assert.$false(Number.isFinite(zero / zero));
    },
    isNaNWorks: function () {
        var zero = 0, one = 1;
        Bridge.Test.Assert.$false(Number.isNaN(one));
        Bridge.Test.Assert.$false(Number.isNaN(one / zero));
        Bridge.Test.Assert.$true(Number.isNaN(zero / zero));
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((Bridge.cast(0, Number))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Number))), Bridge.getHashCode((Bridge.cast(1, Number))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((Bridge.cast(1, Number))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((Bridge.cast(0.5, Number))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Number)), Bridge.cast(Bridge.cast(0, Number), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Number)), Bridge.cast(Bridge.cast(0, Number), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Number)), Bridge.cast(Bridge.cast(0.5, Number), Object)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Number)), Bridge.cast(Bridge.cast(1, Number), Object)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Number)), Bridge.cast(0, Number)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Number)), Bridge.cast(0, Number)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Number)), Bridge.cast(0.5, Number)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Number)), Bridge.cast(1, Number)));

        //Assert.True(((IEquatable<double>)((double)0)).Equals((double)0));
        //Assert.False(((IEquatable<double>)((double)1)).Equals((double)0));
        //Assert.False(((IEquatable<double>)((double)0)).Equals((double)0.5));
        //Assert.True(((IEquatable<double>)((double)1)).Equals((double)1));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Number)), Bridge.cast(0, Number)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Number)), Bridge.cast(0, Number)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Number)), Bridge.cast(0.5, Number)) < 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Number)), Bridge.cast(1, Number)) === 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.EnumTests', {
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    firstValueOfEnumIsZero: function () {
        Bridge.Test.Assert.areStrictEqual(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue, 0);
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue), Bridge.getHashCode(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue), Bridge.getHashCode(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.secondValue));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue, Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue));
        Bridge.Test.Assert.$false(Bridge.equals(Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.firstValue, Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum.secondValue));
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.EnumTests.FlagsEnum', {
    statics: {
        none: 0,
        firstValue: 1,
        secondValue: 2,
        thirdValue: 4
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.EnumTests.TestEnum', {
    statics: {
        firstValue: 0,
        secondValue: 1,
        thirdValue: 2
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.Int16Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(Bridge.cast(0, Bridge.Int), Object), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(Bridge.cast(0.5, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(-32769, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(32768, Object), Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        //Assert.False(typeof(short).IsClass);
        //Assert.True(typeof(IComparable<short>).IsAssignableFrom(typeof(short)));
        //Assert.True(typeof(IEquatable<short>).IsAssignableFrom(typeof(short)));
        //Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(short)));
        var s = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.IComparable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.IFormattable));

        //var interfaces = typeof(short).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 3);
        //Assert.True(interfaces.Contains(typeof(IComparable<short>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<short>)));
        //Assert.True(interfaces.Contains(typeof(IFormattable)));
    },
    castsWork: function () {
        var i1 = -32769, i2 = -32768, i3 = 5754, i4 = 32767, i5 = 32768;
        var ni1 = -32769, ni2 = -32768, ni3 = 5754, ni4 = 32767, ni5 = 32768, ni6 = null;

        // TODO unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -32769, "-32769 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), -32768, "-32768 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 5754, "5754 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 32767, "32767 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 32768, "32768 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni1, Bridge.Int)), -32769, "nullable -32769 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), -32768, "nullable -32768 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 5754, "nullable 5754 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 32767, "nullable 32767 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni5, Bridge.Int)), 32768, "nullable 32768 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null unchecked");
        }

        //checked
        {
            //Assert.Throws<OverflowException>(() => { var x = (short)i1; }, "-32769 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), -32768, "-32768 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 5754, "5754 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 32767, "32767 checked");
            //Assert.Throws<OverflowException>(() => { var x = (short)i5; }, "32768 checked");

            //Assert.Throws<OverflowException>(() => { var x = (short?)ni1; }, "nullable -32769 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), -32768, "nullable -32768 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 5754, "nullable 5754 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 32767, "nullable 32767 checked");
            //Assert.Throws<OverflowException>(() => { var x = (short?)ni5; }, "nullable 32768 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(-32768, -32768);
        Bridge.Test.Assert.areEqual(32767, 32767);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
        //Assert.AreEqual(((IFormattable)((short)0x123)).ToString("x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("234", numberResult, -32768, 32767);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 234);

        result = Bridge.Int.tryParseInt("", numberResult, -32768, 32767);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, -32768, 32767);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, -32768, 32767);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("54768", numberResult, -32768, 32767);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 54768);

        result = Bridge.Int.tryParseInt("-55678", numberResult, -32768, 32767);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -55678);

        result = Bridge.Int.tryParseInt("2.5", numberResult, -32768, 32767);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("234", -32768, 32767), 234);
        //    Assert.Throws<FormatException>(() => short.Parse(""));
        //    Assert.Throws<ArgumentNullException>(() => short.Parse(null));
        //    Assert.Throws<FormatException>(() => short.Parse("notanumber"));
        //    Assert.Throws<OverflowException>(() => short.Parse("54768"));
        //    Assert.Throws<OverflowException>(() => short.Parse("-55678"));
        //    Assert.Throws<FormatException>(() => short.Parse("2.5"));
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(291, Bridge.Int)).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.Int32Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(Bridge.cast(0, Bridge.Int), Object), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(Bridge.cast(0.5, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(-2147483649, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(2147483648, Object), Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        //Assert.False(typeof(int).IsClass);
        //Assert.True(typeof(IComparable<int>).IsAssignableFrom(typeof(int)));
        //Assert.True(typeof(IEquatable<int>).IsAssignableFrom(typeof(int)));
        //Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(int)));
        var i = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.IComparable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.IFormattable));

        //var interfaces = typeof(int).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 3);
        //Assert.True(interfaces.Contains(typeof(IComparable<int>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<int>)));
        //Assert.True(interfaces.Contains(typeof(IFormattable)));
    },
    castsWork: function () {
        var i1 = -2147483649, i2 = -2147483648, i3 = 5754, i4 = 2147483647, i5 = 2147483648;
        var ni1 = -2147483649, ni2 = -2147483648, ni3 = 5754, ni4 = 2147483647, ni5 = 2147483648, ni6 = null;

        // TODO unchecked
        //unchecked {
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(i1, Bridge.Int)), -2147483649, "-2147483649 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(i2, Bridge.Int)), -2147483648, "-2147483648 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(i3, Bridge.Int)), 5754, "5754 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(i4, Bridge.Int)), 2147483647, "2147483647 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(i5, Bridge.Int)), 2147483648, "2147483648 unchecked");

        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni1, Bridge.Int)), -2147483649, "nullable -2147483649 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), -2147483648, "nullable -2147483648 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 5754, "nullable 5754 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 2147483647, "nullable 2147483647 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni5, Bridge.Int)), 2147483648, "nullable 2147483648 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null unchecked");
        //}

        //checked
        {
            //Assert.Throws<OverflowException>(() => { var x = (int)i1; }, "-2147483649 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(i2, Bridge.Int)), -2147483648, "-2147483648 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(i3, Bridge.Int)), 5754, "5754 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(i4, Bridge.Int)), 2147483647, "2147483647 checked");
            //Assert.Throws<OverflowException>(() => { var x = (int)i5; }, "32768 checked");

            //Assert.Throws<OverflowException>(() => { var x = (int?)ni1; }, "nullable -2147483649 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), -2147483648, "nullable -2147483648 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 5754, "nullable 5754 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 2147483647, "nullable 2147483647 checked");
            //Assert.Throws<OverflowException>(() => { var x = (int?)ni5; }, "nullable 2147483648 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null checked");
        }
    },
    typeIsWorksForInt32: function () {
        Bridge.Test.Assert.$false(Bridge.is(Bridge.cast(null, Object), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(Bridge.cast(1.5, Object), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is({ }, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(1, Object), Bridge.Int));
    },
    typeAsWorksForInt32: function () {
        Bridge.Test.Assert.$false(Bridge.Nullable.neq((Bridge.as(null, Bridge.Int)), null));
        Bridge.Test.Assert.$false(Bridge.Nullable.neq((Bridge.as({ }, Bridge.Int)), null));
        Bridge.Test.Assert.$false(Bridge.Nullable.neq((Bridge.as(Bridge.cast(1.5, Object), Bridge.Int)), null));
        Bridge.Test.Assert.$true(Bridge.Nullable.neq((Bridge.as(1, Bridge.Int)), null));
    },
    unboxingWorksForInt32: function () {
        var _null = null;
        var o = { };
        var d = 1.5;
        var i = 1;
        Bridge.Test.Assert.areEqual(Bridge.cast(_null, Bridge.Int), null);
        Bridge.Test.Assert.throws$5(function () {
            var _ = Bridge.cast(o, Bridge.Int);
        }, "Cannot cast object to int?");
        Bridge.Test.Assert.throws$5(function () {
            var _ = Bridge.cast(d, Bridge.Int);
        }, "Cannot cast decimal to int?");
        Bridge.Test.Assert.areEqual(Bridge.cast(i, Bridge.Int), 1);
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(-2147483648, -2147483648);
        Bridge.Test.Assert.areEqual(2147483647, 2147483647);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
        //Assert.AreEqual(((IFormattable)((int)0x123)).ToString("x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("57574", numberResult, -2147483648, 2147483647);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 57574);

        result = Bridge.Int.tryParseInt("-14", numberResult, -2147483648, 2147483647);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -14);

        result = Bridge.Int.tryParseInt("", numberResult, -2147483648, 2147483647);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, -2147483648, 2147483647);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, -2147483648, 2147483647);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("2.5", numberResult, -2147483648, 2147483647);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("57574", -2147483648, 2147483647), 57574);
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("-14", -2147483648, 2147483647), -14);

        //Assert.Throws<FormatException>(() => int.Parse(""));
        //Assert.Throws<ArgumentNullException>(() => int.Parse(null));
        //Assert.Throws<FormatException>(() => int.Parse("notanumber"));
        //Assert.Throws<OverflowException>(() => int.Parse("2147483648"));
        //Assert.Throws<OverflowException>(() => int.Parse("-2147483649"));
        //Assert.Throws<FormatException>(() => int.Parse("2.5"));
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(291, Bridge.Int)).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    },
    integerDivisionWorks: function () {
        var a = 17, b = 4, c = 0;
        Bridge.Test.Assert.areEqual(Bridge.Int.div(a, b), 4);
        Bridge.Test.Assert.areEqual(Bridge.Int.div(-a, b), -4);
        Bridge.Test.Assert.areEqual(Bridge.Int.div(a, -b), -4);
        Bridge.Test.Assert.areEqual(Bridge.Int.div(-a, -b), 4);
        //Assert.Throws<DivideByZeroException>(() => { var x = a / c; });
    },
    integerModuloWorks: function () {
        var a = 17, b = 4, c = 0;
        Bridge.Test.Assert.areEqual(a % b, 1);
        Bridge.Test.Assert.areEqual(-a % b, -1);
        Bridge.Test.Assert.areEqual(a % -b, 1);
        Bridge.Test.Assert.areEqual(-a % -b, -1);
        //Assert.Throws<DivideByZeroException>(() => { var x = a % c; });
    },
    integerDivisionByZeroThrowsDivideByZeroException: function () {
        var a = 17, b = 0;
        Bridge.Test.Assert.$throws(function () {
            var x = Bridge.Int.div(a, b);
        });
    },
    doublesAreTruncatedWhenConvertedToIntegers: function () {
        var d1 = 4.5;
        var d2 = null;
        var d3 = 8.5;
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(d1), 4);
        Bridge.Test.Assert.areEqual(Bridge.Int.trunc(-d1), -4);
        Bridge.Test.Assert.areEqual(Bridge.Nullable.lift(Bridge.Int.trunc(d2)), null);
        Bridge.Test.Assert.areEqual(Bridge.Nullable.lift(Bridge.Int.trunc(d3)), 8);
        Bridge.Test.Assert.areEqual(Bridge.Nullable.lift(Bridge.Int.trunc(Bridge.Nullable.neg(d3))), -8);
        Bridge.Test.Assert.areEqual(Bridge.Nullable.lift(Bridge.Int.trunc(d3)), 8);
        Bridge.Test.Assert.areEqual(Bridge.Nullable.lift(Bridge.Int.trunc(Bridge.Nullable.neg(d3))), -8);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.Int64Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(Bridge.cast(0, Bridge.Int), Object), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(Bridge.cast(0.5, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(1E+100, Object), Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        //Assert.False(typeof(long).IsClass);
        //Assert.True(typeof(IComparable<long>).IsAssignableFrom(typeof(long)));
        //Assert.True(typeof(IEquatable<long>).IsAssignableFrom(typeof(long)));
        //Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(long)));
        var l = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.IComparable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.IFormattable));

        //var interfaces = typeof(long).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 3);
        //Assert.True(interfaces.Contains(typeof(IComparable<long>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<long>)));
        //Assert.True(interfaces.Contains(typeof(IFormattable)));
    },
    castsWork: function () {
        var i3 = 5754, i4 = 9223372036854775000, i5 = 16223372036854776000;
        var ni3 = 5754, ni4 = 9223372036854775000, ni5 = 16223372036854776000, ni6 = null;

        // TODO unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 5754, "5754 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 9223372036854775000, "9223372036854775000 unchecked");
            Bridge.Test.Assert.false$1(Bridge.cast(i5, Bridge.Int) < 0, "16223372036854776000 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 5754, "nullable 5754 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 9223372036854775000, "nullable 9223372036854775000 unchecked");
            Bridge.Test.Assert.false$1(Bridge.Nullable.lt(Bridge.Nullable.lift(Bridge.cast(ni5, Bridge.Int)), 0), "nullable 16223372036854776000 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null unchecked");
        }

        //checked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 5754, "5754 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 9223372036854775000, "9223372036854775000 checked");
            //Assert.Throws<OverflowException>(() => { var x = (long)i5; }, "16223372036854776000 checked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 5754, "nullable 5754 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 9223372036854775000, "nullable 9223372036854775000 checked");
            //Assert.Throws<OverflowException>(() => { var x = (long?)ni5; }, "nullable 16223372036854776000 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
        //Assert.AreEqual(((IFormattable)((long)0x123)).ToString("x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("57574", numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 57574);

        result = Bridge.Int.tryParseInt("-14", numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -14);

        result = Bridge.Int.tryParseInt("", numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("2.5", numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("-10000000000000000000", numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        //Assert.AreEqual(numberResult, 0);

        result = Bridge.Int.tryParseInt("10000000000000000000", numberResult, -9007199254740991, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        //Assert.AreEqual(numberResult, 0);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("13453634535", -9007199254740991, 9007199254740991), 13453634535);
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("-234253069384953", -9007199254740991, 9007199254740991), -234253069384953);
        //Assert.Throws<FormatException>(() => long.Parse(""));
        //Assert.Throws<ArgumentNullException>(() => long.Parse(null));
        //Assert.Throws<FormatException>(() => long.Parse("notanumber"));
        //Assert.Throws<FormatException>(() => long.Parse("2.5"));
        //Assert.Throws<OverflowException>(() => long.Parse("-10000000000000000000"));
        //Assert.Throws<OverflowException>(() => long.Parse("10000000000000000000"));
    },
    castingOfLargeDoublesToInt64Works: function () {
        var d1 = 5000000000.5, d2 = -d1;
        Bridge.Test.Assert.areEqual$1(Bridge.Int.trunc(d1), 5000000000, "Positive");
        Bridge.Test.Assert.areEqual$1(Bridge.Int.trunc(d2), -5000000000, "Negative");
    },
    divisionOfLargeInt64Works: function () {
        var v1 = 50000000000, v2 = -v1, v3 = 3;
        Bridge.Test.Assert.areEqual$1(Bridge.Int.div(v1, v3), 16666666666, "Positive");
        Bridge.Test.Assert.areEqual$1(Bridge.Int.div(v2, v3), -16666666666, "Negative");
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(291, Bridge.Int)).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.$true(Bridge.cast(Bridge.getHashCode(4294967296), Bridge.Int) <= 4294967295);
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.JsDateTimeTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Date), "Date");
        //Assert.True(typeof(DateTime).IsClass);
        //Assert.True(typeof(IComparable<DateTime>).IsAssignableFrom(typeof(DateTime)));
        //Assert.True(typeof(IEquatable<DateTime>).IsAssignableFrom(typeof(DateTime)));

        // TODO Bug: return false

        var o = new Date();
        Bridge.Test.Assert.true$1(Bridge.is(o, Date), "o is DateTime");
        //Assert.True(o is IComparable<DateTime>, "o is IComparable<DateTime>");
        //Assert.True(o is IEquatable<DateTime>, "o is IEquatable<DateTime>");

        //var interfaces = typeof(DateTime).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 2);
        //Assert.True(interfaces.Contains(typeof(IComparable<DateTime>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<DateTime>)));
    },
    defaultConstructorReturnsTodaysDate: function () {
        var dt = new Date();
        Bridge.Test.Assert.$true(dt.getFullYear() > 2011);
    },
    creatingInstanceReturnsTodaysDate: function () {
        Bridge.Test.Assert.$true(new Date().getFullYear() > 2011);
    },
    millisecondSinceEpochConstructorWorks: function () {
        var dt = new Date(43200000000);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 1971);
    },
    stringConstructorWorks: function () {
        var dt = new Date("Aug 12, 2012");
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2012);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 8);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
    },
    yMDConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2011);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 7);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
    },
    yMDHConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2011);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 7);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
        Bridge.Test.Assert.areEqual(dt.getHours(), 13);
    },
    yMDHNConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2011);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 7);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
        Bridge.Test.Assert.areEqual(dt.getHours(), 13);
        Bridge.Test.Assert.areEqual(dt.getMinutes(), 42);
    },
    yMDHNSConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2011);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 7);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
        Bridge.Test.Assert.areEqual(dt.getHours(), 13);
        Bridge.Test.Assert.areEqual(dt.getMinutes(), 42);
        Bridge.Test.Assert.areEqual(dt.getSeconds(), 56);
    },
    yMDHNSUConstructorWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2011);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 7);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
        Bridge.Test.Assert.areEqual(dt.getHours(), 13);
        Bridge.Test.Assert.areEqual(dt.getMinutes(), 42);
        Bridge.Test.Assert.areEqual(dt.getSeconds(), 56);
        Bridge.Test.Assert.areEqual(dt.getMilliseconds(), 345);
    },
    nowWorks: function () {
        var dt = new Date();
        Bridge.Test.Assert.$true(dt.getFullYear() > 2011);
    },
    uTCNowWorks: function () {
        var UTC = Bridge.Date.utcNow();
        var local = new Date();
        Bridge.Test.Assert.$true(Math.abs((new Bridge.TimeSpan((new Date(local.getUTCFullYear(), local.getUTCMonth() + 1 - 1, local.getUTCDate(), local.getUTCHours(), local.getUTCMinutes(), local.getUTCSeconds(), local.getUTCMilliseconds()) - UTC) * 10000)).getTotalMinutes()) < 1000);
    },
    toUniversalWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        var UTC = Bridge.Date.toUTC(dt);
        Bridge.Test.Assert.areEqual(dt.getUTCFullYear(), UTC.getFullYear());
        Bridge.Test.Assert.areEqual(dt.getUTCMonth() + 1, UTC.getMonth() + 1);
        Bridge.Test.Assert.areEqual(dt.getUTCDate(), UTC.getDate());
        Bridge.Test.Assert.areEqual(dt.getUTCHours(), UTC.getHours());
        Bridge.Test.Assert.areEqual(dt.getUTCMinutes(), UTC.getMinutes());
        Bridge.Test.Assert.areEqual(dt.getUTCSeconds(), UTC.getSeconds());
        Bridge.Test.Assert.areEqual(dt.getUTCMilliseconds(), UTC.getMilliseconds());
    },
    toLocalWorks: function () {
        var UTC = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        var dt = Bridge.Date.toLocal(UTC);
        Bridge.Test.Assert.areEqual(dt.getUTCFullYear(), UTC.getFullYear());
        Bridge.Test.Assert.areEqual(dt.getUTCMonth() + 1, UTC.getMonth() + 1);
        Bridge.Test.Assert.areEqual(dt.getUTCDate(), UTC.getDate());
        Bridge.Test.Assert.areEqual(dt.getUTCHours(), UTC.getHours());
        Bridge.Test.Assert.areEqual(dt.getUTCMinutes(), UTC.getMinutes());
        Bridge.Test.Assert.areEqual(dt.getUTCSeconds(), UTC.getSeconds());
        Bridge.Test.Assert.areEqual(dt.getUTCMilliseconds(), UTC.getMilliseconds());
    },
    todayWorks: function () {
        var dt = Bridge.Date.today();
        Bridge.Test.Assert.$true(dt.getFullYear() > 2011);
        Bridge.Test.Assert.areEqual(dt.getHours(), 0);
        Bridge.Test.Assert.areEqual(dt.getMinutes(), 0);
        Bridge.Test.Assert.areEqual(dt.getSeconds(), 0);
        Bridge.Test.Assert.areEqual(dt.getMilliseconds(), 0);
    },
    formatWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13);
        Bridge.Test.Assert.areEqual(Bridge.Date.format(dt, "yyyy-MM-dd"), "2011-07-12");
    },
    localeFormatWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13);
        Bridge.Test.Assert.areEqual(Bridge.Date.format(dt, "yyyy-MM-dd"), "2011-07-12");
    },
    getFullYearWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2011);
    },
    getMonthWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 7);
    },
    getDateWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
    },
    getHoursWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getHours(), 13);
    },
    getMinutesWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getMinutes(), 42);
    },
    getSecondsWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getSeconds(), 56);
    },
    getMillisecondsWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getMilliseconds(), 345);
    },
    getDayWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42, 56, 345);
        Bridge.Test.Assert.areEqual(dt.getDay(), 2);
    },
    getTimeWorks: function () {
        var dt = new Date(Date.UTC(1970, 0, 2));
        Bridge.Test.Assert.areEqual(dt.getTime(), 86400000);
    },
    valueOfWorks: function () {
        var dt = new Date(Date.UTC(1970, 0, 2));
        Bridge.Test.Assert.areEqual(dt.valueOf(), 86400000);
    },
    getTimezoneOffsetWorks: function () {
        // TODO Bug 
        var dt = new Date(0);
        Bridge.Test.Assert.areEqual(dt.getTimezoneOffset(), Bridge.Int.div(Bridge.cast((new Date(1970, 0 - 1, 1).valueOf()), Bridge.Int), 60000));
    },
    getUTCFullYearWorks: function () {
        var dt = new Date(Date.UTC(2011, 7, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCFullYear(), 2011);
    },
    getUtcMonthWorks: function () {
        // TODO Bug
        var dt = new Date(Date.UTC(2011, 7, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCMonth() + 1, 7);
    },
    getUTCDateWorks: function () {
        var dt = new Date(Date.UTC(2011, 7, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCDate(), 12);
    },
    getUTCHoursWorks: function () {
        var dt = new Date(Date.UTC(2011, 7, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCHours(), 13);
    },
    getUTCMinutesWorks: function () {
        var dt = new Date(Date.UTC(2011, 7, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCMinutes(), 42);
    },
    getUTCSecondsWorks: function () {
        var dt = new Date(Date.UTC(2011, 7, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCSeconds(), 56);
    },
    getUTCMillisecondsWorks: function () {
        var dt = new Date(Date.UTC(2011, 7, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCMilliseconds(), 345);
    },
    getUTCDayWorks: function () {
        var dt = new Date(Date.UTC(2011, 7, 12, 13, 42, 56, 345));
        Bridge.Test.Assert.areEqual(dt.getUTCDay(), 5);
    },
    parseWorks: function () {
        var dt = Bridge.Date.parse("Aug 12, 2012");
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2012);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 8);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
    },
    parseExactWorks: function () {
        var dt = Bridge.Date.parseExact("2012-12-08", "yyyy-dd-MM");
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2012);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 8);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
    },
    parseExactWithCultureWorks: function () {
        var dt = Bridge.Date.parseExact("2012-12-08", "yyyy-dd-MM", Bridge.CultureInfo.invariantCulture);
        Bridge.Test.Assert.areEqual(dt.getFullYear(), 2012);
        Bridge.Test.Assert.areEqual(dt.getMonth() + 1, 8);
        Bridge.Test.Assert.areEqual(dt.getDate(), 12);
    },
    parseExactUTCWorks: function () {
        //var dt = DateTime.ParseExactUTC("2012-12-08", "yyyy-dd-MM");
        var dt = Bridge.Date.parseExact("2012-12-08", "yyyy-dd-MM");
        Bridge.Test.Assert.areEqual(dt.getUTCFullYear(), 2012);
        Bridge.Test.Assert.areEqual(dt.getUTCMonth() + 1, 8);
        Bridge.Test.Assert.areEqual(dt.getUTCDate(), 12); // TODO Bug
    },
    parseExactUTCWithCultureWorks: function () {
        //var dt = DateTime.ParseExactUTC("2012-12-08", "yyyy-dd-MM", CultureInfo.InvariantCulture);
        var dt = Bridge.Date.parseExact("2012-12-08", "yyyy-dd-MM", Bridge.CultureInfo.invariantCulture);
        Bridge.Test.Assert.areEqual(dt.getUTCFullYear(), 2012);
        Bridge.Test.Assert.areEqual(dt.getUTCMonth() + 1, 8);
        Bridge.Test.Assert.areEqual(dt.getUTCDate(), 12); // TODO Bug
    },
    toDateStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toDateString();
        Bridge.Test.Assert.$true(Bridge.String.indexOf(s, "2011") >= 0 && Bridge.String.indexOf(s, "42") < 0);
    },
    toTimeStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toTimeString();
        Bridge.Test.Assert.$true(Bridge.String.indexOf(s, "2011") < 0 && Bridge.String.indexOf(s, "42") >= 0);
    },
    toUTCStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toUTCString();
        Bridge.Test.Assert.$true(Bridge.String.indexOf(s, "2011") >= 0 && Bridge.String.indexOf(s, "42") >= 0);
    },
    toLocaleDateStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toLocaleDateString();
        Bridge.Test.Assert.$true(Bridge.String.indexOf(s, "2011") >= 0 && Bridge.String.indexOf(s, "42") < 0);
    },
    toLocaleTimeStringWorks: function () {
        var dt = new Date(2011, 7 - 1, 12, 13, 42);
        var s = dt.toLocaleTimeString();
        Bridge.Test.Assert.$true(Bridge.String.indexOf(s, "2011") < 0 && Bridge.String.indexOf(s, "42") >= 0);
    },
    assertDateUTC: function (dt, year, month, day, hours, minutes, seconds, milliseconds) {
        Bridge.Test.Assert.areEqual(dt.getUTCFullYear(), year);
        Bridge.Test.Assert.areEqual(dt.getUTCMonth() + 1, month);
        Bridge.Test.Assert.areEqual(dt.getUTCDate(), day);
        Bridge.Test.Assert.areEqual(dt.getUTCHours(), hours);
        Bridge.Test.Assert.areEqual(dt.getUTCMinutes(), minutes);
        Bridge.Test.Assert.areEqual(dt.getUTCSeconds(), seconds);
        Bridge.Test.Assert.areEqual(dt.getUTCMilliseconds(), milliseconds);
    },
    subtractingDatesWorks: function () {
        var ts = new Bridge.TimeSpan((new Date(2011, 7 - 1, 12) - new Date(2011, 7 - 1, 11)) * 10000);
        Bridge.Test.Assert.areEqual(ts.getTotalMilliseconds(), 86400000);
    },
    subtractMethodReturningTimeSpanWorks: function () {
        Bridge.Test.Assert.areEqual(new Bridge.TimeSpan((new Date(2011, 6 - 1, 12) - new Date(2011, 6 - 1, 11)) * 10000), new Bridge.TimeSpan(1, 0, 0, 0));
        Bridge.Test.Assert.areEqual(new Bridge.TimeSpan((new Date(2011, 6 - 1, 12, 15, 0, 0) - new Date(2011, 6 - 1, 11, 13, 0, 0)) * 10000), new Bridge.TimeSpan(1, 2, 0, 0));
    },
    dateEqualityWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals(new Date(2011, 7 - 1, 12), new Date(2011, 7 - 1, 12)));
        Bridge.Test.Assert.$false(Bridge.equals(new Date(2011, 7 - 1, 12), new Date(2011, 7 - 1, 13)));
        //Assert.AreStrictEqual(new DateTime(2011, 7, 12) == (DateTime)null, false);
        Bridge.Test.Assert.areStrictEqual(Bridge.equals(null, new Date(2011, 7 - 1, 12)), false);
        Bridge.Test.Assert.areStrictEqual(Bridge.equals(null, null), true);
    },
    dateInequalityWorks: function () {
        Bridge.Test.Assert.$false(!Bridge.equals(new Date(2011, 7 - 1, 12), new Date(2011, 7 - 1, 12)));
        Bridge.Test.Assert.$true(!Bridge.equals(new Date(2011, 7 - 1, 12), new Date(2011, 7 - 1, 13)));
        //Assert.AreStrictEqual(new DateTime(2011, 7, 12) != (DateTime)null, true);
        Bridge.Test.Assert.areStrictEqual(!Bridge.equals(null, new Date(2011, 7 - 1, 12)), true);
        Bridge.Test.Assert.areStrictEqual(!Bridge.equals(null, null), false);
    },
    dateLessThanWorks: function () {
        Bridge.Test.Assert.$true(new Date(2011, 7 - 1, 11) < new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$false(new Date(2011, 7 - 1, 12) < new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$false(new Date(2011, 7 - 1, 13) < new Date(2011, 7 - 1, 12));
    },
    dateLessEqualWorks: function () {
        Bridge.Test.Assert.$true(new Date(2011, 7 - 1, 11) <= new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$true(new Date(2011, 7 - 1, 12) <= new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$false(new Date(2011, 7 - 1, 13) <= new Date(2011, 7 - 1, 12));
    },
    dateGreaterThanWorks: function () {
        Bridge.Test.Assert.$false(new Date(2011, 7 - 1, 11) > new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$false(new Date(2011, 7 - 1, 12) > new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$true(new Date(2011, 7 - 1, 13) > new Date(2011, 7 - 1, 12));
    },
    dateGreaterEqualWorks: function () {
        Bridge.Test.Assert.$false(new Date(2011, 7 - 1, 11) >= new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$true(new Date(2011, 7 - 1, 12) >= new Date(2011, 7 - 1, 12));
        Bridge.Test.Assert.$true(new Date(2011, 7 - 1, 13) >= new Date(2011, 7 - 1, 12));
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode(new Date(0)), Bridge.getHashCode(new Date(0)));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode(new Date(1)), Bridge.getHashCode(new Date(1)));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode(new Date(0)), Bridge.getHashCode(new Date(1)));
        Bridge.Test.Assert.$true(Bridge.cast(Bridge.getHashCode(new Date(3000, 1 - 1, 1)), Bridge.Int) < 4294967295);
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals(new Date(0), Bridge.cast(new Date(0), Object)));
        Bridge.Test.Assert.$false(Bridge.equals(new Date(1), Bridge.cast(new Date(0), Object)));
        Bridge.Test.Assert.$false(Bridge.equals(new Date(0), Bridge.cast(new Date(1), Object)));
        Bridge.Test.Assert.$true(Bridge.equals(new Date(1), Bridge.cast(new Date(1), Object)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT(new Date(0), new Date(0)));
        Bridge.Test.Assert.$false(Bridge.equalsT(new Date(1), new Date(0)));
        Bridge.Test.Assert.$false(Bridge.equalsT(new Date(0), new Date(1)));
        Bridge.Test.Assert.$true(Bridge.equalsT(new Date(1), new Date(1)));

        // TODO Bug : Unable to cast type Date to type Bridge.IEquatable
        //Assert.True(((IEquatable<DateTime>)new DateTime(0)).Equals(new DateTime(0)));
        //Assert.False(((IEquatable<DateTime>)new DateTime(1)).Equals(new DateTime(0)));
        //Assert.False(((IEquatable<DateTime>)new DateTime(0)).Equals(new DateTime(1)));
        //Assert.True(((IEquatable<DateTime>)new DateTime(1)).Equals(new DateTime(1)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare(new Date(0), new Date(0)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare(new Date(1), new Date(0)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare(new Date(0), new Date(1)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.ObjectTests', {
    canGetHashCodeForObject: function () {
        var o = { };
        var c = Bridge.getHashCode(o);
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(c, Object), Bridge.Int));
    },
    repeatedCallsToGetHashCodeReturnsSameValue: function () {
        var o = { };
        Bridge.Test.Assert.areEqual(Bridge.getHashCode(o), Bridge.getHashCode(o));
    },
    objectIsEqualToItself: function () {
        var o = { };
        Bridge.Test.Assert.$true(Bridge.equals(o, o));
    },
    staticEqualsWorks: function () {
        var o1 = { }, o2 = { };
        Bridge.Test.Assert.$true(Bridge.equals(null, null));
        Bridge.Test.Assert.$false(Bridge.equals(null, o1));
        Bridge.Test.Assert.$false(Bridge.equals(o1, null));
        Bridge.Test.Assert.$true(Bridge.equals(o1, o1));
    },
    referenceEqualsWorks: function () {
        var o1 = { }, o2 = { }, n = null;
        Bridge.Test.Assert.true$1(n === n, "n, n");
        Bridge.Test.Assert.false$1(n === undefined, "n, Script.Undefined");
        Bridge.Test.Assert.false$1(o1 === o2, "o1, o2");
        Bridge.Test.Assert.false$1(o1 === n, "o1, n");
        Bridge.Test.Assert.false$1(o1 === undefined, "o1, Script.Undefined");
        Bridge.Test.Assert.true$1(o1 === o1, "o1, o1");
    },
    toStringOverride: function () {
        var c1 = new Bridge.ClientTest.SimpleTypes.ObjectTests.C1(), c2 = new Bridge.ClientTest.SimpleTypes.ObjectTests.C2();
        Bridge.Test.Assert.areEqual$1(c1.toString(), "test", "#1");
        Bridge.Test.Assert.areEqual$1(c2.toString(), "test", "#1");
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.ObjectTests.C1', {
    toString: function () {
        return "test";
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.ObjectTests.C2', {
    inherits: [Bridge.ClientTest.SimpleTypes.ObjectTests.C1]
});

Bridge.define('Bridge.ClientTest.SimpleTypes.SByteTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(Bridge.cast(0, Bridge.Int), Object), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(Bridge.cast(0.5, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(-129, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(128, Object), Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        //Assert.False(typeof(sbyte).IsClass);
        //Assert.True(typeof(IComparable<sbyte>).IsAssignableFrom(typeof(sbyte)));
        //Assert.True(typeof(IEquatable<sbyte>).IsAssignableFrom(typeof(sbyte)));
        //Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(sbyte)));
        var b = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(b, Bridge.Int));
        //Assert.True(b is IComparable<sbyte>);
        //Assert.True(b is IEquatable<sbyte>);
        Bridge.Test.Assert.$true(Bridge.is(b, Bridge.IFormattable));

        //var interfaces = typeof(sbyte).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 3);
        //Assert.True(interfaces.Contains(typeof(IComparable<sbyte>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<sbyte>)));
        //Assert.True(interfaces.Contains(typeof(IFormattable)));
    },
    castsWork: function () {
        var i1 = -129, i2 = -128, i3 = 80, i4 = 127, i5 = 128;
        var ni1 = -129, ni2 = -128, ni3 = 80, ni4 = 127, ni5 = 128, ni6 = null;

        // TODO unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -129, "-129 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), -128, "-128 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 80, "80 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 127, "127 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 128, "128 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni1, Bridge.Int)), -129, "nullable -129 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), -128, "nullable -128 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 80, "nullable 80 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 127, "nullable 127 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni5, Bridge.Int)), 128, "nullable 128 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null unchecked");
        }

        //checked
        {
            //Assert.Throws<OverflowException>(() => { var x = (byte)i1; }, "-129 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), -128, "-128 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 80, "80 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 127, "127 checked");
            //Assert.Throws<OverflowException>(() => { var x = (sbyte)i5; }, "-128 checked");

            //Assert.Throws<OverflowException>(() => { var x = (sbyte?)ni1; }, "nullable -129 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), -128, "nullable -128 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 80, "nullable 80 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 127, "nullable 127 checked");
            //Assert.Throws<OverflowException>(() => { var x = (sbyte?)ni5; }, "nullable 128 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(-128, -128);
        Bridge.Test.Assert.areEqual(127, 127);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(18, Bridge.Int)), "x"), "12");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(18, Bridge.Int)), "x"), "12");
        //Assert.AreEqual(((IFormattable)((sbyte)0x12)).ToString("x"), "12");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("124", numberResult, -128, 127);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 124);

        result = Bridge.Int.tryParseInt("-123", numberResult, -128, 127);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -123);

        result = Bridge.Int.tryParseInt("", numberResult, -128, 127);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, -128, 127);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, -128, 127);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("54768", numberResult, -128, 127);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 54768);

        result = Bridge.Int.tryParseInt("2.5", numberResult, -128, 127);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("124", -128, 127), 124);
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("-123", -128, 127), -123);
        //Assert.Throws<FormatException>(() => sbyte.Parse(""));
        //Assert.Throws<ArgumentNullException>(() => sbyte.Parse(null));
        //Assert.Throws<FormatException>(() => sbyte.Parse("notanumber"));
        //Assert.Throws<OverflowException>(() => sbyte.Parse("54768"));
        //Assert.Throws<FormatException>(() => sbyte.Parse("2.5"));
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(18, Bridge.Int)).toString(16), "12");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.SingleTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(Bridge.cast(0.5, Number), Object), Number));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Number), "Number");
        //Assert.False(typeof(float).IsClass);
        //Assert.True(typeof(IComparable<float>).IsAssignableFrom(typeof(float)));
        //Assert.True(typeof(IEquatable<float>).IsAssignableFrom(typeof(float)));
        //Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(float)));
        var f = Bridge.cast(0, Number);
        Bridge.Test.Assert.$true(Bridge.is(f, Number));
        //Assert.True(f is IComparable<float>);
        //Assert.True(f is IEquatable<float>);
        Bridge.Test.Assert.$true(Bridge.is(f, Bridge.IFormattable));

        //var interfaces = typeof(float).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 3);
        //Assert.True(interfaces.Contains(typeof(IComparable<float>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<float>)));
        //Assert.True(interfaces.Contains(typeof(IFormattable)));
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Number)(), 0);
    },
    constantsWork: function () {
        var zero = 0;
        Bridge.Test.Assert.true$1(Bridge.cast(Bridge.cast(-3.40282347E+38, Object), Number) < -3.4E+38 && Bridge.cast(Bridge.cast(-3.40282347E+38, Object), Number) > -3.5E+38, "MinValue should be correct");
        Bridge.Test.Assert.true$1(Bridge.cast(Bridge.cast(3.40282347E+38, Object), Number) > 3.4E+38 && Bridge.cast(Bridge.cast(3.40282347E+38, Object), Number) < 3.5E+38, "MaxValue should be correct");
        Bridge.Test.Assert.areEqual$1(1.401298E-45, 1.401298E-45, "Epsilon should be correct");
        Bridge.Test.Assert.true$1(Number.isNaN(Number.NaN), "NaN should be correct");
        Bridge.Test.Assert.areStrictEqual$1(Number.POSITIVE_INFINITY, 1 / zero, "PositiveInfinity should be correct");
        Bridge.Test.Assert.areStrictEqual$1(Number.NEGATIVE_INFINITY, -1 / zero, "NegativeInfinity should be correct");
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291.0, Number)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291.0, Number)), "x"), "123");
        //Assert.AreEqual(((IFormattable)((float)291.0)).ToString("x"), "123");
    },
    toStringWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123.0, Number)).toString(), "123");
    },
    toExponentialWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123.0, Number)).toExponential(), "1.23e+2");
    },
    toExponentialWithFractionalDigitsWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123.0, Number)).toExponential(1), "1.2e+2");
    },
    toFixed: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123.0, Number)).toFixed(), "123");
    },
    toFixedWithFractionalDigitsWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123.0, Number)).toFixed(1), "123.0");
    },
    toPrecisionWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(12345.0, Number)).toPrecision(), "12345");
    },
    toPrecisionWithPrecisionWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(12345.0, Number)).toPrecision(2), "1.2e+4");
    },
    isPositiveInfinityWorks: function () {
        var inf = "Infinity";
        // TODO Bug
        //Assert.True (float.IsPositiveInfinity(inf));
        Bridge.Test.Assert.$false((-inf === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$false((0.0 === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$false((Number.NaN === Number.POSITIVE_INFINITY));
    },
    isNegativeInfinityWorks: function () {
        var inf = "Infinity";
        Bridge.Test.Assert.$false((inf === Number.NEGATIVE_INFINITY));
        Bridge.Test.Assert.$true((-inf === Number.NEGATIVE_INFINITY));
        Bridge.Test.Assert.$false((0.0 === Number.NEGATIVE_INFINITY));
        Bridge.Test.Assert.$false((Number.NaN === Number.NEGATIVE_INFINITY));
    },
    isInfinityWorks: function () {
        var inf = "Infinity";
        Bridge.Test.Assert.$true((Math.abs(inf) === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$true((Math.abs(-inf) === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$false((Math.abs(0.0) === Number.POSITIVE_INFINITY));
        Bridge.Test.Assert.$false((Math.abs(Number.NaN) === Number.POSITIVE_INFINITY));
    },
    isFiniteWorks: function () {
        var zero = 0, one = 1;
        Bridge.Test.Assert.$true(Number.isFinite(one));
        Bridge.Test.Assert.$false(Number.isFinite(one / zero));
        Bridge.Test.Assert.$false(Number.isFinite(zero / zero));
    },
    isNaNWorks: function () {
        var zero = 0, one = 1;
        Bridge.Test.Assert.$false(Number.isNaN(one));
        Bridge.Test.Assert.$false(Number.isNaN(one / zero));
        Bridge.Test.Assert.$true(Number.isNaN(zero / zero));
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((Bridge.cast(0, Number))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Number))), Bridge.getHashCode((Bridge.cast(1, Number))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((Bridge.cast(1, Number))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Number))), Bridge.getHashCode((Bridge.cast(0.5, Number))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Number)), Bridge.cast(Bridge.cast(0, Number), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Number)), Bridge.cast(Bridge.cast(0, Number), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Number)), Bridge.cast(Bridge.cast(0.5, Number), Object)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Number)), Bridge.cast(Bridge.cast(1, Number), Object)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Number)), Bridge.cast(0, Number)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Number)), Bridge.cast(0, Number)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Number)), Bridge.cast(0.5, Number)) < 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Number)), Bridge.cast(1, Number)) === 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.StringTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(String), "String");
        //Assert.True(typeof(string).IsClass);
        //Assert.True(typeof(IComparable<string>).IsAssignableFrom(typeof(string)));
        //Assert.True(typeof(IEquatable<string>).IsAssignableFrom(typeof(string)));
        var s = "X";
        Bridge.Test.Assert.$true(Bridge.is(s, String));
        // TODO Bug
        //Assert.True(s is object, "string is object");
        //Assert.True(s is IComparable<string>);
        //Assert.True(s is IEquatable<string>);

        //var interfaces = typeof(string).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 2);
        //Assert.True(interfaces.Contains(typeof(IComparable<string>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<string>)));
    },
    defaultConstructorWorks: function () {
        Bridge.Test.Assert.areEqual(String(), "");
    },
    copyConstructorWorks: function () {
        Bridge.Test.Assert.areEqual(String("abcd"), "abcd");
    },
    charAndCountConstructorWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.fromCharCount(120, 5), "xxxxx");
    },
    charArrayConstructorWorks: function () {
        // TODO Bug
        Bridge.Test.Assert.areEqual(String([97, 98, 67]), "abC");
    },
    emptyFieldWorks: function () {
        Bridge.Test.Assert.areEqual("", "");
    },
    lengthPropertyWorks: function () {
        Bridge.Test.Assert.areEqual("abcd".length, 4);
    },
    charAtWorks: function () {
        Bridge.Test.Assert.areEqual("abcd".charAt(2), "c");
    },
    charCodeAtWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.cast("abcd".charCodeAt(2), Bridge.Int), Bridge.cast(99, Bridge.Int));
    },
    compareWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abcd") === 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abcb") > 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abce") < 0);
    },
    compareWithIgnoreCaseArgWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abcd", false) === 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abcb", false) > 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abce", false) < 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "ABCD", true) === 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "ABCB", true) > 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "ABCE", true) < 0);
    },
    concatWorks: function () {
        Bridge.Test.Assert.areEqual(["a", "b"].join(''), "ab");
        Bridge.Test.Assert.areEqual(["a", "b", "c"].join(''), "abc");
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d"].join(''), "abcd");
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d", "e"].toString().split(',').join(''), "abcde");
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d", "e", "f"].toString().split(',').join(''), "abcdef");
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d", "e", "f", "g"].toString().split(',').join(''), "abcdefg");
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d", "e", "f", "g", "h"].toString().split(',').join(''), "abcdefgh");
        Bridge.Test.Assert.areEqual(["a", "b", "c", "d", "e", "f", "g", "h", "i"].toString().split(',').join(''), "abcdefghi");
    },
    concatWithObjectsWorks: function () {
        Bridge.Test.Assert.areEqual([1].toString().split(',').join(''), "1");
        Bridge.Test.Assert.areEqual([1, 2].join(''), "12");
        Bridge.Test.Assert.areEqual([1, 2, 3].join(''), "123");
        Bridge.Test.Assert.areEqual([1, 2, 3, 4].join(''), "1234");
        Bridge.Test.Assert.areEqual([1, 2, 3, 4, 5].toString().split(',').join(''), "12345");
        Bridge.Test.Assert.areEqual([1, 2, 3, 4, 5, 6].toString().split(',').join(''), "123456");
        Bridge.Test.Assert.areEqual([1, 2, 3, 4, 5, 6, 7].toString().split(',').join(''), "1234567");
        Bridge.Test.Assert.areEqual([1, 2, 3, 4, 5, 6, 7, 8].toString().split(',').join(''), "12345678");
        Bridge.Test.Assert.areEqual([1, 2, 3, 4, 5, 6, 7, 8, 9].toString().split(',').join(''), "123456789");
    },
    endsWithCharWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.endsWith("abcd", "d"));
        Bridge.Test.Assert.$false(Bridge.String.endsWith("abcd", "e"));
    },
    endsWithStringWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.endsWith("abcd", "d"));
        Bridge.Test.Assert.$false(Bridge.String.endsWith("abcd", "e"));
    },
    staticEqualsWorks: function () {
        //Assert.True(string.Equals("abcd", "abcd", false));
        //Assert.False(string.Equals("abcd", "abce", false));
        //Assert.False(string.Equals("abcd", "ABCD", false));
        //Assert.True(string.Equals("abcd", "abcd", true));
        //Assert.False(string.Equals("abcd", "abce", true));
        //Assert.True(string.Equals("abcd", "ABCD", true));

        Bridge.Test.Assert.$true(Bridge.equals("abcd", "abcd"));
        Bridge.Test.Assert.$false(Bridge.equals("abcd", "abce"));
        Bridge.Test.Assert.$false(Bridge.equals("abcd", "ABCD"));
        Bridge.Test.Assert.$true(Bridge.equals("abcd", "abcd"));
        Bridge.Test.Assert.$false(Bridge.equals("abcd", "abce"));
        Bridge.Test.Assert.$false(Bridge.equals("abcd", "ABCD"));
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.format("x", null), "x");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}", "a"), "xa");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}", "a", "b"), "xab");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}{2}", "a", "b", "c"), "xabc");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}{2}{3}", "a", "b", "c", "d"), "xabcd");

        var arr1 = ["a"];
        var arr2 = ["a", "b"];
        var arr3 = ["a", "b", "c"];
        var arr4 = ["a", "b", "c", "d"];
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}", arr1), "xa");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}", arr2[0], arr2[1]), "xab");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}{2}", arr3[0], arr3[1], arr3[2]), "xabc");
        Bridge.Test.Assert.areEqual(Bridge.String.format("x{0}{1}{2}{3}", arr4[0], arr4[1], arr4[2], arr4[3]), "xabcd");
        // TODO String.Format()
        //Assert.AreEqual(string.Format("x{0}{1}", arr2), "xab");
        //Assert.AreEqual(string.Format("x{0}{1}{2}", arr3), "xabc");
        //Assert.AreEqual(string.Format("x{0}{1}{2}{3}", arr4), "xabcd");
    },
    formatWorksWithIFormattable: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.format("{0:F2}", 3.1428571428571428), "3.14");
        //Assert.AreEqual(string.Format("{0:FMT}", new MyFormattable()), "Formatted: FMT");
    },
    formatCanUseEscapedBraces: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.format("{{0}}", null), "{0}");
    },
    fromCharCodeWorks: function () {
        Bridge.Test.Assert.areEqual(String.fromCharCode(), "");
        Bridge.Test.Assert.areEqual(String.fromCharCode(97), "a");
        Bridge.Test.Assert.areEqual(String.fromCharCode(97, 98), "ab");
        Bridge.Test.Assert.areEqual(String.fromCharCode(97, 98, 99), "abc");
    },
    indexOfCharWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abc", String.fromCharCode(98)), 1);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abc", String.fromCharCode(100)), -1);
    },
    indexOfStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abc", "bc"), 1);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abc", "bd"), -1);
    },
    indexOfCharWithStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abcabc", String.fromCharCode(98), 3), 4);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abcabc", String.fromCharCode(100), 3), -1);
    },
    indexOfCharWithStartIndexAndCountWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("xxxxxabcxxx", String.fromCharCode(99), 3, 8), 7);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("xxxxxabcxxx", String.fromCharCode(99), 3, 5), 7);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("xxxxxabcxxx", String.fromCharCode(99), 3, 4), -1);
    },
    indexOfStringWithStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abcabc", "bc", 3), 4);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("abcabc", "bd", 3), -1);
    },
    indexOfStringWithStartIndexAndCountWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("xxxxxabcxxx", "abc", 3, 8), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("xxxxxabcxxx", "abc", 3, 5), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOf("xxxxxabcxxx", "abc", 3, 4), -1);
    },
    indexOfAnyWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcd", [98]), 1);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcd", [98, 120]), 1);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcd", [98, 120, 121]), 1);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcd", [120, 121]), -1);
    },
    indexOfAnyWithStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [98], 4), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [98, 120], 4), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [98, 120, 121], 4), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [120, 121], 4), -1);
    },
    indexOfAnyWithStartIndexAndCountWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [98], 4, 2), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [98, 120], 4, 2), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [98, 120, 121], 4, 2), 5);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [120, 121], 4, 2), -1);
        Bridge.Test.Assert.areEqual(Bridge.String.indexOfAny("abcdabcd", [99], 4, 2), -1);
    },
    isNullOrEmptyWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.isNullOrEmpty(null));
        Bridge.Test.Assert.$true(Bridge.String.isNullOrEmpty(""));
        Bridge.Test.Assert.$false(Bridge.String.isNullOrEmpty(" "));
        Bridge.Test.Assert.$false(Bridge.String.isNullOrEmpty("0"));
    },
    lastIndexOfCharWorks: function () {
        Bridge.Test.Assert.areEqual("abc".lastIndexOf("b"), 1);
        Bridge.Test.Assert.areEqual("abc".lastIndexOf("d"), -1);
    },
    lastIndexOfStringWorks: function () {
        Bridge.Test.Assert.areEqual("abc".lastIndexOf("bc"), 1);
        Bridge.Test.Assert.areEqual("abc".lastIndexOf("bd"), -1);
    },
    lastIndexOfCharWithStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual("abcabc".lastIndexOf("b", 3), 1);
        Bridge.Test.Assert.areEqual("abcabc".lastIndexOf("d", 3), -1);
    },
    lastIndexOfStringWithStartIndexWorks: function () {
        Bridge.Test.Assert.areEqual("abcabc".lastIndexOf("bc", 3), 1);
        Bridge.Test.Assert.areEqual("abcabc".lastIndexOf("bd", 3), -1);
    },
    localeCompareWorks: function () {
        Bridge.Test.Assert.$true("abcd".localeCompare("abcd") === 0);
        Bridge.Test.Assert.$true("abcd".localeCompare("abcb") > 0);
        Bridge.Test.Assert.$true("abcd".localeCompare("abce") < 0);
    },
    matchWorks: function () {
        var result = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".match(new RegExp("[A-E]", "gi"));
        Bridge.Test.Assert.areEqual(result, ["A", "B", "C", "D", "E", "a", "b", "c", "d", "e"]);
    },
    replaceWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.replaceAll("abcabcabc", "a", "x"), "xbcxbcxbc");
        Bridge.Test.Assert.areEqual(Bridge.String.replaceAll("abcabcabc", "ab", "x"), "xcxcxc");
    },
    replaceCharWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.String.replaceAll("abcabcabc", "a", "x"), "xbcxbcxbc");
    },
    replaceRegexWithReplaceTextWorks: function () {
        Bridge.Test.Assert.areEqual("abcabcabc".replace(new RegExp("a|b", "g"), "x"), "xxcxxcxxc");
    },
    replaceRegexWithReplaceCallbackWorks: function () {
        Bridge.Test.Assert.areEqual("abcabcabc".replace(new RegExp("a|b", "g"), function (s) {
            return s === "a" ? "x" : "y";
        }), "xycxycxyc");
    },
    searchWorks: function () {
        Bridge.Test.Assert.areEqual("abcabcabc".search(new RegExp("ca")), 2);
        Bridge.Test.Assert.areEqual("abcabcabc".search(new RegExp("x")), -1);
    },
    splitWithStringWorks: function () {
        Bridge.Test.Assert.areEqual("abcabcabc".split("b"), ["a", "ca", "ca", "c"]);
    },
    splitWithRegexWorks: function () {
        Bridge.Test.Assert.areEqual("abcaxcaxc".split(new RegExp("b|x", "g")), ["a", "ca", "ca", "c"]);
    },
    startsWithStringWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.startsWith("abc", "ab"));
        Bridge.Test.Assert.$false(Bridge.String.startsWith("abc", "bc"));
    },
    substrWorks: function () {
        Bridge.Test.Assert.areEqual("abcde".substr(2), "cde");
    },
    substrWithLengthWorks: function () {
        Bridge.Test.Assert.areEqual("abcde".substr(2, 2), "cd");
    },
    substringWorks: function () {
        Bridge.Test.Assert.areEqual("abcde".substring(2), "cde");
    },
    substringWithLengthWorks: function () {
        Bridge.Test.Assert.areEqual("abcde".substring(2, 4), "cd");
    },
    toLowerCaseWorks: function () {
        Bridge.Test.Assert.areEqual("ABcd".toLowerCase(), "abcd");
    },
    toUpperCaseWorks: function () {
        Bridge.Test.Assert.areEqual("ABcd".toUpperCase(), "ABCD");
    },
    toLowerWorks: function () {
        Bridge.Test.Assert.areEqual("ABcd".toLowerCase(), "abcd");
    },
    toUpperWorks: function () {
        Bridge.Test.Assert.areEqual("ABcd".toUpperCase(), "ABCD");
    },
    trimWorks: function () {
        Bridge.Test.Assert.areEqual("  abc  ".trim(), "abc");
    },
    stringEqualityWorks: function () {
        var s1 = "abc", s2 = null, s3 = null;
        Bridge.Test.Assert.$true(s1 === "abc");
        Bridge.Test.Assert.$false(s1 === "aBc");
        Bridge.Test.Assert.$false(s1 === s2);
        Bridge.Test.Assert.$true(s2 === s3);
    },
    stringInequalityWorks: function () {
        var s1 = "abc", s2 = null, s3 = null;
        Bridge.Test.Assert.$false(s1 !== "abc");
        Bridge.Test.Assert.$true(s1 !== "aBc");
        Bridge.Test.Assert.$true(s1 !== s2);
        Bridge.Test.Assert.$false(s2 !== s3);
    },
    stringIndexingWorks: function () {
        var s = "abcd";
        Bridge.Test.Assert.areEqual(Bridge.cast(s.charCodeAt(0), Bridge.Int), Bridge.cast(97, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.cast(s.charCodeAt(1), Bridge.Int), Bridge.cast(98, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.cast(s.charCodeAt(2), Bridge.Int), Bridge.cast(99, Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.cast(s.charCodeAt(3), Bridge.Int), Bridge.cast(100, Bridge.Int));
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode("a"), Bridge.getHashCode("a"));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode("b"), Bridge.getHashCode("b"));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode("a"), Bridge.getHashCode("b"));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode("a"), Bridge.getHashCode("ab"));
        Bridge.Test.Assert.$true(Bridge.cast(Bridge.getHashCode("abcdefghijklmnopq"), Bridge.Int) < 4294967295);
    },
    instanceEqualsWorks: function () {
        var r = "a";
        Bridge.Test.Assert.$true(Bridge.equals("a", r));
        Bridge.Test.Assert.$false(Bridge.equals("b", r));
        r = "b";
        Bridge.Test.Assert.$false(Bridge.equals("a", r));
        Bridge.Test.Assert.$true(Bridge.equals("b", r));
        r = "A";
        Bridge.Test.Assert.$false(Bridge.equals("a", r));
        r = "ab";
        Bridge.Test.Assert.$false(Bridge.equals("a", r));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals("a", "a"));
        Bridge.Test.Assert.$false(Bridge.equals("b", "a"));
        Bridge.Test.Assert.$false(Bridge.equals("a", "b"));
        Bridge.Test.Assert.$true(Bridge.equals("b", "b"));
        Bridge.Test.Assert.$false(Bridge.equals("a", "A"));
        Bridge.Test.Assert.$false(Bridge.equals("a", "ab"));

        //Assert.True( ((IEquatable<string>)"a").Equals("a"));
        //Assert.False(((IEquatable<string>)"b").Equals("a"));
        //Assert.False(((IEquatable<string>)"a").Equals("b"));
        //Assert.True( ((IEquatable<string>)"b").Equals("b"));
        //Assert.False(((IEquatable<string>)"a").Equals("A"));
        //Assert.False(((IEquatable<string>)"a").Equals("ab"));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abcd") === 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abcD") !== 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abcb") > 0);
        Bridge.Test.Assert.$true(Bridge.String.compare("abcd", "abce") < 0);
    },
    containsWorks: function () {
        var text = "Lorem ipsum dolor sit amet";
        Bridge.Test.Assert.$true(Bridge.String.contains(text,"Lorem"));
        Bridge.Test.Assert.$false(Bridge.String.contains(text,"lorem"));
        Bridge.Test.Assert.$true(Bridge.String.contains(text,text));
    },
    toCharArrayWorks: function () {
        var text = "Lorem sit dolor";
        Bridge.Test.Assert.areEqual(Bridge.String.toCharArray(text, 0, text.length), [76, 111, 114, 101, 109, 32, 115, 105, 116, 32, 100, 111, 108, 111, 114]);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.TimeSpanTests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.TimeSpan), "Bridge.TimeSpan");
        //Assert.False(typeof(TimeSpan).IsClass);
        //Assert.True(typeof(IComparable<TimeSpan>).IsAssignableFrom(typeof(TimeSpan)));
        //Assert.True(typeof(IEquatable<TimeSpan>).IsAssignableFrom(typeof(TimeSpan)));
        var d = new Bridge.TimeSpan();
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.TimeSpan), "d is TimeSpan");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.IComparable$1(Bridge.TimeSpan)), "d is IComparable<TimeSpan>");
        Bridge.Test.Assert.true$1(Bridge.is(d, Bridge.IEquatable$1(Bridge.TimeSpan)), "d is IEquatable<TimeSpan>");

        //var interfaces = typeof(TimeSpan).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 2);
        //Assert.True(interfaces.Contains(typeof(IComparable<DateTime>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<DateTime>)));
    },
    defaultConstructorWorks: function () {
        var time = new Bridge.TimeSpan();
        Bridge.Test.Assert.areEqual(time.getTicks(), 0);
    },
    defaultValueWorks: function () {
        var ts = Bridge.getDefaultValue(Bridge.TimeSpan);
        Bridge.Test.Assert.areEqual(ts.getTicks(), 0);
    },
    zeroWorks: function () {
        var ts = Bridge.TimeSpan.zero;
        Bridge.Test.Assert.areEqual(ts.getTicks(), 0);
    },
    creatingInstanceReturnsTimeSpanWithZeroValue: function () {
        var ts = new Bridge.TimeSpan();
        Bridge.Test.Assert.areEqual(ts.getTicks(), 0);
    },
    parameterConstructorsWorks: function () {
        var time = new Bridge.TimeSpan(34567);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(time, Object), Bridge.TimeSpan), "ticks type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 34567, "ticks value");

        time = new Bridge.TimeSpan(10, 20, 5);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(time, Object), Bridge.TimeSpan), "h, m, s type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 372050000000, "h, m, s value");

        time = new Bridge.TimeSpan(15, 10, 20, 5);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(time, Object), Bridge.TimeSpan), "d, h, m, s type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 13332050000000, "d, h, m, s value");

        time = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(time, Object), Bridge.TimeSpan), "full type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 13332050140000, "full value");
    },
    factoryMethodsWork: function () {
        var time = Bridge.TimeSpan.fromDays(3);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(time, Object), Bridge.TimeSpan), "FromDays type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 2592000000000, "FromDays value");

        time = Bridge.TimeSpan.fromHours(3);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(time, Object), Bridge.TimeSpan), "FromHours type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 108000000000, "FromHours value");

        time = Bridge.TimeSpan.fromMinutes(3);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(time, Object), Bridge.TimeSpan), "FromMinutes type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 1800000000, "FromMinutes value");

        time = Bridge.TimeSpan.fromSeconds(3);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(time, Object), Bridge.TimeSpan), "FromSeconds type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 30000000, "FromSeconds value");

        time = Bridge.TimeSpan.fromMilliseconds(3);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(time, Object), Bridge.TimeSpan), "FromMilliseconds type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 30000, "FromMilliseconds value");

        time = Bridge.TimeSpan.fromTicks(3);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(time, Object), Bridge.TimeSpan), "FromTicks type");
        Bridge.Test.Assert.areEqual$1(time.getTicks(), 3, "FromTicks value");
    },
    propertiesWork: function () {
        var time = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        Bridge.Test.Assert.areEqual(time.getDays(), 15);
        Bridge.Test.Assert.areEqual(time.getHours(), 10);
        Bridge.Test.Assert.areEqual(time.getMinutes(), 20);
        Bridge.Test.Assert.areEqual(time.getSeconds(), 5);
        Bridge.Test.Assert.areEqual(time.getMilliseconds(), 14);
        this.assertAlmostEqual(time.getTotalDays(), 15.430613587962963);
        this.assertAlmostEqual(time.getTotalHours(), 370.33472611111108);
        this.assertAlmostEqual(time.getTotalMinutes(), 22220.083566666668);
        this.assertAlmostEqual(time.getTotalSeconds(), 1333205.014);
        this.assertAlmostEqual(time.getTotalMilliseconds(), 1333205014.0);
        Bridge.Test.Assert.areEqual(time.getTicks(), 13332050140000);
    },
    compareToWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time4 = new Bridge.TimeSpan(15, 11, 20, 5, 14);
        Bridge.Test.Assert.areEqual(0, time1.compareTo(time1));
        Bridge.Test.Assert.areEqual(0, time1.compareTo(time2));
        Bridge.Test.Assert.areEqual(1, time1.compareTo(time3));
        Bridge.Test.Assert.areEqual(-1, time1.compareTo(time4));
    },
    compareWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time4 = new Bridge.TimeSpan(15, 11, 20, 5, 14);
        Bridge.Test.Assert.areEqual(0, time1.compareTo(time1));
        Bridge.Test.Assert.areEqual(0, time1.compareTo(time2));
        Bridge.Test.Assert.areEqual(1, time1.compareTo(time3));
        Bridge.Test.Assert.areEqual(-1, time1.compareTo(time4));
    },
    staticEqualsWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(15, 10, 20, 5, 14);

        Bridge.Test.Assert.$false(time1.ticks === time2.ticks);
        Bridge.Test.Assert.$true(time1.ticks === time3.ticks);
    },
    equalsWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(15, 10, 20, 5, 14);

        Bridge.Test.Assert.$false(time1.equals(time2));
        Bridge.Test.Assert.$true(time1.equals(time3));
    },
    toStringWorks: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(14, 10, 20, 5, 2);
        var time3 = new Bridge.TimeSpan(15, 11, 20, 6, 14);
        var time4 = new Bridge.TimeSpan(1, 2, 3);
        Bridge.Test.Assert.areEqual(time1.toString(), "15.10:20:05.0140000");
        Bridge.Test.Assert.areEqual(time2.toString(), "14.10:20:05.0020000");
        Bridge.Test.Assert.areEqual(time3.toString(), "15.11:20:06.0140000");
        Bridge.Test.Assert.areEqual(time4.toString(), "01:02:03");
    },
    addWorks: function () {
        var time1 = new Bridge.TimeSpan(2, 3, 4, 5, 6);
        var time2 = new Bridge.TimeSpan(3, 4, 5, 6, 7);
        var actual = time1.add(time2);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(actual, Object), Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual.getTotalMilliseconds(), 457751013, "TotalMilliseconds should be correct");
    },
    subtractWorks: function () {
        var time1 = new Bridge.TimeSpan(4, 3, 7, 2, 6);
        var time2 = new Bridge.TimeSpan(3, 4, 5, 6, 7);
        var actual = time1.subtract(time2);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(actual, Object), Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual.getTotalMilliseconds(), 82915999, "TotalMilliseconds should be correct");
    },
    durationWorks: function () {
        var time1 = new Bridge.TimeSpan(-3, -2, -1, -5, -4);
        var time2 = new Bridge.TimeSpan(2, 1, 5, 4, 3);
        var actual1 = time1.duration();
        var actual2 = time2.duration();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(time1, Object), Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual1.getTotalMilliseconds(), 266465004, "Negative should be negated");
        Bridge.Test.Assert.areEqual$1(actual2.getTotalMilliseconds(), 176704003, "Positive should be preserved");
    },
    negateWorks: function () {
        var time = new Bridge.TimeSpan(-3, 2, -1, 5, -4);
        var actual = time.negate();
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(actual, Object), Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual.getTotalMilliseconds(), 252055004, "Ticks should be correct");
    },
    assertAlmostEqual: function (d1, d2) {
        var diff = d2 - d1;
        if (diff < 0)
            diff = -diff;
        Bridge.Test.Assert.$true(diff < 1E-08);
    },
    comparisonOperatorsWork: function () {
        var time1 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time2 = new Bridge.TimeSpan(15, 10, 20, 5, 14);
        var time3 = new Bridge.TimeSpan(14, 10, 20, 5, 14);
        var time4 = new Bridge.TimeSpan(15, 11, 20, 5, 14);

        Bridge.Test.Assert.false$1(time1.ticks > time2.ticks, "> 1");
        Bridge.Test.Assert.true$1(time1.ticks > time3.ticks, "> 2");
        Bridge.Test.Assert.false$1(time1.ticks > time4.ticks, "> 3");

        Bridge.Test.Assert.true$1(time1.ticks >= time2.ticks, ">= 1");
        Bridge.Test.Assert.true$1(time1.ticks >= time3.ticks, ">= 2");
        Bridge.Test.Assert.false$1(time1.ticks >= time4.ticks, ">= 3");

        Bridge.Test.Assert.false$1(time1.ticks < time2.ticks, "< 1");
        Bridge.Test.Assert.false$1(time1.ticks < time3.ticks, "< 2");
        Bridge.Test.Assert.true$1(time1.ticks < time4.ticks, "< 3");

        Bridge.Test.Assert.true$1(time1.ticks <= time2.ticks, "<= 1");
        Bridge.Test.Assert.false$1(time1.ticks <= time3.ticks, "<= 2");
        Bridge.Test.Assert.true$1(time1.ticks <= time4.ticks, "<= 3");

        Bridge.Test.Assert.true$1(time1.ticks === time1.ticks, "== 1");
        Bridge.Test.Assert.true$1(time1.ticks === time2.ticks, "== 2");
        Bridge.Test.Assert.false$1(time1.ticks === time3.ticks, "== 3");
        Bridge.Test.Assert.false$1(time1.ticks === time4.ticks, "== 4");

        Bridge.Test.Assert.false$1(time1.ticks !== time1.ticks, "!= 1");
        Bridge.Test.Assert.false$1(time1.ticks !== time2.ticks, "!= 2");
        Bridge.Test.Assert.true$1(time1.ticks !== time3.ticks, "!= 3");
        Bridge.Test.Assert.true$1(time1.ticks !== time4.ticks, "!= 4");
    },
    additionOperatorWorks: function () {
        var time1 = new Bridge.TimeSpan(2, 3, 4, 5, 6);
        var time2 = new Bridge.TimeSpan(3, 4, 5, 6, 7);
        var actual = new Bridge.TimeSpan(time1.ticks + time2.ticks);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(actual, Object), Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual.getTotalMilliseconds(), 457751013, "TotalMilliseconds should be correct");
    },
    subtractionOperatorWorks: function () {
        var time1 = new Bridge.TimeSpan(4, 3, 7, 2, 6);
        var time2 = new Bridge.TimeSpan(3, 4, 5, 6, 7);
        var actual = new Bridge.TimeSpan(time1.ticks - time2.ticks);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(actual, Object), Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual.getTotalMilliseconds(), 82915999, "TotalMilliseconds should be correct");
    },
    unaryPlusWorks: function () {
        var time = new Bridge.TimeSpan(-3, 2, -1, 5, -4);
        var actual = new Bridge.TimeSpan(time.ticks);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(actual, Object), Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual.getTotalMilliseconds(), -252055004, "Ticks should be correct");
    },
    unaryMinusWorks: function () {
        var time = new Bridge.TimeSpan(-3, 2, -1, 5, -4);
        var actual = new Bridge.TimeSpan(-time.ticks);
        Bridge.Test.Assert.true$1(Bridge.is(Bridge.cast(actual, Object), Bridge.TimeSpan), "Should be TimeSpan");
        Bridge.Test.Assert.areEqual$1(actual.getTotalMilliseconds(), 252055004, "Ticks should be correct");
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.TupleTests', {
    tuple1Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a" } : { item1: "a" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
        }
    },
    tuple2Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b" } : { item1: "a", item2: "b" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
            Bridge.Test.Assert.areStrictEqual(t.item2, "b");
        }
    },
    tuple3Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c" } : { item1: "a", item2: "b", item3: "c" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
            Bridge.Test.Assert.areStrictEqual(t.item2, "b");
            Bridge.Test.Assert.areStrictEqual(t.item3, "c");
        }
    },
    tuple4Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d" } : { item1: "a", item2: "b", item3: "c", item4: "d" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
            Bridge.Test.Assert.areStrictEqual(t.item2, "b");
            Bridge.Test.Assert.areStrictEqual(t.item3, "c");
            Bridge.Test.Assert.areStrictEqual(t.item4, "d");
        }
    },
    tuple5Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
            Bridge.Test.Assert.areStrictEqual(t.item2, "b");
            Bridge.Test.Assert.areStrictEqual(t.item3, "c");
            Bridge.Test.Assert.areStrictEqual(t.item4, "d");
            Bridge.Test.Assert.areStrictEqual(t.item5, "e");
        }
    },
    tuple6Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
            Bridge.Test.Assert.areStrictEqual(t.item2, "b");
            Bridge.Test.Assert.areStrictEqual(t.item3, "c");
            Bridge.Test.Assert.areStrictEqual(t.item4, "d");
            Bridge.Test.Assert.areStrictEqual(t.item5, "e");
            Bridge.Test.Assert.areStrictEqual(t.item6, "f");
        }
    },
    tuple7Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
            Bridge.Test.Assert.areStrictEqual(t.item2, "b");
            Bridge.Test.Assert.areStrictEqual(t.item3, "c");
            Bridge.Test.Assert.areStrictEqual(t.item4, "d");
            Bridge.Test.Assert.areStrictEqual(t.item5, "e");
            Bridge.Test.Assert.areStrictEqual(t.item6, "f");
            Bridge.Test.Assert.areStrictEqual(t.item7, "g");
        }
    },
    tuple8Works: function () {
        for (var i = 0; i <= 1; i++) {
            var t = i === 0 ? { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g", rest: "h" } : { item1: "a", item2: "b", item3: "c", item4: "d", item5: "e", item6: "f", item7: "g", rest: "h" };
            Bridge.Test.Assert.areStrictEqual(t.item1, "a");
            Bridge.Test.Assert.areStrictEqual(t.item2, "b");
            Bridge.Test.Assert.areStrictEqual(t.item3, "c");
            Bridge.Test.Assert.areStrictEqual(t.item4, "d");
            Bridge.Test.Assert.areStrictEqual(t.item5, "e");
            Bridge.Test.Assert.areStrictEqual(t.item6, "f");
            Bridge.Test.Assert.areStrictEqual(t.item7, "g");
            Bridge.Test.Assert.areStrictEqual(t.rest, "h");
        }
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.UInt16Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(Bridge.cast(0, Bridge.Int), Object), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(Bridge.cast(0.5, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(-1, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(65536, Object), Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        //Assert.False(typeof(ushort).IsClass);
        //Assert.True(typeof(IComparable<ushort>).IsAssignableFrom(typeof(ushort)));
        //Assert.True(typeof(IEquatable<ushort>).IsAssignableFrom(typeof(ushort)));
        //Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(ushort)));
        var s = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.IComparable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(s, Bridge.IFormattable));

        //var interfaces = typeof(ushort).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 3);
        //Assert.True(interfaces.Contains(typeof(IComparable<ushort>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<ushort>)));
        //Assert.True(interfaces.Contains(typeof(IFormattable)));
    },
    castsWork: function () {
        var i1 = -1, i2 = 0, i3 = 234, i4 = 65535, i5 = 65536;
        var ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 65535, ni5 = 65536, ni6 = null;

        // TODO unchecked
        {
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -1, "-1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 65535, "65535 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 65536, "65536 unchecked");

            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni1, Bridge.Int)), -1, "nullable -1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), 0, "nullable 0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 234, "nullable 234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 65535, "nullable 65535 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni5, Bridge.Int)), 65536, "nullable 65536 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null unchecked");
        }

        //checked
        {
            //Assert.Throws<OverflowException>(() => { var x = (ushort)i1; }, "-1 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 65535, "65535 checked");
            //Assert.Throws<OverflowException>(() => { var x = (ushort)i5; }, "65536 checked");

            //Assert.Throws<OverflowException>(() => { var x = (ushort?)ni1; }, "nullable -1 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), 0, "nullable 0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 234, "nullable 234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 65535, "nullable 65535 checked");
            //Assert.Throws<OverflowException>(() => { var x = (ushort?)ni5; }, "nullable 65536 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(0, 0);
        Bridge.Test.Assert.areEqual(65535, 65535);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
        //Assert.AreEqual(((IFormattable)((ushort)0x123)).ToString("x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("23445", numberResult, 0, 65535);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 23445);

        result = Bridge.Int.tryParseInt("", numberResult, 0, 65535);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, 0, 65535);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, 0, 65535);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("32768", numberResult, 0, 65535);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 32768);

        result = Bridge.Int.tryParseInt("-1", numberResult, 0, 65535);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -1);

        result = Bridge.Int.tryParseInt("2.5", numberResult, 0, 65535);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("23445", 0, 65535), 23445);
        //Assert.Throws<FormatException>(() => ushort.Parse(""));
        //Assert.Throws<ArgumentNullException>(() => ushort.Parse(null));
        //Assert.Throws<FormatException>(() => ushort.Parse("notanumber"));
        //Assert.Throws<OverflowException>(() => ushort.Parse("65536"));
        //Assert.Throws<OverflowException>(() => ushort.Parse("-1"));
        //Assert.Throws<FormatException>(() => ushort.Parse("2.5"));
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(291, Bridge.Int)).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.UInt32Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(Bridge.cast(0, Bridge.Int), Object), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(Bridge.cast(0.5, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(-1, Object), Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(4294967296, Object), Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        //Assert.False(typeof(uint).IsClass);
        //Assert.True(typeof(IComparable<uint>).IsAssignableFrom(typeof(uint)));
        //Assert.True(typeof(IEquatable<uint>).IsAssignableFrom(typeof(uint)));
        //Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(uint)));
        var i = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.IComparable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(i, Bridge.IFormattable));

        //var interfaces = typeof(uint).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 3);
        //Assert.True(interfaces.Contains(typeof(IComparable<uint>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<uint>)));
        //Assert.True(interfaces.Contains(typeof(IFormattable)));
    },
    castsWork: function () {
        var i1 = -1, i2 = 0, i3 = 234, i4 = 4294967295, i5 = 4294967296;
        var ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 4294967295, ni5 = 4294967296, ni6 = null;

        // TODO unchecked
        //unchecked {
        Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i1, Bridge.Int), -1, "-1 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 4294967295, "4294967295 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i5, Bridge.Int), 4294967296, "4294967296 unchecked");

        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni1, Bridge.Int)), -1, "nullable -1 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), 0, "nullable 0 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 234, "nullable 234 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 4294967295, "nullable 4294967295 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni5, Bridge.Int)), 4294967296, "nullable 4294967296 unchecked");
        Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null unchecked");
        //}

        //checked
        {
            //Assert.Throws<OverflowException>(() => { var x = (uint)i1; }, "-1 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 4294967295, "4294967295 checked");
            //Assert.Throws<OverflowException>(() => { var x = (uint)i5; }, "4294967296 checked");

            //Assert.Throws<OverflowException>(() => { var x = (uint?)ni1; }, "nullable -1 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), 0, "nullable 0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 234, "nullable 234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 4294967295, "nullable 4294967295 checked");
            //Assert.Throws<OverflowException>(() => { var x = (uint?)ni5; }, "nullable 4294967296 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(0, 0);
        Bridge.Test.Assert.areEqual(4294967295, 4294967295);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
        //Assert.AreEqual(((IFormattable)((uint)0x123)).ToString("x"), "123");
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("23445", numberResult, 0, 4294967295);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 23445);

        result = Bridge.Int.tryParseInt("", numberResult, 0, 4294967295);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, 0, 4294967295);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, 0, 4294967295);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("-1", numberResult, 0, 4294967295);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -1);

        result = Bridge.Int.tryParseInt("2.5", numberResult, 0, 4294967295);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("23445", 0, 4294967295), 23445);
        //Assert.Throws<FormatException>(() => uint.Parse(""));
        //Assert.Throws<ArgumentNullException>(() => uint.Parse(null));
        //Assert.Throws<FormatException>(() => uint.Parse("notanumber"));
        //Assert.Throws<OverflowException>(() => uint.Parse("4294967296"));
        //Assert.Throws<OverflowException>(() => uint.Parse("-1"));
        //Assert.Throws<FormatException>(() => uint.Parse("2.5"));
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(291, Bridge.Int)).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.SimpleTypes.UInt64Tests', {
    typePropertiesAreCorrect: function () {
        Bridge.Test.Assert.$true(Bridge.is(Bridge.cast(Bridge.cast(0, Bridge.Int), Object), Bridge.Int));
        Bridge.Test.Assert.$false(Bridge.is(Bridge.cast(0.5, Object), Bridge.Int));
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Int), "Bridge.Int");
        //Assert.False(typeof(ulong).IsClass);
        //Assert.True(typeof(IComparable<ulong>).IsAssignableFrom(typeof(ulong)));
        //Assert.True(typeof(IEquatable<ulong>).IsAssignableFrom(typeof(ulong)));
        //Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(ulong)));
        var l = Bridge.cast(0, Bridge.Int);
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.Int));
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.IComparable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.IEquatable$1(Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.is(l, Bridge.IFormattable));

        //var interfaces = typeof(ulong).GetInterfaces();
        //Assert.AreEqual(interfaces.Length, 3);
        //Assert.True(interfaces.Contains(typeof(IComparable<ulong>)));
        //Assert.True(interfaces.Contains(typeof(IEquatable<ulong>)));
        //Assert.True(interfaces.Contains(typeof(IFormattable)));
    },
    castsWork: function () {
        var i1 = -1, i2 = 0, i3 = 234, i4 = 9223372036854775000;
        var ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 9223372036854775000, ni6 = null;

        // TODO unchecked
        {
            //Assert.True((ulong)i1 > 1e18, "-1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 9223372036854775000, "9223372036854775000 unchecked");

            //Assert.True((ulong?)ni1 > 1e18, "nullable -1 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), 0, "nullable 0 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 234, "nullable 234 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 9223372036854775000, "nullable 9223372036854775000 unchecked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null unchecked");
        }

        //checked
        {
            //Assert.Throws<OverflowException>(() => { var x = (ulong)i1; }, "-1 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i2, Bridge.Int), 0, "0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i3, Bridge.Int), 234, "234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.cast(i4, Bridge.Int), 9223372036854775000, "9223372036854775000 checked");

            //Assert.Throws<OverflowException>(() => { var x = (ulong?)ni1; }, "nullable -1 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni2, Bridge.Int)), 0, "nullable 0 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni3, Bridge.Int)), 234, "nullable 234 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni4, Bridge.Int)), 9223372036854775000, "nullable 9223372036854775000 checked");
            Bridge.Test.Assert.areStrictEqual$1(Bridge.Nullable.lift(Bridge.cast(ni6, Bridge.Int)), null, "null checked");
        }
    },
    getDefaultValue: function (T) {
        return Bridge.fn.bind(this, function () {
            return Bridge.getDefaultValue(T);
        });
    },
    defaultValueIs0: function () {
        Bridge.Test.Assert.areStrictEqual(this.getDefaultValue(Bridge.Int)(), 0);
    },
    constantsWork: function () {
        Bridge.Test.Assert.areEqual(0, 0);
    },
    formatWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
    },
    iFormattableToStringWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.format((Bridge.cast(291, Bridge.Int)), "x"), "123");
        //Assert.AreEqual(((IFormattable)((ulong)0x123)).ToString("x"), "123");
    },
    castingOfLargeValuesToUInt64Works: function () {
        var d1 = 5000000000.5, d2 = -d1;
        Bridge.Test.Assert.areEqual$1(Bridge.Int.trunc(d1), 5000000000, "Positive");
        Bridge.Test.Assert.false$1(Bridge.Int.trunc(d2) > 2147483647, "Negative");
    },
    divisionOfLargeUInt64Works: function () {
        var v1 = 50000000000, v2 = 3;
        Bridge.Test.Assert.areEqual(Bridge.Int.div(v1, v2), 16666666666);
    },
    tryParseWorks: function () {
        var numberResult = { };
        var result = Bridge.Int.tryParseInt("23445", numberResult, 0, 9007199254740991);
        Bridge.Test.Assert.$true(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 23445);

        result = Bridge.Int.tryParseInt("", numberResult, 0, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt(null, numberResult, 0, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("notanumber", numberResult, 0, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("-1", numberResult, 0, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, -1);

        result = Bridge.Int.tryParseInt("2.5", numberResult, 0, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        Bridge.Test.Assert.areEqual(numberResult.v, 0);

        result = Bridge.Int.tryParseInt("100000000000000000000", numberResult, 0, 9007199254740991);
        Bridge.Test.Assert.$false(result);
        //Assert.AreEqual(numberResult, 100000000000000000000);
    },
    parseWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.Int.parseInt("23445", 0, 9007199254740991), 23445);
        //Assert.Throws<FormatException>(() => ulong.Parse(""));
        //Assert.Throws<ArgumentNullException>(() => ulong.Parse(null));
        //Assert.Throws<FormatException>(() => ulong.Parse("notanumber"));
        //Assert.Throws<OverflowException>(() => ulong.Parse("-1"));
        //Assert.Throws<FormatException>(() => ulong.Parse("2.5"));
        //Assert.Throws<OverflowException>(() => ulong.Parse("100000000000000000000"));
    },
    toStringWithoutRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(), "123");
    },
    toStringWithRadixWorks: function () {
        Bridge.Test.Assert.areEqual((Bridge.cast(123, Bridge.Int)).toString(10), "123");
        Bridge.Test.Assert.areEqual((Bridge.cast(291, Bridge.Int)).toString(16), "123");
    },
    getHashCodeWorks: function () {
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(0, Bridge.Int))));
        Bridge.Test.Assert.areEqual(Bridge.getHashCode((Bridge.cast(1, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
        Bridge.Test.Assert.areNotEqual(Bridge.getHashCode((Bridge.cast(0, Bridge.Int))), Bridge.getHashCode((Bridge.cast(1, Bridge.Int))));
    },
    equalsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(0, Bridge.Int), Object)));
        Bridge.Test.Assert.$false(Bridge.equals((Bridge.cast(0, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
        Bridge.Test.Assert.$true(Bridge.equals((Bridge.cast(1, Bridge.Int)), Bridge.cast(Bridge.cast(1, Bridge.Int), Object)));
    },
    iEquatableEqualsWorks: function () {
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast(1, Bridge.Int)), Bridge.cast(1, Bridge.Int)));

        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)));
        Bridge.Test.Assert.$false(Bridge.equalsT((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
        Bridge.Test.Assert.$true(Bridge.equalsT((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IEquatable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)));
    },
    compareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(1, Bridge.Int)), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast(0, Bridge.Int)), Bridge.cast(1, Bridge.Int)) < 0);
    },
    iComparableCompareToWorks: function () {
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) === 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(1, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(0, Bridge.Int)) > 0);
        Bridge.Test.Assert.$true(Bridge.compare((Bridge.cast((Bridge.cast(0, Bridge.Int)), Bridge.IComparable$1(Bridge.Int))), Bridge.cast(1, Bridge.Int)) < 0);
    }
});

Bridge.define('Bridge.ClientTest.Text.RegularExpressions.RegexTests', {
    statics: {
        escapeWorks: function () {
            var escaped = Bridge.regexpEscape("[-/\\^$*+?.()|[]{}]");
            Bridge.Test.Assert.areEqual(escaped, "\\[\\-\\/\\\\\\^\\$\\*\\+\\?\\.\\(\\)\\|\\[\\]\\{\\}\\]");
        }
    },
    typePropertiesAreCorrect: function () {
        var re = new RegExp("");
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(RegExp), "RegExp");
        //Assert.AreEqual(typeof(Regex).IsClass, true);
        Bridge.Test.Assert.$true(Bridge.is(re, RegExp));
    },
    stringOnlyConstructorWorks: function () {
        var re = new RegExp("test123");
        Bridge.Test.Assert.areEqual(re.source, "test123");
        Bridge.Test.Assert.$false(re.global);
    },
    constructorWithFlagsWorks: function () {
        var re = new RegExp("test123", "g");
        Bridge.Test.Assert.areEqual(re.source, "test123");
        Bridge.Test.Assert.$true(re.global);
    },
    globalFlagWorks: function () {
        Bridge.Test.Assert.$false(new RegExp("x", "").global);
        Bridge.Test.Assert.$true(new RegExp("x", "g").global);
    },
    ignoreCaseFlagWorks: function () {
        Bridge.Test.Assert.$false(new RegExp("x", "").ignoreCase);
        Bridge.Test.Assert.$true(new RegExp("x", "i").ignoreCase);
    },
    multilineFlagWorks: function () {
        Bridge.Test.Assert.$false(new RegExp("x", "").multiline);
        Bridge.Test.Assert.$true(new RegExp("x", "m").multiline);
    },
    patternPropertyWorks: function () {
        Bridge.Test.Assert.areEqual(new RegExp("test123", "").source, "test123");
    },
    sourcePropertyWorks: function () {
        Bridge.Test.Assert.areEqual(new RegExp("test123", "").source, "test123");
    },
    execWorks: function () {
        var re = new RegExp("a|b", "g");
        var m = re.exec("xaybz");
        //Assert.AreEqual(m.Index, 1);
        Bridge.Test.Assert.areEqual(m.length, 1);
        Bridge.Test.Assert.areEqual(m[0], "a");
    },
    lastIndexWorks: function () {
        var re = new RegExp("a|b", "g");
        re.exec("xaybz");
        Bridge.Test.Assert.areEqual(re.lastIndex, 2);
    },
    testWorks: function () {
        Bridge.Test.Assert.$true(new RegExp("a|b").test("xaybz"));
        Bridge.Test.Assert.$false(new RegExp("c").test("xaybz"));
    }
});

Bridge.define('Bridge.ClientTest.Text.StringBuilderTests', {
    typePropertiesAreCorrect: function () {
        var sb = new Bridge.Text.StringBuilder();
        //Assert.AreEqual(typeof(StringBuilder). FullName, "ss.StringBuilder");
        Bridge.Test.Assert.areEqual(Bridge.getTypeName(Bridge.Text.StringBuilder), "Bridge.Text.StringBuilder");
        //Assert.True(typeof(StringBuilder). IsClass);
        Bridge.Test.Assert.$true(Bridge.is(sb, Bridge.Text.StringBuilder));
    },
    defaultConstructorWorks: function () {
        var sb = new Bridge.Text.StringBuilder();
        Bridge.Test.Assert.areEqual$1(sb.toString(), "", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 0, "Length");
    },
    constructorWithCapacityWorks: function () {
        var sb = new Bridge.Text.StringBuilder("", 55);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 0, "Length");
    },
    initialTextConstructorWorks: function () {
        var sb = new Bridge.Text.StringBuilder("some text");
        Bridge.Test.Assert.areEqual$1(sb.toString(), "some text", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 9, "Length");
    },
    initialTextConstructorWithCapacityWorks: function () {
        var sb = new Bridge.Text.StringBuilder("some text", 55);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "some text", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 9, "Length");
    },
    substringConstructorWorks: function () {
        var sb = new Bridge.Text.StringBuilder("some text", 5, 3);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "tex", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 3, "Length");
    },
    appendBoolWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.append(true) === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|true", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 5, "Length");
    },
    appendCharWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.append(String.fromCharCode(99)) === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|c", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 2, "Length");
    },
    appendIntWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.append(123) === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|123", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 4, "Length");
    },
    appendDoubleWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.append(123.0) === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|123", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 4, "Length");
    },
    appendObjectWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.append(new Bridge.ClientTest.Text.StringBuilderTests.SomeClass()) === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|some text", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 10, "Length");
    },
    appendStringWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.append("some text") === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|some text", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 10, "Length");
    },
    appendLineWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.appendLine() === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|\r\n", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 3, "Length");
    },
    appendLineStringWorks: function () {
        var sb = new Bridge.Text.StringBuilder("|");
        Bridge.Test.Assert.$true(sb.appendLine("some text") === sb);
        Bridge.Test.Assert.areEqual$1(sb.toString(), "|some text\r\n", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 12, "Length");
    },
    clearWorks: function () {
        var sb = new Bridge.Text.StringBuilder("some text");
        sb.clear();
        Bridge.Test.Assert.areEqual$1(sb.toString(), "", "Text");
        Bridge.Test.Assert.areEqual$1(sb.getLength(), 0, "Length");
    },
    toStringWorks: function () {
        // Yes, this is tested by every other test as well. Included for completeness only
        var sb = new Bridge.Text.StringBuilder("some text");
        Bridge.Test.Assert.areEqual(sb.toString(), "some text");
    },
    lengthPropertyWorks: function () {
        // Yes, this is tested by every other test as well. Included for completeness only
        var sb = new Bridge.Text.StringBuilder("some text");
        Bridge.Test.Assert.areEqual(sb.getLength(), 9);
    }
});

Bridge.define('Bridge.ClientTest.Text.StringBuilderTests.SomeClass', {
    toString: function () {
        return "some text";
    }
});