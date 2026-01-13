/* ===============================
   HAMBURGER MENU (MOBILE)
=============================== */
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("show");
}

/* ===============================
   AUTO TUTUP MENU SAAT LINK DIKLIK
=============================== */
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".menu a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector(".menu").classList.remove("show");
    });
  });
});
