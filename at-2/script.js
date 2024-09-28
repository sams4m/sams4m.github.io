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
    songIndex: "0",
    name: "Rain Thoughts",
    src: "audio/rain-thoughts.mp3",
    // Song by
  },

  {
    songIndex: "1",
    name: "Blue Ginger",
    src: "audio/blue-ginger.mp3",
    // Song by
  },

  {
    songIndex: "2",
    name: "Saltwater and Sunscreen",
    src: "audio/saltwater-and-sunscreen.mp3",
    // Song by
  },

  {
    songIndex: "3",
    name: "Chill out",
    src: "audio/chill-out.mp3",
    // Song by
  },

  {
    songIndex: "4",
    name: "Parachute",
    src: "audio/parachute.mp3",
    // Song by
  },
];

// MUSIC CONTROLS
// initial song playing by default -- rain
const playingSong = new Audio("audio/rain-thoughts.mp3");
console.log(playingSong);

// initial songindex = 0
let songi = 0;

const playBtn = document.querySelector("#play-btn");
console.log(playBtn);
const playImg = document.querySelector("#play-img");

const skipBtn = document.querySelector("#skip-btn");
console.log(skipBtn);
const skipImg = document.querySelector("#skip-img");

const prevBtn = document.querySelector("#prev-btn");
console.log(prevBtn);
const prevImg = document.querySelector("#prev-img");

const loopBtn = document.querySelector("#loop-btn");
console.log(loopBtn);
const loopImg = document.querySelector("#loop-img");

// event listeners
// PREVIOUS
prevBtn.addEventListener("click", function () {
  togglePrev(songi - 1);
});
// PLAY
playBtn.addEventListener("click", togglePlay);
// SKIP
skipBtn.addEventListener("click", function () {
  toggleSkip(songi + 1);
});

// ----------------------------------------------------------------------------------------//
// FUNCTIONS
// PREVIOUS
function togglePrev(num) {
  if (num < 5) {
    playingSong.src = songs[num].src;

    playingSong.load();
    playingSong.play();

    songi++;
  } else if (num === 5) {
    num = 0;
    playingSong.src = songs[num].src;

    playingSong.load();
    playingSong.play();

    songi = num;
  } else if (num === -1) {
    num = 4;
    playingSong.src = songs[num].src;

    playingSong.load();
    playingSong.play();

    songi = num;
  }
}

// PLAY
function togglePlay() {
  if (playingSong.paused || playingSong.ended) {
    playingSong.play();
    playImg.src =
      "https://img.icons8.com/?size=100&id=85963&format=png&color=74412e";
  } else {
    playingSong.pause();
    playImg.src =
      "https://img.icons8.com/?size=100&id=85165&format=png&color=74412e";
  }
}

// SKIP
function toggleSkip(num) {
  if (num < 5) {
    playingSong.src = songs[num].src;

    playingSong.load();
    playingSong.play();

    songi++;
  } else if (num === 5) {
    num = 0;
    playingSong.src = songs[num].src;

    playingSong.load();
    playingSong.play();

    songi = num;
  }
}
