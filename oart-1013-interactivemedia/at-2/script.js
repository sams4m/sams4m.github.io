// Written by: Samantha Lugay
// Student Number: s4087814
//----------------------------------------------------------------------------------------//
// VIDEO VISUALS
// link to html id
const currentVideo = document.querySelector("#current-video");
console.log(currentVideo);

// VISUAL LIST
const visuals = [
  {
    name: "rain",
    src: "https://cdn.pixabay.com/video/2022/02/07/106980-674703577_large.mp4",
    // Video by Joe_hackney from Pixabay
  },

  {
    name: "flower",
    src: "https://cdn.pixabay.com/video/2022/01/05/103485-664408936_large.mp4",
    // Video by Christian Bodhi from Pixabay
  },

  {
    name: "water",
    src: "https://cdn.pixabay.com/video/2024/06/22/217749_large.mp4",
    // Video by Engin_Akyurt from Pixabay
  },

  {
    name: "rainbow",
    src: "https://cdn.pixabay.com/video/2019/02/16/21460-318172490_large.mp4",
    // Video by Christian Bodhi from Pixabay
  },

  {
    name: "jelly",
    src: "https://cdn.pixabay.com/video/2024/05/25/213617_large.mp4",
    // Video by Christian Bodhi from Pixabay
  },
];
// visuals sourced from Pixabay free for use under the Pixabay Content License

//----------------------------------------------------------------------------------------//
// VISUAL BUTTONS
// link to html id
const rainBtn = document.querySelector("#rain-btn");
console.log(rainBtn);

const flowerBtn = document.querySelector("#flower-btn");
console.log(flowerBtn);

const waterBtn = document.querySelector("#water-btn");
console.log(waterBtn);

const rainbowBtn = document.querySelector("#rainbow-btn");
console.log(rainbowBtn);

const jellyBtn = document.querySelector("#jelly-btn");
console.log(rainbowBtn);

// event listeners
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

jellyBtn.addEventListener("click", function () {
  chooseVisual(4);
});

//function to change the visual
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
    // Music by Blue Sirens - Rain Thoughts - https://thmatc.co/?l=A3BD6D2E
  },

  {
    songIndex: "2",
    name: "Blue Ginger",
    src: "audio/blue-ginger.mp3",

    // Music by Citrus Avenue - Blue Ginger - https://thmatc.co/?l=62CC050E
  },

  {
    songIndex: "3",
    name: "Saltwater and Sunscreen",
    src: "audio/saltwater-and-sunscreen.mp3",

    // Music by Citrus Avenue - Saltwater and Sunscreen - https://thmatc.co/?l=79486965
  },

  {
    songIndex: "4",
    name: "Chill out",
    src: "audio/chill-out.mp3",

    // Music by cold winter breeze - chill out - https://thmatc.co/?l=3F87C14E
  },

  {
    songIndex: "5",
    name: "Parachute",
    src: "audio/parachute.mp3",

    // Music by Mykyl - Parachute - https://thmatc.co/?l=FF4A8662
  },
];

// All music sourced from Thematic, free for use with an affiliated account.

//----------------------------------------------------------------------------------------//
// MEDIA CONTROLS
// Currently playing song; set initial song playing by default -- rain
const playingSong = new Audio("audio/rain-thoughts.mp3");
console.log(playingSong);

// initial song array index = 0
let songi = 0;

// initial heart button status; inactive
let heartStatus = 0;

// link to html id
// heart button
const heartBtn = document.querySelector("#heart-btn");
console.log(heartBtn);
const heartImg = document.querySelector("#heart-img");

// Song name; appears when heart button active
const currentSong = document.querySelector("#current-song");
console.log(currentSong);

// previous button
const prevBtn = document.querySelector("#prev-btn");
console.log(prevBtn);
const prevImg = document.querySelector("#prev-img");

// play button
const playBtn = document.querySelector("#play-btn");
console.log(playBtn);
const playImg = document.querySelector("#play-img");

// skip button
const skipBtn = document.querySelector("#skip-btn");
console.log(skipBtn);
const skipImg = document.querySelector("#skip-img");

// loop button
const loopBtn = document.querySelector("#loop-btn");
console.log(loopBtn);
const loopImg = document.querySelector("#loop-img");

// event listeners
// SONG END
playingSong.addEventListener("ended", playNext);

// HEART; shows song name
heartBtn.addEventListener("click", activeHeart);

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
  //update song array index
  songi++;
  console.log("song index updated:", songi);

  // update song source
  playingSong.src = songs[songi].src;

  playingSong.load();
  playingSong.play();
}

// HEART BUTTON
function activeHeart() {
  console.log("heart button clicked.");

  if (heartStatus === 0) {
    // heart button activated
    heartStatus = 1;

    //opacity 100%
    heartImg.classList.remove("media-ctrl-inactive");

    // changing heart btn colour
    heartImg.src =
      "https://img.icons8.com/?size=100&id=JD2A4WXqotI8&format=png&color=60a9a7";

    // show song name
    currentSong.textContent = songs[songi].name;
  } else if (heartStatus === 1) {
    // heart button deactivated
    heartStatus = 0;

    //opacity 50%
    heartImg.classList.add("media-ctrl-inactive");

    // changing heart btn colour
    heartImg.src =
      "https://img.icons8.com/?size=100&id=JD2A4WXqotI8&format=png&color=74412e";

    // remove song name
    currentSong.textContent = null;
  }
}

