const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('showNav');
});