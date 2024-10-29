"use strict";

function showTab(tabId) {
  Array.from(document.querySelectorAll(".menu-container")).forEach((elm) => {
    if (elm.dataset.tabid === tabId) {
      elm.classList.add("selected");
    } else {
      elm.classList.remove("selected");
    }
  });

  const main = document.querySelector("main");
  Array.from(main.children).forEach((elm) => {
    if (elm.id === tabId) {
      elm.style.display = "block";
    } else {
      elm.style.display = "none";
    }
  });
  const submenus = document.querySelectorAll("nav .submenu");
  submenus.forEach((menu) => {
    if (menu.dataset.tabid === tabId) {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
  window.scrollTo(0, 0);
}

onload = () => {
  showTab("home");
};
