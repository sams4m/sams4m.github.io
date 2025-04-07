// initialisation; setting up canvas
// remove margin of screen + scroll bar
document.body.style.margin = 0;
document.body.style.overflow = `hidden`;

// create canvas
const cnv = document.createElement("canvas");
// set canvas width = window width
cnv.width = window.innerWidth;
// set canvas height to window height
cnv.height = window.innerHeight;
// adding canvas to DOM --> child of body
document.body.appendChild(cnv);

// gets 2d context of canvas
const ctx = cnv.getContext("2d");
// set background colour to cornsilk
cnv.style.backgroundColor = "cornsilk";

//SETTING UP IMAGE -----------------------------------------------------
// var to store base64 representation of the image
let img_data;

// draw an image i function
// drawing image onto 2d contex of canvas
// drawImage(image, dx, dy, dWidth, dHeight)
// dx,dy = distance from 0,0 (top left)
const draw = (i) => ctx.drawImage(i, 0, 0, cnv.width, cnv.height);

// creates new instance of Image object type in img
const img = new Image();
// when img loads
img.onload = () => {
  // resize canvas height to maintain the image's aspect ratio
  cnv.height = cnv.width * (img.height / img.width);
  // draw original img
  draw(img);
  // converts img to a base64 JPEG string
  img_data = cnv.toDataURL("image/jpeg");
  // initiates glitch process
  add_glitch();
};
// img source = selfie.jpeg
img.src = `selfie.jpeg`;

// GLITCH LOGIC ---------------------------------------------------------
// function to get a random integer from 0 to max - 1
const rand_int = (max) => Math.floor(Math.random() * max);

// recursive function that randomly slices and removes chunks
// from the base64 image string
// returning a corrupted ver
const glitchify = (data, chunk_max, repeats) => {
  // chunk size = a random number from 0 to chunk max/4
  // then multiply rand int by 4
  const chunk_size = rand_int(chunk_max / 4) * 4;
  // index = random number from 0 to length of data - 24 - chunk size
  // from above, then add 24 after
  const i = rand_int(data.length - 24 - chunk_size) + 24;
  // front = data 0 till index from above
  const front = data.slice(0, i);
  // back = data index + chunk size till end of data
  const back = data.slice(i + chunk_size, data.length);
  // result = front + back string
  // will be missing the chunk size --> this is the "corrupted"
  const result = front + back;
  // ternary operator; If repeats = 0, return result
  // else call glitchify() again with repeats - 1
  return repeats == 0 ? result : glitchify(result, chunk_max, repeats - 1);
};

// CREATING GLITCHING FRAMES ------------------------------------------------
// array that stores multiple glitched images
const glitch_arr = [];

// function that creates 12 glitched images instances and stores
// into glitch array
const add_glitch = () => {
  // creating new instance index of Image obj
  const i = new Image();
  // when new instance index loads
  i.onload = () => {
    // push into glitch array
    glitch_arr.push(i);
    // if less than 12 instances repeat
    if (glitch_arr.length < 12) add_glitch();
    // otherwise draw frame
    else draw_frame();
  };
  // source of index is glitched image
  // data = img_data (string)
  // max chunk size = 25
  // 30 repeats
  i.src = glitchify(img_data, 25, 30);
};

// ANIMATION --------------------------------------------------------
// boolean to control when glitching happens
let is_glitch = false;

// adding event listener for when mouse enters canvas
// makes is glitching true
cnv.addEventListener("mouseenter", () => {
  is_glitch = true;
});

// adding event listener for when mouse leaves canvas
// makes is glitching false
cnv.addEventListener("mouseleave", () => {
  is_glitch = false;
});

// var to store current index of glitched image (from glitch_arr)
let glitch_i = 0;

// drawing the image frames
const draw_frame = () => {
  // if is glitch is true
  if (is_glitch) {
    // pick a random glitch frame
    glitch_i = rand_int(glitch_arr.length);
    // draw glitched image
    draw(glitch_arr[glitch_i]);
  } else {
    // else draw original image
    draw(img);
  }
  // keep looping animation
  requestAnimationFrame(draw_frame);
};
