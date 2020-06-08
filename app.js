const BtnUp = document.getElementById("Up");
const BtnDown = document.getElementById("Down");
const BtnLeft = document.getElementById("Left");
const BtnRight = document.getElementById("Right");
const P_3Child = document.getElementById("P-3-ChildWrapper");
const PageWrapper = document.getElementById("PageWrapper");
let ind_V = 0;
let ind_H = 0;
let flag = 0;

function Pause() {
  setTimeout(() => {
    if (flag === 4) {
      flag = 0;
    }
  }, 1000);
  flag = 4;
}

const PageUp = () => {
  if (flag === 0) {
    Pause();
    if (ind_V === 0 || ind_V > 6) {
      ind_V = 5;
    } else {
      ind_V = ind_V - 1;
    }
    PageWrapper.style.transform = `translate3d(0px, -${ind_V * 100}%, 0px)`;
  }
};

const PageDown = () => {
  if (flag === 0) {
    Pause();
    if (ind_V === 5) {
      ind_V = 0;
    } else {
      ind_V = ind_V + 1;
    }
    PageWrapper.style.transform = `translate3d(0px, -${ind_V * 100}%, 0px)`;
  }
};

const PageRight = () => {
  if (ind_H === 3) {
    ind_H = 0;
  } else {
    ind_H = ind_H + 1;
  }
  P_3Child.style.transform = `translate3d(-${ind_H * 25}%, 0px, 0px)`;
};

const PageLeft = () => {
  if (ind_H === 0 || ind_H > 3) {
    ind_H = 3;
  } else {
    ind_H = ind_H - 1;
  }
  P_3Child.style.transform = `translate3d(-${ind_H * 25}%, 0px, 0px)`;
};

BtnUp.addEventListener("click", () => {
  PageUp();
});
BtnDown.addEventListener("click", () => {
  PageDown();
});

BtnLeft.addEventListener("click", () => {
  PageLeft();
});
BtnRight.addEventListener("click", () => {
  PageRight();
});

document.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    PageDown();
  } else if (e.deltaY < 0) {
    PageUp();
  }
});

const delta = 6;
let startX;
let startY;

document.addEventListener("mousedown", function (event) {
  startX = event.pageX;
  startY = event.pageY;
});

document.addEventListener("mouseup", function (event) {
  const diffX = Math.abs(event.pageX - startX);
  const diffY = Math.abs(event.pageY - startY);

  if (diffX < delta && diffY < delta) {
    // Click!
  } else {
    console.log(diffX, diffY);
  }
});
