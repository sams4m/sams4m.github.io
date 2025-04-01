const notify = document.querySelector("#notify");
console.log(notify);

const playButton = document.querySelector("#play-button");
console.log(playButton);
playButton.addEventListener("click", playAud);

function playAud() {
  notify.play();
}

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
pauseButton.addEventListener("click", pauseAud);

function pauseAud() {
  notify.pause();
}

const pop = document.querySelector("#pop-sound");
console.log(pop);

const popButton = document.querySelector("#pop-button");
console.log(popButton);
popButton.addEventListener("click", playPop);

function playPop() {
  pop.play();
}

const starVid = document.querySelector("#star-vid");
console.log(starVid);

const playVidButton = document.querySelector("#play-vid");
console.log(playVidButton);
playVidButton.addEventListener("click", playStar);

function playStar() {
  starVid.play();
}

const pauseVidButton = document.querySelector("#pause-vid");
console.log(pauseVidButton);
pauseVidButton.addEventListener("click", pauseStar);

function pauseStar() {
  starVid.pause();
}
