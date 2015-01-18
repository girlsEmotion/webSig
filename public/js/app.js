/**
 * Created by LEE_fA on 2015-01-18.
 */

define([
    'angularAMD',
    'angular-route'
], function(angularAMD) {
    var app = angular.module('TempProject', ['ngRoute']);
    //angular.module('이름' , [종속성을 띄고있는 라이르러리 이름])

    app.config(function($routeProvider) {
        $routeProvider
            .when('/home', angularAMD.route({
                templateUrl: 'views/home.html',  //view를 조작
                controller: 'homeCtrl',
                controllerUrl: 'Controller/homeCtrl'    //angularAMD를 안쓰면 필요 없는데, 컨트롤러를 동적으로 로드
            }))
            .when('/profile', angularAMD.route({
                templateUrl: 'views/profile.html',
                controller: 'profileCtrl',
                controllerUrl: 'Controller/profileCtrl'
            }))
            .otherwise('/home');
    });

    return angularAMD.bootstrap(app);
    //angularAMD를 이용하여 app을 부트스트랩(시동) 해준다
});