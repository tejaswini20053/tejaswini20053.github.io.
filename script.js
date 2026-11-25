/* Portfolio interactions: edit ROLES to change the typing headline. */
const ROLES = ["AI/ML Engineer", "Python Developer", "Data Analyst", "Generative AI Intern"];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

// Typing effect
(function typing() {
  const el = $("#typed");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = ROLES.join(" | "); return; }
  let r = 0, c = 0, del = false;
  (function tick() {
    const word = ROLES[r];
    el.textContent = word.slice(0, c);
    if (!del && c === word.length) { del = true; return setTimeout(tick, 1400); }
    if (del && c === 0) { del = false; r = (r + 1) % ROLES.length; }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 40 : 80);
  })();
})();

// Mobile menu
const burger = $("#burger"), menu = $("#menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
$$("#menu a").forEach(a => a.addEventListener("click", () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); }));

// Scroll progress, sticky nav, back-to-top
const progress = $("#progress"), nav = $("#nav"), top = $("#top");
addEventListener("scroll", () => {
  const h = document.documentElement;
  progress.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
  nav.classList.toggle("scrolled", scrollY > 30);
  top.classList.toggle("show", scrollY > 600);
}, { passive: true });
top.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

// Reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12 });
$$(".reveal").forEach(el => io.observe(el));

// Active nav link
const links = $$("#menu a[href^='#']");
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => spy.observe(s));

// Project filters
$("#filters").addEventListener("click", e => {
  const b = e.target.closest(".chip"); if (!b) return;
  $$(".chip").forEach(c => c.classList.toggle("active", c === b));
  $$(".proj").forEach(p => {
    const show = b.dataset.f === "all" || p.dataset.cat.split(" ").includes(b.dataset.f);
    p.classList.toggle("hide", !show);
  });
});

// Contact form: opens the visitor's email app addressed to Tejaswini (no backend needed)
$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const n = $("#fname").value.trim(), m = $("#femail").value.trim(), g = $("#fmsg").value.trim(), note = $("#note");
  if (!n || !/^\S+@\S+\.\S+$/.test(m) || !g) { note.textContent = "Please fill in your name, a valid email and a message."; return; }
  const subject = encodeURIComponent("Portfolio enquiry from " + n);
  const body = encodeURIComponent(g + "\n\nFrom: " + n + " (" + m + ")");
  location.href = `mailto:tejaswinikm08@gmail.com?subject=${subject}&body=${body}`;
  note.textContent = "Opening your email app to send the message.";
});

$("#year").textContent = new Date().getFullYear();
