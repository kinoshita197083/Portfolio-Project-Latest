const menuIcon = document.querySelector('.menu-toggle'),
    mobileMenu = document.querySelector('.nav-menu'),
    navLinks = document.querySelectorAll('.nav-links'),
    navContainer = document.querySelector('.nav-container');

//OPEN or CLOSE the mobile menu
const toggleMenu = () => {
    menuIcon.classList.toggle('active');
    mobileMenu.classList.toggle('active');
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
})
