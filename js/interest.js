let shownInterest = false;
window.addEventListener("scroll", () => {
  let navAbout = document.querySelectorAll("nav div span")[1];
  let element = document.querySelector("#interest .container");
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
    !shownInterest
  ) {
    element.style.opacity = 1;
    shownInterest = true;
  }
  if (position.top <= 145 && position.bottom > 80) {
    navAbout.classList.add("activeClass");
  } else {
    navAbout.classList.remove("activeClass");
  }
});
