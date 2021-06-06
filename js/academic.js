let shownAcademic = false;
window.addEventListener("scroll", () => {
  let navAbout = document.querySelectorAll("nav div span")[2];
  let element = document.querySelector("#academic .container");
  let position = element.getBoundingClientRect();
  // console.log(
  //   window.scrollY,
  //   window.innerHeight,
  //   position.top,
  //   position.bottom
  // );
  if (
    2 * position.top < window.innerHeight &&
    position.bottom >= 0 &&
    !shownAcademic
  ) {
    element.style.opacity = 1;
    shownAcademic = true;
  }
  if (position.top <= 145 && position.bottom > 80) {
    navAbout.classList.add("activeClass");
  } else {
    navAbout.classList.remove("activeClass");
  }
});
