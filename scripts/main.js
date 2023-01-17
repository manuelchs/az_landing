
$( () => {
    animateScroll();
    
    $('.footer-title').unbind().click( (e) => {
        let title = e.currentTarget;
        if ( window.innerWidth < 768 ) {
            $(title).parent().find('.all-links').toggle(200);
        }
    });

    $(window).on('scroll', () => {
        animateScroll();
    });

    $(window).resize( () => {
        animateScroll();
        if( window.innerWidth > 768 ) {
            $('.all-links').show();
        }
    });

    var swiper = new Swiper('.mySwiper', {
        effect: "cards",
        grabCursor: true,
        cardsEffect: {
            perSlideOffset: 20,
            perSlideRotate: 0,
            rotate: true,
            slideShadows: true,
            transformEl: null,
        },
        initialSlide: 1,
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // }
        // autoplay: {
        //     delay: 3000,
        // },
    });

    function animateScroll() {
        const elements = document.querySelectorAll('.custom-animation');
        for ( let index = 0; index < elements.length; index++ ) {
            const element = elements[index];
            const elementPosition = element.getBoundingClientRect();
            const elementCenter = elementPosition.height;
            if (elementPosition.top < window.innerHeight - elementPosition.height + elementCenter && elementPosition.top > (elementPosition.height - 20) * -1) {
                if (!element.classList.contains('custom-animation-end')) {
                    element.classList.add('custom-animation-end');
                }
            } else {
                element.classList.remove('custom-animation-end');
            }
        }
    }

    $('#mainLine').css();


});