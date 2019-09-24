'use strict';

angular
    .module('app.services')
    .factory('SvcApi', dataService);

function dataService($http, $rootScope, $log) {
    var data = {
        'readMerchantData': readMerchantData,
        'get': get,
        'search': search,
        'getPopular': getPopular,
        'getCast': getCast
    };

//     function makeRequest(url, params) {
//         var requestUrl = BASE_URL + '/' + url + '?api_key=' + API_KEY;
//         angular.forEach(params, function(value, key){
//             requestUrl = requestUrl + '&' + key + '=' + value;
//         });
//         return $http({
//             'url': requestUrl,
//             'method': 'GET',
//             'headers': {
//                 'Content-Type': 'application/json'
//             },
//             'cache': true
//         }).then(function(response){
//             return response.data;
//         }).catch(dataServiceError);
//     }
//
//     this.selectQuery_REPO = function (_sql) {
//         return $http.get("php/mysql_select_repo.php?sql=" + _sql).success(function (data) {
//         });
//     };
//     this.executeQuery_REPO = function (_sql) {
//         return $http.get("php/mysql_execute_repo.php?sql=" + _sql).success(function (data) {
//         });
//     };
//
    function readMerchantData(){
//         Clover_REST_API.select_CLOVER_REST_API_POST("merchant_properties", getURLParam("merchant_id", true), getURLParam("employee_id", true), getURLParam("token", true), 0, 0, 0, getURLParam("employee_id", true))
//             .success(function (result) {
//                 $.unblockUI();
//                 // console.log("readMerchantData success!!!!!!!!!");
//                 // console.log(result[0]);
// //                       if ($rootScope.merchantObject.merchantID === "DXFTDZ27HZNAG" ) {
// //                            result[0].tierName = "BASIC";
// //                        }
//                 deferred.resolve(result[0]);
//             })
//             .error(function () {
//                 $.unblockUI();
//                 console.log("readMerchantData error!!!!!!!!!");
//                 deferred.reject();
//             });
        console.log('sasd');
        $log.error('XHR Failed for SvcApi');
    }
    // function makeRequest(url, params) {
    //     var requestUrl = BASE_URL + '/' + url + '?api_key=' + API_KEY;
    //     angular.forEach(params, function(value, key){
    //         requestUrl = requestUrl + '&' + key + '=' + value;
    //     });
    //     return $http({
    //         'url': requestUrl,
    //         'method': 'GET',
    //         'headers': {
    //             'Content-Type': 'application/json'
    //         },
    //         'cache': true
    //     }).then(function(response){
    //         return response.data;
    //     }).catch(dataServiceError);
    // }
    // function getPremieres() {
    //     //Get first day of the current month
    //     var date = new Date();
    //     date.setDate(1);
    //     return makeRequest('discover/tv', {'first_air_date.gte': moment(date).format('DD-MM-YYYY'), append_to_response: 'genres'}).then(function(data){
    //         return data.results;
    //     });
    // }
    // function get(id) {
    //     return makeRequest('tv/' + id, {});
    // }
    // function getCast(id) {
    //     return makeRequest('tv/' + id + '/credits', {});
    // }
    // function search(query) {
    //     return makeRequest('search/tv', {query: query}).then(function(data){
    //         return data.results;
    //     });
    // }
    // function getPopular() {
    //     return makeRequest('tv/popular', {}).then(function(data){
    //         $log.error('XHR Failed for SvcApi');
    //         return data.results;
    //     });
    // }
    // return data;
    //
    // function dataServiceError(errorResponse) {
    //     $log.error('XHR Failed for ShowService');
    //     $log.error(errorResponse);
    //     return errorResponse;
    // }
}



