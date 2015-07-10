/// <reference path="..\..\www\qunit\qunit.d.ts" />
/// <reference path="..\..\www\typescript\bridge.d.ts" />
/// <reference path="..\..\www\typescript\generics.d.ts" />

QUnit.module("TypeScript - Generics");
QUnit.test("Check predefined generic instances", function (assert) {

    // TODO How to create generic instance given by the d.ts
    var g1 = Generics.implementation.simpleGenericInt;
    QUnit.deepEqual(g1.getSomething(5), 5, "simpleGenericInt");

    var g2 = Generics.implementation.simpleDoubleGenericIntString;
    QUnit.deepEqual(g2.getSomething(5), 5, "simpleDoubleGenericIntString - int");
    QUnit.deepEqual(g2.getSomethingMore("25"), "25", "simpleDoubleGenericIntString - string");

    var g3 = Generics.implementation.genericINamedEntity;
    var i3 = new Generics.NamedEntity();
    i3.setName$1("Dove");
    var r3 = g3.getSomething(i3);
    QUnit.deepEqual(r3, i3, "genericINamedEntity");
    QUnit.deepEqual(r3 instanceof Generics.INamedEntity, true, "genericINamedEntity instance of INameEntity");
    QUnit.deepEqual(r3 instanceof Generics.NamedEntity, true, "genericINamedEntity instance of NameEntity");

    var g4 = Generics.implementation.genericNamedEntity;
    var i4 = new Generics.NamedEntity();
    i4.setName$1("Eagle");
    var r4 = g4.getSomething(i4);
    QUnit.deepEqual(r4, i4, "genericNamedEntity");
    QUnit.deepEqual(r4 instanceof Generics.INamedEntity, true, "genericNamedEntity instance of INameEntity");
    QUnit.deepEqual(r4 instanceof Generics.NamedEntity, true, "genericNamedEntity instance of NameEntity");

    var g5 = Generics.implementation.genericClassObject;
    var i5: any = "class object";
    var r5 = g5.getSomething(i5);
    QUnit.deepEqual(r5, i5, "genericClassObject");
    // TODO #296
    //QUnit.deepEqual(r5 instanceof Object, true, "genericClassObject instance of Object");

    var g6 = Generics.implementation.genericClassNamedEntity;
    var i6 = new Generics.NamedEntity();
    i6.setName$1("Penguin");
    var r6 = g6.getSomething(i6);
    QUnit.deepEqual(r6, i6, "genericClassNamedEntity");
    QUnit.deepEqual(r6 instanceof Generics.INamedEntity, true, "genericClassNamedEntity instance of INameEntity");
    QUnit.deepEqual(r6 instanceof Generics.NamedEntity, true, "genericClassNamedEntity instance of NameEntity");

    var g7 = Generics.implementation.genericNew;
    var i7 = new Generics.NewClass();
    i7.data = 700;
    var r7 = g7.getSomething(i7);
    QUnit.deepEqual(r7, i7, "genericNew");
    QUnit.deepEqual(r7 instanceof Generics.NewClass, true, "genericNew instance of NewClass");

    var g8 = Generics.implementation.genericNewAndClass;
    var i8 = new Generics.NewClass();
    i8.data = 800;
    var r8 = g8.getSomething(i8);
    QUnit.deepEqual(r8, i8, "genericNewAndClass");
    QUnit.deepEqual(r8 instanceof Generics.NewClass, true, "genericNewAndClass instance of NewClass");
});
