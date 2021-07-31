import Timer from "./Timer.js";
const TimerLogic = new Timer();
const timer = document.querySelector(".timer");
const buttonStart = timer.querySelector(".buttonStart");
const buttonPause = timer.querySelector(".buttonPause");
const buttonStop = timer.querySelector(".buttonStop");
const clock = timer.querySelector(".clock");

TimerLogic.displayTime(clock);

buttonStart.addEventListener("click", e => TimerLogic.startTimer(e, clock));
buttonPause.addEventListener("click", e => TimerLogic.pauseTimer(e));
buttonStop.addEventListener("click", e => TimerLogic.stopTimer(e, clock));
