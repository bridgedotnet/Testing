/* global Bridge */

/**
 * @public
 * @class ClientTestLibrary.CI1
 */
Bridge.define('ClientTestLibrary.CI1');

/**
 * @public
 * @class ClientTestLibrary.CI2
 */
Bridge.define('ClientTestLibrary.CI2');

/**
 * @public
 * @class ClientTestLibrary.Point69
 */
Bridge.define('ClientTestLibrary.Point69', {
    /**
     * @instance
     * @public
     * @memberof ClientTestLibrary.Point69
     * @type number
     */
    x: 0,
    /**
     * @instance
     * @public
     * @memberof ClientTestLibrary.Point69
     * @type number
     */
    y: 0,
    /**
     * @instance
     * @public
     * @this ClientTestLibrary.Point69
     * @memberof ClientTestLibrary.Point69
     * @param   {number}    y1    
     * @return  {void}            
     */
    constructor$1: function (y1) {
        (new ClientTestLibrary.Point69("constructor")).$clone(this);
        this.y = y1;
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
        if (!Bridge.is(o,ClientTestLibrary.Point69)) {
            return false;
        }
        return Bridge.equals(this.x, o.x) && Bridge.equals(this.y, o.y);
    },
    $clone: function (to) {
        var s = to || new ClientTestLibrary.Point69();
        s.x = this.x;
        s.y = this.y;
        return s;
    }
});

