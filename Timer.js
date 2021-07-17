class Timer {
  constructor(formData) {
    this.roundDuration = 60;
    this.breakDuration = 10;
    this.intervalMin = 0;
    this.intervalMax = 0;
    this.singalsNumber = 0;
    this.roundsNumber = 3;
    this.signals = [];
    this.currentTime = {
      roundSecondsLeft: this.roundDuration,
      breakSecondsLeft: this.breakDuration,
      roundsLeft: this.roundsNumber,
      isRunning: false,
      pause: false,
    };
    this.interval = 0;
  }
  startTimer = (e, clock) => {
    if (this.interval) return;
    this.currentTime.isRunning = true;
    this.interval = setInterval(() => {
      //
      // if (this.currentTime.roundSecondsLeft == 0) {
      //   if (this.currentTime.roundsLeft > 0) {
      //     this.currentTime.roundsLeft = this.currentTime.roundsLeft - 1;
      //     this.currentTime.pause = !this.currentTime.pause;
      //   }
      //   if(this.currentTime.pause == true) {
      //     this.currentTime.roundSecondsLeft = this.breakDuration;
      //   } else {
      //     this.currentTime.roundSecondsLeft = this.roundDuration;
      //   }
      // }
      //
      this.currentTime.roundSecondsLeft = --this.currentTime.roundSecondsLeft;
      this.displayTime(clock);
    }, 1000);
  };
  displayTime = clock => {
    clock.textContent = this.currentTime.roundSecondsLeft;
  };
  pauseTimer = () => {
    this.currentTime.isRunning = false;
    clearInterval(this.interval);
    this.interval = 0;
  };
  stopTimer = (e, clock) => {
    this.currentTime.isRunning = false;
    this.currentTime.roundSecondsLeft = this.roundDuration;
    this.displayTime(clock);
    clearInterval(this.interval);
    this.interval = 0;
  };
  setData = formData => {};
  playSound = sound => {};
  countDown = () => {};
}
export default Timer;
