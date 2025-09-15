// Abre/fecha menu no mobile
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const menuLinks = document.querySelectorAll(".menu li a");
const sections = document.querySelectorAll("section[id]");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  // Troca ícone e aria-label
  toggle.innerHTML = nav.classList.contains("active")
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
  toggle.setAttribute(
    "aria-label",
    nav.classList.contains("active") ? "Fechar menu" : "Abrir menu"
  );
});

// ===== Fechar menu ao clicar em um link =====
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    toggle.setAttribute("aria-label", "Abrir menu");
  });
});

// ===== Destacar link ativo ao rolar a página =====
window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100; // ajuste para altura do header
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      menuLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
