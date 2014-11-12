'use strict';

describe('Service: ccInputService', function () {

  // load the service's module
  beforeEach(module('singleFieldCcApp'));

  // instantiate service
  var ccInputService;
  beforeEach(inject(function (_ccInputService_) {
    ccInputService = _ccInputService_;
  }));

  it('should do something', function () {
    expect(!!ccInputService).toBe(true);
  });

});
