angular.module('storeManage.stores', [
  'ui.router',
  'api'
])

.config(function config($stateProvider) {
  $stateProvider.state('stores', {
    url: '/stores',
    views: {
      "main": {
        controller: 'StoresCtrl',
        templateUrl: 'stores/stores.tpl.html'
      }
    },
    data:{ pageTitle: 'Store\'s List'  }
  });
})

.controller('StoresCtrl', function StoresCtrl($scope, api) {
  $scope.isLoading = false;

  api.stores.one('list').getList().then(function(stores) {
    $scope.stores = stores;
    $scope.isLoading = true;
  });
});

