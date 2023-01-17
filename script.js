const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const clearScreen = () => {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, 600, 600);
}

const scl = 20;


class Snake {
  x = 0;
  y = 0;
  xspeed = 1;
  yspeed = 0;
  total = 0;
  tail = [];

  constructor(x, y, total, xspeed, yspeed, tail) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.total = total;
    this.tail = tail;
  }

  dir(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  // eat() {
  //   if(appleX == headX && appleY == headY){
  //     appleX = Math.floor(Math.random() * tail);
  //     appleY = Math.floor(Math.random() * tail);
  //   }
  // }

  draw() {
    ctx.fillStyle = "orange"
    for (var i = 0; i < this.total; i++) {
      ctx.rect(this.tail[i].x, this.tail[i].y, scl, scl);
      ctx.fill();
     } 
     ctx.rect(this.x, this.y, scl, scl);
     ctx.fill();
  }
}

const snake = new Snake();

// const drawSnake = () => {
//   ctx.fillStyle = "orange";
//   ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
// }

let appleX = 5;
let appleY = 5;

const drawApple = () => {
  ctx.fillStyle = "red";
  ctx.fillRect(Math.floor(Math.random() * scl) * scl, Math.floor(Math.random() * scl) * scl, scl, scl)
}

const checkCollision = () => {
  if(appleX == headX && appleY == headY){
    appleX = Math.floor(Math.random() * scl);
    appleY = Math.floor(Math.random() * scl);
  }
}

const keyDown = (event) => {
  if(event.keyCode === 38) { // up
    if(snake.y == 1) return;
    snake.dir(0, -1);
  }
  if(event.keyCode === 40) { // down
    if(snake.y == -1) return;
    snake.dir(0, 1);
  }
  if(event.keyCode == 37) { // left
    if(snake.x == 1) return;
    snake.dir(1, 0);
  }
  if(event.keyCode == 39) { // right
    if(snake.x == -1) return;
    snake.dir(-1, 0);
  }
}

document.body.addEventListener('keydown', keyDown);


const drawGame = () => {
  const speed = 12;
  setTimeout(drawGame, 1000/speed);

  clearScreen();
  snake.draw();
  drawApple();
}

drawGame();

