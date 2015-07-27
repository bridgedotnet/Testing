/* global Bridge */

/**
 * @memberof Functions
 * @callback Functions.Delegates.StringDelegateIntResult
 * @param   {string}    s    
 * @return  {number}         
 */

/**
 * @memberof Functions
 * @callback Functions.Delegates.StringDelegate
 * @param   {string}    s    
 * @return  {void}           
 */

/**
 * @memberof Functions
 * @callback Functions.Delegates.VoidDelegate
 * @return  {void}        
 */

/** @namespace Functions */

/**
 * @public
 * @class Functions.DelegateClass
 */
Bridge.define('Functions.DelegateClass', {
    /**
     * @instance
     * @public
     * @memberof Functions.DelegateClass
     * @type Functions.Delegates.VoidDelegate
     */
    methodVoidDelegate: null,
    /**
     * @instance
     * @public
     * @memberof Functions.DelegateClass
     * @type Functions.Delegates.StringDelegate
     */
    methodStringDelegate: null,
    /**
     * @instance
     * @public
     * @memberof Functions.DelegateClass
     * @type Functions.Delegates.StringDelegateIntResult
     */
    methodStringDelegateIntResult: null
});

/**
 * @abstract
 * @public
 * @class Functions.DelegateInterface
 */
Bridge.define('Functions.DelegateInterface');

/**
 * @public
 * @class Functions.Delegates
 */
Bridge.define('Functions.Delegates');

/**
 * @public
 * @class Functions.Parameters
 */
Bridge.define('Functions.Parameters', {
    /**
     * @instance
     * @public
     * @this Functions.Parameters
     * @memberof Functions.Parameters
     * @param   {number}    i    
     * @return  {number}         
     */
    getSomething: function (i) {
        return i;
    },
    /**
     * @instance
     * @public
     * @this Functions.Parameters
     * @memberof Functions.Parameters
     * @param   {Array.<number>}    numbers    
     * @return  {string}                       
     */
    join: function (numbers) {
        var s = "";
        for (var i = 0; i < numbers.length; i++) {
            s = s + numbers[i];
        }

        return s;
    }
});

