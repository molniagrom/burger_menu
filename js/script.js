// Вариант из ютуба (не работает)

// $(document).ready(function() {
//   $('.header__burger').click(function(event){
//     $('.header__burger,.header__menu').toggleClass('active');
//   });
// });

// ...........................................................................

// Вариант из курса

// const headerBurger = document.querySelector('.header__burger');
// const headerMenu = document.querySelector('.header__menu');

// if (headerBurger){
//   headerBurger.addEventListener("click", function(e) {
//     headerBurger.classList.toggle('_active');
//     if (headerMenu){
//       headerMenu.classList.toggle('_active');
//     }
    
// });  
// }

// Вариант с сайта

let menu_button = document.querySelector('.header__burger');
let menu_itself = document.querySelector('.header__menu');
let menu_list = document.querySelector('.header__list');
let body = document.querySelector('body');

menu_button.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
  body.classList.toggle('lock');
};

menu_list.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');
  body.classList.toggle('lock');
};
