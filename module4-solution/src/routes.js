(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // This app contains 3 state (views)

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Menu category list page
  .state('categories', {
    url: '/categories-list',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      resultingCategories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  
  // Menu category items page
  .state('items', {
    url: '/category-items/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'CategoryItemsListController as categoryItems',
    resolve: {
      resultingItems: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });
}

})();
