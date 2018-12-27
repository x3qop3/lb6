class Timer {
    constructor(countTime,callback) {
      this.starttimer = false;
      this.stoptimer = false;
      this.pausetimer = false;
      this.resettimer = false;
      this.currentTime = 0;
      this.remainedTime = 0;
      this.notification = callback; 
      this.temp = false;
      this.constTime;
      this.check = true;
    }
  
    start() {
      if(!this.starttimer)
      {
        if(this.check == true)
        {
          this.constTime = document.getElementById('time').value;
          this.check = false;
        }
        this.starttimer = true;
        this.resettimer = false;
        this.currentTime = document.getElementById('time').value;

        if((this.remainedTime != 0) && (this.pausetimer == true))
        {
          this.pausetimer = false;
          this.waitTime(this.remainedTime);
        }
        else if(this.stoptimer == true)
        {
          this.stoptimer = false;
          this.starttimer = false;
          this.pausetimer = false;
          this.start();
        }
        else if(this.starttimer == true)
        {
          this.currentTime = document.getElementById('time').value;
          this.waitTime(this.currentTime);
        }/*else if(this.resettimer == true)
        {
          this.resettimer = false;
          this.waitTime(this.constTime);
        }*/
      }
    }
   
    waitTime(currentTime){ 
      if((currentTime >= 0) && (!this.pausetimer) && (this.starttimer) && (!this.stoptimer))
      {
        document.getElementById('sec').value = currentTime;
        currentTime--;
        setTimeout(() => this.waitTime(currentTime), 1000); 
        this.remainedTime = currentTime;    
      }
      else if(currentTime < 0)
      {
        notification.call();
      }
    }

   

    pause() {
      if(this.stoptimer == false && this.resettimer == false)
      {
       this.pausetimer = true;
       this.starttimer = false;
      }
    }
  
    stop() {
      if(this.pausetimer == false && this.resettimer == false)
      {
        this.stoptimer = true;
        this.starttimer = false;
        this.currentTime = 0;
        document.getElementById('sec').value = this.currentTime;
      }
    }
  
    reset() {
      if(this.stoptimer == false && this.pausetimer == false)
      {
      this.starttimer = false;
      this.resettimer = true;
      this.currentTime = this.constTime;
      }
    }
  }

  function w(){}

  function notification()
  {
    let node = document.getElementById("text").value;
    alert(node);
  }

window.onload = function() {  
  const time = new Timer(document.getElementById('time'), notification);
  document.getElementById("start").onclick = () => time.start();
  document.getElementById("pause").onclick = () => time.pause();
  document.getElementById("stop").onclick = () => time.stop();
  document.getElementById("reset").onclick = () => time.reset();
};

