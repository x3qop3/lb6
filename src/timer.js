class Timer {
  constructor(inputEl,callback) {
    this.paused = false;
    this.started = false;
    this.startedx2=false;
    this.stopped = true;
    this.currentCount = 0 ;
    this.running = false;
    this.inputEl = inputEl;
    this.callback=callback;
    this.interval = 1000;
    this.intervalx2=500;
    this.maxCount = 0;
    this.inputText = document.getElementById("text");
  }

  start() {
    if (this.stopped) {
      this.started = true;
      this.startedx2=false;
      this.paused = false;
      this.stopped = false;
      this.currentCount = Number(this.inputEl.value);
      this.loop();
      this.running = true;
    }

    this.paused = false;
  }

  startx2(){
    if (this.stopped) {
      this.startedx2=true;
      this.started = false;
      this.paused = false;
      this.stopped = false;
      this.currentCount = Number(this.inputEl.value);
      this.loopx2();
      this.running = true;
    }

    this.paused = false;
  }

  pause() {
    this.paused = true;
  }

  stop() {
    this.paused = false;
    this.started = false;
    this.startedx2=false;
    this.stopped = true;
    this.running = false;
    this.currentCount = 0;
  }

  update(item) {
    document.getElementById("status").innerHTML = item;    
    --this.currentCount;

    if (this.currentCount < 0) {
      this.callback.call();      
      this.stop();
    }
  }

  reset() {
    this.currentCount = Number(this.inputEl.value);

    document.getElementById("status").innerHTML = this.currentCount;
  }

  loop() {
   
    if (!this.stopped) {
      if (!this.paused) {
        this.update(this.currentCount);
      }

      setTimeout(() => this.loop(), this.interval);
    }
  }

  loopx2(){
    
    if (!this.stopped) {
      if (!this.paused) {
        this.update(this.currentCount);
      }

      setTimeout(() => this.loopx2(), this.intervalx2);
    }
  
  }

}


function alertText(){
  let inputText = document.getElementById("text");
  let word = inputText.value;
  alert(word);
}

window.onload = function() {  

  let inputEl = document.getElementById("seconds");
  const lol = new Timer(inputEl,alertText);
  document.getElementById("setup").onclick = () => lol.start();
  document.getElementById("reset").onclick = () => lol.reset();
  document.getElementById("pause").onclick = () => lol.pause();
  document.getElementById("stop").onclick = () => lol.stop();
  document.getElementById("startx2").onclick =() => lol.startx2();
};