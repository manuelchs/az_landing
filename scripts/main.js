
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
        // const elements = document.querySelectorAll('.custom-animation');
        // for ( let index = 0; index < elements.length; index++ ) {
        //     const element = elements[index];
        //     const elementPosition = element.getBoundingClientRect();
        //     const elementCenter = elementPosition.height;
        //     if (elementPosition.top < window.innerHeight - elementPosition.height + elementCenter && elementPosition.top > (elementPosition.height - 20) * -1) {
        //         if (!element.classList.contains('custom-animation-end')) {
        //             element.classList.add('custom-animation-end');
        //         }
        //     } else {
        //         element.classList.remove('custom-animation-end');
        //     }
        // }
        const elements = document.querySelectorAll('.custom-animation');
            for (let index = 0; index < elements.length; index++) {
                const element = elements[index];
                const elementPosition = element.getBoundingClientRect();
                const elementCenter = elementPosition.height;
                if (elementPosition.top < window.innerHeight - elementPosition.height + elementCenter && elementPosition.top > (elementPosition.height - 20) * -1) {
                    if (!element.classList.contains('custom-animation-end')) {
                        element.classList.add('custom-animation-end');
                        if ( element.classList.contains('counter-animation') ) {
                            animateCounter(element);
                        }
                    }
                } else {
                    element.classList.remove('custom-animation-end');
                    if ( element.classList.contains('counter-animation') ) {
                        // resetCounters();
                    }
                }
            }
    }

    function animateCounter( e ) {
        e.innerHTML = '0';
        const durationAnimation = 2000;
        const iteration = Number( durationAnimation / Number(e.getAttribute('counter')));
        const counter = e.getAttribute('counter') === null ? '0' : e.getAttribute('counter');
        const prefix = e.getAttribute('counter-prefix') === null ? '' : e.getAttribute('counter-prefix');
        const suffix = e.getAttribute('counter-suffix') === null ? '' : e.getAttribute('counter-suffix');


        let step = 2;

        if ( Number(counter) > 600 ) {
            step = 10;
        }
        if ( Number(counter) > 2000 ) {
            step = 50;
        }

        const animation = setInterval(() => {
            let counterNow = Number(e.innerHTML.replace(/\D/g,''));
            if (counterNow < Number(counter)) {
                let numberString = (counterNow + step).toString();
                e.innerHTML = prefix + numberString.toString() + suffix;
            } else {
                e.innerHTML = prefix + counter.toString() + suffix;
                clearInterval(animation);
            }
        }, iteration);
    }

    function resetCounters() {
        document.querySelectorAll('.counter-animation').forEach( counter => {
            counter.innerHTML = '0';
        });
    }

});