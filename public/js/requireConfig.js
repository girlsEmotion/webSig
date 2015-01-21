/**
 * Created by LEE_fA on 2015-01-18.
 */
require.config({
    'baseUrl' : 'js',

    'paths' : {
        'jquery' : '../../bower_components/jquery/dist/jquery',
        'async' : '../../bower_components/async/lib/async',
        'angular' : '../../bower_components/angular/angular',
        'angular-route' : '../../bower_components/angular-route/angular-route',
        'angularAMD' : '../../bower_components/angularAMD/angularAMD',
        'angular-material' : '../../bower_components/angular-material/angular-material',
        'angular-animate' : '../../bower_components/angular-animate/angular-animate',
        'angular-aria' : '../../bower_components/angular-aria/angular-aria',
        'angular-resource' : '../../bower_components/angular-resource/angular-resource',
        'hammer' : '../../bower_components/hammerjs/hammer'
    },
    'shim' : {
        'angular-route' : ['angular'],
        'angularAMD' : ['angular'],
        'angular-animate' : ['angular'],
        'angular-aria' : ['angular'],
        'angular-resource' : ['angular'],
        'angular-material' : [
            'angular-animate',
            'angular-aria',
            'hammer',
            'css!../../bower_components/angular-material/angular-material.min',
            'css!../../bower_components/angular-material/theme/grey-theme'
        ]
    },
    'map' : {
        '*' : {
            'css' : '../../bower_components/require-css/css',
            'Controller' : '../controllers',
            'Service' : '../services',
            'Filter' : '../filters',
            'Directive' : '../directives'
        }
    },
    'deps' : ['app']   //디펜던시
});