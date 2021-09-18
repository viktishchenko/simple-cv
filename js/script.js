const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const showMenu = "show-menu";

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
