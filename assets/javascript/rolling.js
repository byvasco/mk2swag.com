const rollingTop = document.querySelector('.rolling .top');
const rollingBottom = document.querySelector('.rolling .bottom');

const topPosition = parseInt(window.getComputedStyle(rollingTop).backgroundPositionX);
const bottomPosition = parseInt(window.getComputedStyle(rollingBottom).backgroundPositionX);

let i = 0;

setInterval(() => {
  i += 0.25;

  const newTopPosition = topPosition - i;
  const newBottomPosition = topPosition + i;

  rollingTop.style.backgroundPositionX = `${newTopPosition}px`;
  rollingBottom.style.backgroundPositionX = `${newBottomPosition}px`;
}, 30);