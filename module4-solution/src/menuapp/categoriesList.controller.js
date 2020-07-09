// Categories list controller
(function () {
    'use strict';
    
    angular.module('Data')
      .controller('CategoriesListController', CategoriesListController);     
       
    CategoriesListController.$inject = ['resultingCategories'];
    function CategoriesListController(resultingCategories) {
      var $ctrl = this;
     
      $ctrl.$onInit = function () {
        //console.log('init CategoriesListController', resultingCategories);
      };

      $ctrl.categories = resultingCategories.data;     
    };
    
})();