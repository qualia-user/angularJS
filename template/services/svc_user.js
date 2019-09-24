/**
 * Created by miha on 07.04.2015 16:24.
 */

app.service("svcUser", ['$rootScope', 'svcApi', 'svcTools', '$filter',
    function ($rootScope, svcApi, svcTools, $filter) {

        console.log("svcUser");

        var self = this;
        var firstRun = true;

        var ENTITY_NAME = "user";

        this.currentModuleId = "";

        var permissions = [];

        this.onUserLoggedIn = function () {

            var payload = jwtHelper.decodeToken(self.getToken());
            console.log("payload", payload);
            Globalize.culture(payload.language);
            $rootScope.localizeStrings();
            $rootScope.setUserName(payload.name);
            $rootScope.setMenuPermissions(permissions);
            permissions = payload.permissions;

        };

        this.canAccessModule = function (moduleId) {
            return canAccessModule(moduleId);
        };

        this.canAccessModuleResolve = function (deferred, moduleId) {
            $timeout(function () {
                if (canAccessModule(moduleId)) {
                    self.currentModuleId = moduleId;
                    deferred.resolve();
                } else {
                    deferred.reject();
                }
            });

        };

        this.canEditModule = function (moduleId) {

//            console.log("canEditModule", moduleId);
            moduleId = moduleId || this.currentModuleId;

            var modulePermission = svcTools.getItemFromArray(self.getUserPermissions(), parseInt(moduleId), "module_id");
//            console.log("modulePermission", modulePermission);
            if (angular.isDefined(modulePermission)) {
                return angular.equals(modulePermission.module_access_right_id, 1);
            }
        };
        
        this.canViewModule = function (moduleId) {

//            console.log("canEditModule", moduleId);
            moduleId = moduleId || this.currentModuleId;

            var modulePermission = svcTools.getItemFromArray(self.getUserPermissions(), parseInt(moduleId), "module_id");
//            console.log("modulePermission", modulePermission);
            if (angular.isDefined(modulePermission)) {
                return angular.equals(modulePermission.module_access_right_id, 2);
            }
        };

        function canAccessModule(moduleId) {

            if (firstRun) {
                firstRun = false;

                if (angular.isDefined($localStorage.token))
                    svcApi.tokenVerify();
                else
                    return false;
            }

            if (angular.isDefined(moduleId)) {
                //console.log("moduleId", moduleId);
                var modulePermission = svcTools.getItemFromArray(self.getUserPermissions(), parseInt(moduleId), "module_id");
                //console.log("modulePermission", modulePermission);
                if (angular.isDefined(modulePermission)) {
                    return !angular.equals(modulePermission.module_access_right_id, 3);
                }
            } else {
                return angular.isDefined($localStorage.token);
            }
            return false;

        }

        // user permissions getters
        this.getUserPermissions = function () {
            return $localStorage.userPermissions;
            //if (angular.isDefined(this.getToken())) return jwtHelper.decodeToken(this.getToken()).permissions;
        };

        this.getUserID = function () {
            if (angular.isDefined(this.getToken()))
                return jwtHelper.decodeToken(this.getToken()).id;
        };

        this.getUserName = function () {
            if (angular.isDefined(this.getToken()))
                return jwtHelper.decodeToken(this.getToken()).name;
        };

        this.getUserLanguage = function () {
            if (angular.isDefined(this.getToken()))
                return jwtHelper.decodeToken(this.getToken()).language;
        };

        this.getUserCountry = function () {
            if (angular.isDefined(this.getToken()))
                return jwtHelper.decodeToken(this.getToken()).id_country_office;
        };

        this.getUserTypeId = function () {
            if (angular.isDefined(this.getToken())){
               
                return jwtHelper.decodeToken(this.getToken()).user_type_id;
            }
                
        };

        // token
        this.getToken = function () {

            //return "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwicm9sZSI6IlN5c3RlbSBBZG1pbmlzdHJhdG9yIiwibGFuZ3VhZ2UiOiJDcm9hdGlhbiIsImV4cCI6MTQ2MDUzOTU4M30.fyQpE2eYw6iYiDPqyWZZuo-x9blCT2g67LVBRjnGyRA";
            return $localStorage.token;
        };



        // USER ENTITY FUNCTIONS
        // get list
        this.getList = function (deferred, sorted) {
            svcApi.readList(ENTITY_NAME).success(function (result) {
                if (sorted)
                    result.data = $filter('orderBy')(result.data, 'user_full_name');
                handleSuccessResponse(deferred, result);
            });
        };

        // get data by one id
        this.getData = function (deferred, id) {
            svcApi.read(ENTITY_NAME, id).success(function (result) {
           //     console.log("SVC GET DATA", result);
                handleSuccessResponse(deferred, result);
            });
        };

        this.concatenateUserDisplayName = function (user) {
            console.log('concatenateUserDisplayName', user);
        };

        // handle response
        function handleSuccessResponse(deferred, result) {
            if (result.success != true) {
                deferred.reject(result.message);
            } else {
                deferred.resolve(result.data);
            }
        }

    }]);