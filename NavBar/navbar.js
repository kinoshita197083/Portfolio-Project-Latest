const menuIcon = document.querySelector('.menu-toggle'),
    mobileMenu = document.querySelector('.nav-menu'),
    navLinks = document.querySelectorAll('.nav-links'),
    navContainer = document.querySelector('.nav-container'),
    stopScrolling = document.querySelector('body');

//OPEN or CLOSE the mobile menu
const toggleMenu = () => {
    menuIcon.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    navContainer.style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--nav-mobile-bg-color');
    stopScrolling.classList.toggle('stop-scrolling');
}

menuIcon.addEventListener('click', () => {
    toggleMenu();
})

navLinks.forEach(el => {
    el.addEventListener('click', toggleMenu)
})

document.addEventListener('scroll', () => {
    if (scrollY > 100) {
        navContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    } else {
        navContainer.style.backgroundColor = 'transparent'
    }

    // if (mobileMenu.classList.contains('active')) {
    //     navContainer.style.backgroundColor = 'rgba(0, 0, 0)'
    // }
})
