const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');
/*=============== SHOW MENU ===============*/

if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}
/*============== MENU HIDDEN ===============*/
if (navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav-link');
const linkActions = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click',  linkActions))
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header');
    if (this.scrollY >= 80){
        header.classList.add("scroll-header");
    }else{
        header.classList.remove("scroll-header");
    }
    window.addEventListener("scroll", scrollHeader)
}
/*=============== TESTIMONIAL SWIPER ===============*/
let swiper = new Swiper(".testimonial-wrapper", {
    Loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// var swiper = new Swiper(".testimonial-wrapper", {
//     direction: "vertical",
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== PORTFOLIO ITEM FILTER ===============*/

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector('#them-button');
const themeModal = document.querySelector('.customize-theme');

const openThemModal = () => {
    themeModal.style.display = 'grid';
}
theme.addEventListener("click", openThemModal);
/*===== FONTS =====*/

/*===== PRIMARY COLORS =====*/

/*===== THEME BACKGROUNDS =====*/
