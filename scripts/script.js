document.addEventListener("DOMContentLoaded", function() {
  let burger = document.querySelector('.burger');
  let naviLi = document.querySelector('.ul-nav');
  let isMenuOpen = false;

  function toggleMenu() {
    if (!isMenuOpen) {
      naviLi.style.transform = "translateX(0)";
      isMenuOpen = true;
    } else {
      naviLi.style.transform = "translateX(100vw)";
      isMenuOpen = false;
    }
  }

  // Add event listener initially for larger screens
  burger.addEventListener("click", toggleMenu);

  // Add event listener when window resizes to handle mobile view
  window.addEventListener("resize", function() {
    if (window.matchMedia("(max-width: 428px)").matches) {
      burger.addEventListener("click", toggleMenu);
    } else {
      burger.removeEventListener("click", toggleMenu);
      naviLi.style.transform = "translateX(0)";
      isMenuOpen = false;
    }
  });
});
