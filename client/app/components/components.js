import angular from 'angular';
import MyGridModule from './myGrid/myGrid.module';

const ComponentsModule = angular.module('app.components',[
       MyGridModule.name 
]);

export default ComponentsModule;