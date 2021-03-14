$(document).ready(function () {
    $('.header__burger,.cross').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        // $('body').toggleClass('lock');
    });
});

$('.drop__language').click(function (event) {
    $('.drop__language, .drop__language__content').toggleClass('show');

});

window.onclick = function (event) {
    if (!event.target.matches('.drop__language__btn')) {
        var dropdowns = document.getElementsByClassName("drop__language__content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};



$('.sing__in__button').click(function (event) {
    $('.sing__in__button, .search__header__form').toggleClass('show');

});



$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 2,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 800,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});




