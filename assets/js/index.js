const initialize = () => {
  const hamburgerMenu = document.getElementById("show-mobile-nav");
  const closeMobileNavBtn = document.getElementById("close-mobile-nav");
  const mobileNavContainer = document.getElementById("mobile-nav");

  hamburgerMenu.addEventListener("click", (e) => {
    e.preventDefault();
    mobileNavContainer.style.display = "block";
  });
  closeMobileNavBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mobileNavContainer.style.display = "none";
  });
};

(() => {
  initialize();
})();
