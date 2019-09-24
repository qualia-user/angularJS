// Typically provides global app configuration
// using providers from other services.

'use strict';
angular
    .module('app.config', [])
    .config(config)
    .run(runs);

function config($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    var param = function (obj) {
        var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            } else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            } else if (value !== undefined && value !== null) {
                query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
            }

        }
        return query.length ? query.substr(0, query.length - 1) : query;
    };
}

function runs($rootScope) {

    $rootScope.$on("$routeChangeError", function (event, current, previous, eventObj) {
        if (eventObj.authenticated === false) {
            $rootScope.currentRoute = current.loadedTemplateUrl;
            console.log("routeChangeError");
            $location.path("/PermissionDenied");
        }
    });

    $rootScope.$on('$routeChangeStart', function() {
        PageValues.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
        PageValues.loading = false;
    });
}
