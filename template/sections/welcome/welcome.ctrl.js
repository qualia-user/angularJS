'use strict';
angular
    .module('app.core')
    .controller('WelcomeController', function($scope) {
        $scope.str_show_local='local';

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

