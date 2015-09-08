'use strict';

describe('Service: search/searchService', function () {

  // load the service's module
  beforeEach(module('planistoApp'));

  // instantiate service
  var search/searchService;
  beforeEach(inject(function (_search/searchService_) {
    search/searchService = _search/searchService_;
  }));

  it('should do something', function () {
    expect(!!search/searchService).toBe(true);
  });

});
