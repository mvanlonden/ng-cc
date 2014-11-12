'use strict';

describe('Directive: mvCCInput', function () {

  // load the directive's module
  beforeEach(module('singleFieldCcApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mv-c-c-input></mv-c-c-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mvCCInput directive');
  }));
});
