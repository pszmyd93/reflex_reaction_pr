import Timer from "./Timer.js";
const form = document.querySelector(".settingsForm");
let TimerLogic = new Timer({});
const timer = document.querySelector(".timer");
const buttonStart = timer.querySelector(".buttonStart");
const buttonPause = timer.querySelector(".buttonPause");
const buttonStop = timer.querySelector(".buttonStop");
const clock = timer.querySelector(".clock");

TimerLogic.displayTime(clock);

form.addEventListener("submit", e => {
  e.preventDefault();
  if (TimerLogic.currentTime.isRunning == true) return;
  const valid = TimerLogic.formValidate();
  const data = {
    signalsNumber: parseInt(form.signalsNumber.value) || 3,
    roundDuration: parseInt(form.roundDuration.value) || 5,
    breakDuration: parseInt(form.breakDuration.value) || 3,
    roundsNumber: parseInt(form.roundsNumber.value) || 2,
    intervalMin: parseInt(form.intervalMin.value) || 1,
    intervalMax: parseInt(form.intervalMax.value) || 3,
  };
  TimerLogic = new Timer(data);
  TimerLogic.displayTime(clock);
  TimerLogic.toggleButtons();
});
buttonStart.addEventListener("click", e => TimerLogic.startTimer(e, clock));
buttonPause.addEventListener("click", e => TimerLogic.pauseTimer(e));
buttonStop.addEventListener("click", e => TimerLogic.stopTimer(e, clock));
