const navToggle = document.querySelector(".main-nav__toggle");
const navList = document.querySelector(".main-nav__list");

navToggle.addEventListener("click", function () {
  if (navToggle.classList.contains("main-nav__toggle--open")) {
    navList.classList.remove("main-nav__list--close"),
      navList.classList.add("main-nav__list--open"),
      navToggle.classList.remove("main-nav__toggle--open"),
      navToggle.classList.add("main-nav__toggle--close");
  } else if (navToggle.classList.contains("main-nav__toggle--close")) {
    navList.classList.remove("main-nav__list--open"),
      navList.classList.add("main-nav__list--close"),
      navToggle.classList.remove("main-nav__toggle--close"),
      navToggle.classList.add("main-nav__toggle--open");
  }
});
