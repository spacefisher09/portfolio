$(function(){
    var callURL = 'include/part.html ';
    var callNav = $('#nav'),
    callPagination = $('#pagination'),
    callPageEnd = $('#pg-end'),
    callFooter = $('#footer');
    callNav.load(callURL + '#nav');
    callFooter.load(callURL + 'footer');
    callPageEnd.load(callURL + '#pg-end');
    callPagination.load(callURL + '#pagination');

});