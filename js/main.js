const menuList = document.querySelector(".menu-list");
const menuIcon = document.querySelector(".menu-icon");

let menuShowing = false;

menuIcon.addEventListener("click", () => {
  if (menuShowing) menuList.classList.remove("open");
  else menuList.classList.add("open");
  menuShowing = !menuShowing;
});
