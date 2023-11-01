const header = document.getElementsByClassName("header")[0];
const wolfIcon = document.querySelector("#wolf-icon");
const scrollTrigger = 0;

window.onscroll = function () {
  if (window.scrollY > scrollTrigger || window.pageYOffset > scrollTrigger) {
    header.classList.add("full-opacity");
  } else {
    header.classList.remove("full-opacity");
  }
};

wolfIcon.addEventListener("mouseover", () => {
  wolfIcon.getAttribute("src") === "images/icons8-wolf-dark-48.png"
    ? wolfIcon.setAttribute("src", "images/icons8-wolf-white-48.png")
    : wolfIcon.setAttribute("src", "images/icons8-wolf-dark-48.png");
});

wolfIcon.addEventListener("mouseout", () => {
  wolfIcon.getAttribute("src") === "images/icons8-wolf-white-48.png"
    ? wolfIcon.setAttribute("src", "images/icons8-wolf-dark-48.png")
    : wolfIcon.setAttribute("src", "images/icons8-wolf-white-48.png");
});