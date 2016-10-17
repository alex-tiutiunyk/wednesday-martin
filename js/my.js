$(document).ready(function(){

    $('.btn-buy').click(function(){
        $('body').addClass('.modal-buy');
    });

    $('#booksBuy').on('hidden.bs.modal', function() {
        $('body').removeClass('modal-buy');
    });

//    Search

    $('#siteSearch').on('shown.bs.modal', function() {
        $('#field').focus();
        $('.navbar .icon-search').addClass('active');
    });

    $('#siteSearch').on('hidden.bs.modal', function() {
        $('.navbar .icon-search').removeClass('active');
    });

//    Navigation

    $('#mainNav').on('show.bs.collapse', function() {
        $('.navbar .navbar-header .icon-binocularis').show();
        $('#mainNav .navbar-toggle').addClass('opened');
    });

    $('#mainNav').on('hidden.bs.collapse', function() {
        $('.navbar .navbar-header .icon-binocularis').hide();
        $('#mainNav .navbar-toggle').removeClass('opened');
    });

    $('#green-anchor').waypoint(function() {
        $('.navbar').toggleClass('green');
    }, {offset: function(){
        return $('.content-intro').height() - 10;
    }});

    $('.book-intro.primates > .container').waypoint(function() {
        $('.navbar').toggleClass('green');
    });

    $('.book-intro.stepmonster > .container').waypoint(function() {
        $('.navbar').toggleClass('purple');
    });

    $('#red-anchor').waypoint(function() {
        $('.navbar').toggleClass('red');
    }, {offset: function(){
        return $('.content-intro, .slideshow').height() - 10;
    }});

    $('#purple-anchor').waypoint(function() {
        $('.navbar').toggleClass('purple');
    }, {offset: function(){
        return $('.content-intro').height() - 10;
    }});

//    Editable form
    var eForm = $('.editable-form');
    $(eForm).prependTo('body');


});