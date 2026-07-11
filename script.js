let ja = false;

l.onclick = () => {
    ja = !ja;

    document.querySelectorAll("[data-en]").forEach(e => {
        e.textContent = ja ? e.dataset.ja : e.dataset.en;
    });

    l.textContent = ja ? "EN" : "日本語";
    document.documentElement.lang = ja ? "ja" : "en";
};

document.onmousemove = e => {
    light.style.left = e.clientX + "px";
    light.style.top = e.clientY + "px";
};

new IntersectionObserver(es =>
    es.forEach(x =>
        x.isIntersecting &&
        x.target.classList.add("show")
    )
).observe(document.querySelector(".fade"));

theme.onclick = () => {
    document.body.classList.toggle("dark");
};