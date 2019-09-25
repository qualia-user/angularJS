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
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'sections/settings/settings.tpl.html',
            controller: 'SettingsController as settings'
        })
        .state('/search', {
            url: '/search',
            templateUrl: 'sections/search/search.tpl.html',
            controller: 'SearchController as search'
        });
    $urlRouterProvider.otherwise('/welcome');
}
