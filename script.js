const NAV_BTN_ICON = document.querySelector("#nav-btn");
const NAV_LIST = document.querySelector("#nav-list");

// Show/hide navigation on mobile if button is clicked
NAV_BUTTON.onclick = function () {
    NAV_LIST.classList.toggle("show-navigation");
  }
  
  // Hide the navigation if a link is clicked
  NAV_LIST.onclick = function () {
    if (NAV_LIST.classList.contains("show-navigation")) {
      NAV_LIST.classList.remove("show-navigation");
    }
  }

  window.onscroll = function() {
    if (window.scrollY > 100) { // Muestra el botón cuando se desplaza más de 100px
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza suavemente al inicio
}