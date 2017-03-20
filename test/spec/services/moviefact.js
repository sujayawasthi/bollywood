'use strict';

describe('Service: movieFact', function () {

  // load the service's module
  beforeEach(module('transportApp'));

  // instantiate service
  var movieFact;
  beforeEach(inject(function (_movieFact_) {
    movieFact = _movieFact_;
  }));

  it('should do something', function () {
    expect(!!movieFact).toBe(true);
  });

});
