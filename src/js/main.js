const slider = document.querySelector(".swiper-container");

let mySwiper = new Swiper(slider, {
    slidesPerView: 4,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
