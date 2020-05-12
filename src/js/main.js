window.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".swiper-container1");
    const slider2 = document.querySelector(".swiper-container2");
    const slider3 = document.querySelector(".swiper-container3");
    const slider4 = document.querySelector(".swiper-container4");
    new Swiper(slider, {
        spaceBetween: 30,
        grabCursor: true,
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: ".popular-slider__next",
            prevEl: ".popular-slider__prev",
        },

        breakpoints: {
            425: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 3,
            },
            1920: {
                slidesPerView: 4,
            },
        },
    });

    new Swiper(slider2, {
        spaceBetween: 30,
        grabCursor: true,
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: ".feedback-slider__next",
            prevEl: ".feedback-slider__prev",
        },

        breakpoints: {
            425: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },

            1200: {
                slidesPerView: 2,
            },
        },
    });

    new Swiper(slider3, {
        spaceBetween: 30,
        grabCursor: true,
        loop: true,

        slidesPerView: 1,

        // Navigation arrows
        navigation: {
            nextEl: ".advice-slider__next",
            prevEl: ".advice-slider__prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },

            1024: {
                slidesPerView: 3,
            },

            1440: {
                slidesPerView: 4,
            },

            1920: {
                slidesPerView: 5,
            },
        },
    });

    new Swiper(slider4, {
        spaceBetween: 30,
        grabCursor: true,
        loop: true,
        slidesPerView: 2,

        navigation: {
            nextEl: ".team-slider__next",
            prevEl: ".team-slider__prev",
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },

            768: {
                slidesPerView: 2,
            },
        },
    });
});
