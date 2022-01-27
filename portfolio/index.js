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


// console.log('отметка - 85 баллов. Все пункты выполнены полностью.')


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! СМЕНА КАРТИНОК ПРИ КЛИКЕ НА КНОПКУ СЕЗОНА?



// portfolioBtn.addEventListener('click', () => {
//   portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
// });


const portfolioBtns = document.querySelector('.portfolio-buttons');

// console.log(portfolioBtn, portfolioImages, portfolioBtns)

function changeImage(event) {
  // const portfolioBtn = document.querySelector('.portfolio-btn');
  const portfolioImages = document.querySelectorAll('.portfolio-image');

  if(event.target.classList.contains('portfolio-btn')) {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
  }

  // if(event.target.classList.contains('portfolio-btn')) {

  //   console.log(event.target.dataset.season)

  //   if (event.target.dataset.season === 'winter') {
  //     portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
  //   }
  //   if (event.target.dataset.season === 'spring') {
  //     portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
  //   }
  //   if (event.target.dataset.season === 'autumn') {
  //     portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
  //   }
  //   if (event.target.dataset.season === 'summer') {
  //     portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
  //   }

  //   console.log(event.target.dataset.season)

  // }
}

portfolioBtns.addEventListener('click', changeImage)


//!!!!!!!!!!!!!!!!! кэширование оставим на потом


//// !!!!!!!!!!!!!!!! активная кнопка в портфолио

// const allPortfolioButtons = document.querySelectorAll('.portfolio-btn')

// function changeClassActiveButton (event) {

//   if(event.target.classList.contains('portfolio-btn')) {

//   allPortfolioButtons.forEach((el) => el.classList.remove('active'));

//   event.target.classList.add('active')
//   }

// }

// allPortfolioButtons.forEach((el) => el.addEventListener('click', changeClassActiveButton))

///////////////// вверху рабочий вариант

// .lang-link

const classToChange = ['.portfolio-btn', '.lang-link']

function changeClassActive (event) {

    const allClassItems = document.querySelectorAll(classToChange)

  // if(event.target.classList.contains('portfolio-btn')) {

    allClassItems.forEach((el) => el.classList.remove('active'));

    event.target.classList.add('active')
  // }

}

document.querySelectorAll(classToChange).forEach((el) => el.addEventListener('click', changeClassActive))


///// РАБОТАЕТ отличный вариант 11-00
// const className = '.portfolio-btn'
// const allClassItems = document.querySelectorAll(className)

// function changeClassActive (event) {

//   // if(event.target.classList.contains('portfolio-btn')) {

//     allClassItems.forEach((el) => el.classList.remove('active'));

//     event.target.classList.add('active')
//   // }

// }

// allClassItems.forEach((el) => el.addEventListener('click', changeClassActive))






////  не работает

// function Change (name) {
//   const className = document.querySelectorAll(name);
//   className.forEach((el) => el.classList.toggle('active'));
//   // className.target.classList.add('active')
   
// }

// const sectionClass = '.section-title'
// const sectionBlock = document.querySelectorAll(sectionClass);
// console.log(sectionBlock)

// sectionBlock.forEach((el) => el.addEventListener('click', () => {
//   Change(sectionClass) // название класса
//   console.log(1)
// }))


