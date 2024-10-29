"use strict";

function showTab(tabId) {
  Array.from(document.querySelectorAll(".menu-item-1")).forEach((elm) => {
    if (elm.dataset.tabid === tabId) {
      elm.style.background = "#ece7f9";
    } else {
      elm.style.background = "inherit";
    }
  });

  Array.from(document.querySelectorAll(".submenu")).forEach((elm) => {
    if (elm.dataset.tabid === tabId) {
      elm.style.background = "#ece7f9";
    } else {
      elm.style.background = "inherit";
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
