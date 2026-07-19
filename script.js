document.getElementById("year").textContent = new Date().getFullYear();

// Nav toggle (mobile)
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Nav scrolled shadow
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
function updateActiveNav() {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navAnchors.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
}
window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();

// Scroll reveal with stagger
const revealTargets = document.querySelectorAll(
  ".section-inner > *, .project, .tl-item, .edu-card, .contact-card, .phone-frame, .skill-block"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add("is-visible");
        }, Number(delay));
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

// Add stagger delay to grid siblings
document.querySelectorAll(".skills-row, .project-grid, .contact-grid, .edu-row, .phone-gallery").forEach((grid) => {
  Array.from(grid.children).forEach((child, i) => {
    child.dataset.delay = i * 80;
  });
});

revealTargets.forEach((el) => observer.observe(el));
