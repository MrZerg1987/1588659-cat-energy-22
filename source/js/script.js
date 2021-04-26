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

const btnBefore = document.querySelector(".example__button--before");
const btnAfter = document.querySelector(".example__button--after");
const imgBefore = document.querySelector(".example__img--before");
const imgAfter = document.querySelector(".example__img--after");

btnBefore.addEventListener("click", function () {
  if (imgBefore.classList.contains("example__img--disabled")) {
    imgBefore.classList.remove("example__img--disabled"),
      imgAfter.classList.add("example__img--disabled");
  }
});

btnAfter.addEventListener("click", function () {
  if (imgAfter.classList.contains("example__img--disabled")) {
    imgAfter.classList.remove("example__img--disabled"),
      imgBefore.classList.add("example__img--disabled");
  }
});

const tabletWidth = 768;
const scale = progress.querySelector(".example__range");
const range = scale.querySelector(".example__input");

if (docWidth >= tabletWidth) {
  range.addEventListener("input", function () {
    imgBefore.style.width = 100 - range.value + "%";
    imgAfter.style.width = range.value + "%";
  });

  btnBefore.addEventListener("click", function () {
    imgBefore.style.width = "100%";
    imgAfter.style.width = "0%";
    range.value = 0;
  });

  btnAfter.addEventListener("click", function () {
    imgBefore.style.width = "0%";
    imgAfter.style.width = "100%";
    range.value = 100;
  });
}
