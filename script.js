// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".mob-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Navbar background on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(8, 12, 20, 0.97)";
  } else {
    navbar.style.background = "rgba(8, 12, 20, 0.85)";
  }
});

// Fade-in sections on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".skill-card, .project-card, .timeline-item, .contact-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition =
      "opacity 0.5s ease, transform 0.5s ease, border-color 0.25s, background 0.25s";
    observer.observe(el);
  });
