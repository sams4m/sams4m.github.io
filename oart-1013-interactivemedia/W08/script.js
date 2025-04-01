//access to video first
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// Play pause button button
const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);

playPauseBtn.addEventListener("click", togglePlay);

const playPauseImg = document.querySelector("#play-pause-img");

function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

// Mute button
const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");
console.log(muteUnmuteBtn);

muteUnmuteBtn.addEventListener("click", toggleSound);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");

function toggleSound() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteBtn.style.backgroundColor = "#e5e5cb68";

    muteUnmuteBtn.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  } else {
    myVideo.muted = true;

    // colour change
    muteUnmuteBtn.style.backgroundColor = "red";

    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  }
}

// Progress bar
myVideo.addEventListener("timeupdate", showProgress);

const progressBar = document.querySelector("#progress-bar-fill");

function showProgress() {
  // getting the progress
  const currentTime = myVideo.currentTime;
  console.log("current time", currentTime.toFixed(2)); //to 2 decimal points

  const progress = (currentTime / myVideo.duration) * 100; //percentage value
  console.log("progress", progress.toFixed(2));

  //showing the progress on the bar
  progressBar.style.width = progress + "%";
}

// Step Button (time marker)
const step1Btn = document.querySelector("#step-1-btn");
console.log(step1Btn);
step1Btn.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 19.32;
}

// Likes
const likes = document.querySelector("#likes");
console.log(likes);

let likeCount = 0;

const likesBtn = document.querySelector("#like-btn");
likesBtn.addEventListener("click", addLikes);

function addLikes() {
  likeCount++;
  likes.textContent = likeCount;
}

// implementing full screen with double click
myVideo.addEventListener("dblclick", toggleFullScreen);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen;
  }
}

// PLAYLIST
const videos = [
  {
    name: "zenscape",
    src: "zenscape.mp4",
  },

  {
    name: "stardust",
    src: "stardust.mp4",
  },
];

const frstVideoBtn = document.querySelector("#first-video-btn");
console.log(frstVideoBtn);

const scndVideoBtn = document.querySelector("#second-video-btn");
console.log(scndVideoBtn);

const videoName = document.querySelector("#video-name");

frstVideoBtn.addEventListener("click", function () {
  chooseVideo(0); //first video
});
scndVideoBtn.addEventListener("click", function () {
  chooseVideo(1);
});

function chooseVideo(no) {
  myVideo.src = videos[no].src;
  videoName.textCotent = videos[no].name;
  console.log(myVideo.src);

  myVideo.load();
  myVideo.play();
}
