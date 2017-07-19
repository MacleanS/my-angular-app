import template from './myGrid.component.html';
import controller from './myGrid.controller.js';
import './myGrid.component.scss';

let myGridComponent = {
  restrict: 'E',
  template,
  controller,
  controllerAs: 'myGridController'
};

export default myGridComponent;