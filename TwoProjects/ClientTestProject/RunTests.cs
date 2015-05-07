using Bridge;
using Bridge.Html5;
using Bridge.QUnit;

using BridgeProject;

namespace ClientTestProject
{
    public class RunTests
    {
        [Ready]
        public void Run()
        {
            QUnit.Module("TestA");
            QUnit.Test("First test", TestA.Test1);
        }
    }
}
