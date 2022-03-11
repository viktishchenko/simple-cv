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
const navbar = document.getElementById("nav");
const hamburger = document.querySelector(".hamburger");
const headerNavigation = document.querySelector(".header__navigation");
const navigationList = document.querySelector(".navigation__list");
const scrollLink = document.querySelectorAll(".scroll-link");
// const showMenu = "show-menu";

hamburger.addEventListener("click", showMobileMenu);

function showMobileMenu() {
  console.log("window.innerWidth", window.innerWidth);

  if (window.innerWidth <= 768) {
    const linksHeight = navigationList.getBoundingClientRect().height;
    const containerHeight = headerNavigation.getBoundingClientRect().height;

    if (containerHeight === 0) {
      headerNavigation.style.height = `${linksHeight}px`;
    } else {
      headerNavigation.style.height = 0;
    }
    scrollLink.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        const ancor = el.getAttribute("href").slice(1);
        const element = document.getElementById(ancor);
        const navHeight = navbar.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        window.scrollTo(0, position + 70);
        headerNavigation.style.height = 0;
      });
    });
  }
}

/* 
=============
Current-Year
=============
*/
const currentYear = (document.querySelector(".current-year").innerHTML =
  new Date().getFullYear());

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
