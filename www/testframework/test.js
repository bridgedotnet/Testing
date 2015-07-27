/* global Bridge */

/* global Bridge */

/**
 * @memberof System
 * @callback System.Func
 * @param   {Object}     arg    
 * @return  {boolean}           
 */

/** @namespace System */

/**
 * @memberof System
 * @callback System.Action
 * @return  {void}        
 */

/** @namespace Bridge.Test.QUnit */

/**
 * @class Bridge.Test.Assert
 */
Bridge.define('Bridge.Test.Assert', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.Assert
         * @type Bridge.QUnit.Assert
         */
        assert: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {Object}    actual      
         * @param   {Object}    expected    
         * @return  {void}                  
         */
        areEqual: function (actual, expected) {
            Bridge.Test.Assert.assert.deepEqual(actual, expected);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {Object}    actual         
         * @param   {Object}    expected       
         * @param   {string}    description    
         * @return  {void}                     
         */
        areEqual$1: function (actual, expected, description) {
            Bridge.Test.Assert.assert.deepEqual(actual, expected, description);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {Object}    actual      
         * @param   {Object}    expected    
         * @return  {void}                  
         */
        areStrictEqual: function (actual, expected) {
            Bridge.Test.Assert.assert.strictEqual(actual, expected);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {Object}    actual         
         * @param   {Object}    expected       
         * @param   {string}    description    
         * @return  {void}                     
         */
        areStrictEqual$1: function (actual, expected, description) {
            Bridge.Test.Assert.assert.strictEqual(actual, expected, description);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {Object}    actual      
         * @param   {Object}    expected    
         * @return  {void}                  
         */
        areNotEqual: function (actual, expected) {
            Bridge.Test.Assert.assert.notDeepEqual(actual, expected);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {Object}    actual         
         * @param   {Object}    expected       
         * @param   {string}    description    
         * @return  {void}                     
         */
        areNotEqual$1: function (actual, expected, description) {
            Bridge.Test.Assert.assert.notDeepEqual(actual, expected, description);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {boolean}    condition    
         * @return  {void}                    
         */
        $true: function (condition) {
            Bridge.Test.Assert.assert.ok(condition);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {boolean}    condition    
         * @param   {string}     message      
         * @return  {void}                    
         */
        true$1: function (condition, message) {
            Bridge.Test.Assert.assert.ok(condition, message);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {boolean}    condition    
         * @return  {void}                    
         */
        $false: function (condition) {
            Bridge.Test.Assert.assert.notOk(condition);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {boolean}    condition    
         * @param   {string}     message      
         * @return  {void}                    
         */
        false$1: function (condition, message) {
            Bridge.Test.Assert.assert.notOk(condition, message);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @return  {void}        
         */
        fail: function () {
            Bridge.Test.Assert.assert.ok(false);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {string}    message    
         * @return  {void}                 
         */
        fail$1: function (message) {
            Bridge.Test.Assert.assert.notOk(true, message);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {System.Action}    block    
         * @return  {void}                      
         */
        $throws: function (block) {
            Bridge.Test.Assert.assert.throws(block, "");
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {System.Action}    block      
         * @param   {string}           message    
         * @return  {void}                        
         */
        throws$5: function (block, message) {
            Bridge.Test.Assert.assert.throws(block, message);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {System.Action}    block       
         * @param   {Object}           expected    
         * @return  {void}                         
         */
        throws$3: function (block, expected) {
            Bridge.Test.Assert.assert.throws(block, expected);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {System.Action}    block       
         * @param   {Object}           expected    
         * @param   {string}           message     
         * @return  {void}                         
         */
        throws$4: function (block, expected, message) {
            Bridge.Test.Assert.assert.throws(block, expected, message);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {System.Action}    block       
         * @param   {System.Func}      expected    
         * @return  {void}                         
         */
        throws$1: function (block, expected) {
            Bridge.Test.Assert.assert.throws(block, expected);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {System.Action}    block       
         * @param   {System.Func}      expected    
         * @param   {string}           message     
         * @return  {void}                         
         */
        throws$2: function (block, expected, message) {
            Bridge.Test.Assert.assert.throws(block, expected, message);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {Object}    anObject    
         * @return  {void}                  
         */
        $null: function (anObject) {
            Bridge.Test.Assert.assert.ok(anObject === null);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {Object}    anObject    
         * @param   {string}    message     
         * @return  {void}                  
         */
        null$1: function (anObject, message) {
            Bridge.Test.Assert.assert.ok(anObject === null, message);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {Object}    anObject    
         * @return  {void}                  
         */
        notNull: function (anObject) {
            Bridge.Test.Assert.assert.notOk(anObject === null);
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.Assert
         * @memberof Bridge.Test.Assert
         * @param   {Object}    anObject    
         * @param   {string}    message     
         * @return  {void}                  
         */
        notNull$1: function (anObject, message) {
            Bridge.Test.Assert.assert.notOk(anObject === null, message);
        }
    }
});

/**
 * @class Bridge.Test.QUnit.RunQUnitTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests', {
    statics: {
        config: {
            init: function () {
                Bridge.ready(this.run);
            }
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests
         * @return  {void}        
         */
        run: function () {
            QUnit.module("Collections");
            QUnit.test("Array - type properties are correct #309", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.typePropertiesAreCorrect);
            QUnit.test("Array - Length", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.lengthWorks);
            QUnit.test("Array - Rank", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.rankIsOne);
            QUnit.test("Array - GetLength", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.getLengthWorks);
            QUnit.test("Array - GetLowerBound", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.getLowerBound);
            QUnit.test("Array - GetUpperBound", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.getUpperBoundWorks);
            QUnit.test("Array - getting value by Index", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.gettingValueByIndexWorks);
            QUnit.test("Array - GetValue #310", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.getValueWorks);
            QUnit.test("Array - setting value by Index", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.settingValueByIndexWorks);
            QUnit.test("Array - SetValue #311", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.setValueWorks);
            QUnit.test("Array - Foreach", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.foreachWorks);
            QUnit.test("Array - Concat", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.concatWorks);
            QUnit.test("Array - Contains", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.containsWorks);
            QUnit.test("Array - Contains with Equals", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.containsUsesEqualsMethod);
            QUnit.test("Array - All with filters", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.allWithArrayItemFilterCallbackWorks);
            QUnit.test("Array - Slice", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.sliceWithoutEndWorks);
            QUnit.test("Array - ForEach with callback", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.foreachWithArrayItemCallbackWorks);
            QUnit.test("Array - Foreach with array callback", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.foreachWithArrayCallbackWorks);
            QUnit.test("Array - IndexOf", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.indexOfWithoutStartIndexWorks);
            QUnit.test("Array - IndexOf", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.indexOfWithoutStartIndexUsesEqualsMethod);
            QUnit.test("Array - IndexOf", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.indexOfWithStartIndexWorks);
            QUnit.test("Array - Join", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.joinWithoutDelimiterWorks);
            QUnit.test("Array - Reverse", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.reverseWorks);
            QUnit.test("Array - Any", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.anyWithArrayItemFilterCallbackWorks);
            QUnit.test("Array - Sort", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.sortWithDefaultCompareWorks);
            QUnit.test("Array - Foreach with cast to IList", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.foreachWhenCastToIListWorks);
            QUnit.test("Array - Count #312", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iCollectionCountWorks);
            QUnit.test("Array - Add #313", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iCollectionAddWorks);
            QUnit.test("Array - Clear #313", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iCollectionClearWorks);
            QUnit.test("Array - Contains #313", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iCollectionContainsWorks);
            QUnit.test("Array - Contains using equals #313", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iCollectionContainsUsesEqualsMethod);
            QUnit.test("Array - Remove #313", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iCollectionRemoveWorks);
            QUnit.test("Array - IList Indexing #313", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iListIndexingWorks);
            QUnit.test("Array - IList IndexOf", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iListIndexOfWorks);
            QUnit.test("Array - IList IndexOf uses Equals", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iListIndexOfUsesEqualsMethod);
            QUnit.test("Array - IList Insert #313", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iListInsertWorks);
            QUnit.test("Array - IList RemoveAt #313", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.iListRemoveAtWorks);
            QUnit.test("GenericDictionary - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.typePropertiesAreCorrect);
            QUnit.test("GenericDictionary - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.defaultConstructorWorks);
            QUnit.test("GenericDictionary - CapacityConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.capacityConstructorWorks);
            QUnit.test("GenericDictionary - CapacityAndEqualityComparerWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.capacityAndEqualityComparerWorks);
            QUnit.test("GenericDictionary - EqualityComparerOnlyConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.equalityComparerOnlyConstructorWorks);
            QUnit.test("GenericDictionary - CountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.countWorks);
            QUnit.test("GenericDictionary - KeysWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.keysWorks);
            QUnit.test("GenericDictionary - ValuesWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.valuesWorks);
            QUnit.test("GenericDictionary - IndexerGetterWorksForExistingItems", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.indexerGetterWorksForExistingItems);
            QUnit.test("GenericDictionary - IndexerSetterWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.indexerSetterWorks);
            QUnit.test("GenericDictionary - IndexerGetterThrowsForNonExistingItems", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.indexerGetterThrowsForNonExistingItems);
            QUnit.test("GenericDictionary - AddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.addWorks);
            QUnit.test("GenericDictionary - AddThrowsIfItemAlreadyExists", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.addThrowsIfItemAlreadyExists);
            QUnit.test("GenericDictionary - ClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.clearWorks);
            QUnit.test("GenericDictionary - ContainsKeyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.containsKeyWorks);
            QUnit.test("GenericDictionary - EnumeratingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.enumeratingWorks);
            QUnit.test("GenericDictionary - RemoveWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.removeWorks);
            QUnit.test("GenericDictionary - TryGetValueWithIntKeysWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.tryGetValueWithIntKeysWorks);
            QUnit.test("GenericDictionary - TryGetValueWithObjectKeysWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.tryGetValueWithObjectKeysWorks);
            QUnit.test("GenericDictionary - CanUseCustomComparer", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.canUseCustomComparer);
            QUnit.test("ICollection - CustomClassThatShouldImplementICollectionDoesSo", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.customClassThatShouldImplementICollectionDoesSo);
            QUnit.test("ICollection - ClassImplementingICollectionCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionCountWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionCastToICollectionCountWorks);
            QUnit.test("ICollection - ClassImplementingICollectionAddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionAddWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionAddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionCastToICollectionAddWorks);
            QUnit.test("ICollection - ClassImplementingICollectionClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionClearWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionCastToICollectionClearWorks);
            QUnit.test("ICollection - ClassImplementingICollectionContainsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionContainsWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionContainsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionCastToICollectionContainsWorks);
            QUnit.test("ICollection - ClassImplementingICollectionRemoveWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionRemoveWorks);
            QUnit.test("ICollection - ClassImplementingICollectionCastToICollectionRemoveWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.classImplementingICollectionCastToICollectionRemoveWorks);
            QUnit.test("IDictionary - ClassImplementsInterfaces", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.classImplementsInterfaces);
            QUnit.test("IDictionary - CountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.countWorks);
            QUnit.test("IDictionary - AddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.addWorks);
            QUnit.test("IDictionary - ClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.clearWorks);
            QUnit.test("IDictionary - RemoveWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.removeWorks);
            QUnit.test("IDictionary - SetItemWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.setItemWorks);
            QUnit.test("IEnumerable - CustomClassThatShouldImplementIEnumerableDoesSo", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.customClassThatShouldImplementIEnumerableDoesSo);
            QUnit.test("IEnumerable - ArrayGetEnumeratorMethodWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.arrayGetEnumeratorMethodWorks);
            QUnit.test("IEnumerable - ArrayCastToIEnumerableCanBeEnumerated", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.arrayCastToIEnumerableCanBeEnumerated);
            QUnit.test("IEnumerable - ClassImplementingIEnumerableCanBeEnumerated", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.classImplementingIEnumerableCanBeEnumerated);
            QUnit.test("IEnumerable - ClassImplementingIEnumerableCastToIEnumerableCanBeEnumerated", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.classImplementingIEnumerableCastToIEnumerableCanBeEnumerated);
            QUnit.test("IList - CustomClassThatShouldImplementIListDoesSo", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.customClassThatShouldImplementIListDoesSo);
            QUnit.test("IList - ClassImplementingIListGetItemWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListGetItemWorks);
            QUnit.test("IList - ClassImplementingIListSetItemWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListSetItemWorks);
            QUnit.test("IList - ClassImplementingIListIndexOfWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListIndexOfWorks);
            QUnit.test("IList - ClassImplementingIListCastToIListIndexOfWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListCastToIListIndexOfWorks);
            QUnit.test("IList - ClassImplementingIListInsertWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListInsertWorks);
            QUnit.test("IList - ClassImplementingIListCastToIListInsertWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListCastToIListInsertWorks);
            QUnit.test("IList - ClassImplementingIListRemoveAtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListRemoveAtWorks);
            QUnit.test("IList - ClassImplementingIListCastToIListRemoveAtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.classImplementingIListCastToIListRemoveAtWorks);
            QUnit.test("IteratorBlock - TypeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable);
            QUnit.test("IteratorBlock - EnumeratingIEnumeratorIteratorToEndWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.enumeratingIEnumeratorIteratorToEndWorks);
            QUnit.test("IteratorBlock - PrematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks);
            QUnit.test("IteratorBlock - ExceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks Exception thrown not caught", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks);
            QUnit.test("IteratorBlock - TypeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface);
            QUnit.test("IteratorBlock - EnumeratingIEnumerableIteratorToEndWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.enumeratingIEnumerableIteratorToEndWorks);
            QUnit.test("IteratorBlock - PrematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks);
            QUnit.test("IteratorBlock - ExceptionInIEnumerableIteratorBodyExecutesFinallyBlocks exception thrown not caught", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks);
            QUnit.test("IteratorBlock - EnumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters);
            QUnit.test("IteratorBlock - DifferentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals);
            QUnit.test("List - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.typePropertiesAreCorrect);
            QUnit.test("List - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.defaultConstructorWorks);
            QUnit.test("List - ConstructingFromArrayWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.constructingFromArrayWorks);
            QUnit.test("List - ConstructingFromListWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.constructingFromListWorks);
            QUnit.test("List - ConstructingFromIEnumerableWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.constructingFromIEnumerableWorks);
            QUnit.test("List - CountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.countWorks);
            QUnit.test("List - IndexingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.indexingWorks);
            QUnit.test("List - ForeachWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.foreachWorks);
            QUnit.test("List - GetEnumeratorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.getEnumeratorWorks);
            QUnit.test("List - AddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.addWorks);
            QUnit.test("List - AddRangeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.addRangeWorks);
            QUnit.test("List - ClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.clearWorks);
            QUnit.test("List - ContainsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.containsWorks);
            QUnit.test("List - SliceWithoutEndWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.sliceWithoutEndWorks);
            QUnit.test("List - SliceWithEndWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.sliceWithEndWorks);
            QUnit.test("List - ForeachWithListItemCallbackWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.foreachWithListItemCallbackWorks);
            QUnit.test("List - ForeachWithListCallbackWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.foreachWithListCallbackWorks);
            QUnit.test("List - IndexOfWithoutStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.indexOfWithoutStartIndexWorks);
            QUnit.test("List - InsertWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.insertWorks);
            QUnit.test("List - JoinWithoutDelimiterWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.joinWithoutDelimiterWorks);
            QUnit.test("List - JoinWithDelimiterWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.joinWithDelimiterWorks);
            QUnit.test("List - RemoveWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.removeWorks);
            QUnit.test("List - RemoveCanRemoveNullItem", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.removeCanRemoveNullItem);
            QUnit.test("List - RemoveAtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.removeAtWorks);
            QUnit.test("List - RemoveRangeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.removeRangeWorks);
            QUnit.test("List - ReverseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.reverseWorks);
            QUnit.test("List - SortWithDefaultCompareWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.sortWithDefaultCompareWorks);
            QUnit.test("List - SortWithCompareCallbackWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.sortWithCompareCallbackWorks);
            QUnit.test("List - SortWithIComparerWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.sortWithIComparerWorks);
            QUnit.test("List - ForeachWhenCastToIEnumerableWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.foreachWhenCastToIEnumerableWorks);
            QUnit.test("List - IEnumerableGetEnumeratorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iEnumerableGetEnumeratorWorks);
            QUnit.test("List - ICollectionCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iCollectionCountWorks);
            QUnit.test("List - ICollectionAddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iCollectionAddWorks);
            QUnit.test("List - ICollectionClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iCollectionClearWorks);
            QUnit.test("List - ICollectionContainsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iCollectionContainsWorks);
            QUnit.test("List - ICollectionRemoveCanRemoveNullItem", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iCollectionRemoveCanRemoveNullItem);
            QUnit.test("List - IListIndexingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iListIndexingWorks);
            QUnit.test("List - IListIndexOfWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iListIndexOfWorks);
            QUnit.test("List - IListInsertWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iListInsertWorks);
            QUnit.test("List - IListRemoveAtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.iListRemoveAtWorks);
            QUnit.test("List - ToArrayWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.toArrayWorks);
            QUnit.module("Comparer");
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.typePropertiesAreCorrect);
            QUnit.test("CreateWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.createWorks);
            QUnit.module("Date and time");
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.typePropertiesAreCorrect);
            QUnit.test("GetFormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.getFormatWorks);
            QUnit.test("InvariantWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.invariantWorks);
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.typePropertiesAreCorrect);
            QUnit.test("DefaultConstructorReturnsTodaysDate", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.defaultConstructorReturnsTodaysDate);
            QUnit.test("CreatingInstanceReturnsTodaysDate", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.creatingInstanceReturnsTodaysDate);
            QUnit.test("MillisecondSinceEpochConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.millisecondSinceEpochConstructorWorks);
            QUnit.test("StringConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.stringConstructorWorks);
            QUnit.test("YMDConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.yMDConstructorWorks);
            QUnit.test("YMDHConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.yMDHConstructorWorks);
            QUnit.test("YMDHNConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.yMDHNConstructorWorks);
            QUnit.test("YMDHNSConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.yMDHNSConstructorWorks);
            QUnit.test("YMDHNSUConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.yMDHNSUConstructorWorks);
            QUnit.test("NowWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.nowWorks);
            QUnit.test("UTCNowWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.uTCNowWorks);
            QUnit.test("ToUniversalWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.toUniversalWorks);
            QUnit.test("ToLocalWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.toLocalWorks);
            QUnit.test("TodayWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.todayWorks);
            QUnit.test("FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.formatWorks);
            QUnit.test("LocaleFormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.localeFormatWorks);
            QUnit.test("GetFullYearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getFullYearWorks);
            QUnit.test("GetMonthWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getMonthWorks);
            QUnit.test("GetDateWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getDateWorks);
            QUnit.test("GetHoursWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getHoursWorks);
            QUnit.test("GetMinutesWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getMinutesWorks);
            QUnit.test("GetSecondsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getSecondsWorks);
            QUnit.test("GetMillisecondsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getMillisecondsWorks);
            QUnit.test("GetDayWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getDayWorks);
            QUnit.test("GetTimeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getTimeWorks);
            QUnit.test("ValueOfWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.valueOfWorks);
            QUnit.test("GetTimezoneOffsetWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getTimezoneOffsetWorks);
            QUnit.test("GetUTCFullYearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUTCFullYearWorks);
            QUnit.test("GetUtcMonthWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUtcMonthWorks);
            QUnit.test("GetUTCDateWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUTCDateWorks);
            QUnit.test("GetUTCHoursWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUTCHoursWorks);
            QUnit.test("GetUTCMinutesWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUTCMinutesWorks);
            QUnit.test("GetUTCSecondsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUTCSecondsWorks);
            QUnit.test("GetUTCMillisecondsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUTCMillisecondsWorks);
            QUnit.test("GetUTCDayWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getUTCDayWorks);
            QUnit.test("ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.parseWorks);
            QUnit.test("ParseExactWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.parseExactWorks);
            QUnit.test("ParseExactWithCultureWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.parseExactWithCultureWorks);
            QUnit.test("ParseExactUTCWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.parseExactUTCWorks);
            QUnit.test("ParseExactUTCWithCultureWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.parseExactUTCWithCultureWorks);
            QUnit.test("ToDateStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.toDateStringWorks);
            QUnit.test("ToTimeStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.toTimeStringWorks);
            QUnit.test("ToUTCStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.toUTCStringWorks);
            QUnit.test("ToLocaleDateStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.toLocaleDateStringWorks);
            QUnit.test("ToLocaleTimeStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.toLocaleTimeStringWorks);
            QUnit.test("SubtractingDatesWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.subtractingDatesWorks);
            QUnit.test("SubtractMethodReturningTimeSpanWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.subtractMethodReturningTimeSpanWorks);
            QUnit.test("DateEqualityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.dateEqualityWorks);
            QUnit.test("DateInequalityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.dateInequalityWorks);
            QUnit.test("DateLessThanWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.dateLessThanWorks);
            QUnit.test("DateLessEqualWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.dateLessEqualWorks);
            QUnit.test("DateGreaterThanWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.dateGreaterThanWorks);
            QUnit.test("DateGreaterEqualWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.dateGreaterEqualWorks);
            QUnit.test("GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getHashCodeWorks);
            QUnit.test("EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.equalsWorks);
            QUnit.test("IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.iEquatableEqualsWorks);
            QUnit.test("CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.compareToWorks);
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.typePropertiesAreCorrect);
            QUnit.test("DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.defaultConstructorWorks);
            QUnit.test("DefaultValueWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.defaultValueWorks);
            QUnit.test("ZeroWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.zeroWorks);
            QUnit.test("CreatingInstanceReturnsTimeSpanWithZeroValue", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.creatingInstanceReturnsTimeSpanWithZeroValue);
            QUnit.test("ParameterConstructorsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.parameterConstructorsWorks);
            QUnit.test("FactoryMethodsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.factoryMethodsWork);
            QUnit.test("PropertiesWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.propertiesWork);
            QUnit.test("CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.compareToWorks);
            QUnit.test("CompareWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.compareWorks);
            QUnit.test("StaticEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.staticEqualsWorks);
            QUnit.test("EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.equalsWorks);
            QUnit.test("ToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.toStringWorks);
            QUnit.test("AddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.addWorks);
            QUnit.test("SubtractWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.subtractWorks);
            QUnit.test("DurationWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.durationWorks);
            QUnit.test("NegateWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.negateWorks);
            QUnit.test("ComparisonOperatorsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.comparisonOperatorsWork);
            QUnit.test("AdditionOperatorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.additionOperatorWorks);
            QUnit.test("SubtractionOperatorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.subtractionOperatorWorks);
            QUnit.test("UnaryPlusWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.unaryPlusWorks);
            QUnit.test("UnaryMinusWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.unaryMinusWorks);
            QUnit.module("Enum");
            QUnit.test("FirstValueOfEnumIsZero", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.firstValueOfEnumIsZero);
            QUnit.test("GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.getHashCodeWorks);
            QUnit.test("EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.equalsWorks);
            QUnit.module("Exceptions");
            QUnit.test("ArgumentException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.typePropertiesAreCorrect);
            QUnit.test("ArgumentException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.defaultConstructorWorks);
            QUnit.test("ArgumentException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.constructorWithMessageWorks);
            QUnit.test("ArgumentException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("ArgumentException - ConstructorWithMessageAndParamNameWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.constructorWithMessageAndParamNameWorks);
            QUnit.test("ArgumentException - ConstructorWithMessageAndParamNameAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.constructorWithMessageAndParamNameAndInnerExceptionWorks);
            QUnit.test("ArgumentNullException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.typePropertiesAreCorrect);
            QUnit.test("ArgumentNullException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.defaultConstructorWorks);
            QUnit.test("ArgumentNullException - ConstructorWithParamNameWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.constructorWithParamNameWorks);
            QUnit.test("ArgumentNullException - ConstructorWithParamNameAndMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.constructorWithParamNameAndMessageWorks);
            QUnit.test("ArgumentNullException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("ArgumentOutOfRangeException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.typePropertiesAreCorrect);
            QUnit.test("ArgumentOutOfRangeException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.defaultConstructorWorks);
            QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.constructorWithParamNameWorks);
            QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameAndMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.constructorWithParamNameAndMessageWorks);
            QUnit.test("ArgumentOutOfRangeException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("ArgumentOutOfRangeException - ConstructorWithParamNameAndActualValueAndMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.constructorWithParamNameAndActualValueAndMessageWorks);
            QUnit.test("ArithmeticException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.typePropertiesAreCorrect);
            QUnit.test("ArithmeticException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.defaultConstructorWorks);
            QUnit.test("ArithmeticException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.constructorWithMessageWorks);
            QUnit.test("ArithmeticException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("DivideByZeroException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.typePropertiesAreCorrect);
            QUnit.test("DivideByZeroException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.defaultConstructorWorks);
            QUnit.test("DivideByZeroException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.constructorWithMessageWorks);
            QUnit.test("DivideByZeroException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("Exception - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.typePropertiesAreCorrect);
            QUnit.test("Exception - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.defaultConstructorWorks);
            QUnit.test("Exception - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.constructorWithMessageWorks);
            QUnit.test("Exception - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("Exception - MessagePropertyCanBeOverridden", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.messagePropertyCanBeOverridden);
            QUnit.test("Exception - InnerExceptionPropertyCanBeOverridden", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.innerExceptionPropertyCanBeOverridden);
            QUnit.test("FormatException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.typePropertiesAreCorrect);
            QUnit.test("FormatException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.defaultConstructorWorks);
            QUnit.test("FormatException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.constructorWithMessageWorks);
            QUnit.test("FormatException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("InvalidCastException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.typePropertiesAreCorrect);
            QUnit.test("InvalidCastException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.defaultConstructorWorks);
            QUnit.test("InvalidCastException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.constructorWithMessageWorks);
            QUnit.test("InvalidCastException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("InvalidOperationException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.typePropertiesAreCorrect);
            QUnit.test("InvalidOperationException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.defaultConstructorWorks);
            QUnit.test("InvalidOperationException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.constructorWithMessageWorks);
            QUnit.test("InvalidOperationException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("KeyNotFoundException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.typePropertiesAreCorrect);
            QUnit.test("KeyNotFoundException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.defaultConstructorWorks);
            QUnit.test("KeyNotFoundException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.constructorWithMessageWorks);
            QUnit.test("KeyNotFoundException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("NotImplementedException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.typePropertiesAreCorrect);
            QUnit.test("NotImplementedException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.defaultConstructorWorks);
            QUnit.test("NotImplementedException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.constructorWithMessageWorks);
            QUnit.test("NotImplementedException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("NotSupportedException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.typePropertiesAreCorrect);
            QUnit.test("NotSupportedException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.defaultConstructorWorks);
            QUnit.test("NotSupportedException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.constructorWithMessageWorks);
            QUnit.test("NotSupportedException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("NullReferenceException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.typePropertiesAreCorrect);
            QUnit.test("NullReferenceException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.defaultConstructorWorks);
            QUnit.test("NullReferenceException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.constructorWithMessageWorks);
            QUnit.test("NullReferenceException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("OverflowException - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.typePropertiesAreCorrect);
            QUnit.test("OverflowException - DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.defaultConstructorWorks);
            QUnit.test("OverflowException - ConstructorWithMessageWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.constructorWithMessageWorks);
            QUnit.test("OverflowException - ConstructorWithMessageAndInnerExceptionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.constructorWithMessageAndInnerExceptionWorks);
            QUnit.test("ThrowingAndCatchingExceptionsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.throwingAndCatchingExceptionsWorks);
            QUnit.test("ExceptionOfWrongTypeIsNotCaught", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.exceptionOfWrongTypeIsNotCaught);
            QUnit.test("CanCatchExceptionAsBaseType", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.canCatchExceptionAsBaseType);
            QUnit.module("Math");
            QUnit.test("ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.constantsWork);
            QUnit.test("AbsOfDoubleWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.absOfDoubleWorks);
            QUnit.test("AbsOfIntWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.absOfIntWorks);
            QUnit.test("AbsOfLongWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.absOfLongWorks);
            QUnit.test("AbsOfSbyteWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.absOfSbyteWorks);
            QUnit.test("AbsOfShortWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.absOfShortWorks);
            QUnit.test("AbsOfFloatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.absOfFloatWorks);
            QUnit.test("AbsOfDecimalWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.absOfDecimalWorks);
            QUnit.test("AcosWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.acosWorks);
            QUnit.test("AsinWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.asinWorks);
            QUnit.test("AtanWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.atanWorks);
            QUnit.test("Atan2Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.atan2Works);
            QUnit.test("CosWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.cosWorks);
            QUnit.test("ExpWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.expWorks);
            QUnit.test("FloorOfDoubleWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.floorOfDoubleWorks);
            QUnit.test("FloorOfDecimalWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.floorOfDecimalWorks);
            QUnit.test("LogWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.logWorks);
            QUnit.test("MaxOfByteWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfByteWorks);
            QUnit.test("MaxOfDecimalWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfDecimalWorks);
            QUnit.test("MaxOfDoubleWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfDoubleWorks);
            QUnit.test("MaxOfShortWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfShortWorks);
            QUnit.test("MaxOfIntWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfIntWorks);
            QUnit.test("MaxOfLongWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfLongWorks);
            QUnit.test("MaxOfSByteWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfSByteWorks);
            QUnit.test("MaxOfFloatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfFloatWorks);
            QUnit.test("MaxOfUShortWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfUShortWorks);
            QUnit.test("MaxOfUIntWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfUIntWorks);
            QUnit.test("MaxOfULongWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.maxOfULongWorks);
            QUnit.test("MinOfByteWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfByteWorks);
            QUnit.test("MinOfDecimalWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfDecimalWorks);
            QUnit.test("MinOfDoubleWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfDoubleWorks);
            QUnit.test("MinOfShortWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfShortWorks);
            QUnit.test("MinOfIntWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfIntWorks);
            QUnit.test("MinOfLongWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfLongWorks);
            QUnit.test("MinOfSByteWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfSByteWorks);
            QUnit.test("MinOfFloatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfFloatWorks);
            QUnit.test("MinOfUShortWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfUShortWorks);
            QUnit.test("MinOfUIntWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfUIntWorks);
            QUnit.test("MinOfULongWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.minOfULongWorks);
            QUnit.test("PowWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.powWorks);
            QUnit.test("RandomWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.randomWorks);
            QUnit.test("RoundOfDoubleWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.roundOfDoubleWorks);
            QUnit.test("SinWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.sinWorks);
            QUnit.test("SqrtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.sqrtWorks);
            QUnit.test("TanWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.tanWorks);
            QUnit.module("Nullable");
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.typePropertiesAreCorrect);
            QUnit.test("ConvertingToNullableWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.convertingToNullableWorks);
            QUnit.test("HasValueWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.hasValueWorks);
            QUnit.test("BoxingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.boxingWorks);
            QUnit.test("UnboxingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.unboxingWorks);
            QUnit.test("ValueWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.valueWorks);
            QUnit.test("UnboxingValueOfWrongTypeThrowsAnException", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.unboxingValueOfWrongTypeThrowsAnException);
            QUnit.test("GetValueOrDefaultWithArgWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.getValueOrDefaultWithArgWorks);
            QUnit.test("LiftedEqualityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedEqualityWorks);
            QUnit.test("LiftedInequalityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedInequalityWorks);
            QUnit.test("LiftedLessThanWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedLessThanWorks);
            QUnit.test("LiftedGreaterThanWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedGreaterThanWorks);
            QUnit.test("LiftedLessThanOrEqualWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedLessThanOrEqualWorks);
            QUnit.test("LiftedGreaterThanOrEqualWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedGreaterThanOrEqualWorks);
            QUnit.test("LiftedSubtractionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedSubtractionWorks);
            QUnit.test("LiftedAdditionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedAdditionWorks);
            QUnit.test("LiftedModWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedModWorks);
            QUnit.test("LiftedFloatingPointDivisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedFloatingPointDivisionWorks);
            QUnit.test("LiftedIntegerDivisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedIntegerDivisionWorks);
            QUnit.test("LiftedMultiplicationWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedMultiplicationWorks);
            QUnit.test("LiftedBitwiseAndWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedBitwiseAndWorks);
            QUnit.test("LiftedBitwiseOrWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedBitwiseOrWorks);
            QUnit.test("LiftedBitwiseXorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedBitwiseXorWorks);
            QUnit.test("LiftedLeftShiftWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedLeftShiftWorks);
            QUnit.test("LiftedSignedRightShiftWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedSignedRightShiftWorks);
            QUnit.test("LiftedUnsignedRightShiftWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedUnsignedRightShiftWorks);
            QUnit.test("LiftedBooleanAndWorks #314", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedBooleanAndWorks);
            QUnit.test("LiftedBooleanOrWorks #314", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedBooleanOrWorks);
            QUnit.test("LiftedBooleanNotWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedBooleanNotWorks);
            QUnit.test("LiftedNegationWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedNegationWorks);
            QUnit.test("LiftedUnaryPlusWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedUnaryPlusWorks);
            QUnit.test("LiftedOnesComplementWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.liftedOnesComplementWorks);
            QUnit.test("CoalesceWorks #314", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.coalesceWorks);
            QUnit.module("NumberFormatInfo");
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.typePropertiesAreCorrect);
            QUnit.test("GetFormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.getFormatWorks);
            QUnit.test("InvariantWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.invariantWorks);
            QUnit.module("Property accessor");
            QUnit.test("AccessorsCanBeInvokedInstance", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.accessorsCanBeInvokedInstance);
            QUnit.test("AccessorsCanBeInvokedStatic", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.accessorsCanBeInvokedStatic);
            QUnit.test("AccessorsCanBeInvokedGeneric", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.accessorsCanBeInvokedGeneric);
            QUnit.test("AccessorsCanBeInvokedGenericStatic", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.accessorsCanBeInvokedGenericStatic);
            QUnit.test("BaseAccessorsCanBeInvoked", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.baseAccessorsCanBeInvoked);
            QUnit.test("BaseAccessorsCanBeInvokedGeneric", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.baseAccessorsCanBeInvokedGeneric);
            QUnit.module("Regex");
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.typePropertiesAreCorrect);
            QUnit.test("StringOnlyConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.stringOnlyConstructorWorks);
            QUnit.test("ConstructorWithFlagsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.constructorWithFlagsWorks);
            QUnit.test("GlobalFlagWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.globalFlagWorks);
            QUnit.test("IgnoreCaseFlagWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.ignoreCaseFlagWorks);
            QUnit.test("MultilineFlagWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.multilineFlagWorks);
            QUnit.test("PatternPropertyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.patternPropertyWorks);
            QUnit.test("SourcePropertyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.sourcePropertyWorks);
            QUnit.test("ExecWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.execWorks);
            QUnit.test("LastIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.lastIndexWorks);
            QUnit.test("TestWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.testWorks);
            QUnit.test("EscapeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.escapeWorks);
            QUnit.module("Simple types");
            QUnit.test("Byte - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.typePropertiesAreCorrect);
            QUnit.test("Byte - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.castsWork);
            QUnit.test("Byte - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.defaultValueIs0);
            QUnit.test("Byte - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.constantsWork);
            QUnit.test("Byte - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.formatWorks);
            QUnit.test("Byte - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.iFormattableToStringWorks);
            QUnit.test("Byte - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.tryParseWorks);
            QUnit.test("Byte - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.toStringWithoutRadixWorks);
            QUnit.test("Byte - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.toStringWithRadixWorks);
            QUnit.test("Byte - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.getHashCodeWorks);
            QUnit.test("Byte - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.equalsWorks);
            QUnit.test("Byte - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.iEquatableEqualsWorks);
            QUnit.test("Byte - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.compareToWorks);
            QUnit.test("Byte - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.iComparableCompareToWorks);
            QUnit.test("Char - TypePropertiesAreInt32", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.typePropertiesAreInt32);
            QUnit.test("Char - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.castsWork);
            QUnit.test("Char - DefaultValueWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.defaultValueWorks);
            QUnit.test("Char - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.constantsWork);
            QUnit.test("Char - CharComparisonWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.charComparisonWorks);
            QUnit.test("Char - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.parseWorks);
            QUnit.test("Char - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.formatWorks);
            QUnit.test("Char - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.iFormattableToStringWorks);
            QUnit.test("Char - ToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.toStringWorks);
            QUnit.test("Char - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.getHashCodeWorks);
            QUnit.test("Char - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.equalsWorks);
            QUnit.test("Char - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.iEquatableEqualsWorks);
            QUnit.test("Char - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.compareToWorks);
            QUnit.test("Char - IsLowerWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.isLowerWorks);
            QUnit.test("Char - IsUpperWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.isUpperWorks);
            QUnit.test("Char - ToLowerWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.toLowerWorks);
            QUnit.test("Char - ToUpperWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.toUpperWorks);
            QUnit.test("Char - IsDigitWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.isDigitWorks);
            QUnit.test("Char - IsWhiteSpaceWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.isWhiteSpaceWorks);
            QUnit.test("Char - IsDigitWithStringAndIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.isDigitWithStringAndIndexWorks);
            QUnit.test("Char - IsWhiteSpaceWithStringAndIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.isWhiteSpaceWithStringAndIndexWorks);
            QUnit.test("Decimal - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.typePropertiesAreCorrect);
            QUnit.test("Decimal - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.defaultValueIs0);
            QUnit.test("Decimal - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.constantsWork);
            QUnit.test("Decimal - ConvertingConstructorsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.convertingConstructorsWork);
            QUnit.test("Decimal - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.formatWorks);
            QUnit.test("Decimal - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.iFormattableToStringWorks);
            QUnit.test("Decimal - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.toStringWithoutRadixWorks);
            QUnit.test("Decimal - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.toStringWithRadixWorks);
            QUnit.test("Decimal - ToExponentialWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.toExponentialWorks);
            QUnit.test("Decimal - ToExponentialWithFractionalDigitsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.toExponentialWithFractionalDigitsWorks);
            QUnit.test("Decimal - ToFixed", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.toFixed);
            QUnit.test("Decimal - ToFixedWithFractionalDigitsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.toFixedWithFractionalDigitsWorks);
            QUnit.test("Decimal - ToPrecisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.toPrecisionWorks);
            QUnit.test("Decimal - ToPrecisionWithPrecisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.toPrecisionWithPrecisionWorks);
            QUnit.test("Decimal - ConversionsToDecimalWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.conversionsToDecimalWork);
            QUnit.test("Decimal - ConversionsFromDecimalWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.conversionsFromDecimalWork);
            QUnit.test("Decimal - OperatorsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.operatorsWork);
            QUnit.test("Decimal - AddWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.addWorks);
            QUnit.test("Decimal - CeilingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.ceilingWorks);
            QUnit.test("Decimal - DivideWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.divideWorks);
            QUnit.test("Decimal - FloorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.floorWorks);
            QUnit.test("Decimal - RemainderWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.remainderWorks);
            QUnit.test("Decimal - MultiplyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.multiplyWorks);
            QUnit.test("Decimal - NegateWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.negateWorks);
            QUnit.test("Decimal - RoundWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.roundWorks);
            QUnit.test("Decimal - SubtractWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.subtractWorks);
            QUnit.test("Decimal - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.getHashCodeWorks);
            QUnit.test("Decimal - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.equalsWorks);
            QUnit.test("Decimal - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.iEquatableEqualsWorks);
            QUnit.test("Decimal - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.compareToWorks);
            QUnit.test("Double - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.typePropertiesAreCorrect);
            QUnit.test("Double - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.defaultValueIs0);
            QUnit.test("Double - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.constantsWork);
            QUnit.test("Double - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.formatWorks);
            QUnit.test("Double - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.iFormattableToStringWorks);
            QUnit.test("Double - ToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.toStringWorks);
            QUnit.test("Double - ToExponentialWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.toExponentialWorks);
            QUnit.test("Double - ToExponentialWithFractionalDigitsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.toExponentialWithFractionalDigitsWorks);
            QUnit.test("Double - ToFixed", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.toFixed);
            QUnit.test("Double - ToFixedWithFractionalDigitsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.toFixedWithFractionalDigitsWorks);
            QUnit.test("Double - ToPrecisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.toPrecisionWorks);
            QUnit.test("Double - ToPrecisionWithPrecisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.toPrecisionWithPrecisionWorks);
            QUnit.test("Double - IsPositiveInfinityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.isPositiveInfinityWorks);
            QUnit.test("Double - IsNegativeInfinityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.isNegativeInfinityWorks);
            QUnit.test("Double - IsInfinityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.isInfinityWorks);
            QUnit.test("Double - IsFiniteWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.isFiniteWorks);
            QUnit.test("Double - IsNaNWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.isNaNWorks);
            QUnit.test("Double - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.getHashCodeWorks);
            QUnit.test("Double - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.equalsWorks);
            QUnit.test("Double - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.iEquatableEqualsWorks);
            QUnit.test("Double - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.compareToWorks);
            QUnit.test("Int16 - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.typePropertiesAreCorrect);
            QUnit.test("Int16 - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.castsWork);
            QUnit.test("Int16 - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.defaultValueIs0);
            QUnit.test("Int16 - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.constantsWork);
            QUnit.test("Int16 - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.formatWorks);
            QUnit.test("Int16 - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.iFormattableToStringWorks);
            QUnit.test("Int16 - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.tryParseWorks);
            QUnit.test("Int16 - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.parseWorks);
            QUnit.test("Int16 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.toStringWithoutRadixWorks);
            QUnit.test("Int16 - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.toStringWithRadixWorks);
            QUnit.test("Int16 - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.getHashCodeWorks);
            QUnit.test("Int16 - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.equalsWorks);
            QUnit.test("Int16 - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.iEquatableEqualsWorks);
            QUnit.test("Int16 - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.compareToWorks);
            QUnit.test("Int16 - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.iComparableCompareToWorks);
            QUnit.test("Int32 - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.typePropertiesAreCorrect);
            QUnit.test("Int32 - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.castsWork);
            QUnit.test("Int32 - TypeIsWorksForInt32", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.typeIsWorksForInt32);
            QUnit.test("Int32 - TypeAsWorksForInt32", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.typeAsWorksForInt32);
            QUnit.test("Int32 - UnboxingWorksForInt32", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.unboxingWorksForInt32);
            QUnit.test("Int32 - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.defaultValueIs0);
            QUnit.test("Int32 - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.constantsWork);
            QUnit.test("Int32 - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.formatWorks);
            QUnit.test("Int32 - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.iFormattableToStringWorks);
            QUnit.test("Int32 - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.tryParseWorks);
            QUnit.test("Int32 - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.parseWorks);
            QUnit.test("Int32 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.toStringWithoutRadixWorks);
            QUnit.test("Int32 - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.toStringWithRadixWorks);
            QUnit.test("Int32 - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.getHashCodeWorks);
            QUnit.test("Int32 - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.equalsWorks);
            QUnit.test("Int32 - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.iEquatableEqualsWorks);
            QUnit.test("Int32 - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.compareToWorks);
            QUnit.test("Int32 - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.iComparableCompareToWorks);
            QUnit.test("Int32 - IntegerDivisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.integerDivisionWorks);
            QUnit.test("Int32 - IntegerModuloWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.integerModuloWorks);
            QUnit.test("Int32 - IntegerDivisionByZeroThrowsDivideByZeroException", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.integerDivisionByZeroThrowsDivideByZeroException);
            QUnit.test("Int32 - DoublesAreTruncatedWhenConvertedToIntegers", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.doublesAreTruncatedWhenConvertedToIntegers);
            QUnit.test("Int64 - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.typePropertiesAreCorrect);
            QUnit.test("Int64 - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.castsWork);
            QUnit.test("Int64 - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.defaultValueIs0);
            QUnit.test("Int64 - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.formatWorks);
            QUnit.test("Int64 - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.iFormattableToStringWorks);
            QUnit.test("Int64 - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.tryParseWorks);
            QUnit.test("Int64 - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.parseWorks);
            QUnit.test("Int64 - CastingOfLargeDoublesToInt64Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.castingOfLargeDoublesToInt64Works);
            QUnit.test("Int64 - DivisionOfLargeInt64Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.divisionOfLargeInt64Works);
            QUnit.test("Int64 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.toStringWithoutRadixWorks);
            QUnit.test("Int64 - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.toStringWithRadixWorks);
            QUnit.test("Int64 - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.getHashCodeWorks);
            QUnit.test("Int64 - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.equalsWorks);
            QUnit.test("Int64 - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.iEquatableEqualsWorks);
            QUnit.test("Int64 - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.compareToWorks);
            QUnit.test("Int64 - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.iComparableCompareToWorks);
            QUnit.test("Object - CanGetHashCodeForObject", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.canGetHashCodeForObject);
            QUnit.test("Object - RepeatedCallsToGetHashCodeReturnsSameValue", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.repeatedCallsToGetHashCodeReturnsSameValue);
            QUnit.test("Object - ObjectIsEqualToItself", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.objectIsEqualToItself);
            QUnit.test("Object - StaticEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.staticEqualsWorks);
            QUnit.test("Object - ReferenceEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.referenceEqualsWorks);
            QUnit.test("Object - ToStringOverride", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.toStringOverride);
            QUnit.test("SByte - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.typePropertiesAreCorrect);
            QUnit.test("SByte - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.castsWork);
            QUnit.test("SByte - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.defaultValueIs0);
            QUnit.test("SByte - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.constantsWork);
            QUnit.test("SByte - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.formatWorks);
            QUnit.test("SByte - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.iFormattableToStringWorks);
            QUnit.test("SByte - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.tryParseWorks);
            QUnit.test("SByte - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.parseWorks);
            QUnit.test("SByte - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.toStringWithoutRadixWorks);
            QUnit.test("SByte - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.toStringWithRadixWorks);
            QUnit.test("SByte - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.getHashCodeWorks);
            QUnit.test("SByte - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.equalsWorks);
            QUnit.test("SByte - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.iEquatableEqualsWorks);
            QUnit.test("SByte - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.compareToWorks);
            QUnit.test("SByte - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.iComparableCompareToWorks);
            QUnit.test("Float - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.typePropertiesAreCorrect);
            QUnit.test("Float - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.defaultValueIs0);
            QUnit.test("Float - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.constantsWork);
            QUnit.test("Float - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.formatWorks);
            QUnit.test("Float - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.iFormattableToStringWorks);
            QUnit.test("Float - ToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.toStringWorks);
            QUnit.test("Float - ToExponentialWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.toExponentialWorks);
            QUnit.test("Float - ToExponentialWithFractionalDigitsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.toExponentialWithFractionalDigitsWorks);
            QUnit.test("Float - ToFixed", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.toFixed);
            QUnit.test("Float - ToFixedWithFractionalDigitsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.toFixedWithFractionalDigitsWorks);
            QUnit.test("Float - ToPrecisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.toPrecisionWorks);
            QUnit.test("Float - ToPrecisionWithPrecisionWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.toPrecisionWithPrecisionWorks);
            QUnit.test("Float - IsPositiveInfinityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.isPositiveInfinityWorks);
            QUnit.test("Float - IsNegativeInfinityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.isNegativeInfinityWorks);
            QUnit.test("Float - IsInfinityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.isInfinityWorks);
            QUnit.test("Float - IsFiniteWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.isFiniteWorks);
            QUnit.test("Float - IsNaNWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.isNaNWorks);
            QUnit.test("Float - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.getHashCodeWorks);
            QUnit.test("Float - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.equalsWorks);
            QUnit.test("Float - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.compareToWorks);
            QUnit.test("Tuple1Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple1Works);
            QUnit.test("Tuple2Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple2Works);
            QUnit.test("Tuple3Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple3Works);
            QUnit.test("Tuple4Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple4Works);
            QUnit.test("Tuple5Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple5Works);
            QUnit.test("Tuple6Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple6Works);
            QUnit.test("Tuple7Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple7Works);
            QUnit.test("Tuple8Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.tuple8Works);
            QUnit.test("UInt16 - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.typePropertiesAreCorrect);
            QUnit.test("UInt16 - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.castsWork);
            QUnit.test("UInt16 - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.defaultValueIs0);
            QUnit.test("UInt16 - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.constantsWork);
            QUnit.test("UInt16 - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.formatWorks);
            QUnit.test("UInt16 - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.iFormattableToStringWorks);
            QUnit.test("UInt16 - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.tryParseWorks);
            QUnit.test("UInt16 - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.parseWorks);
            QUnit.test("UInt16 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.toStringWithoutRadixWorks);
            QUnit.test("UInt16 - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.toStringWithRadixWorks);
            QUnit.test("UInt16 - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.getHashCodeWorks);
            QUnit.test("UInt16 - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.equalsWorks);
            QUnit.test("UInt16 - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.iEquatableEqualsWorks);
            QUnit.test("UInt16 - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.compareToWorks);
            QUnit.test("UInt16 - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.iComparableCompareToWorks);
            QUnit.test("UInt32 - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.typePropertiesAreCorrect);
            QUnit.test("UInt32 - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.castsWork);
            QUnit.test("UInt32 - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.defaultValueIs0);
            QUnit.test("UInt32 - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.constantsWork);
            QUnit.test("UInt32 - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.formatWorks);
            QUnit.test("UInt32 - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.iFormattableToStringWorks);
            QUnit.test("UInt32 - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.tryParseWorks);
            QUnit.test("UInt32 - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.parseWorks);
            QUnit.test("UInt32 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.toStringWithoutRadixWorks);
            QUnit.test("UInt32 - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.toStringWithRadixWorks);
            QUnit.test("UInt32 - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.getHashCodeWorks);
            QUnit.test("UInt32 - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.equalsWorks);
            QUnit.test("UInt32 - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.iEquatableEqualsWorks);
            QUnit.test("UInt32 - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.compareToWorks);
            QUnit.test("UInt32 - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.iComparableCompareToWorks);
            QUnit.test("UInt64 - TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.typePropertiesAreCorrect);
            QUnit.test("UInt64 - CastsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.castsWork);
            QUnit.test("UInt64 - DefaultValueIs0", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.defaultValueIs0);
            QUnit.test("UInt64 - ConstantsWork", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.constantsWork);
            QUnit.test("UInt64 - FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.formatWorks);
            QUnit.test("UInt64 - IFormattableToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.iFormattableToStringWorks);
            QUnit.test("UInt64 - CastingOfLargeValuesToUInt64Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.castingOfLargeValuesToUInt64Works);
            QUnit.test("UInt64 - DivisionOfLargeUInt64Works", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.divisionOfLargeUInt64Works);
            QUnit.test("UInt64 - TryParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.tryParseWorks);
            QUnit.test("UInt64 - ParseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.parseWorks);
            QUnit.test("UInt64 - ToStringWithoutRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.toStringWithoutRadixWorks);
            QUnit.test("UInt64 - ToStringWithRadixWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.toStringWithRadixWorks);
            QUnit.test("UInt64 - GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.getHashCodeWorks);
            QUnit.test("UInt64 - EqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.equalsWorks);
            QUnit.test("UInt64 - IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.iEquatableEqualsWorks);
            QUnit.test("UInt64 - CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.compareToWorks);
            QUnit.test("UInt64 - IComparableCompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.iComparableCompareToWorks);
            QUnit.module("String");
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.typePropertiesAreCorrect);
            QUnit.test("DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.defaultConstructorWorks);
            QUnit.test("CopyConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.copyConstructorWorks);
            QUnit.test("CharAndCountConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.charAndCountConstructorWorks);
            QUnit.test("CharArrayConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.charArrayConstructorWorks);
            QUnit.test("EmptyFieldWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.emptyFieldWorks);
            QUnit.test("LengthPropertyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lengthPropertyWorks);
            QUnit.test("CharAtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.charAtWorks);
            QUnit.test("CharCodeAtWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.charCodeAtWorks);
            QUnit.test("CompareWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.compareWorks);
            QUnit.test("CompareWithIgnoreCaseArgWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.compareWithIgnoreCaseArgWorks);
            QUnit.test("ConcatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.concatWorks);
            QUnit.test("ConcatWithObjectsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.concatWithObjectsWorks);
            QUnit.test("EndsWithCharWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.endsWithCharWorks);
            QUnit.test("EndsWithStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.endsWithStringWorks);
            QUnit.test("StaticEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.staticEqualsWorks);
            QUnit.test("FormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.formatWorks);
            QUnit.test("FormatWorksWithIFormattable", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.formatWorksWithIFormattable);
            QUnit.test("FormatCanUseEscapedBraces", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.formatCanUseEscapedBraces);
            QUnit.test("FromCharCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.fromCharCodeWorks);
            QUnit.test("IndexOfCharWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfCharWorks);
            QUnit.test("IndexOfStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfStringWorks);
            QUnit.test("IndexOfCharWithStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfCharWithStartIndexWorks);
            QUnit.test("IndexOfCharWithStartIndexAndCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfCharWithStartIndexAndCountWorks);
            QUnit.test("IndexOfStringWithStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfStringWithStartIndexWorks);
            QUnit.test("IndexOfStringWithStartIndexAndCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfStringWithStartIndexAndCountWorks);
            QUnit.test("IndexOfAnyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfAnyWorks);
            QUnit.test("IndexOfAnyWithStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfAnyWithStartIndexWorks);
            QUnit.test("IndexOfAnyWithStartIndexAndCountWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.indexOfAnyWithStartIndexAndCountWorks);
            QUnit.test("IsNullOrEmptyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.isNullOrEmptyWorks);
            QUnit.test("LastIndexOfCharWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lastIndexOfCharWorks);
            QUnit.test("LastIndexOfStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lastIndexOfStringWorks);
            QUnit.test("LastIndexOfCharWithStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lastIndexOfCharWithStartIndexWorks);
            QUnit.test("LastIndexOfStringWithStartIndexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.lastIndexOfStringWithStartIndexWorks);
            QUnit.test("LocaleCompareWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.localeCompareWorks);
            QUnit.test("MatchWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.matchWorks);
            QUnit.test("ReplaceWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.replaceWorks);
            QUnit.test("ReplaceCharWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.replaceCharWorks);
            QUnit.test("ReplaceRegexWithReplaceTextWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.replaceRegexWithReplaceTextWorks);
            QUnit.test("ReplaceRegexWithReplaceCallbackWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.replaceRegexWithReplaceCallbackWorks);
            QUnit.test("SearchWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.searchWorks);
            QUnit.test("SplitWithStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.splitWithStringWorks);
            QUnit.test("SplitWithRegexWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.splitWithRegexWorks);
            QUnit.test("StartsWithStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.startsWithStringWorks);
            QUnit.test("SubstrWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.substrWorks);
            QUnit.test("SubstrWithLengthWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.substrWithLengthWorks);
            QUnit.test("SubstringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.substringWorks);
            QUnit.test("SubstringWithLengthWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.substringWithLengthWorks);
            QUnit.test("ToLowerCaseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.toLowerCaseWorks);
            QUnit.test("ToUpperCaseWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.toUpperCaseWorks);
            QUnit.test("ToLowerWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.toLowerWorks);
            QUnit.test("ToUpperWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.toUpperWorks);
            QUnit.test("TrimWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.trimWorks);
            QUnit.test("StringEqualityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.stringEqualityWorks);
            QUnit.test("StringInequalityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.stringInequalityWorks);
            QUnit.test("StringIndexingWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.stringIndexingWorks);
            QUnit.test("GetHashCodeWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.getHashCodeWorks);
            QUnit.test("InstanceEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.instanceEqualsWorks);
            QUnit.test("IEquatableEqualsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.iEquatableEqualsWorks);
            QUnit.test("CompareToWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.compareToWorks);
            QUnit.test("ContainsWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.containsWorks);
            QUnit.test("ToCharArrayWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.toCharArrayWorks);
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.typePropertiesAreCorrect);
            QUnit.test("DefaultConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.defaultConstructorWorks);
            QUnit.test("ConstructorWithCapacityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.constructorWithCapacityWorks);
            QUnit.test("InitialTextConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.initialTextConstructorWorks);
            QUnit.test("InitialTextConstructorWithCapacityWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.initialTextConstructorWithCapacityWorks);
            QUnit.test("SubstringConstructorWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.substringConstructorWorks);
            QUnit.test("AppendBoolWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendBoolWorks);
            QUnit.test("AppendCharWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendCharWorks);
            QUnit.test("AppendIntWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendIntWorks);
            QUnit.test("AppendDoubleWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendDoubleWorks);
            QUnit.test("AppendObjectWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendObjectWorks);
            QUnit.test("AppendStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendStringWorks);
            QUnit.test("AppendLineWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendLineWorks);
            QUnit.test("AppendLineStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.appendLineStringWorks);
            QUnit.test("ClearWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.clearWorks);
            QUnit.test("ToStringWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.toStringWorks);
            QUnit.test("LengthPropertyWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.lengthPropertyWorks);
            QUnit.module("Utilities");
            QUnit.test("NewLineIsAStringContainingOnlyTheNewLineChar", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.newLineIsAStringContainingOnlyTheNewLineChar);
            QUnit.module("СultureInfo");
            QUnit.test("TypePropertiesAreCorrect", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.typePropertiesAreCorrect);
            QUnit.test("GetFormatWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.getFormatWorks);
            QUnit.test("InvariantWorks", Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.invariantWorks);
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @type Bridge.ClientTest.ArrayTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @function getInstance
         * @return  {Bridge.ClientTest.ArrayTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @function setInstance
         * @param   {Bridge.ClientTest.ArrayTests}    value    
         * @return  {void}                                     
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.instance = new Bridge.ClientTest.ArrayTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @function getInstance
         * @return  {Bridge.ClientTest.ArrayTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @function setInstance
         * @param   {Bridge.ClientTest.ArrayTests}    value    
         * @return  {void}                                     
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {boolean}                         isStatic    
         * @param   {Bridge.QUnit.Assert}             assert      
         * @return  {Bridge.ClientTest.ArrayTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        lengthWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.lengthWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        rankIsOne: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.rankIsOne();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getLengthWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.getLengthWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getLowerBound: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.getLowerBound();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getUpperBoundWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.getUpperBoundWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        gettingValueByIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.gettingValueByIndexWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getValueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.getValueWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        settingValueByIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.settingValueByIndexWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        setValueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.setValueWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        foreachWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.foreachWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        concatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.concatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        containsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.containsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        containsUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.containsUsesEqualsMethod();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        allWithArrayItemFilterCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.allWithArrayItemFilterCallbackWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        sliceWithoutEndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.sliceWithoutEndWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        foreachWithArrayItemCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.foreachWithArrayItemCallbackWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        foreachWithArrayCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.foreachWithArrayCallbackWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexOfWithoutStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.indexOfWithoutStartIndexWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexOfWithoutStartIndexUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.indexOfWithoutStartIndexUsesEqualsMethod();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexOfWithStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.indexOfWithStartIndexWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        joinWithoutDelimiterWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.joinWithoutDelimiterWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        reverseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.reverseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        anyWithArrayItemFilterCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.anyWithArrayItemFilterCallbackWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        sortWithDefaultCompareWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.sortWithDefaultCompareWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        foreachWhenCastToIListWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.foreachWhenCastToIListWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iCollectionCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iCollectionCountWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iCollectionAddWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iCollectionAddWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iCollectionClearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iCollectionClearWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iCollectionContainsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iCollectionContainsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iCollectionContainsUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iCollectionContainsUsesEqualsMethod();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iCollectionRemoveWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iCollectionRemoveWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iListIndexingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iListIndexingWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iListIndexOfWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iListIndexOfWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iListIndexOfUsesEqualsMethod: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iListIndexOfUsesEqualsMethod();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iListInsertWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iListInsertWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iListRemoveAtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestArrayTests.beforeTest(false, assert);
            t.iListRemoveAtWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @type Bridge.ClientTest.Collections.Generic.ComparerTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.ComparerTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.ComparerTests}    value    
         * @return  {void}                                                            
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.instance = new Bridge.ClientTest.Collections.Generic.ComparerTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.ComparerTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.ComparerTests}    value    
         * @return  {void}                                                            
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @param   {boolean}                                                isStatic    
         * @param   {Bridge.QUnit.Assert}                                    assert      
         * @return  {Bridge.ClientTest.Collections.Generic.ComparerTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        createWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericComparerTests.beforeTest(false, assert);
            t.createWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @type Bridge.ClientTest.Collections.Generic.GenericDictionaryTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.GenericDictionaryTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.GenericDictionaryTests}    value    
         * @return  {void}                                                                     
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.instance = new Bridge.ClientTest.Collections.Generic.GenericDictionaryTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.GenericDictionaryTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.GenericDictionaryTests}    value    
         * @return  {void}                                                                     
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {boolean}                                                         isStatic    
         * @param   {Bridge.QUnit.Assert}                                             assert      
         * @return  {Bridge.ClientTest.Collections.Generic.GenericDictionaryTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        capacityConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.capacityConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        capacityAndEqualityComparerWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.capacityAndEqualityComparerWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalityComparerOnlyConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.equalityComparerOnlyConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        countWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.countWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        keysWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.keysWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        valuesWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.valuesWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexerGetterWorksForExistingItems: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.indexerGetterWorksForExistingItems();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexerSetterWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.indexerSetterWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexerGetterThrowsForNonExistingItems: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            assert.expect(0);
            t.indexerGetterThrowsForNonExistingItems();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        addWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.addWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        addThrowsIfItemAlreadyExists: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            assert.expect(0);
            t.addThrowsIfItemAlreadyExists();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        clearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.clearWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        containsKeyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.containsKeyWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        enumeratingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.enumeratingWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        removeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.removeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tryGetValueWithIntKeysWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.tryGetValueWithIntKeysWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tryGetValueWithObjectKeysWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.tryGetValueWithObjectKeysWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        canUseCustomComparer: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericGenericDictionaryTests.beforeTest(false, assert);
            t.canUseCustomComparer();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @type Bridge.ClientTest.Collections.Generic.ICollectionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.ICollectionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.ICollectionTests}    value    
         * @return  {void}                                                               
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.instance = new Bridge.ClientTest.Collections.Generic.ICollectionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.ICollectionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.ICollectionTests}    value    
         * @return  {void}                                                               
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @param   {boolean}                                                   isStatic    
         * @param   {Bridge.QUnit.Assert}                                       assert      
         * @return  {Bridge.ClientTest.Collections.Generic.ICollectionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        customClassThatShouldImplementICollectionDoesSo: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.customClassThatShouldImplementICollectionDoesSo();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingICollectionCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionCountWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingICollectionCastToICollectionCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionCountWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingICollectionAddWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionAddWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingICollectionCastToICollectionAddWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionAddWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingICollectionClearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionClearWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingICollectionCastToICollectionClearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionClearWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingICollectionContainsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionContainsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingICollectionCastToICollectionContainsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionContainsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingICollectionRemoveWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionRemoveWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingICollectionCastToICollectionRemoveWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericICollectionTests.beforeTest(false, assert);
            t.classImplementingICollectionCastToICollectionRemoveWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @type Bridge.ClientTest.Collections.Generic.IDictionaryTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.IDictionaryTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.IDictionaryTests}    value    
         * @return  {void}                                                               
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.instance = new Bridge.ClientTest.Collections.Generic.IDictionaryTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.IDictionaryTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.IDictionaryTests}    value    
         * @return  {void}                                                               
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @param   {boolean}                                                   isStatic    
         * @param   {Bridge.QUnit.Assert}                                       assert      
         * @return  {Bridge.ClientTest.Collections.Generic.IDictionaryTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementsInterfaces: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.classImplementsInterfaces();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        countWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.countWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        addWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.addWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        clearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.clearWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        removeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.removeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        setItemWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIDictionaryTests.beforeTest(false, assert);
            t.setItemWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @type Bridge.ClientTest.Collections.Generic.IEnumerableTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.IEnumerableTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.IEnumerableTests}    value    
         * @return  {void}                                                               
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.instance = new Bridge.ClientTest.Collections.Generic.IEnumerableTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.IEnumerableTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.IEnumerableTests}    value    
         * @return  {void}                                                               
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @param   {boolean}                                                   isStatic    
         * @param   {Bridge.QUnit.Assert}                                       assert      
         * @return  {Bridge.ClientTest.Collections.Generic.IEnumerableTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        customClassThatShouldImplementIEnumerableDoesSo: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.beforeTest(false, assert);
            t.customClassThatShouldImplementIEnumerableDoesSo();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        arrayGetEnumeratorMethodWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.beforeTest(false, assert);
            t.arrayGetEnumeratorMethodWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        arrayCastToIEnumerableCanBeEnumerated: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.beforeTest(false, assert);
            t.arrayCastToIEnumerableCanBeEnumerated();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingIEnumerableCanBeEnumerated: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.beforeTest(false, assert);
            t.classImplementingIEnumerableCanBeEnumerated();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingIEnumerableCastToIEnumerableCanBeEnumerated: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIEnumerableTests.beforeTest(false, assert);
            t.classImplementingIEnumerableCastToIEnumerableCanBeEnumerated();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @type Bridge.ClientTest.Collections.Generic.IListTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.IListTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.IListTests}    value    
         * @return  {void}                                                         
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.instance = new Bridge.ClientTest.Collections.Generic.IListTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.IListTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.IListTests}    value    
         * @return  {void}                                                         
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @param   {boolean}                                             isStatic    
         * @param   {Bridge.QUnit.Assert}                                 assert      
         * @return  {Bridge.ClientTest.Collections.Generic.IListTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        customClassThatShouldImplementIListDoesSo: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.customClassThatShouldImplementIListDoesSo();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingIListGetItemWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListGetItemWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingIListSetItemWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListSetItemWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingIListIndexOfWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListIndexOfWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingIListCastToIListIndexOfWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListCastToIListIndexOfWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingIListInsertWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListInsertWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingIListCastToIListInsertWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListCastToIListInsertWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingIListRemoveAtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListRemoveAtWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        classImplementingIListCastToIListRemoveAtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIListTests.beforeTest(false, assert);
            t.classImplementingIListCastToIListRemoveAtWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @type Bridge.ClientTest.Collections.Generic.IteratorBlockTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.IteratorBlockTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.IteratorBlockTests}    value    
         * @return  {void}                                                                 
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.instance = new Bridge.ClientTest.Collections.Generic.IteratorBlockTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.IteratorBlockTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.IteratorBlockTests}    value    
         * @return  {void}                                                                 
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @param   {boolean}                                                     isStatic    
         * @param   {Bridge.QUnit.Assert}                                         assert      
         * @return  {Bridge.ClientTest.Collections.Generic.IteratorBlockTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.typeReturnedByIteratorBlockReturningIEnumeratorImplementsThatInterfaceAndIDisposable();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        enumeratingIEnumeratorIteratorToEndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.enumeratingIEnumeratorIteratorToEndWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.prematureDisposalOfIEnumeratorIteratorExecutesFinallyBlocks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.exceptionInIEnumeratorIteratorBodyExecutesFinallyBlocks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.typeReturnedByIteratorBlockReturningIEnumerableImplementsThatInterface();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        enumeratingIEnumerableIteratorToEndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.enumeratingIEnumerableIteratorToEndWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.prematureDisposalOfIEnumerableIteratorExecutesFinallyBlocks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.exceptionInIEnumerableIteratorBodyExecutesFinallyBlocks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.enumeratingAnIteratorBlockReturningIEnumerableMultipleTimesUsesTheInitialValuesForParameters();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericIteratorBlockTests.beforeTest(false, assert);
            t.differentGetEnumeratorCallsOnIteratorBlockReturningIEnumerableGetOwnCopiesOfLocals();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @type Bridge.ClientTest.Collections.Generic.ListTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.ListTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.ListTests}    value    
         * @return  {void}                                                        
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.instance = new Bridge.ClientTest.Collections.Generic.ListTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Collections.Generic.ListTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Collections.Generic.ListTests}    value    
         * @return  {void}                                                        
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {boolean}                                            isStatic    
         * @param   {Bridge.QUnit.Assert}                                assert      
         * @return  {Bridge.ClientTest.Collections.Generic.ListTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructingFromArrayWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.constructingFromArrayWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructingFromListWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.constructingFromListWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructingFromIEnumerableWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.constructingFromIEnumerableWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        countWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.countWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.indexingWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        foreachWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.foreachWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getEnumeratorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.getEnumeratorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        addWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.addWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        addRangeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.addRangeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        clearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.clearWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        containsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.containsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        sliceWithoutEndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.sliceWithoutEndWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        sliceWithEndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.sliceWithEndWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        foreachWithListItemCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.foreachWithListItemCallbackWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        foreachWithListCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.foreachWithListCallbackWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexOfWithoutStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.indexOfWithoutStartIndexWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        insertWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.insertWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        joinWithoutDelimiterWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.joinWithoutDelimiterWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        joinWithDelimiterWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.joinWithDelimiterWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        removeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.removeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        removeCanRemoveNullItem: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.removeCanRemoveNullItem();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        removeAtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.removeAtWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        removeRangeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.removeRangeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        reverseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.reverseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        sortWithDefaultCompareWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.sortWithDefaultCompareWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        sortWithCompareCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.sortWithCompareCallbackWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        sortWithIComparerWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.sortWithIComparerWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        foreachWhenCastToIEnumerableWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.foreachWhenCastToIEnumerableWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iEnumerableGetEnumeratorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iEnumerableGetEnumeratorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iCollectionCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iCollectionCountWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iCollectionAddWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iCollectionAddWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iCollectionClearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iCollectionClearWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iCollectionContainsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iCollectionContainsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iCollectionRemoveCanRemoveNullItem: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iCollectionRemoveCanRemoveNullItem();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iListIndexingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iListIndexingWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iListIndexOfWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iListIndexOfWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iListInsertWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iListInsertWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iListRemoveAtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.iListRemoveAtWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toArrayWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCollectionsGenericListTests.beforeTest(false, assert);
            t.toArrayWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @type Bridge.ClientTest.CultureInfoTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @function getInstance
         * @return  {Bridge.ClientTest.CultureInfoTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @function setInstance
         * @param   {Bridge.ClientTest.CultureInfoTests}    value    
         * @return  {void}                                           
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.instance = new Bridge.ClientTest.CultureInfoTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @function getInstance
         * @return  {Bridge.ClientTest.CultureInfoTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @function setInstance
         * @param   {Bridge.ClientTest.CultureInfoTests}    value    
         * @return  {void}                                           
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @param   {boolean}                               isStatic    
         * @param   {Bridge.QUnit.Assert}                   assert      
         * @return  {Bridge.ClientTest.CultureInfoTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getFormatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.beforeTest(false, assert);
            t.getFormatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        invariantWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestCultureInfoTests.beforeTest(false, assert);
            t.invariantWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @type Bridge.ClientTest.DateTimeFormatInfoTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @function getInstance
         * @return  {Bridge.ClientTest.DateTimeFormatInfoTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @function setInstance
         * @param   {Bridge.ClientTest.DateTimeFormatInfoTests}    value    
         * @return  {void}                                                  
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.instance = new Bridge.ClientTest.DateTimeFormatInfoTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @function getInstance
         * @return  {Bridge.ClientTest.DateTimeFormatInfoTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @function setInstance
         * @param   {Bridge.ClientTest.DateTimeFormatInfoTests}    value    
         * @return  {void}                                                  
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @param   {boolean}                                      isStatic    
         * @param   {Bridge.QUnit.Assert}                          assert      
         * @return  {Bridge.ClientTest.DateTimeFormatInfoTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getFormatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.beforeTest(false, assert);
            t.getFormatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        invariantWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestDateTimeFormatInfoTests.beforeTest(false, assert);
            t.invariantWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests
         * @type Bridge.ClientTest.EnvironmentTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests
         * @function getInstance
         * @return  {Bridge.ClientTest.EnvironmentTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests
         * @function setInstance
         * @param   {Bridge.ClientTest.EnvironmentTests}    value    
         * @return  {void}                                           
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.instance = new Bridge.ClientTest.EnvironmentTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests
         * @function getInstance
         * @return  {Bridge.ClientTest.EnvironmentTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests
         * @function setInstance
         * @param   {Bridge.ClientTest.EnvironmentTests}    value    
         * @return  {void}                                           
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests
         * @param   {boolean}                               isStatic    
         * @param   {Bridge.QUnit.Assert}                   assert      
         * @return  {Bridge.ClientTest.EnvironmentTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        newLineIsAStringContainingOnlyTheNewLineChar: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestEnvironmentTests.beforeTest(false, assert);
            t.newLineIsAStringContainingOnlyTheNewLineChar();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @type Bridge.ClientTest.Exceptions.ArgumentExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.ArgumentExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.ArgumentExceptionTests}    value    
         * @return  {void}                                                            
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.instance = new Bridge.ClientTest.Exceptions.ArgumentExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.ArgumentExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.ArgumentExceptionTests}    value    
         * @return  {void}                                                            
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @param   {boolean}                                                isStatic    
         * @param   {Bridge.QUnit.Assert}                                    assert      
         * @return  {Bridge.ClientTest.Exceptions.ArgumentExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndParamNameWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndParamNameWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndParamNameAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndParamNameAndInnerExceptionWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @type Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests}    value    
         * @return  {void}                                                                
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.instance = new Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests}    value    
         * @return  {void}                                                                
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @param   {boolean}                                                    isStatic    
         * @param   {Bridge.QUnit.Assert}                                        assert      
         * @return  {Bridge.ClientTest.Exceptions.ArgumentNullExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithParamNameWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.beforeTest(false, assert);
            t.constructorWithParamNameWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithParamNameAndMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.beforeTest(false, assert);
            t.constructorWithParamNameAndMessageWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentNullExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @type Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests}    value    
         * @return  {void}                                                                      
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.instance = new Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests}    value    
         * @return  {void}                                                                      
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @param   {boolean}                                                          isStatic    
         * @param   {Bridge.QUnit.Assert}                                              assert      
         * @return  {Bridge.ClientTest.Exceptions.ArgumentOutOfRangeExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithParamNameWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.beforeTest(false, assert);
            t.constructorWithParamNameWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithParamNameAndMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.beforeTest(false, assert);
            t.constructorWithParamNameAndMessageWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithParamNameAndActualValueAndMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArgumentOutOfRangeExceptionTests.beforeTest(false, assert);
            t.constructorWithParamNameAndActualValueAndMessageWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @type Bridge.ClientTest.Exceptions.ArithmeticExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.ArithmeticExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.ArithmeticExceptionTests}    value    
         * @return  {void}                                                              
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.instance = new Bridge.ClientTest.Exceptions.ArithmeticExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.ArithmeticExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.ArithmeticExceptionTests}    value    
         * @return  {void}                                                              
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @param   {boolean}                                                  isStatic    
         * @param   {Bridge.QUnit.Assert}                                      assert      
         * @return  {Bridge.ClientTest.Exceptions.ArithmeticExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsArithmeticExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @type Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests}    value    
         * @return  {void}                                                                
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.instance = new Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests}    value    
         * @return  {void}                                                                
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @param   {boolean}                                                    isStatic    
         * @param   {Bridge.QUnit.Assert}                                        assert      
         * @return  {Bridge.ClientTest.Exceptions.DivideByZeroExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsDivideByZeroExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @type Bridge.ClientTest.Exceptions.ExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.ExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.ExceptionTests}    value    
         * @return  {void}                                                    
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.instance = new Bridge.ClientTest.Exceptions.ExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.ExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.ExceptionTests}    value    
         * @return  {void}                                                    
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @param   {boolean}                                        isStatic    
         * @param   {Bridge.QUnit.Assert}                            assert      
         * @return  {Bridge.ClientTest.Exceptions.ExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        messagePropertyCanBeOverridden: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.beforeTest(false, assert);
            t.messagePropertyCanBeOverridden();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        innerExceptionPropertyCanBeOverridden: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsExceptionTests.beforeTest(false, assert);
            t.innerExceptionPropertyCanBeOverridden();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @type Bridge.ClientTest.Exceptions.FormatExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.FormatExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.FormatExceptionTests}    value    
         * @return  {void}                                                          
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.instance = new Bridge.ClientTest.Exceptions.FormatExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.FormatExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.FormatExceptionTests}    value    
         * @return  {void}                                                          
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @param   {boolean}                                              isStatic    
         * @param   {Bridge.QUnit.Assert}                                  assert      
         * @return  {Bridge.ClientTest.Exceptions.FormatExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsFormatExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @type Bridge.ClientTest.Exceptions.InvalidCastExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.InvalidCastExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.InvalidCastExceptionTests}    value    
         * @return  {void}                                                               
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.instance = new Bridge.ClientTest.Exceptions.InvalidCastExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.InvalidCastExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.InvalidCastExceptionTests}    value    
         * @return  {void}                                                               
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @param   {boolean}                                                   isStatic    
         * @param   {Bridge.QUnit.Assert}                                       assert      
         * @return  {Bridge.ClientTest.Exceptions.InvalidCastExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidCastExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @type Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests}    value    
         * @return  {void}                                                                    
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.instance = new Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests}    value    
         * @return  {void}                                                                    
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @param   {boolean}                                                        isStatic    
         * @param   {Bridge.QUnit.Assert}                                            assert      
         * @return  {Bridge.ClientTest.Exceptions.InvalidOperationExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsInvalidOperationExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @type Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests}    value    
         * @return  {void}                                                               
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.instance = new Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests}    value    
         * @return  {void}                                                               
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @param   {boolean}                                                   isStatic    
         * @param   {Bridge.QUnit.Assert}                                       assert      
         * @return  {Bridge.ClientTest.Exceptions.KeyNotFoundExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsKeyNotFoundExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @type Bridge.ClientTest.Exceptions.NotImplementedExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.NotImplementedExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.NotImplementedExceptionTests}    value    
         * @return  {void}                                                                  
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.instance = new Bridge.ClientTest.Exceptions.NotImplementedExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.NotImplementedExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.NotImplementedExceptionTests}    value    
         * @return  {void}                                                                  
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @param   {boolean}                                                      isStatic    
         * @param   {Bridge.QUnit.Assert}                                          assert      
         * @return  {Bridge.ClientTest.Exceptions.NotImplementedExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotImplementedExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @type Bridge.ClientTest.Exceptions.NotSupportedExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.NotSupportedExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.NotSupportedExceptionTests}    value    
         * @return  {void}                                                                
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.instance = new Bridge.ClientTest.Exceptions.NotSupportedExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.NotSupportedExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.NotSupportedExceptionTests}    value    
         * @return  {void}                                                                
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @param   {boolean}                                                    isStatic    
         * @param   {Bridge.QUnit.Assert}                                        assert      
         * @return  {Bridge.ClientTest.Exceptions.NotSupportedExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNotSupportedExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @type Bridge.ClientTest.Exceptions.NullReferenceExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.NullReferenceExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.NullReferenceExceptionTests}    value    
         * @return  {void}                                                                 
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.instance = new Bridge.ClientTest.Exceptions.NullReferenceExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.NullReferenceExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.NullReferenceExceptionTests}    value    
         * @return  {void}                                                                 
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @param   {boolean}                                                     isStatic    
         * @param   {Bridge.QUnit.Assert}                                         assert      
         * @return  {Bridge.ClientTest.Exceptions.NullReferenceExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsNullReferenceExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @type Bridge.ClientTest.Exceptions.OverflowExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.OverflowExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.OverflowExceptionTests}    value    
         * @return  {void}                                                            
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.instance = new Bridge.ClientTest.Exceptions.OverflowExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Exceptions.OverflowExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Exceptions.OverflowExceptionTests}    value    
         * @return  {void}                                                            
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @param   {boolean}                                                isStatic    
         * @param   {Bridge.QUnit.Assert}                                    assert      
         * @return  {Bridge.ClientTest.Exceptions.OverflowExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithMessageAndInnerExceptionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionsOverflowExceptionTests.beforeTest(false, assert);
            t.constructorWithMessageAndInnerExceptionWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @type Bridge.ClientTest.ExceptionTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.ExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.ExceptionTests}    value    
         * @return  {void}                                         
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.instance = new Bridge.ClientTest.ExceptionTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @function getInstance
         * @return  {Bridge.ClientTest.ExceptionTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @function setInstance
         * @param   {Bridge.ClientTest.ExceptionTests}    value    
         * @return  {void}                                         
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @param   {boolean}                             isStatic    
         * @param   {Bridge.QUnit.Assert}                 assert      
         * @return  {Bridge.ClientTest.ExceptionTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        throwingAndCatchingExceptionsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.beforeTest(false, assert);
            t.throwingAndCatchingExceptionsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        exceptionOfWrongTypeIsNotCaught: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.beforeTest(false, assert);
            t.exceptionOfWrongTypeIsNotCaught();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        canCatchExceptionAsBaseType: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestExceptionTests.beforeTest(false, assert);
            t.canCatchExceptionAsBaseType();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @type Bridge.ClientTest.MathTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @function getInstance
         * @return  {Bridge.ClientTest.MathTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @function setInstance
         * @param   {Bridge.ClientTest.MathTests}    value    
         * @return  {void}                                    
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.instance = new Bridge.ClientTest.MathTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @function getInstance
         * @return  {Bridge.ClientTest.MathTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @function setInstance
         * @param   {Bridge.ClientTest.MathTests}    value    
         * @return  {void}                                    
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {boolean}                        isStatic    
         * @param   {Bridge.QUnit.Assert}            assert      
         * @return  {Bridge.ClientTest.MathTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.constantsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        absOfDoubleWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.absOfDoubleWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        absOfIntWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.absOfIntWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        absOfLongWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.absOfLongWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        absOfSbyteWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.absOfSbyteWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        absOfShortWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.absOfShortWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        absOfFloatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.absOfFloatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        absOfDecimalWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.absOfDecimalWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        acosWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.acosWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        asinWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.asinWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        atanWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.atanWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        atan2Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.atan2Works();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        cosWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.cosWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        expWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.expWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        floorOfDoubleWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.floorOfDoubleWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        floorOfDecimalWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.floorOfDecimalWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        logWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.logWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        maxOfByteWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfByteWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        maxOfDecimalWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfDecimalWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        maxOfDoubleWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfDoubleWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        maxOfShortWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfShortWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        maxOfIntWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfIntWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        maxOfLongWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfLongWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        maxOfSByteWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfSByteWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        maxOfFloatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfFloatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        maxOfUShortWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfUShortWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        maxOfUIntWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfUIntWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        maxOfULongWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.maxOfULongWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        minOfByteWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfByteWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        minOfDecimalWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfDecimalWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        minOfDoubleWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfDoubleWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        minOfShortWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfShortWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        minOfIntWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfIntWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        minOfLongWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfLongWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        minOfSByteWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfSByteWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        minOfFloatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfFloatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        minOfUShortWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfUShortWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        minOfUIntWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfUIntWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        minOfULongWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.minOfULongWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        powWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.powWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        randomWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.randomWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        roundOfDoubleWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.roundOfDoubleWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        sinWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.sinWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        sqrtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.sqrtWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tanWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestMathTests.beforeTest(false, assert);
            t.tanWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @type Bridge.ClientTest.NullableTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @function getInstance
         * @return  {Bridge.ClientTest.NullableTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @function setInstance
         * @param   {Bridge.ClientTest.NullableTests}    value    
         * @return  {void}                                        
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.instance = new Bridge.ClientTest.NullableTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @function getInstance
         * @return  {Bridge.ClientTest.NullableTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @function setInstance
         * @param   {Bridge.ClientTest.NullableTests}    value    
         * @return  {void}                                        
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {boolean}                            isStatic    
         * @param   {Bridge.QUnit.Assert}                assert      
         * @return  {Bridge.ClientTest.NullableTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        convertingToNullableWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.convertingToNullableWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        hasValueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.hasValueWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        boxingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.boxingWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        unboxingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.unboxingWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        valueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.valueWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        unboxingValueOfWrongTypeThrowsAnException: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.unboxingValueOfWrongTypeThrowsAnException();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getValueOrDefaultWithArgWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.getValueOrDefaultWithArgWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedEqualityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedEqualityWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedInequalityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedInequalityWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedLessThanWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedLessThanWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedGreaterThanWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedGreaterThanWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedLessThanOrEqualWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedLessThanOrEqualWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedGreaterThanOrEqualWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedGreaterThanOrEqualWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedSubtractionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedSubtractionWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedAdditionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedAdditionWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedModWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedModWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedFloatingPointDivisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedFloatingPointDivisionWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedIntegerDivisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedIntegerDivisionWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedMultiplicationWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedMultiplicationWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedBitwiseAndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedBitwiseAndWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedBitwiseOrWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedBitwiseOrWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedBitwiseXorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedBitwiseXorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedLeftShiftWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedLeftShiftWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedSignedRightShiftWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedSignedRightShiftWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedUnsignedRightShiftWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedUnsignedRightShiftWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedBooleanAndWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedBooleanAndWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedBooleanOrWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedBooleanOrWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedBooleanNotWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedBooleanNotWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedNegationWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedNegationWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedUnaryPlusWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedUnaryPlusWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        liftedOnesComplementWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.liftedOnesComplementWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        coalesceWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNullableTests.beforeTest(false, assert);
            t.coalesceWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @type Bridge.ClientTest.NumberFormatInfoTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @function getInstance
         * @return  {Bridge.ClientTest.NumberFormatInfoTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @function setInstance
         * @param   {Bridge.ClientTest.NumberFormatInfoTests}    value    
         * @return  {void}                                                
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.instance = new Bridge.ClientTest.NumberFormatInfoTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @function getInstance
         * @return  {Bridge.ClientTest.NumberFormatInfoTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @function setInstance
         * @param   {Bridge.ClientTest.NumberFormatInfoTests}    value    
         * @return  {void}                                                
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @param   {boolean}                                    isStatic    
         * @param   {Bridge.QUnit.Assert}                        assert      
         * @return  {Bridge.ClientTest.NumberFormatInfoTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getFormatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.beforeTest(false, assert);
            t.getFormatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        invariantWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestNumberFormatInfoTests.beforeTest(false, assert);
            t.invariantWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @type Bridge.ClientTest.PropertyAccessorTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @function getInstance
         * @return  {Bridge.ClientTest.PropertyAccessorTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @function setInstance
         * @param   {Bridge.ClientTest.PropertyAccessorTests}    value    
         * @return  {void}                                                
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.instance = new Bridge.ClientTest.PropertyAccessorTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @function getInstance
         * @return  {Bridge.ClientTest.PropertyAccessorTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @function setInstance
         * @param   {Bridge.ClientTest.PropertyAccessorTests}    value    
         * @return  {void}                                                
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @param   {boolean}                                    isStatic    
         * @param   {Bridge.QUnit.Assert}                        assert      
         * @return  {Bridge.ClientTest.PropertyAccessorTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        accessorsCanBeInvokedInstance: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.beforeTest(false, assert);
            t.accessorsCanBeInvokedInstance();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        accessorsCanBeInvokedStatic: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.beforeTest(false, assert);
            t.accessorsCanBeInvokedStatic();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        accessorsCanBeInvokedGeneric: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.beforeTest(false, assert);
            t.accessorsCanBeInvokedGeneric();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        accessorsCanBeInvokedGenericStatic: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.beforeTest(false, assert);
            t.accessorsCanBeInvokedGenericStatic();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        baseAccessorsCanBeInvoked: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.beforeTest(false, assert);
            t.baseAccessorsCanBeInvoked();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        baseAccessorsCanBeInvokedGeneric: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestPropertyAccessorTests.beforeTest(false, assert);
            t.baseAccessorsCanBeInvokedGeneric();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @type Bridge.ClientTest.SimpleTypes.ByteTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.ByteTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.ByteTests}    value    
         * @return  {void}                                                
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.instance = new Bridge.ClientTest.SimpleTypes.ByteTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.ByteTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.ByteTests}    value    
         * @return  {void}                                                
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {boolean}                                    isStatic    
         * @param   {Bridge.QUnit.Assert}                        assert      
         * @return  {Bridge.ClientTest.SimpleTypes.ByteTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.castsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.constantsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.formatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.equalsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.compareToWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesByteTests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @type Bridge.ClientTest.SimpleTypes.CharTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.CharTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.CharTests}    value    
         * @return  {void}                                                
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.instance = new Bridge.ClientTest.SimpleTypes.CharTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.CharTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.CharTests}    value    
         * @return  {void}                                                
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {boolean}                                    isStatic    
         * @param   {Bridge.QUnit.Assert}                        assert      
         * @return  {Bridge.ClientTest.SimpleTypes.CharTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreInt32: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.typePropertiesAreInt32();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.castsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultValueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.defaultValueWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.constantsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        charComparisonWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.charComparisonWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.parseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.formatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.toStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.equalsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.compareToWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isLowerWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.isLowerWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isUpperWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.isUpperWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toLowerWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.toLowerWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toUpperWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.toUpperWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isDigitWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.isDigitWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isWhiteSpaceWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.isWhiteSpaceWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isDigitWithStringAndIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.isDigitWithStringAndIndexWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isWhiteSpaceWithStringAndIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesCharTests.beforeTest(false, assert);
            t.isWhiteSpaceWithStringAndIndexWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @type Bridge.ClientTest.SimpleTypes.DecimalTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.DecimalTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.DecimalTests}    value    
         * @return  {void}                                                   
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.instance = new Bridge.ClientTest.SimpleTypes.DecimalTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.DecimalTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.DecimalTests}    value    
         * @return  {void}                                                   
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {boolean}                                       isStatic    
         * @param   {Bridge.QUnit.Assert}                           assert      
         * @return  {Bridge.ClientTest.SimpleTypes.DecimalTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.constantsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        convertingConstructorsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.convertingConstructorsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.formatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toExponentialWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.toExponentialWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toExponentialWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.toExponentialWithFractionalDigitsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toFixed: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.toFixed();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toFixedWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.toFixedWithFractionalDigitsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toPrecisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.toPrecisionWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toPrecisionWithPrecisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.toPrecisionWithPrecisionWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        conversionsToDecimalWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.conversionsToDecimalWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        conversionsFromDecimalWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.conversionsFromDecimalWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        operatorsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.operatorsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        addWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.addWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        ceilingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.ceilingWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        divideWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.divideWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        floorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.floorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        remainderWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.remainderWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        multiplyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.multiplyWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        negateWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.negateWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        roundWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.roundWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        subtractWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.subtractWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.equalsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDecimalTests.beforeTest(false, assert);
            t.compareToWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @type Bridge.ClientTest.SimpleTypes.DoubleTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.DoubleTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.DoubleTests}    value    
         * @return  {void}                                                  
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.instance = new Bridge.ClientTest.SimpleTypes.DoubleTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.DoubleTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.DoubleTests}    value    
         * @return  {void}                                                  
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {boolean}                                      isStatic    
         * @param   {Bridge.QUnit.Assert}                          assert      
         * @return  {Bridge.ClientTest.SimpleTypes.DoubleTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.constantsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.formatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.toStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toExponentialWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.toExponentialWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toExponentialWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.toExponentialWithFractionalDigitsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toFixed: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.toFixed();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toFixedWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.toFixedWithFractionalDigitsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toPrecisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.toPrecisionWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toPrecisionWithPrecisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.toPrecisionWithPrecisionWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isPositiveInfinityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.isPositiveInfinityWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isNegativeInfinityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.isNegativeInfinityWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isInfinityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.isInfinityWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isFiniteWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.isFiniteWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isNaNWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.isNaNWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.equalsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesDoubleTests.beforeTest(false, assert);
            t.compareToWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @type Bridge.ClientTest.SimpleTypes.EnumTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.EnumTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.EnumTests}    value    
         * @return  {void}                                                
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.instance = new Bridge.ClientTest.SimpleTypes.EnumTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.EnumTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.EnumTests}    value    
         * @return  {void}                                                
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @param   {boolean}                                    isStatic    
         * @param   {Bridge.QUnit.Assert}                        assert      
         * @return  {Bridge.ClientTest.SimpleTypes.EnumTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        firstValueOfEnumIsZero: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.beforeTest(false, assert);
            t.firstValueOfEnumIsZero();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesEnumTests.beforeTest(false, assert);
            t.equalsWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @type Bridge.ClientTest.SimpleTypes.Int16Tests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.Int16Tests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.Int16Tests}    value    
         * @return  {void}                                                 
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.instance = new Bridge.ClientTest.SimpleTypes.Int16Tests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.Int16Tests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.Int16Tests}    value    
         * @return  {void}                                                 
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {boolean}                                     isStatic    
         * @param   {Bridge.QUnit.Assert}                         assert      
         * @return  {Bridge.ClientTest.SimpleTypes.Int16Tests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.castsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.constantsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.formatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.parseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.equalsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.compareToWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt16Tests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @type Bridge.ClientTest.SimpleTypes.Int32Tests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.Int32Tests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.Int32Tests}    value    
         * @return  {void}                                                 
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.instance = new Bridge.ClientTest.SimpleTypes.Int32Tests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.Int32Tests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.Int32Tests}    value    
         * @return  {void}                                                 
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {boolean}                                     isStatic    
         * @param   {Bridge.QUnit.Assert}                         assert      
         * @return  {Bridge.ClientTest.SimpleTypes.Int32Tests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.castsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typeIsWorksForInt32: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.typeIsWorksForInt32();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typeAsWorksForInt32: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.typeAsWorksForInt32();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        unboxingWorksForInt32: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.unboxingWorksForInt32();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.constantsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.formatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.parseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.equalsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.compareToWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        integerDivisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.integerDivisionWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        integerModuloWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.integerModuloWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        integerDivisionByZeroThrowsDivideByZeroException: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.integerDivisionByZeroThrowsDivideByZeroException();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        doublesAreTruncatedWhenConvertedToIntegers: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt32Tests.beforeTest(false, assert);
            t.doublesAreTruncatedWhenConvertedToIntegers();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @type Bridge.ClientTest.SimpleTypes.Int64Tests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.Int64Tests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.Int64Tests}    value    
         * @return  {void}                                                 
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.instance = new Bridge.ClientTest.SimpleTypes.Int64Tests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.Int64Tests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.Int64Tests}    value    
         * @return  {void}                                                 
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {boolean}                                     isStatic    
         * @param   {Bridge.QUnit.Assert}                         assert      
         * @return  {Bridge.ClientTest.SimpleTypes.Int64Tests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.castsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.formatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.parseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        castingOfLargeDoublesToInt64Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.castingOfLargeDoublesToInt64Works();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        divisionOfLargeInt64Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.divisionOfLargeInt64Works();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.equalsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.compareToWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesInt64Tests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @type Bridge.ClientTest.SimpleTypes.JsDateTimeTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.JsDateTimeTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.JsDateTimeTests}    value    
         * @return  {void}                                                      
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.instance = new Bridge.ClientTest.SimpleTypes.JsDateTimeTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.JsDateTimeTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.JsDateTimeTests}    value    
         * @return  {void}                                                      
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {boolean}                                          isStatic    
         * @param   {Bridge.QUnit.Assert}                              assert      
         * @return  {Bridge.ClientTest.SimpleTypes.JsDateTimeTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorReturnsTodaysDate: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.defaultConstructorReturnsTodaysDate();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        creatingInstanceReturnsTodaysDate: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.creatingInstanceReturnsTodaysDate();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        millisecondSinceEpochConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.millisecondSinceEpochConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        stringConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.stringConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        yMDConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.yMDConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        yMDHConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.yMDHConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        yMDHNConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.yMDHNConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        yMDHNSConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.yMDHNSConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        yMDHNSUConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.yMDHNSUConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        nowWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.nowWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        uTCNowWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.uTCNowWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toUniversalWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.toUniversalWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toLocalWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.toLocalWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        todayWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.todayWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.formatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        localeFormatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.localeFormatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getFullYearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getFullYearWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getMonthWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getMonthWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getDateWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getDateWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHoursWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getHoursWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getMinutesWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getMinutesWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getSecondsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getSecondsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getMillisecondsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getMillisecondsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getDayWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getDayWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getTimeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getTimeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        valueOfWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.valueOfWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getTimezoneOffsetWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getTimezoneOffsetWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getUTCFullYearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUTCFullYearWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getUtcMonthWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUtcMonthWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getUTCDateWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUTCDateWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getUTCHoursWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUTCHoursWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getUTCMinutesWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUTCMinutesWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getUTCSecondsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUTCSecondsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getUTCMillisecondsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUTCMillisecondsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getUTCDayWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getUTCDayWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.parseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        parseExactWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.parseExactWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        parseExactWithCultureWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.parseExactWithCultureWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        parseExactUTCWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.parseExactUTCWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        parseExactUTCWithCultureWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.parseExactUTCWithCultureWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toDateStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.toDateStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toTimeStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.toTimeStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toUTCStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.toUTCStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toLocaleDateStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.toLocaleDateStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toLocaleTimeStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.toLocaleTimeStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        subtractingDatesWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.subtractingDatesWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        subtractMethodReturningTimeSpanWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.subtractMethodReturningTimeSpanWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        dateEqualityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.dateEqualityWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        dateInequalityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.dateInequalityWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        dateLessThanWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.dateLessThanWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        dateLessEqualWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.dateLessEqualWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        dateGreaterThanWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.dateGreaterThanWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        dateGreaterEqualWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.dateGreaterEqualWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.equalsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesJsDateTimeTests.beforeTest(false, assert);
            t.compareToWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @type Bridge.ClientTest.SimpleTypes.ObjectTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.ObjectTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.ObjectTests}    value    
         * @return  {void}                                                  
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.instance = new Bridge.ClientTest.SimpleTypes.ObjectTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.ObjectTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.ObjectTests}    value    
         * @return  {void}                                                  
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @param   {boolean}                                      isStatic    
         * @param   {Bridge.QUnit.Assert}                          assert      
         * @return  {Bridge.ClientTest.SimpleTypes.ObjectTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        canGetHashCodeForObject: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.beforeTest(false, assert);
            t.canGetHashCodeForObject();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        repeatedCallsToGetHashCodeReturnsSameValue: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.beforeTest(false, assert);
            t.repeatedCallsToGetHashCodeReturnsSameValue();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        objectIsEqualToItself: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.beforeTest(false, assert);
            t.objectIsEqualToItself();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        staticEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.beforeTest(false, assert);
            t.staticEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        referenceEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.beforeTest(false, assert);
            t.referenceEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringOverride: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesObjectTests.beforeTest(false, assert);
            t.toStringOverride();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @type Bridge.ClientTest.SimpleTypes.SByteTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.SByteTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.SByteTests}    value    
         * @return  {void}                                                 
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.instance = new Bridge.ClientTest.SimpleTypes.SByteTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.SByteTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.SByteTests}    value    
         * @return  {void}                                                 
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {boolean}                                     isStatic    
         * @param   {Bridge.QUnit.Assert}                         assert      
         * @return  {Bridge.ClientTest.SimpleTypes.SByteTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.castsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.constantsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.formatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.parseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.equalsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.compareToWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSByteTests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @type Bridge.ClientTest.SimpleTypes.SingleTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.SingleTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.SingleTests}    value    
         * @return  {void}                                                  
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.instance = new Bridge.ClientTest.SimpleTypes.SingleTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.SingleTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.SingleTests}    value    
         * @return  {void}                                                  
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {boolean}                                      isStatic    
         * @param   {Bridge.QUnit.Assert}                          assert      
         * @return  {Bridge.ClientTest.SimpleTypes.SingleTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.constantsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.formatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.toStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toExponentialWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.toExponentialWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toExponentialWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.toExponentialWithFractionalDigitsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toFixed: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.toFixed();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toFixedWithFractionalDigitsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.toFixedWithFractionalDigitsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toPrecisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.toPrecisionWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toPrecisionWithPrecisionWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.toPrecisionWithPrecisionWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isPositiveInfinityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.isPositiveInfinityWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isNegativeInfinityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.isNegativeInfinityWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isInfinityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.isInfinityWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isFiniteWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.isFiniteWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isNaNWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.isNaNWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.equalsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesSingleTests.beforeTest(false, assert);
            t.compareToWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @type Bridge.ClientTest.SimpleTypes.StringTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.StringTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.StringTests}    value    
         * @return  {void}                                                  
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.instance = new Bridge.ClientTest.SimpleTypes.StringTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.StringTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.StringTests}    value    
         * @return  {void}                                                  
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {boolean}                                      isStatic    
         * @param   {Bridge.QUnit.Assert}                          assert      
         * @return  {Bridge.ClientTest.SimpleTypes.StringTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        copyConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.copyConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        charAndCountConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.charAndCountConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        charArrayConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.charArrayConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        emptyFieldWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.emptyFieldWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        lengthPropertyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lengthPropertyWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        charAtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.charAtWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        charCodeAtWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.charCodeAtWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.compareWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareWithIgnoreCaseArgWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.compareWithIgnoreCaseArgWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        concatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.concatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        concatWithObjectsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.concatWithObjectsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        endsWithCharWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.endsWithCharWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        endsWithStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.endsWithStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        staticEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.staticEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.formatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorksWithIFormattable: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.formatWorksWithIFormattable();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatCanUseEscapedBraces: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.formatCanUseEscapedBraces();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        fromCharCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.fromCharCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexOfCharWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfCharWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexOfStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexOfCharWithStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfCharWithStartIndexWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexOfCharWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfCharWithStartIndexAndCountWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexOfStringWithStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfStringWithStartIndexWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexOfStringWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfStringWithStartIndexAndCountWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexOfAnyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfAnyWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexOfAnyWithStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfAnyWithStartIndexWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        indexOfAnyWithStartIndexAndCountWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.indexOfAnyWithStartIndexAndCountWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        isNullOrEmptyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.isNullOrEmptyWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        lastIndexOfCharWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lastIndexOfCharWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        lastIndexOfStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lastIndexOfStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        lastIndexOfCharWithStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lastIndexOfCharWithStartIndexWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        lastIndexOfStringWithStartIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.lastIndexOfStringWithStartIndexWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        localeCompareWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.localeCompareWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        matchWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.matchWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        replaceWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.replaceWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        replaceCharWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.replaceCharWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        replaceRegexWithReplaceTextWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.replaceRegexWithReplaceTextWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        replaceRegexWithReplaceCallbackWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.replaceRegexWithReplaceCallbackWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        searchWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.searchWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        splitWithStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.splitWithStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        splitWithRegexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.splitWithRegexWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        startsWithStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.startsWithStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        substrWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.substrWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        substrWithLengthWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.substrWithLengthWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        substringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.substringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        substringWithLengthWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.substringWithLengthWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toLowerCaseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.toLowerCaseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toUpperCaseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.toUpperCaseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toLowerWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.toLowerWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toUpperWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.toUpperWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        trimWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.trimWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        stringEqualityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.stringEqualityWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        stringInequalityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.stringInequalityWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        stringIndexingWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.stringIndexingWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        instanceEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.instanceEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.compareToWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        containsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.containsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toCharArrayWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesStringTests.beforeTest(false, assert);
            t.toCharArrayWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @type Bridge.ClientTest.SimpleTypes.TimeSpanTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.TimeSpanTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.TimeSpanTests}    value    
         * @return  {void}                                                    
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.instance = new Bridge.ClientTest.SimpleTypes.TimeSpanTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.TimeSpanTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.TimeSpanTests}    value    
         * @return  {void}                                                    
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {boolean}                                        isStatic    
         * @param   {Bridge.QUnit.Assert}                            assert      
         * @return  {Bridge.ClientTest.SimpleTypes.TimeSpanTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultValueWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.defaultValueWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        zeroWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.zeroWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        creatingInstanceReturnsTimeSpanWithZeroValue: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.creatingInstanceReturnsTimeSpanWithZeroValue();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        parameterConstructorsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.parameterConstructorsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        factoryMethodsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.factoryMethodsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        propertiesWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.propertiesWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.compareToWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.compareWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        staticEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.staticEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.equalsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.toStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        addWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.addWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        subtractWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.subtractWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        durationWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.durationWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        negateWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.negateWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        comparisonOperatorsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.comparisonOperatorsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        additionOperatorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.additionOperatorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        subtractionOperatorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.subtractionOperatorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        unaryPlusWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.unaryPlusWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        unaryMinusWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTimeSpanTests.beforeTest(false, assert);
            t.unaryMinusWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @type Bridge.ClientTest.SimpleTypes.TupleTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.TupleTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.TupleTests}    value    
         * @return  {void}                                                 
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.instance = new Bridge.ClientTest.SimpleTypes.TupleTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.TupleTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.TupleTests}    value    
         * @return  {void}                                                 
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @param   {boolean}                                     isStatic    
         * @param   {Bridge.QUnit.Assert}                         assert      
         * @return  {Bridge.ClientTest.SimpleTypes.TupleTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tuple1Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple1Works();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tuple2Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple2Works();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tuple3Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple3Works();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tuple4Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple4Works();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tuple5Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple5Works();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tuple6Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple6Works();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tuple7Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple7Works();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tuple8Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesTupleTests.beforeTest(false, assert);
            t.tuple8Works();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @type Bridge.ClientTest.SimpleTypes.UInt16Tests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.UInt16Tests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.UInt16Tests}    value    
         * @return  {void}                                                  
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.instance = new Bridge.ClientTest.SimpleTypes.UInt16Tests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.UInt16Tests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.UInt16Tests}    value    
         * @return  {void}                                                  
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {boolean}                                      isStatic    
         * @param   {Bridge.QUnit.Assert}                          assert      
         * @return  {Bridge.ClientTest.SimpleTypes.UInt16Tests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.castsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.constantsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.formatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.parseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.equalsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.compareToWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt16Tests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @type Bridge.ClientTest.SimpleTypes.UInt32Tests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.UInt32Tests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.UInt32Tests}    value    
         * @return  {void}                                                  
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.instance = new Bridge.ClientTest.SimpleTypes.UInt32Tests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.UInt32Tests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.UInt32Tests}    value    
         * @return  {void}                                                  
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {boolean}                                      isStatic    
         * @param   {Bridge.QUnit.Assert}                          assert      
         * @return  {Bridge.ClientTest.SimpleTypes.UInt32Tests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.castsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.constantsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.formatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.parseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.equalsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.compareToWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt32Tests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @type Bridge.ClientTest.SimpleTypes.UInt64Tests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.UInt64Tests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.UInt64Tests}    value    
         * @return  {void}                                                  
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.instance = new Bridge.ClientTest.SimpleTypes.UInt64Tests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @function getInstance
         * @return  {Bridge.ClientTest.SimpleTypes.UInt64Tests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @function setInstance
         * @param   {Bridge.ClientTest.SimpleTypes.UInt64Tests}    value    
         * @return  {void}                                                  
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {boolean}                                      isStatic    
         * @param   {Bridge.QUnit.Assert}                          assert      
         * @return  {Bridge.ClientTest.SimpleTypes.UInt64Tests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        castsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.castsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultValueIs0: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.defaultValueIs0();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constantsWork: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.constantsWork();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        formatWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.formatWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iFormattableToStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.iFormattableToStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        castingOfLargeValuesToUInt64Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.castingOfLargeValuesToUInt64Works();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        divisionOfLargeUInt64Works: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.divisionOfLargeUInt64Works();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        tryParseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.tryParseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        parseWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.parseWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithoutRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.toStringWithoutRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWithRadixWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.toStringWithRadixWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        getHashCodeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.getHashCodeWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        equalsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.equalsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iEquatableEqualsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.iEquatableEqualsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        compareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.compareToWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        iComparableCompareToWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestSimpleTypesUInt64Tests.beforeTest(false, assert);
            t.iComparableCompareToWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @type Bridge.ClientTest.Text.RegularExpressions.RegexTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Text.RegularExpressions.RegexTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Text.RegularExpressions.RegexTests}    value    
         * @return  {void}                                                             
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.instance = new Bridge.ClientTest.Text.RegularExpressions.RegexTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Text.RegularExpressions.RegexTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Text.RegularExpressions.RegexTests}    value    
         * @return  {void}                                                             
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @param   {boolean}                                                 isStatic    
         * @param   {Bridge.QUnit.Assert}                                     assert      
         * @return  {Bridge.ClientTest.Text.RegularExpressions.RegexTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        stringOnlyConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.stringOnlyConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithFlagsWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.constructorWithFlagsWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        globalFlagWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.globalFlagWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        ignoreCaseFlagWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.ignoreCaseFlagWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        multilineFlagWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.multilineFlagWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        patternPropertyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.patternPropertyWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        sourcePropertyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.sourcePropertyWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        execWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.execWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        lastIndexWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.lastIndexWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        testWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(false, assert);
            t.testWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        escapeWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextRegularExpressionsRegexTests.beforeTest(true, assert);
            Bridge.ClientTest.Text.RegularExpressions.RegexTests.escapeWorks();
        }
    }
});

/**
 * @private
 * @class Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
 */
Bridge.define('Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests', {
    statics: {
        /**
         * @static
         * @public
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @type Bridge.ClientTest.Text.StringBuilderTests
         */
        instance: null,
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Text.StringBuilderTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Text.StringBuilderTests}    value    
         * @return  {void}                                                  
         */
        getInstance: function () {
            if (Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.instance === null) {
                Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.instance = new Bridge.ClientTest.Text.StringBuilderTests();
            }
            return Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.instance;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @function getInstance
         * @return  {Bridge.ClientTest.Text.StringBuilderTests}        
         */
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @function setInstance
         * @param   {Bridge.ClientTest.Text.StringBuilderTests}    value    
         * @return  {void}                                                  
         */
        setInstance: function (value) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.instance = value;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {boolean}                                      isStatic    
         * @param   {Bridge.QUnit.Assert}                          assert      
         * @return  {Bridge.ClientTest.Text.StringBuilderTests}                
         */
        beforeTest: function (isStatic, assert) {
            Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.setInstance(null);
            Bridge.Test.Assert.assert = assert;
            var r = isStatic ? null : Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.getInstance();
            return r;
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        typePropertiesAreCorrect: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.typePropertiesAreCorrect();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        defaultConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.defaultConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        constructorWithCapacityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.constructorWithCapacityWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        initialTextConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.initialTextConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        initialTextConstructorWithCapacityWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.initialTextConstructorWithCapacityWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        substringConstructorWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.substringConstructorWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        appendBoolWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendBoolWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        appendCharWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendCharWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        appendIntWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendIntWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        appendDoubleWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendDoubleWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        appendObjectWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendObjectWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        appendStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        appendLineWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendLineWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        appendLineStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.appendLineStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        clearWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.clearWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        toStringWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.toStringWorks();
        },
        /**
         * @static
         * @public
         * @this Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @memberof Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests
         * @param   {Bridge.QUnit.Assert}    assert    
         * @return  {void}                             
         */
        lengthPropertyWorks: function (assert) {
            var t = Bridge.Test.QUnit.RunQUnitTests.BridgeClientTestTextStringBuilderTests.beforeTest(false, assert);
            t.lengthPropertyWorks();
        }
    }
});