const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const scrollRevealOption02 = {
  distance: "50px",
  origin: "top",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__image", {
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".about__image", {
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".section__description.text", {
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".about__image.one", {
  distance: "50px",
  origin: "right",
  duration: 1000,
});
ScrollReveal().reveal(".about__image.two", {
  distance: "50px",
  origin: "left",
  duration: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__list li", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});

ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 300,
});
ScrollReveal().reveal(".service__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".section__header", {
  ...scrollRevealOption02,
});

ScrollReveal().reveal(".popular__card", {
  ...scrollRevealOption02,
  interval: 300,
});

ScrollReveal().reveal(".subscribe__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".subscribe__content form", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".faq__item", {
  ...scrollRevealOption,
  interval: 300,
});

ScrollReveal().reveal(".privacy__item", {
  ...scrollRevealOption,
  interval: 300,
});

ScrollReveal().reveal(".terms__item", {
  ...scrollRevealOption,
  interval: 300,
});
