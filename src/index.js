import timer from './timer.js';
import './styles.css';


function component() {
  var element = document.createElement('div');

  let timeField = document.createElement('input');
  timeField.setAttribute('type', 'number');
  timeField.setAttribute('id', 'time');
  
  let notificationField = document.createElement('input');
  notificationField.setAttribute('id', 'text');

  let currentTimeField = document.createElement('div');
  currentTimeField.setAttribute('id', 'currentTime');

  let buttonBlock = document.createElement('div');
  buttonBlock.setAttribute('class','startButton');

  let startButton=document.createElement('button');
  startButton.setAttribute('id', "start");
  startButton.innerHTML = "START";

  let resetButton=document.createElement('button');
  resetButton.setAttribute('id', 'reset');
  resetButton.innerHTML = "RESET";

  let pauseButton=document.createElement('button');
  pauseButton.setAttribute('id', 'pause');
  pauseButton.innerHTML = "PAUSE";

  let stopButton=document.createElement('button');
  stopButton.setAttribute('id', 'stop');
  stopButton.innerHTML = "STOP";

  let timerBlock = document.createElement('div');
  timerBlock.setAttribute('class', 'timerView');

  let secTimer = document.createElement('textarea');
  secTimer.setAttribute('id', 'sec');
  secTimer.setAttribute('readonly', 'true');

  /*let minTimer = document.createElement('textarea');
  minTimer.setAttribute('id', 'min');

  let hourTimer = document.createElement('textarea');
  hourTimer.setAttribute('id', 'hour');*/


  element.appendChild(timeField);
  element.appendChild(notificationField);
  element.appendChild(buttonBlock);
  element.appendChild(currentTimeField);
  buttonBlock.appendChild(startButton);
  buttonBlock.appendChild(resetButton);
  buttonBlock.appendChild(pauseButton);
  buttonBlock.appendChild(stopButton);
  element.appendChild(timerBlock);
  timerBlock.appendChild(secTimer);
  /*timerBlock.appendChild(minTimer);
  timerBlock.appendChild(hourTimer);*/
 
  return element;
}

let element = component();
document.body.appendChild(element);
