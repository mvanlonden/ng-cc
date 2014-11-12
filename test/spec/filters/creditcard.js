'use strict';

describe('Filter: creditcard', function () {

  // load the filter's module
  beforeEach(module('singleFieldCcApp'));

  // initialize a new instance of the filter before each test
  var creditcard;
  beforeEach(inject(function ($filter) {
    creditcard = $filter('creditcard');
  }));

  it('should return the input prefixed with "creditcard filter:"', function () {
    var text = 'angularjs';
    expect(creditcard(text)).toBe('creditcard filter: ' + text);
  });

});
