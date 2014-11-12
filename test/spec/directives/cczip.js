'use strict';

describe('Directive: ccZip', function () {

  // load the directive's module
  beforeEach(module('singleFieldCcApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cc-zip></cc-zip>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ccZip directive');
  }));
});
