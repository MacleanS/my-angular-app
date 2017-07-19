import angular from 'angular';
import { myServicesService } from './myServices/myServices';

export default angular.module('app.services', [])
  .factory('myServicesService', myServicesService)
  .name;