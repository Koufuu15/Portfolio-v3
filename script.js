const langBtn = document.getElementById("l");
const themeBtn = document.getElementById("theme");
const menuBtn = document.getElementById("menu");
const nav = document.getElementById("nav");
const light = document.getElementById("light");

let ja = false;

langBtn.addEventListener("click", () => {
    ja = !ja;

    document.querySelectorAll("[data-en]").forEach(el => {
        el.textContent = ja ? el.dataset.ja : el.dataset.en;
    });

    langBtn.textContent = ja ? "EN" : "JA";
    document.documentElement.lang = ja ? "ja" : "en";
});

// =====================
// Mouse Light
// =====================

document.addEventListener("mousemove", e => {
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
});

// =====================
// Scroll Animation
// =====================

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(".fade").forEach(el => {
    observer.observe(el);
});

// =====================
// Theme
// =====================

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.classList.toggle("dark", savedTheme === "dark");
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
}

themeBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const dark = document.body.classList.contains("dark");

    themeBtn.textContent = dark ? "☀️" : "🌙";

    localStorage.setItem("theme", dark ? "dark" : "light");
});

// =====================
// Mobile Menu
// =====================

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});