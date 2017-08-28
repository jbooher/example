var hamburgerOpenIcon = document.getElementById("hamburger-open");
var hamburgerCloseIcon = document.getElementById("hamburger-close");
var hamburgerMenu = document.getElementById("hamburger-menu");
var pageMainMenu = document.getElementById("page-main-menu");

if(hamburgerOpenIcon) {
  hamburgerOpenIcon.addEventListener("click", function() {
    hamburgerMenu.classList.toggle("open");
    pageMainMenu.classList.toggle("menu-open");
  });  
}

if(hamburgerCloseIcon) {
  hamburgerCloseIcon.addEventListener("click", function() {
    hamburgerMenu.classList.toggle("open");
    pageMainMenu.classList.toggle("menu-open");    
  });
}
