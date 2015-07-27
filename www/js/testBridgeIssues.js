/* global Bridge */

/** @namespace ClientTestLibrary */

/**
 * @class ClientTestLibrary.Bridge169
 */
Bridge.define('ClientTestLibrary.Bridge169', {
    statics: {
        /**
         * @static
         * @public
         * @memberof ClientTestLibrary.Bridge169
         * @default 0
         * @type number
         */
        number: 0,
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Bridge169
         * @memberof ClientTestLibrary.Bridge169
         * @return  {void}        
         */
        m1: function () {
            (function () {
                ClientTestLibrary.Bridge169.number = 1;
            })();
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Bridge169
         * @memberof ClientTestLibrary.Bridge169
         * @return  {void}        
         */
        m2: function () {
            (function () {
                return ClientTestLibrary.Bridge169.number = 2;
            })();
        }
    }
});

/**
 * @abstract
 * @class ClientTestLibrary.Bridge240A
 */
Bridge.define('ClientTestLibrary.Bridge240A', {
    config: {
        properties: {
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Bridge240A
             * @memberof ClientTestLibrary.Bridge240A
             * @function getData
             * @return  {number}        
             */
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Bridge240A
             * @memberof ClientTestLibrary.Bridge240A
             * @function setData
             * @param   {number}    value    
             * @return  {void}               
             */
            Data: 0
        }
    }
});

/**
 * @class ClientTestLibrary.Bridge240B
 * @augments ClientTestLibrary.Bridge240A
 */
Bridge.define('ClientTestLibrary.Bridge240B', {
    inherits: [ClientTestLibrary.Bridge240A],
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Bridge240B
     * @memberof ClientTestLibrary.Bridge240B
     * @return  {string}        
     */
    getString: function () {
        this.setData(this.getData()+1);
        return "B";
    }
});

/**
 * @class ClientTestLibrary.Bridge266A
 */
Bridge.define('ClientTestLibrary.Bridge266A', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Bridge266A
         * @memberof ClientTestLibrary.Bridge266A
         * @return  {Object}        
         */
        test: function () {
            // Nothing gets written for Class1 in the output JavaScript due to the "new object()" argument.
            // If null is used instead (as commented-out) then it works as expected.
            // No compile error.
            return ClientTestLibrary.Bridge266B.test("test", { });
            //Bridge266B.Test("test", null);
        }
    }
});

/**
 * @class ClientTestLibrary.Bridge266B
 */
Bridge.define('ClientTestLibrary.Bridge266B', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Bridge266B
         * @memberof ClientTestLibrary.Bridge266B
         * @param   {string}    arg1    
         * @param   {Object}    arg2    
         * @return  {Object}            
         */
        test: function (arg1, arg2) {
            return arg2;
        }
    }
});

/**
 * @class ClientTestLibrary.Bridge272
 */
Bridge.define('ClientTestLibrary.Bridge272', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Bridge272
         * @memberof ClientTestLibrary.Bridge272
         * @param   {number}    i    
         * @return  {number}         
         */
        test: function (i) {
            return i;
        }
    }
});

/**
 * @public
 * @class number
 */
Bridge.define('ClientTestLibrary.Bridge272.MyEnum', {
    statics: {
        /**
         * @static
         * @public
         * @memberof number
         * @constant
         * @default 1
         * @type number
         */
        abc: 1,
        /**
         * @static
         * @public
         * @memberof number
         * @constant
         * @default 2
         * @type number
         */
        def: 2,
        /**
         * @static
         * @public
         * @memberof number
         * @constant
         * @default 3
         * @type number
         */
        ghi: 3
    }
});

/**
 * @class ClientTestLibrary.Bridge277
 */
Bridge.define('ClientTestLibrary.Bridge277', {
    statics: {
        /**
         * @static
         * @public
         * @memberof ClientTestLibrary.Bridge277
         * @constant
         * @default 0
         * @type ClientTestLibrary.Bridge277
         */
        $int: 0
    }
});

/**
 * @class ClientTestLibrary.Bridge294
 */
