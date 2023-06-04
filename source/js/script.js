let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let orderButton = document.querySelector('.product-demonstration__button');
let modalWindow = document.querySelector('.modal-container');
let modal = modalWindow.querySelector('.modal');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

function toggleNav() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
};

function showModalWindow(evt) {
  evt.stopPropagation();
  modalWindow.classList.remove('modal-container--close');
  document.addEventListener('click', closeOnOutsideClick);
};

function closeOnOutsideClick(evt) {
  if (!modal.contains(evt.target)) {
    modalWindow.classList.add('modal-container--close');
    document.removeEventListener('click', closeOnOutsideClick);
  }
};

navToggle.addEventListener('click', toggleNav);
orderButton.addEventListener('click', showModalWindow);
