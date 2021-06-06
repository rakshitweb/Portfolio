let shownProject = false;
window.addEventListener("scroll", () => {
  let navAbout = document.querySelectorAll("nav div span")[3];
  let element = document.querySelector("#project .container");
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
    !shownProject
  ) {
    element.style.opacity = 1;
    shownProject = true;
  }
  if (position.top <= 145 && position.bottom > 80) {
    navAbout.classList.add("activeClass");
  } else {
    navAbout.classList.remove("activeClass");
  }
});
