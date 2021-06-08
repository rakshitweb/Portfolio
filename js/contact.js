let shownContact = false;
window.addEventListener("scroll", () => {
  let navAbout = document.querySelectorAll("nav div span")[4];
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
    !shownContact
  ) {
    element.style.opacity = 1;
    shownContact = true;
  }
  if (position.top <= 145 && position.bottom > 80) {
    navAbout.classList.add("activeClass");
  } else {
    navAbout.classList.remove("activeClass");
  }
});
