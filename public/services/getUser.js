/**
 * Created by LEE_fA on 2015-01-18.
 */

define(['app'], function(app) {
    app.factory('getUser', function() {
       return function(callback) {
           var users = [
               {
                   name : "Hwang",
                   age: 30
               },
               {
                   name : "Lee",
                   age: 26
               },
               {
                   name : "Tuna",
                   age: 26
               }
           ];
           callback(users);
       };
    });
});