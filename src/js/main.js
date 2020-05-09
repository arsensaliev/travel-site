window.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".swiper-container");

    new Swiper(slider, {
        width: 1500,
        slidesPerView: 3,
        spaceBetween: 30,
        grabCursor: true,

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
});
