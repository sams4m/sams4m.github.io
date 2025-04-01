// Written by: Samantha Lugay
// Student Number: s4087814
//----------------------------------------------------------------------------------------//
// GUIDE TO INTERACTION "TAP TO FLIP"
const tap = document.querySelector("#tap");

tap.addEventListener("click", startInteraction);

function startInteraction() {
  // makes it invisible
  document.getElementById("tap").style.opacity = 0;
  // sets z-index to 0 so its at the very back
  tap.classList.add("h1-zero");
}

// -------------------------------------------------------------------
//link to zine pages
const section = document.querySelector("section");
console.log(section);

//link to toggle button
const toggleBtn = document.querySelector("#toggle-btn");
console.log(toggleBtn);

// link Sound Effects
const sfx = document.querySelector("#sfx");
console.log(sfx);

// Sound effects list
const sounds = [
  {
    songIndex: "1",
    name: "push",
    src: "sound/push.wav",
    // Sound created myself
  },

  {
    songIndex: "2",
    name: "splash",
    src: "sound/splash.wav",
    // Sound created myself
  },
];

// Sound Count
let soundCount = 0;

// activates flip from zine
section.addEventListener("click", toggleFlip);
section.addEventListener("click", playSound);

// activates flip from button
toggleBtn.addEventListener("click", toggleFlipBtn);
toggleBtn.addEventListener("click", playSound);

//----------------------------------------------------------------------------------------//
// FUNCTIONS
//flip
function toggleFlip() {
  console.log("toggled.");
  section.classList.toggle("flip1");
}

function toggleFlipBtn() {
  console.log("toggled.");
  section.classList.toggle("flip1");
  toggleBtn.classList.toggle("click");
}

// sound
function playSound() {
  if (soundCount == 0) {
    sfx.src = sounds[soundCount].src;

    sfx.play();

    soundCount = 1;
  } else if (soundCount == 1) {
    sfx.src = sounds[soundCount].src;

    sfx.play();

    soundCount = 0;
  }
}

//----------------------------------------------------------------------------------------//
// let count = 1;
// const setSpreads = 3;
// section.addEventListener("click", flipPage);

// function flipPage() {
//   if (count < setSpreads) {
//     if (count == 1) {
//       section.classList.toggle("flip1");

//       count++;
//     } else if (count == 2) {
//       section.classList.toggle("flip2");

//       count++;
//     }
//   } else if (count > setSpreads - 1) {
//     if (count == 3) {
//       section.classList.toggle("flip2");
//       count++;
//     } else if (count == 4) {
//       section.classList.toggle("flip2");
//       count = 1;
//     }
//   }
// }
