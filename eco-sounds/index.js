///
const button = document.querySelector("button");
const audio = new Audio();
const birdItem = document.querySelectorAll(".nav-item");
let isPlay = false;
const navList = document.querySelector(".nav-list");
const logo = document.querySelector(".logo");

function playAudio() {
  audio.src = sourceFinder();
  audio.currentTime = 0;
  audio.play();
  isPlay = true;
}

function buttonHandler() {
  if (!isPlay) {
    playAudio();
    addPause();
  } else {
    pauseAudio();
  }
}

function pauseAudio() {
  audio.pause();
  isPlay = false;
  removePause();
}

function addPause() {
  button.classList.add("pause");
}

function removePause() {
  button.classList.remove("pause");
}

function sourceFinder() {
  let source = "./assets/audio/forest.mp3";
  for (let i = 0; i < birdItem.length; i++) {
    if (birdItem[i].classList.contains("active")) {
      const birdName = birdItem[i].dataset.bird;
      source = `./assets/audio/${birdName}.mp3`;

      return source;
    }
  }
  return source;
}

function navListHandler(event) {
  if (event.target.classList.contains("nav-item")) {
    let clickedItem = event.target;
    if (!isPlay) {
      addPause();
    }
    removeSelectedItems();
    selectClickedItem(clickedItem);
    changeBackground(clickedItem);
    playAudio();
  }
}

function removeSelectedItems() {
  const items = document.querySelectorAll(".nav-item");
  items.forEach((el) => el.classList.remove("active"));
}

function selectClickedItem(clickedItem) {
  clickedItem.classList.add("active");
}

function changeBackground(clickedItem) {
  const main = document.querySelector(".main");
  const birdName = clickedItem.dataset.bird;
  main.style.backgroundImage = `url(./assets/img/${birdName}.jpg)`;
}

function playStartSound(event) {
  if (!isPlay) {
    addPause();
  }
  removeSelectedItems();
  playAudio();
  changeBackground(event.target);
}

button.addEventListener("click", buttonHandler);

navList.addEventListener("click", navListHandler);
logo.addEventListener("click", playStartSound);

///////////////////////////////////////////

// for (let el in birdItem) {
//     console.log(birdItem[el])
//     if (birdItem[el].classList.contains('active')) {
//         const birdName = birdItem[el].dataset.bird
//         source = `./assets/audio/${birdName}.mp3`
//         console.log(source)
//         return source
//     }

// }
