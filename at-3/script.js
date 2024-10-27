// Written by: Samantha Lugay
// Student Number: s4087814
//----------------------------------------------------------------------------------------//
// GUIDE TO INTERACTION "TAP TO FLIP"
const tap = document.querySelector("#tap");

tap.addEventListener("click", startInteraction);

function startInteraction() {
  document.getElementById("tap").style.opacity = 0;
  tap.classList.add("h1-zero");
}

// -------------------------------------------------------------------
//link to zine pages
const section = document.querySelector("section");
console.log(section);

section.addEventListener("click", () => {
  section.classList.toggle("flip1");
});

// -------------------------------------------------------------------

const toggleBtn = document.querySelector("#toggle-btn");
console.log(toggleBtn);

toggleBtn.addEventListener("click", () => {
  section.classList.toggle("flip1");
});

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
