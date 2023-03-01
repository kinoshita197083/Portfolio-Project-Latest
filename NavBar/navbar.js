const menuIcon = document.querySelector('.menu-toggle'),
    mobileMenu = document.querySelector('.nav-menu'),
    navLinks = document.querySelectorAll('.nav-links');

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
