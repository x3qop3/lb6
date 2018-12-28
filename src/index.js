import timer from './timer.js';
import './styles.css';

function component() {
  var element = document.createElement('div');
  let headerText=document.createElement('h1');
  /*   
  поле ввода секунд  
  */  
  let showTime=document.createElement('div');
  let timerSec= document.createElement('label');
  let getTime=document.createElement('input'); 
  
  /*   
  поле ввода текста  
  */   
  let text= document.createElement('label');
  let getText=document.createElement('input');
  
  /*
  кнопки 
  */
  let buttonBlock=document.createElement('div');
  let startButton=document.createElement('button');
  let resetButton=document.createElement('button');
  let pauseButton=document.createElement('button');
  let stopButton=document.createElement('button');
  let startx2Button=document.createElement('button');
  



  /*
  установка аттрибутов для поля ввода секунд
  */
  element.setAttribute('class','parent')
  getTime.setAttribute('type','number');
  getTime.setAttribute('placeholder','Введите секунды...');
  getTime.setAttribute('id','seconds');
  getText.setAttribute('placeholder','Введите текст...')
  getText.setAttribute('id','text')
  showTime.setAttribute('id','status');
  showTime.innerHTML=0;

  headerText.innerHTML='MyTimer';
  
  buttonBlock.setAttribute('class','buttonBlock');

  startButton.setAttribute('id','setup'); 
  startButton.setAttribute('class','button');
  startButton.innerHTML='Start';

  resetButton.setAttribute('id','reset');
  resetButton.setAttribute('class','button');
  resetButton.innerHTML='Reset';

  pauseButton.setAttribute('id','pause');
  pauseButton.setAttribute('class','button');
  pauseButton.innerHTML='Pause';

  stopButton.setAttribute('id','stop');
  stopButton.setAttribute('class','button');
  stopButton.innerHTML='Stop';
  
  startx2Button.setAttribute('id','startx2');
  startx2Button.setAttribute('class','button');
  startx2Button.innerHTML='startx2';




  timerSec.setAttribute('for','seconds');

  element.appendChild(headerText);
  element.appendChild(timerSec);  
  timerSec.appendChild(getTime);
  text.appendChild(getText);   
  element.appendChild(text);
  element.appendChild(buttonBlock); 
  buttonBlock.appendChild(startButton); 
  buttonBlock.appendChild(resetButton);
  buttonBlock.appendChild(pauseButton);
  buttonBlock.appendChild(stopButton); 
  buttonBlock.appendChild(startx2Button);
  element.appendChild(showTime);
  
  return element;
}

let element = component();
document.body.appendChild(element);
