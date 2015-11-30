//=include "vendor/jquery.js"

$(function() {

    $('[data-card]').on('click', function() {
        $(this).toggleClass('card--open');
    });

});