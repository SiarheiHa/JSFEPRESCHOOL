console.log(
  'Привет! Таблица результатов заполняется после каждого проигрыша. Для того чтобы быстро проиграть можно нажать клавижу противоположную движению змейки (если ползет вправо нажать стрелку влево или "A" и т.д.)'
);
console.log("все пункты задания выполнены");

let scoreBlock = document.querySelector(".score-count"); // отображение очков
let score = 0; // очки
let itBegin = 0;

//настройки игры:
const config = {
  step: 0,
  maxStep: 6,
  sizeCell: 16, // размер ячейки
  sizeBerry: 6,
};

const snake = {
  /// координаты
  x: 16,
  y: 16,
  dx: config.sizeCell, // скорость по горизонтали
  dy: 0,
  tails: [], // массив ячеек, занимаемых змеёй
  maxTails: 3, // кол-во ячеек
};

let berry = {
  x: 0, //координаты ягоды
  y: 0,
};

let canvas = document.querySelector(".game-canvas");
let context = canvas.getContext("2d");
let scoreData = [];
let scoreItems = document.querySelector(".score-items");

// drawScore();

function drawScoreItem() {
  scoreItems.innerHTML = "";
  scoreData.forEach((el) => {
    const scoreItem = document.createElement("div");
    scoreItem.classList.add("score-item");
    scoreItem.innerHTML = el;
    scoreItems.appendChild(scoreItem);
  });
}

// игровой цикл
function gameLoop() {
  requestAnimationFrame(gameLoop);
  if (++config.step < config.maxStep) {
    // почему ++ config.step?
    return;
  }
  config.step = 0;
  context.clearRect(0, 0, canvas.width, canvas.height); // стирает все нарисованое
  /// рисует ягоду и змею
  drawBerry();
  drawSnake();
}

// requestAnimationFrame(gameLoop); // запуск цикла

function drawSnake() {
  snake.x += snake.dx; // меняем координату змеи увеличивая на знаение скорости
  snake.y += snake.dy;

  collisionBorder(); // телепортация змейки на другой край

  snake.tails.unshift({ x: snake.x, y: snake.y }); // добавляем в массив частей змеи координаты

  ///удаляем последний элемент змеи если длина массива ее частей больше разрешенной
  if (snake.tails.length > snake.maxTails) {
    snake.tails.pop();
  }

  //отрисовка каждого элемента масиива частей змеи
  snake.tails.forEach(function (el, index) {
    if (index == 0) {
      context.fillStyle = "#FA0556"; // отрисовка головы змеи ярко-красным
    } else {
      context.fillStyle = "#A00034"; // хвост змеи
    }
    //рисует залитый прямоугольник в позиции (x, y), размер которого определяется аргументами width и height, и стиль которого определяется атрибутом fillStyle.
    context.fillRect(el.x, el.y, config.sizeCell, config.sizeCell);

    // если координаты элемента змеи совпали с координатами ягоды, то максимальный размер змеи плюс один
    if (el.x === berry.x && el.y === berry.y) {
      snake.maxTails++;
      incScore(); // увеличили очки
      randomPositionBerry(); // создали новую ягоду
    }

    for (let i = index + 1; i < snake.tails.length; i++) {
      // проверка на соприкосновение головы с хвостом
      if (el.x == snake.tails[i].x && el.y == snake.tails[i].y) {
        refreshGame();
      }
    }
  });
}

function drawBerry() {
  context.beginPath();
  context.fillStyle = "#A00034";
  context.arc(
    berry.x + config.sizeCell / 2,
    berry.y + config.sizeCell / 2,
    config.sizeBerry,
    0,
    2 * Math.PI
  );
  context.fill();
}

function collisionBorder() {
  /// может лучше прекращать игру?  /// по иксу есть баг
  if (snake.x < 0) {
    snake.x = canvas.width - config.sizeCell;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }
  if (snake.y < 0) {
    snake.y = canvas.height - config.sizeCell;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }
}

function refreshGame() {
  gameOver();
  scoreData.unshift(score);

  if (scoreData.length > 10) {
    scoreData.pop();
  }

  score = 0;
  drawScore();

  snake.tails = [];
  snake.maxTails = 3;
  snake.dx = config.sizeCell;
  snake.dy = 0;
}

function randomPositionBerry() {
  berry.x = getRandomInt(0, canvas.width / config.sizeCell) * config.sizeCell;
  berry.y = getRandomInt(0, canvas.height / config.sizeCell) * config.sizeCell;
}

function incScore() {
  score++; // увеличиваем очки на единицу
  drawScore();
}

function drawScore() {
  scoreBlock.innerHTML = `Your score: ${score}`; // отображаем очки на странице
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

document.addEventListener("keydown", function (e) {
  ///вынести в отдельную функцию
  if (e.code == "Enter") {
    if (itBegin === 0) {
      requestAnimationFrame(gameLoop);
      itBegin = 1;
      drawScore();
    }
  }
  if (e.code == "KeyW" || e.code == "ArrowUp") {
    snake.dy = -config.sizeCell;
    snake.dx = 0;
  } else if (e.code == "KeyA" || e.code == "ArrowLeft") {
    snake.dx = -config.sizeCell;
    snake.dy = 0;
  } else if (e.code == "KeyS" || e.code == "ArrowDown") {
    /// добавить невозможность поворота назад?
    snake.dy = config.sizeCell;
    snake.dx = 0;
  } else if (e.code == "KeyD" || e.code == "ArrowRight") {
    snake.dx = config.sizeCell;
    snake.dy = 0;
  }
});

function setLocalStorage() {
  localStorage.setItem("score", JSON.stringify(scoreData));
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("score")) {
    scoreData = JSON.parse(localStorage.getItem("score"));
    drawScoreItem();
  }
}
window.addEventListener("load", getLocalStorage);

function gameOver() {
  const title = document.querySelector(".gameover");
  title.innerHTML = `GAME<br>OVER<br><br>Your score:<br>${score}`;
  title.style.zIndex = "1";
  snake.x = undefined;
  snake.y = undefined;
  setTimeout(() => {
    title.style.zIndex = "-1";
    drawScoreItem();
    snake.x = 160;
    snake.y = 160;
  }, 2000);
}
