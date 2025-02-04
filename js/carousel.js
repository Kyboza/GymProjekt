/* Välj alla bilder i karusellen */
const images = document.querySelectorAll('.hero__img');
let currentIndex = 0; // Börja med den första bilden

// Funktion för att uppdatera karusellen (visa nästa bild)
const updateCarousel = () => {
    // Ta bort 'data-active' från den nuvarande aktiva bilden
    images[currentIndex].removeAttribute('data-active');
    
    // Gå till nästa bild (loopa tillbaka till första bilden om vi når slutet)
    currentIndex = (currentIndex + 1) % images.length;

    // Sätt 'data-active' på den nya bilden för att göra den synlig
    images[currentIndex].setAttribute('data-active', '');
};

// Uppdatera karusellen varje 5:e sekund (5000ms)
setInterval(updateCarousel, 5000);




/* Välj elementen som är relaterade till karusellens knappar */
const carouselContainer = document.querySelector(".hero__carousel_button_container");
const buttons = document.querySelectorAll(".hero__carousel_button"); // Hämta både föregående och nästa knapp
const prev = document.getElementById("previous");
const next = document.getElementById("next");

// Funktion för att visa knapparna när muspekaren är över karusellens container
const showOverlay = () => {
    buttons.forEach(button => {
        button.classList.add("show_button"); // Lägg till 'show_button' för att visa knapparna
    });
};

// Funktion för att dölja knapparna när muspekaren lämnar karusellens container
const hideOverlay = () => {
    buttons.forEach(button => {
        button.classList.remove("show_button"); // Ta bort 'show_button' för att dölja knapparna
    });
};

// Funktion för att visa föregående bild när knappen 'previous' klickas
const previousImage = () => {
    images[currentIndex].removeAttribute('data-active'); // Ta bort 'data-active' från den nuvarande bilden
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Gå till föregående bild (loopa tillbaka till sista bilden om vi är vid början)
    images[currentIndex].setAttribute('data-active', ''); // Gör den föregående bilden synlig
};

// Funktion för att visa nästa bild när knappen 'next' klickas
const nextImage = () => {
    images[currentIndex].removeAttribute('data-active'); // Ta bort 'data-active' från den nuvarande bilden
    currentIndex = (currentIndex + 1) % images.length; // Gå till nästa bild (loopa tillbaka till första bilden om vi är vid slutet)
    images[currentIndex].setAttribute('data-active', ''); // Gör den nästa bilden synlig
};

// Lägg till eventlyssnare för att visa och dölja knapparna när muspekaren går in och ut ur karusellens container
carouselContainer.addEventListener('mouseover', showOverlay);
carouselContainer.addEventListener('mouseout', hideOverlay);

// Lägg till eventlyssnare för föregående och nästa knappar för manuell navigering
prev.addEventListener('click', previousImage);
next.addEventListener('click', nextImage);
