var textoDiseno = document.getElementById("textoDiseno");
if (textoDiseno) {
    $clamp(textoDiseno, {clamp: 3});
}
var textoConsultoria = document.getElementById("textoConsultoria");
if (textoConsultoria) {
    $clamp(textoConsultoria, {clamp: 3});
}
var textoDiagramacion = document.getElementById("textoDiagramacion");
if (textoDiagramacion) {
    $clamp(textoDiagramacion, {clamp: 3});
}
var textoOcr = document.getElementById("textoOcr");
if (textoOcr) {
    $clamp(textoOcr, {clamp: 3});
}
var textoPdf = document.getElementById("textoPdf");
if (textoPdf) {
    $clamp(textoPdf, {clamp: 3});
}
var textoValor = document.getElementById("textoValor");
if (textoValor) {
    $clamp(textoValor, {clamp: 3});
}
var textoPop = document.getElementById("textoPop");
if (textoPop) {
    $clamp(textoPop, {clamp: 3});
}
var textoPremedia = document.getElementById("textoPremedia");
if (textoPremedia) {
    $clamp(textoPremedia, {clamp: 3});
}


window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("regresar").style.display = "block";
    } else {
        document.getElementById("regresar").style.display = "none";
    }
}
(function ($) {
    var btn = $('#regresar');

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '200');
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#navegador',
        offset: 100
    });

    var btn1 = $('#logo');

    btn1.on('click', function (a) {
        a.preventDefault();
        $('html, body').animate({scrollTop: 0}, '200');
    });
    
    var btn2 = $('#inicio');
    btn2.on('click', function (a) {
        a.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '200');
    })
})(jQuery);

// Collapse Navbar
var navbarCollapse = function () {
    if ($("#navBar").offset().top > 200) {
        $("#navBar").addClass("navbar-encoger");
    } else {
        $("#navBar").removeClass("navbar-encoger");
    }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

$(function () {
    $('[data-toggle="tooltip"]').tooltip('enable');
});

$(".link-scroll").click(function (e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top}, 'slow');
});


