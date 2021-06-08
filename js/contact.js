// let shownContact = false;
window.addEventListener("scroll", () => {
  let navAbout = document.querySelectorAll("nav div span")[4];
  let element = document.querySelector("#contact");
  let position = element.getBoundingClientRect();
  console.log(
    window.scrollY,
    window.innerHeight,
    position.top,
    position.bottom
  );
  // if (
  //   2 * position.top < window.innerHeight &&
  //   position.bottom >= 0 &&
  //   !shownContact
  // ) {
  //   element.style.opacity = 1;
  //   shownContact = true;
  // }
  if (position.top <= 145) {
    console.log(navAbout);
    navAbout.classList.add("activeClass");
  } else {
    navAbout.classList.remove("activeClass");
  }
});
