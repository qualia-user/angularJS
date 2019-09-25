'use strict';
angular
    .module('app.core')
    .controller('SettingsController', function($scope, PageValues) {
        PageValues.title = "Settings page";
        PageValues.description = "You can edit your settings here";
    });

