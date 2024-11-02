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

function searchShinsaNumber(searchString) {
  const resultDiv = document.querySelector("#shina-search-result");
  resultDiv.innerHTML = "";

  if (searchString.length === 0) {
    return;
  }

  // if (searchString.length < 3) {
  //   resultDiv.innerHTML =
  //     "<p>Search text should be longer than 3 characters</p>";
  //   return;
  // }

  const regex = new RegExp(searchString, "i");
  const table = document.querySelector("table.shinsa-numbers tbody");

  const rows = Array.from(table.children).filter((row) =>
    Array.from(row.children).some((cell) => {
      return cell.textContent.match(regex);
    }),
  );

  if (rows.length) {
    const newTable = document.createElement("table");
    rows.forEach((row) => {
      const newRow = row.cloneNode(true);
      newRow.children[0].rowSpan = "1";
      newTable.appendChild(newRow);
    });
    newTable.className = "roster shinsa-numbers";
    resultDiv.appendChild(newTable);
  } else {
    resultDiv.innerHTML = "<p>No match</p>";
  }
}

onload = () => {
  showTab("home");
  addEventListener("resize", () => reactToViewportChange());
  const searchInput = document.querySelector("#shinsa-number-search");
  searchInput.addEventListener("input", (event) => {
    searchShinsaNumber(event.target.value);
  });
};
