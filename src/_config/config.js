angular.module('angularApp')
    .config(['$locationProvider','$stateProvider', function($locationProvider,$stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('login', {
                url: '/',
                component: 'loginComponent',
            })
            .state('register', {
                url: '/register',
                component: 'registerComponent'
            })
            .state('playSet', {
                url: '/playSet',
                component: 'playSetComponent'
            })
            .state('trackManagement', {
                url: '/trackManagement',
                component: 'trackManagementComponent'
            })
            .state('help', {
                url: '/help',
                component: 'helpComponent'
            });
    }]);