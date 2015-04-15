// For more information please visit  http://bridge.net/kb/bridge-qunit-sample-application/

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

