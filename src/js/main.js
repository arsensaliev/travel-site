window.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".swiper-container1");
    const slider2 = document.querySelector(".swiper-container2");
    new Swiper(slider, {
        // slidesPerView: 4,
        spaceBetween: 30,
        grabCursor: true,
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: ".popular-button-next",
            prevEl: ".popular-button-prev",
        },

        breakpoints: {
            425: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },

            1440: {
                slidesPerView: 4,
            },
        },
    });

    new Swiper(slider2, {
        // slidesPerView: 4,
        spaceBetween: 30,
        grabCursor: true,
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: ".feedback-button-next",
            prevEl: ".feedback-button-prev",
        },

        breakpoints: {
            425: {
                slidesPerView: 1,
            },
            
            1024: {
                slidesPerView: 2,
            },

        },
    });
});
