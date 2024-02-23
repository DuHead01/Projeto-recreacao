const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const sectionFoto = document.querySelector('.section-foto');


hamburger.addEventListener("click", () => nav.classList.toggle("active"));
hamburger.addEventListener("click", () => hamburger.classList.toggle("active"));
hamburger.addEventListener("click", () => sectionFoto.classList.toggle("active"));





