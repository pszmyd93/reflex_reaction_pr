class Timer {
  constructor(formData) {
    this.roundDuration = 5;
    this.breakDuration = 3;
    this.roundsNumber = 2;
    this.intervalMin = 0;
    this.intervalMax = 0;
    this.singalsNumber = 0;
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
    if (this.interval) return; // if timer is running return
    this.currentTime.isRunning = true;
    // this.playSound();
    this.interval = setInterval(() => {
      console.log(this.interval);
      //
      if (this.currentTime.roundSecondsLeft == 0) {
        if (this.currentTime.roundsLeft > 0) {
          this.currentTime.pause = !this.currentTime.pause;
        } else {
          this.currentTime.pause = false;
          this.stopTimer(e, clock);
          return;
        }
        if (this.currentTime.pause == true) {
          this.currentTime.roundSecondsLeft = this.breakDuration;
          this.currentTime.roundsLeft = this.currentTime.roundsLeft - 1;
        } else {
          this.currentTime.roundSecondsLeft = this.roundDuration;
        }
      }
      //
      this.displayTime(clock);
      this.currentTime.roundSecondsLeft = --this.currentTime.roundSecondsLeft;
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
    this.currentTime.roundsLeft = this.roundsNumber;
    this.displayTime(clock);
    clearInterval(this.interval);
    this.interval = 0;
  };
  setData = formData => {};
  playSound = () => {
    let time = Math.random();
    if (this.currentTime.isRunning == false) return;
    if (this.currentTime.pause == false) {
      console.log("graj muzyko");
    }

    setTimeout(() => {
      this.playSound();
    }, 1000);
  };
  countDown = () => {};
}
export default Timer;
