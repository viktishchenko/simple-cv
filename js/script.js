// menu
const hamburger = document.querySelector(".hamburger");
const linksContainer = document.querySelector(".links-container");
const navigation = document.querySelector(".navigation");
const navigationItem = document.querySelectorAll(".navigation__item");
// const showMenu = "show-menu";

// player
const player = document.querySelectorAll(".player");
const video = document.querySelector("video");
const mainPlayButton = document.querySelector(".player__button");
const playerControls = document.querySelector(".player__controls");
const playerControlsBtn = document.querySelector(".player__controls-btn");
const playerControlsVolume = document.querySelector(".player__controls-volume");
const volume = document.getElementById("volume");
const progress = document.getElementById("progress");
const fullScreen = document.querySelector(".player__controls-fullscreen");
const videoContainer = document.querySelector(".video-container__wrapper");

// Menu
hamburger.addEventListener("click", function () {
  const linksHeight = navigation.getBoundingClientRect().height;
  console.log("linksHeight :>> ", linksHeight);
});

// hamburger.addEventListener("click", function () {
//   navigation.classList.toggle("show-menu");
//   hamburger.classList.toggle("show-btn");
// });

// navigation.addEventListener("click", (e) => {
//   if (navigation.classList.contains("show-menu")) {
//     setTimeout(() => {
//       navigation.classList.remove("show-menu");
//     }, 1000);
//     hamburger.classList.remove("show-btn");
//   }
// });

// PLAYER
// const video = document.querySelector("video");
// const player = document.querySelector(".player");
// const playerBtn = document.querySelector(".player__button");
// const playerControlsBtn = document.querySelector(".player__controls-btn");
// const playerControlsVolume = document.querySelector(".player__controls-volume");
// const volume = document.getElementById("volume");
// const progress = document.getElementById("progress");
// const fullScreen = document.querySelector(".player__controls-fullscreen");
// const videoContainer = document.querySelector(".player__container");
const currentYear = (document.querySelector(".current-year").innerHTML =
  new Date().getFullYear());

// Play-Pause
// video.addEventListener("click", togglePlayPause);
// playerBtn.onclick = togglePlayPause;
// playerControlsBtn.onclick = togglePlayPause;

// function togglePlayPause() {
//   if (video.paused) {
//     playerControlsBtn.classList.remove("player__controls-play");
//     playerControlsBtn.classList.add("player__controls-pause");
//     playerBtn.hidden = true;
//     video.play();
//   } else {
//     playerControlsBtn.classList.remove("player__controls-pause");
//     playerControlsBtn.classList.add("player__controls-play");
//     playerBtn.hidden = false;
//     video.pause();
//   }
//   if (video.ended) {
//     playerBtn.hidden = false;
//     playerControlsBtn.classList.add("player__controls-play");
//   }
// }

// Mute
// playerControlsVolume.onclick = toggleMutedVideo;

// function toggleMutedVideo() {
//   if (video.muted) {
//     playerControlsVolume.classList.remove("player__controls-volume_nope");
//     playerControlsVolume.classList.add("player__controls-volume_yep");
//     video.muted = false;
//   } else {
//     playerControlsVolume.classList.remove("player__controls-volume_yep");
//     playerControlsVolume.classList.add("player__controls-volume_nope");
//     video.muted = true;
//   }
// }

// Sound
// progress.addEventListener("input", function () {
//   const value = this.value;
//   this.style.background = `linear-gradient(
//     to right,
//     #2196f3 0%,
//     #2196f3 ${value}%,
//     #fff ${value}%,
//     #fff 100%
//   )`;
// });

// Video
// volume.addEventListener("input", function () {
//   const value = this.value;
//   this.style.background = `linear-gradient(
//     to right,
//     #2196f3 0%,
//     #2196f3 ${value}%,
//     #fff ${value}%,
//     #fff 100%
//   )`;
//   if (volume.value < 10) {
//     playerControlsVolume.classList.remove("player__controls-volume_yep");
//     playerControlsVolume.classList.add("player__controls-volume_nope");
//   } else {
//     playerControlsVolume.classList.remove("player__controls-volume_nope");
//     playerControlsVolume.classList.add("player__controls-volume_yep");
//   }
//   video.volume = volume.value / 100;
// });

