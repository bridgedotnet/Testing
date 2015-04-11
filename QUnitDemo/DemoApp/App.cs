using System;
using Bridge;
using Bridge.Html5;

namespace DemoApp
{
    [FileName("app.js")]
    public class App
    {
        [Ready]
        public static void Main()
        {
            var personApplication = new PersonApplication(Document.Body);

            personApplication.RenderPerson();
        }
    }
}

