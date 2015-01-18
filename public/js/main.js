/**
 * Created by LEE_fA on 2015-01-18.
 */
require(['jquery', 'Module/version'], function($, version) {
    $(document).ready(function() {
        console.log('hello world!!');
        alert('my version is' + version);
    });
}); //배열과 함수를 매개변수로 받는다