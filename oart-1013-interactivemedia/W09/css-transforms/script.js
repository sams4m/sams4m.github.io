// since we are trying to control the ball first, we need access to it

const ball = document.querySelector(".ball");
console.log(ball);

// access outer box
const outer = document.querySelector(".outer");
console.log(outer);
// get the width of outer box for moving distance restraint
let outerWidth = outer.clientWidth / 2;
console.log(outerWidth);

// ----------------------------------------------------------------

// moving/translating the ball
const moveButton = document.querySelector("#move-button");
console.log(moveButton);

moveButton.addEventListener("click", moveBall);

let distance = 0;
function moveBall() {
  if (distance < outerWidth) {
    distance += 30;
    console.log(distance);

    // using the backticks means you can put a var inside the string
    //ball.style.transform = `translateX(${distance}px)`;

    transformBall();
    //ball.style.transform = `translateX(-${distance}px) translateY(${distance}px)`
  }
}

// ----------------------------------------------------------------

// rotation logic
const rotateButton = document.querySelector("#rotate-button");
console.log(rotateButton);

rotateButton.addEventListener("click", rotateBall);

let angle = 0;
function rotateBall() {
  angle += 45;
  //ball.style.transform = `rotate(${angle}deg)`;

  transformBall();
}

// ----------------------------------------------------------------

// scale logic
const scaleButton = document.querySelector("#scale-button");
console.log(scaleButton);

scaleButton.addEventListener("click", scaleBall);

let point = 1;
function scaleBall() {
  if (point > 0.22) {
    point -= 0.1;

    console.log(point);

    //ball.style.transform = `scale(${point})`;

    transformBall();
  }
}

// universal transform function
// having the universal transform button will allow the buttons to be more performative,
// looking at all 3 functions, it'll only adjust the one that needs to be adjusted
// this will also stop the square from being reset if hiting rotate after the move etc
function transformBall() {
  ball.style.transform = `translateX(${distance}px) rotate(${angle}deg) scale(${point})`;
}

// reset logic
const resetButton = document.querySelector("#reset-button");
console.log(resetButton);

resetButton.addEventListener("click", resetBall);

function resetBall() {
  distance = 0;
  angle = 0;
  point = 1;

  transformBall();
}
