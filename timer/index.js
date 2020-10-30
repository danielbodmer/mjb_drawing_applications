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
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('timer started!');
  },
  onTick() {
    console.log('timer ticked!');
  },
  onComplete() {
    console.log('timer complete');
  },
});
