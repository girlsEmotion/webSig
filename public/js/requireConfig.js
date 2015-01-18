/**
 * Created by LEE_fA on 2015-01-18.
 */
requirejs.config({
    'baseUrl' : 'js',

    'paths' : {
        'jquery' : '../../bower_components/jquery/dist/jquery',
        'async' : '../../bower_components/async/lib/async',
        'angular' : '../../bower_components/angular/angular'
    },
    'shim' : {

    },
    'map' : {
        '*' : {
            'Module' : '../modules'
        }
    },
    'deps' : ['main']   //이거 자체로 디펜던시를 가지는거
});