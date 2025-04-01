// HOVER CAT EXAMPLE
// let us first work on the hover effect
const myCat = document.querySelector("#my-cat");
console.log(myCat);
const moreInfo = document.querySelector("#more-info");
console.log(moreInfo);

myCat.addEventListener("mouseover", showMoreInfo);
myCat.addEventListener("mouseout", hideMoreInfo);

function showMoreInfo() {
  moreInfo.classList.add("show");
}

function hideMoreInfo() {
  moreInfo.classList.remove("show");
}

// ----------------------------------------------------------
// DROP DOWN MENU EXAMPLE
const profileBtn = document.querySelector("#profile-btn");
console.log(profileBtn);
const profileContent = document.querySelector("#profile-content");
console.log(profileContent);

profileBtn.addEventListener("click", toggleMenu);

// toggles between display block and none by adding and removing
//show class
function toggleMenu() {
  profileContent.classList.toggle("show");
}

// ----------------------------------------------------------
// GO TO TOP/BOTTOM EXAMPLE
const bottomBtn = document.querySelector("#bottom-btn");
console.log(bottomBtn);

const topBtn = document.querySelector("#top-btn");
console.log(topBtn);

bottomBtn.addEventListener("click", gotoBottom);

function gotoBottom() {
  window.location.href = "#bottom";
}

topBtn.addEventListener("click", gotoTop);

function gotoTop() {
  window.location.href = "#top";
}

// ----------------------------------------------------------
// SCROLL EXAMPLE
const scrollContent = document.querySelector("#scroll-content");

const hscrollButton = document.querySelector("#hscroll-button");
console.log(hscrollButton);

hscrollButton.addEventListener("click", getHScroll);

const hscroll = document.querySelector("#hscroll");

function getHScroll() {
  hscroll.textContent = scrollContent.scrollLeft;
}

const vscrollButton = document.querySelector("#vscroll-button");
console.log(vscrollButton);

vscrollButton.addEventListener("click", getVScroll);

const vscroll = document.querySelector("#vscroll");

function getVScroll() {
  vscroll.textContent = scrollContent.scrollTop;
}

const hscroll150Button = document.querySelector("#hscroll150-button");
console.log(hscroll150Button);

hscroll150Button.addEventListener("click", gotoHScroll150);

function gotoHScroll150() {
  scrollContent.scrollTo({ left: 150, behavior: "smooth" });
}

const vscroll300Button = document.querySelector("#vscroll300-button");
console.log(vscroll300Button);

vscroll300Button.addEventListener("click", gotoVScroll300);

function gotoVScroll300() {
  scrollContent.scrollTo({ top: 300, behavior: "smooth" });
}

const wvscrollButton = document.querySelector("#wvscroll-button");
console.log(wvscrollButton);

wvscrollButton.addEventListener("click", getWVScroll);

const wvscroll = document.querySelector("#wvscroll");

function getWVScroll() {
  wvscroll.textContent = window.scrollY;
}

// DRAG DROP EXAMPLE ---------------------------------------------------
const purpleBox = document.querySelector("#purple-box");
console.log(purpleBox);

const dropBox = document.querySelector("#drop-box");
console.log(dropBox);

// place to store dragged element
let draggedElement = null;

//event listener for drag
purpleBox.addEventListener("dragstart", startDrag);

function startDrag() {
  console.log("dragging started");
  draggedElement = purpleBox;
}

dropBox.addEventListener("dragover", endDrag);

function endDrag() {
  console.log("stop dragging and drop now");
  event.preventDefault(); //no more dragging to happen
}

dropBox.addEventListener("drop", handleDrop);

function handleDrop() {
  // checking that thing has been dropped
  if (draggedElement) {
    let color = window
      .getComputedStyle(draggedElement)
      .getPropertyValue("background-color");
    console.log(color);

    dropBox.style.backgroundColor = color;
    dropBox.textContent = "content is dropped";
    draggedElement = null;
  }
}
