console.log('hi');

function stopwatch(elem) {
  var time = 0;
  var interval;
  var offset;

  function update(){
    time += delta();
    var formattedTime = timeFormatter(time);
    //console.log(formattedTime);
    elem.textContent = formattedTime;
  }

  function delta(){
    var now = Date.now();
    var timePassed =  now - offset;
    offset = now;
    return offset;
  }

  function timeFormatter(timeInMilliseconds) {
    var time = new Date(timeInMilliseconds)
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    if (minutes.length < 2 ){
      minutes = '0' + minutes;
    }

    if(seconds.length < 2) {
      seconds = '0' + seconds;
    }

    while (milliseconds.length < 3){
    milliseconds = '0' + milliseconds
    }

    return minutes + ' : ' + seconds + ' . ' + milliseconds
    }


  this.isOn = false;

  this.start = function(){
    if (!this.isOn){
      interval = setInterval(update,10); //10 milliseconds
      offset = Date.now();
      this.isOn = true;
    }
  };

  this.stop = function() {
    if(this.isOn) {
      clearInterval(interval);
      interval = null;
      this.isOn = false;
    }
  };

  this.reset = function(){
    time =0;
  };
}


var watch = new stopwatch();
watch.start();
watch.stop;
