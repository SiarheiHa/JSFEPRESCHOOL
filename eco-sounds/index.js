 ///
const button = document.querySelector('button');

const audio = new Audio();

function playAudio() {
    if(!isPlay) {
        // audio.src = './assets/audio/forest.mp3';
        audio.src = sourceFinder()
        audio.currentTime = 0;
        audio.play();
        isPlay = true
        // console.log(isPlay)
    } else {
        audio.pause();
        isPlay = false
        // console.log(isPlay)
    }
    toggleButton()
}

const birdItem = document.querySelectorAll('.nav-item')

function sourceFinder () {
    // const birdItem = document.querySelectorAll('.nav-item')
    let source = './assets/audio/forest.mp3'
    console.log(birdItem)

    for(let i = 0; i < birdItem.length; i++) {
        if (birdItem[i].classList.contains('active')) {
            const birdName = birdItem[i].dataset.bird
            source = `./assets/audio/${birdName}.mp3`
            console.log(source)
            return source
        }
    }


 
    // for (let el in birdItem) {
    //     console.log(birdItem[el])
    //     if (birdItem[el].classList.contains('active')) {
    //         const birdName = birdItem[el].dataset.bird
    //         source = `./assets/audio/${birdName}.mp3`
    //         console.log(source)
    //         return source
    //     }   

    // }

    return source
}

// function pauseAudio() {
//     audio.pause();

//     isPlay = false
//     console.log(isPlay)
//   }

button.addEventListener('click', playAudio);
// logo.addEventListener('click', pauseAudio);

let isPlay = false;
// console.log(isPlay)



///////////////////////////////////////////

function toggleButton() {
    button.classList.toggle('pause');
  }
//   button.addEventListener('click', toggleBtn);

 ///////////////////////////

 const navList = document.querySelector('.nav-list')

 function navListHandler (event) {
     if(event.target.classList.contains('nav-item')) {
        let clickedItem = event.target
        // console.log(clickedItem)
        removeSelectedItems ()
        selectClickedItem(clickedItem)
        changeBackground(clickedItem)
        playAudio ()
        // changeSound(clickedItem)
     }
 }

//  function changeSound (clickedItem) {
//     const birdName = clickedItem.dataset.bird
//     const source = `./assets/audio/${birdName}.mp3`
//     playAudio(source)
//     console.log(source)

//  }

 function removeSelectedItems () {
    const items = document.querySelectorAll('.nav-item')
    items.forEach((el) => el.classList.remove('active'))
}

 function selectClickedItem (clickedItem) {
     clickedItem.classList.add('active')
}

function changeBackground (clickedItem) {
    const main = document.querySelector('.main')
    const birdName = clickedItem.dataset.bird
    main.style.backgroundImage = `url(./assets/img/${birdName}.jpg)`

}







 navList.addEventListener('click', navListHandler)