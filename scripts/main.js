
$( () => {
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
        // autoplay: {
        //     delay: 3000,
        // },
    });
});