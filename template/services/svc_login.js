/**
 * Created by miha on 15.04.2015 15:37.
 */
app.service('svcLogin', ['svcApi', '$localStorage', function(svcApi, $localStorage) {

    this.login = function (deferred, userData) {
        svcApi.login(userData).success(function(result) {
            if (result.success) {
                console.log("resultttttttttttttttttttt");
                console.log(result);
                $localStorage.token = result.token;
                svcApi.getPermissions().success(function(result) {
                    console.log("userPermissions", result);
                    $localStorage.userPermissions = result.data;
                    deferred.resolve();
                }).error(function() {
                    console.log("ERRRROr");
                    deferred.reject();
                });

            }
            else {
                delete $localStorage.token;
                deferred.reject();
            }
        })
    };

    this.logout = function (deferred) {
        svcApi.logout().success(function(result) {
            console.log('logOut result:', result);
            if (result.success) {
                delete $localStorage.token;
                deferred.resolve();
            }
            else {
                deferred.reject();
            }

        })
    };

    this.tokenVerify = function(deferred) {
        svcApi.tokenVerify().success(function(){
            deferred.resolve();
        }).error(function() {
            deferred.reject();
        });
    }

}]);