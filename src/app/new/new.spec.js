describe('new store section', function() {
  var scope, ctrl;

  beforeEach(module('storeManage.new'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('NewStoreCtrl', {$scope: scope});
  }));

  it('should have a dummy test', inject(function() {
    expect(true).toBeTruthy();
  }));

  it('should have a createStore function', function() {
    expect(scope.createStore).toBeDefined();
  });

  it('should have not a createStore function', function() {
    expect(scope.message).not.toBeDefined();
  });
});
