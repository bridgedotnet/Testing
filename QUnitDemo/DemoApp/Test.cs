using System;
using Bridge;
using Bridge.Html5;
using Bridge.QUnit1;

namespace DemoApp
{
    [FileName("tests.js")]
    public class Test
    {
        [Ready]
        public static void RunTests()
        {
            QUnit.Test("Method GetPerson()", TestGetPerson);
            QUnit.Test("Method GetDoubleCount()", TestGetDoubleCount);

            QUnit.Test("DOM create label", TestCreateLabel);
            QUnit.Test("DOM Person label", TestPersonLabel);
            QUnit.Test("DOM Count label", TestCountLabel);
        }

        #region Method tests

        public static void TestGetPerson(Assert assert)
        {
            var person = App.GetPerson(55);

            assert.Expect(4);

            assert.Ok(person != null, "Person created");
            assert.DeepEqual(person.Id, 55, "person.Id = 55");
            assert.DeepEqual(person.Name, "Frank", "person.Name = 'Frank'");
            assert.DeepEqual(person.Company, "ABC Tech", "person.Company = 'ABC Tech'");
        }

        public static void TestGetDoubleCount(Assert assert)
        {
            assert.Expect(2);

            assert.Throws(() => { App.GetDoubleCount(null); }, "Throws exception on null argument");

            var person = App.GetPerson(55);
            var sum = App.GetDoubleCount(person);

            assert.DeepEqual(sum, 154, "sum = 154");
        }

        #endregion Method tests

        #region DOM tests

        private static void TestCreateLabel(Assert assert)
        {
            assert.Expect(6);

            var fixture = EnsureTestFixture();

            var label = App.CreateLabelElement("someLabel", "Title", "10px", true, HTMLColor.Blue);
            assert.Ok(label != null, "label created");

            fixture.AppendChild(label);
            var foundLabel = Document.GetElementById<LabelElement>("someLabel");

            assert.Ok(foundLabel != null, "foundLabel");
            assert.DeepEqual(foundLabel.InnerHTML, "Title", "foundLabel.innerHtml = 'Title'");
            assert.DeepEqual(foundLabel.Style.Color, HTMLColor.Blue, "foundLabel.Style.Color = Blue");
            assert.DeepEqual(foundLabel.Style.Margin, "10px", "foundLabel.Style.Margin = '10px'");
            assert.DeepEqual(foundLabel.Style.FontWeight, "bold", "foundLabel.Style.FontWeight = 'bold'");
        }

        private static void TestPersonLabel(Assert assert)
        {
            assert.Expect(2);

            var fixture = EnsureTestFixture();

            var person = App.GetPerson(55);

            App.CreatePersonUIElements(fixture, person);

            var lblPersonCount = Document.GetElementById<LabelElement>("lblPersonCount");
            assert.Ok(lblPersonCount != null, "lblPersonCount created");
            assert.DeepEqual(lblPersonCount.InnerHTML, "77", "lblPersonCount = '77'");
        }

        private static void TestCountLabel(Assert assert)
        {
            assert.Expect(2);

            var fixture = EnsureTestFixture();

            var person = App.GetPerson(55);

            App.CreatePersonUIElements(fixture, person);

            var lblPersonName = Document.GetElementById<LabelElement>("lblPersonName");

            assert.Ok(lblPersonName != null, "lblPersonName created");
            assert.DeepEqual(lblPersonName.InnerHTML, "Frank", "lblPersonName = 'Frank'");
        }

        #endregion DOM tests

        /// <summary>
        /// Ensures the div element with qunit-fixture exists.
        /// QUnit automatically cleans qunit-fixture div after each test. You should only rely on the fixture markup, inside the #qunit-fixture element.
        /// </summary>
        /// <returns></returns>
        private static DivElement EnsureTestFixture()
        {
            var fixture = Bridge.Html5.Document.GetElementById<DivElement>("qunit-fixture");

            if (fixture == null)
            {
                fixture = new DivElement()
                {
                    Id = "qunit-fixture"
                };

                Document.Body.AppendChild(fixture);
            }

            return fixture;
        }
    }
}
