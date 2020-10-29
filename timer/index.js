/* steps psuedocode
-> event listener to watch for click on 'start' button
  -> draw a full border around the timer
  -> start counting down the timer
  -> each time the timer counts down, update the border
  -> each time the timer counds down, update the text
  -> if timer reaches 0
    -> reset the border
    -> reset internal timer to get ready for another run
*/

/* what this program does
- displays a timer
- shows an animated border around the timer
*/

class Timer {
  /*
  durationInput, startButton, pauseButton -> DOM elements passed into constructor
  start() - start timer
  pause() - pause timer
  onDurationChange() - user changes timer length
  tick() - every 1 second tick of the timer
  */
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start);
  }

  // using arrow function solves issues of 'this' returning the button element instead of the class object
  start = () => {
    console.log(this);
  };
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
timer.start();
