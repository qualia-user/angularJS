'use strict';
angular
    .module('app.core')
    .controller('SearchController', function($location, $routeParams, SvcApi, PageValues) {
        //Set page title and description
        PageValues.title = "SEARCH";
        PageValues.description = "Search for your reports.";
        //Setup view model object
        var vm = this;
        vm.query = null;
        vm.reports = [];
        vm.loading = null;
        vm.setSearch = function() {
            // var query = encodeURI(vm.query);
            // $location.path('/search/' + query);
        };
        vm.performSearch = function(query) {
            vm.loading = true;
            SvcApi.search(query).then(function(response){
                vm.reports = response;
                vm.loading = false;
            });
        };
        if (typeof $routeParams.query != "undefined") {
            vm.performSearch($routeParams.query);
            vm.query = decodeURI($routeParams.query);
        }
    });