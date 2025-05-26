// link card and btn
const card = document.getElementById(`card`);
console.log(card);

const minCard = document.getElementById(`min-card`);
console.log(card);

const closeBtn = document.getElementById(`close-btn`);
console.log(closeBtn);

// close btn event listener
closeBtn.addEventListener(`click`, closeCard);
minCard.addEventListener(`click`, openCard);

function closeCard() {
  console.log(`close button clicked`);

  // remove / add active class
  card.classList.remove(`active`);
  minCard.classList.add(`active`);
}

function openCard() {
  console.log(`min card clicked`);

  // remove / add active class
  card.classList.add(`active`);
  minCard.classList.remove(`active`);
}
