const images = document.querySelectorAll('.hero__img');
let currentIndex = 0;


const updateCarousel = () => {
    images[currentIndex].removeAttribute('data-active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].setAttribute('data-active', '');
};
setInterval(updateCarousel, 5000);





const carouselContainer = document.querySelector(".hero__carousel_button_container");
const buttons = document.querySelectorAll(".hero__carousel_button");
const prev = document.getElementById("previous");
const next = document.getElementById("next");

const showOverlay = () => {
    buttons.forEach(button => {
        button.classList.add("show_button"); 
    });
};

const hideOverlay = () => {
    buttons.forEach(button => {
        button.classList.remove("show_button"); 
    });
};

const previousImage = () => {
    images[currentIndex].removeAttribute('data-active'); 
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    images[currentIndex].setAttribute('data-active', '');
};

const nextImage = () => {
    images[currentIndex].removeAttribute('data-active'); 
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].setAttribute('data-active', '');
};

carouselContainer.addEventListener('mouseover', showOverlay);
carouselContainer.addEventListener('mouseout', hideOverlay);

prev.addEventListener('click', previousImage);
next.addEventListener('click', nextImage);