Bridge.define('ClientTestLibrary.Bridge294', {
    /**
     * @instance
     * @private
     * @readonly
     * @memberof ClientTestLibrary.Bridge294
     * @type string
     */
    name: null,
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Bridge294
     * @memberof ClientTestLibrary.Bridge294
     * @param   {string}    name    
     * @return  {void}              
     */
    constructor: function (name) {
        this.name = name;
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Bridge294
     * @memberof ClientTestLibrary.Bridge294
     * @return  {string}        
     */
    getName: function () {
        return this.name;
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Bridge294
     * @memberof ClientTestLibrary.Bridge294
     * @param   {Function}    T    
     * @return  {string}           
     */
    getNameThroughGeneric: function (T) {
        return Bridge.fn.bind(this, function () {
            return this.name;
        });
    }
});

/**
 * @public
 * @class ClientTestLibrary.Bridge305
 * @implements  Bridge.IEnumerable$1
 */
Bridge.define('ClientTestLibrary.Bridge305', {
    inherits: [Bridge.IEnumerable$1(String)],
    config: {
        properties: {
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Bridge305
             * @memberof ClientTestLibrary.Bridge305
             * @function getItems
             * @return  {Bridge.List$1}        
             */
            /**
             * @instance
             * @private
             * @this ClientTestLibrary.Bridge305
             * @memberof ClientTestLibrary.Bridge305
             * @function setItems
             * @param   {Bridge.List$1}    value    
             * @return  {void}                      
             */
            Items: null
        }
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Bridge305
     * @memberof ClientTestLibrary.Bridge305
     * @param   {Array.<string>}    items    
     * @return  {void}                       
     */
    constructor: function (items) {
        this.setItems(new Bridge.List$1(String)(items));
    },
    /**
     * @instance
     * @this ClientTestLibrary.Bridge305
     * @memberof ClientTestLibrary.Bridge305
     * @return  {Bridge.IEnumerator}        
     */
    getEnumerator: function () {
        return this.getEnumerator$1();
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Bridge305
     * @memberof ClientTestLibrary.Bridge305
     * @return  {Bridge.IEnumerator$1}        
     */
    getEnumerator$1: function () {
        return this.getItems().getEnumerator();
    }
});

/**
 * @public
 * @class ClientTestLibrary.Bridge306A.Props
 */
Bridge.define('ClientTestLibrary.Bridge306A.Props', {
    /**
     * @instance
     * @public
     * @memberof ClientTestLibrary.Bridge306A.Props
     * @type string
     */
    name: null,
    /**
     * @instance
     * @public
     * @override
     * @this ClientTestLibrary.Bridge306A.Props
     * @memberof ClientTestLibrary.Bridge306A.Props
     * @return  {string}        
     */
    toString: function () {
        return this.name;
    }
});

/**
 * @public
 * @class ClientTestLibrary.Bridge306B.Props
 */
Bridge.define('ClientTestLibrary.Bridge306B.Props', {
    /**
     * @instance
     * @public
     * @memberof ClientTestLibrary.Bridge306B.Props
     * @type string
     */
    name: null,
    /**
     * @instance
     * @public
     * @override
     * @this ClientTestLibrary.Bridge306B.Props
     * @memberof ClientTestLibrary.Bridge306B.Props
     * @return  {string}        
     */
    toString: function () {
        return this.name;
    }
});

/**
 * @abstract
 * @public
 * @class ClientTestLibrary.Bridge306Component$1
 */
Bridge.define('ClientTestLibrary.Bridge306Component$1', function (TProps) { return {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Bridge306Component$1
         * @memberof ClientTestLibrary.Bridge306Component$1
         * @param   {Function}    TComponent    
         * @param   {TProps}      props         
         * @return  {string}                    
         */
        $new: function (TComponent) {
            return Bridge.fn.bind(this, function (props) {
                return Bridge.getTypeName(props) + ":" + props;
            });
        }
    }
}; });

/**
 * @public
 * @class ClientTestLibrary.Bridge306B
 * @augments ClientTestLibrary.Bridge306Component$1
 */
Bridge.define('ClientTestLibrary.Bridge306B', {
    inherits: [ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306B.Props)],
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Bridge306B
         * @memberof ClientTestLibrary.Bridge306B
         * @param   {ClientTestLibrary.Bridge306B.Props}    props    
         * @return  {string}                                         
         */
        $new: function (props) {
            return ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306B.Props).$new(ClientTestLibrary.Bridge306B)(props);
        }
    }
});

/**
 * @public
 * @class ClientTestLibrary.Bridge306A
 * @augments ClientTestLibrary.Bridge306Component$1
 */
Bridge.define('ClientTestLibrary.Bridge306A', {
    inherits: [ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306A.Props)],
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Bridge306A
         * @memberof ClientTestLibrary.Bridge306A
         * @param   {ClientTestLibrary.Bridge306A.Props}    props    
         * @return  {string}                                         
         */
        $new: function (props) {
            return ClientTestLibrary.Bridge306Component$1(ClientTestLibrary.Bridge306A.Props).$new(ClientTestLibrary.Bridge306A)(props);
        }
    }
});

/**
 * @abstract
 * @public
 * @class ClientTestLibrary.IBridge304
 */
Bridge.define('ClientTestLibrary.IBridge304');

/**
 * @public
 * @class ClientTestLibrary.Bridge304
 * @implements  ClientTestLibrary.IBridge304
 */
