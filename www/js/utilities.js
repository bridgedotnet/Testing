/* global Bridge */

/** @namespace ClientTestLibrary.Utilities */

/**
 * @public
 * @class ClientTestLibrary.Utilities.BrowserHelper
 */
Bridge.define('ClientTestLibrary.Utilities.BrowserHelper', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Utilities.BrowserHelper
         * @memberof ClientTestLibrary.Utilities.BrowserHelper
         * @return  {boolean}        
         */
        isPhantomJs: function () {
            return Bridge.String.contains(navigator.userAgent,"PhantomJS");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Utilities.BrowserHelper
         * @memberof ClientTestLibrary.Utilities.BrowserHelper
         * @return  {string}        
         */
        getBrowserInfo: function () {
            var userAgent = navigator.userAgent;
            var appVersion = navigator.appVersion;
            var product = navigator.product;
            var appName = navigator.appName;
            var appCodeName = navigator.appCodeName;

            return Bridge.String.format("userAgent:{0} appVersion:{1} product:{2} appName:{3} appCodeName:{4}", userAgent, appVersion, product, appName, appCodeName);
        }
    }
});

/**
 * @public
 * @class ClientTestLibrary.Utilities.Group
 */
Bridge.define('ClientTestLibrary.Utilities.Group', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Utilities.Group
         * @memberof ClientTestLibrary.Utilities.Group
         * @return  {Bridge.List$1}        
         */
        getGroups: function () {
            var groups = new Bridge.List$1(ClientTestLibrary.Utilities.Group)();
            groups.add(Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "A", 
                setLimit: 1000
            } ));
            groups.add(Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "B", 
                setLimit: 400
            } ));
            groups.add(Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "C", 
                setLimit: 800
            } ));
            groups.add(Bridge.merge(new ClientTestLibrary.Utilities.Group(), {
                setName: "D", 
                setLimit: 200
            } ));

            return groups;
        }
    },
    config: {
        properties: {
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Utilities.Group
             * @memberof ClientTestLibrary.Utilities.Group
             * @function getName
             * @return  {string}        
             */
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Utilities.Group
             * @memberof ClientTestLibrary.Utilities.Group
             * @function setName
             * @param   {string}    value    
             * @return  {void}               
             */
            Name: null,
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Utilities.Group
             * @memberof ClientTestLibrary.Utilities.Group
             * @function getLimit
             * @return  {number}        
             */
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Utilities.Group
             * @memberof ClientTestLibrary.Utilities.Group
             * @function setLimit
             * @param   {number}    value    
             * @return  {void}               
             */
            Limit: 0
        }
    }
});

/**
 * @public
 * @class ClientTestLibrary.Utilities.Person
 */
Bridge.define('ClientTestLibrary.Utilities.Person', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Utilities.Person
         * @memberof ClientTestLibrary.Utilities.Person
         * @return  {Bridge.List$1}        
         */
        getPersons: function () {
            var persons = new Bridge.List$1(ClientTestLibrary.Utilities.Person)();

            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 1, 
                setName: "Frank", 
                setCity: "Edmonton", 
                setCount: 300, 
                setGroup: "A"
            } ));
            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 2, 
                setName: "Zeppa", 
                setCity: "Tokyo", 
                setCount: 100, 
                setGroup: "C"
            } ));
            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 3, 
                setName: "John", 
                setCity: "Lisbon", 
                setCount: 700, 
                setGroup: "B"
            } ));
            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 4, 
                setName: "Billy", 
                setCity: "Paris", 
                setCount: 500, 
                setGroup: "C"
            } ));
            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 5, 
                setName: "Dora", 
                setCity: "Budapest", 
                setCount: 50, 
                setGroup: "B"
            } ));
            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 6, 
                setName: "Ian", 
                setCity: "Rome", 
                setCount: 550, 
                setGroup: "B"
            } ));
            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 7, 
                setName: "Mary", 
                setCity: "Dortmund", 
                setCount: 700, 
                setGroup: "B"
            } ));
            persons.add(Bridge.merge(new ClientTestLibrary.Utilities.Person(), {
                setID: 8, 
                setName: "Nemo", 
                setCity: "Ocean", 
                setCount: 3000, 
                setGroup: null
            } ));

            return persons;
        }
    },
    config: {
        properties: {
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Utilities.Person
             * @memberof ClientTestLibrary.Utilities.Person
             * @function getID
             * @return  {number}        
             */
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Utilities.Person
             * @memberof ClientTestLibrary.Utilities.Person
             * @function setID
             * @param   {number}    value    
             * @return  {void}               
             */
            ID: 0,
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Utilities.Person
             * @memberof ClientTestLibrary.Utilities.Person
             * @function getName
             * @return  {string}        
             */
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Utilities.Person
             * @memberof ClientTestLibrary.Utilities.Person
             * @function setName
             * @param   {string}    value    
             * @return  {void}               
             */
            Name: null,
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Utilities.Person
             * @memberof ClientTestLibrary.Utilities.Person
             * @function getCity
             * @return  {string}        
             */
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Utilities.Person
             * @memberof ClientTestLibrary.Utilities.Person
             * @function setCity
             * @param   {string}    value    
             * @return  {void}               
             */
            City: null,
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Utilities.Person
             * @memberof ClientTestLibrary.Utilities.Person
             * @function getCount
             * @return  {number}        
             */
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Utilities.Person
             * @memberof ClientTestLibrary.Utilities.Person
             * @function setCount
             * @param   {number}    value    
             * @return  {void}               
             */
            Count: 0,
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Utilities.Person
             * @memberof ClientTestLibrary.Utilities.Person
             * @function getGroup
             * @return  {string}        
             */
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Utilities.Person
             * @memberof ClientTestLibrary.Utilities.Person
             * @function setGroup
             * @param   {string}    value    
             * @return  {void}               
             */
            Group: null
        }
    }
});

/**
 * @public
 * @class ClientTestLibrary.Utilities.TypeHelper
 */
Bridge.define('ClientTestLibrary.Utilities.TypeHelper', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Utilities.TypeHelper
         * @memberof ClientTestLibrary.Utilities.TypeHelper
         * @param   {Object}    o    
         * @return  {string}         
         */
        getTypeName: function (o) {
            return Bridge.getTypeName(o);
            //return Script.Get<string>("o.__proto__.$$name");
        }
    }
});