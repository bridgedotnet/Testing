/* global Bridge */

/** @namespace Classes */

/**
 * @public
 * @class Classes.Animal
 */
Bridge.define('Classes.Animal', {
    /**
     * @instance
     * @private
     * @memberof Classes.Animal
     * @type string
     */
    name: null,
    /**
     * @instance
     * @public
     * @this Classes.Animal
     * @memberof Classes.Animal
     * @return  {void}        
     */
    constructor: function () {
        this.name = "Animal";
    },
    /**
     * @instance
     * @public
     * @this Classes.Animal
     * @memberof Classes.Animal
     * @param   {string}    name    
     * @return  {void}              
     */
    constructor$1: function (name) {
        this.name = name;
    },
    /**
     * @instance
     * @public
     * @this Classes.Animal
     * @memberof Classes.Animal
     * @return  {string}        
     */
    getName: function () {
        return this.name;
    },
    /**
     * @instance
     * @public
     * @this Classes.Animal
     * @memberof Classes.Animal
     * @return  {number}        
     */
    move: function () {
        return 1;
    }
});

/**
 * @public
 * @class Classes.Snake
 * @augments Classes.Animal
 */
Bridge.define('Classes.Snake', {
    inherits: [Classes.Animal],
    /**
     * @instance
     * @public
     * @this Classes.Snake
     * @memberof Classes.Snake
     * @param   {string}    name    
     * @return  {void}              
     */
    constructor: function (name) {
        Classes.Animal.prototype.constructor$1.call(this, name);

    },
    /**
     * @instance
     * @public
     * @override
     * @this Classes.Snake
     * @memberof Classes.Snake
     * @return  {number}        
     */
    move: function () {
        return 5;
    }
});

/**
 * @public
 * @class Classes.Employee
 * @augments Classes.Animal
 */
Bridge.define('Classes.Employee', {
    inherits: [Classes.Animal],
    /**
     * @instance
     * @private
     * @memberof Classes.Employee
     * @type string
     */
    name$1: null,
    /**
     * @instance
     * @private
     * @memberof Classes.Employee
     * @type number
     */
    id: 0,
    /**
     * @instance
     * @public
     * @this Classes.Employee
     * @memberof Classes.Employee
     * @param   {string}    name    
     * @param   {number}    id      
     * @return  {void}              
     */
    constructor: function (name, id) {
        Classes.Animal.prototype.constructor$1.call(this, name);

        this.name$1 = name;
        this.id = id;
    }
});

/**
 * @public
 * @class Classes.Dog
 * @augments Classes.Animal
 */
Bridge.define('Classes.Dog', {
    inherits: [Classes.Animal],
    /**
     * @instance
     * @public
     * @this Classes.Dog
     * @memberof Classes.Dog
     * @param   {string}    name    
     * @return  {void}              
     */
    constructor: function (name) {
        Classes.Animal.prototype.constructor$1.call(this, name);

    },
    /**
     * @instance
     * @public
     * @this Classes.Dog
     * @memberof Classes.Dog
     * @return  {number}        
     */
    move$1: function () {
        return 20;
    }
});

/**
 * @public
 * @class Classes.MovePoint
 */
Bridge.define('Classes.MovePoint', {
    statics: {
        /**
         * @static
         * @private
         * @this Classes.MovePoint
         * @memberof Classes.MovePoint
         * @param   {Classes.Point}    p     
         * @param   {number}           dx    
         * @param   {number}           dy    
         * @return  {Classes.Point}          
         */
        move: function (p, dx, dy) {
            return Classes.StaticClass.move(p.$clone(), dx, dy);
        }
    },
    config: {
        init: function () {
            Bridge.property(this, "Point", new Classes.Point());
        }
    },
    /**
     * @instance
     * @public
     * @this Classes.MovePoint
     * @memberof Classes.MovePoint
     * @param   {number}    dx    
     * @param   {number}    dy    
     * @return  {void}            
     */
    move: function (dx, dy) {
        this.setPoint(Classes.MovePoint.move(this.getPoint().$clone(), dx, dy));
    }
});

/**
 * @public
 * @class Classes.Point
 */
Bridge.define('Classes.Point', {
    /**
     * @instance
     * @public
     * @memberof Classes.Point
     * @type number
     */
    x: 0,
    /**
     * @instance
     * @public
     * @memberof Classes.Point
     * @type number
     */
    y: 0,
    /**
     * @instance
     * @public
     * @this Classes.Point
     * @memberof Classes.Point
     * @param   {number}    x    
     * @param   {number}    y    
     * @return  {void}           
     */
    constructor$1: function (x, y) {
        this.x = x;
        this.y = y;
    },
    constructor: function () {
    },
    getHashCode: function () {
        var hash = 17;
        hash = hash * 23 + (this.x == null ? 0 : Bridge.getHashCode(this.x));
        hash = hash * 23 + (this.y == null ? 0 : Bridge.getHashCode(this.y));
        return hash;
    },
    equals: function (o) {
        if (!Bridge.is(o,Classes.Point)) {
            return false;
        }
        return Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y);
    },
    $clone: function (to) {
        var s = to || new Classes.Point();
        s.x = this.x;
        s.y = this.y;
        return s;
    }
});

/**
 * @static
 * @abstract
 * @public
 * @class Classes.StaticClass
 */
Bridge.define('Classes.StaticClass', {
    statics: {
        /**
         * @static
         * @public
         * @this Classes.StaticClass
         * @memberof Classes.StaticClass
         * @param   {Classes.Point}    p     
         * @param   {number}           dx    
         * @param   {number}           dy    
         * @return  {Classes.Point}          
         */
        move: function (p, dx, dy) {
            return new Classes.Point("constructor$1", p.x + dx, p.y + dy);
        }
    }
});

