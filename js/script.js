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

// Menu
hamburger.addEventListener("click", function () {
  navigation.classList.toggle("show-menu");
});

navigation.addEventListener("click", (e) => {
  if (navigation.classList.contains("show-menu")) {
    setTimeout(() => {
      navigation.classList.remove("show-menu");
    }, 1000);
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

console.log("Самооценка:");
console.log("вёрстка валидная +10 → ( https://validator.w3.org/)");
console.log(
  "вёрстка семантическая +20 → (семантические теги HTML5: article, aside, figure, figcaption, footer, header, main, nav, section заголовки:h1, h2, h3"
);
console.log("для оформления СV используются css-стили +10");
console.log(
  "контент размещается в блоке, который горизонтально центрируется на странице. +10"
);
console.log("вёрстка адаптивная +10");
console.log("есть адаптивное бургер-меню +10");
console.log(
  "на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10"
);
console.log(
  "контакты для связи и перечень навыков оформлены в виде списка ul > li +10"
);
console.log(
  "CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10"
);
console.log(
  "CV содержит пример вашего кода. Для подсветки кода может использоваться js-библиотека, highlight.js +10"
);
console.log(
  "CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10"
);
console.log("CV выполнено на английском языке +10");
console.log(
  "выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10"
);
console.log("есть видеорезюме автора CV на английском языке 😪 +0");
console.log(
  "дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10"
);
console.log("______________________");
console.log("ИТОГО: 150 баллов");
