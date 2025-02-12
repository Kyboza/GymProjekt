const hamburgerAnimation = () => {
    const menuIcon = document.querySelector('.header__dropdown_icon');
    const dropdownMenu = document.querySelector('.header__dropdown_ul');
    const dropdownChildren = document.querySelectorAll('.header__dropdown_anchor');

    const currentLabel = dropdownMenu.getAttribute('aria-hidden')

    dropdownMenu.classList.toggle('active');
    dropdownMenu.setAttribute('aria-hidden', currentLabel === 'true' ? 'false' : 'true')
    menuIcon.classList.toggle('animate');
    
    

    dropdownChildren.forEach(child => {
        const currentTabIndex = child.getAttribute('tabIndex');
        child.setAttribute('tabIndex', currentTabIndex === '0' ? '-1' : '0');
    });
};

document.querySelector('.header__dropdown_icon_container').addEventListener('click', hamburgerAnimation);
