
// меняет класс у бургера на .open
const hamburger = document.querySelector('.hamburger');
function toggleMenu() {
  hamburger.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

// открытие и закрытие меню при  клике по гамбургеру
(function () {
  const hamburgerItem = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav');

    hamburgerItem.addEventListener('click', () => {
    menu.classList.toggle('open-nav');
  })

} ()
  )


// закрытие меню при клике по ссылке
const navLinks = document.querySelectorAll('.nav-link');
const menu = document.querySelector('.nav')

function closeMenu() {
  menu.classList.remove('open-nav');
  hamburger.classList.remove('open');
}
navLinks.forEach((el) => el.addEventListener('click', closeMenu));





console.log('отметка - 85 баллов. Все пункты выполнены полностью.')