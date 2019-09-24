'use strict';

angular
    .module('app.controller', [])
    .config(config);

function config($log) {
    // Globalize.culture(svcUser.getUserLanguage());
    // console.log("svcUser.getUserLanguage()", svcUser.getUserLanguage());

    // $rootScope.app_version = "build 24.03.2017 v1";


    // $scope.firstName = "John";
    $log.info("Angular application started!");
}