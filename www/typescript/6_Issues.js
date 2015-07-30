/// <reference path="..\..\www\qunit\qunit.d.ts" />
/// <reference path="..\..\www\typescript\bridge.d.ts" />
QUnit.module("TypeScript - Issues");

QUnit.test("#336", function (assert) {
    var l1 = new (Bridge.List$1(String))(["4"]);
    var l2 = new (Bridge.List$1(String))(["1", "2"]);

    l1.insertRange(0, l2);
    assert.deepEqual(l1.toArray(), ["1", "2", "4"], "InsertRange works (1)");
});
