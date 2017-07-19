export function myServicesService($http) {
  'ngInject';

  return {
    getServices() {
      return $http({
        method: 'GET',
        url: 'https://uk.bookingbug.com/api/v1/41285/services',
        headers: {'App-Id':'5a3d8b8d',
          'App-Key':'738e9aca62e7465446b7be8fe4219ffa'
        }
      });
    }
  };
}