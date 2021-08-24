class Timer {
  constructor({
    roundDuration = 5,
    breakDuration = 3,
    roundsNumber = 2,
    intervalMin = 1,
    intervalMax = 3,
    signalsNumber = 3,
  }) {
    this.roundDuration = roundDuration;
    this.breakDuration = breakDuration;
    this.roundsNumber = roundsNumber;
    this.intervalMin = intervalMin;
    this.intervalMax = intervalMax;
    this.signalsNumber = signalsNumber;
    this.currentTime = {
      roundSecondsLeft: this.roundDuration,
      roundsLeft: this.roundsNumber,
      isRunning: false,
      pause: false,
    };
    this.interval = 0;
  }
  setDataIfFormNotSaved = () => {
    const form = document.querySelector(".settingsForm");
    form.signalsNumber.value = this.signalsNumber;
    form.breakDuration.value = this.breakDuration;
    form.roundDuration.value = this.roundDuration;
    form.roundsNumber.value = this.roundsNumber;
    form.intervalMin.value = this.intervalMin;
    form.intervalMax.value = this.intervalMax;
  };
  toggleButtons = () => {
    const buttonSave = document.querySelector(".buttonSave");
    const buttonStart = document.querySelector(".buttonStart");
    const buttonPause = document.querySelector(".buttonPause");
    if (this.currentTime.isRunning) {
      console.dir(buttonSave);
      buttonSave.disabled = true;
      buttonStart.disabled = true;
      buttonPause.disabled = false;
    }
    if (!this.currentTime.isRunning) {
      buttonSave.disabled = false;
      buttonStart.disabled = false;
      buttonPause.disabled = true;
    }
  };
  startTimer = (e, clock, roundsLeft) => {
    let countingStep = 0.01;
    if (this.interval) return; // if timer is running return
    this.currentTime.isRunning = true;
    this.playSound();
    this.toggleButtons();
    this.setDataIfFormNotSaved();
    this.interval = setInterval(() => {
      if (this.currentTime.roundSecondsLeft <= countingStep) {
        //round ends, 0 not displayed
        if (this.currentTime.roundsLeft > 0) {
          if (this.currentTime.roundsLeft == 1 && this.currentTime.pause == false) {
            this.currentTime.pause = false; //reset pause to be false when starts again
            this.stopTimer(e, clock, roundsLeft);
            return;
          } else {
            this.currentTime.pause = !this.currentTime.pause;
          }
        }
        if (this.currentTime.pause == true) {
          this.currentTime.roundSecondsLeft = this.breakDuration + countingStep; // +1 because decrements before display
          this.currentTime.roundsLeft = this.currentTime.roundsLeft - 1;
        } else {
          this.currentTime.roundSecondsLeft = this.roundDuration + countingStep;
        }
      }

      this.currentTime.roundSecondsLeft =
        this.currentTime.roundSecondsLeft - countingStep;
      this.displayTime(clock, roundsLeft);
    }, 10);
  };
  displayTime = (clock, roundsLeft) => {
    const seconds = Math.floor(this.currentTime.roundSecondsLeft % 60);
    const seconds10 = Math.floor(seconds / 10);
    const seconds1 = seconds % 10;
    const fraction = Math.floor((this.currentTime.roundSecondsLeft * 100) % 100);
    const fraction10 = Math.floor(fraction / 10);
    const fraction1 = fraction % 10;
    const minutes = Math.floor(this.currentTime.roundSecondsLeft / 60);
    const minutes10 = Math.floor(minutes / 10);
    const minutes1 = minutes % 10;
    const time = `${minutes10}${minutes1}:${seconds10}${seconds1}:${fraction10}${fraction1}`;
    clock.textContent = time;
    roundsLeft.textContent = this.currentTime.roundsLeft;
  };
  pauseTimer = () => {
    this.currentTime.isRunning = false;
    clearInterval(this.interval);
    this.interval = 0;
    this.toggleButtons();
  };
  stopTimer = (e, clock, roundsLeft) => {
    this.currentTime.isRunning = false;
    this.currentTime.roundSecondsLeft = this.roundDuration;
    this.currentTime.roundsLeft = this.roundsNumber;
    this.displayTime(clock, roundsLeft);
    clearInterval(this.interval);
    this.interval = 0;
    this.toggleButtons();
  };
  playSound = () => {
    if (this.signalsNumber == 0) return;
    const time = Math.random() * 2000;
    const soundIndex = Math.floor(Math.random() * this.signalsNumber) + 1; // file names starts from 1
    const sound = new Audio(`sounds/${soundIndex}.mp3`);
    console.log(`sounds/${soundIndex}.mp3`);
    if (this.currentTime.isRunning == false) return;
    if (this.currentTime.pause == false) {
      // sound.play();
    }
    setTimeout(() => {
      this.playSound();
    }, time);
  };
  formValidate = () => {
    return this.intervalMin > this.intervalMax;
  };
}
export default Timer;
