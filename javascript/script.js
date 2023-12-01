// To Top Page Button Trigger
const toTopBtn = document.querySelector(".toTopPage");
const scrollBtnDisplay = function () {
  if (window.scrollY >= 1) {
    toTopBtn.style.display = "inline-block";
  } else if (window.scrollY == 0) {
    toTopBtn.style.display = "none";
  }
};
window.addEventListener("scroll", scrollBtnDisplay);

// Hamburger Menu Trigger
const input = document.querySelector('header nav .menu input');
const navbar = document.querySelector('header nav ul');

input.addEventListener('click', function() {
    navbar.classList.toggle('active');
});