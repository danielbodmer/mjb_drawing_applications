class Timer {
  /*
  durationInput, startButton, pauseButton -> DOM elements passed into constructor
  start() - start timer
  pause() - pause timer
  onDurationChange() - user changes timer length
  tick() - every 1 second tick of the timer
  */
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  // using arrow function solves issues of 'this' returning the button element instead of the class object
  start = () => {
    if (this.onStart) this.onStart(this.timeRemaining);
    this.tick();
    this.interval = setInterval(this.tick, 50);
  };
  pause = () => {
    clearInterval(this.interval);
  };
  tick = () => {
    // this.timeRemaining <= 0 ? this.pause() : (this.timeRemaining -= 1);
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) this.onComplete();
    } else {
      this.timeRemaining = this.timeRemaining - 0.05;
      if (this.onTick) this.onTick(this.timeRemaining);
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
