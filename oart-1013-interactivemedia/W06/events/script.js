// const myButton = document.querySelector("#my-button");
// console.log(myButton);

// myButton.addEventListener("click", handleClick);

// let clickCount = 0;
// const Count = document.querySelector("#count");

// function handleClick(){
//     console.log("hey did you just click me?")

//     clickCount++;

//     count.textContent = clickCount;
// }

//--------------------------------------------

const boxContainer = document.querySelector(".box-container");
console.log(boxContainer);

const toggleButton = document.querySelector("#toggle-button");
console.log(toggleButton);
toggleButton.addEventListener("click", toggleMe);

function toggleMe() {
  // toggle instead of add -- toggles between the two states
  boxContainer.classList.toggle("row-reverse");
  console.log("toggle button is clicked.");
}

const addButton = document.querySelector("#add-button");
console.log(addButton);
addButton.addEventListener("click", addMe);

let colCount = 0;
function addMe() {
  // boxContainer.innerHTML+= ` <div class="box purple-box"></div>
  //     <div class="box coral-box"></div>`

  console.log("add button is clicked.");

  if (colCount % 2 === 0) {
    boxContainer.innerHTML += `<div class="box purple-box"></div>`;
  } else {
    boxContainer.innerHTML += `<div class="box coral-box"></div>`;
  }

  colCount++;
}

const removeButton = document.querySelector("#remove-button");
console.log(removeButton);
removeButton.addEventListener("click", removeMe);

function removeMe() {
  let lastBox = boxContainer.lastElementChild;
  console.log(lastBox);
  if (lastBox) {
    lastBox.remove();
  }
  count--;
}

//   mouse hover example
// mouseenter/mouseover
// mouseleave/mouseout
boxContainer.addEventListener("mouseenter", dropMe);
boxContainer.addEventListener("mouseleave", pickMe);

function dropMe() {
  boxContainer.classList.add("drop");
}

function pickMe() {
  boxContainer.classList.remove("drop");
}
