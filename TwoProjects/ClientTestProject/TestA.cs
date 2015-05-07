using Bridge;
using Bridge.QUnit;

using BridgeProject;

namespace ClientTestProject
{
    public class TestA
    {
        public static void Test1(Assert assert)
        {
            var a = new A();

            assert.Equal(a.GetInt("1"), 1, "Gets 1 from '1'");
            assert.Equal(a.GetInt("12"), 1, "Gets 2 from '2'");
        }
    }
}
