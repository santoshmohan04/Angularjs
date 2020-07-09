// Categories component which handles the menus categories list
(function () {
    'use strict';
    
    angular.module('Data')
      .component('categories', {
        templateUrl: 'src/menuapp/templates/categories.template.html',
        bindings: {
          items: '<',
          myTitle: '@title'
        }
    });
})();
    