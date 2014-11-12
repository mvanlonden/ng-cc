'use strict';

describe('Filter: monthYear', function () {

  // load the filter's module
  beforeEach(module('singleFieldCcApp'));

  // initialize a new instance of the filter before each test
  var monthYear;
  beforeEach(inject(function ($filter) {
    monthYear = $filter('monthYear');
  }));

  it('should return the input prefixed with "monthYear filter:"', function () {
    var text = 'angularjs';
    expect(monthYear(text)).toBe('monthYear filter: ' + text);
  });

});
