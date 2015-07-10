using System.Collections.Generic;

namespace Generics
{
    // TODO Check reserved words
    public class SimpleGeneric<T>
    {
        public T GetSomething(T input)
        {
            return input;
        }

        public static SimpleGeneric<T> GetInstance()
        {
            return default(SimpleGeneric<T>);
        }
    }

    public class SimpleDoubleGeneric<T, K>
    {
        public T GetSomething(T input)
        {
            return input;
        }

        public K GetSomethingMore(K input)
        {
            return input;
        }
    }

    public class INamedEntity
    {
        string Name { get; set; }
    }

    public class NamedEntity : INamedEntity
    {
        public string Name { get; set; }
    }

    public class GenericINamedEntity<T> where T : INamedEntity
    {
        public T GetSomething(T input)
        {
            return input;
        }
    }

    public class GenericNamedEntity<T> where T : NamedEntity
    {
        public T GetSomething(T input)
        {
            return input;
        }
    }

    public class GenericClass<T> where T : class
    {
        public T GetSomething(T input)
        {
            return input;
        }
    }

    public class GenericStruct<T> where T : struct
    {
        public T GetSomething(T input)
        {
            return input;
        }
    }

    public class GenericNew<T> where T : new()
    {
        public T GetSomething(T input)
        {
            return input;
        }
    }

    public class GenericNewAndClass<T> where T : class, new()
    {
        public T GetSomething(T input)
        {
            return input;
        }
    }

    public class NewClass
    {
        public int Data;
        public NewClass()
        {
            this.Data = 30;
        }
    }

    public class implementation
    {
        public static SimpleGeneric<int> SimpleGenericInt = new SimpleGeneric<int>();
        public static SimpleDoubleGeneric<int, string> SimpleDoubleGenericIntString = new SimpleDoubleGeneric<int, string>();
        public static GenericINamedEntity<INamedEntity> GenericINamedEntity = new GenericINamedEntity<INamedEntity>();
        public static GenericNamedEntity<NamedEntity> GenericNamedEntity = new GenericNamedEntity<NamedEntity>();
        public static GenericClass<object> GenericClassObject = new GenericClass<object>();
        public static GenericClass<NamedEntity> GenericClassNamedEntity = new GenericClass<NamedEntity>();
        public static GenericNew<NewClass> GenericNew = new GenericNew<NewClass>();
        public static GenericNewAndClass<NewClass> GenericNewAndClass = new GenericNewAndClass<NewClass>();
    }
}

