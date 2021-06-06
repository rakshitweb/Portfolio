let toggleCheck = 0;
window.addEventListener("scroll", () => {
  let nav = document.querySelector("nav");
  let navSpan = document.querySelectorAll("nav span");
  if (window.pageYOffset + 20 > nav.offsetHeight && toggleCheck === 0) {
    nav.classList.add("sticky");
    navSpan.forEach((span) => {
      span.classList.add("padding-10");
    });
    toggleCheck = 1;
  } else if (window.pageYOffset + 20 <= nav.offsetHeight) {
    nav.classList.remove("sticky");
    navSpan.forEach((span) => {
      span.classList.remove("padding-10");
    });
    toggleCheck = 0;
  }
});
