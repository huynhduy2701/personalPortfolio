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


// Qualfication Tabs 
const tabs = document.querySelectorAll('[data-target]'),//tabs: lấy tất cả các phần tử có thuộc tính data-target, tương ứng với các nút tab
      tabsContents = document.querySelectorAll('[data-content]');//lấy tất cả các phần tử có thuộc tính data-content, tương ứng với nội dung của từng tab (ví dụ: phần hiển thị Education và Work).
// data-target là thuộc tính tùy chỉnh (custom attribute) mà bạn đã thêm vào các phần tử tab để xác định nội dung nào sẽ được hiển thị khi tab đó được chọn.
// data-content là thuộc tính tùy chỉnh mà bạn đã thêm vào các phần tử nội dung để xác định nội dung nào sẽ được hiển thị khi tab đó được chọn.
tabs.forEach(tab => {
    tab.addEventListener('click',()=>{
        // B1: Xác định mục tiêu tương ứng với tab
        const target = document.querySelector(tab.dataset.target);
        // "Lấy phần tử DOM mà id của nó khớp với giá trị trong thuộc tính data-target của tab hiện tại."
        console.log('👉 Clicked tab:', tab);
        console.log('🎯 Target content:', target);

        // B2: Ẩn tất cả các nội dung
         console.log('⛔ Hiding all tab contents...');
        tabsContents.forEach(tabContent =>{
            console.log('   Hiding:', tabContent);
            tabContent.classList.remove('qualification__active');
        })
          // B3: Hiển thị nội dung tương ứng
        console.log('✅ Showing target content:', target);
        target.classList.add('qualification__active');

         // B4: Xóa class active khỏi tất cả tab
        console.log('🔁 Removing active class from all tabs...');
        tabs.forEach(tab =>{
             console.log('   Removing from tab:', tab);
            tab.classList.remove('qualification__active');
        })
         // B5: Thêm class active cho tab được click
        console.log('⭐ Adding active class to clicked tab');
        tab.classList.add('qualification__active');
         console.log('------------------------');
    })
})