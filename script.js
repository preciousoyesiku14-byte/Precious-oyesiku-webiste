const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const themeToggle = document.getElementById("themeToggle");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("open");
  menuBtn.textContent = mobileNav.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".mobile-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.textContent =
    document.body.classList.contains("light-mode") ? "☀" : "☾";
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".desktop-nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});