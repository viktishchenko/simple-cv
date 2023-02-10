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
