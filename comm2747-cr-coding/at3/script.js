// Written by: Samantha Lugay
// Student Number: s4087814
//----------------------------------------------------------------------------------------//
// LINK TO FOLDERS ------------------------------------------------------
const sam = document.getElementById(`sam`);
console.log(sam);

const santino = document.getElementById(`santino`);
console.log(santino);

const kunzy = document.getElementById(`kunzy`);
console.log(kunzy);

const jiwon = document.getElementById(`jiwon`);
console.log(jiwon);

const vanfan = document.getElementById(`vanfan`);
console.log(vanfan);

const adrian = document.getElementById(`adrian`);
console.log(adrian);

// LINK TO CONTAINER ------------------------------------------------------
const container = document.getElementById(`container`);
console.log(container);

// calling draggable function
makeDraggable(sam);
makeDraggable(santino);
makeDraggable(kunzy);
makeDraggable(jiwon);
makeDraggable(vanfan);
makeDraggable(adrian);

// FUNC: DRAGGABLE ------------------------------------------------------
function makeDraggable(element) {
  // vars
  let isDragging = false;
  // initial position for: mouse x, mouse y, folder x, folder y
  let mouseX, mouseY, posX, posY;

  element.addEventListener(`mousedown`, (e) => {
    e.preventDefault();
    // set dragging to be true
    isDragging = true;
    // add class list
    element.classList.add(`drag`);

    // folder position in viewport
    const folder = element.getBoundingClientRect();
    // window container position in viewport
    const window = container.getBoundingClientRect();

    // storing inital mouse x and y pos
    mouseX = e.clientX;
    mouseY = e.clientY;

    // getting folder position in window
    posX = folder.left - window.left;
    posY = folder.top - window.top;

    // event listeners for mouse
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  function onMouseMove(e) {
    // if not dragging return
    if (!isDragging) return;

    // change in pos
    const x = e.clientX - mouseX;
    const y = e.clientY - mouseY;

    // new x, y pos
    let newX = posX + x;
    let newY = posY + y;

    // make sure is within container restraints
    newX = Math.max(
      0,
      Math.min(newX, container.clientWidth - element.offsetWidth)
    );
    newY = Math.max(
      0,
      Math.min(newY, container.clientHeight - element.offsetHeight)
    );

    element.style.left = newX + `px`;
    element.style.top = newY + `px`;
  }

  function onMouseUp() {
    // lifted mouse, therefore set isdragging to false
    isDragging = false;
    // remove class list
    element.classList.remove(`drag`);
  }

  // mouse out event
  // auto "drops" the item when the mouse leaves the window
  window.addEventListener("mouseout", function () {
    mouseX = undefined;
    mouseY = undefined;
  });
}
