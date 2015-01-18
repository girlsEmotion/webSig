/**
 * Created by LEE_fA on 2015-01-18.
 */

define(['app', 'Service/getUser'], function(app){
    app.controller('profileCtrl', function($scope, getUser){
        getUser(function(users) {
            $scope.users = users;
        });
    });
})