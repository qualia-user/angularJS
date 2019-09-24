'use strict';

angular
    .module('app.routes', [])
    .config(config);

function config($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'sections/welcome/welcome.tpl.html',
            controller: 'WelcomeController as welcome'
        });
    $urlRouterProvider.otherwise('/welcome');
}
