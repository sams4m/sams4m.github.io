let player;
let isMuted = true;
let muteBtn;

// Load YouTube API
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// YouTube API ready callback
window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player("video", {
    height: "100%",
    width: "100%",
    videoId: "kTzshk4B-Qs",
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
};

function onPlayerReady(event) {
  // link to mutebtn
  muteBtn = document.querySelector(".mute-btn");

  if (muteBtn) {
    muteBtn.addEventListener("click", volumeToggle);
  }
}

function volumeToggle() {
  console.log(`button clicked`);
  if (!player) {
    console.log("Player not ready yet");
    return;
  }

  if (isMuted) {
    console.log(`unmuted`);
    isMuted = false;
    player.unMute();
    muteBtn.textContent = "click to mute";
  } else {
    console.log(`muted`);
    isMuted = true;
    player.mute();
    muteBtn.textContent = "click to unmute";
  }
}

//   if (video.muted) {
//     console.log(`unmuted`);
//     video.muted = false;
//     muteBtn.textContent = "click to mute";
//   } else {
//     console.log(`muted`);
//     video.muted = true;
//     muteBtn.textContent = "click to unmute";
//   }
