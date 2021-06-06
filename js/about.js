let shown = false;
window.addEventListener("scroll", () => {
  let navAbout = document.querySelectorAll("nav div span")[0];
  let element = document.querySelector("#about");
  let position = element.getBoundingClientRect();
  // console.log(
  //   window.scrollY,
  //   window.innerHeight,
  //   position.top,
  //   position.bottom
  // );
  if (2 * position.top < window.innerHeight && position.bottom >= 0 && !shown) {
    element.style.opacity = 1;
    shown = true;
  }
  if (position.top <= 45 && position.bottom > 80) {
    navAbout.classList.add("activeClass");
  } else {
    navAbout.classList.remove("activeClass");
  }
});