// Fullscreen
// fullScreen.onclick = toggleFullScreen;

// document.addEventListener(
//   "keypress",
//   function (e) {
//     if (e.keyCode === 13) {
//       toggleFullScreen();
//     }
//   },
//   false
// );

// function toggleFullScreen() {
//   if (!document.fullscreenElement) {
//     videoContainer.requestFullscreen();
//   }
//   if (document.fullscreenElement) {
//     document.exitFullscreen();
//   }
// }

/* 
=============
Play-Pause
=============
*/
function togglePlayPause() {
  if (video.paused) {
    mainPlayButton.hidden = true;
    playerControlsBtn.classList.remove("player__controls-play");
    playerControlsBtn.classList.add("player__controls-pause");
    video.volume = 0.2;
    video.play();
  } else {
    mainPlayButton.hidden = false;
    playerControlsBtn.classList.remove("player__controls-pause");
    playerControlsBtn.classList.add("player__controls-play");
    video.pause();
  }
}

function videoProgressUpdate() {
  if (this.value) {
    video.currentTime = (video.duration * this.value) / 100;
  }

  const value = Math.floor((video.currentTime / video.duration) * 100);
  progress.value = value;

  progress.style.background = `linear-gradient(
    to right,
    #c89961 0%,
    #c89961 ${value}%,
    #fff ${value}%,
    #fff 100%
    )`;
}

function stopVideo() {
  console.log("video ended!");
  mainPlayButton.hidden = false;
  playerControlsBtn.classList.remove("player__controls-pause");
  playerControlsBtn.classList.add("player__controls-play");
}

/* 
=============
Mute
=============
*/

function changeVulumeRange(vol) {
  const value = vol;
  console.log("value :>> ", value);
  video.volume = vol / 100;
  volume.value = value;
  volume.style.background = `linear-gradient(
    to right,
    #c89961 0%,
    #c89961 ${value}%,
    #fff ${value}%,
    #fff 100%
  )`;
  if (value == 0) {
    playerControlsVolume.classList.remove("player__controls-volume_yep");
    playerControlsVolume.classList.add("player__controls-volume_nope");
  } else {
    playerControlsVolume.classList.remove("player__controls-volume_nope");
    playerControlsVolume.classList.add("player__controls-volume_yep");
  }
}

function toggleVolume() {
  const btn = playerControlsVolume.classList;
  if (btn.contains("player__controls-volume_yep")) {
    playerControlsVolume.classList.remove("player__controls-volume_yep");
    playerControlsVolume.classList.add("player__controls-volume_nope");
    changeVulumeRange(0);
  } else {
    playerControlsVolume.classList.remove("player__controls-volume_nope");
    playerControlsVolume.classList.add("player__controls-volume_yep");
    changeVulumeRange(20);
  }
}

/* 
=============
Fullscreen
=============
*/
document.addEventListener(
  "keypress",
  function (e) {
    if (e.keyCode === 13) {
      toggleFullScreen();
    }
  },
  false
);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    videoContainer.requestFullscreen();
    playerControls.classList.add("fullscreen-mode");
  }
  if (document.fullscreenElement) {
    document.exitFullscreen();
    playerControls.classList.remove("fullscreen-mode");
  }
}

function keyboardShortcuts(event) {
  const { key } = event;
  switch (key) {
    case " ":
      togglePlayPause();
      break;
    case "m":
      toggleVolume();
      break;
    case "f":
      toggleFullScreen();
      break;
  }
}

/* 
=============
Listeners
=============
*/
player.forEach((el) => {
  el.addEventListener("click", togglePlayPause);
});
video.addEventListener("timeupdate", videoProgressUpdate);
video.addEventListener("ended", stopVideo);
volume.addEventListener("input", (e) => {
  changeVulumeRange(e.target.value);
});
progress.addEventListener("input", videoProgressUpdate);
playerControlsVolume.addEventListener("click", toggleVolume);
fullScreen.onclick = toggleFullScreen;
document.addEventListener("keyup", keyboardShortcuts);
window.addEventListener("keydown", function (e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});
window.do;
