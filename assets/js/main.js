// Menu show y hidden 
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// Menu show
// validate if constant exist 
if (navToggle) {
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    });
};

// menu hidden 
// validate if constant exist 
if (navClose) {
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    });
};

// Remove menu mobile 
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    //when we click on each nav_link , we will remove  the show-menu class
    navMenu.classList.remove('show-menu');
    console.log(this.textContent);
};
navLink.forEach(n => n.addEventListener('click',linkAction))