// PREVIOUS
function togglePrev(num) {
  console.log("previous button clicked.");

  if (num <= songs.length && num > 0) {
    // if the current song index is between 1 to max length
    //update song source
    playingSong.src = songs[num - 1].src;

    playingSong.load();
    playingSong.play();

    // checking heart button status
    if (heartStatus === 1) {
      // if active update song name
      currentSong.textContent = songs[num - 1].name;
    } else if (heartStatus === 0) {
      // otherwise empty
      currentSong.textContent = null;
    }

    //update song array index
    songi = num - 1;
    console.log("song index updated:", songi);
  } else if (num === 0) {
    // if current song index is 0; first song, previous song = last song
    //update num to be the last song array index
    num = songs.length - 1;
    //update song source
    playingSong.src = songs[num].src;

    playingSong.load();
    playingSong.play();

    // checking heart button status
    if (heartStatus === 1) {
      // if active update song name
      currentSong.textContent = songs[num].name;
    } else if (heartStatus === 0) {
      // otherwise empty
      currentSong.textContent = null;
    }

    //update song array index
    songi = num;
    console.log("song index updated:", songi);
  }
  // ensure pause icon active
  playImg.src =
    "https://img.icons8.com/?size=100&id=85963&format=png&color=74412e";
}

// PLAY
function togglePlay() {
  console.log("play button clicked.");
  if (playingSong.paused || playingSong.ended) {
    // if audio not active, play audio
    playingSong.play();

    // change to pause icon
    playImg.src =
      "https://img.icons8.com/?size=100&id=85963&format=png&color=74412e";
  } else {
    // if audio active, pause audio
    playingSong.pause();

    // revert to play icon
    playImg.src =
      "https://img.icons8.com/?size=100&id=85165&format=png&color=74412e";
  }
}

// SKIP
function toggleSkip(num) {
  console.log("skip button clicked.");
  if (num < songs.length) {
    // if song index less than or equal to array length
    //update song ource
    playingSong.src = songs[num].src;

    playingSong.load();
    playingSong.play();

    // checking heart button status
    if (heartStatus === 1) {
      // if active update song name
      currentSong.textContent = songs[num].name;
    } else if (heartStatus === 0) {
      // otherwise empty
      currentSong.textContent = null;
    }
  } else if (num === songs.length) {
    // if song index equal to array length, ie. last song, go back to first
    num = 0;
    //update song source
    playingSong.src = songs[num].src;

    playingSong.load();
    playingSong.play();

    // checking heart button status
    if (heartStatus === 1) {
      // if active update song name
      currentSong.textContent = songs[num].name;
    } else if (heartStatus === 0) {
      // otherwise empty
      currentSong.textContent = null;
    }
  }

  // ensure pause icon active
  playImg.src =
    "https://img.icons8.com/?size=100&id=85963&format=png&color=74412e";

  //update song array index
  songi = num;
  console.log("song index updated:", songi);
}

//LOOP; set function to true or false
// default loop is set to false
function loopSong() {
  console.log("loop button clicked.");
  if (playingSong.loop === false) {
    // loop song
    playingSong.loop = true;

    //opacity 100%
    loopImg.classList.remove("media-ctrl-inactive");

    // change icon colour
    loopImg.src =
      "https://img.icons8.com/?size=100&id=qxrv0RToYAHt&format=png&color=60a9a7";
  } else {
    // remove loop song
    playingSong.loop = false;

    // opacity 50%
    loopImg.classList.add("media-ctrl-inactive");

    // revert icon colour
    loopImg.src =
      "https://img.icons8.com/?size=100&id=qxrv0RToYAHt&format=png&color=74412e";
  }
}

//----------------------------------------------------------------------------------------//
// PROGRESS BAR FOR MUSIC
// link to html id
const progressBarFill = document.querySelector("#progress-bar-fill");

// event listener
playingSong.addEventListener("timeupdate", showProgress);

// progress calculation function
function showProgress() {
  // get current play time of song
  const currentTime = playingSong.currentTime;
  console.log("current time", currentTime.toFixed(2)); //to 2 decimal points

  // get duration of song
  const duration = playingSong.duration;
  console.log("duration", duration.toFixed(2));

  // calculate percentage of song played
  const progress = (currentTime / playingSong.duration) * 100; //percentage value
  console.log("progress", progress.toFixed(2));

  //showing the progress on the bar
  progressBarFill.style.width = progress + "%";
}

//----------------------------------------------------------------------------------------//
// OTHER GESTURES; playlist and focus mode
// link to html id
// play list button
const viewPlaylist = document.querySelector("#view-playlist");
console.log(viewPlaylist);

// focus mode button
const focusMode = document.querySelector("#focus-mode");
console.log(focusMode);

// playlist span
const fullPlaylist = document.querySelector("#full-playlist");
console.log(fullPlaylist);

// playlist view status; set initial to inactive
let viewList = 0;

// event listeners
viewPlaylist.addEventListener("click", showPlaylist);
focusMode.addEventListener("click", toggleFullScreen);

// functions
// VIEW FULL PLAYLIST
function showPlaylist() {
  console.log("show full playlist clicked.");

  if (viewList === 0) {
    // turn playlist view active
    // loop through songs array for names and print
    for (let i = 0; i < songs.length; i++) {
      fullPlaylist.textContent += "🩵 " + (i + 1) + ". " + songs[i].name + "\n";
    }

    // set list to active
    viewList = 1;
  } else if (viewList === 1) {
    // remove list
    fullPlaylist.textContent = null;

    // set list to inactive
    viewList = 0;
  }
}

// FOCUS MODE
// resizes to show visuals at full screen
function toggleFullScreen() {
  console.log("focus mode clicked.");

  if (!document.fullscreenElement) {
    //  turn focus mode on
    currentVideo.requestFullscreen();
  } else if (miniPlayerStatus === 1) {
    // exit focus mode
    document.exitFullscreen;
  }
}
