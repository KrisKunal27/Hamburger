const menuBt = document.querySelector(".menu-btn");
let menuOpen = false;
menuBt.addEventListener("click", () => {
  if (!menuOpen) {
    menuBt.classList.add("open");
    menuOpen = true;
  } else {
    menuBt.classList.remove("open");
    menuOpen = false;
  }
});
