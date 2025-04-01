const slides = document.querySelectorAll(".slides");
console.log(slides);

const slidesContainer = document.querySelector("#slides-container");

let slideIndex = 0;
let distance = 0;

// add click event to nav buttons
const prevBtn = document.querySelector("#prev-btn");
console.log(prevBtn);

prevBtn.addEventListener("click", gotoPrev);

function gotoPrev() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }

  distance = slides[slideIndex].offsetLeft;
  console.log(distance);
  window.scrollTo({ left: distance, behaviour: "smooth" });
}

const nextBtn = document.querySelector("#next-btn");
console.log(nextBtn);

nextBtn.addEventListener("click", gotoNext);

function gotoNext() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }

  distance = slides[slideIndex].offsetLeft;
  console.log(distance);
  window.scrollTo({ left: distance, behaviour: "smooth" });
}
