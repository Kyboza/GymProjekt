const hamburgerAnimation = () => {
    // Definiera variabler för specifika klasser
    const menuIcon = document.querySelector('.header__dropdown_icon');
    const dropdownMenu = document.querySelector('.header__dropdown_ul');
    const dropdownChildren = document.querySelectorAll('.header__dropdown_anchor');

    const currentLabel = dropdownMenu.getAttribute('aria-hidden')

    // Toggla klasserna 'active' och 'animate' samt aria-hidden
    dropdownMenu.classList.toggle('active');
    dropdownMenu.setAttribute('aria-hidden', currentLabel === 'true' ? 'false' : 'true')
    menuIcon.classList.toggle('animate');
    
    

    // Loop igenom varje dropdown-element och toggla attributen
    dropdownChildren.forEach(child => {
        // Toggla 'tabIndex' mellan '1' och '-1'
        const currentTabIndex = child.getAttribute('tabIndex');
        child.setAttribute('tabIndex', currentTabIndex === '1' ? '-1' : '1');
    });
};

// Lägg till en click-eventlyssnare på hamburgerikonen
document.querySelector('.header__dropdown_icon_container').addEventListener('click', hamburgerAnimation);
