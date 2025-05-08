window.addEventListener("DOMContentLoaded", function () {
  emailjs.init("pe_S8stSnrQaz9K8F");

  // Botão do menu mobile
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

  // Scroll nav
  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Formulário de contato
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_ce46rqs", "template_jw2e2xb", this)
        .then(() => {
          document.getElementById("modal-confirmacao").style.display = "flex";
          this.reset();
        })
        .catch((error) => {
          console.error("Erro ao enviar mensagem:", error.text);
          alert("Houve um erro ao enviar sua mensagem.");
        });
    });
  }

  // Formulário de inscrição
  const subscribeForm = document.getElementById("subscribe-form");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_ce46rqs", "template_bwq3mse", this)
        .then(() => {
          document.getElementById("modal-confirmacao").style.display = "flex";
          this.reset();
        })
        .catch((error) => {
          console.error("Erro:", error);
          alert("Erro ao inscrever-se. Tente novamente.");
        });
    });
  }

  // Modal: fechar ao clicar no botão
  const fecharModal = document.getElementById("fechar-modal");
  if (fecharModal) {
    fecharModal.addEventListener("click", function () {
      document.getElementById("modal-confirmacao").style.display = "none";
    });
  }

  // Modal: fechar ao clicar fora
  const modal = document.getElementById("modal-confirmacao");
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
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
