'use-strict';

class myGridController {

  /*@ngInject*/
  constructor(myServicesService) {
    this.servicesService = myServicesService;
    this.services = [];
  }

  toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  $onInit(){
    let _this = this;
    this.servicesService.getServices().then((results) => {
      this.servicesData = results.data._embedded.services;
      this.services = this.servicesData.map(function(service){

        let servName = (service.name) ? _this.toTitleCase(service.name) : '-';
        let servDesc = (service.description) ? service.description : 'No description';
        let servPrice = (service.prices[0]) ? '£' + (service.prices[0]/100).toFixed(2) : '-';

        return {
          name: servName,
          desc: servDesc,
          price: servPrice
        };
      });
      return results;
    });
  }
}

export default myGridController;