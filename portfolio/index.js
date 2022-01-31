// ПЕРЕВОД //

const i18Obj = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Rotouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
  },
};

// Гамбургер
const hamburger = document.querySelector(".hamburger");
function toggleMenu() {
  hamburger.classList.toggle("open");
}
hamburger.addEventListener("click", toggleMenu);

// открытие и закрытие меню при  клике по гамбургеру
(function () {
  const hamburgerItem = document.querySelector(".hamburger");
  const menu = document.querySelector(".nav");

  hamburgerItem.addEventListener("click", () => {
    menu.classList.toggle("open-nav");
  });
})();

// закрытие меню при клике по ссылке
const navLinks = document.querySelectorAll(".nav-link");
const menu = document.querySelector(".nav");

function closeMenu() {
  menu.classList.remove("open-nav");
  hamburger.classList.remove("open");
}
navLinks.forEach((el) => el.addEventListener("click", closeMenu));

// СМЕНА КАРТИНОК ПРИ КЛИКЕ НА КНОПКУ СЕЗОНА?

const portfolioBtns = document.querySelector(".portfolio-buttons");

function changeImage(event) {
  const portfolioImages = document.querySelectorAll(".portfolio-image");

  if (event.target.classList.contains("portfolio-btn")) {
    portfolioImages.forEach(
      (img, index) =>
        (img.src = `./assets/img/${event.target.dataset.season}/${
          index + 1
        }.jpg`)
    );
  }
}

portfolioBtns.addEventListener("click", changeImage);

//!!!!!!!!!!!!!!!!! кэширование оставим на потом

//// активная кнопка в портфолио и активный переключатель языка  по клику

const classToChange1 = ".portfolio-btn";
const classToChange2 = ".lang-link";

function changeClassActive(event) {
  const allClassItems = document.querySelectorAll(
    `.${event.target.classList[0]}`
  );

  allClassItems.forEach((el) => el.classList.remove("active"));

  event.target.classList.add("active");
}

document
  .querySelectorAll(classToChange1)
  .forEach((el) => el.addEventListener("click", changeClassActive));
document
  .querySelectorAll(classToChange2)
  .forEach((el) => el.addEventListener("click", changeClassActive));


///////////////////ПЕРЕКЛЮЧЕНИЕ ТЕМЫ!!!!!!!!!!!!!!!!!!!


const switchTheme = document.querySelector(".switch-theme");

switchTheme.addEventListener("click", themeHandler);

function themeHandler(event) {
  console.log(theme)
  changeTheme(theme)
}


function changeTheme(theme) {
  const classWithLightTheme = [
    ".theme-wrapper",
    ".wrapper",
    ".section-title",
    ".portfolio-btn",
    ".nav",
    ".nav-link",
    ".line1",
    ".line3",
    ".switch-theme",
  ];
  const allClassItems = document.querySelectorAll(classWithLightTheme);
  if (theme === 'dark') {
    allClassItems.forEach((el) => el.classList.remove("light-theme"));
    themeDataSwitch()
  }
  if (theme === 'light') {
    allClassItems.forEach((el) => el.classList.add("light-theme"));
    themeDataSwitch()
  }
}


/// клик по языку

const language = document.querySelector(".language");

const languageHandler = (event) => {

  if(event.target.classList.contains("lang-link")) {
    getTranslate(event.target.textContent)
  }
}



language.addEventListener("click", languageHandler);

///переводчик

function getTranslate(lang) {
  languageDataSwitch(lang)
  const allTextElements = document.querySelectorAll("[data-i18]")
    allTextElements.forEach((el) => {
      el.textContent = i18Obj[lang][el.dataset.i18];
    });
}


///////local storage

let lang = 'en';
let theme = "light";

const languageDataSwitch = (langVariant) => {lang = langVariant}



const themeDataSwitch = () => {
  if (theme === "light") {
    theme = 'dark'
  } else {
    theme = 'light'
  }
}



function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    const lang = localStorage.getItem('lang');
    getTranslate(lang);
  }
  if(localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    changeTheme(theme);
  }
}
window.addEventListener('load', getLocalStorage)



///
console.log('78 баллов\nОтзыв по пунктам ТЗ:\nНе выполненные пункты:\n1 сложные эффекты для кнопок при наведении и\ или клике\n\nЧастично выполненные пункты:\n1 выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы — 3 балла - сохраняется только язык - не успел разобраться с темой\n')