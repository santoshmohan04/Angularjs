// Category items list controller
(function () {
    'use strict';

angular.module('Data')
    .controller('CategoryItemsListController', CategoryItemsListController);

CategoryItemsListController.$inject = ['resultingItems'];
    function CategoryItemsListController(resultingItems) {
      var $ctrl = this;

      $ctrl.$onInit = function () {
        //console.log('init CategoryItemsListController', resultingItems);
      };

      $ctrl.items = resultingItems.data;
    };  

})();