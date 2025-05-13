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
navLink.forEach(n => n.addEventListener('click',linkAction));

// Accordion skills
// để tạo hiệu ứng accordion cho phần "Skills" – tức là người dùng click vào tiêu đề kỹ năng thì nội dung mở ra, click vào cái khác thì phần trước đóng lại.
const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header');
function toggleSkills(){
    let itemClass = this.parentNode.className;
    // this.parentNode: là .skills__content (phần tử cha chứa cả tiêu đề và nội dung kỹ năng).
    // lấy class hiện tại của phần tử cha đó.

    for(i=0; i<skillsContent.length;i++){
        skillsContent[i].className= 'skills__content skills__close';
        // Trước khi mở cái nào đó, đoạn này đóng toàn bộ các skills đang mở, bằng cách gán lại class skills__close.


    }
    if (itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
        // Nếu phần đó đang đóng, thì đổi class thành skills__open để mở ra.
        
    }
}
skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills);
})
