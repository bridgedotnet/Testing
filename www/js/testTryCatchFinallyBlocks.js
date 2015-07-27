/* global Bridge */

/**
 * @class ClientTestLibrary.Data
 */
Bridge.define('ClientTestLibrary.Data', {
    config: {
        properties: {
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Data
             * @memberof ClientTestLibrary.Data
             * @function getCount
             * @return  {number}        
             */
            /**
             * @instance
             * @public
             * @this ClientTestLibrary.Data
             * @memberof ClientTestLibrary.Data
             * @function setCount
             * @param   {number}    value    
             * @return  {void}               
             */
            Count: 0
        }
    }
});

/**
 * @class ClientTestLibrary.TestTryCatchFinallyBlocks
 */
Bridge.define('ClientTestLibrary.TestTryCatchFinallyBlocks', {
    statics: {
        config: {
            properties: {
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function getIsATry
                 * @return  {boolean}        
                 */
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function setIsATry
                 * @param   {boolean}    value    
                 * @return  {void}                
                 */
                IsATry: false,
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function getIsACatch
                 * @return  {boolean}        
                 */
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function setIsACatch
                 * @param   {boolean}    value    
                 * @return  {void}                
                 */
                IsACatch: false,
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function getIsAFinally
                 * @return  {boolean}        
                 */
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function setIsAFinally
                 * @param   {boolean}    value    
                 * @return  {void}                
                 */
                IsAFinally: false,
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function getIsBTry
                 * @return  {boolean}        
                 */
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function setIsBTry
                 * @param   {boolean}    value    
                 * @return  {void}                
                 */
                IsBTry: false,
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function getIsBCatch
                 * @return  {boolean}        
                 */
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function setIsBCatch
                 * @param   {boolean}    value    
                 * @return  {void}                
                 */
                IsBCatch: false,
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function getIsBFinally
                 * @return  {boolean}        
                 */
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function setIsBFinally
                 * @param   {boolean}    value    
                 * @return  {void}                
                 */
                IsBFinally: false,
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function getIsCTry
                 * @return  {boolean}        
                 */
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function setIsCTry
                 * @param   {boolean}    value    
                 * @return  {void}                
                 */
                IsCTry: false,
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function getIsCCatch
                 * @return  {boolean}        
                 */
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function setIsCCatch
                 * @param   {boolean}    value    
                 * @return  {void}                
                 */
                IsCCatch: false,
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function getIsCFinally
                 * @return  {boolean}        
                 */
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function setIsCFinally
                 * @param   {boolean}    value    
                 * @return  {void}                
                 */
                IsCFinally: false,
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function getIsDTry
                 * @return  {boolean}        
                 */
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function setIsDTry
                 * @param   {boolean}    value    
                 * @return  {void}                
                 */
                IsDTry: false,
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function getIsDCatch
                 * @return  {boolean}        
                 */
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function setIsDCatch
                 * @param   {boolean}    value    
                 * @return  {void}                
                 */
                IsDCatch: false,
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function getIsDFinally
                 * @return  {boolean}        
                 */
                /**
                 * @static
                 * @public
                 * @this ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
                 * @function setIsDFinally
                 * @param   {boolean}    value    
                 * @return  {void}                
                 */
                IsDFinally: false
            }
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestTryCatchFinallyBlocks
         * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        simpleTryCatchFinally: function (assert) {
            assert.expect(1);

            var data = new ClientTestLibrary.Data();
            ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchFinally(data);

            assert.equal(data.getCount(), 2, "TryCatchFinally() executes");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestTryCatchFinallyBlocks
         * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        caughtExceptions: function (assert) {
            assert.expect(4);

            var data = new ClientTestLibrary.Data();
            ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchFinallyWithCaughtException(data);

            assert.equal(data.getCount(), 7, "Exception catch, Finally works");

            data = new ClientTestLibrary.Data();
            ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchFinallyWithCaughtTypedException(data);

            assert.equal(data.getCount(), 7, "Typed exception catch, Finally works");

            data = new ClientTestLibrary.Data();
            var exceptionMessage = ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchFinallyWithCaughtArgumentException(data);

            assert.equal(exceptionMessage, "catch me", "Typed exception catch with exception message");
            assert.equal(data.getCount(), 7, "Typed exception catch with exception message, Finally works");
        },
        /**
         * @static
         * @public
         * @this ClientTestLibrary.TestTryCatchFinallyBlocks
         * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        thrownExceptions: function (assert) {
            assert.expect(16);

            //#230
            assert.throws(ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchFinallyWithNotCaughtTypedException, "catch me", "A. Typed exception is not caught");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsATry(), "A. exception not caught - try section called");
            assert.ok(!ClientTestLibrary.TestTryCatchFinallyBlocks.getIsACatch(), "A. exception not caught - catch section not called");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsAFinally(), "A. exception not caught - finally section called");

            //#229
            assert.throws(ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchWithNotCaughtTypedExceptionAndArgument, "catch me", "[#229] B. Typed exception is not caught; and argument");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsBTry(), "B. exception not caught - try section called");
            assert.ok(!ClientTestLibrary.TestTryCatchFinallyBlocks.getIsBCatch(), "B. exception not caught - catch section not called");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsBFinally(), "B. exception not caught - finally section called");

            //#231
            assert.throws(ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchWithRethrow, "catch me", "[#231] C. Rethrow");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsCTry(), "C. exception caught and re-thrown  - try section called");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsCCatch(), "C. exception caught and re-thrown  - catch section called");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsCFinally(), "C. exception caught and re-thrown  - finally section called");

            assert.throws(ClientTestLibrary.TestTryCatchFinallyBlocks.tryCatchWithRethrowEx, function (error) {
                return error.toString() === "catch me";
            }, "D. Rethrow with parameter");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsDTry(), "D. exception caught and re-thrown  - try section called");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsDCatch(), "D. exception caught and re-thrown  - catch section called");
            assert.ok(ClientTestLibrary.TestTryCatchFinallyBlocks.getIsDFinally(), "D. exception caught and re-thrown  - finally section called");
        },
        /**
         * @static
         * @private
         * @this ClientTestLibrary.TestTryCatchFinallyBlocks
         * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
         * @param   {ClientTestLibrary.Data}    data    
         * @return  {void}                              
         */
        tryCatchFinally: function (data) {
            try {
                data.setCount(data.getCount()+1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
            }
            finally {
                data.setCount(data.getCount()+1);
            }
        },
        /**
         * @static
         * @private
         * @this ClientTestLibrary.TestTryCatchFinallyBlocks
         * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
         * @param   {ClientTestLibrary.Data}    data    
         * @return  {void}                              
         */
        tryCatchFinallyWithCaughtException: function (data) {
            try {
                data.setCount(data.getCount() + 1);
                throw new Bridge.Exception();
                data.setCount(data.getCount() - 1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                data.setCount(data.getCount() + 2);
            }
            finally {
                data.setCount(data.getCount() + 4);
            }
        },
        /**
         * @static
         * @private
         * @this ClientTestLibrary.TestTryCatchFinallyBlocks
         * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
         * @param   {ClientTestLibrary.Data}    data    
         * @return  {void}                              
         */
        tryCatchFinallyWithCaughtTypedException: function (data) {
            try {
                data.setCount(data.getCount() + 1);
                throw new Bridge.Exception("catch me");
                data.setCount(data.getCount() - 1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                data.setCount(data.getCount() + 2);
            }
            finally {
                data.setCount(data.getCount() + 4);
            }
        },
        /**
         * @static
         * @private
         * @this ClientTestLibrary.TestTryCatchFinallyBlocks
         * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
         * @param   {ClientTestLibrary.Data}    data    
         * @return  {string}                            
         */
        tryCatchFinallyWithCaughtArgumentException: function (data) {
            try {
                data.setCount(data.getCount() + 1);
                throw new Bridge.ArgumentException("catch me");
                data.setCount(data.getCount() - 1);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.ArgumentException)) {
                    ex = $e;
                    data.setCount(data.getCount() + 2);

                    return ex.getMessage();
                }
                else {
                    throw $e;
                }
            }
            finally {
                data.setCount(data.getCount() + 4);
            }
        },
        /**
         * @static
         * @private
         * @this ClientTestLibrary.TestTryCatchFinallyBlocks
         * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
         * @return  {void}        
         */
        tryCatchFinallyWithNotCaughtTypedException: function () {
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsATry(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsACatch(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsAFinally(false);

            try {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsATry(true);
                throw new Bridge.Exception("catch me");
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsATry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                if (Bridge.is($e, Bridge.ArgumentException)) {
                    ClientTestLibrary.TestTryCatchFinallyBlocks.setIsACatch(true);
                }
                else {
                    throw $e;
                }
            }
            finally {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsAFinally(true);
            }
        },
        /**
         * @static
         * @private
         * @this ClientTestLibrary.TestTryCatchFinallyBlocks
         * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
         * @return  {void}        
         */
        tryCatchWithNotCaughtTypedExceptionAndArgument: function () {
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsBTry(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsBCatch(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsBFinally(false);

            try {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsBTry(true);
                throw new Bridge.Exception("catch me");
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsBTry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                var ex;
                if (Bridge.is($e, Bridge.InvalidCastException)) {
                    ex = $e;
                    var s = ex.getMessage();
                    ClientTestLibrary.TestTryCatchFinallyBlocks.setIsBCatch(true);
                }
                else {
                    throw $e;
                }
            }
            finally {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsBFinally(true);
            }
        },
        /**
         * @static
         * @private
         * @this ClientTestLibrary.TestTryCatchFinallyBlocks
         * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
         * @return  {void}        
         */
        tryCatchWithRethrow: function () {
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsCTry(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsCCatch(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsCFinally(false);

            try {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsCTry(true);
                throw new Bridge.InvalidOperationException("catch me");
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsCTry(false);
            }
            catch ($e) {
                $e = Bridge.Exception.create($e);
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsCCatch(true);
                throw $e;
            }
            finally {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsCFinally(true);
            }
        },
        /**
         * @static
         * @private
         * @this ClientTestLibrary.TestTryCatchFinallyBlocks
         * @memberof ClientTestLibrary.TestTryCatchFinallyBlocks
         * @return  {void}        
         */
        tryCatchWithRethrowEx: function () {
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsDTry(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsDCatch(false);
            ClientTestLibrary.TestTryCatchFinallyBlocks.setIsDFinally(false);

            try {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsDTry(true);
                throw new Bridge.ArgumentException("catch me");
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsDTry(false);
            }
            catch (ex) {
                ex = Bridge.Exception.create(ex);
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsDCatch(true);
                throw ex;
            }
            finally {
                ClientTestLibrary.TestTryCatchFinallyBlocks.setIsDFinally(true);
            }
        }
    }
});

