'use strict';
angular
    .module('app.core')
    .controller('WelcomeController', function($scope, PageValues) {
        $scope.str_show_local='local';
        PageValues.title = "Welcome page";
        PageValues.description = "You are alwayes welcomed";

        var graphs = this;
        graphs.graphs = [
            {
                title:"vertical graph",
                description:"this is v graph"
            },
            {
                title:"horizontal graph",
                description:"this is h graph"
            }
        ]
    });

