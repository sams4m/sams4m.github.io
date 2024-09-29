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

//----------------------------------------------------------------------------------------//
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

//----------------------------------------------------------------------------------------//
// MUSIC
// SONG LIST
const songs = [
  {
    songIndex: "1",
    name: "Rain Thoughts",
    src: "audio/rain-thoughts.mp3",
    isFav: false,
    // Song by
  },

  {
    songIndex: "2",
    name: "Blue Ginger",
    src: "audio/blue-ginger.mp3",
    isFav: false,
    // Song by
  },

  {
    songIndex: "3",
    name: "Saltwater and Sunscreen",
    src: "audio/saltwater-and-sunscreen.mp3",
    isFav: false,
    // Song by
  },

  {
    songIndex: "4",
    name: "Chill out",
    src: "audio/chill-out.mp3",
    isFav: false,
    // Song by
  },

  {
    songIndex: "5",
    name: "Parachute",
    src: "audio/parachute.mp3",
    isFav: false,
    // Song by
  },
];

//----------------------------------------------------------------------------------------//
// MEDIA CONTROLS
// initial song playing by default -- rain
const playingSong = new Audio("audio/rain-thoughts.mp3");
console.log(playingSong);

// initial song array index = 0
let songi = 0;

const addBtn = document.querySelector("#add-btn");
console.log(addBtn);
const addImg = document.querySelector("#add-img");

const prevBtn = document.querySelector("#prev-btn");
console.log(prevBtn);
const prevImg = document.querySelector("#prev-img");

const playBtn = document.querySelector("#play-btn");
console.log(playBtn);
const playImg = document.querySelector("#play-img");

const skipBtn = document.querySelector("#skip-btn");
console.log(skipBtn);
const skipImg = document.querySelector("#skip-img");

const loopBtn = document.querySelector("#loop-btn");
console.log(loopBtn);
const loopImg = document.querySelector("#loop-img");

// event listeners
// SONG END
playingSong.addEventListener("ended", playNext);

// ADD TO FAV
addBtn.addEventListener("click", addFavourite);

// PREVIOUS
prevBtn.addEventListener("click", function () {
  togglePrev(songs[songi].songIndex - 1);
});

// PLAY
playBtn.addEventListener("click", togglePlay);

// SKIP
skipBtn.addEventListener("click", function () {
  toggleSkip(songi + 1);
});

//LOOP
loopBtn.addEventListener("click", loopSong);

//----------------------------------------------------------------------------------------//
// MEDIA CONTROL FUNCTIONS
// AUTO PLAY NEXT SONG
function playNext() {
  songi++;

  playingSong.src = songs[songi].src;

  if (songs[songi].isFav == true) {
    addImg.src =
      "https://img.icons8.com/?size=100&id=85096&format=png&color=60a9a7";
  } else {
    addImg.src =
      "https://img.icons8.com/?size=100&id=85096&format=png&color=74412e";
  }

  playingSong.load();
  playingSong.play();
}

// ADD TO FAVOURITE
function addFavourite() {
  console.log("add to favourites button clicked.");

  if (songs[songi].isFav == flase) {
    songs[songi].isFav = true;
    addImg.src =
      "https://img.icons8.com/?size=100&id=85096&format=png&color=60a9a7";
  } else {
    songs[num].isFav == false;
    addImg.src =
      "https://img.icons8.com/?size=100&id=85096&format=png&color=74412e";
  }
}

// PREVIOUS
function togglePrev(num) {
  console.log("previous button clicked.");
  if (num < 6 && num > 0) {
    playingSong.src = songs[num - 1].src;

    playingSong.load();
    playingSong.play();

    songi = num - 1;
  } else if (num === 0) {
    num = 4;
    playingSong.src = songs[num].src;

    playingSong.load();
    playingSong.play();

    songi = num;
  }
  // ensure pause icon active
  playImg.src =
    "https://img.icons8.com/?size=100&id=85963&format=png&color=74412e";
}

// PLAY
function togglePlay() {
  console.log("play button clicked.");
  if (playingSong.paused || playingSong.ended) {
    playingSong.play();

    // change to pause icon
    playImg.src =
      "https://img.icons8.com/?size=100&id=85963&format=png&color=74412e";
  } else {
    playingSong.pause();

    // revert to play icon
    playImg.src =
      "https://img.icons8.com/?size=100&id=85165&format=png&color=74412e";
  }
}

// SKIP
function toggleSkip(num) {
  console.log("skip button clicked.");
  if (num < 4) {
    playingSong.src = songs[num].src;

    playingSong.load();
    playingSong.play();

    songi++;
  } else if (num === 5) {
    num = 0;
    playingSong.src = songs[num].src;

    playingSong.load();
    playingSong.play();
  }

  // ensure pause icon active
  playImg.src =
    "https://img.icons8.com/?size=100&id=85963&format=png&color=74412e";

  songi = num;
}

//LOOP
function loopSong() {
  console.log("loop button clicked.");
  if ((playingSong.loop = false)) {
    playingSong.loop = true;

    // change icon colour
    loopImg.src =
      "https://img.icons8.com/?size=100&id=83204&format=png&color=60a9a7";
  } else {
    playingSong.loop = false;

    // revert icon colour
    loopImg.src =
      "https://img.icons8.com/?size=100&id=83204&format=png&color=74412e";
  }
}

//----------------------------------------------------------------------------------------//
// PROGRESS BAR FOR MUSIC
playingSong.addEventListener("timeupdate", showProgress);

const progressBarFill = document.querySelector("#progress-bar-fill");

function showProgress() {
  // getting the progress
  const currentTime = playingSong.currentTime;
  console.log("current time", currentTime.toFixed(2)); //to 2 decimal points

  const duration = playingSong.duration;
  console.log("duration", duration.toFixed(2));

  const progress = (currentTime / playingSong.duration) * 100; //percentage value
  console.log("progress", progress.toFixed(2));

  //showing the progress on the bar
  progressBarFill.style.width = progress + "%";
}
