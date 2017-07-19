import angular from 'angular';
import myGridComponent from './myGrid.component';
import myServicesService from '../../services/services';

export default angular.module('myGrid', [myServicesService])
  .component('myGrid', myGridComponent);