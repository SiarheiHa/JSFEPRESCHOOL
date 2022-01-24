
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






// console.log('110 баллов  \nВыполненные пункты: \n1) Вёрстка валидная. Для проверки валидности вёрстки используйте сервис https://validator.w3.org/. Валидной вёрстке соответствует надпись "Document checking completed. No errors or warnings to show." В таком случае баллы за пункт требований выставляем полностью. Если есть предупреждения - warnings, но нет ошибок - errors, выставляем половину баллов за пункт требований  \n2) header, main, footer  \n3) шесть элементов section (по количеству секций)  \n4) только один заголовок h1  \n5) пять заголовков h2 (количество секций минус одна, у которой заголовок h1)  \n6) один элемент nav (панель навигации)  \n7) два списка ul > li > a (панель навигации, ссылки на соцсети)  \n8) десять кнопок button  \n9) два инпута: input type="email" и input type="tel"  \n10) один элемент textarea  \n11) три атрибута placeholder  \n12) блок header  \n13) секция hero  \n14) секция skills  \n15) секция portfolio  \n16) секция video  \n17) секция price  \n18) секция contacts  \n19) блок footer  \n20) для построения сетки используются флексы или гриды  \n21) при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону  \n22) фоновый цвет тянется на всю ширину страницы  \n23) иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления  \n24) изображения добавлены в формате .jpg  \n25) есть favicon  \n26) плавная прокрутка по якорям  \n27) ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/  \n28) интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета  \n29) обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы')