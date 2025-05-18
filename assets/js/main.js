//======== Menu show y hidden ==========
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

//========== Menu show =========
// validate if constant exist 
if (navToggle) {
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    });
};

// ============ menu hidden ============
// validate if constant exist 
if (navClose) {
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    });
};

//========= Remove menu mobile ===========
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    //when we click on each nav_link , we will remove  the show-menu class
    navMenu.classList.remove('show-menu');
    console.log(this.textContent);
};
navLink.forEach(n => n.addEventListener('click',linkAction));

// =========== Accordion skills ===========
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


//======== Qualfication Tabs ===========
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


//============ Services Modal=========
// Lấy tất cả các phần tử modal (hộp thoại)
const modalViews = document.querySelectorAll('.services__modal'),
// Lấy tất cả các nút "View More"
modalBtns = document.querySelectorAll('.services__button'),
// Lấy tất cả các nút đóng (❌)
modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
    console.log('👉 Clicked modal button:', modalBtns[modalClick]);
    console.log('👉 Clicked index modalClick:', modalClick);
}
modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click', ()=>{
        modal(i);// Gọi hàm mở modal theo vị trí i
    })
})
modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView)=>{
            console.log("first modalView:", modalView);
            modalView.classList.remove('active-modal');
        })
    })
})

//======== Swiper =======
let swiper = new Swiper(".portfolio__container", {
      cssMode: true,
      loop:true,    
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable:true,
      },
    });

//======= Swiper Testimonial========= 
let swiperTestimonial = new Swiper(".testimonial__container", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable:true,
      },
      breakpoints:{
        568:{
            slidesPerview:2,
        }
      }   
});

//============ Scroll section active link==========

//  Lấy tất cả các phần tử <section> có thuộc tính id
const sections =  document.querySelectorAll('section[id]');

function scrollActive(){
//    scrollActive là hàm kiểm tra xem người dùng đang cuộn đến đâu trên trang.
// 👉 window.pageYOffset là khoảng cách từ đầu trang đến vị trí hiện tại theo chiều dọc (scroll top).
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        // current.offsetHeight: chiều cao của section đó.
        const sectionHeight = current.offsetHeight;
        // current.offsetTop: khoảng cách từ đầu trang đến vị trí bắt đầu của section.
        // Trừ đi 50 để kích hoạt hiệu ứng sớm hơn một chút (khi gần đến section).
        const sectionTop = current.offsetTop - 50,
        // sectionId: tên ID của section (ví dụ "portfolio").
        sectionId = current.getAttribute('id');


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            // Kiểm tra xem bạn đang nằm trong section hiện tại hay không.
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link');
            // Nếu đúng, tìm trong .nav__menu thẻ <a> nào có href chứa #sectionId và thêm class active-link.
        }else{
            // Nếu bạn không nằm trong section đó, thì gỡ bỏ class active-link.
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }

    })
}
// Mỗi khi cuộn trang (scroll), gọi lại hàm scrollActive để cập nhật phần tử được tô sáng.
window.addEventListener('scroll',scrollActive);

//========= change background  header ==========

// Tạo ra một hàm tên là scrollHeader. Hàm này sẽ được gọi mỗi khi người dùng cuộn trang
function scrollHeader(){
    // Tìm phần tử có id="header" trên trang HTML.
    const nav = document.getElementById('header');
    // when the scroll greater  than 200 viewport  height, add  the scroll-header  classs  to header  tag 
    if (this.scrollY >= 80 ) {
        // this.scrollY (hoặc window.scrollY) là vị trí cuộn dọc tính bằng pixel từ trên xuống.
        // Nếu người dùng cuộn xuống từ 200px trở lên, thì điều kiện này đúng.
        nav.classList.add('scroll-header');
        console.log('this scrollY : ',this.scrollY);
        console.log('window.scrollY : ',window.scrollY);
        // Nếu điều kiện đúng → thêm class scroll-header vào phần tử <header>.
    }else{
        //  Nếu người dùng cuộn về đầu trang (ít hơn 200px) → gỡ bỏ class scroll-header.
        nav.classList.remove('scroll-header');
    }
}
// Gắn sự kiện scroll của trình duyệt vào hàm scrollHeader.
// → Mỗi khi người dùng cuộn trang, trình duyệt sẽ gọi lại hàm scrollHeader().
window.addEventListener('scroll',scrollHeader)


//========= scrollup=========== 

const btnScroll = document.querySelector('.scrollup');
function scrollUp(){
    const indexScroll = window.scrollY;
    console.log("test scroll",indexScroll);
    if (indexScroll>=600) {
        btnScroll.classList.add('scrollup-active');
    }else{
        btnScroll.classList.remove('scrollup-active');
    }
}

// Gọi hàm scrollUp mỗi khi người dùng cuộn
window.addEventListener('scroll', scrollUp);


//========== Dark light theme =========
const themeButton = document.getElementById('theme-button');
const  darkTheme = 'dark-theme';
// darkTheme: tên class sẽ được thêm vào body để kích hoạt chế độ tối.
const iconTheme = 'bxs-brightness-half';
// iconTheme: tên class biểu tượng sẽ hiển thị khi ở chế độ tối.

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
// Lấy thông tin về theme và icon mà người dùng đã chọn trước đó (nếu có) từ localStorage.

// we obtain  the current  theme that the interface  has by  validating the bx bx-brightness-half class 
const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light';
// Hàm getCurrentTheme() kiểm tra body có chứa class dark-theme không:
// Nếu có → trả về 'dark'
// Ngược lại → 'light'

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? 'bxs-brightness-half'
    : 'bx-brightness-half';
// Hàm getCurrentIcon() kiểm tra nút themeButton có chứa class bxs-brightness-half hay không:
// Nếu có → trả về 'bxs-brightness-half' (biểu tượng ở chế độ tối)
// Ngược lại → 'bx-brightness-half' (biểu tượng ở chế độ sáng)




// we validate  if the user  previously  chose  a topic 
 if (selectedTheme) {
    // Kiểm tra xem người dùng có lưu lựa chọn giao diện không (selectedTheme có tồn tại không).

    // if the validation  is fulfilled , we  ask that  what the  issue  was  to know  if we  activated  or deactivated the dark 
    document.body.classList[selectedTheme === 'dark' ? 'add' :'remove'](darkTheme);
    //  Nếu trước đó người dùng chọn chế độ dark, thêm class dark-theme vào body. Nếu không thì xóa.
    themeButton.classList[selectedIcon === 'bx-brightness-half' ? 'add' : "remove"](iconTheme);
    // ương tự, thêm hoặc xóa class biểu tượng (bxs-brightness-half) tùy thuộc vào biểu tượng được lưu trong localStorage.
 }

 themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme);
    //  Toggle (bật/tắt) class dark-theme trên body.
    themeButton.classList.toggle(iconTheme);
    // Toggle class biểu tượng để đổi icon tương ứng.

    localStorage.setItem('selected-theme',getCurrentTheme());
    // Lưu trạng thái giao diện hiện tại (dark hoặc light) vào localStorage.
    localStorage.setItem('selected-icon',getCurrentIcon());
    // Lưu biểu tượng tương ứng vào localStorage.
})
