/* global Bridge */

/**
 * @public
 * @class ClientTestLibrary.Point
 */
Bridge.define('ClientTestLibrary.Point', {
    statics: {
        constructor: function () {
            ClientTestLibrary.Point.staticInt = 500;
            ClientTestLibrary.Point.staticString = "Initialized";
        },
        /**
         * @static
         * @public
         * @memberof ClientTestLibrary.Point
         * @type number
         */
        statitIntNotInitialized: 0,
        /**
         * @static
         * @public
         * @memberof ClientTestLibrary.Point
         * @type string
         */
        statitStringNotInitialized: null,
        /**
         * @static
         * @public
         * @memberof ClientTestLibrary.Point
         * @type number
         */
        staticInt: 0,
        /**
         * @static
         * @public
         * @memberof ClientTestLibrary.Point
         * @type string
         */
        staticString: null,
        /**
         * @static
         * @public
         * @memberof ClientTestLibrary.Point
         * @constant
         * @default "W"
         * @type number
         */
        CONST_CHAR: 87,
        /**
         * @static
         * @public
         * @this ClientTestLibrary.Point
         * @memberof ClientTestLibrary.Point
         * @return  {number}        
         */
        test3: function () {
            return ClientTestLibrary.Point.statitIntNotInitialized + ClientTestLibrary.Point.staticInt;
        }
    },
    /**
     * @instance
     * @public
     * @memberof ClientTestLibrary.Point
     * @type number
     */
    x: 0,
    /**
     * @instance
     * @public
     * @memberof ClientTestLibrary.Point
     * @type number
     */
    y: 0,
    constructor: function () {
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Point
     * @memberof ClientTestLibrary.Point
     * @return  {number}        
     */
    test1: function () {
        return ClientTestLibrary.Point.staticInt + this.x;
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Point
     * @memberof ClientTestLibrary.Point
     * @param   {ClientTestLibrary.Point}    p    
     * @return  {ClientTestLibrary.Point}         
     */
    test2: function (p) {
        return Bridge.merge(new ClientTestLibrary.Point(), {
            x: this.x + p.x, 
            y: this.y + p.y
        } );
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.x == null ? 0 : Bridge.getHashCode(this.x));
        hash = hash * 23 + (this.y == null ? 0 : Bridge.getHashCode(this.y));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,ClientTestLibrary.Point)) {
            return false;
        }
        return Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y);
    },
    $clone: function (to) {
        var s = to || new ClientTestLibrary.Point();
        s.x = this.x;
        s.y = this.y;
        return s;
    }
});

/**
 * @public
 * @class ClientTestLibrary.Rectangle
 */
Bridge.define('ClientTestLibrary.Rectangle', {
    config: {
        init: function () {
            this.l = new ClientTestLibrary.Point();
            this.t = new ClientTestLibrary.Point();
        }
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Rectangle
     * @memberof ClientTestLibrary.Rectangle
     * @param   {number}    x    
     * @param   {number}    y    
     * @return  {void}           
     */
    constructor$1: function (x, y) {
        //[#69]
        (new ClientTestLibrary.Rectangle("constructor")).$clone(this);

        this.l.x = x;
        this.l.y = y;
    },
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Rectangle
     * @memberof ClientTestLibrary.Rectangle
     * @param   {number}    x1    
     * @param   {number}    y1    
     * @param   {number}    x2    
     * @param   {number}    y2    
     * @return  {void}            
     */
    constructor$2: function (x1, y1, x2, y2) {
        this.l.x = x1;
        this.l.y = y1;
        this.t.x = x2;
        this.t.y = y2;
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.l == null ? 0 : Bridge.getHashCode(this.l));
        hash = hash * 23 + (this.t == null ? 0 : Bridge.getHashCode(this.t));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,ClientTestLibrary.Rectangle)) {
            return false;
        }
        return Bridge.equals(this.l, o.l) && Bridge.equals(this.t, o.t);
    },
    $clone: function (to) {
        var s = to || new ClientTestLibrary.Rectangle();
        s.l = this.l;
        s.t = this.t;
        return s;
    }
});

/**
 * @class ClientTestLibrary.TestValueTypes
 */
Bridge.define('ClientTestLibrary.TestValueTypes', {
    statics: {
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestValueTypes
         * @memberof ClientTestLibrary.TestValueTypes
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testInstanceConstructorsAndMethods: function (assert) {
            assert.expect(18);

            //Check parameterless constructor
            var a = new ClientTestLibrary.Point();

            assert.deepEqual(a.x, 0, "x 0");
            assert.deepEqual(a.y, 0, "y 0");

            var r = new ClientTestLibrary.Rectangle("constructor");

            assert.deepEqual(r.l.x, 0, "r.l.x 0");
            assert.deepEqual(r.l.y, 0, "r.l.y 0");
            assert.deepEqual(r.t.x, 0, "r.t.x 0");
            assert.deepEqual(r.t.y, 0, "r.t.y 0");

            r = new ClientTestLibrary.Rectangle("constructor$1", 10, 20);

            assert.deepEqual(r.l.x, 10, "r.l.x 10");
            assert.deepEqual(r.l.y, 20, "r.l.y 20");
            assert.deepEqual(r.t.x, 0, "r.t.x 0");
            assert.deepEqual(r.t.y, 0, "r.t.y 0");

            r = new ClientTestLibrary.Rectangle("constructor$2", 30, 40, 50, 60);

            assert.deepEqual(r.l.x, 30, "r.l.x 30");
            assert.deepEqual(r.l.y, 40, "r.l.y 40");
            assert.deepEqual(r.t.x, 50, "r.t.x 50");
            assert.deepEqual(r.t.y, 60, "r.t.y 60");

            var i = a.test1();

            assert.deepEqual(i, 500, "i 500");
            a.x = 300;
            i = a.test1();
            assert.deepEqual(i, 800, "i 800");

            a.y = 400;

            var b = Bridge.merge(new ClientTestLibrary.Point(), {
                x: 5, 
                y: 7
            } );
            var c = b.test2(a.$clone());

            assert.deepEqual(c.x, 305, "c.x 305");
            assert.deepEqual(c.y, 407, "c.y 407");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestValueTypes
         * @memberof ClientTestLibrary.TestValueTypes
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testStaticConstructorsAndMethods: function (assert) {
            assert.expect(7);

            assert.deepEqual(ClientTestLibrary.Point.staticInt, 500, "Point.StaticInt 500");
            assert.deepEqual(ClientTestLibrary.Point.staticString, "Initialized", "Point.StaticString Initialized");
            assert.deepEqual(ClientTestLibrary.Point.statitIntNotInitialized, 0, "Point.StatitIntNotInitialized 0");
            assert.deepEqual(ClientTestLibrary.Point.statitStringNotInitialized, null, "Point.StatitStringNotInitialized null");
            assert.deepEqual(ClientTestLibrary.Point.CONST_CHAR, Bridge.cast(87, Bridge.Int), "Point.CONST_CHAR W");

            ClientTestLibrary.Point.statitIntNotInitialized = -1;
            assert.deepEqual(ClientTestLibrary.Point.statitIntNotInitialized, -1, "Point.StatitIntNotInitialized -1");

            var i = ClientTestLibrary.Point.test3();
            assert.deepEqual(i, 499, "i 499");
        }
    }
});

