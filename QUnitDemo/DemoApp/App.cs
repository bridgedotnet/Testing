using System;
using Bridge;
using Bridge.Html5;

namespace DemoApp
{
    public class App
    {
        [Ready]
        public static void Main()
        {
            var person = GetPerson(55);

            var div = new DivElement();
            Document.Body.AppendChild(div);

            var labelCount = App.CreatePersonUIElements(div, person);

            var sum = App.GetDoubleCount(person);
            labelCount.InnerHTML = sum.ToString();
        }

        public static LabelElement CreatePersonUIElements(DivElement root, Person person)
        {
            root.AppendChild(App.CreateLabelElement(null, "Person:", "5px", true, HTMLColor.Black));

            root.AppendChild(App.CreateLabelElement("lblPersonName", person.Name, null, false, HTMLColor.Blue));

            root.AppendChild(App.CreateLabelElement(null, "Count:", "5px", true, HTMLColor.Black));

            var labelPersonCount = App.CreateLabelElement("lblPersonCount", person.Count.ToString(), null, false, HTMLColor.Blue);
            root.AppendChild(labelPersonCount);

            return labelPersonCount;
        }

        public static LabelElement CreateLabelElement(string id, string title, string margin, bool isBold, HTMLColor color)
        {
            return new LabelElement()
            {
                Id = id,
                InnerHTML = title,
                Style =
                {
                    Margin = margin ?? string.Empty,
                    FontWeight = isBold ? "bold" : string.Empty,
                    Color = color
                }
            };
        }

        public static Person GetPerson(int id)
        {
            return new Person
            {
                Id = id,
                Name = "Frank",
                Company = "ABC Tech",
                Count = 77
            };
        }

        public static int GetDoubleCount(Person person)
        {
            if (person == null)
            {
                throw new ArgumentNullException("person");
            }

            return person.Count * 2;
        }
    }

    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Company = "CompanyX";
        public int Count;
    }
}

