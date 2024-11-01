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

function openNav() {
  const nav = document.querySelector("nav");
  const header = document.querySelector("#header-container");
  const rect = header.getBoundingClientRect();

  nav.style.display = "block";
  nav.style.top = `${rect.bottom - 1}px`;

  const navSwitch = document.querySelector("#nav-switch");
  const navSwitchImg = document.querySelector("#nav-switch img");
  navSwitchImg.src = "./misc/close.svg";
  navSwitch.onclick = () => closeNav();

  setTimeout(setupCloseNavByClickingOutside, 0);
}

function closeNav() {
  document.querySelector("nav").style.display = "none";
  document.querySelector("#main-div").onclick = undefined;

  const navSwitch = document.querySelector("#nav-switch");
  const navSwitchImg = document.querySelector("#nav-switch img");
  navSwitchImg.src = "./misc/menu.svg";
  navSwitch.onclick = () => openNav();
}

function maybeCloseNav() {
  if (window.innerWidth <= 1023) {
    closeNav();
  }
}

function setupCloseNavByClickingOutside() {
  document.querySelector("main").onclick = () => closeNav();
}

function reactToViewportChange() {
  closeNav();
  if (window.innerWidth <= 1023) {
    document.querySelector("nav-switch").style.display = "block";
  } else {
    document.querySelector("nav").style.display = "block";
    document.querySelector("nav").style.top = "0";
    document.querySelector("nav-switch").style.display = "none";
  }
}

onload = () => {
  showTab("home");
  addEventListener("resize", () => reactToViewportChange());
};
