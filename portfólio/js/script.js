function toggleMenu() {
  const menu = document.querySelector('.nav-list')
  const menuItem = document.querySelector('.menuItem')
  const hamburger = document.querySelector('.hamburger')
  const closeIcon = document.querySelector('.closeIcon')
  const menuIcon = document.querySelector('.menuIcon')
  
  if(menu.classList.contains("open")) {
    menu.classList.remove('open');
    closeIcon.style.display = "none"
    menuIcon.style.display = "block"
  } else {
    menu.classList.add('open');
    closeIcon.style.display = "block"
    menuIcon.style.display = "none"
  }
}


hamburger.addEventListener("click", toggleMenu);



