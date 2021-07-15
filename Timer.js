class Timer {
  constructor(formData) {
    this.roundDuration = 0;
    this.breakDuration = 0;
    this.intervalMin = 0;
    this.intervalMax = 0;
    this.singalsNumber = 0;
    this.roundsNumber = 0;
    this.signals = [];
    this.currentTime = { secondsLeft: 0, roundLeft: 0 };
  }
  startTimer = () => {};
  pauseTimer = () => {};
  stopTimer = () => {};
  setData = formData => {};
  playSound = sound => {};
  countDown = () => {};
}
export default Timer;
