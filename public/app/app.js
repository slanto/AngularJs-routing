angular.module('app', ['ngRoute']);

angular.module('app')
    .config(['$routeProvider, $locationProvider', function ($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);

        $routeProvider
            .when('/items/', {
                templateUrl: 'items.html',
                controller: 'ItemsController',
                controllerAs: 'vm'
            })
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/' });
    }]);