angular.module('storeManage.new', [
  'ui.router',
  'api'
])

.config(function config($stateProvider) {
  $stateProvider.state( 'new', {
    url: '/new',
    views: {
      "main": {
        controller: 'NewStoreCtrl',
        templateUrl: 'new/new.tpl.html'
      }
    },
    data:{ pageTitle: 'Add new store' }
  });
})

.controller('NewStoreCtrl', function NewStoreCtrl($scope, $timeout, api) {
  $scope.createStore = function() {
    var data = {
      name: $scope.name,
      data: {
        keyword: $scope.keyword
      }
    };

    api.stores.one().post('create', data).then(function() {
      $scope.message = "Object saved OK";
      $scope.name = '';
      $scope.keyword = '';
    }, function() {
      $scope.message = "There was an error saving";
    });

    return false;
  };

  $scope.$watch('message', function() {
    $timeout(function() {
      $scope.message = '';
    }, 3000);
  });
});
