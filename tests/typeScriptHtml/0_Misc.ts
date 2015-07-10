/// <reference path="..\..\www\qunit\qunit.d.ts" />
/// <reference path="..\..\www\typescript\bridge.d.ts" />
/// <reference path="..\..\www\typescript\misc.a.d.ts" />
/// <reference path="..\..\www\typescript\misc.b.d.ts" />

QUnit.module("TypeScript - Misc");
QUnit.test("#290", function (assert) {
    var c1 = new Misc.A.Class1();
    var c2 = new Misc.B.Class2();

    assert.deepEqual(c1.getInt(3), 3, "Misc.A.Class1.getInt");
    assert.deepEqual(c2.getInt(6), 6, "Use class declared in another namespace");
});

QUnit.test("#281", function (assert) {
    var t = new Misc.A.EnumTest();

    assert.deepEqual(t.doSomething(Misc.A.EnumTest.EnumA.m2), Misc.A.EnumTest.EnumA.m2, "Use enum declared inside a class");
});
