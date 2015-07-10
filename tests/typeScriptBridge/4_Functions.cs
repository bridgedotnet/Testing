using System.Collections.Generic;

namespace Functions
{
    public class Parameters
    {
        // TODO #292
        public int GetSomething(int i = 5)
        {
            return i;
        }

        // TODO #293 not compiling
        //public void Join(params int[] numbers)
        //{

        //}

        //public void CheckJoinCall(params int[] numbers)
        //{
        //    Join(1, 2, 3);
        //}
    }

    public class Delegates
    {
        public delegate void VoidDelegate();
        public delegate void StringDelegate(string s);
        public delegate int StringDelegateIntResult(string s);
    }

    // TODO
    public interface DelegateInterface
    {
        event Delegates.VoidDelegate MethodVoidDelegate;
        event Delegates.StringDelegate MethodStringDelegate;
        event Delegates.StringDelegateIntResult MethodStringDelegateIntResult;
    }

    public class DelegateClass
    {
        public Delegates.VoidDelegate MethodVoidDelegate;
        public Delegates.StringDelegate MethodStringDelegate;
        public Delegates.StringDelegateIntResult MethodStringDelegateIntResult;

    }
}

