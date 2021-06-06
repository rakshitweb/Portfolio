const paraAllLi = document.querySelectorAll("header div li");
let str = [
  ["A_WEB_DEVELOPER."],
  ["KNOWS_MACHINE_LEARNING."],
  ["SINGLE_POINT_FOR_EVERY_PROBLEM."],
  ["LEARNER_&_CODER."],
];

let write = (ch, count) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let t = paraAllLi[count].innerText;
      if (ch == " ") {
        t = `${t} `;
      } else {
        t = `${t}${ch}`;
      }
      paraAllLi[count].innerText = t;
      resolve();
    }, 100);
  });
};
let delayAnimation = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};
let animate = async () => {
  await delayAnimation(3200);
  let count = 0;
  while (true) {
    for (let arr of str) {
      for (let chs of arr) {
        for (let ch of chs) {
          await write(ch, count);
        }
      }
      count++;
    }
    break;
  }
};
animate();
let count = 0;
let left = document.querySelectorAll(".arrow .arrl");
let right = document.querySelectorAll(".arrow .arrr");

let arrowAnimation = () => {
  count++;
  switch (count) {
    case 1:
      left[count - 1].classList.add("ani");
      right[count - 1].classList.add("ani");
      break;
    case 2:
      left[count - 1].classList.add("ani");
      right[count - 1].classList.add("ani");
      break;
    case 3:
      left[count - 1].classList.add("ani");
      right[count - 1].classList.add("ani");
      break;
    case 4:
      left[count - 1].classList.add("ani");
      right[count - 1].classList.add("ani");
      break;
    case 8:
      count = 0;
      for (i = 0; i < 4; i++) {
        left[i].classList.remove("ani");
        right[i].classList.remove("ani");
      }
      break;
  }
  counter();
};
let counter = () => {
  setTimeout(arrowAnimation, 500);
};
counter();
