angular
    .module('profileApp')
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true)
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'homeCtl',
                templateUrl: 'app/views/home.html'
            })
            // .when('/about', {
            // 	controller: 'AboutController',
            // 	controllerAs: 'aboutCtl',
            // 	templateUrl: 'app/views/about.html'
            // })
            // .when('/projects', {
            // 	controller: 'PostsController',
            // 	controllerAs: 'postsCtl',
            // 	templateUrl: 'app/views/posts.html'
            // })
            .otherwise({
                redirectTo: '/'
            });
    }]);
