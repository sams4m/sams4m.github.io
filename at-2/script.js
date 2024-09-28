// VIDEO VISUALS
const currentVideo = document.querySelector("#current-video");
console.log(currentVideo);

// VISUAL LIST
const visuals = [
  {
    name: "rain",
    src: "static/rain.mp4",
    // Video by Joe_hackney from Pixabay
  },

  {
    name: "flower",
    src: "static/flower.mp4",
    // Video by Christian Bodhi from Pixabay
  },

  {
    name: "water",
    src: "static/water.mp4",
    // Video by Engin_Akyurt from Pixabay
  },

  {
    name: "rainbow",
    src: "static/rainbow.mp4",
    // Video by Christian Bodhi from Pixabay
  },
];
// visuals sourced from Pixabay free for use under the Pixabay Content License

// VISUAL BUTTONS
const rainBtn = document.querySelector("#rain-btn");
console.log(rainBtn);

const flowerBtn = document.querySelector("#flower-btn");
console.log(flowerBtn);

const waterBtn = document.querySelector("#water-btn");
console.log(waterBtn);

const rainbowBtn = document.querySelector("#rainbow-btn");
console.log(rainbowBtn);

rainBtn.addEventListener("click", function () {
  chooseVisual(0); //first video
});
flowerBtn.addEventListener("click", function () {
  chooseVisual(1);
});
waterBtn.addEventListener("click", function () {
  chooseVisual(2); //first video
});
rainbowBtn.addEventListener("click", function () {
  chooseVisual(3);
});

function chooseVisual(no) {
  currentVideo.src = visuals[no].src;
  console.log(currentVideo.src);

  currentVideo.load();
  currentVideo.play();
}

// MUSIC CONTROLS

// PROGRESS BAR FOR MUSIC
currentSong = document.querySelector("#current-song");

currentSong.addEventListener("timeupdate", showProgress);

const progressBar = document.querySelector("#progress-bar-fill");

function showProgress() {
  // getting the progress
  const currentTime = currentSong.currentTime;
  console.log("current time", currentTime.toFixed(2)); //to 2 decimal points

  const progress = (currentTime / myVideo.duration) * 100; //percentage value
  console.log("progress", progress.toFixed(2));

  //showing the progress on the bar
  progressBar.style.width = progress + "%";
}

// MUSIC
// SONG LIST
const songs = [
  {
    name: "rain",
    src: "audio/rain-thoughts.mp3",
    // Song by
  },

  {
    name: "ginger",
    src: "audio/blue-ginger.mp3",
    // Song by
  },

  {
    name: "saltwater",
    src: "audio/saltwater-and-sunscreen.mp3",
    // Song by
  },

  {
    name: "chill",
    src: "audio/chill-out.mp3",
    // Song by
  },
];
