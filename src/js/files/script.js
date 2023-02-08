// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


const cartMenu = document.querySelector(".cart-menu");

if (cartMenu) {
  cartMenu.addEventListener("click", function (e) {
    if (e.target.closest('.cart-menu')) {
      document.documentElement.classList.add("cart-open");
      document.documentElement.classList.add("lock");
      document.documentElement.classList.remove("menu-open");
    }
  });
}

const cartClose = document.querySelector(".cart__close");
if (cartClose) {
  cartClose.addEventListener("click", function (e) {
    if (e.target.closest('.cart__close')) {
      document.documentElement.classList.remove("cart-open");
      document.documentElement.classList.remove("lock");
    }
  });
}

