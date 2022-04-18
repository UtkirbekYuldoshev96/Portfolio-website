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
const fontSize = document.querySelectorAll('.choose-size span')
const colorPlest = document.querySelectorAll('.choose-color span');
let root = document.querySelector(':root');
const Bg_1 = document.querySelector('.bg-1');
const Bg_2 = document.querySelector('.bg-2');
const Bg_3 = document.querySelector('.bg-3');

const openThemModal = () => {
    themeModal.style.display = 'grid';
};
const closeThemModal = (e) => {
    if (e.target.classList.contains('customize-theme')){
        themeModal.style.display = "none";
    }
}
theme.addEventListener("click", openThemModal);
themeModal.addEventListener("click", closeThemModal);

/*===== FONTS =====*/
const removeFontSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove("active")
    })
}

fontSize.forEach(size => {
    size.addEventListener("click", () => {
        removeFontSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')){
            fontSize = "12px";
        } else if (size.classList.contains('font-size-2')){
            fontSize = "14px";
        } else if (size.classList.contains('font-size-3')){
            fontSize = "16px";
        } else if (size.classList.contains('font-size-4')){
            fontSize = "18px";
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
});
/*===== PRIMARY COLORS =====*/
const changeActive = () => {
    colorPlest.forEach(colorPicker => {
        colorPicker.classList.remove("active");
    })
}
colorPlest.forEach(color => {
    color.addEventListener("click", () => {
        let preimerHous;
        changeActive();
        if (color.classList.contains('color-1')){
            preimerHous = 252;
        } else if (color.classList.contains('color-2')){
            preimerHous = 52;
        } else if (color.classList.contains('color-3')){
            preimerHous = 352;
        } else if (color.classList.contains('color-4')){
            preimerHous = 152;
        } else if (color.classList.contains('color-5')){
            preimerHous = 202;
        }
        color.classList.add("active");
        root.style.setProperty('--primary-color-hue', preimerHous);
    })
})

/*===== THEME BACKGROUNDS =====*/
let lightColor;
let darkColor;
let whiteColor;

const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColor);
    root.style.setProperty('--white-color-lightness', whiteColor);
    root.style.setProperty('--dark-color-lightness', darkColor);
}

Bg_1.addEventListener('click', () => {
    darkColor = "95%";
    lightColor = "20%";
    whiteColor = "15%";

    Bg_1.classList.add('active');
    Bg_2.classList.remove('active');
    Bg_3.classList.remove('active');
    window.location.reload()
});

Bg_2.addEventListener('click', () => {
    darkColor = "95%";
    lightColor = "20%";
    whiteColor = "15%";

    Bg_2.classList.add('active');
    Bg_1.classList.remove('active');
    Bg_3.classList.remove('active');
    changeBg();
});

Bg_3.addEventListener('click', () => {
    darkColor = "95%";
    lightColor = "20%";
    whiteColor = "15%";

    Bg_3.classList.add('active');
    Bg_2.classList.remove('active');
    Bg_1.classList.remove('active');
    changeBg();
});