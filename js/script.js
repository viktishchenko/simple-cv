const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const showMenu = "show-menu";
const video = document.querySelector("video");
const player = document.querySelector(".player");
const playerBtn = document.querySelector(".player__button");
const playerControlsBtn = document.querySelector(".player__controls-btn");
const playerControlsVolume = document.querySelector(".player__controls-volume");
const volume = document.getElementById("volume");
const progress = document.getElementById("progress");
const fullScreen = document.querySelector(".player__controls-fullscreen");
const videoContainer = document.querySelector(".player__container");
const currentYear = (document.querySelector(".current-year").innerHTML =
  new Date().getFullYear());

// Menu
hamburger.addEventListener("click", function () {
  navigation.classList.toggle("show-menu");
  hamburger.classList.toggle("show-btn");
});

navigation.addEventListener("click", (e) => {
  if (navigation.classList.contains("show-menu")) {
    setTimeout(() => {
      navigation.classList.remove("show-menu");
    }, 1000);
    hamburger.classList.remove("show-btn");
  }
});

// Play-Pause
video.addEventListener("click", togglePlayPause);
playerBtn.onclick = togglePlayPause;
playerControlsBtn.onclick = togglePlayPause;

function togglePlayPause() {
  if (video.paused) {
    playerControlsBtn.classList.remove("player__controls-play");
    playerControlsBtn.classList.add("player__controls-pause");
    playerBtn.hidden = true;
    video.play();
  } else {
    playerControlsBtn.classList.remove("player__controls-pause");
    playerControlsBtn.classList.add("player__controls-play");
    playerBtn.hidden = false;
    video.pause();
  }
  if (video.ended) {
    playerBtn.hidden = false;
    playerControlsBtn.classList.add("player__controls-play");
  }
}

// Mute
playerControlsVolume.onclick = toggleMutedVideo;

function toggleMutedVideo() {
  if (video.muted) {
    playerControlsVolume.classList.remove("player__controls-volume_nope");
    playerControlsVolume.classList.add("player__controls-volume_yep");
    video.muted = false;
  } else {
    playerControlsVolume.classList.remove("player__controls-volume_yep");
    playerControlsVolume.classList.add("player__controls-volume_nope");
    video.muted = true;
  }
}

// Sound
progress.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(
    to right,
    #2196f3 0%,
    #2196f3 ${value}%,
    #fff ${value}%,
    #fff 100%
  )`;
});

// Video
volume.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(
    to right,
    #2196f3 0%,
    #2196f3 ${value}%,
    #fff ${value}%,
    #fff 100%
  )`;
  if (volume.value < 10) {
    playerControlsVolume.classList.remove("player__controls-volume_yep");
    playerControlsVolume.classList.add("player__controls-volume_nope");
  } else {
    playerControlsVolume.classList.remove("player__controls-volume_nope");
    playerControlsVolume.classList.add("player__controls-volume_yep");
  }
  video.volume = volume.value / 100;
});

// Fullscreen
fullScreen.onclick = toggleFullScreen;

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
  }
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
}
