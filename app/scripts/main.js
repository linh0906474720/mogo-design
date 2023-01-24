// window.addEventListener("load", function () {
//   const toggle = document.querySelector(".menu-toggle");
//   const menu = document.querySelector(".menu");
//   toggle && toggle.addEventListener("click", handleToggleMenu);
//   function handleToggleMenu(e) {
//     menu && menu.classList.add("is-show");
//   }
//   document.addEventListener("click", handleClickOutside);
//   function handleClickOutside(e) {
//     if (e.target.matches(".menu-toggle") || e.target.matches(".menu, .menu *"))
//       return;
//     menu && menu.classList.remove("is-show");
//   }
// });

const headerToggle = document.querySelector(".header-toggle");
const headerMenu = document.querySelector(".header-menu");
const expandClass = "is-expand";

headerToggle.addEventListener("click", function () {
  headerMenu.classList.add(expandClass);
});

window.addEventListener("click", function (e) {
  if (!headerMenu.contains(e.target) && !e.target.matches(".header-toggle")) {
    headerMenu.classList.remove(expandClass);
  }
});

const wedoToggle = document.querySelector(".wedo-item__chevron");
const wedoItem = document.querySelector(".wedo-item");
const dropdownClass = "is-active";

wedoToggle.addEventListener("click", function () {
  wedoItem.classList.add(dropdownClass);
});

// Slick slider
$(document).ready(function () {
  $(".your-class").slick();
});
