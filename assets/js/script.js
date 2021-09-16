const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const showMenu = "show-menu";

hamburger.addEventListener("click", function () {
  navigation.classList.toggle("show-menu");
});

document.addEventListener("click", (e) => {
  let items = document.querySelectorAll(".navigation__item");
  for (let item of items) {
    if (e.target === item) {
      document
        .querySelector(".navigation.show-menu")
        .classList.remove(showMenu);
    }
  }
});
