'use strict';

function showTab(tabId) {
  const main = document.querySelector('main');
  Array.from(main.children).forEach(elm => {
    if (elm.id === tabId) {
      elm.style.display = 'block';
    } else {
      elm.style.display = 'none'
    }
  })
  const submenus = document.querySelectorAll('nav .submenu');
  submenus.forEach(menu => {
    if (menu.dataset.tabid === tabId) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
}

onload = () => {
  showTab('nov-14')
}
