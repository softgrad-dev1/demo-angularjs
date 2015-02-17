angular.module('api', ['restangular'])

.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://api.cashcreators.honeycombits.com');
  RestangularProvider.setDefaultHeaders({
    'Authorization': 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==',
    'Content-Type': 'application/json'
  });
})

.factory('api', function(Restangular) {
  return {
    stores: Restangular.service('stores')
  };
});

