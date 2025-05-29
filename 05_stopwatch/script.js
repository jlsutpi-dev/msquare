const stopwatchTag = document.getElementsByClassName("stopwatch")[0]; // HTMLCollection
const startBtn = document.getElementsByClassName("startBtn")[0]; // HTMLCollection
const pauseBtn = document.getElementsByClassName("pauseBtn")[0]; //HTMLCollection
const continueBtn = document.querySelector(".continueBtn"); // direct tag
const restartBtn = document.querySelectorAll(".restartBtn")[0]; //HTMLCollection

console.log("stop watch tag", stopwatchTag);
console.log("start button tag", startBtn);
console.log("pause button tag", pauseBtn);
console.log("continue button tag", continueBtn);
console.log("restart button tag", restartBtn);

let seconds = 0,
  minutes = 0,
  hours = 0;
let intervalId;

const startTime = () => {
  seconds += 1;
  if (seconds === 60) {
    seconds = 0;

    minutes += 1;
  }
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }
  const secondsText = seconds < 10 ? "0" + seconds : seconds;
  const minutesText = minutes < 10 ? "0" + minutes : minutes;
  const hoursText = hours < 10 ? "0" + hours : hours;
  stopwatchTag.textContent = hoursText + ":" + minutesText + ":" + secondsText;
  console.log(hours, minutes, seconds);
};

startBtn.addEventListener("click", () => {
  intervalId = setInterval(startTime, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalId);
});

continueBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1000);
});

restartBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  seconds = 0;
  minutes = 0;
  hours = 0;
  intervalId = setInterval(startTime, 1000);
});