Bridge.define('ClientTestLibrary.Bridge304', {
    inherits: [ClientTestLibrary.IBridge304],
    config: {
        properties: {
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Bridge304
             * @memberof ClientTestLibrary.Bridge304
             * @function getX
             * @return  {string}        
             */
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Bridge304
             * @memberof ClientTestLibrary.Bridge304
             * @function setX
             * @param   {string}    value    
             * @return  {void}               
             */
            X: null
        }
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Bridge304
     * @memberof ClientTestLibrary.Bridge304
     * @param   {string}    x    
     * @return  {void}           
     */
    f: function (x) {
        this.setX(x);
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Bridge304
     * @memberof ClientTestLibrary.Bridge304
     * @return  {void}        
     */
    f$1: function () {
        this.setX("void F()");
    }
});

/**
 * @class ClientTestLibrary.TestBridgeIssues
 */
Bridge.define('ClientTestLibrary.TestBridgeIssues', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestBridgeIssues
         * @memberof ClientTestLibrary.TestBridgeIssues
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        n169: function (assert) {
            assert.expect(2);

            // TEST
            ClientTestLibrary.Bridge169.m1();
            assert.deepEqual(ClientTestLibrary.Bridge169.number, 1, "M1()");

            // TEST
            ClientTestLibrary.Bridge169.m2();
            assert.deepEqual(ClientTestLibrary.Bridge169.number, 2, "M2()");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestBridgeIssues
         * @memberof ClientTestLibrary.TestBridgeIssues
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        n240: function (assert) {
            assert.expect(3);

            // TEST
            var b = new ClientTestLibrary.Bridge240B();
            assert.ok(b !== null, "Instance of B created");
            assert.equal(b.getString(), "B", "b.GetString() = 'B'");
            assert.equal(b.getData(), 1, "b.Data = 1");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestBridgeIssues
         * @memberof ClientTestLibrary.TestBridgeIssues
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        n266: function (assert) {
            assert.expect(1);

            // TEST
            assert.ok(ClientTestLibrary.Bridge266A.test() !== null, "new object() call transpiled");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestBridgeIssues
         * @memberof ClientTestLibrary.TestBridgeIssues
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        n272: function (assert) {
            assert.expect(3);

            // TEST
            assert.deepEqual(ClientTestLibrary.Bridge272.test(1), ClientTestLibrary.Bridge272.MyEnum.abc, "Casted MyEnum.Abc");
            assert.deepEqual(ClientTestLibrary.Bridge272.test(3), ClientTestLibrary.Bridge272.MyEnum.ghi, "Casted MyEnum.Ghi");
            assert.deepEqual(ClientTestLibrary.Bridge272.test(4), 4, "Casted MyEnum.Abc");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestBridgeIssues
         * @memberof ClientTestLibrary.TestBridgeIssues
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        n273: function (assert) {
            assert.expect(4);

            // TEST
            var items = Bridge.merge(new Bridge.List$1(Bridge.Int)(), [
                [0], 
                [1], 
                [2], 
                [3], 
                [4]
            ] );

            var r = items.slice(-1).toArray();
            assert.deepEqual(r, [4], "Slices start = -1");

            r = items.slice(1).toArray();
            assert.deepEqual(r, [1, 2, 3, 4], "Slices start = 1");

            r = items.slice(-3, 4).toArray();
            assert.deepEqual(r, [2, 3], "Slices start = -3, end = 3");

            r = items.slice(1, 3).toArray();
            assert.deepEqual(r, [1, 2], "Slices start = 1, end = 2");

        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestBridgeIssues
         * @memberof ClientTestLibrary.TestBridgeIssues
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        n277: function (assert) {
            assert.expect(1);

            assert.equal(ClientTestLibrary.Bridge277.$int, 0, "Enum member with reserved name initialized");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestBridgeIssues
         * @memberof ClientTestLibrary.TestBridgeIssues
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        n294: function (assert) {
            assert.expect(2);

            var c = new ClientTestLibrary.Bridge294("Vlad");

            assert.equal(c.getName(), "Vlad", "Class method works");
            assert.equal(c.getNameThroughGeneric(Bridge.Int)(), "Vlad", "Generic class method works");

        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestBridgeIssues
         * @memberof ClientTestLibrary.TestBridgeIssues
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        n304: function (assert) {
            assert.expect(2);

            var c = new ClientTestLibrary.Bridge304();
            var i = c;

            i.f("1");
            assert.equal(c.getX(), "1", "Interface method works");

            c.f$1();
            assert.equal(c.getX(), "void F()", "Class method works");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestBridgeIssues
         * @memberof ClientTestLibrary.TestBridgeIssues
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        n305: function (assert) {
            var $t;
            assert.expect(1);

            var c = new ClientTestLibrary.Bridge305(["1", "2", "3"]);

            var result = "";
            $t = Bridge.getEnumerator(c);
            while ($t.moveNext()) {
                var item = $t.getCurrent();
                result = result + item;
            }

            assert.equal(result, "123", "IEnumerator works");
        }        ,
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestBridgeIssues
         * @memberof ClientTestLibrary.TestBridgeIssues
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        n306: function (assert) {
            assert.expect(2);

            var b = ClientTestLibrary.Bridge306B.$new(Bridge.merge(new ClientTestLibrary.Bridge306B.Props(), {
                name: "B"
            } ));
            assert.equal(b, "ClientTestLibrary.Bridge306B.Props:B", "Bridge306B.New() works");

            var a = ClientTestLibrary.Bridge306A.$new(Bridge.merge(new ClientTestLibrary.Bridge306A.Props(), {
                name: "A"
            } ));
            assert.equal(a, "ClientTestLibrary.Bridge306A.Props:A", "Bridge306A.New() works");
        }
    }
});

